import { Clickable } from '../Picker/Clickable';

export function SideBar() {
  return (
    <Clickable component="sideBar" className="vs-sidebar">
      <div className="title">Explorer</div>
      <div className="section-header">VSCODE-THEME</div>
      <div className="tree">
        <div className="row">▾ .vscode-themes</div>
        <div className="row" style={{ paddingLeft: 36 }}>
          <span>paper-</span><span className="match">light</span><span>.json</span>
        </div>
        <div className="row selected" style={{ paddingLeft: 36 }}>ocean-blue.json</div>
        <div className="row modified" style={{ paddingLeft: 36 }}>dark-ember.json M</div>
        <div className="row untracked" style={{ paddingLeft: 36 }}>new-theme.json U</div>
        <div className="row conflict" style={{ paddingLeft: 36 }}>frappe-teal.json !</div>
        <div className="row">▾ src</div>
        <div className="row focused" style={{ paddingLeft: 36 }}>App.tsx</div>
        <div className="row ignored" style={{ paddingLeft: 36 }}>node_modules</div>
        <div className="row deleted" style={{ paddingLeft: 36 }}>legacy.ts</div>
        <div className="row">README.md</div>
      </div>
    </Clickable>
  );
}
