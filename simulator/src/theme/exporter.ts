import { ColorMap } from './ThemeContext';
import { KEY_REGISTRY } from './keyRegistry';

/**
 * Serialize a ColorMap into the repo's JSON shape:
 *   {"workbench.colorCustomizations": { ...sortedByGroup }}
 * Keys are emitted in the same order as they appear in KEY_REGISTRY so the
 * output matches the grouping of existing themes in [.vscode-themes/](.vscode-themes/).
 */
export function serializeTheme(colors: ColorMap): string {
  const ordered: ColorMap = {};
  for (const { key } of KEY_REGISTRY) {
    if (key in colors) ordered[key] = colors[key];
  }
  // Append any unknown keys that slipped in (shouldn't happen, but safe).
  for (const [k, v] of Object.entries(colors)) {
    if (!(k in ordered)) ordered[k] = v;
  }
  const obj = { 'workbench.colorCustomizations': ordered };
  return JSON.stringify(obj, null, 2) + '\n';
}

export function downloadTheme(name: string, colors: ColorMap): void {
  const safe = name.trim().replace(/[^A-Za-z0-9._-]/g, '-') || 'theme';
  const filename = safe.endsWith('.json') ? safe : `${safe}.json`;
  const blob = new Blob([serializeTheme(colors)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
