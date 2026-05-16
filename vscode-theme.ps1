# =============================================================================
# vscode-theme.ps1 — VSCode UI theme switcher (PowerShell edition)
#
# Installation:
#   New-Item -ItemType Directory -Force "$HOME\.vscode-themes"
#   Copy-Item bedrock-themes\*.json "$HOME\.vscode-themes\"
#   # Dot-source to make the function available in your session:
#   . .\vscode-theme.ps1
#   # Or add to your $PROFILE for permanent access:
#   Add-Content $PROFILE ". C:\path\to\vscode-theme.ps1"
#
# Usage:
#   vscode-theme list
#   vscode-theme status
#   vscode-theme set                       # interactive picker
#   vscode-theme set navy-orange [-Global]
#   vscode-theme reset           [-Global]
#   vscode-theme version
#   vscode-theme help
# =============================================================================

Set-StrictMode -Version Latest

# ── constants ─────────────────────────────────────────────────────────────────

$script:VT_THEME_DIR    = Join-Path $HOME '.vscode-themes'
$script:VT_VERSION      = '__VERSION__'   # populated from ./VERSION during install; left as literal in git
$script:VT_KEY_MANAGED  = '__vscode_theme_managed'
$script:VT_KEY_BACKUP   = '__vscode_theme_backup'

# ── color helpers ─────────────────────────────────────────────────────────────

function _VT-Ok   ([string]$msg) { Write-Host "  " -NoNewline; Write-Host "v" -ForegroundColor Green  -NoNewline; Write-Host "  $msg" }
function _VT-Info ([string]$msg) { Write-Host "  " -NoNewline; Write-Host "i" -ForegroundColor Cyan   -NoNewline; Write-Host "  $msg" }
function _VT-Warn ([string]$msg) { Write-Host "  " -NoNewline; Write-Host "!" -ForegroundColor Yellow -NoNewline; Write-Host "  $msg" }
function _VT-Err  ([string]$msg) { Write-Host "  " -NoNewline; Write-Host "x" -ForegroundColor Red    -NoNewline; Write-Host "  $msg" }
function _VT-Dim  ([string]$msg) { Write-Host "  $msg" -ForegroundColor DarkGray }
function _VT-Head ([string]$msg) { Write-Host ""; Write-Host $msg -ForegroundColor White }

# ── truecolor helpers (used by `list` to render each theme in its own colors) ─

# True if the host/terminal claims 24-bit color support. PS 7+ sets
# $Host.UI.SupportsVirtualTerminal; Windows Terminal sets $env:WT_SESSION.
function _VT-SupportsTrueColor {
    if ($Host.UI.SupportsVirtualTerminal) { return $true }
    if ($env:WT_SESSION) { return $true }
    return $false
}

# "#RRGGBB[AA]" -> @(R, G, B) as integers. Returns $null on malformed input.
function _VT-HexToRGB ([string]$hex) {
    if (-not $hex) { return $null }
    $clean = $hex.TrimStart('#')
    if ($clean.Length -lt 6) { return $null }
    return @(
        [Convert]::ToInt32($clean.Substring(0, 2), 16),
        [Convert]::ToInt32($clean.Substring(2, 2), 16),
        [Convert]::ToInt32($clean.Substring(4, 2), 16)
    )
}

# Read a single color key from a theme JSON file. Returns the hex string
# or $null if the key is missing.
function _VT-ReadColor ([string]$file, [string]$key) {
    $obj = _VT-ReadJson $file
    if ($null -eq $obj) { return $null }
    $customizations = $obj.PSObject.Properties['workbench.colorCustomizations']
    if ($null -eq $customizations) { return $null }
    $colorKey = $customizations.Value.PSObject.Properties[$key]
    if ($null -eq $colorKey) { return $null }
    return $colorKey.Value
}

