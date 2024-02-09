import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  Direction,
  DockerCommit,
  PaginatedResults,
  SortBy,
} from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils'

export function useGetDockerTags(
  entityId: string,
  offset: string | number = 0,
  limit: string | number = 20,
  sort: SortBy = SortBy.CREATED_ON,
  sortDirection: Direction = Direction.DESC,
  options?: UseQueryOptions<PaginatedResults<DockerCommit>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PaginatedResults<DockerCommit>, SynapseClientError>(
    keyFactory.getPaginatedDockerTagQueryKey(
      entityId,
      offset.toString(),
      limit.toString(),
      sort,
      sortDirection,
    ),
    () =>
      SynapseClient.getDockerTag(
        entityId,
        accessToken,
        offset,
        limit,
        sort,
        sortDirection,
      ),
    options,
  )
}
