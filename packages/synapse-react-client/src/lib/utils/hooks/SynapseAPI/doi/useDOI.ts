import { DoiAssociation } from '../../../synapseTypes'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { SynapseClient } from '../../../index'
import { KeyFactory } from '../KeyFactory'

export function useGetDOIAssociation(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: UseQueryOptions<DoiAssociation | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
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