# Build (but don't write) a single theme row: caller-supplied prefix, then a
# colored status-bar-style block + accent hint. Falls back to a dim plain row
# when truecolor isn't available. Returns the formatted string.
function _VT-FormatBlock ([string]$prefix, [string]$name, [string]$bgHex, [string]$fgHex, [string]$accentHex) {
    $padded = ' ' + $name.PadRight(20) + ' '
    $bg = _VT-HexToRGB $bgHex
    $fg = _VT-HexToRGB $fgHex
    $ac = _VT-HexToRGB $accentHex
    $esc = [char]27
    $reset = "$esc[0m"
    if ((_VT-SupportsTrueColor) -and $bg -and $fg) {
        $block = "$esc[38;2;$($fg[0]);$($fg[1]);$($fg[2])m$esc[48;2;$($bg[0]);$($bg[1]);$($bg[2])m${padded}${reset}"
        $accentPart = if ($ac) { "  $esc[90maccent${reset} $esc[38;2;$($ac[0]);$($ac[1]);$($ac[2])m${accentHex}${reset}" } else { '' }
        return "${prefix}${block}${accentPart}"
    } else {
        if ($accentHex) { return "${prefix}$esc[90m* $name  (accent $accentHex)${reset}" }
        return                  "${prefix}$esc[90m* $name${reset}"
    }
}

# Print one theme's row using the same 2-space indent as the rest of the tool.
function _VT-ColoredBlock ([string]$name, [string]$bgHex, [string]$fgHex, [string]$accentHex) {
    Write-Host (_VT-FormatBlock '  ' $name $bgHex $fgHex $accentHex)
}

# ── path resolution ───────────────────────────────────────────────────────────

function _VT-GlobalSettingsPath {
    $candidates = @(
        Join-Path $env:APPDATA   'Code\User\settings.json'          # Windows standard
        Join-Path $HOME          'AppData\Roaming\Code\User\settings.json'  # fallback
        Join-Path $HOME          '.config\Code\User\settings.json'  # WSL / Linux
        Join-Path $HOME          'Library\Application Support\Code\User\settings.json'  # macOS
    )
    foreach ($p in $candidates) {
        if (Test-Path $p -PathType Leaf) { return $p }
    }
    # File doesn't exist yet — return the most likely path to create it
    if ($env:APPDATA) {
        return Join-Path $env:APPDATA 'Code\User\settings.json'
    }
    return Join-Path $HOME 'AppData\Roaming\Code\User\settings.json'
}

function _VT-WorkspaceSettingsPath {
    # Note: we deliberately stop at $HOME — VSCode installs its own ~/.vscode/
    # (argv.json, cli/, extensions/) which is *not* a workspace folder, and
    # VSCode never reads settings.json from there. Walking into it would
    # silently write to a file VSCode ignores.
    $dir = Get-Location | Select-Object -ExpandProperty Path
    while ($dir -and $dir -ne [System.IO.Path]::GetPathRoot($dir) -and $dir -ne $HOME) {
        $vscodeDir = Join-Path $dir '.vscode'
        if (Test-Path $vscodeDir -PathType Container) {
            return Join-Path $vscodeDir 'settings.json'
        }
        $dir = Split-Path $dir -Parent
    }
    # No workspace .vscode found — use current directory
    return Join-Path (Get-Location) '.vscode\settings.json'
}

# ── JSON helpers ──────────────────────────────────────────────────────────────

function _VT-ReadJson ([string]$path) {
    if (-not (Test-Path $path -PathType Leaf)) { return $null }
    try {
        $raw = Get-Content $path -Raw -Encoding UTF8
        return $raw | ConvertFrom-Json
    } catch {
        return $null
    }
}

function _VT-WriteJson ([string]$path, [object]$data) {
    $dir = Split-Path $path -Parent
    if ($dir -and -not (Test-Path $dir)) {
        New-Item -ItemType Directory -Force $dir | Out-Null
    }
    # Depth 10 ensures nested colorCustomizations objects are fully serialized
    $data | ConvertTo-Json -Depth 10 | Set-Content $path -Encoding UTF8
}

