import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { ErrorBanner } from '@/components/index'
import CsvPreviewWithOptions from '@/components/table/CsvPreview/CsvPreviewWithOptions'
import useCsvUploadPreview, {
  CsvUploadPreviewStep,
} from '@/components/table/CsvPreview/useCsvUploadPreview'
import Button from '@mui/material/Button'
import {
  ColumnModel,
  CsvTableDescriptor,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useRef } from 'react'

export type CsvPreviewDialogProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** Whether the confirm action is pending */
  confirmIsPending?: boolean
  /** An optional error message to display */
  errorMessage?: string
  /** Callback when the user confirms the column models
   * @param dataFileHandleId - The file handle ID of the uploaded CSV
   * @param columnModels - The confirmed column models
   */
  onConfirm: (
    dataFileHandleId: string,
    columnModels: ColumnModel[],
    csvTableDescriptor: CsvTableDescriptor,
  ) => void
}

export default function CsvPreviewDialog(props: CsvPreviewDialogProps) {
  const { open, onClose, onConfirm, confirmIsPending, errorMessage } = props

  const {
    step,
    csvTableDescriptor,
    setCsvTableDescriptor,
    uploadedFileHandleId,
    csvPreviewData,
    setCsvPreviewData,
    isLoadingPreview,
    setIsLoadingPreview,
    onFileUploaded,
  } = useCsvUploadPreview()

  const uploadRef = useRef<FileUploadHandle | null>(null)

  const handlePreviewConfirm = useCallback(() => {
    const suggestedColumns = csvPreviewData?.suggestedColumns
    if (!suggestedColumns) {
      return
    }

    if (uploadedFileHandleId != null) {
      onConfirm(uploadedFileHandleId, suggestedColumns, csvTableDescriptor)
    }
  }, [csvPreviewData, onConfirm, uploadedFileHandleId, csvTableDescriptor])

  const uploadStepContent = (
    <BasicFileHandleUpload
      ref={uploadRef}
      allowMultipleUpload={false}
      onFileUploadComplete={fileHandleId => {
        onFileUploaded(fileHandleId)
      }}
      disableDragAndDrop={true}
    />
  )

  const previewStepContent = (
    <CsvPreviewWithOptions
      fileHandleId={uploadedFileHandleId}
      csvTableDescriptor={csvTableDescriptor}
      onCsvTableDescriptorChange={setCsvTableDescriptor}
      onCsvPreviewDataChange={setCsvPreviewData}
      onIsLoadingChange={setIsLoadingPreview}
    />
  )

  return (
    <DialogBase
      maxWidth={'lg'}
      title={'Upload CSV'}
      onCancel={onClose}
      open={open}
      content={
        <>
          {step === CsvUploadPreviewStep.UPLOAD_CSV && uploadStepContent}
          {step === CsvUploadPreviewStep.COLUMN_PREVIEW && previewStepContent}
          {errorMessage && <ErrorBanner error={errorMessage} />}
        </>
      }
      actions={
        <>
          <Button
            variant={'outlined'}
            disabled={isLoadingPreview}
            onClick={() => {
              onClose()
            }}
          >
            Cancel
          </Button>
          {step === CsvUploadPreviewStep.COLUMN_PREVIEW && (
            <Button
              disabled={isLoadingPreview}
              variant={'contained'}
              onClick={handlePreviewConfirm}
              loading={confirmIsPending}
            >
              Confirm
            </Button>
          )}
        </>
      }
    />
  )
}
