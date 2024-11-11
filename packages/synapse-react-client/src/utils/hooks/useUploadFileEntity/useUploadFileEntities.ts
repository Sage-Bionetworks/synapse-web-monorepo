import { instanceOfExternalObjectStoreUploadDestination } from '@sage-bionetworks/synapse-client'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import pLimit from 'p-limit'
import { useCallback, useMemo } from 'react'
import {
  ProgressCallback,
  SYNAPSE_STORAGE_LOCATION_ID,
} from '../../../synapse-client/SynapseClient'
import {
  useCreateEntity,
  useGetDefaultUploadDestination,
  useUpdateEntity,
} from '../../../synapse-queries'
import { FileUploadArgs } from '../../../synapse-queries/file/FileUploadArgs'
import { useDirectUploadToS3 } from '../../../synapse-queries/file/useDirectUploadToS3'
import { useSynapseMultipartUpload } from '../../../synapse-queries/file/useSynapseMultipartUpload'
import { fixDefaultContentType } from '../../ContentTypeUtils'
import { useSynapseContext } from '../../context/index'
import useConfirmItems from '../useConfirmItems'
import {
  FilePreparedForUpload,
  PrepareDirsForUploadReturn,
  usePrepareFileEntityUpload,
} from './usePrepareFileEntityUpload'
import {
  TrackedUploadProgress,
  useTrackFileUploads,
} from './useTrackFileUploads'

type UploadFileStatus =
  | 'PREPARING'
  | 'UPLOADING'
  | 'PAUSED'
  | 'CANCELED_BY_USER'
  | 'FAILED'
  | 'COMPLETE'

type Prompt = {
  title: string
  message: string
  onConfirmAll: () => void
  onConfirm: () => void
  onSkip: () => void
  onCancelAll: () => void
}

type UploaderState =
  | 'LOADING'
  | 'WAITING'
  | 'PROMPT_USER'
  | 'UPLOADING'
  | 'COMPLETE'
  | 'ERROR'

type FileUploadProgress = {
  file: File
  progress: ProgressCallback
  status: UploadFileStatus
  cancel: () => void
  pause: () => void
  resume: () => void
  remove: () => void
  failureReason?: string
}

type UseUploadFileEntitiesReturn = {
  state: UploaderState
  errorMessage?: string
  isPrecheckingUpload: boolean
  activePrompts: Prompt[]
  initiateUpload: (files: File[]) => void
  activeUploadCount: number
  uploadProgress: FileUploadProgress[]
}

// Limit the number of concurrent uploads to avoid overwhelming the browser
// Note that within one upload operation, multiple parts could be uploaded in parallel
const limitConcurrentUploads = pLimit(8)

