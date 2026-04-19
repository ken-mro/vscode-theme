import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { KEY_MAP } from '../../theme/keyRegistry';
import { useTheme } from '../../theme/ThemeContext';
import { ColorSwatch } from './ColorSwatch';
import { ContrastBadge } from './ContrastBadge';
import { usePicker } from './PickerContext';

export function KeyPopover() {
  const { target, close } = usePicker();
  const { isExplicit } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (!target || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const margin = 8;
    let left = target.anchor.right + margin;
    let top = target.anchor.top;
    if (left + rect.width > window.innerWidth - margin) {
      left = Math.max(margin, target.anchor.left - rect.width - margin);
    }
    if (top + rect.height > window.innerHeight - margin) {
      top = Math.max(margin, window.innerHeight - rect.height - margin);
    }
    setPos({ top: top + window.scrollY, left: left + window.scrollX });
  }, [target]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  if (!target) return null;

  return (
    <div className="popover-backdrop" onClick={close}>
      <div
        ref={ref}
        className="popover"
        onClick={(e) => e.stopPropagation()}
        style={pos ? { top: pos.top, left: pos.left } : { visibility: 'hidden', top: 0, left: 0 }}
      >
        <h3>{target.title}</h3>
        {target.keys.map((k) => {
          const meta = KEY_MAP.get(k);
          const implicit = !isExplicit(k);
          return (
            <div className="key-row" key={k}>
              <div className="label">
                <span className={`key-name ${implicit ? 'implicit' : ''}`}>{k}</span>
                {meta && <span className="desc">{meta.description}</span>}
              </div>
              <div className="right">
                <ContrastBadge keyName={k} />
                <ColorSwatch keyName={k} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
