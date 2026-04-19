import { cssVar } from '../../theme/ThemeContext';
import { Clickable } from '../Picker/Clickable';

export function PeekView({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 200,
        zIndex: 3,
        background: 'transparent',
      }}
    >
      <Clickable
        component="peekView"
        onClick={(e) => e.stopPropagation()}
        style={{
          height: '100%',
          border: `2px solid ${cssVar('peekView.border')}`,
          display: 'grid',
          gridTemplateColumns: '40% 1fr',
          gridTemplateRows: 'auto 1fr',
          fontSize: 12,
        }}
      >
        <div
          style={{
            gridColumn: '1 / -1',
            background: cssVar('peekViewTitle.background'),
            color: cssVar('peekViewTitleLabel.foreground'),
            padding: '4px 10px',
            borderBottom: `1px solid ${cssVar('peekView.border')}`,
          }}
        >
          References to <code>useState</code> — 4 results
        </div>
        <div
          style={{
            background: cssVar('peekViewResult.background'),
            color: cssVar('peekViewResult.foreground'),
            padding: 8,
            overflow: 'auto',
          }}
        >
          <div>src/App.tsx</div>
          <div style={{ paddingLeft: 14 }}>Line 7: const [theme, setTheme] = useState...</div>
          <div>src/components/Picker.tsx</div>
          <div style={{ paddingLeft: 14 }}>Line 22: const [open, setOpen] = useState...</div>
        </div>
        <div
          style={{
            background: cssVar('peekViewEditor.background'),
            padding: 8,
            fontFamily: 'var(--mono)',
          }}
        >
          <div>const [theme, setTheme] = useState('light');</div>
          <div>const [count, setCount] = useState(0);</div>
        </div>
      </Clickable>
    </div>
  );
}
