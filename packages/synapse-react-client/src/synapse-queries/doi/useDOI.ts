import { DoiAssociation } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/SynapseContext'
import SynapseClient from '../../synapse-client'

export function useGetDOIAssociation(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: UseQueryOptions<DoiAssociation | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<DoiAssociation | null, SynapseClientError>(
    keyFactory.getDOIAssociationQueryKey(objectType, objectId, versionNumber),
    () =>
      SynapseClient.getDOIAssociation(
        accessToken,
        objectId,
        versionNumber,
        objectType,
      ),
    options,
  )
}
