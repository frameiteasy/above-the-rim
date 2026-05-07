import { useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { planService } from '../services/planService';
import { Card } from '../components/ui/Card';

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function TrainingPlans() {
  const navigate = useNavigate();
  const plans = planService.getAll();
  const today = new Date().toISOString().split('T')[0];
  const upcoming = plans.filter((p) => p.date >= today);
  const past     = plans.filter((p) => p.date < today).reverse();

  function PlanCard({ plan }: { plan: ReturnType<typeof planService.getAll>[0] }) {
    return (
      <Card onClick={() => navigate(`/plans/${plan.id}`)} className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <CalendarDays size={12} />
              <span>{formatDate(plan.date)}</span>
            </div>
            <p className="font-semibold text-slate-900">{plan.title}</p>
            <p className="text-xs text-slate-500 mt-0.5">{plan.focus}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1"><BookOpen size={11} />{plan.drills.length} drills</span>
              <span className="flex items-center gap-1"><Clock size={11} />{plan.totalMinutes} min</span>
            </div>
          </div>
          <ChevronRight size={15} className="text-slate-300 shrink-0 mt-1" />
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Training Plans</h1>
        <p className="text-slate-500 mt-1 text-sm">{plans.length} sessions planned</p>
      </div>

      {upcoming.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Upcoming
          </h2>
          <div className="space-y-2">
            {upcoming.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-3">
            Past Sessions
          </h2>
          <div className="space-y-2 opacity-70">
            {past.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </div>
        </section>
      )}
    </div>
  );
}
