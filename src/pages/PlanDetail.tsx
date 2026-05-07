import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, StickyNote, Hash } from 'lucide-react';
import { planService } from '../services/planService';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

function formatDate(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function PlanDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const plan = id ? planService.getById(id) : undefined;

  if (!plan) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Plan not found.</p>
        <Button variant="ghost" onClick={() => navigate('/plans')} className="mt-4">Back to plans</Button>
      </div>
    );
  }

  const items = planService.drillsForPlan(plan);

  return (
    <div className="space-y-6 max-w-2xl">
      <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
        <ArrowLeft size={15} /> Back
      </Button>

      <div>
        <p className="text-sm text-slate-500 mb-1">{formatDate(plan.date)}</p>
        <h1 className="text-2xl font-bold text-slate-900">{plan.title}</h1>
        <p className="text-slate-600 mt-1">{plan.focus}</p>

        <div className="flex items-center gap-4 mt-3 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><BookOpen size={14} /> {plan.drills.length} drills</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> {plan.totalMinutes} min total</span>
        </div>
      </div>

      {plan.notes && (
        <Card className="p-4 bg-amber-50 border-amber-100">
          <div className="flex items-start gap-2">
            <StickyNote size={15} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{plan.notes}</p>
          </div>
        </Card>
      )}

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
          Session Drills
        </h2>
        {items.map(({ planDrill, drill }, index) => (
          <Card
            key={planDrill.drillId}
            className="p-4"
            onClick={drill ? () => navigate(`/drills/${drill.id}`) : undefined}
          >
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {drill && <Badge label={drill.category} variant="category" />}
                  {drill && <Badge label={drill.difficulty} variant="difficulty" />}
                </div>
                <p className="font-semibold text-slate-900 text-sm">
                  {drill?.name ?? planDrill.drillId}
                </p>
                {drill && (
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{drill.description}</p>
                )}
                <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 flex-wrap">
                  {planDrill.sets && (
                    <span className="flex items-center gap-1"><Hash size={11} />{planDrill.sets} sets</span>
                  )}
                  {planDrill.reps && (
                    <span>{planDrill.reps} reps</span>
                  )}
                  {planDrill.durationMinutes && (
                    <span className="flex items-center gap-1"><Clock size={11} />{planDrill.durationMinutes} min</span>
                  )}
                </div>
                {planDrill.notes && (
                  <p className="text-xs text-amber-700 mt-1.5 italic">{planDrill.notes}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
