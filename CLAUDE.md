# CLAUDE.md

Shell/PowerShell command that applies `workbench.colorCustomizations` from JSON files in [.vscode-themes/](.vscode-themes/) to workspace or global VSCode settings, with automatic backup/restore.

[README.md](README.md) has the full install/update flow, usage tables, and theme previews — consult it before explaining install or usage to the user.

## Theme authoring — the base-theme-passthrough gotcha

`workbench.colorCustomizations` is an **override layer, not a full theme**. Any key not explicitly set falls through to the user's currently-active base theme. If a user has a dark base theme and applies one of our light themes, every unset UI color stays dark → invisible text on light background, and vice versa.

**Every theme must ship ~190+ explicit overrides** to be base-theme-agnostic. The four original themes (`navy-orange`, `squidink-yellow`, `bedrock-teal`, `dark-ember`) still have the old 52-key minimal set and will break under a light base theme — harden them the same way if touched. The newer themes (everything else in [.vscode-themes/](.vscode-themes/)) are the reference layout for what "complete" looks like.

Minimum categories every theme must cover:

- **Globals** — `foreground`, `descriptionForeground`, `disabledForeground`, `icon.foreground`, `errorForeground`, `focusBorder`, `selection.background`
- **Core surfaces** — `titleBar.*`, `activityBar.*`, `sideBar.*`, `editor.*`, `editorGroupHeader.*`, `tab.*` (including `hoverBackground`, `activeBorder`, `unfocusedActiveBorderTop`), `panel.*`, `panelTitle.*`, `statusBar.*`
- **Terminal** — full ANSI palette. `terminal.ansiBrightBlack` in particular: PowerShell's `DarkGray` writes through it, so omitting it makes the theme switcher's own status messages invisible on light themes.
- **Forms** — `input.*`, `dropdown.*`, `button.*` (primary + secondary), `checkbox.*`, `inputValidation.*`
- **Lists** — `list.activeSelectionBackground/Foreground`, `inactiveSelectionBackground/Foreground`, `hoverBackground/Foreground`, `focusBackground/Foreground`, `highlightForeground`, `dropBackground`, `inactiveFocusBackground`
- **Widgets** — `editorWidget.*`, `editorSuggestWidget.*`, `editorHoverWidget.*`
- **Panels** — `notifications.*`, `notificationCenterHeader.*`, `menu.*`, `breadcrumb.*`, `breadcrumbPicker.background`
- **Markdown/text** — `textBlockQuote.*`, `textCodeBlock.background`, `textLink.*`, `textPreformat.foreground`, `textSeparator.foreground`
- **Settings editor (easy to miss)** — `settings.*` (`headerForeground`, `dropdownForeground/Background/Border`, `checkboxForeground/Background/Border`, `textInputForeground/Background/Border`, `numberInputForeground/Background/Border`, `modifiedItemIndicator`, `rowHoverBackground`, `focusedRowBackground/Border`, `headerBorder`, `sashBorder`, `settingsHeaderHoverForeground`), `keybindingTable.*`. `settings.headerForeground` is the single most commonly forgotten key — it colors both the big "Commonly Used" heading **and** individual setting titles like "Font Size", "Format On Save". Skip it and the whole Settings page ghosts out.
- **Quick picker** — `quickInput.*`, `quickInputTitle.background`, `pickerGroup.foreground/border`
- **Misc** — `peekView.*`, `gitDecoration.*`, `scrollbarSlider.*`, `badge.*`, `editorGroup.border`, `editorIndentGuide.*`, `editorBracketMatch.*`
- **Chat / Claude Code chips** — `chat.requestBackground`, `chat.requestBorder`, `chat.slashCommandBackground/Foreground`, `chat.avatarBackground/Foreground`, `chat.editedFileForeground`, `symbolIcon.fileForeground`, `symbolIcon.folderForeground`. Claude Code's `@file` reference chips fall through to VSCode's default light-theme blue-on-near-white when these keys are missing — invisible on warm/cream light themes. `chat.slashCommandBackground/Foreground` is the pair that drives the chip itself; use a solid `button.secondaryBackground`-style tone with primary `foreground` text, not an alpha tint over `editor.background` (alpha tints don't give enough contrast on light themes).

## Contrast targets (WCAG AA)

Verify before shipping a theme:
- Text on background: ≥ 4.5 : 1
- UI components (icons, borders, accent-on-bg, git decorations): ≥ 3.0 : 1
- Intentionally-dimmed but still readable (`disabledForeground`, inactive line numbers): ≥ 2.5 : 1

VSCode's own defaults leave `editorLineNumber.foreground` and `activityBar.inactiveForeground` at ~1.5–2.5 : 1 on purpose — don't "fix" those to chase 3 : 1, it just adds visual noise. Follow the same dim convention.

Quick validation — drop a hex pair into a WCAG formula in Python:

```python
def lum(h):
    h = h.lstrip('#')[:6]
    r,g,b = [int(h[i:i+2],16)/255 for i in (0,2,4)]
    f = lambda v: v/12.92 if v<=0.03928 else ((v+0.055)/1.055)**2.4
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
def contrast(a,b):
    la,lb = lum(a),lum(b); return (max(la,lb)+0.05)/(min(la,lb)+0.05)
```

Always validate visibility after meaningful color edits before claiming the theme works.

## Directory convention — two different paths

- [.vscode-themes/](.vscode-themes/) in the repo → the **source** JSONs, checked into git.
- `~/.vscode-themes/` on the user's machine → where the scripts read from at runtime.

Installation copies repo → home. Both scripts hard-code `$HOME/.vscode-themes` (or `$env:APPDATA`-equivalent path resolution). Don't conflate them.

## Shell flag convention — do not harmonize

- bash/zsh: `--global` or `-g`
- PowerShell: `-Global` or `-g` (case-insensitive)

Double-dash `--global` is **not valid PowerShell parameter syntax**. Users get cross-shell parity via the shared `-g` short form. Do not "fix" PowerShell to accept `--global`.

## Branding

General-purpose VSCode UI switcher. **No Bedrock / AWS framing** in README, JSONs, mockups, or scripts. The theme named `bedrock-teal` is kept only because the name describes the color's origin; strip any other AWS / Bedrock references that creep in (title bar text, status bar badges, code samples, etc.).

## Runtime dependencies

- [vscode-theme.sh](vscode-theme.sh) — requires `python3` or `python` on `PATH` for JSON merging. Mention this if adding features that extend the merge logic.
- [vscode-theme.ps1](vscode-theme.ps1) — no external dependencies; uses built-in `ConvertFrom-Json` / `ConvertTo-Json` with `-Depth 10` (shallower depth truncates nested `colorCustomizations`).
- [vscode-theme.ps1](vscode-theme.ps1) runs under `Set-StrictMode -Version Latest`. Accessing a missing property throws — you **must** go through `$obj.PSObject.Properties[$key]` with a `$null -ne` check before reading `.Value`, not direct dot access like `$obj.$key`. Every JSON read in the script follows this pattern; preserve it.

## The `__VERSION__` placeholder — do not hardcode

Both scripts carry a literal `__VERSION__` token (`VSCODE_THEME_VERSION="__VERSION__"` / `$script:VT_VERSION = '__VERSION__'`). The install steps in the README substitute it with the contents of [VERSION](VERSION) into the *installed* copy at `~/.vscode-themes/`, then revert the repo copy so `git status` stays clean. Never replace the placeholder with a real version in the committed scripts — it breaks the install flow's invariant that the working tree is unchanged after install, and makes [VERSION](VERSION) no longer the single source of truth. To bump the version, edit [VERSION](VERSION) only.

## Idempotency markers inside settings.json

The tool writes two sentinel keys into the target `settings.json`:

- `__vscode_theme_managed`: name of the currently-applied theme (presence = tool owns this file's `workbench.colorCustomizations`).
- `__vscode_theme_backup`: the pre-existing `workbench.colorCustomizations` object if one was present when the tool first took over — restored on `reset`.

Any feature that touches the merge/reset logic must preserve this contract, or existing users' backups will be silently lost.
