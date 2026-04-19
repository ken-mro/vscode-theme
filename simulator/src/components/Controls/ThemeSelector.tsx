import { useEffect, useState } from 'react';
import { loadManifest, loadTheme, ThemeManifestEntry } from '../../theme/loader';
import { useTheme } from '../../theme/ThemeContext';

export function ThemeSelector() {
  const [entries, setEntries] = useState<ThemeManifestEntry[]>([]);
  const [current, setCurrent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { dispatch, state } = useTheme();

  useEffect(() => {
    loadManifest()
      .then((m) => {
        setEntries(m);
        if (m.length && !state.sourceName) {
          // Auto-load the first theme on startup.
          loadTheme(m[0].file).then((colors) => {
            dispatch({ type: 'LOAD_THEME', payload: { name: m[0].name, colors } });
            setCurrent(m[0].name);
          });
        }
      })
      .catch((e: Error) => setError(e.message));
  }, [dispatch, state.sourceName]);

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <label>Theme:</label>
      <select
        value={current}
        onChange={async (e) => {
          const name = e.target.value;
          setCurrent(name);
          const entry = entries.find((x) => x.name === name);
          if (!entry) return;
          try {
            const colors = await loadTheme(entry.file);
            dispatch({ type: 'LOAD_THEME', payload: { name, colors } });
          } catch (err) {
            setError(String(err));
          }
        }}
      >
        <option value="">-- pick a theme --</option>
        {entries.map((e) => (
          <option key={e.file} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      {error && <span style={{ color: '#f66', fontSize: 11 }}>{error}</span>}
    </div>
  );
}
