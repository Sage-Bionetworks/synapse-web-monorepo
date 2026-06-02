import { DialogBase } from '@/components/DialogBase'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import useCsvUploadPreview, {
  CsvUploadPreviewStep,
} from '@/components/table/CsvPreview/useCsvUploadPreview'
import Button from '@mui/material/Button'
import { useCallback } from 'react'
import useUploadCsvToExistingTable from './useUploadCsvToExistingTable'
import CsvUploadPreviewContent from './CsvUploadPreviewContent'

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

/**
 * A dialog used to upload CSV data to an existing Synapse Table entity.
 * It handles a single-phase workflow:
 * 1. CSV Upload & Preview: Displays data preview and applies the rows directly
 * to the target table upon confirmation.
 */
export default function UpdateTableWithCsvDialog(
  props: UpdateTableWithCsvDialogProps,
) {
  const { open, onClose, tableId, onSuccess } = props
  const csvUploadWorkflow = useCsvUploadPreview()

  const { mutate: uploadCsvToExistingTable, isPending: isUploading } =
    useUploadCsvToExistingTable({
      onSuccess() {
        onSuccess?.()
      },
      onError(error) {
        displayToast(error.message, 'danger')
      },
    })

  const handleFinish = useCallback(() => {
    // table already exists; upload csv rows directly to table
    uploadCsvToExistingTable({
      tableId,
      csvTableDescriptor: csvUploadWorkflow.csvTableDescriptor,
      fileHandleId: csvUploadWorkflow.uploadedFileHandleId!,
    })
  }, [
    uploadCsvToExistingTable,
    tableId,
    csvUploadWorkflow.csvTableDescriptor,
    csvUploadWorkflow.uploadedFileHandleId,
  ])

  return (
    <DialogBase
      maxWidth={'lg'}
      title={'Upload CSV'}
      onCancel={onClose}
      open={open}
      content={<CsvUploadPreviewContent workflow={csvUploadWorkflow} />}
      actions={
        <>
          <Button
            variant={'outlined'}
            disabled={csvUploadWorkflow.isLoadingPreview}
            onClick={() => {
              onClose()
            }}
          >
            Cancel
          </Button>
          {csvUploadWorkflow.step === CsvUploadPreviewStep.COLUMN_PREVIEW && (
            <Button
              disabled={csvUploadWorkflow.isLoadingPreview}
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
