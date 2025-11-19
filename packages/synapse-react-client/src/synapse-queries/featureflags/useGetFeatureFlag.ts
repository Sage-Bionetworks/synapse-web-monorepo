import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useLocalStorageValue } from '@react-hookz/web'

export function useGetFeatureFlag(
  featureFlag: FeatureFlagEnum,
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
): boolean {
  const { keyFactory, isInExperimentalMode } = useSynapseContext()

  const { data: featureFlags } = useQuery<FeatureFlags, SynapseClientError>({
    staleTime: Infinity,
    ...options,
    queryKey: keyFactory.getFeatureFlagQueryKey(),
    queryFn: () => SynapseClient.getFeatureFlags(),
  })

  // Track user overrides with synchronized localStorage
  const { value: userOverrides } = useLocalStorageValue<
    Record<FeatureFlagEnum, boolean | undefined>
  >('synapseFeatureFlagOverrides', {})

  const globalFlagValue = featureFlags?.[featureFlag]
  const userOverride = userOverrides?.[featureFlag]

  // Precedence: Global enabled flags cannot be disabled → User overrides → Experimental mode
  // If feature flags haven't loaded yet, we only check experimental mode
  if (featureFlags === undefined) {
    return isInExperimentalMode
  }

  if (globalFlagValue === true) {
    return true
  }

  if (userOverride !== undefined) {
    return userOverride
  }

  return isInExperimentalMode
}
