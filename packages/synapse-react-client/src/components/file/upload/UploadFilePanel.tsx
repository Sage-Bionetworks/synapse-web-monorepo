import Fade from '@mui/material/Fade'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { noop } from 'lodash-es'
import { MouseEvent, ReactNode, useRef, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'
import {
  FileSelectionConstraints,
  validateFileSelection,
} from './validateFileSelection'

const disabledUploadPaneSx: SxProps = {
  pointerEvents: 'none',
  filter: 'opacity(33%)',
}

export type UploadFilePanelProps = {
  /**
   * An optional message that appears in the upload panel (e.g. to describe the upload destination).
   */
  message?: ReactNode
  /**
   * Called when upload is invoked.
   * @param files
   */
  onUploadFileList: (files: ArrayLike<File>) => void
  /**
   * If true, allow uploading multiple files. Otherwise, only one file may be uploaded.
   */
  allowMultipleFiles: boolean
  /** Whether the component should show a loader.
   * @default false
   */
  isLoading?: boolean
  /**
   * Text to show when `isLoading` is true.
   * @default 'Loading...'
   */
  loadingText?: string
  /**
   * Whether to disable the upload panel (e.g. when the project storage is full).
   * @default false
   */
  disabled?: boolean
  /**
   * Whether to enable drag-and-drop to upload functionality.
   * @default false
   */
  disableDragAndDrop?: boolean
  /**
   * When `allowMultipleFiles` is true, whether to skip the Files/Folder menu and open the
   * (multi-select) file browser directly. Has no effect when `allowMultipleFiles` is false.
   * @default false
   */
  hideFolderOption?: boolean
  /**
   * If provided, files whose `type` is not included in this list are rejected before upload,
   * and used to constrain the file picker via the input's `accept` attribute.
   */
  acceptedContentTypes?: FileSelectionConstraints['acceptedContentTypes']
  /**
   * If provided, files larger than this are rejected before upload.
   */
  maxFileSizeBytes?: FileSelectionConstraints['maxFileSizeBytes']
  /**
   * If provided, a selection that would bring the total file count (see `currentFileCount`)
   * above this value is rejected before upload.
   */
  maxFiles?: FileSelectionConstraints['maxFiles']
  /**
   * The number of files already selected/uploaded prior to this selection. Used with `maxFiles`.
   * @default 0
   */
  currentFileCount?: FileSelectionConstraints['currentFileCount']
  /**
   * Invoked when a file selection is rejected due to `acceptedContentTypes`, `maxFileSizeBytes`,
   * or `maxFiles`, with a human-readable description of the violation. Invoked with `null` when
   * a subsequent selection is valid, so the caller can clear a previously displayed error.
   */
  onValidationError?: (message: string | null) => void
}

/**
 * Provides a generic UI component to upload one or more files.
 * @param props
 * @constructor
 */
export default function UploadFilePanel(props: UploadFilePanelProps) {
  const {
    onUploadFileList,
    allowMultipleFiles,
    isLoading = false,
    loadingText = 'Loading...',
    disabled = false,
    message,
    disableDragAndDrop = false,
    hideFolderOption = false,
    acceptedContentTypes,
    maxFileSizeBytes,
    maxFiles,
    currentFileCount = 0,
    onValidationError = noop,
  } = props
  const fileInputRef = useRef<HTMLInputElement>(null)
  const folderInputRef = useRef<HTMLInputElement>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (!allowMultipleFiles || hideFolderOption) {
      fileInputRef.current!.click()
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  function handleFileListSelected(fileList: FileList) {
    const files = Array.from(fileList)
    const validationError = validateFileSelection(files, {
      acceptedContentTypes,
      maxFileSizeBytes,
      maxFiles,
      currentFileCount,
    })
    if (validationError) {
      onValidationError(validationError)
      return
    }
    onValidationError(null)
    onUploadFileList(fileList)
  }

  return (
    <Stack
      sx={{
        py: 3,
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        border: '1px dashed #D9D9D9',
        backgroundColor: 'grey.100',
        textAlign: 'center',
        ...(disabled ? disabledUploadPaneSx : {}),
      }}
    >
      {isLoading && (
        <>
          <div>
            <SynapseSpinner size={40} />
          </div>
          <Typography
            variant={'smallText1'}
            sx={{
              my: 2,
            }}
          >
            {loadingText}
          </Typography>
        </>
      )}
      {!isLoading && (
        <>
          <img
            src={
              'https://s3.us-east-1.amazonaws.com/static.synapse.org/images/upload_illustration.svg'
            }
          />
          {/* File input */}
          <input
            type="file"
            id="filesToUpload"
            name="file upload"
            style={{ display: 'none' }}
            aria-hidden="true"
            multiple={allowMultipleFiles}
            accept={acceptedContentTypes?.join(',')}
            ref={fileInputRef}
            onChange={e => {
              if (e.target.files != null) {
                handleFileListSelected(e.target.files)
                // Reset so the same file(s) can be reselected after fixing a validation error.
                e.target.value = ''
              }
            }}
          />
          {/* Folder input */}
          <input
            type="file"
            id="folderToUpload"
            name="folder upload"
            style={{ display: 'none' }}
            aria-hidden="true"
            ref={folderInputRef}
            onChange={e => {
              if (e.target.files != null) {
                handleFileListSelected(e.target.files)
                e.target.value = ''
              }
            }}
            // @ts-expect-error - webkitdirectory is not included in the InputHTMLAttributes type
            webkitdirectory="true"
          />

          <Typography
            variant={'body1'}
            sx={{
              my: 2,
            }}
          >
            <Link onClick={handleClick}>Click to upload</Link>
            {!disableDragAndDrop && ' or drag and drop'}
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slots={{
              transition: Fade,
            }}
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
          {message}
        </>
      )}
    </Stack>
  )
}
