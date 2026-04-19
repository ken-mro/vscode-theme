import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode, useRef, useState } from 'react';
import { COMPONENT_MAP, ComponentId } from '../../theme/componentMap';
import { usePicker } from './PickerContext';

type Props = HTMLAttributes<HTMLDivElement> & {
  component: ComponentId;
  title?: string;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  style?: CSSProperties;
};

const COMPONENT_TITLES: Record<string, string> = {
  titleBar: 'Title bar',
  activityBar: 'Activity bar',
  sideBar: 'Side bar / Explorer',
  breadcrumb: 'Breadcrumb',
  editor: 'Editor',
  tabs: 'Tab strip',
  hoverWidget: 'Hover widget',
  suggestWidget: 'Suggest widget',
  panel: 'Panel',
  terminal: 'Terminal',
  statusBar: 'Status bar',
  commandPalette: 'Command palette',
  settingsPage: 'Settings page',
  chat: 'Chat (Claude Code)',
  notifications: 'Notifications',
  menu: 'Menus',
  peekView: 'Peek view',
};

export function Clickable({ component, title, className, as = 'div', children, onClick, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const { open, target } = usePicker();
  const keys = COMPONENT_MAP[component];
  const resolvedTitle = title ?? COMPONENT_TITLES[component] ?? component;
  const isOpen =
    target !== null &&
    target.keys.length === keys.length &&
    target.keys.every((k, i) => k === keys[i]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (onClick) onClick(e);
    if (!ref.current) return;
    open({ keys, title: resolvedTitle, anchor: ref.current.getBoundingClientRect() });
  };

  const Tag = as as 'div';
  return (
    <Tag
      {...(rest as HTMLAttributes<HTMLDivElement>)}
      ref={ref as never}
      className={['clickable', className].filter(Boolean).join(' ')}
      data-hover={hover}
      data-open={isOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      {children}
    </Tag>
  );
}
