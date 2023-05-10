import {
  FileHandleAssociation,
  UploadCallbackResp,
} from '../../../utils/synapseTypes'
import { useGetFileBatch } from '../../../utils/hooks/SynapseAPI/file/useFiles'
import { Box, Button } from '@mui/material'
import FileUpload from '../../FileUpload'
import IconSvg from '../../IconSvg'
import DirectDownloadButton from '../../DirectDownloadButton'
import * as React from 'react'

type UploadDocumentFieldProps = {
  id: string
  documentName: string
  uploadCallback: (data: UploadCallbackResp) => void
  /* The fileHandleAssociations corresponding to an existing upload */
  fileHandleAssociations?: FileHandleAssociation[]
  isMultiFileUpload?: boolean
  onClearAttachment?: (fileHandleId: string) => void
}

export function UploadDocumentField(props: UploadDocumentFieldProps) {
  const {
    fileHandleAssociations = [],
    uploadCallback,
    id,
    documentName,
    isMultiFileUpload = false,
    onClearAttachment,
  } = props
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
      display={'flex'}
      flexDirection={isMultiFileUpload ? 'column' : 'row'}
      alignItems={isMultiFileUpload ? 'flex-start' : 'center'}
      justifyContent={'flex-start'}
      gap={2}
      sx={{ my: 2 }}
    >
      <FileUpload
        id={`${id}-upload`}
        uploadCallback={uploadCallback}
        label={`Upload ${documentName}`}
        buttonProps={{
          variant: 'outlined',
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
    </Box>
  )
}
