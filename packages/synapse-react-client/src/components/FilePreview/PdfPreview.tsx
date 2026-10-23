import { useGetStablePresignedUrl } from '@/synapse-queries/file/useFiles'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Alert, Skeleton } from '@mui/material'
import {
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

export type PdfPreviewProps = {
  fileHandle: FileHandle
  fileHandleAssociation: FileHandleAssociation
}

export const maxPdfSize = Math.pow(1024, 2) * 30 // 30MB
const friendlyMaxPdfSize = calculateFriendlyFileSize(maxPdfSize) // 30MB

/**
 * Renders a PDF file handle in an iframe.
 * @param props
 * @returns
 */
export default function PdfPreview(props: PdfPreviewProps) {
  const { fileHandle, fileHandleAssociation } = props

  const exceedsMaxSize = fileHandle.contentSize > maxPdfSize

  // The presigned URL is fetched into a blob rather than used as the iframe src directly: Synapse signs the URL with
  // `response-content-disposition=attachment`, which would make the browser download the file instead of rendering it.
  const stablePresignedUrl = useGetStablePresignedUrl(
    fileHandleAssociation,
    false,
    { enabled: !exceedsMaxSize },
  )
  const blobUrl = stablePresignedUrl?.dataUrl
  const blobError = stablePresignedUrl?.queryResult.error

  const friendlyFileSize = calculateFriendlyFileSize(fileHandle.contentSize)
  if (exceedsMaxSize) {
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
