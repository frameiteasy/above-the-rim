export type DrillCategory =
  | 'shooting'
  | 'dribbling'
  | 'defense'
  | 'passing'
  | 'conditioning'
  | 'footwork';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Position = 'PG' | 'SG' | 'SF' | 'PF' | 'C';

export interface Drill {
  id: string;
  name: string;
  description: string;
  category: DrillCategory;
  difficulty: Difficulty;
  durationMinutes: number;
  videoUrl?: string;
  tags: string[];
  equipment: string[];
  coachingCues: string[];
}

export interface Player {
  id: string;
  name: string;
  age: number;
  position: Position;
  jerseyNumber: number;
  joinedDate: string;
  notes?: string;
}

export interface MetricSnapshot {
  date: string;
  verticalJumpCm: number;
  sprint30mSec: number;
  shootingPct: number;
  freeThrowPct: number;
  staminaScore: number;
}

export interface PlayerProgress {
  playerId: string;
  snapshots: MetricSnapshot[];
}

export interface PlanDrill {
  drillId: string;
  sets?: number;
  reps?: number;
  durationMinutes?: number;
  notes?: string;
}

export interface TrainingPlan {
  id: string;
  title: string;
  date: string;
  focus: string;
  totalMinutes: number;
  drills: PlanDrill[];
  notes?: string;
}

export interface AuthUser {
  id: string;
  name: string;
  role: 'coach' | 'player';
  playerId?: string;
}

export interface Credentials {
  username: string;
  password: string;
}
