import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '../../../synapseTypes'
import { KeyFactory } from '../KeyFactory'

export function useGetEntityHeaders(
  references: ReferenceList,
  options?: UseQueryOptions<PaginatedResults<EntityHeader>, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    keyFactory.getEntityHeadersQueryKey(references),
    () => SynapseClient.getEntityHeaders(references, accessToken),
    options,
  )
}

export function useGetEntityHeader(
  entityId: string,
  options?: UseQueryOptions<EntityHeader, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)

  return useQuery<EntityHeader, SynapseClientError>(
    keyFactory.getEntityHeaderQueryKey(entityId),
    () => SynapseClient.getEntityHeader(entityId, accessToken),
    options,
  )
}
