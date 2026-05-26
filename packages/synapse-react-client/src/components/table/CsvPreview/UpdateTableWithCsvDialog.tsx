import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import CsvPreviewWithOptions from '@/components/table/CsvPreview/CsvPreviewWithOptions'
import Button from '@mui/material/Button'
import { CsvTableDescriptor } from '@sage-bionetworks/synapse-client'
import { useCallback, useEffect, useRef, useState } from 'react'
import useUploadCsvToTable from './useUploadCsvToTable'

enum UpdateTableWithCsvDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
}

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
  const [step, setStep] = useState(UpdateTableWithCsvDialogStep.UPLOAD_CSV)
  const [csvTableDescriptor, setCsvTableDescriptor] =
    useState<CsvTableDescriptor>({
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    })
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)

  const [uploadedFileHandleId, setUploadedFileHandleId] = useState<
    string | null
  >(null)

  const { mutate: uploadCsvToTable, isPending: isUploading } =
    useUploadCsvToTable({
      onSuccess() {
        onSuccess?.()
      },
      onError(error) {
        displayToast(error.message, 'danger')
      },
    })

  // Reset local state when dialog is closed
  useEffect(() => {
    if (!open) {
      setStep(UpdateTableWithCsvDialogStep.UPLOAD_CSV)
      setUploadedFileHandleId(null)
      setCsvTableDescriptor({
        separator: ',',
        quoteCharacter: '"',
        escapeCharacter: '\\',
        lineEnd: '\n',
        isFirstLineHeader: true,
      })
    }
  }, [open])

  const onFileUploaded = useCallback((fileHandleId: string) => {
    setUploadedFileHandleId(fileHandleId)
    setStep(UpdateTableWithCsvDialogStep.COLUMN_PREVIEW)
  }, [])

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
          {step === UpdateTableWithCsvDialogStep.UPLOAD_CSV &&
            uploadStepContent}
          {step === UpdateTableWithCsvDialogStep.COLUMN_PREVIEW &&
            previewStepContent}
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
          {step === UpdateTableWithCsvDialogStep.COLUMN_PREVIEW && (
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
