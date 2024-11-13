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
  PrepareFileEntityUploadArgs,
  UpdateEntityFileUpload,
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

export type UploaderState =
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

export type InitiateUploadArgs = PrepareFileEntityUploadArgs

export type UseUploadFileEntitiesReturn = {
  state: UploaderState
  errorMessage?: string
  isPrecheckingUpload: boolean
  /**
   * Prompts that require user input before the upload can proceed. Typically, these are prompts to confirm uploading a new version
   * of an existing FileEntity.
   *
   * If prompts are present, `state` will always be 'PROMPT_USER'.
   */
  activePrompts: Prompt[]
  /**
   * Arguments used to initialize an upload operation. In addition to providing a file, the caller must also provide one of
   * the following:
   *   - rootContainerId: The ID of the parent Project or Folder to upload files to. If the File objects include a webkitRelativePath,
   *       then the Files will be uploaded into created sub-folders to match the relative path. Any files that match on path and file name
   *       will trigger a prompt to confirm updating a new version in the `activePrompts` field, which must be resolved before the upload can proceed.
   *   - existingEntityId: The ID of the FileEntity for which a new version should be uploaded. No prompts will be triggered by this option.
   */
  initiateUpload: (args: InitiateUploadArgs) => void
  activeUploadCount: number
  uploadProgress: FileUploadProgress[]
}

// Limit the number of concurrent uploads to avoid overwhelming the browser
// Note that within one upload operation, multiple parts could be uploaded in parallel
const limitConcurrentUploads = pLimit(8)

/**
 * Hook to start and track the progress of files uploads in Synapse, creating/updating a FileEntity for each uploaded file.
 *
 * To start an upload, see `initiateUpload` returned by this hook.
 */
export function useUploadFileEntities(
  /** The ID of the parent entity to upload files to, or the FileEntity for which a new version should be uploaded */
  containerOrEntityId: string,
  /** Optional accessKey for a direct S3 upload */
  accessKey = '',
  /** Optional secretKey for a direct S3 upload */
  secretKey = '',
): UseUploadFileEntitiesReturn {
  /**
   * General flow for how the functions in this hook are used is
   *
   * 1. `initiateUpload(files)` - called by the caller of the hook
   * 2. `prepareUpload(files)` - sets up the folder paths, checks for existing entities with the same name
   * 3. `postPrepareUpload(files)` - may prompt the user to confirm uploading new versions of files, based on the results of `prepareUpload`
   * 4. `startUpload(files)` - starts tracking file uploads, for each file, calls `uploadPreparedFile`
   * 5. `uploadPreparedFile(file)` - uploads the file and creates/updates the entity
   */

  const { synapseClient } = useSynapseContext()

  const {
    data: uploadDestination,
    isLoading: isLoadingUploadDestination,
    error: getUploadDestinationError,
  } = useGetDefaultUploadDestination(containerOrEntityId)
  const storageLocationId =
    uploadDestination?.storageLocationId || SYNAPSE_STORAGE_LOCATION_ID

  const errorMessage = getUploadDestinationError?.message

  const {
    pendingItems: filesToConfirmNewVersion,
    confirmItem: confirmUploadFileWithNewVersion,
    addItemsPendingConfirmation: addFileToConfirmUploadNewVersion,
    removePendingItems: skipFileRequiringNewVersion,
    clear: clearPendingFiles,
  } = useConfirmItems<FilePreparedForUpload>()

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

        if (
          'existingEntityId' in preparedFile &&
          preparedFile.existingEntityId
        ) {
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
        } else if ('parentId' in preparedFile) {
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
        } else {
          // this should never happen
          throw new Error(
            `Can't upload file without a parent ID or existing entity ID. File was: ${JSON.stringify(
              preparedFile,
            )}`,
          )
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
    (preparedFiles: PrepareDirsForUploadReturn) => {
      const { filesReadyForUpload, filesToPromptForNewVersion } = preparedFiles
      if (
        filesReadyForUpload.length > 0 &&
        filesToPromptForNewVersion.length == 0
      ) {
        // No need to prompt the user, just go ahead and upload!
        startUpload(...filesReadyForUpload)
      }

      if (filesToPromptForNewVersion.length > 0) {
        // Set up state to ask the user to confirm that they want to upload new versions.
        confirmUploadFileWithNewVersion(...filesReadyForUpload)
        addFileToConfirmUploadNewVersion(...filesToPromptForNewVersion)
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
    (args: InitiateUploadArgs) => {
      prepareUpload(args, {
        onSuccess: result => {
          postPrepareUpload(result)
        },
      })
    },
    [postPrepareUpload, prepareUpload],
  )

  const activePrompts = useMemo(() => {
    return filesToConfirmNewVersion.map(fileToPrompt => {
      return {
        title: 'Update existing file?',
        message: `A file named "${fileToPrompt.file.name}" (${
          (fileToPrompt as UpdateEntityFileUpload).existingEntityId
        }) already exists in this location. Do you want to update the existing file and create a new version?`,
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
