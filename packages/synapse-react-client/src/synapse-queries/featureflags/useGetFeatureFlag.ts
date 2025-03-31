import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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

  return isInExperimentalMode || !!featureFlags?.[featureFlag]
}
