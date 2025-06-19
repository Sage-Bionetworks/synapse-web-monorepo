import { getFiles } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import {
  BatchFileRequest,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

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
    const file = await getFiles(batchFileRequest, accessToken)
    const preSignedURL = file.requestedFiles[0].preSignedURL
    if (!preSignedURL) {
      console.log('Fail to get file download link')
    } else {
      window.open(preSignedURL)
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
