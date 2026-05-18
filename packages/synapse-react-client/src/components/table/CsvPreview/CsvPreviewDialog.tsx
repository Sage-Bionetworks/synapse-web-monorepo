import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { ErrorBanner } from '@/components/index'
import CsvPreview from '@/components/table/CsvPreview/CsvPreview'
import CsvTableDescriptorForm, {
  CsvTableDescriptorFormHandle,
} from '@/components/table/CsvTableDescriptorForm/CsvTableDescriptorForm'
import { RefreshTwoTone } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {
  ColumnModel,
  CsvTableDescriptor,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useRef, useState } from 'react'

enum CsvPreviewDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
}

export type CsvPreviewDialogProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** Callback when the user confirms the column models
   * @param dataFileHandleId - The file handle ID of the uploaded CSV
   * @param columnModels - The confirmed column models
   * @param csvTableDescriptor - The CSV parsing options applied to the preview
   * @param fileName - The name of the uploaded file
   * */
  onConfirm: (
    dataFileHandleId: string,
    columnModels: ColumnModel[],
    csvTableDescriptor: CsvTableDescriptor,
    fileName: string,
  ) => void
  /** Whether the confirm action is pending */
  confirmIsPending?: boolean
  /** An optional error message to display */
  errorMessage?: string
}

const DEFAULT_CSV_TABLE_DESCRIPTOR: CsvTableDescriptor = {
  separator: ',',
  quoteCharacter: '"',
  escapeCharacter: '\\',
  lineEnd: '\n',
  isFirstLineHeader: true,
}

/**
 * Returns the column separator to use for a CSV preview based on the uploaded
 * file's MIME type and name. Tab-separated values are detected by content type
 * (`text/tab-separated-values`) or by `.tsv`/`.tab` file extensions; everything
 * else falls back to comma.
 */
export function getInitialSeparatorForFile(file: File): string {
  if (file.type.toLowerCase() === 'text/tab-separated-values') return '\t'
  const lowerName = file.name.toLowerCase().trim()
  if (lowerName.endsWith('.tsv') || lowerName.endsWith('.tab')) return '\t'
  return ','
}

export default function CsvPreviewDialog(props: CsvPreviewDialogProps) {
  const { open, onClose, onConfirm, confirmIsPending, errorMessage } = props
  const [step, setStep] = useState(CsvPreviewDialogStep.UPLOAD_CSV)
  const [csvTableDescriptor, setCsvTableDescriptor] =
    useState<CsvTableDescriptor>(DEFAULT_CSV_TABLE_DESCRIPTOR)
  const [csvPreviewData, setCsvPreviewData] =
    useState<UploadToTablePreviewResult | null>(null)
  const [isLoadingPreview, setIsLoadingPreview] = useState(false)

  const [uploadedFileHandleId, setUploadedFileHandleId] = useState<
    string | null
  >(null)
  const [uploadedFileName, setUploadedFileName] = useState<string>('')

  const onFileUploaded = useCallback((fileHandleId: string, file: File) => {
    setUploadedFileHandleId(fileHandleId)
    setUploadedFileName(file.name)
    setCsvTableDescriptor({
      ...DEFAULT_CSV_TABLE_DESCRIPTOR,
      separator: getInitialSeparatorForFile(file),
    })
    setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)
  }, [])

  const uploadRef = useRef<FileUploadHandle | null>(null)
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

  const uploadStepContent = (
    <BasicFileHandleUpload
      ref={uploadRef}
      allowMultipleUpload={false}
      onFileUploadComplete={(fileHandleId, file) => {
        onFileUploaded(fileHandleId, file)
      }}
      disableDragAndDrop={true}
    />
  )

  const previewStepContent = (
    <Stack spacing={2}>
      {uploadedFileHandleId && (
        <CsvPreview
          fileHandleId={uploadedFileHandleId}
          csvTableDescriptor={csvTableDescriptor}
          onCsvPreviewDataChange={setCsvPreviewData}
          onIsLoadingChange={setIsLoadingPreview}
        />
      )}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={'headline3'}>Show Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CsvTableDescriptorForm
            defaultValue={csvTableDescriptor}
            ref={csvDescriptorFormRef}
          />
          <Button
            variant={'outlined'}
            startIcon={<RefreshTwoTone />}
            sx={{ mt: 2 }}
            onClick={() => {
              // Get the state from the form and update local state, which will re-render the preview
              if (csvDescriptorFormRef.current) {
                setCsvTableDescriptor(
                  csvDescriptorFormRef.current.getFormData(),
                )
              }
            }}
          >
            Refresh Preview
          </Button>
        </AccordionDetails>
      </Accordion>
    </Stack>
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
              onClick={() => {
                onConfirm(
                  uploadedFileHandleId!,
                  csvPreviewData!.suggestedColumns!,
                  csvTableDescriptor,
                  uploadedFileName,
                )
              }}
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
