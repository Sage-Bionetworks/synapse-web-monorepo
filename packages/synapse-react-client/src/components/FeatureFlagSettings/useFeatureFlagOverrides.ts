import { FeatureFlagEnum } from '@sage-bionetworks/synapse-types'
import { useLocalStorageValue } from '@react-hookz/web'
import { useCallback } from 'react'

const FEATURE_FLAG_OVERRIDES_KEY = 'synapseFeatureFlagOverrides'

/**
 * Hook to manage feature flag overrides using synchronized localStorage
 */
export function useFeatureFlagOverrides() {
  const { value: overrides, set: setOverridesValue } = useLocalStorageValue<
    Record<FeatureFlagEnum, boolean | undefined>
  >(FEATURE_FLAG_OVERRIDES_KEY, {} as Record<FeatureFlagEnum, boolean | undefined>)

  const setOverride = useCallback(
    (flag: FeatureFlagEnum, value: boolean | undefined) => {
      const currentOverrides: Record<FeatureFlagEnum, boolean | undefined> = overrides || {}
      const newOverrides: Record<FeatureFlagEnum, boolean | undefined> = { ...currentOverrides }

      if (value === undefined) {
        delete newOverrides[flag]
      } else {
        newOverrides[flag] = value
      }

      setOverridesValue(newOverrides)
    },
    [overrides, setOverridesValue],
  )

  const clearOverrides = useCallback(() => {
    setOverridesValue({} as Record<FeatureFlagEnum, boolean | undefined>)
  }, [setOverridesValue])

  return {
    overrides: (overrides || {}) as Record<FeatureFlagEnum, boolean | undefined>,
    setOverride,
    clearOverrides,
  }
}
