import { useQuery, UseQueryOptions } from 'react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { DockerCommit, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils'

export function useGetDockerTags(
  entityId: string,
  offset: number = 0,
  limit: number = 50,
  options?: UseQueryOptions<PaginatedResults<DockerCommit>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PaginatedResults<DockerCommit>, SynapseClientError>(
    keyFactory.getPaginatedDockerTagQueryKey(entityId, limit, offset),
    () => SynapseClient.getDockerTag(entityId, accessToken, offset, limit),
    options,
  )
}
