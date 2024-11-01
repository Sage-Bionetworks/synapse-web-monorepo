import { ExternalObjectStoreFileHandle } from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { calculateMd5 } from '../../synapse-client/SynapseClient'
import { uploadToS3 } from './UploadToS3'
import { useCreateExternalFileHandle } from './useFileHandle'
import { FileUploadArgs } from './useSynapseMultipartUpload'

type UseDirectUploadToS3Args = FileUploadArgs & {
  readonly accessKey: string
  readonly secretKey: string
  readonly bucketName: string
  readonly endpoint: string
  readonly keyPrefixUUID: string
}

/**
 * Mutation used to directly upload a file to an S3-compatible API and create a
 * Synapse ExternalObjectStoreFileHandle pointing to the uploaded file.
 */
export function useDirectUploadToS3(
  options?: UseMutationOptions<
    ExternalObjectStoreFileHandle,
    unknown,
    UseDirectUploadToS3Args
  >,
) {
  const { mutateAsync: createExternalFileHandle } =
    useCreateExternalFileHandle()
  return useMutation({
    ...options,
    mutationFn: async (args: UseDirectUploadToS3Args) => {
      const {
        accessKey,
        secretKey,
        bucketName,
        endpoint,
        fileName,
        contentType,
        blob,
        progressCallback,
        keyPrefixUUID,
        storageLocationId,
        onMd5Computed,
        abortController,
      } = args
      const md5 = await calculateMd5(blob)
      if (onMd5Computed) {
        onMd5Computed()
      }

      const fileKey = `${keyPrefixUUID}/${fileName}`

      await uploadToS3(
        blob,
        fileKey,
        endpoint,
        accessKey,
        secretKey,
        bucketName,
        contentType,
        abortController,
        progressCallback,
      )

      const newFileHandle = (await createExternalFileHandle({
        externalFileHandleInterface: {
          concreteType:
            'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
          contentMd5: md5,
          contentSize: blob.size,
          contentType,
          fileKey,
          fileName,
          storageLocationId,
        },
      })) as ExternalObjectStoreFileHandle

      return newFileHandle
    },
  })
}
