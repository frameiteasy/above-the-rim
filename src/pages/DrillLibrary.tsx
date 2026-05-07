import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Clock, ChevronRight } from 'lucide-react';
import { drillService } from '../services/drillService';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import type { DrillCategory, Difficulty } from '../types';

const CATEGORIES: Array<DrillCategory | 'all'> = ['all', 'shooting', 'dribbling', 'defense', 'passing', 'conditioning', 'footwork'];
const DIFFICULTIES: Array<Difficulty | 'all'> = ['all', 'beginner', 'intermediate', 'advanced'];

export function DrillLibrary() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<DrillCategory | 'all'>(
    (searchParams.get('category') as DrillCategory) ?? 'all'
  );
  const [difficulty, setDifficulty] = useState<Difficulty | 'all'>('all');

  useEffect(() => {
    const cat = searchParams.get('category') as DrillCategory | null;
    if (cat) setCategory(cat);
  }, [searchParams]);

  function updateCategory(cat: DrillCategory | 'all') {
    setCategory(cat);
    if (cat !== 'all') setSearchParams({ category: cat });
    else setSearchParams({});
  }

  const drills = drillService.filter({ search, category, difficulty });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Drill Library</h1>
        <p className="text-slate-500 mt-1 text-sm">{drillService.getAll().length} drills total</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          placeholder="Search drills…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<Search size={15} />}
        />

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => updateCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                category === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficulty(diff)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${
                difficulty === diff
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {drills.length === 0 ? (
        <p className="text-slate-400 text-sm py-8 text-center">No drills match your filters.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {drills.map((drill) => (
            <Card key={drill.id} onClick={() => navigate(`/drills/${drill.id}`)} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <Badge label={drill.category} variant="category" />
                    <Badge label={drill.difficulty} variant="difficulty" />
                  </div>
                  <p className="font-semibold text-slate-900 text-sm mt-2">{drill.name}</p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{drill.description}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-400">
                    <Clock size={11} />
                    <span>{drill.durationMinutes} min</span>
                  </div>
                </div>
                <ChevronRight size={15} className="text-slate-300 shrink-0 mt-1" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
