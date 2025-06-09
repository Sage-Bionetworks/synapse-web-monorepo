import { useGetFileBatch } from '@/synapse-queries/file/useFiles'
import { Box, Button, ButtonProps } from '@mui/material'
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
  /* The fileHandleAssociations corresponding to an existing upload */
  fileHandleAssociations?: FileHandleAssociation[]
  isMultiFileUpload?: boolean
  onClearAttachment?: (fileHandleId: string) => void
  isLoading?: boolean
  uploadBtnVariant?: ButtonProps['variant']
}

export function UploadDocumentField(props: UploadDocumentFieldProps) {
  const {
    fileHandleAssociations = [],
    uploadCallback,
    id,
    documentName,
    isMultiFileUpload = false,
    onClearAttachment,
    isLoading = false,
    uploadBtnVariant = 'outlined',
  } = props
  const [isUploading, setIsUploading] = useState(false)

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
        onUploadStart={() => setIsUploading(true)}
        onComplete={res => {
          setIsUploading(false)
          uploadCallback(res)
        }}
        label={`Upload ${documentName}`}
        buttonProps={{
          disabled: isLoading,
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
    </Box>
  )
}
