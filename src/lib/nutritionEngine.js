import { ACTIVITY_LEVELS } from '../data/constants'

// Average extra daily energy expenditure from the 4 weekly training sessions,
// spread across all 7 days. This is a labeled estimate, not a precise figure —
// real values vary by session intensity and the athlete's own effort.
const AVG_DAILY_TRAINING_KCAL = 180

// Conservative starting surplus for lean mass gain (within the requested 200-300 kcal band).
export const STARTING_SURPLUS_KCAL = 250

// Hypertrophy-oriented protein intake per kg of bodyweight.
const PROTEIN_G_PER_KG = 1.8
const PROTEIN_MIN_G = 95
const PROTEIN_MAX_G = 130

const FAT_PCT_OF_CALORIES = 0.27

function activityMultiplier(activityLevel) {
  return ACTIVITY_LEVELS.find((a) => a.key === activityLevel)?.multiplier ?? 1.2
}

// Mifflin-St Jeor equation.
export function calculateBMR({ weightKg, heightCm, age, sex }) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return Math.round(sex === 'female' ? base - 161 : base + 5)
}

export function calculateMaintenanceCalories(profile) {
  const bmr = calculateBMR(profile)
  const neat = bmr * activityMultiplier(profile.activityLevel)
  return Math.round(neat + AVG_DAILY_TRAINING_KCAL)
}

export function calculateNutritionTargets(profile) {
  const maintenance = calculateMaintenanceCalories(profile)
  const calories = maintenance + STARTING_SURPLUS_KCAL

  const proteinG = Math.min(PROTEIN_MAX_G, Math.max(PROTEIN_MIN_G, Math.round(profile.weightKg * PROTEIN_G_PER_KG)))
  const proteinKcal = proteinG * 4

  const fatKcal = calories * FAT_PCT_OF_CALORIES
  const fatG = Math.round(fatKcal / 9)

  const carbsKcal = Math.max(0, calories - proteinKcal - fatKcal)
  const carbsG = Math.round(carbsKcal / 4)

  return {
    calories: Math.round(calories),
    proteinG,
    carbsG,
    fatG,
    waterMl: 3000,
    creatineG: 5,
    estimatedMaintenance: maintenance,
    bmr: calculateBMR(profile),
  }
}
