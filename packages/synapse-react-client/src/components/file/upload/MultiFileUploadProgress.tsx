import {
  FILE_UPLOAD_PROGRESS_COMPONENT_HEIGHT_PX,
  FileUploadProgress,
} from '@/components/EntityUpload/FileUploadProgress'
import getActiveUploadCount from '@/utils/hooks/useUploadFileEntity/getActiveUploadCount'
import { EntityUploaderState } from '@/utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { UploadItem } from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import pluralize from 'pluralize'
import { FixedSizeList } from 'react-window'

// This padding value will be used to manipulate the appearance of a virtualized list of FileUploadProgress components
const UPLOAD_CONTAINER_PADDING_X_PX = 24

type UploadProgressProps = {
  /**
   * The current state of the uploader.
   */
  uploaderState: EntityUploaderState
  /**
   * The progress of each file being uploaded, including status and callbacks for user actions.
   */
  uploadProgress: UploadItem[]
}

export default function MultiFileUploadProgress(props: UploadProgressProps) {
  const { uploaderState, uploadProgress } = props

  if (uploadProgress.length === 0) {
    return null
  }

  const activeUploadCount = getActiveUploadCount(
    uploadProgress.map(up => up.status),
  )
  const numberOfItemsCompleted = uploadProgress.filter(
    p => p.status === 'COMPLETE',
  ).length

  return (
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
        {uploaderState === 'WAITING' && <>Uploads</>}
        {uploaderState === 'UPLOADING' && (
          <>
            Uploading {activeUploadCount} {pluralize('Item', activeUploadCount)}
          </>
        )}
        {uploaderState === 'COMPLETE' && (
          <>
            Uploaded {numberOfItemsCompleted}{' '}
            {pluralize('Item', numberOfItemsCompleted)}
          </>
        )}
      </Typography>
      <Box
        sx={{
          // Add negative margin equivalent to the container's padding
          // This will put the scrollbar on the right edge of the container
          mx: `${UPLOAD_CONTAINER_PADDING_X_PX * -1}px`,

          '& > div > div > :not(:last-child)': {
            borderBottom: 'solid 1px #EAECEE',
          },
        }}
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
              <div
                key={
                  // File path + name should be unique
                  fileNameWithPath
                }
                style={{
                  ...style,
                  // Use same value as the outer container's padding to determine the width,
                  // ensuring the items in the list appear to have the same padding
                  width: `calc(100% - ${UPLOAD_CONTAINER_PADDING_X_PX * 2}px)`,
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
              </div>
            )
          }}
        </FixedSizeList>
      </Box>
    </Paper>
  )
}
