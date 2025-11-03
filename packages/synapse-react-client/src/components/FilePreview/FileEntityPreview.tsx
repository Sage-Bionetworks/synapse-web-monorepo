import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  implementsCloudProviderFileHandleInterface,
  isFileEntity,
} from '@/utils/types/IsType'
import { Alert } from '@mui/material'
import {
  EntityBundle,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { SignInPrompt } from '../error/ErrorBanner'
import FileHandleContentRenderer from './FileHandleContentRenderer'
import { PreviewRendererType } from './PreviewRendererType'
import {
  getOriginalFileHandleRenderer,
  getPreviewFileHandleRenderer,
} from './PreviewUtils'

export type FileEntityPreviewProps = {
  /** An entity bundle containing a FileEntity, and its fileHandles */
  bundle: EntityBundle
}

/**
 * Given an entity bundle that contains a FileEntity, render a preview of the file. The rendered preview will be determined based on the
 * content type and file name of the file handle(s) associated with the FileEntity.
 * @param props
 */
export default function FileEntityPreview(props: FileEntityPreviewProps) {
  const { bundle } = props
  const { isAuthenticated } = useSynapseContext()

  if (!isFileEntity(bundle.entity)) {
    throw new Error(`Entity ${bundle.entity.id!} is not a FileEntity`)
  }

  /**
   * The dataFileHandle and the previewFileHandle may not have the same contentType.
   *
   * For example, ZIP files are assigned a CSV preview listing the ZIP file contents.
   */
  const dataFileHandleId = bundle.entity.dataFileHandleId
  const dataFileHandle = bundle.fileHandles.find(
    fh => fh.id === dataFileHandleId,
  )

  if (!dataFileHandle && !isAuthenticated) {
    // We may be previewing a file handle that the anonymous user cannot see. Prompt the user to log in.
    return (
      <Alert severity={'error'}>
        <SignInPrompt />
      </Alert>
    )
  }

  // If we can render the original file, do so:
  if (dataFileHandle) {
    const previewType = getOriginalFileHandleRenderer(dataFileHandle)
    if (previewType !== PreviewRendererType.NONE) {
      return (
        <FileHandleContentRenderer
          fileHandle={dataFileHandle}
          fileHandleAssociation={{
            fileHandleId: dataFileHandleId,
            associateObjectId: bundle.entity.id!,
            associateObjectType: FileHandleAssociateType.FileEntity,
          }}
          previewType={previewType}
        />
      )
    }
  }

  // Otherwise, see if we can render the preview file handle that Synapse created
  const previewFileHandle = bundle.fileHandles.find(
    fh => implementsCloudProviderFileHandleInterface(fh) && fh.isPreview,
  )

  if (previewFileHandle && dataFileHandle) {
    const previewType = getPreviewFileHandleRenderer(
      previewFileHandle,
      dataFileHandle,
    )
    if (previewType !== PreviewRendererType.NONE) {
      return (
        <FileHandleContentRenderer
          fileHandle={previewFileHandle}
          fileHandleAssociation={{
            fileHandleId: previewFileHandle.id,
            associateObjectId: bundle.entity.id!,
            associateObjectType: FileHandleAssociateType.FileEntity,
          }}
          previewType={previewType}
        />
      )
    }
  }

  // We can't render the file, so throw an Error so the ErrorBoundary will show an alert.
  throw new Error(`Could not render a preview for entity: ${bundle.entity.id!}`)
}