function _VT-GetManagedTheme ([string]$settingsPath) {
    if (-not (Test-Path $settingsPath -PathType Leaf)) { return '' }
    $obj = _VT-ReadJson $settingsPath
    if ($null -eq $obj) { return '' }
    $val = $obj.PSObject.Properties[$script:VT_KEY_MANAGED]
    if ($null -eq $val) { return '' }
    return $val.Value
}

function _VT-HasBackup ([string]$settingsPath) {
    if (-not (Test-Path $settingsPath -PathType Leaf)) { return $false }
    $obj = _VT-ReadJson $settingsPath
    if ($null -eq $obj) { return $false }
    return $null -ne $obj.PSObject.Properties[$script:VT_KEY_BACKUP]
}

# ── core operations ───────────────────────────────────────────────────────────

# Returns: 'ok:fresh' | 'ok:backed-up' | 'ok:updated' | 'error'
function _VT-MergeSettings ([string]$themeFile, [string]$settingsFile, [string]$themeName) {
    $theme = _VT-ReadJson $themeFile
    if ($null -eq $theme) {
        _VT-Err "Could not read theme file: $themeFile"
        return 'error'
    }

    $fileExisted = Test-Path $settingsFile -PathType Leaf
    $existing    = if ($fileExisted) { _VT-ReadJson $settingsFile } else { $null }
    if ($null -eq $existing) { $existing = [PSCustomObject]@{} }

    $alreadyManaged   = $null -ne $existing.PSObject.Properties[$script:VT_KEY_MANAGED]
    $hasExistingColors = $null -ne $existing.PSObject.Properties['workbench.colorCustomizations']

    $status = if (-not $fileExisted)    { 'ok:fresh'
    } elseif ($alreadyManaged)          { 'ok:updated'
    } elseif ($hasExistingColors)       { 'ok:backed-up'
    } else                              { 'ok:fresh' }

    # Back up existing colorCustomizations if not managed by us
    if ($status -eq 'ok:backed-up') {
        $existing | Add-Member -NotePropertyName $script:VT_KEY_BACKUP `
                               -NotePropertyValue $existing.'workbench.colorCustomizations' `
                               -Force
    }

    # Apply the theme's colorCustomizations
    $themeColors = $theme.'workbench.colorCustomizations'
    if ($null -ne $existing.PSObject.Properties['workbench.colorCustomizations']) {
        $existing.'workbench.colorCustomizations' = $themeColors
    } else {
        $existing | Add-Member -NotePropertyName 'workbench.colorCustomizations' `
                               -NotePropertyValue $themeColors -Force
    }

    # Stamp the managed marker
    if ($null -ne $existing.PSObject.Properties[$script:VT_KEY_MANAGED]) {
        $existing.$($script:VT_KEY_MANAGED) = $themeName
    } else {
        $existing | Add-Member -NotePropertyName $script:VT_KEY_MANAGED `
                               -NotePropertyValue $themeName -Force
    }

    _VT-WriteJson $settingsFile $existing
    return $status
}

