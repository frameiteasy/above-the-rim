import type { Player, PlayerProgress } from '../types';

export const PLAYERS: Player[] = [
  { id: 'p1', name: 'Marcus Rivera',    age: 16, position: 'PG', jerseyNumber: 3,  joinedDate: '2024-06-01' },
  { id: 'p2', name: 'Jaylen Okafor',    age: 17, position: 'SG', jerseyNumber: 5,  joinedDate: '2024-06-01' },
  { id: 'p3', name: 'Tyler Brooks',     age: 15, position: 'SF', jerseyNumber: 11, joinedDate: '2024-06-01' },
  { id: 'p4', name: 'Devon Sutton',     age: 16, position: 'PF', jerseyNumber: 22, joinedDate: '2024-06-01' },
  { id: 'p5', name: 'Caleb Washington', age: 17, position: 'C',  jerseyNumber: 33, joinedDate: '2024-06-01' },
  { id: 'p6', name: 'Isaiah Flores',    age: 15, position: 'PG', jerseyNumber: 1,  joinedDate: '2024-07-15' },
  { id: 'p7', name: 'Noah Pemberton',   age: 16, position: 'SF', jerseyNumber: 14, joinedDate: '2024-07-15' },
  { id: 'p8', name: 'Jordan Kim',       age: 17, position: 'SG', jerseyNumber: 23, joinedDate: '2024-07-15' },
];

