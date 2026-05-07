import { PLAYERS, PLAYER_PROGRESS } from '../data/players';
import type { Player, PlayerProgress, MetricSnapshot } from '../types';

export const playerService = {
  getAll(): Player[] {
    return PLAYERS;
  },

  getById(id: string): Player | undefined {
    return PLAYERS.find((p) => p.id === id);
  },

  getProgress(playerId: string): PlayerProgress | undefined {
    return PLAYER_PROGRESS.find((pp) => pp.playerId === playerId);
  },

  latestSnapshot(playerId: string): MetricSnapshot | undefined {
    const progress = playerService.getProgress(playerId);
    if (!progress || progress.snapshots.length === 0) return undefined;
    return progress.snapshots[progress.snapshots.length - 1];
  },

  improvement(playerId: string): Partial<MetricSnapshot> | null {
    const progress = playerService.getProgress(playerId);
    if (!progress || progress.snapshots.length < 2) return null;
    const first = progress.snapshots[0];
    const last = progress.snapshots[progress.snapshots.length - 1];
    return {
      verticalJumpCm: last.verticalJumpCm - first.verticalJumpCm,
      sprint30mSec: +(last.sprint30mSec - first.sprint30mSec).toFixed(2),
      shootingPct: last.shootingPct - first.shootingPct,
      freeThrowPct: last.freeThrowPct - first.freeThrowPct,
      staminaScore: last.staminaScore - first.staminaScore,
    };
  },
};
