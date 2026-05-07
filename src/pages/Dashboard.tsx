import { useNavigate } from 'react-router-dom';
import { BookOpen, CalendarDays, Users, ChevronRight, Clock } from 'lucide-react';
import { planService } from '../services/planService';
import { drillService } from '../services/drillService';
import { playerService } from '../services/playerService';
import { useAuth } from '../hooks/useAuth';
import { StatCard } from '../components/ui/StatCard';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
  });
}

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const upcomingPlans = planService.upcoming(3);
  const recentPlans   = planService.recent(2);
  const allPlans      = planService.getAll();
  const allDrills     = drillService.getAll();
  const allPlayers    = playerService.getAll();

  const isCoach = user?.role === 'coach';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Welcome back, {user?.name.split(' ')[0]}
        </h1>
        <p className="text-slate-500 mt-1 text-sm">Here's what's happening with the camp.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="Total Drills"
          value={allDrills.length}
          sub="in the library"
          icon={<BookOpen size={18} />}
        />
        <StatCard
          label="Training Plans"
          value={allPlans.length}
          sub="this camp"
          icon={<CalendarDays size={18} />}
        />
        {isCoach && (
          <StatCard
            label="Players"
            value={allPlayers.length}
            sub="enrolled"
            icon={<Users size={18} />}
          />
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Upcoming Sessions
          </h2>
          {upcomingPlans.length === 0 ? (
            <p className="text-sm text-slate-400">No upcoming sessions scheduled.</p>
          ) : (
            <div className="space-y-2">
              {upcomingPlans.map((plan) => (
                <Card key={plan.id} onClick={() => navigate(`/plans/${plan.id}`)} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 text-sm truncate">{plan.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{formatDate(plan.date)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge label={plan.focus} variant="neutral" />
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock size={11} />{plan.totalMinutes} min
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 shrink-0 mt-1" />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Recent Sessions
          </h2>
          {recentPlans.length === 0 ? (
            <p className="text-sm text-slate-400">No past sessions yet.</p>
          ) : (
            <div className="space-y-2">
              {recentPlans.map((plan) => (
                <Card key={plan.id} onClick={() => navigate(`/plans/${plan.id}`)} className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 text-sm truncate">{plan.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{formatDate(plan.date)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-slate-400">{plan.drills.length} drills</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <Clock size={11} />{plan.totalMinutes} min
                        </span>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 shrink-0 mt-1" />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
          Drill Library at a Glance
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {drillService.categories().map((cat) => {
            const count = allDrills.filter((d) => d.category === cat).length;
            return (
              <Card
                key={cat}
                onClick={() => navigate(`/drills?category=${cat}`)}
                className="p-4 flex items-center justify-between"
              >
                <div>
                  <Badge label={cat} variant="category" />
                  <p className="text-lg font-bold text-slate-900 mt-1">{count}</p>
                  <p className="text-xs text-slate-400">drills</p>
                </div>
                <ChevronRight size={15} className="text-slate-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
