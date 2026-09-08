import MultiFileUploadProgress from '@/components/file/upload/MultiFileUploadProgress'
import UploadFilePanel from '@/components/file/upload/UploadFilePanel'
import { FileSelectionConstraints } from '@/components/file/upload/validateFileSelection'
import {
  UploaderState,
  useUploadFiles,
} from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import { noop } from 'lodash-es'
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle } from 'react'

export type BasicFileHandleUploadProps = {
  /**
   * Whether to allow uploading multiple files at once.
   */
  allowMultipleUpload: boolean
  /**
   * When `allowMultipleUpload` is true, whether to skip the Files/Folder menu and open the
   * (multi-select) file browser directly, rather than offering a folder upload option.
   * Has no effect when `allowMultipleUpload` is false.
   * @default false
   */
  disableFolderUpload?: boolean
  /**
   * Whether to disable "drag-and-drop to upload" functionality.
   * Currently, drag-and-drop cannot be enabled.
   */
  disableDragAndDrop: true
  /** Callback that is invoked when the state of the uploader changes */
  onStateChange?: (state: UploaderState) => void
  /** Callback that is invoked when component is ready to upload */
  onUploadReady?: () => void
  /** Callback that is invoked when an individual upload is complete */
  onFileUploadComplete?: (fileHandleId: string, file: File) => void
  /**
   * If provided, files whose type is not included in this list are rejected before upload.
   */
  acceptedContentTypes?: FileSelectionConstraints['acceptedContentTypes']
  /**
   * If provided, files larger than this are rejected before upload.
   */
  maxFileSizeBytes?: FileSelectionConstraints['maxFileSizeBytes']
  /**
   * If provided, a selection that would bring the total file count (see `currentFileCount`)
   * above this value is rejected before upload.
   */
  maxFiles?: FileSelectionConstraints['maxFiles']
  /**
   * The number of files already selected/uploaded prior to this selection. Used with `maxFiles`.
   * @default 0
   */
  currentFileCount?: FileSelectionConstraints['currentFileCount']
  /**
   * Invoked when a file selection is rejected due to `acceptedContentTypes`, `maxFileSizeBytes`,
   * or `maxFiles`. Invoked with `null` when a subsequent selection is valid, so the caller can
   * clear a previously displayed error.
   */
  onValidationError?: (message: string | null) => void
}

export type FileUploadHandle = {
  /** Programmatically add files to the upload (e.g. on drag & drop) */
  handleUploads: (fileList: ArrayLike<File>) => void
}

/**
 * BasicFileHandleUpload is a component that supports uploading a file to the default Synapse S3 bucket and creating a
 * file handle, which can only be accessed the system itself and the user uploading the file.
 */
export const BasicFileHandleUpload = forwardRef(function FileHandleUpload(
  props: BasicFileHandleUploadProps,
  ref: ForwardedRef<FileUploadHandle>,
) {
  const {
    allowMultipleUpload,
    disableFolderUpload = false,
    onStateChange = noop,
    onUploadReady = noop,
    onFileUploadComplete = noop,
    acceptedContentTypes,
    maxFileSizeBytes,
    maxFiles,
    currentFileCount,
    onValidationError,
  } = props

  const { startUpload, state, uploadProgress } = useUploadFiles({
    onUploadComplete: (preparedFile, fileHandleId) => {
      onFileUploadComplete(fileHandleId, preparedFile.file)
      return Promise.resolve()
    },
  })

  useEffect(() => {
    onStateChange(state)
  }, [state, onStateChange])

  useEffect(() => {
    onUploadReady()
  }, [onUploadReady])

  function uploadFileList(fileList: ArrayLike<File>) {
    const args = Array.from(fileList).map(file => {
      return {
        file,
      }
    })
    startUpload(...args)
  }

  useImperativeHandle(ref, () => ({
    handleUploads: uploadFileList,
  }))

  return (
    <div>
      <UploadFilePanel
        onUploadFileList={uploadFileList}
        allowMultipleFiles={allowMultipleUpload}
        hideFolderOption={disableFolderUpload}
        disableDragAndDrop={true}
        acceptedContentTypes={acceptedContentTypes}
        maxFileSizeBytes={maxFileSizeBytes}
        maxFiles={maxFiles}
        currentFileCount={currentFileCount}
        onValidationError={onValidationError}
      />
      <MultiFileUploadProgress
        uploaderState={state}
        uploadProgress={uploadProgress}
      />
    </div>
  )
})
