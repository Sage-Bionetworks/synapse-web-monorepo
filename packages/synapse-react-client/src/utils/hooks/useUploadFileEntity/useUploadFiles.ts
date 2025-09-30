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
  fileHandleId?: string
  progress: ProgressCallback
  status: UploadFileStatus
  cancel: () => void
  pause: () => void
  resume: () => void
  remove: () => void
  failureReason?: string
}

export type UseUploadFilesReturn = {
  /**
   * The current state of the uploader.
   */
  state: UploaderState
  /**
   * An error message to display if the upload session has failed due to an error.
   */
  errorMessage?: string
  /**
   * The number of files actively being uploaded right now (UPLOADING, PAUSED, or PENDING).
   */
  activeUploadCount: number
  /**
   * List of files being uploaded, with their current progress and status, and callbacks to pause/cancel/resume/remove the upload.
   */
  uploadProgress: UploadItem[]
  /**
   * Arguments used to initialize an upload operation. In addition to providing a file, the caller may also provide
   * additional information that will be returned when `onUploadComplete` is invoked.
   */
  startUpload: <
    T extends BaseFilePreparedForUpload = BaseFilePreparedForUpload,
  >(
    ...preparedFiles: T[]
  ) => void
  /**
   * The number of bytes pending upload (including files that are currently uploading, paused, or pending).
   */
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
  /**
   * Callback invoked after a file has been successfully uploaded, with the fileHandleId created for the uploaded file.
   * @param preparedFile - The prepared file that was passed to `startUpload`
   * @param fileHandleId - The fileHandleId created for the uploaded file
   */
  onUploadComplete?: <
    T extends BaseFilePreparedForUpload = BaseFilePreparedForUpload,
  >(
    preparedFile: T,
    fileHandleId: string,
  ) => Promise<void>
  /**
   * Optional utility that is invoked just before `startUpload` begins uploading files.
   */
  onBeforeUpload?: () => void
}

const STATIC_EMPTY_OBJECT = {}

// Limit the number of concurrent uploads to avoid overwhelming the browser
// Note that within one upload operation, multiple parts could be uploaded in parallel
const limitConcurrentUploads = pLimit(8)

/**
 * Hook to start and track the progress of file uploads in Synapse, creating a FileHandle for each uploaded file.
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
        fileHandleId: trackedProgress.fileHandleId,
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
