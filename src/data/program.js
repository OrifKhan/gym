// One hand-authored day template per (phase x training day). The progression engine
// (lib/programEngine.js) scales volume/RIR and rotates accessory exercises per week so
// all 12 weeks come out distinct without duplicating data 12 times. Weight itself is
// never prescribed here — progressionAdvisor.js recommends weight changes from what the
// athlete actually logs, never from the template.
//
// `ex` = a strength/hypertrophy prescription: double-progression rep range + target RIR.
// `exCond` = a conditioning/MMA/carry prescription where RIR doesn't apply cleanly; it
// carries a plain-language effort descriptor instead.
const ex = (exerciseId, sets, repLow, repHigh, rir, restSec) => ({
  kind: 'strength',
  exerciseId,
  sets,
  repLow,
  repHigh,
  rir,
  restSec,
})

const exCond = (exerciseId, sets, repsOrDuration, effort, restSec) => ({
  kind: 'conditioning',
  exerciseId,
  sets,
  repsOrDuration,
  effort,
  restSec,
})

const RECOVERY_DAY = {
  focus: 'Recovery & Mobility',
  exercises: [
    exCond('cat-cow-stretch', 2, '10 reps', 'Easy, relaxed', 15),
    exCond('hip-flexor-stretch', 2, '30 sec/side', 'Easy, relaxed', 15),
    exCond('thoracic-rotation', 2, '10/side', 'Easy, relaxed', 20),
    exCond('pigeon-pose', 2, '30-45 sec/side', 'Easy, relaxed', 15),
    exCond('worlds-greatest-stretch', 2, '5/side', 'Easy, relaxed', 20),
  ],
}

