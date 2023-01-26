import { DoiAssociation } from '../../../synapseTypes'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { SynapseClient } from '../../../index'

export function useGetDOIAssociation(
  objectId: string,
  versionNumber?: number,
  objectType = 'ENTITY',
  options?: UseQueryOptions<DoiAssociation | null, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<DoiAssociation | null, SynapseClientError>(
    ['doi', 'association', objectType, objectId, versionNumber],
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
