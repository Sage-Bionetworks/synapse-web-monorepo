import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { FeatureFlagEnum, FeatureFlags } from '@/utils/featureflag/FeatureFlags'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetFeatureFlag(
  featureFlag: FeatureFlagEnum,
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
): boolean {
  const { keyFactory, isInExperimentalMode, enabledExperimentalFeatures } =
    useSynapseContext()

  const { data: featureFlags } = useQuery<FeatureFlags, SynapseClientError>({
    staleTime: Infinity,
    ...options,
    queryKey: keyFactory.getFeatureFlagQueryKey(),
    queryFn: () => SynapseClient.getFeatureFlags(),
  })

  // true → always enabled; false → always disabled; unset → on if Enable all is on or the user opted into this flag
  return (
    featureFlags?.[featureFlag] ??
    (isInExperimentalMode || enabledExperimentalFeatures.includes(featureFlag))
  )
}
