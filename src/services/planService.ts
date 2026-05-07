import { TRAINING_PLANS } from '../data/plans';
import { drillService } from './drillService';
import type { TrainingPlan } from '../types';

export const planService = {
  getAll(): TrainingPlan[] {
    return [...TRAINING_PLANS].sort((a, b) => a.date.localeCompare(b.date));
  },

  getById(id: string): TrainingPlan | undefined {
    return TRAINING_PLANS.find((p) => p.id === id);
  },

  upcoming(limit = 3): TrainingPlan[] {
    const today = new Date().toISOString().split('T')[0];
    return planService
      .getAll()
      .filter((p) => p.date >= today)
      .slice(0, limit);
  },

  recent(limit = 3): TrainingPlan[] {
    const today = new Date().toISOString().split('T')[0];
    return planService
      .getAll()
      .filter((p) => p.date < today)
      .reverse()
      .slice(0, limit);
  },

  drillsForPlan(plan: TrainingPlan) {
    return plan.drills.map((pd) => ({
      planDrill: pd,
      drill: drillService.getById(pd.drillId),
    }));
  },
};
