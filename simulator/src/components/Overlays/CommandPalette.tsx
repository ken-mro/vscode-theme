import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function CommandPalette({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="overlay-backdrop"
      onClick={onClose}
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 60,
        zIndex: 3,
      }}
    >
      <Clickable
        component="commandPalette"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 520,
          maxHeight: '80%',
          background: cssVar('quickInput.background'),
          color: cssVar('quickInput.foreground'),
          border: `1px solid ${cssVar('editorWidget.border')}`,
          boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            background: cssVar('quickInputTitle.background'),
            padding: '6px 10px',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            borderBottom: `1px solid ${cssVar('editorWidget.border')}`,
          }}
        >
          Command Palette
        </div>
        <div style={{ padding: 8 }}>
          <div
            style={{
              background: cssVar('input.background'),
              color: cssVar('input.foreground'),
              border: `1px solid ${cssVar('inputOption.activeBorder')}`,
              padding: '4px 8px',
            }}
          >
            &gt; theme<span style={{ color: cssVar('editorCursor.foreground') }}>|</span>
          </div>
        </div>
        <div style={{ padding: '4px 0' }}>
          <div
            style={{
              color: cssVar('pickerGroup.foreground'),
              borderBottom: `1px solid ${cssVar('pickerGroup.border')}`,
              padding: '2px 10px',
              fontSize: 11,
              textTransform: 'uppercase',
            }}
          >
            other commands
          </div>
          {[
            'Preferences: Color Theme',
            'Preferences: Open Settings (UI)',
            'Developer: Inspect Editor Tokens and Scopes',
            'Developer: Toggle Developer Tools',
          ].map((c, i) => (
            <div
              key={c}
              style={{
                padding: '3px 10px',
                background: i === 0 ? cssVar('list.activeSelectionBackground') : 'transparent',
                color: i === 0 ? cssVar('list.activeSelectionForeground') : cssVar('quickInput.foreground'),
              }}
            >
              {c}
            </div>
          ))}
        </div>
        <div style={{ padding: 8, borderTop: `1px solid ${cssVar('editorWidget.border')}` }}>
          <div style={{ fontSize: 11, opacity: 0.8 }}>Validation sample:</div>
          <div
            style={{
              marginTop: 4,
              background: cssVar('inputValidation.errorBackground'),
              border: `1px solid ${cssVar('inputValidation.errorBorder')}`,
              color: cssVar('errorForeground'),
              padding: '3px 6px',
              fontSize: 11,
            }}
          >
            command not found
          </div>
        </div>
      </Clickable>
    </div>
  );
}
