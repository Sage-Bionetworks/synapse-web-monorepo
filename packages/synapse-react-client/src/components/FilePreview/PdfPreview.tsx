import SynapseClient from '@/synapse-client'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Alert } from '@mui/material'
import {
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useRef } from 'react'

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
  const frameEl = useRef(null)

  const friendlyFileSize = calculateFriendlyFileSize(fileHandle.contentSize)
  if (fileHandle.contentSize > maxPdfSize) {
    return (
      <Alert severity="error" sx={{ marginBottom: '20px' }}>
        The PDF preview was not shown because the file size ({friendlyFileSize})
        exceeds the maximum preview size ({friendlyMaxPdfSize})
      </Alert>
    )
  }
  const fhaUrl = SynapseClient.getPortalFileHandleServletUrl(
    fha.fileHandleId,
    fha.associateObjectId,
    fha.associateObjectType,
  )
  return (
    <>
      <iframe
        ref={frameEl}
        src={`${getEndpoint(
          BackendDestinationEnum.PORTAL_ENDPOINT,
        )}pdf.js/web/viewer.html?file=${encodeURIComponent(fhaUrl)}`}
        height="800px"
        style={{ border: 0, width: '100%' }}
      />
    </>
  )
}
