import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export type PickerTarget = {
  keys: readonly string[];
  title: string;
  anchor: DOMRect;
};

type PickerCtx = {
  target: PickerTarget | null;
  open: (target: PickerTarget) => void;
  close: () => void;
};

const Ctx = createContext<PickerCtx | null>(null);

export function PickerProvider({ children }: { children: ReactNode }) {
  const [target, setTarget] = useState<PickerTarget | null>(null);
  const open = useCallback((t: PickerTarget) => setTarget(t), []);
  const close = useCallback(() => setTarget(null), []);
  const value = useMemo(() => ({ target, open, close }), [target, open, close]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePicker(): PickerCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('usePicker must be used inside PickerProvider');
  return ctx;
}
