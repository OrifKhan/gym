const PREFIX = 'athleteos_'

export function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw === null) return fallback
    return JSON.parse(raw)
  } catch (err) {
    console.warn(`storage: failed to load "${key}"`, err)
    return fallback
  }
}

export function saveJSON(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch (err) {
    console.warn(`storage: failed to save "${key}"`, err)
  }
}

export function removeKey(key) {
  localStorage.removeItem(PREFIX + key)
}

export function allKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i)
    if (k && k.startsWith(PREFIX)) keys.push(k.slice(PREFIX.length))
  }
  return keys
}

export const STORAGE_KEYS = {
  PROFILE: 'profile',
  WORKOUT_HISTORY: 'workout_history',
  SESSION_STATE: 'session_state',
  NUTRITION_LOG: 'nutrition_log',
  NUTRITION_TARGETS: 'nutrition_targets',
  BODY_METRICS: 'body_metrics',
  PHOTO_INDEX: 'photo_index',
  SETTINGS: 'settings',
}
