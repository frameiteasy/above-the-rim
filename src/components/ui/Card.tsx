import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'bg-white rounded-xl border border-slate-100 shadow-sm',
        onClick && 'cursor-pointer hover:shadow-md hover:border-slate-200 transition-all duration-150',
        className
      )}
    >
      {children}
    </div>
  );
}
