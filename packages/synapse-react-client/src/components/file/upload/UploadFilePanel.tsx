import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { SxProps } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { MouseEvent, ReactNode, useRef, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'
import Menu from '@mui/material/Menu'
import Fade from '@mui/material/Fade'
import MenuItem from '@mui/material/MenuItem'

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
  } = props
  const fileInputRef = useRef<HTMLInputElement>(null)
  const folderInputRef = useRef<HTMLInputElement>(null)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (!allowMultipleFiles) {
      fileInputRef.current!.click()
    } else {
      setAnchorEl(event.currentTarget)
    }
  }
  const handleClose = () => {
    setAnchorEl(null)
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
            ref={fileInputRef}
            onChange={e => {
              if (e.target.files != null) {
                onUploadFileList(e.target.files)
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
                onUploadFileList(e.target.files)
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
            <Link onClick={handleClick}>Click to upload</Link> or drag and drop
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
