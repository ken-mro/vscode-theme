import { Clickable } from '../Picker/Clickable';

export function TabStrip() {
  return (
    <Clickable component="tabs" className="vs-tabs">
      <div className="tab active">App.tsx<span className="dot" /></div>
      <div className="tab">index.ts</div>
      <div className="tab">styles.css</div>
      <div className="tab">README.md</div>
    </Clickable>
  );
}
