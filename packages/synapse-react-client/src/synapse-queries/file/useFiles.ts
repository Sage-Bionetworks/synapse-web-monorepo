import {
  UseQueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  BatchFileRequest,
  BatchFileResult,
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep } from 'lodash-es'

export function useGetPresignedUrlContent(
  fileHandle: FileHandle,
  request: BatchFileRequest,
  maxFileSizeBytes?: number,
  options?: Partial<
    Omit<UseQueryOptions<string, SynapseClientError>, 'staleTime'>
  >,
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
  return useQuery<string, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getPresignedUrlContentQueryKey(
      fileHandle,
      request,
      maxFileSizeBytes,
    ),
    queryFn,
    staleTime: Infinity,
  })
}

export function useGetPresignedUrlContentFromFHA(
  fileHandleAssociation: FileHandleAssociation,
  forceAnonymous: boolean = false,
  options?: Partial<
    Omit<UseQueryOptions<string, SynapseClientError>, 'staleTime'>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryFn = async () => {
    const batchFileResult = await SynapseClient.getFiles(
      {
        requestedFiles: [fileHandleAssociation],
        includeFileHandles: true,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
      },
      forceAnonymous ? undefined : accessToken,
    )
    const data = await SynapseClient.getFileHandleContent(
      batchFileResult.requestedFiles[0].fileHandle!,
      batchFileResult.requestedFiles[0].preSignedURL!,
    )
    return data
  }
  return useQuery<string, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getPresignedUrlFromFHAContentQueryKey(
      fileHandleAssociation,
      forceAnonymous,
    ),
    queryFn,
    staleTime: Infinity,
  })
}

/**
 * Get a blob containing the image data for the avatar of a Synapse user. Returns null if the user does not have a profile image.
 */
export function useGetProfileImage(
  userId: string,
  options?: Partial<
    Omit<UseQueryOptions<Blob | null, SynapseClientError>, 'staleTime'>
  >,
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
  return useQuery<Blob | null, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getProfileImageQueryKey(userId),
    queryFn,
    staleTime: Infinity,
  })
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
  options?: Partial<UseQueryOptions<BatchFileResult, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  const queryFn = async () => {
    const response = await SynapseClient.getFiles(request, accessToken)

    // Update the cache with the individual file handle results, in case this was a batch
    response.requestedFiles.forEach(fileResult => {
      const requestedItem = request.requestedFiles.find(
        fha => fha.fileHandleId === fileResult.fileHandleId,
      )!
      const atomicRequest: BatchFileRequest = {
        ...cloneDeep(request),
        requestedFiles: [requestedItem],
      }
      const atomicResult: BatchFileResult = {
        requestedFiles: [fileResult],
      }
      queryClient.setQueryData(
        keyFactory.getBatchOfFiles(atomicRequest),
        atomicResult,
      )
    })
    return response
  }

  if (request.includePreSignedURLs || request.includePreviewPreSignedURLs) {
    // Don't use this hook if you need pre-signed URLs. They expire every 30 seconds, so you will either end up giving the
    // user an expired URL, or making requests to the backend more frequently than necessary.
    throw new Error('useGetFileBatch does not support pre-signed URLs.')
  }

  return useQuery<BatchFileResult, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getBatchOfFiles(request),
    queryFn,
  })
}
