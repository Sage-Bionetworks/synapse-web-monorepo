import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { Challenge } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils'

export function useGetEntityChallenge(
  entityId: string,
  options?: UseQueryOptions<Challenge, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<Challenge, SynapseClientError>(
    keyFactory.getEntityChallengeQueryKey(entityId),
    () => SynapseClient.getEntityChallenge(entityId, accessToken),
    options,
  )
}
