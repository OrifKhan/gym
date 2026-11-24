import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { loadJSON, saveJSON, STORAGE_KEYS } from '../lib/storage'
import { DEFAULT_PROFILE, PROFILE_SCHEMA_VERSION } from '../data/constants'
import { calculateNutritionTargets } from '../lib/nutritionEngine'

// Old v1 app shipped with these as hardcoded placeholder profile/nutrition values.
// If a stored profile still has them untouched, it's safe to upgrade to the real
// v2 defaults; if the user already edited them, their values are preserved.
const V1_DEFAULTS = { heightCm: 168, weightKg: 57, targetWeightKg: 65 }
const V1_NUTRITION_DEFAULTS = { calories: 2600, proteinG: 110, carbsG: 300, fatG: 80 }

function migrateProfile(stored) {
  if (!stored) return { profile: DEFAULT_PROFILE, migrated: true }
  if (stored.schemaVersion === PROFILE_SCHEMA_VERSION) return { profile: stored, migrated: false }

  const untouched = (key) => stored[key] === V1_DEFAULTS[key] || stored[key] === undefined
  const migrated = {
    ...DEFAULT_PROFILE,
    ...stored,
    heightCm: untouched('heightCm') ? DEFAULT_PROFILE.heightCm : stored.heightCm,
    weightKg: untouched('weightKg') ? DEFAULT_PROFILE.weightKg : stored.weightKg,
    targetWeightKg: untouched('targetWeightKg') ? DEFAULT_PROFILE.targetWeightKg : stored.targetWeightKg,
    schemaVersion: PROFILE_SCHEMA_VERSION,
  }
  return { profile: migrated, migrated: true }
}

const AppDataContext = createContext(null)

function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => loadJSON(key, fallback))

  useEffect(() => {
    saveJSON(key, value)
  }, [key, value])

  return [value, setValue]
}

export function AppDataProvider({ children }) {
  const [{ profile, profileJustMigrated }, setProfileState] = useState(() => {
    const stored = loadJSON(STORAGE_KEYS.PROFILE, null)
    const { profile: migrated, migrated: justMigrated } = migrateProfile(stored)
    return { profile: migrated, profileJustMigrated: justMigrated && !!stored }
  })
  useEffect(() => {
    saveJSON(STORAGE_KEYS.PROFILE, profile)
  }, [profile])
  const setProfile = useCallback((updater) => {
    setProfileState((s) => ({
      profile: typeof updater === 'function' ? updater(s.profile) : updater,
      profileJustMigrated: s.profileJustMigrated,
    }))
  }, [])

  const [workoutHistory, setWorkoutHistory] = useStoredState(STORAGE_KEYS.WORKOUT_HISTORY, [])
  const [sessionState, setSessionState] = useStoredState(STORAGE_KEYS.SESSION_STATE, null)
  const [nutritionLog, setNutritionLog] = useStoredState(STORAGE_KEYS.NUTRITION_LOG, {})
  const [nutritionTargets, setNutritionTargets] = useStoredState(
    STORAGE_KEYS.NUTRITION_TARGETS,
    calculateNutritionTargets(DEFAULT_PROFILE),
  )
  const [bodyMetrics, setBodyMetrics] = useStoredState(STORAGE_KEYS.BODY_METRICS, [])
  const [photoIndex, setPhotoIndex] = useStoredState(STORAGE_KEYS.PHOTO_INDEX, [])
  const [settings, setSettings] = useStoredState(STORAGE_KEYS.SETTINGS, {
    units: 'metric',
    soundEnabled: true,
  })

  useEffect(() => {
    if (!profile.programStartDate) {
      setProfile((p) => ({ ...p, programStartDate: new Date().toISOString().slice(0, 10) }))
    }
    // If migration just upgraded a never-customized profile, also refresh nutrition
    // targets that were still sitting on the old static v1 defaults.
    if (profileJustMigrated) {
      const looksLikeV1Targets = Object.entries(V1_NUTRITION_DEFAULTS).every(([k, v]) => nutritionTargets[k] === v)
      if (looksLikeV1Targets) {
        setNutritionTargets(calculateNutritionTargets(profile))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateProfile = useCallback((patch) => setProfile((p) => ({ ...p, ...patch })), [setProfile])

  const recalculateNutritionTargets = useCallback(
    () => setNutritionTargets(calculateNutritionTargets(profile)),
    [profile, setNutritionTargets],
  )

  const addWorkoutToHistory = useCallback(
    (workout) => setWorkoutHistory((h) => [...h, workout]),
    [setWorkoutHistory],
  )

  const updateWorkoutInHistory = useCallback(
    (id, patch) =>
      setWorkoutHistory((h) => h.map((w) => (w.id === id ? { ...w, ...patch } : w))),
    [setWorkoutHistory],
  )

  const deleteWorkoutFromHistory = useCallback(
    (id) => setWorkoutHistory((h) => h.filter((w) => w.id !== id)),
    [setWorkoutHistory],
  )

  const upsertNutritionDay = useCallback(
    (date, patch) =>
      setNutritionLog((log) => ({
        ...log,
        [date]: { ...(log[date] || {}), ...patch },
      })),
    [setNutritionLog],
  )

  const addBodyMetric = useCallback(
    (entry) => setBodyMetrics((list) => [...list, entry].sort((a, b) => a.date.localeCompare(b.date))),
    [setBodyMetrics],
  )

  const deleteBodyMetric = useCallback(
    (id) => setBodyMetrics((list) => list.filter((m) => m.id !== id)),
    [setBodyMetrics],
  )

  const addPhotoMeta = useCallback(
    (meta) => setPhotoIndex((list) => [...list, meta]),
    [setPhotoIndex],
  )

  const deletePhotoMeta = useCallback(
    (id) => setPhotoIndex((list) => list.filter((p) => p.id !== id)),
    [setPhotoIndex],
  )

  const resetAllData = useCallback(() => {
    setProfile(DEFAULT_PROFILE)
    setWorkoutHistory([])
    setSessionState(null)
    setNutritionLog({})
    setNutritionTargets(calculateNutritionTargets(DEFAULT_PROFILE))
    setBodyMetrics([])
    setPhotoIndex([])
  }, [setProfile, setWorkoutHistory, setSessionState, setNutritionLog, setNutritionTargets, setBodyMetrics, setPhotoIndex])

  const value = useMemo(
    () => ({
      profile,
      updateProfile,
      recalculateNutritionTargets,
      workoutHistory,
      addWorkoutToHistory,
      updateWorkoutInHistory,
      deleteWorkoutFromHistory,
      sessionState,
      setSessionState,
      nutritionLog,
      upsertNutritionDay,
      nutritionTargets,
      setNutritionTargets,
      bodyMetrics,
      addBodyMetric,
      deleteBodyMetric,
      photoIndex,
      addPhotoMeta,
      deletePhotoMeta,
      settings,
      setSettings,
      resetAllData,
    }),
    [
      profile,
      updateProfile,
      recalculateNutritionTargets,
      workoutHistory,
      addWorkoutToHistory,
      updateWorkoutInHistory,
      deleteWorkoutFromHistory,
      sessionState,
      setSessionState,
      nutritionLog,
      upsertNutritionDay,
      nutritionTargets,
      setNutritionTargets,
      bodyMetrics,
      addBodyMetric,
      deleteBodyMetric,
      photoIndex,
      addPhotoMeta,
      deletePhotoMeta,
      settings,
      setSettings,
      resetAllData,
    ],
  )

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}

export function useAppData() {
  const ctx = useContext(AppDataContext)
  if (!ctx) throw new Error('useAppData must be used within AppDataProvider')
  return ctx
}
