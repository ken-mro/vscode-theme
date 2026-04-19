import { useMemo, useState } from 'react';
import { GROUPS, KEY_REGISTRY, KeyMeta } from '../../theme/keyRegistry';
import { ColorSwatch } from '../Picker/ColorSwatch';
import { ContrastBadge } from '../Picker/ContrastBadge';
import { useTheme } from '../../theme/ThemeContext';

export function KeyGrid() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState<string | 'all'>('all');
  const [onlyExplicit, setOnlyExplicit] = useState(false);
  const { isExplicit } = useTheme();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const byGroup = new Map<string, KeyMeta[]>();
    for (const meta of KEY_REGISTRY) {
      if (group !== 'all' && meta.group !== group) continue;
      if (q && !meta.key.toLowerCase().includes(q) && !meta.description.toLowerCase().includes(q)) {
        continue;
      }
      if (onlyExplicit && !isExplicit(meta.key)) continue;
      const arr = byGroup.get(meta.group) ?? [];
      arr.push(meta);
      byGroup.set(meta.group, arr);
    }
    return byGroup;
  }, [query, group, onlyExplicit, isExplicit]);

  const total = Array.from(filtered.values()).reduce((n, a) => n + a.length, 0);

  return (
    <div className="allkeys">
      <div className="controls">
        <input
          type="search"
          placeholder={`Search ${KEY_REGISTRY.length} keys…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="all">All groups</option>
          {GROUPS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
          <input
            type="checkbox"
            checked={onlyExplicit}
            onChange={(e) => setOnlyExplicit(e.target.checked)}
          />
          Explicit only
        </label>
        <span style={{ fontSize: 12, color: '#888' }}>{total} matches</span>
      </div>
      <div className="grid">
        {Array.from(filtered.entries()).map(([g, metas]) => (
          <div key={g} className="group">
            <div className="group-title">{g} · {metas.length}</div>
            {metas.map((m) => {
              const implicit = !isExplicit(m.key);
              return (
                <div key={m.key} className="row">
                  <ColorSwatch keyName={m.key} />
                  <div>
                    <div className={`key-name ${implicit ? 'implicit' : ''}`} style={implicit ? { color: '#888', fontStyle: 'italic' } : undefined}>
                      {m.key}
                    </div>
                    <div className="desc">{m.description}</div>
                  </div>
                  <ContrastBadge keyName={m.key} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