export const PLAYER_PROGRESS: PlayerProgress[] = [
  {
    playerId: 'p1',
    snapshots: [
      { date: '2024-07-01', verticalJumpCm: 58, sprint30mSec: 4.4, shootingPct: 38, freeThrowPct: 65, staminaScore: 72 },
      { date: '2024-08-01', verticalJumpCm: 61, sprint30mSec: 4.3, shootingPct: 41, freeThrowPct: 68, staminaScore: 76 },
      { date: '2024-09-01', verticalJumpCm: 63, sprint30mSec: 4.2, shootingPct: 44, freeThrowPct: 72, staminaScore: 80 },
      { date: '2024-10-01', verticalJumpCm: 65, sprint30mSec: 4.1, shootingPct: 47, freeThrowPct: 74, staminaScore: 83 },
      { date: '2024-11-01', verticalJumpCm: 67, sprint30mSec: 4.0, shootingPct: 49, freeThrowPct: 76, staminaScore: 85 },
      { date: '2024-12-01', verticalJumpCm: 68, sprint30mSec: 3.9, shootingPct: 51, freeThrowPct: 78, staminaScore: 87 },
    ],
  },
  {
    playerId: 'p2',
    snapshots: [
      { date: '2024-07-01', verticalJumpCm: 62, sprint30mSec: 4.2, shootingPct: 42, freeThrowPct: 70, staminaScore: 75 },
      { date: '2024-08-01', verticalJumpCm: 64, sprint30mSec: 4.1, shootingPct: 44, freeThrowPct: 73, staminaScore: 78 },
      { date: '2024-09-01', verticalJumpCm: 65, sprint30mSec: 4.0, shootingPct: 47, freeThrowPct: 75, staminaScore: 80 },
      { date: '2024-10-01', verticalJumpCm: 67, sprint30mSec: 3.9, shootingPct: 50, freeThrowPct: 77, staminaScore: 82 },
      { date: '2024-11-01', verticalJumpCm: 69, sprint30mSec: 3.8, shootingPct: 52, freeThrowPct: 80, staminaScore: 84 },
      { date: '2024-12-01', verticalJumpCm: 70, sprint30mSec: 3.8, shootingPct: 54, freeThrowPct: 82, staminaScore: 86 },
    ],
  },
  {
    playerId: 'p3',
    snapshots: [
      { date: '2024-07-01', verticalJumpCm: 54, sprint30mSec: 4.6, shootingPct: 35, freeThrowPct: 60, staminaScore: 68 },
      { date: '2024-08-01', verticalJumpCm: 56, sprint30mSec: 4.5, shootingPct: 37, freeThrowPct: 63, staminaScore: 70 },
      { date: '2024-09-01', verticalJumpCm: 58, sprint30mSec: 4.4, shootingPct: 40, freeThrowPct: 66, staminaScore: 73 },
      { date: '2024-10-01', verticalJumpCm: 60, sprint30mSec: 4.3, shootingPct: 42, freeThrowPct: 69, staminaScore: 76 },
      { date: '2024-11-01', verticalJumpCm: 61, sprint30mSec: 4.2, shootingPct: 44, freeThrowPct: 71, staminaScore: 78 },
      { date: '2024-12-01', verticalJumpCm: 63, sprint30mSec: 4.1, shootingPct: 46, freeThrowPct: 73, staminaScore: 80 },
    ],
  },
  {
    playerId: 'p4',
    snapshots: [
      { date: '2024-07-01', verticalJumpCm: 66, sprint30mSec: 4.5, shootingPct: 40, freeThrowPct: 58, staminaScore: 70 },
      { date: '2024-08-01', verticalJumpCm: 68, sprint30mSec: 4.4, shootingPct: 42, freeThrowPct: 61, staminaScore: 73 },
      { date: '2024-09-01', verticalJumpCm: 70, sprint30mSec: 4.3, shootingPct: 44, freeThrowPct: 64, staminaScore: 76 },
      { date: '2024-10-01', verticalJumpCm: 72, sprint30mSec: 4.2, shootingPct: 46, freeThrowPct: 66, staminaScore: 78 },
      { date: '2024-11-01', verticalJumpCm: 74, sprint30mSec: 4.1, shootingPct: 48, freeThrowPct: 68, staminaScore: 80 },
      { date: '2024-12-01', verticalJumpCm: 75, sprint30mSec: 4.0, shootingPct: 50, freeThrowPct: 70, staminaScore: 82 },
    ],
  },
  {
    playerId: 'p5',
    snapshots: [
      { date: '2024-07-01', verticalJumpCm: 70, sprint30mSec: 4.8, shootingPct: 44, freeThrowPct: 55, staminaScore: 66 },
      { date: '2024-08-01', verticalJumpCm: 72, sprint30mSec: 4.7, shootingPct: 46, freeThrowPct: 58, staminaScore: 69 },
      { date: '2024-09-01', verticalJumpCm: 74, sprint30mSec: 4.6, shootingPct: 48, freeThrowPct: 60, staminaScore: 72 },
      { date: '2024-10-01', verticalJumpCm: 76, sprint30mSec: 4.5, shootingPct: 50, freeThrowPct: 62, staminaScore: 74 },
      { date: '2024-11-01', verticalJumpCm: 77, sprint30mSec: 4.4, shootingPct: 52, freeThrowPct: 65, staminaScore: 76 },
      { date: '2024-12-01', verticalJumpCm: 79, sprint30mSec: 4.3, shootingPct: 54, freeThrowPct: 67, staminaScore: 78 },
    ],
  },
  {
    playerId: 'p6',
    snapshots: [
      { date: '2024-08-01', verticalJumpCm: 52, sprint30mSec: 4.7, shootingPct: 33, freeThrowPct: 58, staminaScore: 64 },
      { date: '2024-09-01', verticalJumpCm: 54, sprint30mSec: 4.6, shootingPct: 36, freeThrowPct: 61, staminaScore: 67 },
      { date: '2024-10-01', verticalJumpCm: 56, sprint30mSec: 4.5, shootingPct: 38, freeThrowPct: 64, staminaScore: 70 },
      { date: '2024-11-01', verticalJumpCm: 58, sprint30mSec: 4.4, shootingPct: 40, freeThrowPct: 67, staminaScore: 73 },
      { date: '2024-12-01', verticalJumpCm: 60, sprint30mSec: 4.3, shootingPct: 42, freeThrowPct: 69, staminaScore: 76 },
    ],
  },
  {
    playerId: 'p7',
    snapshots: [
      { date: '2024-08-01', verticalJumpCm: 60, sprint30mSec: 4.3, shootingPct: 39, freeThrowPct: 66, staminaScore: 74 },
      { date: '2024-09-01', verticalJumpCm: 62, sprint30mSec: 4.2, shootingPct: 42, freeThrowPct: 69, staminaScore: 76 },
      { date: '2024-10-01', verticalJumpCm: 64, sprint30mSec: 4.1, shootingPct: 44, freeThrowPct: 71, staminaScore: 78 },
      { date: '2024-11-01', verticalJumpCm: 65, sprint30mSec: 4.0, shootingPct: 46, freeThrowPct: 73, staminaScore: 80 },
      { date: '2024-12-01', verticalJumpCm: 67, sprint30mSec: 3.9, shootingPct: 48, freeThrowPct: 75, staminaScore: 82 },
    ],
  },
  {
    playerId: 'p8',
    snapshots: [
      { date: '2024-08-01', verticalJumpCm: 64, sprint30mSec: 4.1, shootingPct: 45, freeThrowPct: 72, staminaScore: 78 },
      { date: '2024-09-01', verticalJumpCm: 66, sprint30mSec: 4.0, shootingPct: 47, freeThrowPct: 74, staminaScore: 80 },
      { date: '2024-10-01', verticalJumpCm: 68, sprint30mSec: 3.9, shootingPct: 49, freeThrowPct: 76, staminaScore: 82 },
      { date: '2024-11-01', verticalJumpCm: 69, sprint30mSec: 3.9, shootingPct: 51, freeThrowPct: 78, staminaScore: 84 },
      { date: '2024-12-01', verticalJumpCm: 71, sprint30mSec: 3.8, shootingPct: 53, freeThrowPct: 80, staminaScore: 86 },
    ],
  },
];
