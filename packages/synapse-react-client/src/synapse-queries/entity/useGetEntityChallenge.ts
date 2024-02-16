import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { Challenge } from '@sage-bionetworks/synapse-types'
import { SynapseClientError, useSynapseContext } from '../../utils'

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
