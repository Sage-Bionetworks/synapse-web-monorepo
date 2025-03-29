import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Doi, DoiAssociation } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetDOIAssociation(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: Partial<UseQueryOptions<DoiAssociation | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIAssociationQueryKey(
      objectType,
      objectId,
      versionNumber,
    ),

    queryFn: () =>
      SynapseClient.getDOIAssociation(
        accessToken,
        objectId,
        versionNumber,
        objectType,
      ),
  })
}

export function useGetDOI(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: Partial<UseQueryOptions<Doi | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDOIQueryKey(objectType, objectId, versionNumber),

    queryFn: () =>
      SynapseClient.getDOI(accessToken, objectId, versionNumber, objectType),
  })
}
