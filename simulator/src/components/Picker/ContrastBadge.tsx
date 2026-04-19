import { KEY_MAP } from '../../theme/keyRegistry';
import { contrastRatio, wcagStatus } from '../../theme/contrast';
import { useTheme } from '../../theme/ThemeContext';

export function ContrastBadge({ keyName }: { keyName: string }) {
  const { resolve } = useTheme();
  const meta = KEY_MAP.get(keyName);
  if (!meta || meta.role === 'none' || !meta.pair?.length) {
    return <span className="contrast-badge na">—</span>;
  }
  const fg = resolve(keyName);
  const bg = resolve(meta.pair[0]);
  const ratio = contrastRatio(fg, bg);
  const status = wcagStatus(ratio, meta.role);
  const label = ratio === null ? '—' : `${ratio.toFixed(2)}:1`;
  const cls =
    status === 'pass' ? 'pass' : status === 'fail' ? 'fail' : 'na';
  return (
    <span className={`contrast-badge ${cls}`} title={`vs ${meta.pair[0]} (target ${meta.role})`}>
      {label}
    </span>
  );
}
