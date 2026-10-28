import { FeatureFlagEnum } from './FeatureFlags'
import { getCookieDomain } from '../AppUtils/AppUtils'
import Cookies from 'js-cookie'
import {
  EXPERIMENTAL_MODE_COOKIE,
  SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
} from '../SynapseConstants'

const getCookieOptions = () => ({ path: '/', domain: getCookieDomain() })

export function getEnabledExperimentalFeatures(): FeatureFlagEnum[] {
  const cookieValue = Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)

  if (!cookieValue) {
    return []
  }
  const knownFlags: string[] = Object.values(FeatureFlagEnum)
  return cookieValue
    .split(',')
    .filter((key): key is FeatureFlagEnum => knownFlags.includes(key))
}

export function saveExperimentalFeaturePreferences(
  enableAll: boolean,
  enabledFlags: FeatureFlagEnum[],
  shownFlags: FeatureFlagEnum[],
) {
  const options = getCookieOptions()

  if (enableAll) {
    Cookies.set(EXPERIMENTAL_MODE_COOKIE, 'true', options)
  } else {
    Cookies.remove(EXPERIMENTAL_MODE_COOKIE, options)
  }

  const flagsFromOtherMenus = getEnabledExperimentalFeatures().filter(
    flag => !shownFlags.includes(flag),
  )

  const flagsToSave = [...new Set([...flagsFromOtherMenus, ...enabledFlags])]

  if (flagsToSave.length > 0) {
    Cookies.set(
      SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE,
      flagsToSave.join(','),
      options,
    )
  } else {
    Cookies.remove(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE, options)
  }
}
