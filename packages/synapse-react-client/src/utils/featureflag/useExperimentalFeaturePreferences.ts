import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js'
import { getCookieDomain } from '../AppUtils/AppUtils'
import { useCallback, useMemo } from 'react'
import { FeatureFlagEnum } from './FeatureFlags'
import { parseEnabledExperimentalFeatures } from './experimentalFeatureCookies'
import {
  EXPERIMENTAL_MODE_COOKIE,
  SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
} from '../SynapseConstants'

const getCookieOptions = () => ({
  path: '/',
  // The hostname isn't available while prerendering
  domain: typeof window !== 'undefined' ? getCookieDomain() : undefined,
})

/**
 * The user's saved Experimental Features choices, kept in sync across every component using this hook.
 */
export function useExperimentalFeaturePreferences() {
  const cookieOptions = { ...getCookieOptions(), initializeWithValue: false }

  const [enableAllCookie, setEnableAllCookie, removeEnableAllCookie] =
    useCookieValue(EXPERIMENTAL_MODE_COOKIE, cookieOptions)
  const [featuresCookie, setFeaturesCookie, removeFeaturesCookie] =
    useCookieValue(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, cookieOptions)

  const enabledFeatures = useMemo(
    () => parseEnabledExperimentalFeatures(featuresCookie),
    [featuresCookie],
  )

  const savePreferences = useCallback(
    (
      enableAll: boolean,
      enabledFlags: FeatureFlagEnum[],
      shownFlags: FeatureFlagEnum[],
    ) => {
      if (enableAll) {
        setEnableAllCookie('true')
      } else {
        removeEnableAllCookie()
      }

      // The cookie is shared by every app on *.synapse.org; only replace the flags this menu showed
      const flagsFromOtherMenus = enabledFeatures.filter(
        flag => !shownFlags.includes(flag),
      )
      const flagsToSave = [
        ...new Set([...flagsFromOtherMenus, ...enabledFlags]),
      ]

      if (flagsToSave.length > 0) {
        setFeaturesCookie(flagsToSave.join(','))
      } else {
        removeFeaturesCookie()
      }
    },
    [
      enabledFeatures,
      setEnableAllCookie,
      removeEnableAllCookie,
      setFeaturesCookie,
      removeFeaturesCookie,
    ],
  )

  return {
    isEnableAllOn: enableAllCookie != null,
    enabledFeatures,
    savePreferences,
  }
}
