import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Youtube, CheckCircle2, Wrench } from 'lucide-react';
import { drillService } from '../services/drillService';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function DrillDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const drill = id ? drillService.getById(id) : undefined;

  if (!drill) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Drill not found.</p>
        <Button variant="ghost" onClick={() => navigate('/drills')} className="mt-4">
          Back to library
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
        <ArrowLeft size={15} /> Back
      </Button>

      <div>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <Badge label={drill.category} variant="category" />
          <Badge label={drill.difficulty} variant="difficulty" />
          <span className="flex items-center gap-1 text-xs text-slate-400 ml-1">
            <Clock size={12} /> {drill.durationMinutes} min
          </span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{drill.name}</h1>
        <p className="text-slate-600 mt-2 leading-relaxed">{drill.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Coaching Cues
          </h2>
          <ul className="space-y-2">
            {drill.coachingCues.map((cue, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={15} className="text-brand-500 shrink-0 mt-0.5" />
                {cue}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Equipment
          </h2>
          {drill.equipment.length === 0 ? (
            <p className="text-sm text-slate-400">No equipment needed</p>
          ) : (
            <ul className="space-y-1.5">
              {drill.equipment.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <Wrench size={13} className="text-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-5 mb-2">
            Tags
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {drill.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        </Card>
      </div>

      {drill.videoUrl && (
        <Card className="p-5">
          <a
            href={drill.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700"
          >
            <Youtube size={18} />
            Watch drill video
          </a>
        </Card>
      )}
    </div>
  );
}
