import TableColumnSchemaForm, {
  SubmitHandle,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaForm'
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { isUndefined, omitBy } from 'lodash-es'
import { useCallback, useRef, useState } from 'react'
import { SetOptional } from 'type-fest'
import { ColumnModel as SynapseTypesColumnModel } from '@sage-bionetworks/synapse-types'
import useUploadCsvToTable from './useUploadCsvToTable'

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

  const {
    step,
    setStep,
    csvTableDescriptor,
    setCsvTableDescriptor,
    uploadedFileHandleId,
    csvPreviewData,
    setCsvPreviewData,
    isLoadingPreview,
    setIsLoadingPreview,
    onFileUploaded,
  } = useCsvUploadPreview()

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

  const uploadRef = useRef<FileUploadHandle | null>(null)

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
    setStep(CsvUploadPreviewStep.TABLE_NAME)
  }, [csvPreviewData, setStep])

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
          {step === CsvUploadPreviewStep.UPLOAD_CSV && uploadStepContent}
          {step === CsvUploadPreviewStep.COLUMN_PREVIEW && previewStepContent}
          {step === CsvUploadPreviewStep.TABLE_NAME && tableNameStepContent}
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
            >
              Next
            </Button>
          )}
          {step === CsvUploadPreviewStep.TABLE_NAME && (
            <>
              <Button
                variant={'outlined'}
                onClick={() => setStep(CsvUploadPreviewStep.COLUMN_PREVIEW)}
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
