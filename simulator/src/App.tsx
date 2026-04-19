import { useState } from 'react';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { PickerProvider } from './components/Picker/PickerContext';
import { KeyPopover } from './components/Picker/KeyPopover';
import { MainView, Overlays, VSCodeWindow } from './components/VSCodeWindow';
import { KeyGrid } from './components/AllKeys/KeyGrid';
import { ThemeSelector } from './components/Controls/ThemeSelector';
import { BaseThemeToggle } from './components/Controls/BaseThemeToggle';
import { ExportDialog } from './components/Controls/ExportDialog';

type TabKey = 'editor' | 'settings' | 'chat' | 'all-keys';

export function App() {
  return (
    <ThemeProvider>
      <PickerProvider>
        <Shell />
        <KeyPopover />
      </PickerProvider>
    </ThemeProvider>
  );
}

function Shell() {
  const [tab, setTab] = useState<TabKey>('editor');
  const [overlays, setOverlays] = useState<Overlays>({
    commandPalette: false,
    notifications: false,
    menu: false,
    peek: false,
  });
  const [showExport, setShowExport] = useState(false);
  const { canUndo, canRedo, dispatch, state } = useTheme();

  const mainView: MainView =
    tab === 'settings' ? 'settings' : tab === 'chat' ? 'chat' : 'editor';

  return (
    <div className="app-shell">
      <div className="toolbar">
        <ThemeSelector />
        <BaseThemeToggle />
        <span style={{ flex: 1 }} />
        <button onClick={() => dispatch({ type: 'UNDO' })} disabled={!canUndo}>
          ⤺ Undo
        </button>
        <button onClick={() => dispatch({ type: 'REDO' })} disabled={!canRedo}>
          ⤻ Redo
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })} disabled={Object.keys(state.explicit).length === 0}>
          Reset
        </button>
        <button onClick={() => setShowExport(true)}>Export JSON…</button>
      </div>
      <div className="main-pane">
        <div className="tab-bar">
          <button className={tab === 'editor' ? 'active' : ''} onClick={() => setTab('editor')}>
            Editor
          </button>
          <button className={tab === 'settings' ? 'active' : ''} onClick={() => setTab('settings')}>
            Settings
          </button>
          <button className={tab === 'chat' ? 'active' : ''} onClick={() => setTab('chat')}>
            Chat
          </button>
          <button className={tab === 'all-keys' ? 'active' : ''} onClick={() => setTab('all-keys')}>
            All keys ({205})
          </button>
          {tab !== 'all-keys' && (
            <>
              <span style={{ width: 16 }} />
              <button
                onClick={() => setOverlays({ ...overlays, commandPalette: !overlays.commandPalette })}
              >
                ⌘P
              </button>
              <button onClick={() => setOverlays({ ...overlays, menu: !overlays.menu })}>
                Menu
              </button>
              <button onClick={() => setOverlays({ ...overlays, peek: !overlays.peek })}>
                Peek
              </button>
              <button
                onClick={() => setOverlays({ ...overlays, notifications: !overlays.notifications })}
              >
                Toast
              </button>
            </>
          )}
        </div>
        {tab === 'all-keys' ? (
          <KeyGrid />
        ) : (
          <VSCodeWindow view={mainView} overlays={overlays} setOverlays={setOverlays} />
        )}
      </div>
      {showExport && <ExportDialog onClose={() => setShowExport(false)} />}
    </div>
  );
}
