import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { playerService } from '../services/playerService';
import { useAuth } from '../hooks/useAuth';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

function formatMonth(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
}

interface DeltaProps { value: number; unit?: string; lowerIsBetter?: boolean }
function Delta({ value, unit = '', lowerIsBetter = false }: DeltaProps) {
  const improved = lowerIsBetter ? value < 0 : value > 0;
  const neutral  = value === 0;
  const color = neutral ? 'text-slate-400' : improved ? 'text-emerald-600' : 'text-rose-500';
  const Icon  = neutral ? Minus : improved ? TrendingUp : TrendingDown;
  const sign  = value > 0 ? '+' : '';
  return (
    <span className={`flex items-center gap-1 text-xs font-medium ${color}`}>
      <Icon size={12} />{sign}{value}{unit}
    </span>
  );
}

export function PlayerDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isCoach = user?.role === 'coach';

  const player = id ? playerService.getById(id) : undefined;
  const progress = id ? playerService.getProgress(id) : undefined;
  const improvement = id ? playerService.improvement(id) : null;
  const latest = id ? playerService.latestSnapshot(id) : undefined;

  if (!player) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Player not found.</p>
        <Button variant="ghost" onClick={() => navigate('/players')} className="mt-4">Back</Button>
      </div>
    );
  }

  const chartData = progress?.snapshots.map((s) => ({
    month:         formatMonth(s.date),
    'Vertical (cm)': s.verticalJumpCm,
    'Shooting %':  s.shootingPct,
    'Free Throw %':s.freeThrowPct,
    'Stamina':     s.staminaScore,
  })) ?? [];

  return (
    <div className="space-y-6 max-w-3xl">
      {isCoach && (
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft size={15} /> Back
        </Button>
      )}

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-500 flex items-center justify-center text-white text-xl font-bold shrink-0">
          {player.jerseyNumber}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{player.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge label={player.position} variant="position" />
            <span className="text-sm text-slate-500">Age {player.age}</span>
            <span className="text-sm text-slate-400">· Camp since {new Date(player.joinedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {latest && (
        <div className="grid grid-cols-5 gap-3">
          {[
            { label: 'Vertical Jump',  value: `${latest.verticalJumpCm} cm`, delta: improvement?.verticalJumpCm, unit: ' cm' },
            { label: '30m Sprint',     value: `${latest.sprint30mSec}s`,     delta: improvement?.sprint30mSec,   unit: 's', lower: true },
            { label: 'Field Goal %',   value: `${latest.shootingPct}%`,      delta: improvement?.shootingPct,    unit: '%' },
            { label: 'Free Throw %',   value: `${latest.freeThrowPct}%`,     delta: improvement?.freeThrowPct,   unit: '%' },
            { label: 'Stamina Score',  value: latest.staminaScore,           delta: improvement?.staminaScore    },
          ].map(({ label, value, delta, unit, lower }) => (
            <Card key={label} className="p-3 text-center">
              <p className="text-xs text-slate-500 mb-1">{label}</p>
              <p className="text-lg font-bold text-slate-900">{value}</p>
              {delta !== undefined && delta !== null && (
                <div className="flex justify-center mt-1">
                  <Delta value={delta} unit={unit} lowerIsBetter={lower} />
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {chartData.length > 1 && (
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">Progress Over Time</h2>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={32} />
              <Tooltip
                contentStyle={{ fontSize: 12, border: '1px solid #e2e8f0', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Line type="monotone" dataKey="Vertical (cm)"  stroke="#f97316" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Shooting %"     stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Free Throw %"   stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Stamina"        stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      )}

      {progress && progress.snapshots.length > 0 && (
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-slate-700 mb-3">Measurement History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-400 text-left border-b border-slate-100">
                  <th className="pb-2 font-medium">Date</th>
                  <th className="pb-2 font-medium">Vertical</th>
                  <th className="pb-2 font-medium">30m Sprint</th>
                  <th className="pb-2 font-medium">FG %</th>
                  <th className="pb-2 font-medium">FT %</th>
                  <th className="pb-2 font-medium">Stamina</th>
                </tr>
              </thead>
              <tbody>
                {[...progress.snapshots].reverse().map((s) => (
                  <tr key={s.date} className="border-b border-slate-50 last:border-0 text-slate-700">
                    <td className="py-2 text-slate-500 text-xs">{new Date(s.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td className="py-2">{s.verticalJumpCm} cm</td>
                    <td className="py-2">{s.sprint30mSec}s</td>
                    <td className="py-2">{s.shootingPct}%</td>
                    <td className="py-2">{s.freeThrowPct}%</td>
                    <td className="py-2">{s.staminaScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
