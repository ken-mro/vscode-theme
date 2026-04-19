import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function ChatView() {
  return (
    <Clickable
      component="chat"
      style={{
        background: cssVar('editor.background'),
        color: cssVar('editor.foreground'),
        padding: 16,
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {/* User request bubble */}
      <div
        style={{
          background: cssVar('chat.requestBackground'),
          border: `1px solid ${cssVar('chat.requestBorder')}`,
          padding: 10,
          borderRadius: 6,
          display: 'flex',
          gap: 10,
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            background: cssVar('chat.avatarBackground'),
            color: cssVar('chat.avatarForeground'),
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          U
        </span>
        <div style={{ flex: 1 }}>
          <div>
            <span
              style={{
                background: cssVar('chat.slashCommandBackground'),
                color: cssVar('chat.slashCommandForeground'),
                padding: '2px 6px',
                borderRadius: 3,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                marginRight: 6,
              }}
            >
              /commit
            </span>
            please review the changes in
            <span
              style={{
                background: cssVar('chat.slashCommandBackground'),
                color: cssVar('chat.slashCommandForeground'),
                padding: '2px 6px',
                borderRadius: 3,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                margin: '0 4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span style={{ color: cssVar('symbolIcon.fileForeground') }}>📄</span> App.tsx
            </span>
            and
            <span
              style={{
                background: cssVar('chat.slashCommandBackground'),
                color: cssVar('chat.slashCommandForeground'),
                padding: '2px 6px',
                borderRadius: 3,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                margin: '0 4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <span style={{ color: cssVar('symbolIcon.folderForeground') }}>📁</span> components/
            </span>
          </div>
        </div>
      </div>

      {/* Assistant response */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <span
          style={{
            background: cssVar('chat.avatarBackground'),
            color: cssVar('chat.avatarForeground'),
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          C
        </span>
        <div>
          <p style={{ marginTop: 0 }}>I reviewed the changes. Edited:</p>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li style={{ color: cssVar('chat.editedFileForeground') }}>src/App.tsx</li>
            <li style={{ color: cssVar('chat.editedFileForeground') }}>src/components/Picker.tsx</li>
          </ul>
        </div>
      </div>
    </Clickable>
  );
}
