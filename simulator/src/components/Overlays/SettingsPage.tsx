import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function SettingsPage() {
  return (
    <Clickable
      component="settingsPage"
      style={{
        background: cssVar('editor.background'),
        color: cssVar('editor.foreground'),
        padding: 16,
        height: '100%',
        overflow: 'auto',
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 16,
          paddingBottom: 12,
          borderBottom: `1px solid ${cssVar('settings.headerBorder')}`,
        }}
      >
        <div
          style={{
            color: cssVar('settings.headerForeground'),
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Commonly Used
        </div>
        <div
          style={{
            color: cssVar('settings.headerForeground'),
            fontSize: 16,
            opacity: 0.7,
          }}
        >
          Text Editor
        </div>
        <div
          style={{
            color: cssVar('settings.settingsHeaderHoverForeground'),
            fontSize: 16,
            opacity: 0.9,
            fontStyle: 'italic',
          }}
        >
          Workbench (hovered)
        </div>
      </div>

      {/* Setting row: Font Size (number input) */}
      <SettingRow
        title="Font Size"
        desc="Controls the font size in pixels."
        modified
      >
        <input
          readOnly
          value="14"
          style={{
            background: cssVar('settings.numberInputBackground'),
            color: cssVar('settings.numberInputForeground'),
            border: `1px solid ${cssVar('settings.numberInputBorder')}`,
            padding: '3px 6px',
            width: 80,
            fontFamily: 'var(--mono)',
          }}
        />
      </SettingRow>

      {/* Setting row: Auto Save (dropdown) */}
      <SettingRow title="Files: Auto Save" desc="Controls auto save of editors that have unsaved changes.">
        <select
          style={{
            background: cssVar('settings.dropdownBackground'),
            color: cssVar('settings.dropdownForeground'),
            border: `1px solid ${cssVar('settings.dropdownBorder')}`,
            padding: '3px 6px',
            fontFamily: 'var(--mono)',
          }}
        >
          <option>off</option>
          <option>onFocusChange</option>
        </select>
      </SettingRow>

      {/* Setting row: Format On Save (checkbox) */}
      <SettingRow title="Editor: Format On Save" desc="Format a file on save.">
        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              display: 'inline-block',
              width: 18,
              height: 18,
              background: cssVar('settings.checkboxBackground'),
              border: `1px solid ${cssVar('settings.checkboxBorder')}`,
              color: cssVar('settings.checkboxForeground'),
              textAlign: 'center',
              lineHeight: '16px',
              fontWeight: 700,
            }}
          >
            ✓
          </span>
          <span style={{ fontSize: 12 }}>Enabled</span>
        </label>
      </SettingRow>

      {/* Setting row: Focused */}
      <div
        style={{
          background: cssVar('settings.focusedRowBackground'),
          borderLeft: `2px solid ${cssVar('settings.focusedRowBorder')}`,
          padding: '10px 12px',
          margin: '6px 0',
        }}
      >
        <div style={{ color: cssVar('settings.headerForeground'), fontWeight: 600 }}>
          Files: Exclude (focused)
        </div>
        <div style={{ fontSize: 12, opacity: 0.85 }}>
          Configure glob patterns for excluding files and folders.
        </div>
        <input
          readOnly
          value="**/.DS_Store"
          style={{
            marginTop: 6,
            background: cssVar('settings.textInputBackground'),
            color: cssVar('settings.textInputForeground'),
            border: `1px solid ${cssVar('settings.textInputBorder')}`,
            padding: '3px 6px',
            width: 260,
            fontFamily: 'var(--mono)',
          }}
        />
      </div>

      {/* Keybinding table */}
      <div style={{ marginTop: 20 }}>
        <div style={{ color: cssVar('settings.headerForeground'), fontWeight: 600, marginBottom: 6 }}>
          Keybindings
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: `1px solid ${cssVar('settings.headerBorder')}`,
          }}
        >
          <div style={{ background: cssVar('keybindingTable.headerBackground'), padding: 6, fontWeight: 700 }}>
            Command
          </div>
          <div style={{ background: cssVar('keybindingTable.headerBackground'), padding: 6, fontWeight: 700 }}>
            Keybinding
          </div>
          {[
            ['Format Document', 'Shift+Alt+F'],
            ['Toggle Terminal', 'Ctrl+`'],
            ['Command Palette', 'Ctrl+Shift+P'],
          ].map(([c, k]) => (
            <>
              <div key={`c-${c}`} style={{ background: cssVar('keybindingTable.rowsBackground'), padding: 6 }}>
                {c}
              </div>
              <div key={`k-${c}`} style={{ background: cssVar('keybindingTable.rowsBackground'), padding: 6, fontFamily: 'var(--mono)' }}>
                {k}
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <button
          style={{
            background: cssVar('button.background'),
            color: cssVar('button.foreground'),
            border: 'none',
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Apply
        </button>
        <button
          style={{
            background: cssVar('button.secondaryBackground'),
            color: cssVar('button.secondaryForeground'),
            border: 'none',
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </Clickable>
  );
}

function SettingRow({
  title,
  desc,
  modified,
  children,
}: {
  title: string;
  desc: string;
  modified?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: '10px 12px',
        borderBottom: `1px solid ${cssVar('settings.headerBorder')}`,
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = cssVar('settings.rowHoverBackground');
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'transparent';
      }}
    >
      {modified && (
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 10,
            bottom: 10,
            width: 3,
            background: cssVar('settings.modifiedItemIndicator'),
          }}
        />
      )}
      <div style={{ color: cssVar('settings.headerForeground'), fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 6 }}>{desc}</div>
      {children}
    </div>
  );
}
