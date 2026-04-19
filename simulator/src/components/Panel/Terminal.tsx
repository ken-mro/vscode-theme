import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

/**
 * Demonstrates the full ANSI 16-color palette plus background/foreground.
 * Each glyph uses its corresponding terminal.ansi* key so users can see the
 * effect of editing any palette entry.
 */
const ROWS: Array<{ label: string; keys: string[] }> = [
  { label: 'ansi (normal)', keys: ['terminal.ansiBlack', 'terminal.ansiRed', 'terminal.ansiGreen', 'terminal.ansiYellow', 'terminal.ansiBlue', 'terminal.ansiMagenta', 'terminal.ansiCyan', 'terminal.ansiWhite'] },
  { label: 'ansi (bright)', keys: ['terminal.ansiBrightBlack', 'terminal.ansiBrightRed', 'terminal.ansiBrightGreen', 'terminal.ansiBrightYellow', 'terminal.ansiBrightBlue', 'terminal.ansiBrightMagenta', 'terminal.ansiBrightCyan', 'terminal.ansiBrightWhite'] },
];

export function Terminal() {
  return (
    <Clickable component="terminal" className="vs-terminal">
      <div>
        <span style={{ color: cssVar('terminal.ansiBrightBlack') }}>$</span>{' '}
        <span style={{ color: cssVar('terminal.ansiGreen') }}>npm</span>{' '}
        <span style={{ color: cssVar('terminal.ansiCyan') }}>run</span>{' '}
        <span style={{ color: cssVar('terminal.ansiYellow') }}>dev</span>
      </div>
      <div style={{ color: cssVar('terminal.ansiBrightBlack') }}>
        &gt; Starting development server...
      </div>
      <div>
        <span style={{ color: cssVar('terminal.ansiBrightGreen') }}>VITE v5.4</span>{' '}
        <span style={{ color: cssVar('terminal.ansiBrightBlack') }}>ready in</span>{' '}
        <span style={{ color: cssVar('terminal.ansiBrightYellow') }}>312 ms</span>
      </div>
      <div>
        <span style={{ color: cssVar('terminal.ansiRed') }}>error</span>{' '}
        <span style={{ color: cssVar('terminal.ansiMagenta') }}>TS2345</span>:{' '}
        argument of type '<span style={{ color: cssVar('terminal.ansiBlue') }}>string</span>' is not assignable
      </div>
      <div>
        <span style={{ color: cssVar('terminal.ansiOrange') }}>warn</span>{' '}
        <span style={{ color: cssVar('terminal.ansiBrightMagenta') }}>[deprecated]</span>{' '}
        use <span style={{ color: cssVar('terminal.ansiBrightCyan') }}>editorIndentGuide.background1</span>
      </div>
      {ROWS.map((row) => (
        <div key={row.label}>
          <span style={{ color: cssVar('terminal.ansiBrightBlack') }}>{row.label.padEnd(16)}</span>
          {row.keys.map((k) => (
            <span key={k} style={{ color: cssVar(k), padding: '0 8px' }}>
              ████
            </span>
          ))}
        </div>
      ))}
      <div>
        <span style={{ color: cssVar('terminal.ansiBrightBlack') }}>$</span>
        <span className="cursor" />
      </div>
    </Clickable>
  );
}
