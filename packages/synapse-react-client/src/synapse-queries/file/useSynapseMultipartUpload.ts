import { uploadFile } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/index'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { FileUploadComplete } from '@sage-bionetworks/synapse-types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { FileUploadArgs } from './FileUploadArgs'

type UseSynapseMultipartUploadArgs = FileUploadArgs & {
  readonly storageLocationId: number | undefined
}

export function useSynapseMultipartUpload(
  options?: UseMutationOptions<
    FileUploadComplete,
    SynapseClientError,
    UseSynapseMultipartUploadArgs
  >,
) {
  const { accessToken } = useSynapseContext()
  return useMutation({
    ...options,
    mutationFn: (args: UseSynapseMultipartUploadArgs) => {
      const {
        blob,
        fileName,
        storageLocationId,
        contentType,
        progressCallback,
        abortController,
        onMd5Computed,
      } = args

      return uploadFile(
        accessToken,
        fileName,
        blob,
        storageLocationId,
        contentType,
        progressCallback,
        undefined,
        onMd5Computed,
        abortController,
      )
    },
  })
}
