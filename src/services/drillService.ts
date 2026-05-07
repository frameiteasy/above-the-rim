import { DRILLS } from '../data/drills';
import type { Drill, DrillCategory, Difficulty } from '../types';

export interface DrillFilters {
  search?: string;
  category?: DrillCategory | 'all';
  difficulty?: Difficulty | 'all';
}

export const drillService = {
  getAll(): Drill[] {
    return DRILLS;
  },

  getById(id: string): Drill | undefined {
    return DRILLS.find((d) => d.id === id);
  },

  filter(filters: DrillFilters): Drill[] {
    let result = DRILLS;

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (filters.category && filters.category !== 'all') {
      result = result.filter((d) => d.category === filters.category);
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      result = result.filter((d) => d.difficulty === filters.difficulty);
    }

    return result;
  },

  categories(): DrillCategory[] {
    return ['shooting', 'dribbling', 'defense', 'passing', 'conditioning', 'footwork'];
  },
};