# Returns: 'ok:restored' | 'ok:removed' | 'ok:empty' | 'error'
function _VT-RemoveManagedKeys ([string]$settingsFile) {
    if (-not (Test-Path $settingsFile -PathType Leaf)) { return 'ok:removed' }

    $data = _VT-ReadJson $settingsFile
    if ($null -eq $data) { return 'error' }

    $backup = $null
    if ($null -ne $data.PSObject.Properties[$script:VT_KEY_BACKUP]) {
        $backup = $data.$($script:VT_KEY_BACKUP)
        $data.PSObject.Properties.Remove($script:VT_KEY_BACKUP)
    }
    $data.PSObject.Properties.Remove($script:VT_KEY_MANAGED)
    $data.PSObject.Properties.Remove('workbench.colorCustomizations')

    if ($null -ne $backup) {
        $data | Add-Member -NotePropertyName 'workbench.colorCustomizations' `
                           -NotePropertyValue $backup -Force
        _VT-WriteJson $settingsFile $data
        return 'ok:restored'
    }

    # Check if any properties remain
    $remaining = @($data.PSObject.Properties).Count
    if ($remaining -eq 0) {
        Remove-Item $settingsFile -Force
        return 'ok:empty'
    }

    _VT-WriteJson $settingsFile $data
    return 'ok:removed'
}

# ── subcommands ───────────────────────────────────────────────────────────────

function _VT-CmdList {
    _VT-Head 'Available themes'
    if (-not (Test-Path $script:VT_THEME_DIR -PathType Container)) {
        _VT-Warn "Theme directory not found: $script:VT_THEME_DIR"
        _VT-Dim  "Create it and place <name>.json files inside."
        return
    }
    $files = Get-ChildItem $script:VT_THEME_DIR -Filter '*.json' -File
    if ($files.Count -eq 0) {
        _VT-Warn "No theme files found in $script:VT_THEME_DIR"
        return
    }
    foreach ($f in $files) {
        $bg = _VT-ReadColor $f.FullName 'statusBar.background'
        $fg = _VT-ReadColor $f.FullName 'statusBar.foreground'
        $ac = _VT-ReadColor $f.FullName 'activityBar.foreground'
        _VT-ColoredBlock $f.BaseName $bg $fg $ac
    }
}

function _VT-CmdStatus {
    _VT-Head 'VSCode theme status'

    $globalPath  = _VT-GlobalSettingsPath
    $globalTheme = _VT-GetManagedTheme $globalPath

    Write-Host ""
    Write-Host "  Global" -ForegroundColor White
    _VT-Dim "  Path: $globalPath"
    if ($globalTheme) {
        Write-Host "  " -NoNewline
        Write-Host "v" -ForegroundColor Green -NoNewline
        Write-Host "  Theme: " -NoNewline
        Write-Host $globalTheme -ForegroundColor Cyan -NoNewline
        Write-Host "  (managed)"
        if (_VT-HasBackup $globalPath) {
            _VT-Dim "  Backup: pre-existing colorCustomizations saved in __vscode_theme_backup"
        }
    } else {
        _VT-Dim "Theme: (none / not managed)"
    }

    Write-Host ""
    Write-Host "  Workspace" -ForegroundColor White
    $wsPath  = _VT-WorkspaceSettingsPath
    _VT-Dim "  Path: $wsPath"
    if (Test-Path $wsPath -PathType Leaf) {
        $wsTheme = _VT-GetManagedTheme $wsPath
        if ($wsTheme) {
            Write-Host "  " -NoNewline
            Write-Host "v" -ForegroundColor Green -NoNewline
            Write-Host "  Theme: " -NoNewline
            Write-Host $wsTheme -ForegroundColor Cyan -NoNewline
            Write-Host "  (managed)"
            if (_VT-HasBackup $wsPath) {
                _VT-Dim "  Backup: pre-existing colorCustomizations saved in __vscode_theme_backup"
            }
        } else {
            _VT-Dim "Theme: (exists but not managed by vscode-theme)"
        }
    } else {
        _VT-Dim "Theme: (none - falls back to global)"
    }
    Write-Host ""
}

function _VT-CmdSetInteractive ([bool]$isGlobal) {
    $settingsFile = if ($isGlobal) { _VT-GlobalSettingsPath } else { _VT-WorkspaceSettingsPath }
    $scope        = if ($isGlobal) { 'global' }               else { 'workspace' }

    if (-not (Test-Path $script:VT_THEME_DIR -PathType Container)) {
        _VT-Err "Theme directory not found: $script:VT_THEME_DIR"
        return
    }
    $files = @(Get-ChildItem $script:VT_THEME_DIR -Filter '*.json' -File)
    if ($files.Count -eq 0) {
        _VT-Err "No theme files found in $script:VT_THEME_DIR"
        return
    }
    $themes  = @($files | ForEach-Object { $_.BaseName })
    $bgs     = @($files | ForEach-Object { _VT-ReadColor $_.FullName 'statusBar.background' })
    $fgs     = @($files | ForEach-Object { _VT-ReadColor $_.FullName 'statusBar.foreground' })
    $accents = @($files | ForEach-Object { _VT-ReadColor $_.FullName 'activityBar.foreground' })
    $count   = $themes.Count

    # Some hosts (e.g. Windows PowerShell ISE) don't support [Console]::ReadKey.
    try {
        [Console]::TreatControlCAsInput | Out-Null
    } catch {
        _VT-Err "Interactive picker is not supported in this host."
        _VT-Dim "Pass a theme name explicitly, e.g.: vscode-theme set $($themes[0])"
        return
    }

    # Start on the currently-managed theme if possible, else the first one.
    $current = _VT-GetManagedTheme $settingsFile
    $idx = 0
    if ($current) {
        for ($i = 0; $i -lt $count; $i++) {
            if ($themes[$i] -eq $current) { $idx = $i; break }
        }
    }

    _VT-Head "Select a theme for $scope"
    _VT-Dim "Up/Down or j/k to navigate * Enter to confirm * Esc or q to cancel"
    Write-Host ""

    $settingsDir = Split-Path $settingsFile -Parent
    if ($settingsDir -and -not (Test-Path $settingsDir)) {
        New-Item -ItemType Directory -Force $settingsDir | Out-Null
    }

    # Byte-exact snapshot so cancel restores whatever was there (or deletes it).
    $existed  = Test-Path $settingsFile -PathType Leaf
    $snapshot = if ($existed) { [System.IO.File]::ReadAllText($settingsFile) } else { $null }

    # Viewport: when the theme list is taller than the terminal, render only a
    # window of $bodyHeight rows that always contains $idx, with up/down hint
    # lines indicating how many themes are off-screen.
    $termH = try { [Console]::WindowHeight } catch { 24 }
    if ($termH -le 0) { $termH = 24 }
    $vh = $termH - 6   # 3 header lines + 2 indicator lines + 1 prompt slot
    if ($vh -lt 3) { $vh = 3 }
    $bodyHeight    = [Math]::Min($count, $vh)
    $showScroll    = $count -gt $bodyHeight
    $linesPerFrame = if ($showScroll) { $bodyHeight + 2 } else { $bodyHeight }

    # Anchor $top so the initial $idx is inside the visible window.
    $top = 0
    if ($idx -ge $top + $bodyHeight) {
        $top = $idx - $bodyHeight + 1
    }
    if (($count -gt $bodyHeight) -and ($top -gt $count - $bodyHeight)) {
        $top = $count - $bodyHeight
    }
    if ($top -lt 0) { $top = 0 }

    # Apply the starting preview so VSCode reflects the highlighted row.
    _VT-MergeSettings (Join-Path $script:VT_THEME_DIR "$($themes[$idx]).json") $settingsFile $themes[$idx] | Out-Null

    $esc        = [char]27
    $cancelled  = $false
    $first      = $true
    $prevTreat  = [Console]::TreatControlCAsInput
    [Console]::TreatControlCAsInput = $true

    try {
        while ($true) {
            if (-not $first) {
                Write-Host "$esc[${linesPerFrame}A$esc[0J" -NoNewline
            }
            $first = $false

            if ($showScroll) {
                if ($top -gt 0) {
                    Write-Host "  $esc[90m^ $top more above$esc[0m"
                } else {
                    Write-Host ''
                }
            }

            $end = $top + $bodyHeight
            for ($i = $top; $i -lt $end; $i++) {
                $rowPrefix = if ($i -eq $idx) { "  $esc[36m>$esc[0m " } else { '    ' }
                Write-Host (_VT-FormatBlock $rowPrefix $themes[$i] $bgs[$i] $fgs[$i] $accents[$i])
            }

            if ($showScroll) {
                $below = $count - $end
                if ($below -gt 0) {
                    Write-Host "  $esc[90mv $below more below$esc[0m"
                } else {
                    Write-Host ''
                }
            }

            $key = [Console]::ReadKey($true)

            # Ctrl-C: honoured as cancel.
            if ((($key.Modifiers -band [ConsoleModifiers]::Control) -ne 0) `
                -and ($key.Key -eq [ConsoleKey]::C)) {
                $cancelled = $true
                break
            }

            $doBreak = $false
            switch ($key.Key) {
                ([ConsoleKey]::UpArrow)   { if ($idx -gt 0)          { $idx-- } }
                ([ConsoleKey]::DownArrow) { if ($idx -lt $count - 1) { $idx++ } }
                ([ConsoleKey]::Enter)     { $doBreak = $true }
                ([ConsoleKey]::Escape)    { $cancelled = $true; $doBreak = $true }
                default {
                    switch ([string]$key.KeyChar) {
                        'k' { if ($idx -gt 0)          { $idx-- } }
                        'K' { if ($idx -gt 0)          { $idx-- } }
                        'j' { if ($idx -lt $count - 1) { $idx++ } }
                        'J' { if ($idx -lt $count - 1) { $idx++ } }
                        'q' { $cancelled = $true; $doBreak = $true }
                        'Q' { $cancelled = $true; $doBreak = $true }
                    }
                }
            }
            if ($doBreak) { break }

            # Scroll the viewport just enough to keep $idx visible.
            if ($idx -lt $top)                { $top = $idx }
            if ($idx -ge $top + $bodyHeight)  { $top = $idx - $bodyHeight + 1 }
            if ($top -lt 0) { $top = 0 }
            if (($count -gt $bodyHeight) -and ($top -gt $count - $bodyHeight)) {
                $top = $count - $bodyHeight
            }

            _VT-MergeSettings (Join-Path $script:VT_THEME_DIR "$($themes[$idx]).json") $settingsFile $themes[$idx] | Out-Null
        }
    } finally {
        [Console]::TreatControlCAsInput = $prevTreat
    }

    Write-Host ""

    if ($cancelled) {
        if ($existed) {
            [System.IO.File]::WriteAllText($settingsFile, $snapshot)
        } elseif (Test-Path $settingsFile -PathType Leaf) {
            Remove-Item $settingsFile -Force
        }
        _VT-Info "Cancelled. Reverted to previous $scope state."
        Write-Host ""
        return
    }

    Write-Host "  " -NoNewline
    Write-Host "v" -ForegroundColor Green -NoNewline
    Write-Host "  Theme " -NoNewline
    Write-Host $themes[$idx] -ForegroundColor Cyan -NoNewline
    Write-Host " applied to $scope."
    _VT-Dim "Reload VSCode window if colors didn't update (Ctrl+Shift+P -> Reload Window)."
    Write-Host ""
}

