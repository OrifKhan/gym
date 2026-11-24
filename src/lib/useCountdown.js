import { useCallback, useEffect, useRef, useState } from 'react'

export function playBeep(freq = 880, duration = 0.15) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + duration)
  } catch {
    // Audio not available — fail silently.
  }
}

export function useCountdown(initialSeconds, { onComplete, soundEnabled = true } = {}) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    setSecondsLeft(initialSeconds)
    setRunning(false)
  }, [initialSeconds])

  useEffect(() => {
    if (!running) return
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current)
          setRunning(false)
          if (soundEnabled) playBeep()
          onCompleteRef.current?.()
          return 0
        }
        if (soundEnabled && s <= 4) playBeep(660, 0.08)
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running, soundEnabled])

  const start = useCallback(() => setRunning(true), [])
  const pause = useCallback(() => setRunning(false), [])
  const reset = useCallback((next = initialSeconds) => {
    setSecondsLeft(next)
    setRunning(false)
  }, [initialSeconds])
  const addSeconds = useCallback((delta) => setSecondsLeft((s) => Math.max(0, s + delta)), [])

  return { secondsLeft, running, start, pause, reset, addSeconds }
}
