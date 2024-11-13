import {
  Box,
  Fade,
  Link,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { noop } from 'lodash-es'
import pluralize from 'pluralize'
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { FixedSizeList } from 'react-window'
import { SYNAPSE_STORAGE_LOCATION_ID } from '../../synapse-client/index'
import {
  useGetDefaultUploadDestination,
  useGetEntity,
} from '../../synapse-queries'
import {
  UploaderState,
  useUploadFileEntities,
} from '../../utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { EntityUploadPromptDialog } from './EntityUploadPromptDialog'
import { ExternalObjectStoreCredentialsForm } from './ExternalObjectStoreCredentialsForm'
import {
  FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX,
  FileUploadProgress,
} from './FileUploadProgress'

export type EntityUploadProps = {
  /** The ID of the entity to upload to. If this is a container, file(s) will be added as children. If this is a
   * FileEntity, then a file may be uploaded as a new version */
  entityId: string
  /** Callback that is invoked when the state of the uploader changes */
  onStateChange?: (state: UploaderState) => void
}

// This padding value will be used to manipulate the appearance of a virtualized list of FileUploadProgress components
const UPLOAD_CONTAINER_PADDING_X_PX = 24

export type EntityUploadHandle = {
  /** Programmatically add files to the upload (e.g. on drag & drop) */
  handleUploads: (fileList: ArrayLike<File>) => void
}

export const EntityUpload = React.forwardRef(function EntityUpload(
  props: EntityUploadProps,
  ref: React.ForwardedRef<EntityUploadHandle>,
) {
  const { entityId, onStateChange = noop } = props

  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)

  const isFileEntity =
    entity?.concreteType === 'org.sagebionetworks.repo.model.FileEntity'

  const { data: uploadDestination, isLoading: isLoadingUploadDestination } =
    useGetDefaultUploadDestination(entityId)
  const isLoading = isLoadingEntity || isLoadingUploadDestination

  const [accessKey, setAccessKey] = useState('')
  const [secretKey, setSecretKey] = useState('')

  const {
    initiateUpload,
    state,
    uploadProgress,
    activePrompts,
    activeUploadCount,
    isPrecheckingUpload,
  } = useUploadFileEntities(entityId, accessKey, secretKey)

  useEffect(() => {
    onStateChange(state)
  }, [state, onStateChange])

  const fileInputRef = useRef<HTMLInputElement>(null)
  const folderInputRef = useRef<HTMLInputElement>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isFileEntity) {
      fileInputRef.current!.click()
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const numberOfItemsCompleted = uploadProgress.filter(
    p => p.status === 'COMPLETE',
  ).length

  function uploadFileList(fileList: ArrayLike<File>) {
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

  return (
    <div>
      <EntityUploadPromptDialog activePrompts={activePrompts} />
      <ExternalObjectStoreCredentialsForm
        uploadDestination={uploadDestination}
        accessKey={accessKey}
        setAccessKey={setAccessKey}
        secretKey={secretKey}
        setSecretKey={setSecretKey}
      />
      <Stack
        sx={{
          width: '100%',
          height: '235px',
          border: '1px dashed #D9D9D9',
          backgroundColor: 'grey.100',
          textAlign: 'center',
        }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {(isPrecheckingUpload || isLoading) && (
          <>
            <div>
              <SynapseSpinner size={40} />
            </div>
            <Typography variant={'smallText1'} my={2}>
              {isLoading ? 'Loading...' : 'Preparing files for upload...'}
            </Typography>
          </>
        )}
        {!isPrecheckingUpload && !isLoading && (
          <>
            <img
              src={
                'https://s3.us-east-1.amazonaws.com/static.synapse.org/images/upload_illustration.svg'
              }
            />
            {/* File input */}
            <input
              className="form-control"
              type="file"
              id="filesToUpload"
              name="file upload"
              style={{ display: 'none' }}
              aria-hidden="true"
              multiple={!isFileEntity}
              ref={fileInputRef}
              onChange={e => {
                if (e.target.files != null) {
                  uploadFileList(e.target.files)
                }
              }}
            />
            {/* Folder input */}
            <input
              className="form-control"
              type="file"
              id="folderToUpload"
              name="folder upload"
              style={{ display: 'none' }}
              aria-hidden="true"
              ref={folderInputRef}
              onChange={e => {
                if (e.target.files != null) {
                  uploadFileList(e.target.files)
                }
              }}
              // @ts-expect-error - webkitdirectory is not included in the React.InputHTMLAttributes type
              webkitdirectory="true"
            />

            <Typography variant={'body1'} my={2}>
              <Link onClick={handleClick}>Click to upload</Link> or drag and
              drop
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              TransitionComponent={Fade}
            >
              <MenuItem
                onClick={() => {
                  handleClose()
                  fileInputRef.current!.click()
                }}
              >
                Files
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  folderInputRef.current!.click()
                }}
              >
                Folder
              </MenuItem>
            </Menu>

            <Typography variant={'smallText1'}>
              All uploaded files will be stored in
              {uploadDestination?.storageLocationId ===
                SYNAPSE_STORAGE_LOCATION_ID && ' Synapse storage'}
              {uploadDestination?.storageLocationId !==
                SYNAPSE_STORAGE_LOCATION_ID && (
                <>
                  :<br />
                  {uploadDestination?.banner}
                </>
              )}
            </Typography>
          </>
        )}
      </Stack>
      {uploadProgress.length > 0 && (
        <Paper
          sx={{
            px: `${UPLOAD_CONTAINER_PADDING_X_PX}px`,
            py: 2,
            mt: 3,
            width: '100%',
            height: '260px',
            background: '#FBFBFC',
          }}
        >
          <Typography variant={'headline2'} gutterBottom>
            {state === 'WAITING' && <>Uploads</>}
            {state === 'UPLOADING' && (
              <>
                Uploading {activeUploadCount}{' '}
                {pluralize('Item', activeUploadCount)}
              </>
            )}
            {state === 'COMPLETE' && (
              <>
                Uploaded {numberOfItemsCompleted}{' '}
                {pluralize('Item', numberOfItemsCompleted)}
              </>
            )}
          </Typography>
          <Box
            sx={{
              '& > div > div > :not(:last-child)': {
                borderBottom: 'solid 1px #EAECEE',
              },
            }}
            // Add negative margin equivalent to the container's padding
            // This will put the scrollbar on the right edge of the container
            mx={`${UPLOAD_CONTAINER_PADDING_X_PX * -1}px`}
          >
            <FixedSizeList
              itemSize={FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX}
              height={205}
              itemCount={uploadProgress.length}
              width={'100%'}
            >
              {({ index, style }) => {
                const fileProgress = uploadProgress[index]
                const fileNameWithPath =
                  fileProgress.file.webkitRelativePath || fileProgress.file.name

                const totalSizeInBytes = fileProgress.file.size
                const fractionOfPartsUploaded =
                  fileProgress.progress.value / fileProgress.progress.total
                const uploadedSizeInBytes =
                  totalSizeInBytes * fractionOfPartsUploaded

                return (
                  <Box
                    key={
                      // File path + name should be unique
                      fileNameWithPath
                    }
                    style={{
                      ...style,
                      // Use same value as the outer container's padding to determine the width,
                      // ensuring the items in the list appear to have the same padding
                      width: `calc(100% - ${
                        UPLOAD_CONTAINER_PADDING_X_PX * 2
                      }px)`,
                      margin: `0px ${UPLOAD_CONTAINER_PADDING_X_PX}px`,
                    }}
                  >
                    <FileUploadProgress
                      fileName={fileNameWithPath}
                      status={fileProgress.status}
                      totalSizeInBytes={totalSizeInBytes}
                      uploadedSizeInBytes={uploadedSizeInBytes}
                      onCancel={fileProgress.cancel}
                      onPause={fileProgress.pause}
                      onResume={fileProgress.resume}
                      onRemove={fileProgress.remove}
                      errorMessage={fileProgress.failureReason}
                    />
                  </Box>
                )
              }}
            </FixedSizeList>
          </Box>
        </Paper>
      )}
    </div>
  )
})