function _VT-CmdSet ([string]$themeName, [bool]$isGlobal) {
    if (-not $themeName) {
        _VT-Err "Usage: vscode-theme set <theme-name> [-Global]"
        _VT-CmdList
        return
    }

    $themeFile = Join-Path $script:VT_THEME_DIR "$themeName.json"
    if (-not (Test-Path $themeFile -PathType Leaf)) {
        _VT-Err "Theme not found: $themeName"
        _VT-Dim "Expected: $themeFile"
        _VT-CmdList
        return
    }

    $settingsFile = if ($isGlobal) { _VT-GlobalSettingsPath } else { _VT-WorkspaceSettingsPath }
    $scope        = if ($isGlobal) { 'global' }               else { 'workspace' }

    _VT-Head "Applying theme: $themeName  ->  $scope"

    $result = _VT-MergeSettings $themeFile $settingsFile $themeName

    switch ($result) {
        'ok:fresh' {
            Write-Host "  " -NoNewline
            Write-Host "v" -ForegroundColor Green -NoNewline
            Write-Host "  Theme " -NoNewline
            Write-Host $themeName -ForegroundColor Cyan -NoNewline
            Write-Host " applied to $scope."
            _VT-Dim "settings.json created."
        }
        'ok:backed-up' {
            Write-Host "  " -NoNewline
            Write-Host "v" -ForegroundColor Green -NoNewline
            Write-Host "  Theme " -NoNewline
            Write-Host $themeName -ForegroundColor Cyan -NoNewline
            Write-Host " applied to $scope."
            _VT-Info "Existing color customizations backed up inside settings.json (__vscode_theme_backup)."
        }
        'ok:updated' {
            Write-Host "  " -NoNewline
            Write-Host "v" -ForegroundColor Green -NoNewline
            Write-Host "  Theme switched to " -NoNewline
            Write-Host $themeName -ForegroundColor Cyan -NoNewline
            Write-Host " ($scope)."
        }
        default {
            _VT-Err "Failed to apply theme."
            return
        }
    }
    _VT-Dim "Reload VSCode window to see changes (Ctrl+Shift+P -> Reload Window)."
    Write-Host ""
}

