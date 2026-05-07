import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: string | number;
  sub?: string;
  icon?: ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ label, value, sub, icon, trend }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex items-start gap-4">
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-0.5">{value}</p>
        {sub && (
          <p className={clsx(
            'text-xs mt-1',
            trend === 'up'      ? 'text-emerald-600' :
            trend === 'down'    ? 'text-rose-500' :
            'text-slate-400'
          )}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
