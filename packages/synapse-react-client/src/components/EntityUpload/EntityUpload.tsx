import MultiFileUploadProgress from '@/components/file/upload/MultiFileUploadProgress'
import UploadFilePanel from '@/components/file/upload/UploadFilePanel'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/index'
import { useGetDefaultUploadDestination, useGetEntity } from '@/synapse-queries'
import { getUploadDestinationString } from '@/utils/functions/FileHandleUtils'
import {
  EntityUploaderState,
  useUploadFileEntities,
} from '@/utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { Typography } from '@mui/material'
import { noop } from 'lodash-es'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { displayToast } from '../ToastMessage/ToastMessage'
import { EntityUploadPromptDialog } from './EntityUploadPromptDialog'
import { ExternalObjectStoreCredentialsForm } from './ExternalObjectStoreCredentialsForm'
import { ProjectStorageLimitAlert } from './ProjectStorageLimitAlert'

export type EntityUploadProps = {
  /** The ID of the entity to upload to. If this is a container, file(s) will be added as children. If this is a
   * FileEntity, then a file may be uploaded as a new version */
  entityId: string
  /** Callback that is invoked when the state of the uploader changes */
  onStateChange?: (state: EntityUploaderState) => void
  /** Callback that is invoked when component is ready to upload */
  onUploadReady?: () => void
}

export type EntityUploadHandle = {
  /** Programmatically add files to the upload (e.g. on drag & drop) */
  handleUploads: (fileList: ArrayLike<File>) => void
}

export const EntityUpload = forwardRef(function EntityUpload(
  props: EntityUploadProps,
  ref: ForwardedRef<EntityUploadHandle>,
) {
  const { entityId, onStateChange = noop, onUploadReady = noop } = props

  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)

  const isFileEntity =
    entity?.concreteType === 'org.sagebionetworks.repo.model.FileEntity'

  const { data: uploadDestination, isLoading: isLoadingUploadDestination } =
    useGetDefaultUploadDestination(entityId)
  const isLoading = isLoadingEntity || isLoadingUploadDestination

  const [accessKey, setAccessKey] = useState('')
  const [secretKey, setSecretKey] = useState('')

  const [didUploadsExceedStorageLimit, setDidUploadsExceedStorageLimit] =
    useState(false)

  const {
    initiateUpload,
    state,
    uploadProgress,
    activePrompts,
    isPrecheckingUpload,
    isUploadReady,
  } = useUploadFileEntities(entityId, accessKey, secretKey, () =>
    setDidUploadsExceedStorageLimit(true),
  )

  useEffect(() => {
    onStateChange(state)
  }, [state, onStateChange])

  useEffect(() => {
    if (isUploadReady) {
      onUploadReady()
    }
  }, [isUploadReady, onUploadReady])

  function uploadFileList(fileList: ArrayLike<File>) {
    if (uploadDestination?.projectStorageLocationUsage?.isOverLimit) {
      displayToast(
        'Cannot upload files because the storage limit has been exceeded.',
        'danger',
      )
      return
    }
    const args = Array.from(fileList).map(file => {
      if (isFileEntity) {
        return { file, existingEntityId: entityId }
      }
      return {
        file,
        rootContainerId: entityId,
      }
    })
    initiateUpload(args)
  }

  useImperativeHandle(ref, () => ({
    handleUploads: uploadFileList,
  }))

  const showLoading = isPrecheckingUpload || isLoading
  const loadingText = isPrecheckingUpload
    ? 'Preparing files for upload...'
    : 'Loading...'

  return (
    <div>
      <EntityUploadPromptDialog activePrompts={activePrompts} />
      {uploadDestination?.projectStorageLocationUsage && (
        <ProjectStorageLimitAlert
          usage={uploadDestination.projectStorageLocationUsage}
          didUploadsExceedLimit={didUploadsExceedStorageLimit}
        />
      )}
      <ExternalObjectStoreCredentialsForm
        uploadDestination={uploadDestination}
        accessKey={accessKey}
        setAccessKey={setAccessKey}
        secretKey={secretKey}
        setSecretKey={setSecretKey}
      />
      <UploadFilePanel
        onUploadFileList={uploadFileList}
        allowMultipleFiles={!isFileEntity}
        isLoading={showLoading}
        loadingText={loadingText}
        disabled={uploadDestination?.projectStorageLocationUsage?.isOverLimit}
        message={
          <>
            <Typography variant={'smallText1'}>
              All uploaded files will be stored in
              {uploadDestination?.storageLocationId ===
                SYNAPSE_STORAGE_LOCATION_ID && ' Synapse storage'}
              {uploadDestination &&
                uploadDestination?.storageLocationId !==
                  SYNAPSE_STORAGE_LOCATION_ID && (
                  <>
                    :<br />
                    {getUploadDestinationString(uploadDestination)}
                  </>
                )}
            </Typography>
            {uploadDestination && uploadDestination.banner && (
              <FullWidthAlert
                sx={{
                  textAlign: 'left',
                }}
                isGlobal={false}
                title={'Storage Location Message'}
                description={uploadDestination.banner}
                variant={'info'}
              />
            )}
          </>
        }
      />
      <MultiFileUploadProgress
        uploaderState={state}
        uploadProgress={uploadProgress}
      />
    </div>
  )
})
