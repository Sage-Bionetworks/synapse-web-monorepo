import { DoiAssociation } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import SynapseClient from '../../synapse-client'

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
