# VSCode Theme Simulator

A web app for authoring and previewing VSCode color themes in the format used
by this repo's [.vscode-themes/](../.vscode-themes/) directory.

- Renders a full VSCode UI mockup (title bar, activity bar, sidebar with file
  tree + git decorations, editor with selection/find/word highlights/hover and
  suggest widgets, bottom panel with ANSI terminal, status bar).
- Additional views: Settings page, Chat (Claude Code chips), Command Palette,
  Context Menu, Peek View, Notifications toast.
- Click any component to edit its color keys via a popover with live color
  picker and WCAG contrast badge.
- **All keys** tab exposes every one of the repo's 205 distinct color keys
  (searchable, filterable) so nothing is unreachable.
- Toggle **base theme fallback** (Dark / Light) to see how unset keys would
  look against VSCode's default themes — exposes the gotcha documented in
  [../CLAUDE.md](../CLAUDE.md).
- Export as a downloadable JSON file matching the repo's
  `{"workbench.colorCustomizations": { … }}` shape, sorted into the standard
  category order.

## Running

```
pnpm install
pnpm dev
```

Open http://localhost:5173. The theme selector auto-lists the JSONs from
`../.vscode-themes/` (copied into the dev server by a Vite plugin).

Other scripts:

- `pnpm typecheck` — `tsc --noEmit`
- `pnpm test` — vitest against the contrast helpers
- `pnpm build` — produce a static `dist/` (open with `pnpm dlx serve dist`)

## Adding your exported theme to the repo

1. In the simulator, click **Export JSON…**, name the file, download.
2. Move the JSON into `../.vscode-themes/`.
3. Apply locally with `../vscode-theme.sh <name>` (or `../vscode-theme.ps1 -Name <name>`).
4. Commit it along with any README preview entries.

## Key coverage

The simulator manages the union of all 205 keys used by existing themes in
this repo plus `terminal.ansiOrange`. Mockup surfaces cover most keys
directly; keys that aren't naturally represented by a UI element (e.g.
`peekView.border` when peek view is closed, `inputValidation.errorBorder`)
remain editable via the **All keys** tab.

## Known limitations

- The mockup is a hand-rolled approximation. It aims for visual coverage of
  each key, not pixel-perfect VSCode fidelity.
- The contrast checker picks one representative background pair per key
  (declared in [src/theme/keyRegistry.ts](src/theme/keyRegistry.ts)). If a key
  is used on multiple backgrounds in real VSCode, only the primary one is
  checked automatically.
- Writing back to `.vscode-themes/` requires the manual download-and-move
  step; the simulator cannot touch the filesystem.
