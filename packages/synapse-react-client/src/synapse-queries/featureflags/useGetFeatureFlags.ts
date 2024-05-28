import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError, useSynapseContext } from '../../utils'
import { FeatureFlags } from '@sage-bionetworks/synapse-types'

export function useGetFeatureFlags(
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery<FeatureFlags, SynapseClientError>({
    staleTime: Infinity,
    ...options,
    queryKey: keyFactory.getFeatureFlagQueryKey(),
    queryFn: () => SynapseClient.getFeatureFlags(),
  })
}
