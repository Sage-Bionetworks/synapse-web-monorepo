import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/SynapseClient'
import {
  useCreateEntity,
  useGetDefaultUploadDestination,
  useUpdateEntity,
} from '@/synapse-queries'
import {
  UploaderState,
  UploadItem,
  useUploadFiles,
} from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useSynapseContext } from '../../context/index'
import useConfirmItems from '../useConfirmItems'
import {
  FilePreparedForUpload,
  PrepareDirsForUploadReturn,
  PrepareFileEntityUploadArgs,
  UpdateEntityFilePreparedForUpload,
  usePrepareFileEntityUpload,
} from './usePrepareFileEntityUpload'
import { willUploadsExceedStorageLimit } from './willUploadsExceedStorageLimit'

export type PromptInfo = {
  type: 'CONFIRM_NEW_VERSION'
  fileName: string
  existingEntityId: string
}

export type Prompt = {
  info: PromptInfo
  onConfirmAll: () => void
  onConfirm: () => void
  onSkip: () => void
  onCancelAll: () => void
}

export type EntityUploaderState =
  | UploaderState
  | 'LOADING'
  | 'PROMPT_USER'
  | 'ERROR'

export type InitiateUploadArgs = PrepareFileEntityUploadArgs

export type UseUploadFileEntitiesReturn = {
  /**
   * The current state of the uploader
   */
  state: EntityUploaderState
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
  uploadProgress: UploadItem[]
  /** True when files can be uploaded. */
  isUploadReady: boolean
}

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
  /** Invoked if chosen files will exceed storage limits based on a client-side check. */
  onStorageLimitExceeded: () => void = noop,
): UseUploadFileEntitiesReturn {
  /**
   *
   * TODO: REVISE THIS COMMENT
   * General flow for how the functions in this hook are used is
   *
   * 1. `initiateUpload(files)` - called by the caller of the hook
   * 2. `willUploadsExceedLimit(files, usage)` - client-side check if the uploads will exceed the storage limit
   * 3. `prepareDirsForUpload(files)` - sets up the folder paths, checks for existing entities with the same name
   * 4. `postPrepareUpload(files)` - may prompt the user to confirm uploading new versions of files, based on the results of `prepareUpload`
   * 5. `startUpload(files)` - starts tracking file uploads, for each file, calls `uploadPreparedFile`
   * 6. `uploadPreparedFile(file)` - uploads the file and creates/updates the entity
   */

  const { synapseClient } = useSynapseContext()

  const { mutateAsync: createEntityWithNewFile } = useCreateEntity()
  const { mutateAsync: updateEntityWithNewFile } = useUpdateEntity()

  const onUploadComplete = useCallback(
    async function onUploadComplete(
      preparedFile: FilePreparedForUpload,
      newFileHandleId: string,
    ) {
      if ('existingEntityId' in preparedFile && preparedFile.existingEntityId) {
        // Update the existing entity
        const entity =
          await synapseClient.entityServicesClient.getRepoV1EntityId({
            id: preparedFile.existingEntityId,
          })
        await updateEntityWithNewFile({
          ...entity,
          dataFileHandleId: newFileHandleId,
        } as FileEntity)
      } else if ('parentId' in preparedFile) {
        // else, it's a new file entity
        const newFileEntity: FileEntity = {
          parentId: preparedFile.parentId,
          name: preparedFile.file.name,
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          dataFileHandleId: newFileHandleId,
        }
        await createEntityWithNewFile(newFileEntity)
      } else {
        // this should never happen
        throw new Error(
          `Can't upload file without a parent ID or existing entity ID. File was: ${JSON.stringify(
            preparedFile,
          )}`,
        )
      }
    },
    [
      createEntityWithNewFile,
      synapseClient.entityServicesClient,
      updateEntityWithNewFile,
    ],
  )

  const {
    data: uploadDestination,
    isLoading: isLoadingUploadDestination,
    error: getUploadDestinationError,
  } = useGetDefaultUploadDestination(containerOrEntityId, {
    // Storage location usage is eventually consistent. We will keep track of the sum of uploaded files client-side
    // to determine if subsequent uploads will exceed the storage limit.
    // Do not refetch the storage location usage to avoid double-counting the size of new uploads against the limit.
    staleTime: Infinity,
  })

  const isUploadReady = Boolean(containerOrEntityId && uploadDestination)

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

  const onBeforeUpload = useCallback(() => {
    clearPendingFiles()
  }, [clearPendingFiles])

  const {
    state,
    startUpload,
    activeUploadCount,
    uploadProgress,
    bytesPendingUpload,
  } = useUploadFiles({
    onBeforeUpload,
    storageLocationId,
    uploadDestination,
    accessKey,
    secretKey,
    onUploadComplete,
  })

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

  const { mutateAsync: prepareDirsForUpload, isPending: isPrecheckingUpload } =
    usePrepareFileEntityUpload()

  const initiateUpload = useCallback(
    async (args: InitiateUploadArgs) => {
      if (uploadDestination == null) {
        console.error(
          'Upload destination was not loaded, or failed to load! Aborting upload.',
        )
        return
      }
      if (
        willUploadsExceedStorageLimit(
          args.map(arg => arg.file),
          uploadDestination.projectStorageLocationUsage,
          bytesPendingUpload,
        )
      ) {
        onStorageLimitExceeded()
        return
      }
      const filesReadyForUpload = await prepareDirsForUpload(args)

      postPrepareUpload(filesReadyForUpload)
    },
    [
      bytesPendingUpload,
      onStorageLimitExceeded,
      postPrepareUpload,
      prepareDirsForUpload,
      uploadDestination,
    ],
  )

  const activePrompts: Prompt[] = useMemo(() => {
    return filesToConfirmNewVersion.map(fileToPrompt => {
      return {
        info: {
          type: 'CONFIRM_NEW_VERSION',
          fileName: fileToPrompt.file.name,
          existingEntityId: (fileToPrompt as UpdateEntityFilePreparedForUpload)
            .existingEntityId,
        },
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

  // Override the uploader state with the checks custom to this hook
  const uploaderStateOverride = useMemo<EntityUploaderState>(() => {
    if (errorMessage) {
      return 'ERROR'
    }
    if (isLoadingUploadDestination) {
      return 'LOADING'
    }
    if (activePrompts.length > 0) {
      return 'PROMPT_USER'
    }
    return state
  }, [activePrompts.length, errorMessage, isLoadingUploadDestination, state])

  return useMemo(() => {
    return {
      state: uploaderStateOverride,
      errorMessage,
      isPrecheckingUpload,
      activeUploadCount,
      initiateUpload: initiateUpload,
      activePrompts: activePrompts,
      uploadProgress: uploadProgress,
      isUploadReady,
    }
  }, [
    uploaderStateOverride,
    errorMessage,
    isPrecheckingUpload,
    activeUploadCount,
    initiateUpload,
    activePrompts,
    uploadProgress,
    isUploadReady,
  ])
}
