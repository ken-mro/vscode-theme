import { Clickable } from '../Picker/Clickable';

export function HoverWidget() {
  return (
    <Clickable component="hoverWidget" className="hover-widget" title="Hover / editor widgets">
      <div className="sig">(method) useState&lt;string&gt;(init: string): [string, Dispatch]</div>
      <div className="desc">Returns a stateful value and a setter. Part of the React API.</div>
    </Clickable>
  );
}
