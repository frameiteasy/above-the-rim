import type { Drill } from '../types';

export const DRILLS: Drill[] = [
  {
    id: 'd1',
    name: 'Mikan Drill',
    description:
      'Classic close-range finishing drill. Alternate layups from each side of the basket without letting the ball touch the floor.',
    category: 'shooting',
    difficulty: 'beginner',
    durationMinutes: 5,
    videoUrl: 'https://www.youtube.com/watch?v=example1',
    tags: ['layup', 'finishing', 'footwork'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'Keep the ball high — chin level or above',
      'Soft touch off the backboard',
      'Land balanced, pivot quickly',
    ],
  },
  {
    id: 'd2',
    name: 'Form Shooting',
    description:
      'One-hand shooting from close range to groove proper mechanics before adding distance.',
    category: 'shooting',
    difficulty: 'beginner',
    durationMinutes: 10,
    tags: ['shooting', 'mechanics', 'fundamentals'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'Elbow under the ball',
      'Follow through — hold the finish',
      'Eyes on the rim, not the ball',
    ],
  },
  {
    id: 'd3',
    name: '3-Point Catch & Shoot',
    description:
      'Player receives a pass from various spots on the 3-point line and shoots immediately.',
    category: 'shooting',
    difficulty: 'intermediate',
    durationMinutes: 12,
    tags: ['3-point', 'catch-and-shoot', 'shooting'],
    equipment: ['basketball', 'hoop', 'partner or rebounder'],
    coachingCues: [
      'Catch in your shooting pocket',
      'Square your feet early',
      'Quick release — no extra dribbles',
    ],
  },
  {
    id: 'd4',
    name: 'Cone Dribbling Slalom',
    description:
      'Weave through a line of cones using alternating hands, focusing on keeping the dribble low and eyes up.',
    category: 'dribbling',
    difficulty: 'beginner',
    durationMinutes: 8,
    tags: ['ball-handling', 'change-of-direction', 'speed'],
    equipment: ['basketball', '6 cones'],
    coachingCues: [
      'Dribble below the knee',
      'Eyes up — not on the ball',
      'Attack each cone, don\'t coast',
    ],
  },
  {
    id: 'd5',
    name: 'Two-Ball Dribbling',
    description:
      'Dribble two basketballs simultaneously in patterns — alternating, simultaneous, and crossover combinations.',
    category: 'dribbling',
    difficulty: 'intermediate',
    durationMinutes: 10,
    tags: ['ball-handling', 'coordination', 'fundamentals'],
    equipment: ['2 basketballs'],
    coachingCues: [
      'Keep both dribbles controlled',
      'Stay in athletic stance',
      'Build pace gradually',
    ],
  },
  {
    id: 'd6',
    name: 'Speed Dribble Full Court',
    description:
      'Sprint full court at maximum speed while maintaining control of the dribble. Return with weak hand.',
    category: 'dribbling',
    difficulty: 'beginner',
    durationMinutes: 6,
    tags: ['ball-handling', 'speed', 'conditioning'],
    equipment: ['basketball'],
    coachingCues: [
      'Push the ball out ahead of you',
      'Run at 100% — train game speed',
      'Switch hands on every return trip',
    ],
  },
  {
    id: 'd7',
    name: 'Defensive Slide Series',
    description:
      'Lateral defensive slides across the lane, then drop-step, then back — continuous for 45 seconds per rep.',
    category: 'defense',
    difficulty: 'beginner',
    durationMinutes: 8,
    tags: ['defense', 'footwork', 'lateral quickness'],
    equipment: [],
    coachingCues: [
      'Stay low — hips below knees',
      'Don\'t cross your feet',
      'Active hands, not flat',
    ],
  },
  {
    id: 'd8',
    name: 'Closeout & Contest',
    description:
      'Defender starts under the basket, coach passes to a shooter. Defender sprints to closeout and contests without fouling.',
    category: 'defense',
    difficulty: 'intermediate',
    durationMinutes: 10,
    tags: ['defense', 'closeout', 'help defense'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'Short choppy steps on arrival',
      'High hand on contest',
      'Read the shooter — don\'t fly by',
    ],
  },
  {
    id: 'd9',
    name: '1-on-1 Deny Defense',
    description:
      'Defender denies the wing player from receiving the ball. Offense tries to get open for 30 seconds.',
    category: 'defense',
    difficulty: 'advanced',
    durationMinutes: 12,
    tags: ['defense', 'on-ball', 'denial'],
    equipment: ['basketball'],
    coachingCues: [
      'Stay between your player and the ball',
      'Feel — don\'t watch — your player',
      'React to the cut immediately',
    ],
  },
  {
    id: 'd10',
    name: '3-Man Weave',
    description:
      'Classic three-player passing drill running full court. Player passes and follows to the outside lane.',
    category: 'passing',
    difficulty: 'beginner',
    durationMinutes: 8,
    tags: ['passing', 'teamwork', 'transition'],
    equipment: ['basketball'],
    coachingCues: [
      'Pass ahead, not at the receiver',
      'Run wide — fill all three lanes',
      'Catch with two hands, go up strong',
    ],
  },
  {
    id: 'd11',
    name: 'Chest Pass Accuracy Wall',
    description:
      'Solo drill: hit target marks on the wall with chest passes. 3 sets of 20 reps per target.',
    category: 'passing',
    difficulty: 'beginner',
    durationMinutes: 6,
    tags: ['passing', 'accuracy', 'fundamentals'],
    equipment: ['basketball', 'wall with targets'],
    coachingCues: [
      'Step into every pass',
      'Thumbs down on follow-through',
      'Snap the wrists — not just arms',
    ],
  },
  {
    id: 'd12',
    name: 'Skip Pass Reads',
    description:
      'Point guard at the top reads defense and delivers skip passes to opposite corners on coach signal.',
    category: 'passing',
    difficulty: 'advanced',
    durationMinutes: 10,
    tags: ['passing', 'decision-making', 'vision'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'See the whole floor before you catch',
      'Pass away from the defense',
      'Receiver: be ready before the pass',
    ],
  },
  {
    id: 'd13',
    name: 'Suicide Runs',
    description:
      'Classic end-line conditioning drill. Sprint to the near free-throw line and back, half-court and back, far free-throw line and back, full court and back.',
    category: 'conditioning',
    difficulty: 'intermediate',
    durationMinutes: 5,
    tags: ['conditioning', 'speed', 'endurance'],
    equipment: [],
    coachingCues: [
      'Touch every line — full acceleration',
      'Turn on the outside foot',
      'Push through fatigue — that\'s the point',
    ],
  },
  {
    id: 'd14',
    name: '17s',
    description:
      'Sprint sideline to sideline 17 times in under 60 seconds. Timed — repeat if missed.',
    category: 'conditioning',
    difficulty: 'advanced',
    durationMinutes: 6,
    tags: ['conditioning', 'endurance', 'team'],
    equipment: [],
    coachingCues: [
      'Set the pace — don\'t go out too fast',
      'Teammates push each other',
      'Record times each session to track progress',
    ],
  },
  {
    id: 'd15',
    name: 'Box Jump Series',
    description:
      'Jump onto box, step down, immediate rebound jump. Develops explosive power and quick-twitch response.',
    category: 'conditioning',
    difficulty: 'intermediate',
    durationMinutes: 8,
    tags: ['vertical', 'explosiveness', 'strength'],
    equipment: ['plyo box (18–24 inch)'],
    coachingCues: [
      'Land soft — absorb with hips',
      'Arms drive the jump',
      'Minimum rest between reps',
    ],
  },
  {
    id: 'd16',
    name: 'Pivot & Jab Step',
    description:
      'Player receives ball, executes pivot on each foot, then jab-steps in each direction to create separation.',
    category: 'footwork',
    difficulty: 'beginner',
    durationMinutes: 7,
    tags: ['footwork', 'pivoting', 'ball security'],
    equipment: ['basketball'],
    coachingCues: [
      'Protect the ball — elbows out',
      'Keep your pivot foot planted',
      'Sell the jab — sell the fake',
    ],
  },
  {
    id: 'd17',
    name: 'Euro Step Finishing',
    description:
      'Driving baseline, player uses two-step gather to change angle and finish on the opposite side of the defender.',
    category: 'footwork',
    difficulty: 'advanced',
    durationMinutes: 10,
    tags: ['footwork', 'finishing', 'layup'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'Gather early — two big steps',
      'Keep the ball away from the defender',
      'Finish with soft touch',
    ],
  },
  {
    id: 'd18',
    name: 'Drop Step Post Move',
    description:
      'Post player receives pass, reads defender position, executes drop step to the baseline or middle.',
    category: 'footwork',
    difficulty: 'intermediate',
    durationMinutes: 10,
    tags: ['footwork', 'post', 'big man'],
    equipment: ['basketball', 'hoop'],
    coachingCues: [
      'Feel the defender before you move',
      'Big first step — seal the lane',
      'Power up — two feet on the finish',
    ],
  },
];
