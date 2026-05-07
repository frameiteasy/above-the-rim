import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: Props) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed',
        size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm',
        variant === 'primary'   && 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
        variant === 'secondary' && 'bg-slate-100 text-slate-700 hover:bg-slate-200 active:bg-slate-300',
        variant === 'ghost'     && 'text-slate-600 hover:bg-slate-100 active:bg-slate-200',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
