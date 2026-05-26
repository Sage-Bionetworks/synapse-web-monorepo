import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { ErrorBanner } from '@/components/index'
import CsvPreviewWithOptions from '@/components/table/CsvPreview/CsvPreviewWithOptions'
import Button from '@mui/material/Button'
import {
  ColumnModel,
  CsvTableDescriptor,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useEffect, useRef, useState } from 'react'

enum CsvPreviewDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
}

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
  const [step, setStep] = useState(CsvPreviewDialogStep.UPLOAD_CSV)
  const [csvTableDescriptor, setCsvTableDescriptor] =
    useState<CsvTableDescriptor>({
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    })
  const [csvPreviewData, setCsvPreviewData] =
    useState<UploadToTablePreviewResult | null>(null)
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)

  const [uploadedFileHandleId, setUploadedFileHandleId] = useState<
    string | null
  >(null)

  // Reset local state when dialog is closed
  useEffect(() => {
    if (!open) {
      setStep(CsvPreviewDialogStep.UPLOAD_CSV)
      setUploadedFileHandleId(null)
      setCsvPreviewData(null)
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
    setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)
  }, [])

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
          {step === CsvPreviewDialogStep.UPLOAD_CSV && uploadStepContent}
          {step === CsvPreviewDialogStep.COLUMN_PREVIEW && previewStepContent}
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
          {step === CsvPreviewDialogStep.COLUMN_PREVIEW && (
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
