import React, { useRef } from 'react'
import { Alert } from '@mui/material'
import {
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'

export type PdfPreviewProps = {
  fileHandle: FileHandle
  fileHandleAssociation: FileHandleAssociation
}

export const maxPdfSize = Math.pow(1024, 2) * 30 // 30MB
const friendlyMaxPdfSize = calculateFriendlyFileSize(maxPdfSize) // 30MB

export const getFhaUrl = (fha: FileHandleAssociation) => {
  return `Portal/filehandleassociation?associatedObjectId=${fha.associateObjectId}&associatedObjectType=${fha.associateObjectType}&fileHandleId=${fha.fileHandleId}`
}

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
  const fhaUrl = getFhaUrl(fha)
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
