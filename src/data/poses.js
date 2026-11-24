// Shared movement-pattern pose diagrams. Each exercise in exercises.js maps to one of
// these pattern keys. These are original stick-figure pictogram illustrations (start +
// execution frames) — never real photographs — rendered by StickFigure/ExerciseIllustration.
export const POSES = {
  squat: {
    label: 'Squat Pattern',
    equipment: 'barbell',
    highlight: { x: 55, y: 68, r: 15 },
    start: { head: [50, 18], shoulder: [50, 28], elbow: [40, 30], hand: [34, 26], hip: [50, 52], knee: [50, 74], foot: [50, 92] },
    execution: { head: [47, 36], shoulder: [50, 46], elbow: [40, 44], hand: [34, 40], hip: [42, 64], knee: [66, 70], foot: [58, 92] },
  },
  hinge: {
    label: 'Hip Hinge Pattern',
    equipment: 'barbell',
    highlight: { x: 40, y: 58, r: 16 },
    start: { head: [50, 20], shoulder: [50, 30], elbow: [46, 40], hand: [44, 55], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
    execution: { head: [28, 46], shoulder: [33, 50], elbow: [25, 58], hand: [21, 76], hip: [50, 55], knee: [52, 76], foot: [50, 92] },
  },
  lunge: {
    label: 'Lunge Pattern',
    equipment: 'dumbbell',
    highlight: { x: 66, y: 72, r: 14 },
    start: { head: [50, 18], shoulder: [50, 28], elbow: [44, 34], hand: [40, 44], hip: [50, 54], knee: [50, 75], foot: [50, 92] },
    execution: { head: [46, 24], shoulder: [46, 34], elbow: [40, 40], hand: [36, 48], hip: [46, 58], knee: [66, 76], foot: [72, 92], knee2: [30, 80], foot2: [20, 94] },
  },
  horizontalPush: {
    label: 'Horizontal Push',
    equipment: 'barbell',
    highlight: { x: 34, y: 75, r: 14 },
    start: { head: [18, 80], shoulder: [28, 80], elbow: [28, 68], hand: [28, 58], hip: [54, 80], knee: [68, 78], foot: [82, 82] },
    execution: { head: [18, 80], shoulder: [28, 80], elbow: [28, 54], hand: [28, 42], hip: [54, 80], knee: [68, 78], foot: [82, 82] },
  },
  horizontalPull: {
    label: 'Horizontal Pull',
    equipment: 'dumbbell',
    highlight: { x: 38, y: 50, r: 14 },
    start: { head: [26, 42], shoulder: [33, 46], elbow: [29, 56], hand: [25, 68], hip: [55, 56], knee: [60, 76], foot: [58, 92] },
    execution: { head: [26, 42], shoulder: [33, 46], elbow: [42, 50], hand: [47, 52], hip: [55, 56], knee: [60, 76], foot: [58, 92] },
  },
  verticalPush: {
    label: 'Vertical Push',
    equipment: 'dumbbell',
    highlight: { x: 50, y: 26, r: 14 },
    start: { head: [50, 20], shoulder: [50, 30], elbow: [42, 36], hand: [40, 44], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
    execution: { head: [50, 20], shoulder: [50, 30], elbow: [46, 15], hand: [48, 6], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
  },
  verticalPull: {
    label: 'Vertical Pull',
    equipment: 'pullupbar',
    highlight: { x: 46, y: 30, r: 14 },
    start: { head: [50, 32], shoulder: [50, 40], elbow: [42, 24], hand: [38, 10], hip: [50, 62], knee: [50, 80], foot: [50, 96] },
    execution: { head: [50, 18], shoulder: [50, 26], elbow: [40, 18], hand: [38, 10], hip: [50, 50], knee: [50, 72], foot: [50, 90] },
  },
  bicepCurl: {
    label: 'Elbow Flexion',
    equipment: 'dumbbell',
    highlight: { x: 50, y: 38, r: 12 },
    start: { head: [50, 18], shoulder: [50, 28], elbow: [50, 42], hand: [48, 56], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
    execution: { head: [50, 18], shoulder: [50, 28], elbow: [50, 42], hand: [42, 30], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
  },
  tricepsExtension: {
    label: 'Elbow Extension',
    equipment: 'dumbbell',
    highlight: { x: 52, y: 40, r: 12 },
    start: { head: [50, 18], shoulder: [50, 28], elbow: [50, 34], hand: [50, 48], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
    execution: { head: [50, 18], shoulder: [50, 28], elbow: [50, 34], hand: [53, 60], hip: [50, 55], knee: [50, 75], foot: [50, 92] },
  },
  corePlank: {
    label: 'Core Brace',
    equipment: 'bodyweight',
    highlight: { x: 50, y: 70, r: 16 },
    start: { head: [20, 68], shoulder: [30, 70], elbow: [30, 78], hand: [34, 82], hip: [54, 70], knee: [70, 72], foot: [84, 76] },
    execution: { head: [20, 68], shoulder: [30, 70], elbow: [30, 78], hand: [34, 82], hip: [55, 74], knee: [70, 73], foot: [84, 76] },
  },
  coreRotation: {
    label: 'Trunk Rotation',
    equipment: 'bodyweight',
    highlight: { x: 50, y: 46, r: 14 },
    start: { head: [50, 25], shoulder: [50, 34], elbow: [40, 40], hand: [34, 44], hip: [50, 58], knee: [50, 76], foot: [50, 92] },
    execution: { head: [50, 25], shoulder: [50, 34], elbow: [60, 40], hand: [66, 44], hip: [50, 58], knee: [50, 76], foot: [50, 92] },
  },
  carry: {
    label: 'Loaded Carry',
    equipment: 'kettlebell',
    highlight: { x: 50, y: 34, r: 14 },
    start: { head: [50, 20], shoulder: [50, 30], elbow: [44, 42], hand: [42, 56], hip: [50, 55], knee: [58, 74], foot: [66, 90], knee2: [42, 76], foot2: [38, 92] },
    execution: { head: [50, 20], shoulder: [50, 30], elbow: [44, 42], hand: [42, 56], hip: [50, 55], knee: [42, 76], foot: [38, 92], knee2: [58, 74], foot2: [66, 90] },
  },
  kettlebellSwing: {
    label: 'Ballistic Hinge',
    equipment: 'kettlebell',
    highlight: { x: 44, y: 58, r: 14 },
    start: { head: [32, 46], shoulder: [36, 50], elbow: [30, 58], hand: [26, 72], hip: [50, 56], knee: [54, 76], foot: [52, 92] },
    execution: { head: [50, 18], shoulder: [50, 28], elbow: [46, 24], hand: [44, 16], hip: [50, 54], knee: [50, 74], foot: [50, 92] },
  },
  punch: {
    label: 'Striking Pattern',
    equipment: 'bag',
    highlight: { x: 50, y: 36, r: 14 },
    start: { head: [50, 22], shoulder: [50, 32], elbow: [44, 36], hand: [40, 30], hip: [48, 56], knee: [60, 74], foot: [66, 90], knee2: [36, 76], foot2: [30, 92] },
    execution: { head: [50, 22], shoulder: [50, 32], elbow: [60, 32], hand: [78, 30], hip: [48, 56], knee: [60, 74], foot: [66, 90], knee2: [36, 76], foot2: [30, 92] },
  },
  kick: {
    label: 'Kicking Pattern',
    equipment: 'bag',
    highlight: { x: 50, y: 56, r: 14 },
    start: { head: [50, 22], shoulder: [50, 32], elbow: [40, 36], hand: [36, 28], hip: [48, 56], knee: [60, 74], foot: [66, 90], knee2: [36, 76], foot2: [30, 92] },
    execution: { head: [50, 22], shoulder: [50, 32], elbow: [40, 36], hand: [36, 28], hip: [50, 56], knee: [66, 50], foot: [80, 46], knee2: [40, 78], foot2: [36, 94] },
  },
  battleRopes: {
    label: 'Alternating Wave',
    equipment: 'rope',
    highlight: { x: 50, y: 40, r: 16 },
    start: { head: [50, 26], shoulder: [50, 36], elbow: [40, 40], hand: [34, 30], elbow2: [60, 46], hand2: [66, 54], hip: [50, 58], knee: [50, 78], foot: [50, 94] },
    execution: { head: [50, 26], shoulder: [50, 36], elbow: [40, 46], hand: [34, 54], elbow2: [60, 40], hand2: [66, 30], hip: [50, 58], knee: [50, 78], foot: [50, 94] },
  },
  sprintCardio: {
    label: 'Sprint Drive',
    equipment: 'none',
    highlight: { x: 48, y: 60, r: 16 },
    start: { head: [40, 22], shoulder: [42, 30], elbow: [36, 38], hand: [30, 46], elbow2: [54, 40], hand2: [60, 34], hip: [48, 54], knee: [58, 72], foot: [66, 90], knee2: [34, 70], foot2: [26, 88] },
    execution: { head: [40, 22], shoulder: [42, 30], elbow: [36, 46], hand: [30, 40], elbow2: [54, 36], hand2: [60, 44], hip: [48, 54], knee: [34, 70], foot: [26, 88], knee2: [58, 72], foot2: [66, 90] },
  },
  stretchMobility: {
    label: 'Mobility Hold',
    equipment: 'none',
    highlight: { x: 50, y: 55, r: 16 },
    start: { head: [50, 42], shoulder: [50, 50], elbow: [46, 54], hand: [46, 62], hip: [50, 58], knee: [50, 76], foot: [50, 92] },
    execution: { head: [46, 34], shoulder: [48, 44], elbow: [44, 50], hand: [44, 60], hip: [50, 58], knee: [50, 76], foot: [50, 92] },
  },
  clinchWrestling: {
    label: 'Clinch Tie-Up',
    equipment: 'none',
    highlight: { x: 50, y: 36, r: 16 },
    start: { head: [48, 28], shoulder: [50, 36], elbow: [40, 40], hand: [38, 32], elbow2: [60, 40], hand2: [62, 32], hip: [48, 58], knee: [50, 78], foot: [50, 94] },
    execution: { head: [48, 28], shoulder: [50, 36], elbow: [42, 38], hand: [50, 30], elbow2: [58, 38], hand2: [52, 30], hip: [48, 58], knee: [50, 78], foot: [50, 94] },
  },
  takedownWrestling: {
    label: 'Takedown Entry',
    equipment: 'none',
    highlight: { x: 45, y: 65, r: 16 },
    start: { head: [46, 30], shoulder: [48, 38], elbow: [40, 44], hand: [36, 52], hip: [50, 56], knee: [56, 76], foot: [58, 92] },
    execution: { head: [26, 60], shoulder: [34, 60], elbow: [26, 68], hand: [18, 78], hip: [50, 62], knee: [44, 80], foot: [40, 94], knee2: [64, 74], foot2: [70, 90] },
  },
}

export function getPose(key) {
  return POSES[key] || POSES.stretchMobility
}
