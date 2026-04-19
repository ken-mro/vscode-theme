import { Clickable } from '../Picker/Clickable';

export function Breadcrumb() {
  return (
    <Clickable component="breadcrumb" className="vs-breadcrumb">
      <span className="segment">vscode-theme</span>
      <span className="sep">›</span>
      <span className="segment">src</span>
      <span className="sep">›</span>
      <span className="segment">components</span>
      <span className="sep">›</span>
      <span className="segment active">App.tsx</span>
    </Clickable>
  );
}