export const DAY_TEMPLATES = {
  foundation: {
    monday: {
      focus: 'Upper Body Hypertrophy',
      exercises: [
        ex('barbell-bench-press', 3, 6, 8, '3', 120),
        ex('lat-pulldown', 3, 8, 10, '3', 90),
        ex('overhead-press', 3, 8, 10, '3', 100),
        ex('dumbbell-curl', 3, 10, 12, '2-3', 60),
        ex('triceps-pushdown', 3, 10, 12, '2-3', 60),
        ex('plank', 3, 30, 45, '2', 45),
      ],
    },
    tuesday: {
      focus: 'Lower Body Strength & Hypertrophy',
      exercises: [
        ex('goblet-squat', 3, 8, 10, '3', 90),
        ex('romanian-deadlift', 3, 8, 10, '3', 100),
        ex('walking-lunge', 3, 10, 12, '2-3', 90),
        ex('leg-curl', 3, 10, 12, '2', 60),
        ex('calf-raise', 3, 12, 15, '2', 45),
        ex('russian-twist', 3, 12, 15, '2', 45),
      ],
    },
    wednesday: RECOVERY_DAY,
    thursday: {
      focus: 'Full Body Athletic Strength',
      exercises: [
        ex('push-up', 3, 12, 15, '3', 60),
        exCond('kettlebell-swing', 3, '12-15 reps', 'Controlled, powerful hips', 75),
        ex('step-up', 3, 10, 10, '2-3', 75),
        exCond('farmers-carry', 3, '30m', 'Brisk, controlled', 75),
        exCond('mountain-climbers', 3, '30 sec', 'Moderate', 45),
      ],
    },
    friday: 'rest',
    saturday: {
      focus: 'MMA & Conditioning',
      exercises: [
        exCond('shadow-boxing', 4, '2 min rounds', 'Technical pace', 60),
        exCond('jab-cross-combo', 4, '2 min rounds', 'Technical pace', 60),
        exCond('footwork-ladder-drill', 4, '20 sec', 'Moderate', 40),
        exCond('sprawl-drill', 3, '10 reps', 'Moderate', 60),
        exCond('jump-rope', 4, '45 sec', 'Moderate', 30),
      ],
    },
    sunday: 'rest',
  },
  build: {
    monday: {
      focus: 'Upper Body Hypertrophy',
      exercises: [
        ex('incline-dumbbell-press', 4, 8, 12, '2', 90),
        ex('pull-up', 4, 6, 10, '2', 100),
        ex('arnold-press', 3, 8, 12, '2', 90),
        ex('hammer-curl', 3, 10, 12, '1-2', 60),
        ex('skull-crusher', 3, 10, 12, '1-2', 75),
        ex('ab-wheel-rollout', 3, 8, 10, '2', 75),
      ],
    },
    tuesday: {
      focus: 'Lower Body Strength & Hypertrophy',
      exercises: [
        ex('front-squat', 4, 6, 10, '2', 120),
        ex('romanian-deadlift', 4, 8, 12, '2', 100),
        ex('bulgarian-split-squat', 3, 10, 12, '2', 90),
        ex('leg-extension', 3, 12, 15, '1-2', 60),
        ex('calf-raise', 4, 15, 20, '1-2', 45),
        ex('hanging-leg-raise', 3, 10, 12, '2', 75),
      ],
    },
    wednesday: RECOVERY_DAY,
    thursday: {
      focus: 'Full Body Athletic Strength',
      exercises: [
        exCond('turkish-get-up', 3, '5/side', 'Slow and controlled', 90),
        exCond('kettlebell-swing', 4, '15 reps', 'Powerful hips', 75),
        exCond('farmers-carry', 4, '40m', 'Brisk, heavy', 75),
        exCond('medicine-ball-slam', 4, '12 reps', 'Explosive, low fatigue', 60),
        ex('russian-twist', 3, 16, 16, '2', 45),
      ],
    },
    friday: 'rest',
    saturday: {
      focus: 'MMA & Conditioning',
      exercises: [
        exCond('heavy-bag-combinations', 5, '3 min rounds', 'Hard pace', 60),
        exCond('hook-combination', 4, '2 min rounds', 'Hard pace', 60),
        exCond('clinch-work', 4, '2 min rounds', 'Hard pace', 60),
        exCond('battle-ropes-wave', 4, '25 sec', 'High effort', 45),
        exCond('box-jump', 3, '6 reps', 'Explosive, low fatigue', 90),
      ],
    },
    sunday: 'rest',
  },
  performance: {
    monday: {
      focus: 'Upper Body Hypertrophy',
      exercises: [
        ex('barbell-bench-press', 5, 4, 6, '1-2', 150),
        ex('pull-up', 4, 6, 10, '1-2', 120),
        ex('close-grip-bench-press', 3, 6, 8, '2', 100),
        ex('barbell-curl', 3, 8, 10, '1-2', 60),
        ex('cable-woodchop', 3, 12, 12, '2', 60),
      ],
    },
    tuesday: {
      focus: 'Lower Body Strength & Hypertrophy',
      exercises: [
        ex('deadlift', 5, 3, 5, '1-2', 180),
        ex('leg-press', 4, 8, 10, '2', 90),
        ex('step-up', 3, 8, 8, '2', 75),
        ex('sumo-deadlift', 3, 5, 6, '1-2', 150),
        ex('side-plank', 3, 30, 45, '2', 45),
      ],
    },
    wednesday: RECOVERY_DAY,
    thursday: {
      focus: 'Full Body Athletic Strength',
      exercises: [
        exCond('box-jump', 4, '5 reps', 'Explosive, low fatigue', 90),
        exCond('kettlebell-swing', 4, '12 reps', 'Explosive', 75),
        exCond('medicine-ball-slam', 4, '10 reps', 'Explosive, low fatigue', 60),
        exCond('farmers-carry', 4, '40m', 'Brisk, heavy', 75),
        exCond('burpee', 3, '10 reps', 'High effort', 75),
      ],
    },
    friday: 'rest',
    saturday: {
      focus: 'MMA & Conditioning',
      exercises: [
        exCond('double-end-bag-drill', 4, '2 min rounds', 'Sharp, technical', 60),
        exCond('slip-and-counter', 4, '2 min rounds', 'Sharp, technical', 60),
        exCond('single-leg-takedown', 3, '8/side', 'Moderate-hard', 90),
        exCond('stand-up-escape', 3, '8 reps', 'Moderate', 75),
        exCond('rowing-machine', 4, '500m', 'Hard pace', 60),
      ],
    },
    sunday: 'rest',
  },
}
