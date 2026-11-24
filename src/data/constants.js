export const CATEGORIES = [
  'Chest',
  'Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Legs',
  'Glutes',
  'Core',
  'Functional Training',
  'MMA',
  'Boxing',
  'Wrestling',
  'Cardio',
  'Mobility',
]

export const EQUIPMENT = [
  'Barbell',
  'Dumbbell',
  'Machine',
  'Kettlebell',
  'Battle Ropes',
  'Boxing Bag',
  'Bodyweight',
  'Bands',
  'Bench',
  'Pull-up Bar',
]

export const DIFFICULTY = ['Beginner', 'Intermediate', 'Advanced']

export const GOALS = [
  'Gain muscle mass',
  'Increase overall body weight gradually',
  'Improve muscle definition',
  'Develop proportional shoulders, chest, back and arms',
  'Build strong legs and glutes',
  'Improve core strength',
  'Increase functional strength',
  'Maintain and improve MMA performance',
  'Develop cardiovascular endurance',
]

export const PRIMARY_GOAL = 'Build a lean, muscular, athletic body'

export const ACTIVITY_LEVELS = [
  { key: 'sedentary', label: 'Sedentary (desk job, little daily movement)', multiplier: 1.2 },
  { key: 'light', label: 'Lightly active', multiplier: 1.375 },
  { key: 'moderate', label: 'Moderately active', multiplier: 1.55 },
  { key: 'active', label: 'Very active', multiplier: 1.725 },
]

export const SEX_OPTIONS = ['male', 'female']

export const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export const WEEKDAY_LABELS = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
}

export const DAY_FOCUS = {
  monday: 'Upper Body Hypertrophy',
  tuesday: 'Lower Body Strength & Hypertrophy',
  wednesday: 'Recovery & Mobility',
  thursday: 'Full Body Athletic Strength',
  friday: 'Rest',
  saturday: 'MMA & Conditioning',
  sunday: 'Full Rest',
}

export const TRAINING_DAYS = ['monday', 'tuesday', 'thursday', 'saturday']
export const RECOVERY_DAYS = ['wednesday']
export const REST_DAYS = ['friday', 'sunday']

export const PHASES = {
  FOUNDATION: {
    key: 'foundation',
    label: 'Foundation',
    weeks: [1, 2, 3, 4],
    focus: 'Technique mastery, consistent training habits, baseline strength and hypertrophy, mobility',
    rir: '2-3',
  },
  BUILD: {
    key: 'build',
    label: 'Hypertrophy & Strength',
    weeks: [5, 6, 7, 8],
    focus: 'Progressive volume overload, muscle growth, compound strength, muscular endurance',
    rir: '1-3',
  },
  PERFORMANCE: {
    key: 'performance',
    label: 'Athletic Performance',
    weeks: [9, 10, 11, 12],
    focus: 'Heavier compound strength, explosive power, continued hypertrophy, MMA conditioning',
    rir: '1-3',
  },
}

export function phaseForWeek(weekNumber) {
  if (weekNumber <= 4) return PHASES.FOUNDATION
  if (weekNumber <= 8) return PHASES.BUILD
  return PHASES.PERFORMANCE
}

// schemaVersion 2: real profile (178cm/59kg), RIR-era coaching fields.
// See AppDataProvider's migration for how a stale v1 profile is upgraded safely.
export const PROFILE_SCHEMA_VERSION = 2

export const DEFAULT_PROFILE = {
  schemaVersion: PROFILE_SCHEMA_VERSION,
  name: 'Athlete',
  heightCm: 178,
  weightKg: 59,
  targetWeightKg: 62,
  age: 29,
  sex: 'male',
  activityLevel: 'sedentary',
  dailySteps: 5000,
  eatingHabits: ['No restrictions'],
  experience: 'Intermediate',
  frequency: 4,
  primaryGoal: PRIMARY_GOAL,
  goals: [...GOALS],
  equipment: ['Fully equipped gym', 'MMA training area'],
  programStartDate: null,
  units: 'metric',
}

// Weight-gain pacing target referenced by the nutrition engine and weekly review.
export const WEEKLY_WEIGHT_GAIN_TARGET_KG = { min: 0.15, max: 0.3 }
