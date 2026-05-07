import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { playerService } from '../services/playerService';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { TrendingUp, ChevronRight } from 'lucide-react';

export function Players() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const isCoach = user?.role === 'coach';
  const players = isCoach ? playerService.getAll() : [];

  if (!isCoach) {
    const myPlayer = user?.playerId ? playerService.getById(user.playerId) : undefined;
    if (myPlayer) {
      navigate(`/players/${myPlayer.id}`, { replace: true });
      return null;
    }
    return <p className="text-slate-500 text-sm">No player profile found.</p>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Players</h1>
        <p className="text-slate-500 mt-1 text-sm">{players.length} enrolled this camp</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {players.map((player) => {
          const latest = playerService.latestSnapshot(player.id);
          const improvement = playerService.improvement(player.id);
          const jumpGain = improvement?.verticalJumpCm;

          return (
            <Card key={player.id} onClick={() => navigate(`/players/${player.id}`)} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">#{player.jerseyNumber}</span>
                    <Badge label={player.position} variant="position" />
                    <span className="text-xs text-slate-400">Age {player.age}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{player.name}</p>
                  {latest && (
                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                      <span>Jump: <strong className="text-slate-700">{latest.verticalJumpCm} cm</strong></span>
                      <span>FT: <strong className="text-slate-700">{latest.freeThrowPct}%</strong></span>
                    </div>
                  )}
                  {jumpGain && jumpGain > 0 && (
                    <div className="flex items-center gap-1 mt-1 text-xs text-emerald-600">
                      <TrendingUp size={11} />
                      <span>+{jumpGain} cm vertical this camp</span>
                    </div>
                  )}
                </div>
                <ChevronRight size={15} className="text-slate-300 shrink-0 mt-1" />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
