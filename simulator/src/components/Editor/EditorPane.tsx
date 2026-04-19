import { Clickable } from '../Picker/Clickable';
import { HoverWidget } from './HoverWidget';
import { SuggestWidget } from './SuggestWidget';

/**
 * Renders a sample TypeScript file with selection, word highlights, a find
 * match, bracket match, indent guides, a caret, and inline text/link styles.
 * The hover widget and suggest widget overlay the editor to demonstrate
 * widget-related keys.
 */
export function EditorPane() {
  return (
    <Clickable component="editor" className="vs-editor">
      <div className="content">
        <Line n={1}>
          <span className="pre">import</span> {'{ useState }'} <span className="pre">from</span>{' '}
          <span>'react'</span>;
        </Line>
        <Line n={2}>
          <span className="pre">import</span> {'{ useTheme }'} <span className="pre">from</span>{' '}
          <span>'./theme'</span>;
        </Line>
        <Line n={3}>{/* blank */}</Line>
        <Line n={4}>
          <span className="pre">// See</span>{' '}
          <span className="link">https://vscode.dev</span>{' '}
          <span className="pre">for docs.</span>
        </Line>
        <Line n={5}>
          <span className="pre">export function</span> <span className="whs">Editor</span>() {'{'}
        </Line>
        <Line n={6} indent={1}>
          <span className="pre">const</span> [<span className="wh">theme</span>, set
          <span className="wh">Theme</span>] = useState(<span>'light'</span>);
        </Line>
        <Line n={7} indent={1} active>
          <span className="pre">const</span> title = <span className="sel">`VSCode — </span>
          <span className="sel">${'{'}</span>
          <span className="sel wh">theme</span>
          <span className="sel">{'}'}</span>
          <span className="sel">`</span>;<span className="cursor" />
        </Line>
        <Line n={8} indent={1}>
          <span className="pre">if</span> (<span className="bracket">(</span>theme === <span>'light'</span>
          <span className="bracket">)</span>) {'{'}
        </Line>
        <Line n={9} indent={2}>
          <span className="pre">return</span> <span className="findhl">render</span>(title);
        </Line>
        <Line n={10} indent={1}>{'} '}<span className="pre">else</span> {'{'}</Line>
        <Line n={11} indent={2}>
          <span className="pre">return</span> <span className="find">render</span>(
          <span className="selhl">title.toUpperCase()</span>);
        </Line>
        <Line n={12} indent={1}>{'}'}</Line>
        <Line n={13}>{'}'}</Line>
        <Line n={14}>{/* blank */}</Line>
      </div>
      <HoverWidget />
      <SuggestWidget />
    </Clickable>
  );
}

function Line({
  n,
  indent = 0,
  active = false,
  children,
}: {
  n: number;
  indent?: number;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`line ${active ? 'active' : ''}`}>
      <span className="ln">{n}</span>
      <span>
        {Array.from({ length: indent }).map((_, i) => (
          <span key={i} className={`indent ${active && i === indent - 1 ? 'active' : ''}`} />
        ))}
        {children}
      </span>
    </div>
  );
}
