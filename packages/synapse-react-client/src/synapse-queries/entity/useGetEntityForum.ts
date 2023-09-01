import { UseQueryOptions, useQuery } from 'react-query'
import { Forum } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils'

export function useGetEntityForum(
  entityId: string,
  options?: UseQueryOptions<Forum, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<Forum, SynapseClientError>(
    keyFactory.getForumQueryKey(entityId),
    () => SynapseClient.getForum(entityId, accessToken),
    options,
  )
}
