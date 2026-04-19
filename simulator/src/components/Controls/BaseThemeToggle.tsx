import { useTheme } from '../../theme/ThemeContext';

export function BaseThemeToggle() {
  const { state, dispatch } = useTheme();
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <label>Base theme fallback:</label>
      <button
        className={state.baseTheme === 'dark' ? 'active' : ''}
        style={{
          background: state.baseTheme === 'dark' ? '#007acc' : '#2a2a2a',
          color: '#fff',
        }}
        onClick={() => dispatch({ type: 'SET_BASE', base: 'dark' })}
      >
        Dark
      </button>
      <button
        style={{
          background: state.baseTheme === 'light' ? '#007acc' : '#2a2a2a',
          color: '#fff',
        }}
        onClick={() => dispatch({ type: 'SET_BASE', base: 'light' })}
      >
        Light
      </button>
    </div>
  );
}
