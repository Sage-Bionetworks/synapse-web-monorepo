import {
  CheckCircleTwoTone,
  DeleteTwoTone,
  ErrorTwoTone,
  Pause,
  PlayArrow,
} from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import {
  Box,
  IconButton,
  LinearProgress,
  Tooltip,
  Typography,
} from '@mui/material'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'

export type FileUploadProgressProps = {
  /** The status of the upload. */
  status:
    | 'PREPARING'
    | 'UPLOADING'
    | 'PAUSED'
    | 'CANCELED_BY_USER'
    | 'FAILED'
    | 'COMPLETE'
  /** The name of the file */
  fileName: string
  /** The size of the file, in bytes */
  totalSizeInBytes: number
  /** The number of this file's bytes uploaded so far. */
  uploadedSizeInBytes?: number
  /** Invoked when the upload is cancelled. */
  onCancel: () => void
  /** Invoked when the upload is paused. */
  onPause: () => void
  /** Invoked when the resumed. */
  onResume: () => void
  /** Invoked when the upload is removed from the list. */
  onRemove: () => void
  /** An optional error message to display if the upload has been cancelled due to error. */
  errorMessage?: string
}

export const FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX = 92

/**
 * Component that displays the upload progress of a file, with controls to pause or cancel the upload.
 */
export function FileUploadProgress(props: FileUploadProgressProps) {
  const {
    status,
    fileName,
    onCancel,
    onPause,
    onResume,
    onRemove,
    uploadedSizeInBytes = 0,
    totalSizeInBytes,
    errorMessage,
  } = props

  const isPaused = status === 'PAUSED'
  const isCanceled = status === 'CANCELED_BY_USER' || status === 'FAILED'
  const isComplete = status === 'COMPLETE'
  const isFailed = status === 'FAILED'
  const isUploading = status === 'UPLOADING'
  const isPreparingUpload = status === 'PREPARING'

  let progress: number | undefined =
    (uploadedSizeInBytes / totalSizeInBytes) * 100

  if (isPreparingUpload) {
    progress = undefined
  } else if (isFailed || isCanceled) {
    progress = 0
  }

  return (
    <Box py={2} height={`${FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX}px`}>
      <Box
        display={'flex'}
        flexWrap={'nowrap'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'35px'}
      >
        <Typography variant={'body1'} color={'primary.main'} fontWeight={700}>
          {fileName}
        </Typography>
        {!isComplete && (
          <Box display={'flex'} alignItems={'center'} gap={1} my={1}>
            {isFailed && (
              <Tooltip title={errorMessage}>
                <ErrorTwoTone color={'error'} />
              </Tooltip>
            )}
            {!isCanceled && (
              <Tooltip title={'Cancel'}>
                <IconButton
                  size={'small'}
                  onClick={() => {
                    onCancel()
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            )}
            {isUploading && (
              <Tooltip title={'Pause'}>
                <IconButton
                  size={'small'}
                  onClick={() => {
                    onPause()
                  }}
                >
                  <Pause />
                </IconButton>
              </Tooltip>
            )}
            {isPaused && (
              <Tooltip title={'Resume'}>
                <IconButton
                  size={'small'}
                  onClick={() => {
                    onResume()
                  }}
                >
                  <PlayArrow />
                </IconButton>
              </Tooltip>
            )}
            {isCanceled && (
              <Tooltip title={'Remove'}>
                <IconButton
                  size={'small'}
                  onClick={() => {
                    onRemove()
                  }}
                >
                  <DeleteTwoTone />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        )}
        {isComplete && <CheckCircleTwoTone color={'success'} />}
      </Box>
      <Box display={'flex'} flexWrap={'nowrap'} alignItems={'center'}>
        <LinearProgress
          color={'secondary'}
          value={progress}
          variant={isPreparingUpload ? 'indeterminate' : 'determinate'}
          sx={{ width: '100%', mr: 2.5 }}
        />
        {!isCanceled && (
          <Typography variant={'body1'} whiteSpace={'nowrap'} flexShrink={0}>
            {isPreparingUpload ? (
              'Preparing to upload...'
            ) : (
              <>
                <span>{calculateFriendlyFileSize(uploadedSizeInBytes, 1)}</span>
                <Box component={'span'} color={'grey.600'} mx={0.5}>
                  |
                </Box>
                <span>{calculateFriendlyFileSize(totalSizeInBytes, 1)}</span>
              </>
            )}
          </Typography>
        )}
        {isCanceled && (
          <Typography variant={'body1'} whiteSpace={'nowrap'} flexShrink={0}>
            {isFailed ? 'Failed' : 'Canceled'}
          </Typography>
        )}
      </Box>
    </Box>
  )
}
