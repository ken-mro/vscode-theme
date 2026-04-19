import { Clickable } from '../Picker/Clickable';

export function SuggestWidget() {
  return (
    <Clickable component="suggestWidget" className="suggest-widget" title="IntelliSense suggestions">
      <div className="row selected">
        ⎔ <span>use</span><span className="match">State</span>
      </div>
      <div className="row">⎔ useReducer</div>
      <div className="row">⎔ useRef</div>
      <div className="row">⎔ useMemo</div>
      <div className="row">⎔ useEffect</div>
    </Clickable>
  );
}
