import { describe, it, expect } from 'vitest';
import { composite, contrastRatio, luminance, parseHex, wcagStatus } from './contrast';

describe('parseHex', () => {
  it('parses 6-digit hex', () => {
    expect(parseHex('#FAF6EE')).toEqual({ r: 250, g: 246, b: 238, a: 1 });
  });
  it('parses 8-digit hex with alpha', () => {
    const p = parseHex('#A0522D33');
    expect(p).not.toBeNull();
    expect(p!.a).toBeCloseTo(0x33 / 255, 3);
  });
  it('parses 3-digit shorthand', () => {
    expect(parseHex('#fff')).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });
  it('rejects garbage', () => {
    expect(parseHex('not-a-color')).toBeNull();
  });
});

describe('luminance', () => {
  it('matches the Python reference for pure white and black', () => {
    expect(luminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(1, 5);
    expect(luminance({ r: 0, g: 0, b: 0 })).toBeCloseTo(0, 5);
  });
});

describe('contrastRatio', () => {
  it('black on white is 21:1', () => {
    expect(contrastRatio('#000000', '#ffffff')).toBeCloseTo(21, 1);
  });
  it('identical colors are 1:1', () => {
    expect(contrastRatio('#A0522D', '#A0522D')).toBeCloseTo(1, 2);
  });
  it('paper-light titleBar text over titleBar bg passes AA', () => {
    // Values sampled from .vscode-themes/paper-light.json
    const ratio = contrastRatio('#3a2818', '#E8DFCC')!;
    expect(ratio).toBeGreaterThan(4.5);
  });
  it('handles 8-digit hex by compositing', () => {
    // Alpha=0 foreground -> ratio reduces toward 1 (background vs background)
    const opaque = contrastRatio('#000000', '#ffffff')!;
    const alpha = contrastRatio('#00000000', '#ffffff')!;
    expect(alpha).toBeLessThan(opaque);
    expect(alpha).toBeCloseTo(1, 1);
  });
});

describe('composite', () => {
  it('50% alpha black over white is mid-gray', () => {
    const c = composite({ r: 0, g: 0, b: 0, a: 0.5 }, { r: 255, g: 255, b: 255, a: 1 });
    expect(c.r).toBeGreaterThanOrEqual(127);
    expect(c.r).toBeLessThanOrEqual(128);
  });
});

describe('wcagStatus', () => {
  it('flags failing text contrast', () => {
    expect(wcagStatus(3.0, 'text')).toBe('fail');
    expect(wcagStatus(5.0, 'text')).toBe('pass');
  });
  it('dim role uses 2.5 threshold', () => {
    expect(wcagStatus(2.6, 'dim')).toBe('pass');
    expect(wcagStatus(2.4, 'dim')).toBe('fail');
  });
  it('none role always n/a', () => {
    expect(wcagStatus(21, 'none')).toBe('n/a');
  });
});
