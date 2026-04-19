import { useCssVars } from '../theme/ThemeContext';
import { TitleBar } from './Chrome/TitleBar';
import { ActivityBar } from './Chrome/ActivityBar';
import { SideBar } from './Chrome/SideBar';
import { StatusBar } from './Chrome/StatusBar';
import { Breadcrumb } from './Chrome/Breadcrumb';
import { TabStrip } from './Editor/TabStrip';
import { EditorPane } from './Editor/EditorPane';
import { Panel } from './Panel/Panel';
import { CommandPalette } from './Overlays/CommandPalette';
import { Notifications } from './Overlays/Notifications';
import { ContextMenu } from './Overlays/ContextMenu';
import { PeekView } from './Overlays/PeekView';
import { SettingsPage } from './Overlays/SettingsPage';
import { ChatView } from './Overlays/ChatView';

export type MainView = 'editor' | 'settings' | 'chat';

export interface Overlays {
  commandPalette: boolean;
  notifications: boolean;
  menu: boolean;
  peek: boolean;
}

export function VSCodeWindow({
  view,
  overlays,
  setOverlays,
}: {
  view: MainView;
  overlays: Overlays;
  setOverlays: (o: Overlays) => void;
}) {
  const cssVars = useCssVars();
  return (
    <div className="vscode-window" style={cssVars}>
      <TitleBar />
      <Breadcrumb />
      <div className="vs-body">
        <ActivityBar />
        <SideBar />
        <div className="vs-editor-col">
          <TabStrip />
          <div style={{ position: 'relative', minHeight: 0, overflow: 'hidden' }}>
            {view === 'editor' && <EditorPane />}
            {view === 'settings' && <SettingsPage />}
            {view === 'chat' && <ChatView />}
            {overlays.commandPalette && (
              <CommandPalette onClose={() => setOverlays({ ...overlays, commandPalette: false })} />
            )}
            {overlays.menu && (
              <ContextMenu onClose={() => setOverlays({ ...overlays, menu: false })} />
            )}
            {overlays.peek && (
              <PeekView onClose={() => setOverlays({ ...overlays, peek: false })} />
            )}
            {overlays.notifications && (
              <Notifications onClose={() => setOverlays({ ...overlays, notifications: false })} />
            )}
          </div>
          <Panel />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
