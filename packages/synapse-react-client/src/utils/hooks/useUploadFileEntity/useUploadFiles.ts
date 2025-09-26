import {
  ProgressCallback,
  SYNAPSE_STORAGE_LOCATION_ID,
} from '@/synapse-client/SynapseClient'
import { FileUploadArgs } from '@/synapse-queries/file/FileUploadArgs'
import { useDirectUploadToS3 } from '@/synapse-queries/file/useDirectUploadToS3'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import {
  instanceOfExternalObjectStoreUploadDestination,
  UploadDestination,
} from '@sage-bionetworks/synapse-client'
import pLimit from 'p-limit'
import { useCallback, useMemo } from 'react'
import { fixDefaultContentType } from '../../ContentTypeUtils'
import {
  TrackedUploadProgress,
  UploadFileStatus,
  useTrackFileUploads,
} from './useTrackFileUploads'

export type UploaderState = 'WAITING' | 'UPLOADING' | 'COMPLETE'
export type BaseFileUploadArgs = { file: File }
export type BaseFilePreparedForUpload = { file: File }

export type UploadItem = {
  file: File
  progress: ProgressCallback
  status: UploadFileStatus
  cancel: () => void
  pause: () => void
  resume: () => void
  remove: () => void
  failureReason?: string
}

export type UseUploadFilesReturn = {
  state: UploaderState
  errorMessage?: string
  activeUploadCount: number
  uploadProgress: UploadItem[]
  /**
   * Arguments used to initialize an upload operation. In addition to providing a file, the caller must also provide one of
   * the following:
   *   - rootContainerId: The ID of the parent Project or Folder to upload files to. If the File objects include a webkitRelativePath,
   *       then the Files will be uploaded into created sub-folders to match the relative path. Any files that match on path and file name
   *       will trigger a prompt to confirm updating a new version in the `activePrompts` field, which must be resolved before the upload can proceed.
   *   - existingEntityId: The ID of the FileEntity for which a new version should be uploaded. No prompts will be triggered by this option.
   */
  startUpload: (...preparedFiles: BaseFilePreparedForUpload[]) => void
  bytesPendingUpload: number
}

export type UseUploadFilesArgs = {
  /**
   * Takes precedence over `storageLocationId` if both uploadDestination and storageLocationId are provided.
   */
  uploadDestination?: UploadDestination
  /** The ID of the storage location to upload files to */
  storageLocationId?: number

  /** Optional accessKey for a direct S3 upload */
  accessKey?: string
  /** Optional secretKey for a direct S3 upload */
  secretKey?: string
  onUploadComplete?: (
    preparedFile: BaseFilePreparedForUpload,
    fileHandleId: string,
  ) => Promise<void>
  onBeforeUpload?: () => void
}

const STATIC_EMPTY_OBJECT = {}

// Limit the number of concurrent uploads to avoid overwhelming the browser
// Note that within one upload operation, multiple parts could be uploaded in parallel
const limitConcurrentUploads = pLimit(8)

/**
 * Hook to start and track the progress of files uploads in Synapse, creating/updating a FileEntity for each uploaded file.
 *
 * To start an upload, see `initiateUpload` returned by this hook.
 */