export function useUploadFileEntities(
  /** The ID of the parent entity to upload files to */
  parentId: string,
  /** Optional accessKey for a direct S3 upload */
  accessKey = '',
  /** Optional secretKey for a direct S3 upload */
  secretKey = '',
): UseUploadFileEntitiesReturn {
  const { synapseClient } = useSynapseContext()

  const {
    data: uploadDestination,
    isLoading: isLoadingUploadDestination,
    error: getUploadDestinationError,
  } = useGetDefaultUploadDestination(parentId)
  const storageLocationId =
    uploadDestination?.storageLocationId || SYNAPSE_STORAGE_LOCATION_ID

  const errorMessage = getUploadDestinationError?.message

  const {
    pendingItems: filesToConfirmNewVersion,
    confirmItem: confirmUploadFileWithNewVersion,
    addItemsPendingConfirmation: addFileToConfirmUploadNewVersion,
    removePendingItems: skipFileRequiringNewVersion,
    clear: clearPendingFiles,
  } = useConfirmItems<{
    file: File
    parentId: string
    existingEntityId: string | null
  }>()

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
  } = useTrackFileUploads()

  const state: UploaderState = useMemo(() => {
    if (getUploadDestinationError) {
      return 'ERROR'
    }
    if (isLoadingUploadDestination) {
      return 'LOADING'
    }
    if (filesToConfirmNewVersion.length > 0) {
      return 'PROMPT_USER'
    }
    if (isUploading) {
      return 'UPLOADING'
    }
    if (isUploadComplete) {
      return 'COMPLETE'
    }
    return 'WAITING'
  }, [
    filesToConfirmNewVersion.length,
    getUploadDestinationError,
    isLoadingUploadDestination,
    isUploadComplete,
    isUploading,
  ])

  const { mutateAsync: createEntityWithNewFile } = useCreateEntity()
  const { mutateAsync: updateEntityWithNewFile } = useUpdateEntity()
  const { mutateAsync: uploadFile } = useSynapseMultipartUpload()
  const { mutateAsync: uploadFileDirectlyToS3 } = useDirectUploadToS3()

  const uploadPreparedFile = useCallback(
    async function uploadPreparedFile(
      newTrackedUploadProgress: Map<File, TrackedUploadProgress>,
      preparedFile: FilePreparedForUpload,
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

        if (preparedFile.existingEntityId) {
          // Update the existing entity
          const entity =
            await synapseClient.entityServicesClient.getRepoV1EntityId({
              id: preparedFile.existingEntityId,
            })
          await updateEntityWithNewFile({
            ...entity,
            dataFileHandleId: newFileHandleId,
          } as FileEntity)
          // Mark file as done!
          setComplete(preparedFile.file)
        } else {
          // else, it's a new file entity
          const newFileEntity: FileEntity = {
            parentId: preparedFile.parentId,
            name: preparedFile.file.name,
            concreteType: 'org.sagebionetworks.repo.model.FileEntity',
            dataFileHandleId: newFileHandleId,
          }
          await createEntityWithNewFile(newFileEntity)
          // Mark file as done!
          setComplete(preparedFile.file)
        }
      } catch (e) {
        console.error('File upload failed: ', e)
        setFailed(preparedFile.file, e.message)
      }
    },
    [
      storageLocationId,
      uploadDestination,
      setProgress,
      setIsUploading,
      uploadFileDirectlyToS3,
      accessKey,
      secretKey,
      uploadFile,
      synapseClient.entityServicesClient,
      updateEntityWithNewFile,
      setComplete,
      createEntityWithNewFile,
      setFailed,
    ],
  )

  /**
   * Upload the list of prepared files to Synapse.
   */
  const startUpload = useCallback(
    (...preparedFiles: FilePreparedForUpload[]) => {
      clearPendingFiles()

      const newTrackedUploadProgress = trackNewFiles(...preparedFiles)

      // TODO: We already got the storage location from the root, but what if one of the sub-folders already existed
      //   with a different storage location? should we use that storage location?
      preparedFiles.map(preparedFile =>
        limitConcurrentUploads(() =>
          uploadPreparedFile(newTrackedUploadProgress, preparedFile),
        ),
      )
    },
    [clearPendingFiles, trackNewFiles, uploadPreparedFile],
  )

  /**
   * After all files have been prepared for upload, process them to determine if the upload can automatically continue.
   * If all files can be uploaded without user intervention, start the upload. Otherwise, prompt the user to make required
   * decisions to continue the upload.
   */
  const postPrepareUpload = useCallback(
    (
      preparedFiles: PrepareDirsForUploadReturn,
      /** If true, skip checks such as prompting the user before creating a new version.
       * This is useful when resuming an upload that has already been pre-checked. */
      skipChecks = false,
    ) => {
      const { newFileEntities, updatedFileEntities } = preparedFiles

      if (skipChecks) {
        startUpload(...newFileEntities, ...updatedFileEntities)
      } else {
        if (newFileEntities.length > 0 && updatedFileEntities.length == 0) {
          // No need to prompt the user, just go ahead and upload!
          startUpload(...newFileEntities)
        }

        if (updatedFileEntities.length > 0) {
          // Set up state to ask the user to confirm that they want to upload new versions.
          confirmUploadFileWithNewVersion(...newFileEntities)
          addFileToConfirmUploadNewVersion(...updatedFileEntities)
        }
      }
    },
    [
      addFileToConfirmUploadNewVersion,
      confirmUploadFileWithNewVersion,
      startUpload,
    ],
  )

  const { mutate: prepareUpload, isPending: isPrecheckingUpload } =
    usePrepareFileEntityUpload()

  const initiateUpload = useCallback(
    (files: File[]) => {
      prepareUpload(
        { files, parentId },
        {
          onSuccess: result => {
            postPrepareUpload(result, false)
          },
        },
      )
    },
    [parentId, postPrepareUpload, prepareUpload],
  )

  const activePrompts = useMemo(() => {
    return filesToConfirmNewVersion.map(fileToPrompt => {
      return {
        title: 'Update existing file?',
        message: `A file named "${
          fileToPrompt.file.name
        }" (${fileToPrompt.existingEntityId!}) already exists in this location. Do you want to update the existing file and create a new version?`,
        onConfirm: () => {
          const { confirmedItems, pendingItems } =
            confirmUploadFileWithNewVersion(fileToPrompt)

          if (confirmedItems.length > 0 && pendingItems.length == 0) {
            void startUpload(...confirmedItems)
          }
        },
        onConfirmAll: () => {
          const { confirmedItems } = confirmUploadFileWithNewVersion(
            ...filesToConfirmNewVersion,
          )

          void startUpload(...confirmedItems)
        },
        onSkip: () => {
          const { confirmedItems, pendingItems } =
            skipFileRequiringNewVersion(fileToPrompt)

          if (confirmedItems.length > 0 && pendingItems.length == 0) {
            void startUpload(...confirmedItems)
          }
        },
        onCancelAll: () => {
          clearPendingFiles()
        },
      }
    })
  }, [
    clearPendingFiles,
    confirmUploadFileWithNewVersion,
    filesToConfirmNewVersion,
    skipFileRequiringNewVersion,
    startUpload,
  ])

  const uploadProgress: FileUploadProgress[] = useMemo(() => {
    return [...trackedUploadProgress].map(([file, progress]) => {
      return {
        file: file,
        progress: progress.progress,
        status: progress.status,
        failureReason: progress.failureReason,
        cancel: () => {
          cancelUpload(file)
        },
        pause: () => {
          pauseUpload(file)
        },
        resume: () => {
          prepareUpload(
            { files: [file], parentId: progress.parentId },
            {
              onSuccess: result => {
                postPrepareUpload(result, true)
              },
            },
          )
        },
        remove() {
          removeUpload(file)
        },
      }
    })
  }, [
    cancelUpload,
    pauseUpload,
    postPrepareUpload,
    prepareUpload,
    removeUpload,
    trackedUploadProgress,
  ])

  return useMemo(() => {
    return {
      state,
      errorMessage,
      isPrecheckingUpload,
      activeUploadCount,
      initiateUpload: initiateUpload,
      activePrompts: activePrompts,
      uploadProgress: uploadProgress,
    }
  }, [
    state,
    errorMessage,
    isPrecheckingUpload,
    activeUploadCount,
    initiateUpload,
    activePrompts,
    uploadProgress,
  ])
}
