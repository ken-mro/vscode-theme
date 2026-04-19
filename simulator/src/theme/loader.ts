import { ColorMap } from './ThemeContext';

export interface ThemeManifestEntry {
  name: string;
  file: string;
}

const SENTINELS = new Set(['__vscode_theme_managed', '__vscode_theme_backup']);

export async function loadManifest(): Promise<ThemeManifestEntry[]> {
  const res = await fetch('/themes/index.json');
  if (!res.ok) throw new Error(`manifest fetch failed: ${res.status}`);
  return res.json();
}

export async function loadTheme(file: string): Promise<ColorMap> {
  const res = await fetch(`/themes/${file}`);
  if (!res.ok) throw new Error(`theme fetch failed: ${res.status}`);
  const raw = await res.json();
  return extractColors(raw);
}

export function extractColors(raw: unknown): ColorMap {
  if (!raw || typeof raw !== 'object') return {};
  const obj = raw as Record<string, unknown>;
  // Repo shape: {"workbench.colorCustomizations": {...}}
  const inner =
    obj['workbench.colorCustomizations'] &&
    typeof obj['workbench.colorCustomizations'] === 'object'
      ? (obj['workbench.colorCustomizations'] as Record<string, unknown>)
      : obj;
  const out: ColorMap = {};
  for (const [k, v] of Object.entries(inner)) {
    if (SENTINELS.has(k)) continue;
    if (typeof v === 'string') out[k] = v;
  }
  return out;
}