export function useUploadFiles(
  args: UseUploadFilesArgs = STATIC_EMPTY_OBJECT,
): UseUploadFilesReturn {
  const {
    uploadDestination,
    accessKey = '',
    secretKey = '',
    onUploadComplete,
    onBeforeUpload,
  } = args
  const storageLocationId =
    uploadDestination?.storageLocationId ??
    args.storageLocationId ??
    SYNAPSE_STORAGE_LOCATION_ID

  /**
   * General flow for how the functions in this hook are used is
   *
   * 1. `initiateUpload(files)` - called by the caller of the hook
   * 2. `willUploadsExceedLimit(files, usage)` - client-side check if the uploads will exceed the storage limit
   * 3. `prepareDirsForUpload(files)` - sets up the folder paths, checks for existing entities with the same name
   * 5. `startUpload(files)` - starts tracking file uploads, for each file, calls `uploadPreparedFile`
   * 6. `uploadPreparedFile(file)` - uploads the file and creates/updates the entity
   */

  const {
    trackedUploadProgress,
    setProgress,
    setIsUploading,
    trackNewFiles,
    cancelUpload,
    pauseUpload,
    removeUpload,
    setComplete,
    setFailed,
    isUploading,
    isUploadComplete,
    activeUploadCount,
    bytesPendingUpload,
  } = useTrackFileUploads()

  const state: UploaderState = useMemo(() => {
    if (isUploading) {
      return 'UPLOADING'
    }
    if (isUploadComplete) {
      return 'COMPLETE'
    }
    return 'WAITING'
  }, [isUploadComplete, isUploading])

  const { mutateAsync: uploadFile } = useSynapseMultipartUpload()
  const { mutateAsync: uploadFileDirectlyToS3 } = useDirectUploadToS3()

  const uploadPreparedFile = useCallback(
    async function uploadPreparedFile(
      newTrackedUploadProgress: Map<File, TrackedUploadProgress>,
      preparedFile: BaseFilePreparedForUpload,
    ) {
      try {
        const trackedProgress = newTrackedUploadProgress.get(preparedFile.file)!

        const uploadArgs: FileUploadArgs = {
          fileName: preparedFile.file.name,
          blob: preparedFile.file,
          storageLocationId,
          contentType: fixDefaultContentType(
            preparedFile.file.type,
            preparedFile.file.name,
          ),
          progressCallback: progress => {
            if (progress) {
              setProgress(preparedFile.file, progress)
            }
          },
          abortController: trackedProgress.abortController,
          onMd5Computed: () => {
            setIsUploading(preparedFile.file)
          },
        }

        let newFileHandleId: string
        if (
          uploadDestination &&
          instanceOfExternalObjectStoreUploadDestination(uploadDestination) &&
          uploadDestination.endpointUrl != null
        ) {
          const fileHandle = await uploadFileDirectlyToS3({
            ...uploadArgs,
            bucketName: uploadDestination.bucket!,
            endpoint: uploadDestination.endpointUrl,
            keyPrefixUUID: uploadDestination.keyPrefixUUID!,
            accessKey,
            secretKey,
          })
          newFileHandleId = fileHandle.id!
        } else {
          const fileUploadComplete = await uploadFile(uploadArgs)

          newFileHandleId = fileUploadComplete.fileHandleId
        }

        if (onUploadComplete) {
          await onUploadComplete(preparedFile, newFileHandleId)
        }
        setComplete(preparedFile.file)
      } catch (e) {
        console.error('File upload failed: ', e)
        setFailed(preparedFile.file, e.message)
      }
    },
    [
      storageLocationId,
      uploadDestination,
      onUploadComplete,
      setComplete,
      setProgress,
      setIsUploading,
      uploadFileDirectlyToS3,
      accessKey,
      secretKey,
      uploadFile,
      setFailed,
    ],
  )

  /**
   * Upload the list of prepared files to Synapse.
   */
  const startUpload = useCallback(
    function startUpload<T extends BaseFileUploadArgs>(...preparedFiles: T[]) {
      if (onBeforeUpload) {
        onBeforeUpload()
      }

      const newTrackedUploadProgress = trackNewFiles(...preparedFiles)

      // TODO: We already got the storage location from the root, but what if one of the sub-folders already existed
      //   with a different storage location? should we use that storage location?
      preparedFiles.map(preparedFile =>
        limitConcurrentUploads(() =>
          uploadPreparedFile(newTrackedUploadProgress, preparedFile),
        ),
      )
    },
    [onBeforeUpload, trackNewFiles, uploadPreparedFile],
  )

  const uploadProgress: UploadItem[] = useMemo(() => {
    return [...trackedUploadProgress].map(([file, trackedProgress]) => {
      return {
        file: file,
        progress: trackedProgress.progress,
        status: trackedProgress.status,
        failureReason: trackedProgress.failureReason,
        cancel: () => {
          cancelUpload(file)
        },
        pause: () => {
          pauseUpload(file)
        },
        resume: () => {
          startUpload(trackedProgress.filePreparedForUpload)
        },
        remove() {
          removeUpload(file)
        },
      }
    })
  }, [
    cancelUpload,
    pauseUpload,
    removeUpload,
    startUpload,
    trackedUploadProgress,
  ])

  return useMemo(() => {
    return {
      state,
      activeUploadCount,
      startUpload,
      uploadProgress: uploadProgress,
      bytesPendingUpload,
    }
  }, [
    state,
    activeUploadCount,
    startUpload,
    uploadProgress,
    bytesPendingUpload,
  ])
}
