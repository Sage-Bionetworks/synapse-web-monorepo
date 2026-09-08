import SynapseClient from '@/synapse-client'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Alert, Skeleton } from '@mui/material'
import {
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useFetchBlobUrl } from '@/utils/hooks/useFetchBlobUrl'

export type PdfPreviewProps = {
  fileHandle: FileHandle
  fileHandleAssociation: FileHandleAssociation
}

export const maxPdfSize = Math.pow(1024, 2) * 30 // 30MB
const friendlyMaxPdfSize = calculateFriendlyFileSize(maxPdfSize) // 30MB

/**
 * Renders raw HTML. Uses file handle data to determine if the content should be sanitized.
 * @param props
 * @returns
 */
export default function PdfPreview(props: PdfPreviewProps) {
  const { fileHandle, fileHandleAssociation: fha } = props

  const { blobUrl, error: blobError } = useFetchBlobUrl(
    fileHandle.contentSize > maxPdfSize
      ? undefined
      : SynapseClient.getPortalFileHandleServletUrl(
          fha.fileHandleId,
          fha.associateObjectId,
          fha.associateObjectType,
        ),
  )

  const friendlyFileSize = calculateFriendlyFileSize(fileHandle.contentSize)
  if (fileHandle.contentSize > maxPdfSize) {
    return (
      <Alert severity="error" sx={{ marginBottom: '20px' }}>
        The PDF preview was not shown because the file size ({friendlyFileSize})
        exceeds the maximum preview size ({friendlyMaxPdfSize})
      </Alert>
    )
  }

  if (blobError) {
    return (
      <Alert severity="error" sx={{ marginBottom: '20px' }}>
        The PDF preview could not be loaded: {blobError.message}
      </Alert>
    )
  }

  if (!blobUrl) {
    return <Skeleton variant="rectangular" width="100%" height="800px" />
  }

  return (
    <iframe src={blobUrl} height="800px" style={{ border: 0, width: '100%' }} />
  )
}
