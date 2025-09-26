import MultiFileUploadProgress from '@/components/file/upload/MultiFileUploadProgress'
import UploadFilePanel from '@/components/file/upload/UploadFilePanel'
import {
  UploaderState,
  useUploadFiles,
} from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import { noop } from 'lodash-es'
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle } from 'react'

export type BasicFileHandleUploadProps = {
  allowMultipleUpload: boolean
  /** Callback that is invoked when the state of the uploader changes */
  onStateChange?: (state: UploaderState) => void
  /** Callback that is invoked when component is ready to upload */
  onUploadReady?: () => void
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
    onStateChange = noop,
    onUploadReady = noop,
  } = props

  const { startUpload, state, uploadProgress } = useUploadFiles()

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
      />
      <MultiFileUploadProgress
        uploaderState={state}
        uploadProgress={uploadProgress}
      />
    </div>
  )
})
