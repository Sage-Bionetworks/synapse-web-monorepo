import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Challenge } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetEntityChallenge(
  entityId: string,
  options?: Partial<UseQueryOptions<Challenge, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityChallengeQueryKey(entityId),
    queryFn: () => SynapseClient.getEntityChallenge(entityId, accessToken),
  })
}
