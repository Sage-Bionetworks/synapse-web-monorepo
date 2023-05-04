import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { BatchFileRequest, FileHandleAssociation } from '../utils/synapseTypes'
import { getFiles } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'

export type DirectFileDownloadButtonProps = Omit<ButtonProps, 'onClick'> & {
  fileHandleAssociation: FileHandleAssociation
  fileName: string | undefined
}

function DirectDownloadButton(props: DirectFileDownloadButtonProps) {
  const { fileHandleAssociation, fileName, ...buttonProps } = props
  const { accessToken } = useSynapseContext()

  const getDownloadLink = async () => {
    if (!fileHandleAssociation.fileHandleId || !accessToken) return

    const batchFileRequest: BatchFileRequest = {
      requestedFiles: [fileHandleAssociation],
      includePreSignedURLs: true,
      includeFileHandles: false,
      includePreviewPreSignedURLs: false,
    }
    try {
      const file = await getFiles(batchFileRequest, accessToken)
      const preSignedURL = file.requestedFiles[0].preSignedURL
      if (!preSignedURL) {
        console.log('Fail to get file download link')
      } else {
        window.open(preSignedURL)
      }
    } catch (e) {
      console.log('Fail to get file download link', e)
    }
  }

  return (
    <Button
      {...buttonProps}
      onClick={() => {
        getDownloadLink()
      }}
    >
      {fileName}
    </Button>
  )
}

export default DirectDownloadButton
