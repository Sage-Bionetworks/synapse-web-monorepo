import { useGetPresignedUrlContent } from '@/synapse-queries/file/useFiles'
import { MB } from '@/utils/SynapseConstants'
import {
  BatchFileRequest,
  FileHandle,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import HtmlPreview from './HtmlPreview/HtmlPreview'
import PdfPreview from './PdfPreview'
import { PreviewRendererType } from './PreviewRendererType'

const MAX_FILE_SIZE = 30 * MB

type FileHandleContentProps = {
  /** The file handle whose contents should be downloaded and rendered */
  fileHandle: FileHandle
  /** The association between the file handle and an object which will give the user permission to access the file data */
  fileHandleAssociation: FileHandleAssociation
}

/**
 * Downloads a file handle's contents as text and renders it as sanitized HTML.
 */
function HtmlPreviewLoader(props: FileHandleContentProps) {
  const { fileHandle, fileHandleAssociation } = props

  const batchFileRequest: BatchFileRequest = useMemo(
    () => ({
      requestedFiles: [fileHandleAssociation],
      includePreSignedURLs: true,
      includeFileHandles: false,
      includePreviewPreSignedURLs: false,
    }),
    [fileHandleAssociation],
  )

  const { data: content, isLoading } = useGetPresignedUrlContent(
    fileHandle,
    batchFileRequest,
    MAX_FILE_SIZE,
    { throwOnError: true },
  )

  if (isLoading) {
    return <SynapseSpinner />
  }

  return (
    <HtmlPreview rawHtml={content!} createdByUserId={fileHandle.createdBy} />
  )
}

export type FileHandleContentRendererProps = FileHandleContentProps & {
  /** Informs how to render the file data */
  previewType: PreviewRendererType
}

/**
 * Renders the contents of a file handle. Each supported preview type is responsible for retrieving the file data in
 * whichever form it needs.
 * @param props
 * @returns
 */
export default function FileHandleContentRenderer(
  props: FileHandleContentRendererProps,
) {
  const { fileHandle, fileHandleAssociation, previewType } = props

  switch (previewType) {
    case PreviewRendererType.HTML:
      return (
        <HtmlPreviewLoader
          fileHandle={fileHandle}
          fileHandleAssociation={fileHandleAssociation}
        />
      )
    case PreviewRendererType.PDF:
      return (
        <PdfPreview
          fileHandle={fileHandle}
          fileHandleAssociation={fileHandleAssociation}
        />
      )
    case PreviewRendererType.NONE:
      return <></>
    default:
      console.warn(
        `Rendering a preview of type ${previewType} is not supported in Portals`,
      )
      return <></>
  }
}
