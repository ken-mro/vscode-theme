import { useState } from 'react';
import { downloadTheme, serializeTheme } from '../../theme/exporter';
import { useTheme } from '../../theme/ThemeContext';

export function ExportDialog({ onClose }: { onClose: () => void }) {
  const { state } = useTheme();
  const [name, setName] = useState(state.sourceName ? `${state.sourceName}-edited` : 'my-theme');
  const preview = serializeTheme(state.explicit);
  const count = Object.keys(state.explicit).length;

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>Export theme</h2>
        <div style={{ fontSize: 12, color: '#a0a0a0', marginBottom: 8 }}>
          {count} explicit keys. Keys not set fall through to the active base theme in VSCode —
          see the CLAUDE.md gotcha before shipping.
        </div>
        <label>
          File name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            spellCheck={false}
          />
        </label>
        <label>
          Preview
          <textarea value={preview} readOnly rows={10} />
        </label>
        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              downloadTheme(name, state.explicit);
              onClose();
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
