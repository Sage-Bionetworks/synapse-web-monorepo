import { FeatureFlagEnum } from './FeatureFlags'
import Cookies from 'js-cookie'
import { SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE } from '../SynapseConstants'

export function parseEnabledExperimentalFeatures(
  cookieValue?: string | null,
): FeatureFlagEnum[] {
  if (!cookieValue) {
    return []
  }
  const knownFlags: string[] = Object.values(FeatureFlagEnum)
  return cookieValue
    .split(',')
    .filter((key): key is FeatureFlagEnum => knownFlags.includes(key))
}

export function getEnabledExperimentalFeatures(): FeatureFlagEnum[] {
  const cookieValue = Cookies.get(SYNAPSE_EXPERIMENTAL_FEATURES_COOKIE)
  return parseEnabledExperimentalFeatures(cookieValue)
}
