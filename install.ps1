# Install/update vscode-theme. Wraps the manual copy-paste block in README.md
# so the same flow can be run as `.\install.ps1`. Rerun any time to update —
# every step is idempotent (file copies overwrite, profile append is guarded).

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot

# 1. Create the theme directory
New-Item -ItemType Directory -Force "$HOME\.vscode-themes" | Out-Null

# 2. Copy the bundled theme JSONs
Copy-Item .vscode-themes\*.json "$HOME\.vscode-themes\" -Force

# 3. Bake the current version into vscode-theme.ps1, copy it to the install
#    location, then revert the repo copy back to its __VERSION__ placeholder
#    so the working tree stays clean.
$version  = (Get-Content VERSION -Raw).Trim()
$original = Get-Content vscode-theme.ps1 -Raw
($original -replace '__VERSION__', $version) | Set-Content vscode-theme.ps1 -NoNewline
Copy-Item vscode-theme.ps1 "$HOME\.vscode-themes\vscode-theme.ps1" -Force
Set-Content vscode-theme.ps1 -Value $original -NoNewline

# 4. Unblock the installed script (required if downloaded from the internet)
Unblock-File "$HOME\.vscode-themes\vscode-theme.ps1"

# 5. Add to PowerShell profile — idempotent: only append if the line isn't
#    already there, so rerunning as an update is safe. Note: do NOT use
#    `New-Item -ItemType File -Force $PROFILE` to ensure the file exists —
#    -Force overwrites existing files and would wipe the user's profile.
$line = ". `"$HOME\.vscode-themes\vscode-theme.ps1`""
New-Item -ItemType Directory -Force (Split-Path $PROFILE) | Out-Null
if (-not (Test-Path -LiteralPath $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE | Out-Null
}
if (-not ((Get-Content $PROFILE -ErrorAction SilentlyContinue) -contains $line)) {
    Add-Content $PROFILE $line
    Write-Host "Added '$line' to $PROFILE"
} else {
    Write-Host "Source line already present in $PROFILE - left unchanged"
}

Write-Host ""
Write-Host "vscode-theme $version installed/updated."
Write-Host "Reload your profile to pick it up:"
Write-Host "  . `$PROFILE"
