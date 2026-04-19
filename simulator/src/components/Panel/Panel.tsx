import { Clickable } from '../Picker/Clickable';
import { Terminal } from './Terminal';

export function Panel() {
  return (
    <Clickable component="panel" className="vs-panel" title="Panel (bottom)">
      <div className="tabs">
        <span className="t">Problems</span>
        <span className="t">Output</span>
        <span className="t">Debug Console</span>
        <span className="t active">Terminal</span>
        <span className="t">Ports</span>
      </div>
      <Terminal />
    </Clickable>
  );
}
