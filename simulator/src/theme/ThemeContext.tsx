import {
  createContext,
  CSSProperties,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { ALL_KEYS, cssVarName, KEY_MAP } from './keyRegistry';
import { BASE_PALETTES, BaseTheme } from './basePalettes';

export type ColorMap = Record<string, string>;

type State = {
  /** Keys explicitly set by the current theme (no fallbacks). */
  explicit: ColorMap;
  /** Name of the currently loaded theme (for export dialog defaults). */
  sourceName: string | null;
  baseTheme: BaseTheme;
  history: ColorMap[];
  historyIndex: number;
};

type Action =
  | { type: 'LOAD_THEME'; payload: { name: string; colors: ColorMap } }
  | { type: 'SET_KEY'; key: string; value: string }
  | { type: 'SET_BASE'; base: BaseTheme }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'RESET' };

const HISTORY_CAP = 50;

function pushHistory(state: State, next: ColorMap): State {
  const trimmed = state.history.slice(0, state.historyIndex + 1);
  const newHistory = [...trimmed, next].slice(-HISTORY_CAP);
  return { ...state, explicit: next, history: newHistory, historyIndex: newHistory.length - 1 };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'LOAD_THEME': {
      const next = { ...action.payload.colors };
      return {
        ...state,
        explicit: next,
        sourceName: action.payload.name,
        history: [next],
        historyIndex: 0,
      };
    }
    case 'SET_KEY': {
      const next = { ...state.explicit, [action.key]: action.value };
      return pushHistory(state, next);
    }
    case 'SET_BASE':
      return { ...state, baseTheme: action.base };
    case 'UNDO': {
      if (state.historyIndex <= 0) return state;
      const idx = state.historyIndex - 1;
      return { ...state, historyIndex: idx, explicit: state.history[idx] };
    }
    case 'REDO': {
      if (state.historyIndex >= state.history.length - 1) return state;
      const idx = state.historyIndex + 1;
      return { ...state, historyIndex: idx, explicit: state.history[idx] };
    }
    case 'RESET':
      return { ...state, explicit: {}, history: [{}], historyIndex: 0, sourceName: null };
    default:
      return state;
  }
}

const initialState: State = {
  explicit: {},
  sourceName: null,
  baseTheme: 'dark',
  history: [{}],
  historyIndex: 0,
};

type Ctx = {
  state: State;
  dispatch: Dispatch<Action>;
  /** Effective color for a key, including base-theme fallthrough. */
  resolve: (key: string) => string;
  /** Whether a key is explicitly set (vs falling through to base). */
  isExplicit: (key: string) => boolean;
  canUndo: boolean;
  canRedo: boolean;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resolve = useCallback(
    (key: string): string => {
      if (key in state.explicit) return state.explicit[key];
      return BASE_PALETTES[state.baseTheme][key] ?? '#FF00FF';
    },
    [state.explicit, state.baseTheme],
  );

  const isExplicit = useCallback(
    (key: string): boolean => key in state.explicit,
    [state.explicit],
  );

  const value = useMemo<Ctx>(
    () => ({
      state,
      dispatch,
      resolve,
      isExplicit,
      canUndo: state.historyIndex > 0,
      canRedo: state.historyIndex < state.history.length - 1,
    }),
    [state, resolve, isExplicit],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme(): Ctx {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

export function useKey(key: string): string {
  const { resolve } = useTheme();
  return resolve(key);
}

/** CSS custom properties for every registered key, driving the mockup. */
export function useCssVars(): CSSProperties {
  const { resolve } = useTheme();
  const vars = useMemo(() => {
    const out: Record<string, string> = {};
    for (const k of ALL_KEYS) out[cssVarName(k)] = resolve(k);
    return out;
  }, [resolve]);
  return vars as CSSProperties;
}

export function cssVar(key: string): string {
  if (!KEY_MAP.has(key)) throw new Error(`Unknown theme key: ${key}`);
  return `var(${cssVarName(key)})`;
}
