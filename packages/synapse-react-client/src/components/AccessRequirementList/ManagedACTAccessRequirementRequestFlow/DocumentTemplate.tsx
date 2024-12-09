import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
import DirectDownloadButton from '../../DirectDownloadButton'
import { FileHandleAssociation } from '@sage-bionetworks/synapse-types'
import IconSvg from '../../IconSvg/IconSvg'
import { useGetFileBatch } from '../../../synapse-queries/file/useFiles'

export type DownloadDocumentTemplateProps = {
  title: ReactNode
  description: ReactNode
  fileHandleAssociation: FileHandleAssociation
  downloadButtonText: string
}

export default function DocumentTemplate(props: DownloadDocumentTemplateProps) {
  const { title, description, fileHandleAssociation, downloadButtonText } =
    props

  // get batch of files
  const { data: fileData } = useGetFileBatch(
    {
      requestedFiles: [fileHandleAssociation],
      includeFileHandles: true,
      includePreSignedURLs: false,
      includePreviewPreSignedURLs: false,
    },
    {
      enabled: !!fileHandleAssociation,
    },
  )

  const fileName = fileData?.requestedFiles[0]?.fileHandle?.fileName

  return (
    <>
      <Typography variant={'headline3'} sx={{ mt: 4, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant={'body1'} sx={{ my: 2 }}>
        {description}
      </Typography>
      <Typography variant={'body1'}>Download this file:</Typography>
      <Typography variant={'smallText1'} sx={{ my: 0.5 }}>
        <strong>{fileName}</strong>
      </Typography>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-start'}
        gap={2}
        sx={{
          backgroundColor: 'tertiary.100',
          p: 2.5,
          my: 2,
          flexWrap: { xs: 'nowrap', md: 'wrap-reverse' },
        }}
      >
        <DirectDownloadButton
          variant={'outlined'}
          fileHandleAssociation={fileHandleAssociation}
          fileName={downloadButtonText}
          endIcon={<IconSvg icon={'download'} wrap={false} />}
          sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
        />
        <Typography variant={'body1'}>
          You must fill out and upload this exact version of the template.{' '}
          <strong>No other versions will be accepted.</strong>
        </Typography>
      </Box>
    </>
  )
}
