import { useRef } from 'react'
import useCsvUploadPreview from './useCsvUploadPreview'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { CsvUploadPreviewStep } from '@/components/table/CsvPreview/useCsvUploadPreview'
import CsvPreviewWithOptions from './CsvPreviewWithOptions'

export type CsvUploadPreviewContentProps = {
  /**
   * Shared upload/preview workflow state and callbacks from useCsvUploadPreview.
   */
  workflow: ReturnType<typeof useCsvUploadPreview>
}

/**
 * Renders the active CSV upload workflow step: file upload first, then preview/options.
 */
export default function CsvUploadPreviewContent({
  workflow,
}: CsvUploadPreviewContentProps) {
  const {
    step,
    uploadedFileHandleId,
    onFileUploaded,
    csvTableDescriptor,
    setCsvTableDescriptor,
    setCsvPreviewData,
    setIsLoadingPreview,
  } = workflow

  const uploadRef = useRef<FileUploadHandle | null>(null)

  // Upload step
  if (step === CsvUploadPreviewStep.UPLOAD_CSV) {
    return (
      <BasicFileHandleUpload
        ref={uploadRef}
        allowMultipleUpload={false}
        onFileUploadComplete={onFileUploaded}
        disableDragAndDrop={true}
      />
    )
  }

  // Preview step
  return (
    <CsvPreviewWithOptions
      fileHandleId={uploadedFileHandleId}
      csvTableDescriptor={csvTableDescriptor}
      onCsvTableDescriptorChange={setCsvTableDescriptor}
      onCsvPreviewDataChange={setCsvPreviewData}
      onIsLoadingChange={setIsLoadingPreview}
    />
  )
}
