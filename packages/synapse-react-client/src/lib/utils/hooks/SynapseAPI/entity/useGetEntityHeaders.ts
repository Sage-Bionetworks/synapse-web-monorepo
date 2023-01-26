import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../../synapseTypes'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: UseQueryOptions<PaginatedResults<EntityHeader>, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    ['entityHeaders', accessToken, references],
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}

export function useGetEntityHeader(
  entityId: string,
  options?: UseQueryOptions<EntityHeader, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<EntityHeader, SynapseClientError>(
    ['entityHeader', accessToken, entityId],
    () => SynapseClient.getEntityHeader(entityId, accessToken),
    options,
  )
}
