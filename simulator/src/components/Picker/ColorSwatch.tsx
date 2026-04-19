import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTheme } from '../../theme/ThemeContext';

/**
 * Swatch button that expands into a color picker + hex input on click.
 * Supports 8-digit alpha hex via the text input (react-colorful is 6-digit only).
 */
export function ColorSwatch({ keyName }: { keyName: string }) {
  const { resolve, isExplicit, dispatch } = useTheme();
  const value = resolve(keyName);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(value);

  const explicit = isExplicit(keyName);
  const fillStyle = {
    background: value,
    outline: explicit ? 'none' : '1px dashed #888',
    outlineOffset: -2,
  } as const;

  const commit = (v: string) => {
    dispatch({ type: 'SET_KEY', key: keyName, value: v });
  };

  return (
    <div>
      <button
        className="swatch-btn"
        onClick={() => {
          setDraft(value);
          setOpen((o) => !o);
        }}
        aria-label={`Edit ${keyName}`}
        title={explicit ? value : `${value} (fallback)`}
      >
        <span className="fill" style={fillStyle} />
      </button>
      {open && (
        <div className="picker-panel">
          <HexColorPicker
            color={value.length >= 7 ? value.slice(0, 7) : value}
            onChange={(hex) => {
              setDraft(hex);
              commit(hex);
            }}
          />
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={() => {
              if (/^#([0-9a-fA-F]{3,8})$/.test(draft.trim())) commit(draft.trim());
              else setDraft(value);
            }}
            spellCheck={false}
          />
          <div className="row-btns">
            <button onClick={() => setOpen(false)}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}
