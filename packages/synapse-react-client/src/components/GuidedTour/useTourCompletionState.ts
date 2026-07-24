import { useCookiePreferences } from '@/utils/hooks/useCookiePreferences'
import { useCallback, useEffect, useState } from 'react'
import { TourEndResult } from './TourTypes'

export function getGuidedTourStorageKey(
  portalKey: string,
  tourId: string,
  version: number,
): string {
  return `${portalKey}-guided-tour-${tourId}-v${version}`
}

function readStoredCompletionState(storageKey: string): TourEndResult | null {
  if (typeof localStorage === 'undefined') {
    return null
  }
  const storedValue = localStorage.getItem(storageKey)
  return storedValue === 'completed' || storedValue === 'dismissed'
    ? storedValue
    : null
}

/**
 * Tracks whether the user has already completed or dismissed a tour.
 * Persists to localStorage only when functional cookies are allowed
 * (revoking consent clears localStorage, so stale records self-clean).
 */
export function useTourCompletionState(
  storageKey: string,
): [TourEndResult | null, (result: TourEndResult) => void] {
  const [cookiePreferences] = useCookiePreferences()
  // Initialized synchronously so consumers can gate auto-start behavior on it
  // in their first effect without racing an async read.
  const [completionState, setCompletionState] = useState<TourEndResult | null>(
    () => readStoredCompletionState(storageKey),
  )

  useEffect(() => {
    setCompletionState(readStoredCompletionState(storageKey))
  }, [storageKey])

  const persistCompletionState = useCallback(
    (result: TourEndResult) => {
      if (cookiePreferences.functionalAllowed) {
        localStorage.setItem(storageKey, result)
      }
      setCompletionState(result)
    },
    [storageKey, cookiePreferences.functionalAllowed],
  )

  return [completionState, persistCompletionState]
}
