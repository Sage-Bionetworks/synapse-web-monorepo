import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { Forum } from '@sage-bionetworks/synapse-types'

export function useGetEntityForum(
  entityId: string,
  options?: Partial<UseQueryOptions<Forum, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getForumQueryKey(entityId),
    queryFn: () => SynapseClient.getForum(entityId, accessToken),
  })
}