function _VT-CmdReset ([bool]$isGlobal) {
    $settingsFile = if ($isGlobal) { _VT-GlobalSettingsPath } else { _VT-WorkspaceSettingsPath }
    $scope        = if ($isGlobal) { 'global' }               else { 'workspace' }

    _VT-Head "Resetting $scope theme"

    if (-not (Test-Path $settingsFile -PathType Leaf)) {
        _VT-Warn "No settings file found at:"
        _VT-Dim  "  $settingsFile"
        if (-not $isGlobal) {
            _VT-Info "Workspace has no settings - design follows global settings."
        }
        Write-Host ""
        return
    }

    $currentTheme = _VT-GetManagedTheme $settingsFile
    if (-not $currentTheme) {
        _VT-Warn "No managed theme found in $scope settings. Nothing to reset."
        Write-Host ""
        return
    }

    $result = _VT-RemoveManagedKeys $settingsFile

    switch ($result) {
        'ok:restored' {
            _VT-Ok "Reverted $scope to the color configuration that existed before."
            _VT-Dim "(Previous colorCustomizations restored from __vscode_theme_backup.)"
        }
        'ok:removed' {
            _VT-Ok "Reverted to default VSCode design."
            _VT-Dim "(Color customizations removed; other settings preserved.)"
            if (-not $isGlobal) { _VT-ShowGlobalFallback }
        }
        'ok:empty' {
            _VT-Ok "Reverted to default VSCode design."
            _VT-Dim "(settings.json had no other settings and was removed.)"
            if (-not $isGlobal) { _VT-ShowGlobalFallback }
        }
        default {
            _VT-Err "Unexpected result from reset. Please check settings.json manually."
            return
        }
    }
    _VT-Dim "Reload VSCode window to see changes (Ctrl+Shift+P -> Reload Window)."
    Write-Host ""
}

