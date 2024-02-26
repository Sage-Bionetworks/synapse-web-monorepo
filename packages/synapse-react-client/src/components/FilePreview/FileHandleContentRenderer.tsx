import React from 'react'
import { useGetPresignedUrlContent } from '../../synapse-queries/file/useFiles'
import { MB } from '../../utils/SynapseConstants'
import {
  FileHandle,
  FileHandleAssociation,
  BatchFileRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import HtmlPreview from './HtmlPreview/HtmlPreview'
import { PreviewRendererType } from './PreviewRendererType'

const MAX_FILE_SIZE = 30 * MB

export type FileHandleContentRendererProps = {
  /** The file handle whose contents should be downloaded and rendered */
  fileHandle: FileHandle
  /** The association between the file handle and an object which will give the user permission to access the file data */
  fileHandleAssociation: FileHandleAssociation
  /** Informs how to render the file data */
  previewType: PreviewRendererType
}

/**
 * Fetches the content for and renders the contents of a file handle.
 * @param props
 * @returns
 */
export default function FileHandleContentRenderer(
  props: FileHandleContentRendererProps,
) {
  const { fileHandle, fileHandleAssociation, previewType } = props

  const batchFileRequest: BatchFileRequest = {
    requestedFiles: [fileHandleAssociation],
    includePreSignedURLs: true,
    includeFileHandles: false,
    includePreviewPreSignedURLs: false,
  }

  const { data: content, isLoading } = useGetPresignedUrlContent(
    fileHandle,
    batchFileRequest,
    MAX_FILE_SIZE,
    { throwOnError: true },
  )

  if (isLoading) {
    return <SynapseSpinner />
  }
  if (previewType === PreviewRendererType.HTML) {
    return (
      <HtmlPreview rawHtml={content!} createdByUserId={fileHandle.createdBy} />
    )
  } else {
    if (previewType !== PreviewRendererType.NONE) {
      console.warn(
        `Rendering a preview of type ${previewType} is not supported in Portals`,
      )
    }
    return <></>
  }
}
