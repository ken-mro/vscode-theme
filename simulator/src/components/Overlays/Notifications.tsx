import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function Notifications({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 30,
        right: 16,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: 340,
      }}
    >
      <Clickable
        component="notifications"
        style={{
          background: cssVar('notifications.background'),
          color: cssVar('notifications.foreground'),
          border: `1px solid ${cssVar('notifications.border')}`,
          padding: '8px 10px',
          fontSize: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            background: cssVar('notificationCenterHeader.background'),
            color: cssVar('notificationCenterHeader.foreground'),
            padding: '4px 8px',
            margin: '-8px -10px 6px',
            fontSize: 11,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Notifications
        </div>
        <div>Theme exported successfully.</div>
        <div style={{ marginTop: 6, textAlign: 'right' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={{
              background: cssVar('button.background'),
              color: cssVar('button.foreground'),
              border: 'none',
              padding: '3px 8px',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            Dismiss
          </button>
        </div>
      </Clickable>
    </div>
  );
}
