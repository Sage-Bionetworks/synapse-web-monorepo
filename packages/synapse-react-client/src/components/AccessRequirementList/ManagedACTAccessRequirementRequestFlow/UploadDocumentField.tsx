import { ProgressCallback } from '@/synapse-client/SynapseClient'
import { useGetFileBatch } from '@/synapse-queries/file/useFiles'
import { Box, Button, ButtonProps, LinearProgress } from '@mui/material'
import {
  FileHandleAssociation,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import DirectDownloadButton from '../../DirectDownloadButton'
import FileUpload from '../../FileUpload/FileUpload'
import IconSvg from '../../IconSvg/IconSvg'

type UploadDocumentFieldProps = {
  id: string
  documentName: string
  uploadCallback: (data: UploadCallbackResp) => void
  /** Invoked when an upload starts and when it finishes, whether or not it succeeded */
  onUploadingChange?: (isUploading: boolean) => void
  /* The fileHandleAssociations corresponding to an existing upload */
  fileHandleAssociations?: FileHandleAssociation[]
  isMultiFileUpload?: boolean
  onClearAttachment?: (fileHandleId: string) => void
  isLoading?: boolean
  disabled?: boolean
  uploadBtnVariant?: ButtonProps['variant']
}

export function UploadDocumentField(props: UploadDocumentFieldProps) {
  const {
    fileHandleAssociations = [],
    uploadCallback,
    onUploadingChange,
    id,
    documentName,
    isMultiFileUpload = false,
    onClearAttachment,
    isLoading = false,
    disabled = false,
    uploadBtnVariant = 'outlined',
  } = props
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState<ProgressCallback>()

  const { data: fileData } = useGetFileBatch(
    {
      includeFileHandles: true,
      includePreSignedURLs: false,
      includePreviewPreSignedURLs: false,
      requestedFiles: fileHandleAssociations,
    },
    { enabled: fileHandleAssociations.length > 0 },
  )

  return (
    <Box
      id={id}
      sx={{
        display: 'flex',
        flexDirection: isMultiFileUpload ? 'column' : 'row',
        alignItems: isMultiFileUpload ? 'flex-start' : 'center',
        justifyContent: 'flex-start',
        gap: 2,
        my: 2,
      }}
    >
      <FileUpload
        id={`${id}-upload`}
        onUploadStart={() => {
          setProgress(undefined)
          setIsUploading(true)
          onUploadingChange?.(true)
        }}
        onProgress={setProgress}
        onComplete={res => {
          setIsUploading(false)
          onUploadingChange?.(false)
          uploadCallback(res)
        }}
        label={`Upload ${documentName}`}
        buttonProps={{
          // One upload at a time, so that the file uploaded last is the one that is kept
          disabled: isLoading || disabled || isUploading,
          variant: uploadBtnVariant,
          endIcon: <IconSvg icon={'upload'} wrap={false} />,
        }}
      />
      {fileHandleAssociations.map((fha, index) => {
        const fileHandle = fileData?.requestedFiles.find(
          result => result.fileHandleId === fha.fileHandleId,
        )?.fileHandle
        return (
          <Box key={fha.fileHandleId}>
            <DirectDownloadButton
              key={index}
              id={`${id}-download-${index}`}
              variant={'text'}
              endIcon={<IconSvg icon={'download'} wrap={false} />}
              color={'primary'}
              fileHandleAssociation={fha}
              fileName={fileHandle?.fileName}
              sx={{
                /* Do not apply text-transform because the text is a raw filename */
                textTransform: 'none',
              }}
            />
            {onClearAttachment && (
              <Button
                className={'clear-x'}
                aria-label="Remove file"
                variant={'text'}
                onClick={() => onClearAttachment(fha.fileHandleId)}
              >
                <IconSvg icon="clear" />
              </Button>
            )}
          </Box>
        )
      })}
      {isUploading && (
        <Button
          disabled={true}
          variant={'text'}
          endIcon={<IconSvg icon={'download'} wrap={false} />}
        >
          Uploading...
        </Button>
      )}
      {isUploading && progress && progress.total > 0 && (
        <LinearProgress
          variant="determinate"
          value={(100 * progress.value) / progress.total}
          aria-label="Upload progress"
          sx={{ width: 160 }}
        />
      )}
    </Box>
  )
}
