import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import CsvPreviewWithOptions from '@/components/table/CsvPreview/CsvPreviewWithOptions'
import useCsvUploadPreview, {
  CsvUploadPreviewStep,
} from '@/components/table/CsvPreview/useCsvUploadPreview'
import Button from '@mui/material/Button'
import { useCallback, useRef } from 'react'
import useUploadCsvToTable from './useUploadCsvToTable'

export type UpdateTableWithCsvDialogProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** If provided, upload csv rows to existing table */
  tableId: string
  /** Invoked after all backend operations successfully complete */
  onSuccess?: () => void
}

export default function UpdateTableWithCsvDialog(
  props: UpdateTableWithCsvDialogProps,
) {
  const { open, onClose, tableId, onSuccess } = props

  const {
    step,
    csvTableDescriptor,
    setCsvTableDescriptor,
    uploadedFileHandleId,
    isLoadingPreview,
    setIsLoadingPreview,
    onFileUploaded,
  } = useCsvUploadPreview()

  const { mutate: uploadCsvToTable, isPending: isUploading } =
    useUploadCsvToTable({
      onSuccess() {
        onSuccess?.()
      },
      onError(error) {
        displayToast(error.message, 'danger')
      },
    })

  const uploadRef = useRef<FileUploadHandle | null>(null)

  const handleFinish = useCallback(() => {
    // table already exists; upload csv rows directly to table
    uploadCsvToTable({
      csvTableDescriptor,
      fileHandleId: uploadedFileHandleId!,
      tableId,
    })
  }, [tableId, csvTableDescriptor, uploadedFileHandleId, uploadCsvToTable])

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
              onClick={handleFinish}
              loading={isUploading}
            >
              Confirm
            </Button>
          )}
        </>
      }
    />
  )
}
