import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  BatchFileRequest,
  BatchFileResult,
  FileHandle,
} from '../../../synapseTypes'

export function useGetPresignedUrlContent(
  fileHandle: FileHandle,
  request: BatchFileRequest,
  maxFileSizeBytes?: number,
  options?: Omit<UseQueryOptions<string, SynapseClientError>, 'staleTime'>,
) {
  if (request.requestedFiles.length !== 1) {
    console.warn('useGetPresignedUrlContent only supports one file at a time')
  }
  const { accessToken, keyFactory } = useSynapseContext()
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
    keyFactory.getPresignedUrlContentQueryKey(
      fileHandle,
      request,
      maxFileSizeBytes,
    ),

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
  const { keyFactory } = useSynapseContext()
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
    keyFactory.getProfileImageQueryKey(userId),
    queryFn,
    {
      staleTime: Infinity,
      ...options,
    },
  )
}

/**
 * Get a batch of file handle data from the backend.
 *
 * This hook does not support fetching pre-signed URLs. In most web UI cases, you will want to either request the presigned
 * URL upon an invoked action (e.g. a "download" button is clicked) or use {@link SynapseClient#getPortalFileHandleServletUrl}
 * @param request
 * @param options
 */
export function useGetFileBatch(
  request: BatchFileRequest,
  options?: UseQueryOptions<BatchFileResult, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryFn = async () => SynapseClient.getFiles(request, accessToken)

  if (request.includePreSignedURLs || request.includePreviewPreSignedURLs) {
    // Don't use this hook if you need pre-signed URLs. They expire every 30 seconds, so you will either end up giving the
    // user an expired URL, or making requests to the backend more frequently than necessary.
    throw new Error('useGetFileBatch does not support pre-signed URLs.')
  }

  return useQuery<BatchFileResult, SynapseClientError>(
    keyFactory.getBatchOfFiles(request),
    queryFn,
    {
      ...options,
    },
  )
}
