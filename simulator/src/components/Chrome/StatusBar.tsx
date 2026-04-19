import { Clickable } from '../Picker/Clickable';

export function StatusBar() {
  return (
    <Clickable component="statusBar" className="vs-statusbar">
      <span className="item">⑂ main*</span>
      <span className="item">✓ 0 ✗ 0</span>
      <span className="item" style={{ marginLeft: 'auto' }}>Ln 14, Col 22</span>
      <span className="item">Spaces: 2</span>
      <span className="item">UTF-8</span>
      <span className="item">TypeScript</span>
    </Clickable>
  );
}
