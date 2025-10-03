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
   * */
  onConfirm: (
    dataFileHandleId: string,
    columnModels: ColumnModel[],
    csvTableDescriptor: CsvTableDescriptor,
  ) => void
  /** Whether the confirm action is pending */
  confirmIsPending?: boolean
  /** An optional error message to display */
  errorMessage?: string
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

  const onFileUploaded = useCallback((fileHandleId: string) => {
    setUploadedFileHandleId(fileHandleId)
    setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)
  }, [])

  const uploadRef = useRef<FileUploadHandle | null>(null)
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

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
          <CsvTableDescriptorForm ref={csvDescriptorFormRef} />
          <Button
            variant={'outlined'}
            startIcon={<RefreshTwoTone />}
            onClick={() => {
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
