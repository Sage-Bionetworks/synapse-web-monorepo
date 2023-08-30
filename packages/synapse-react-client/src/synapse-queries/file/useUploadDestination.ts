import { UseQueryOptions, useQuery } from 'react-query'
import { UploadDestination } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { getDefaultUploadDestination } from '../../synapse-client/SynapseClient'

export function useGetDefaultUploadDestination(
  containerEntityId: string,
  options?: UseQueryOptions<UploadDestination, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<UploadDestination, SynapseClientError>(
    keyFactory.getDefaultUploadDestinationQueryKey(containerEntityId),
    () => getDefaultUploadDestination(containerEntityId, accessToken),
    {
      ...options,
    },
  )
}
