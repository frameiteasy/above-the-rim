import clsx from 'clsx';

type Variant = 'category' | 'difficulty' | 'position' | 'neutral';

const categoryColors: Record<string, string> = {
  shooting:     'bg-amber-100 text-amber-800',
  dribbling:    'bg-blue-100 text-blue-800',
  defense:      'bg-red-100 text-red-800',
  passing:      'bg-green-100 text-green-800',
  conditioning: 'bg-purple-100 text-purple-800',
  footwork:     'bg-cyan-100 text-cyan-800',
};

const difficultyColors: Record<string, string> = {
  beginner:     'bg-emerald-100 text-emerald-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced:     'bg-rose-100 text-rose-800',
};

const positionColors: Record<string, string> = {
  PG: 'bg-violet-100 text-violet-800',
  SG: 'bg-sky-100 text-sky-800',
  SF: 'bg-teal-100 text-teal-800',
  PF: 'bg-orange-100 text-orange-800',
  C:  'bg-slate-100 text-slate-700',
};

interface Props {
  label: string;
  variant?: Variant;
}

export function Badge({ label, variant = 'neutral' }: Props) {
  const color =
    variant === 'category'   ? (categoryColors[label]   ?? 'bg-slate-100 text-slate-700') :
    variant === 'difficulty' ? (difficultyColors[label] ?? 'bg-slate-100 text-slate-700') :
    variant === 'position'   ? (positionColors[label]   ?? 'bg-slate-100 text-slate-700') :
    'bg-slate-100 text-slate-600';

  return (
    <span className={clsx('inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize', color)}>
      {label}
    </span>
  );
}
