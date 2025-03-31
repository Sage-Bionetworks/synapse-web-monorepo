import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Forum } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

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
