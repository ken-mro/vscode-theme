import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function ContextMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{ position: 'absolute', inset: 0, zIndex: 3 }}
    >
      <Clickable
        component="menu"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: 220,
          left: 420,
          minWidth: 220,
          background: cssVar('menu.background'),
          color: cssVar('menu.foreground'),
          border: `1px solid ${cssVar('menu.border')}`,
          fontSize: 12,
          boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
        }}
      >
        {['Go to Definition', 'Go to References', 'Find All References'].map((m, i) => (
          <div
            key={m}
            style={{
              padding: '5px 16px',
              background: i === 0 ? cssVar('menu.selectionBackground') : 'transparent',
              color: i === 0 ? cssVar('menu.selectionForeground') : cssVar('menu.foreground'),
            }}
          >
            {m}
          </div>
        ))}
        <div
          style={{ height: 1, margin: '4px 0', background: cssVar('menu.separatorBackground') }}
        />
        {['Rename Symbol', 'Format Document', 'Change All Occurrences'].map((m) => (
          <div key={m} style={{ padding: '5px 16px' }}>
            {m}
          </div>
        ))}
      </Clickable>
    </div>
  );
}
