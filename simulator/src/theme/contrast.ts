/**
 * WCAG contrast helpers. Ports the Python reference snippet from the repo's
 * CLAUDE.md (sRGB luminance, AA thresholds).
 *
 * Handles 3/4/6/8-digit hex. For 8-digit (alpha), the color is composited over
 * the provided backdrop before computing luminance — matching how VSCode
 * actually renders semi-transparent overlay keys.
 */

export type Rgb = { r: number; g: number; b: number };
export type Rgba = Rgb & { a: number };

export function parseHex(hex: string): Rgba | null {
  const m = /^#?([0-9a-f]{3,8})$/i.exec(hex.trim());
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  else if (h.length === 4) h = h.split('').map((c) => c + c).join('');
  else if (h.length !== 6 && h.length !== 8) return null;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
  return { r, g, b, a };
}

export function composite(fg: Rgba, bg: Rgba): Rgb {
  const a = fg.a;
  return {
    r: Math.round(fg.r * a + bg.r * (1 - a)),
    g: Math.round(fg.g * a + bg.g * (1 - a)),
    b: Math.round(fg.b * a + bg.b * (1 - a)),
  };
}

function channelLum(c: number): number {
  const v = c / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

export function luminance(rgb: Rgb): number {
  return (
    0.2126 * channelLum(rgb.r) +
    0.7152 * channelLum(rgb.g) +
    0.0722 * channelLum(rgb.b)
  );
}

export function contrastRatio(fgHex: string, bgHex: string): number | null {
  const fg = parseHex(fgHex);
  const bg = parseHex(bgHex);
  if (!fg || !bg) return null;
  // Composite both sides over opaque white if alpha present — background over white
  // is the safe default when no further backdrop is known. The theme system treats
  // all `editor.background`-like keys as opaque in practice.
  const bgOpaque: Rgb = bg.a < 1 ? composite(bg, { r: 255, g: 255, b: 255, a: 1 }) : bg;
  const fgOpaque: Rgb = fg.a < 1 ? composite(fg, { ...bgOpaque, a: 1 }) : fg;
  const lFg = luminance(fgOpaque);
  const lBg = luminance(bgOpaque);
  return (Math.max(lFg, lBg) + 0.05) / (Math.min(lFg, lBg) + 0.05);
}

export const WCAG_THRESHOLDS = {
  text: 4.5,
  ui: 3.0,
  dim: 2.5,
  none: 0,
} as const;

export type WcagStatus = 'pass' | 'fail' | 'n/a';

export function wcagStatus(
  ratio: number | null,
  role: keyof typeof WCAG_THRESHOLDS,
): WcagStatus {
  if (ratio === null) return 'n/a';
  if (role === 'none') return 'n/a';
  return ratio >= WCAG_THRESHOLDS[role] ? 'pass' : 'fail';
}
