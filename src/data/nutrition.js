export const MEAL_SLOTS = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'lunch', label: 'Lunch' },
  { key: 'dinner', label: 'Dinner' },
  { key: 'snacks', label: 'Snacks' },
  { key: 'preWorkout', label: 'Pre-Workout Meal' },
  { key: 'postWorkout', label: 'Post-Workout Meal' },
]

// Quick-add reference foods with approximate macros per typical serving.
export const FOOD_LIBRARY = [
  { name: 'Chicken Breast (150g)', calories: 248, proteinG: 46, carbsG: 0, fatG: 5 },
  { name: 'Whole Eggs (3)', calories: 234, proteinG: 19, carbsG: 1, fatG: 16 },
  { name: 'Greek Yogurt (200g)', calories: 146, proteinG: 20, carbsG: 8, fatG: 4 },
  { name: 'Whey Protein Shake', calories: 130, proteinG: 25, carbsG: 4, fatG: 2 },
  { name: 'Rice, cooked (200g)', calories: 260, proteinG: 5, carbsG: 57, fatG: 0.5 },
  { name: 'Oats (80g dry)', calories: 300, proteinG: 11, carbsG: 54, fatG: 5 },
  { name: 'Banana', calories: 105, proteinG: 1, carbsG: 27, fatG: 0.3 },
  { name: 'Salmon Fillet (150g)', calories: 280, proteinG: 34, carbsG: 0, fatG: 15 },
  { name: 'Peanut Butter (2 tbsp)', calories: 190, proteinG: 7, carbsG: 7, fatG: 16 },
  { name: 'Mixed Vegetables (1 cup)', calories: 60, proteinG: 3, carbsG: 12, fatG: 0.5 },
  { name: 'Avocado (half)', calories: 120, proteinG: 1.5, carbsG: 6, fatG: 11 },
  { name: 'Beef Steak (150g)', calories: 330, proteinG: 38, carbsG: 0, fatG: 19 },
]

export const SAMPLE_MEAL_PLAN = {
  breakfast: {
    title: 'Power Breakfast',
    items: ['4 whole eggs', '80g oats with banana', 'Black coffee or green tea'],
    macros: { calories: 650, proteinG: 38, carbsG: 70, fatG: 22 },
  },
  lunch: {
    title: 'Muscle-Building Lunch',
    items: ['200g chicken breast', '250g rice', 'Mixed vegetables', '1 tbsp olive oil'],
    macros: { calories: 780, proteinG: 55, carbsG: 85, fatG: 18 },
  },
  dinner: {
    title: 'Recovery Dinner',
    items: ['200g salmon or beef', '200g sweet potato', 'Large green salad'],
    macros: { calories: 650, proteinG: 45, carbsG: 50, fatG: 24 },
  },
  snacks: {
    title: 'Between-Meal Snacks',
    items: ['Greek yogurt with berries', 'Handful of almonds', 'Protein shake if needed'],
    macros: { calories: 350, proteinG: 25, carbsG: 25, fatG: 15 },
  },
  preWorkout: {
    title: 'Pre-Workout (60-90 min before)',
    items: ['Banana', 'Rice cakes with honey', 'Black coffee (optional)'],
    macros: { calories: 220, proteinG: 4, carbsG: 50, fatG: 1 },
  },
  postWorkout: {
    title: 'Post-Workout (within 60 min)',
    items: ['Whey protein shake', 'White rice or banana', '3-5g creatine'],
    macros: { calories: 300, proteinG: 30, carbsG: 40, fatG: 3 },
  },
}
