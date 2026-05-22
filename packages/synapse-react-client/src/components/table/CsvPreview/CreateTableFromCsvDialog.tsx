import TableColumnSchemaForm, {
  SubmitHandle,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaForm'
import { DialogBase } from '@/components/DialogBase'
import {
  BasicFileHandleUpload,
  FileUploadHandle,
} from '@/components/file/upload/BasicFileHandleUpload'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
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
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  CsvTableDescriptor,
  EntityType,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import { isUndefined, omitBy } from 'lodash-es'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SetOptional } from 'type-fest'
import { ColumnModel as SynapseTypesColumnModel } from '@sage-bionetworks/synapse-types'
import useUploadCsvToTable from './useUploadCsvToTable'

enum CreateTableFromCsvDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
  TABLE_NAME = 2,
}

export type CreateTableFromCsvDialogProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** Destination project/folder to upload to */
  parentId: string
  /** Invoked after all backend operations successfully complete */
  onSuccess?: () => void
}

export default function CreateTableFromCsvDialog(
  props: CreateTableFromCsvDialogProps,
) {
  const { open, onClose, parentId, onSuccess } = props
  const [step, setStep] = useState(CreateTableFromCsvDialogStep.UPLOAD_CSV)
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

  const [tableName, setTableName] = useState('')
  const [columnModels, setColumnModels] = useState<
    SetOptional<SynapseTypesColumnModel, 'id'>[]
  >([])
  const columnSchemaFormRef = useRef<SubmitHandle>(null)

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
      setStep(CreateTableFromCsvDialogStep.UPLOAD_CSV)
      setUploadedFileHandleId(null)
      setCsvPreviewData(null)
      setTableName('')
      setColumnModels([])
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
    setStep(CreateTableFromCsvDialogStep.COLUMN_PREVIEW)
  }, [])

  const uploadRef = useRef<FileUploadHandle | null>(null)
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

  const handleFinish = useCallback(
    (columnModelsParam: SetOptional<SynapseTypesColumnModel, 'id'>[] = []) => {
      uploadCsvToTable({
        csvTableDescriptor,
        fileHandleId: uploadedFileHandleId!,
        createTableProps: {
          parentId,
          tableName,
          columnModels: columnModelsParam,
        },
      })
    },
    [
      parentId,
      tableName,
      csvTableDescriptor,
      uploadedFileHandleId,
      uploadCsvToTable,
    ],
  )

  const onColumnSchemaSubmit = useCallback(
    (editedColumnModels: SetOptional<SynapseTypesColumnModel, 'id'>[]) => {
      void handleFinish(editedColumnModels)
    },
    [handleFinish],
  )

  const handlePreviewConfirm = useCallback(() => {
    const suggestedColumns = csvPreviewData?.suggestedColumns
    if (!suggestedColumns) {
      return
    }

    // create new table; initialize schema editor with suggestions and proceed to naming.
    setColumnModels(
      suggestedColumns.map(cm => omitBy(cm, isUndefined)) as SetOptional<
        SynapseTypesColumnModel,
        'id'
      >[],
    )
    setStep(CreateTableFromCsvDialogStep.TABLE_NAME)
  }, [csvPreviewData])

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

  const tableNameStepContent = (
    <Stack spacing={2}>
      <TextField
        required
        label={'Table Name'}
        value={tableName}
        onChange={e => setTableName(e.target.value)}
        fullWidth
      />
      <Typography variant={'body1'}>
        Use the schema options button to make changes to the columns of the
        table. Use the create button to finish building the table.
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={'headline3'}>Schema Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableColumnSchemaForm
            initialData={columnModels}
            entityType={EntityType.table}
            ref={columnSchemaFormRef}
            onSubmit={onColumnSchemaSubmit}
          />
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
          {step === CreateTableFromCsvDialogStep.UPLOAD_CSV &&
            uploadStepContent}
          {step === CreateTableFromCsvDialogStep.COLUMN_PREVIEW &&
            previewStepContent}
          {step === CreateTableFromCsvDialogStep.TABLE_NAME &&
            tableNameStepContent}
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
          {step === CreateTableFromCsvDialogStep.COLUMN_PREVIEW && (
            <Button
              disabled={isLoadingPreview}
              variant={'contained'}
              onClick={handlePreviewConfirm}
            >
              Next
            </Button>
          )}
          {step === CreateTableFromCsvDialogStep.TABLE_NAME && (
            <>
              <Button
                variant={'outlined'}
                onClick={() =>
                  setStep(CreateTableFromCsvDialogStep.COLUMN_PREVIEW)
                }
              >
                Back
              </Button>
              <Button
                variant={'contained'}
                onClick={() => columnSchemaFormRef.current?.submit()}
                loading={isUploading}
                disabled={!tableName}
              >
                Create
              </Button>
            </>
          )}
        </>
      }
    />
  )
}
