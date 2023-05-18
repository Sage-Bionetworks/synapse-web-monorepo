import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Challenge } from '../../../synapseTypes/ChallengePagedResults'

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
