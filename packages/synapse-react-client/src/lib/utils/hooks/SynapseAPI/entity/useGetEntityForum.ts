import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Forum } from '../../../synapseTypes/DiscussionBundle'

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
