import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { BatchFileRequest, FileHandle } from '../../../synapseTypes'

export function useGetPresignedUrlContent(
  fileHandle: FileHandle,
  request: BatchFileRequest,
  maxFileSizeBytes?: number,
  options?: Omit<UseQueryOptions<string, SynapseClientError>, 'staleTime'>,
) {
  if (request.requestedFiles.length !== 1) {
    console.warn('useGetPresignedUrlContent only supports one file at a time')
  }
  const { accessToken } = useSynapseContext()
  const queryFn = async () => {
    const batchFileResult = await SynapseClient.getFiles(request, accessToken)
    const data = await SynapseClient.getFileHandleContent(
      fileHandle,
      batchFileResult.requestedFiles[0].preSignedURL!,
      maxFileSizeBytes,
    )
    return data
  }
  return useQuery<string, SynapseClientError>(
    ['presignedUrlContent', fileHandle, request],
    queryFn,
    {
      staleTime: Infinity,
      ...options,
    },
  )
}

/**
 * Get a blob containing the image data for the avatar of a Synapse user. Returns null if the user does not have a profile image.
 */
export function useGetProfileImage(
  userId: string,
  options?: Omit<UseQueryOptions<Blob | null, SynapseClientError>, 'staleTime'>,
) {
  const queryFn = async () => {
    const presignedUrl = await SynapseClient.getProfilePicPreviewPresignedUrl(
      userId,
    )
    if (presignedUrl) {
      // Fetch the presigned URL right away because it will expire
      const data = await fetch(presignedUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      })
      return await data.blob()
    }
    return null
  }
  return useQuery<Blob | null, SynapseClientError>(
    ['profileImageData', userId],
    queryFn,
    {
      staleTime: Infinity,
      ...options,
    },
  )
}
