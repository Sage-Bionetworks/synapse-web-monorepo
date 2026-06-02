import TableColumnSchemaForm, {
  SubmitHandle,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaForm'
import { DialogBase } from '@/components/DialogBase'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
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
import useCreateTableFromCsv from './useCreateTableFromCsv'
import CsvUploadPreviewContent from './CsvUploadPreviewContent'

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

enum CreateTableFromCsvStep {
  CSV_UPLOAD_PREVIEW = 0,
  TABLE_NAME = 1,
}

/**
 * A multi-step modal wizard used to create a Synapse Table entity from a uploaded CSV file.
 * * It manages two primary phases:
 * 1. CSV Upload & Preview: Displays data preview and infers suggested column models.
 * 2. Table Configuration: Sets table name and allows schema customization.
 */
export default function CreateTableFromCsvDialog(
  props: CreateTableFromCsvDialogProps,
) {
  const { open, onClose, parentId, onSuccess } = props
  const csvUploadPreviewWorkflow = useCsvUploadPreview()
  const [step, setStep] = useState(CreateTableFromCsvStep.CSV_UPLOAD_PREVIEW)
  const [tableName, setTableName] = useState('')
  const [columnModels, setColumnModels] = useState<
    SetOptional<SynapseTypesColumnModel, 'id'>[]
  >([])
  const columnSchemaFormRef = useRef<SubmitHandle>(null)

  const { mutate: createTableFromCsv, isPending: isUploading } =
    useCreateTableFromCsv({
      onSuccess() {
        onSuccess?.()
      },
      onError(error) {
        displayToast(error.message, 'danger')
      },
    })

  const handleFinish = useCallback(
    (columnModelsParam: SetOptional<SynapseTypesColumnModel, 'id'>[] = []) => {
      createTableFromCsv({
        parentId,
        tableName,
        columnModels: columnModelsParam,
        csvTableDescriptor: csvUploadPreviewWorkflow.csvTableDescriptor,
        fileHandleId: csvUploadPreviewWorkflow.uploadedFileHandleId!,
      })
    },
    [
      createTableFromCsv,
      parentId,
      tableName,
      csvUploadPreviewWorkflow.csvTableDescriptor,
      csvUploadPreviewWorkflow.uploadedFileHandleId,
    ],
  )

  const onColumnSchemaSubmit = useCallback(
    (editedColumnModels: SetOptional<SynapseTypesColumnModel, 'id'>[]) => {
      void handleFinish(editedColumnModels)
    },
    [handleFinish],
  )

  const handlePreviewConfirm = useCallback(() => {
    const suggestedColumns =
      csvUploadPreviewWorkflow.csvPreviewData?.suggestedColumns
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
    setStep(CreateTableFromCsvStep.TABLE_NAME)
  }, [csvUploadPreviewWorkflow.csvPreviewData, setStep])

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
          {step === CreateTableFromCsvStep.CSV_UPLOAD_PREVIEW && (
            <CsvUploadPreviewContent workflow={csvUploadPreviewWorkflow} />
          )}
          {step === CreateTableFromCsvStep.TABLE_NAME && tableNameStepContent}
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
          {step === CreateTableFromCsvStep.CSV_UPLOAD_PREVIEW &&
            csvUploadPreviewWorkflow.step ===
              CsvUploadPreviewStep.COLUMN_PREVIEW && (
              <Button
                disabled={csvUploadPreviewWorkflow.isLoadingPreview}
                variant={'contained'}
                onClick={handlePreviewConfirm}
              >
                Next
              </Button>
            )}
          {step === CreateTableFromCsvStep.TABLE_NAME && (
            <>
              <Button
                variant={'outlined'}
                onClick={() =>
                  setStep(CreateTableFromCsvStep.CSV_UPLOAD_PREVIEW)
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
