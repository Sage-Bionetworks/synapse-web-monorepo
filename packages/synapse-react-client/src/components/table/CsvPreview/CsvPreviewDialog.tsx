import { DialogBase } from '@/components/DialogBase'
import { ErrorBanner } from '@/components/index'
import CsvUploadPreviewContent from '@/components/table/CsvPreview/CsvUploadPreviewContent'
import useCsvUploadPreview, {
  CsvUploadPreviewStep,
} from '@/components/table/CsvPreview/useCsvUploadPreview'
import Button from '@mui/material/Button'
import {
  ColumnModel,
  CsvTableDescriptor,
} from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'

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

  const csvUploadPreviewWorkflow = useCsvUploadPreview()

  const handlePreviewConfirm = useCallback(() => {
    const suggestedColumns =
      csvUploadPreviewWorkflow.csvPreviewData?.suggestedColumns
    if (!suggestedColumns) {
      return
    }

    if (csvUploadPreviewWorkflow.uploadedFileHandleId != null) {
      onConfirm(
        csvUploadPreviewWorkflow.uploadedFileHandleId,
        suggestedColumns,
        csvUploadPreviewWorkflow.csvTableDescriptor,
      )
    }
  }, [
    csvUploadPreviewWorkflow.csvPreviewData,
    csvUploadPreviewWorkflow.uploadedFileHandleId,
    csvUploadPreviewWorkflow.csvTableDescriptor,
    onConfirm,
  ])

  return (
    <DialogBase
      maxWidth={'lg'}
      title={'Upload CSV'}
      onCancel={onClose}
      open={open}
      content={
        <>
          <CsvUploadPreviewContent workflow={csvUploadPreviewWorkflow} />
          {errorMessage && <ErrorBanner error={errorMessage} />}
        </>
      }
      actions={
        <>
          <Button
            variant={'outlined'}
            disabled={csvUploadPreviewWorkflow.isLoadingPreview}
            onClick={() => {
              onClose()
            }}
          >
            Cancel
          </Button>
          {csvUploadPreviewWorkflow.step ===
            CsvUploadPreviewStep.COLUMN_PREVIEW && (
            <Button
              disabled={csvUploadPreviewWorkflow.isLoadingPreview}
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
