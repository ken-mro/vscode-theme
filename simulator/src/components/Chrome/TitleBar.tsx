import { Clickable } from '../Picker/Clickable';

export function TitleBar() {
  return (
    <Clickable component="titleBar" as="div" className="vs-titlebar">
      <span>vscode-theme — Visual Studio Code</span>
    </Clickable>
  );
}
