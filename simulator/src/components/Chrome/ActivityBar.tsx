import { Clickable } from '../Picker/Clickable';

export function ActivityBar() {
  return (
    <Clickable component="activityBar" className="vs-activity">
      <div className="icon active" title="Explorer">
        📁
        <span className="badge">3</span>
      </div>
      <div className="icon" title="Search">🔍</div>
      <div className="icon" title="Source Control">⑂</div>
      <div className="icon" title="Run and Debug">▷</div>
      <div className="icon" title="Extensions">⬚</div>
    </Clickable>
  );
}