function _VT-ShowGlobalFallback {
    $globalPath  = _VT-GlobalSettingsPath
    $globalTheme = _VT-GetManagedTheme $globalPath
    if ($globalTheme) {
        Write-Host "  " -NoNewline
        Write-Host "i" -ForegroundColor Cyan -NoNewline
        Write-Host "  Workspace will now follow the global theme: " -NoNewline
        Write-Host $globalTheme -ForegroundColor Cyan
    } else {
        _VT-Info "Workspace will now follow the global VSCode settings."
    }
}

function _VT-CmdVersion {
    Write-Host "vscode-theme" -ForegroundColor White -NoNewline
    Write-Host " version " -NoNewline
    Write-Host $script:VT_VERSION -ForegroundColor Cyan
}

function _VT-CmdHelp {
    Write-Host ""
    _VT-CmdVersion
    Write-Host ""
    Write-Host "  USAGE" -ForegroundColor White
    Write-Host "    vscode-theme <command> [arguments]"
    Write-Host ""
    Write-Host "  COMMANDS" -ForegroundColor White
    Write-Host "    " -NoNewline; Write-Host "list" -ForegroundColor Cyan
    Write-Host "        List all available theme names from the theme directory."
    Write-Host ""
    Write-Host "    " -NoNewline; Write-Host "status" -ForegroundColor Cyan
    Write-Host "        Show the currently applied theme for both global and workspace"
    Write-Host "        settings, including whether a pre-existing backup is stored."
    Write-Host ""
    Write-Host "    " -NoNewline; Write-Host "set [theme-name] [-Global]" -ForegroundColor Cyan
    Write-Host "        Apply a theme by name (the JSON filename without .json)."
    Write-Host "        Defaults to workspace scope. Use -Global for global scope."
    Write-Host "        If colorCustomizations already exist and were not set by this"
    Write-Host "        tool, they are backed up inside settings.json before overwriting."
    Write-Host ""
    Write-Host "        Omit <theme-name> to open an interactive picker:"
    Write-Host "          Up/Down or j/k to navigate (theme applies live on each step)"
    Write-Host "          Enter          to confirm"
    Write-Host "          Esc or q       to cancel and revert to the previous state"
    Write-Host ""
    Write-Host "    " -NoNewline; Write-Host "reset [-Global]" -ForegroundColor Cyan
    Write-Host "        Remove the applied theme from workspace (default) or global"
    Write-Host "        settings. If a backup exists it is restored automatically."
    Write-Host "        If no backup exists the colorCustomizations are deleted and"
    Write-Host "        the workspace falls back to global settings."
    Write-Host ""
    Write-Host "    " -NoNewline; Write-Host "help" -ForegroundColor Cyan
    Write-Host "        Show this help message."
    Write-Host ""
    Write-Host "    " -NoNewline; Write-Host "version" -ForegroundColor Cyan
    Write-Host "        Show the current version of vscode-theme."
    Write-Host ""
    Write-Host "  OPTIONS" -ForegroundColor White
    Write-Host "    -Global    Target global VSCode settings instead of workspace"
    Write-Host ""
    Write-Host "  THEME FILES" -ForegroundColor White
    Write-Host "    Place <theme-name>.json files in:"
    Write-Host "    $script:VT_THEME_DIR" -ForegroundColor DarkGray
    Write-Host ""
    Write-Host "  EXAMPLES" -ForegroundColor White
    Write-Host "    vscode-theme list"
    Write-Host "    vscode-theme set                            # interactive picker"
    Write-Host "    vscode-theme set -Global                    # picker, global scope"
    Write-Host "    vscode-theme set navy-orange"
    Write-Host "    vscode-theme set squidink-yellow -Global"
    Write-Host "    vscode-theme status"
    Write-Host "    vscode-theme reset"
    Write-Host "    vscode-theme reset -Global"
    Write-Host ""
}

# ── entry point ───────────────────────────────────────────────────────────────

function vscode-theme {
    param(
        [Parameter(Position=0)]
        [string]$Command = '',

        [Parameter(Position=1)]
        [string]$ThemeName = '',

        [Alias('g')]
        [switch]$Global
    )

    $isGlobal = $Global.IsPresent

    switch ($Command.ToLower()) {
        'list'    { _VT-CmdList }
        'status'  { _VT-CmdStatus }
        'set'     {
            if (-not $ThemeName) {
                _VT-CmdSetInteractive $isGlobal
            } else {
                _VT-CmdSet $ThemeName $isGlobal
            }
        }
        'reset'   { _VT-CmdReset $isGlobal }
        'version' { _VT-CmdVersion }
        { $_ -in '--version', '-v' } { _VT-CmdVersion }
        { $_ -in '', 'help', '--help', '-h' } { _VT-CmdHelp }
        default {
            _VT-Err "Unknown command: $Command"
            _VT-CmdHelp
        }
    }
}
