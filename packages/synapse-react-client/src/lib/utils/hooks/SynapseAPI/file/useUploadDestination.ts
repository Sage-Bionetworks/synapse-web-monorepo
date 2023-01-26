import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { UploadDestination } from '../../../synapseTypes/File/UploadDestination'
import { getDefaultUploadDestination } from '../../../SynapseClient'

export function useGetDefaultUploadDestination(
  containerEntityId: string,
  options?: UseQueryOptions<UploadDestination, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()

  return useQuery<UploadDestination, SynapseClientError>(
    ['uploadDestination', 'default', containerEntityId],
    () => getDefaultUploadDestination(containerEntityId, accessToken),
    {
      ...options,
    },
  )
}
