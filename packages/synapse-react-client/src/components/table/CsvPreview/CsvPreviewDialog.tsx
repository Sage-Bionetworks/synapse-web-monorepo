import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import CsvTableDescriptorForm, {
  CsvTableDescriptorFormHandle,
} from '@/components/table/CsvTableDescriptorForm/CsvTableDescriptorForm'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useGetCsvPreview } from '@/synapse-queries/table/useGetCsvPreview'
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
  TableRow,
} from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useCallback, useMemo, useRef, useState } from 'react'

function getPreviewColumns(columnModels: ColumnModel[]) {
  return columnModels.map((columnModel, index) => {
    return columnHelper.accessor(tr => tr.values![index], {
      id: `column-${index}`,
      header: props => (
        <ColumnHeader
          {...props}
          title={`${columnModel.name} (${columnModel.columnType})`}
        />
      ),
      enableColumnFilter: false,
      enableSorting: false,
    })
  })
}

enum CsvPreviewDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
}

export type CsvPreviewDialogProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** Callback when the user confirms the column models */
  onConfirm: (columnModels: ColumnModel[]) => void
}

const columnHelper = createColumnHelper<TableRow>()

export default function CsvPreviewDialog(props: CsvPreviewDialogProps) {
  const { open, onClose, onConfirm } = props
  const [step, setStep] = useState(CsvPreviewDialogStep.UPLOAD_CSV)
  const [csvTableDescriptor, setCsvTableDescriptor] =
    useState<CsvTableDescriptor>({
      separator: ',',
      quoteCharacter: '"',
      escapeCharacter: '\\',
      lineEnd: '\n',
      isFirstLineHeader: true,
    })

  const [uploadedFileHandleId, setUploadedFileHandleId] = useState<
    string | null
  >(null)

  const onFileUploaded = useCallback((fileHandleId: string) => {
    setUploadedFileHandleId(fileHandleId)
    setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)
  }, [])

  const uploadRef = useRef<FileUploadHandle | null>(null)
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

  const { data: csvPreviewData, isLoading } = useGetCsvPreview({
    concreteType:
      'org.sagebionetworks.repo.model.table.UploadToTablePreviewRequest',
    uploadFileHandleId: uploadedFileHandleId!,
    csvTableDescriptor: csvTableDescriptor,
  })

  const uploadStepContent = (
    <BasicFileHandleUpload
      ref={uploadRef}
      allowMultipleUpload={false}
      onFileUploadComplete={fileHandleId => {
        onFileUploaded(fileHandleId)
      }}
    />
  )

  const tableData = useMemo(
    () => csvPreviewData?.sampleRows ?? [],
    [csvPreviewData?.sampleRows],
  )

  const columns = useMemo(
    () => getPreviewColumns(csvPreviewData?.suggestedColumns ?? []),
    [csvPreviewData?.suggestedColumns],
  )

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    data: tableData,
    columns: columns,
  })

  const previewStepContent = (
    <Stack spacing={2}>
      {isLoading && <div>Loading preview...</div>}

      {!isLoading && csvPreviewData && table && (
        <>
          <Typography variant={'body1'}>
            Scanned {csvPreviewData?.rowsScanned?.toLocaleString()} rows to
            generate preview:
          </Typography>
          <StyledTanStackTable table={table} />
        </>
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
        </>
      }
    />
  )
}
