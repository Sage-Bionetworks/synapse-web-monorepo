import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useCallback, useMemo } from 'react'

const FEATURE_FLAG_OVERRIDES_KEY = 'synapseFeatureFlagOverrides'

/**
 * Get the current feature flag overrides from localStorage
 */
export function getFeatureFlagOverrides(): Record<
  FeatureFlagEnum,
  boolean | undefined
> {
  try {
    const stored = localStorage.getItem(FEATURE_FLAG_OVERRIDES_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('Failed to parse feature flag overrides', e)
  }
  return {} as Record<FeatureFlagEnum, boolean | undefined>
}

/**
 * Set a feature flag override
 */
export function setFeatureFlagOverride(
  flag: FeatureFlagEnum,
  value: boolean | undefined,
): void {
  const overrides = getFeatureFlagOverrides()
  if (value === undefined) {
    delete overrides[flag]
  } else {
    overrides[flag] = value
  }
  localStorage.setItem(FEATURE_FLAG_OVERRIDES_KEY, JSON.stringify(overrides))
}

/**
 * Clear all feature flag overrides
 */
export function clearFeatureFlagOverrides(): void {
  localStorage.removeItem(FEATURE_FLAG_OVERRIDES_KEY)
}

/**
 * Hook to manage feature flag overrides
 */
export function useFeatureFlagOverrides() {
  const overrides = useMemo(() => getFeatureFlagOverrides(), [])

  const setOverride = useCallback(
    (flag: FeatureFlagEnum, value: boolean | undefined) => {
      setFeatureFlagOverride(flag, value)
      // Force a re-render by triggering a storage event
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: FEATURE_FLAG_OVERRIDES_KEY,
          newValue: JSON.stringify(getFeatureFlagOverrides()),
        }),
      )
    },
    [],
  )

  const clearOverrides = useCallback(() => {
    clearFeatureFlagOverrides()
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: FEATURE_FLAG_OVERRIDES_KEY,
        newValue: null,
      }),
    )
  }, [])

  return {
    overrides,
    setOverride,
    clearOverrides,
  }
}
