import TableColumnSchemaForm, {
  SubmitHandle,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaForm'
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
import { useCreateEntity } from '@/synapse-queries'
import { useCreateColumnModels } from '@/synapse-queries/table/useColumnModel'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
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
  ColumnModel,
  CsvTableDescriptor,
  EntityType,
  TableUpdateTransactionRequest,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import { isUndefined, omitBy } from 'lodash-es'
import { useCallback, useEffect, useRef, useState } from 'react'
import { SetOptional } from 'type-fest'
import {
  Entity,
  ColumnModel as SynapseTypesColumnModel,
  Table,
} from '@sage-bionetworks/synapse-types'

enum CsvPreviewDialogStep {
  UPLOAD_CSV = 0,
  COLUMN_PREVIEW = 1,
  TABLE_NAME = 2,
}

type CsvPreviewDialogBaseProps = {
  /** Whether the dialog is open */
  open: boolean
  /** Callback when the dialog is closed */
  onClose: () => void
  /** Whether the confirm action is pending */
  confirmIsPending?: boolean
  /** An optional error message to display */
  errorMessage?: string
  /** Invoked after all backend operations successfully complete */
  onSuccess?: () => void
}

export type CsvPreviewDialogProps = CsvPreviewDialogBaseProps &
  (
    | {
        /** Callback when the user confirms the column models
         * @param dataFileHandleId - The file handle ID of the uploaded CSV
         * @param columnModels - The confirmed column models
         */
        onConfirm: (
          dataFileHandleId: string,
          columnModels: ColumnModel[],
          csvTableDescriptor: CsvTableDescriptor,
        ) => void
        tableId?: never
        parentId?: never
      }
    | {
        /** If provided, upload csv rows to existing table */
        tableId: string
        parentId?: never
        onConfirm?: never
      }
    | {
        /** Destination project/folder to upload to */
        parentId: string
        tableId?: never
        onConfirm?: never
      }
  )

export default function CsvPreviewDialog(props: CsvPreviewDialogProps) {
  const {
    open,
    onClose,
    onConfirm,
    confirmIsPending,
    errorMessage,
    tableId,
    parentId,
    onSuccess,
  } = props
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

  const [tableName, setTableName] = useState('')
  const [columnModels, setColumnModels] = useState<
    SetOptional<SynapseTypesColumnModel, 'id'>[]
  >([])
  const columnSchemaFormRef = useRef<SubmitHandle>(null)

  const {
    mutateAsync: createColumnModels,
    error: createColumnModelsError,
    reset: resetCreateColumnModels,
  } = useCreateColumnModels()
  const {
    mutateAsync: createEntity,
    error: createEntityError,
    reset: resetCreateEntity,
  } = useCreateEntity()
  const {
    mutateAsync: tableTransaction,
    error: tableTransactionError,
    isPending: isTransactionPending,
    reset: resetTableTransaction,
  } = useTableUpdateTransaction()

  // Reset local state when dialog is closed
  useEffect(() => {
    if (!open) {
      setStep(CsvPreviewDialogStep.UPLOAD_CSV)
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
      resetCreateColumnModels()
      resetCreateEntity()
      resetTableTransaction()
    }
  }, [open, resetCreateColumnModels, resetCreateEntity, resetTableTransaction])

  const onFileUploaded = useCallback((fileHandleId: string) => {
    setUploadedFileHandleId(fileHandleId)
    setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)
  }, [])

  const uploadRef = useRef<FileUploadHandle | null>(null)
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

  /**
   * If no tableId is provided, creates column models and a new table entity, then uploads the CSV to the new table.
   * If a tableId is provided, uploads the csv to the existing table.
   * @param columnModelsParam - The schema defined by the user. Defaults to empty array for append flow.
   */
  const handleFinish = useCallback(
    async (
      columnModelsParam: SetOptional<SynapseTypesColumnModel, 'id'>[] = [],
    ) => {
      let resolvedTableId = tableId

      if (!tableId) {
        let createdColumnModelResults: SynapseTypesColumnModel[]
        try {
          createdColumnModelResults = await createColumnModels(
            columnModelsParam,
          )
        } catch {
          return
        }

        const entityToCreate: Entity = {
          name: tableName,
          parentId: parentId,
          concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
        }
        ;(entityToCreate as Table)['columnIds'] = createdColumnModelResults.map(
          cm => cm.id,
        )

        let newEntity: Entity
        try {
          newEntity = await createEntity(entityToCreate)
        } catch {
          return
        }
        resolvedTableId = newEntity.id
      }

      const tableUpdateRequest: TableUpdateTransactionRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: resolvedTableId!,
        changes: [
          {
            tableId: resolvedTableId!,
            uploadFileHandleId: uploadedFileHandleId!,
            csvTableDescriptor,
            concreteType:
              'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          },
        ],
      }
      try {
        await tableTransaction(tableUpdateRequest)
      } catch {
        return
      }

      onSuccess?.()
    },
    [
      tableId,
      createColumnModels,
      tableName,
      parentId,
      createEntity,
      uploadedFileHandleId,
      csvTableDescriptor,
      tableTransaction,
      onSuccess,
    ],
  )

  const onColumnSchemaSubmit = useCallback(
    (editedColumnModels: SetOptional<SynapseTypesColumnModel, 'id'>[]) => {
      void handleFinish(editedColumnModels)
    },
    [handleFinish],
  )

  const handlePreviewConfirm = useCallback(() => {
    if (tableId) {
      // table already exists; upload csv rows directly to table
      void handleFinish()
      return
    }

    const suggestedColumns = csvPreviewData?.suggestedColumns
    if (!suggestedColumns) {
      return
    }

    if (parentId) {
      // create new table; initialize schema editor with suggestions and proceed to naming.
      setColumnModels(
        suggestedColumns.map(cm => omitBy(cm, isUndefined)) as SetOptional<
          SynapseTypesColumnModel,
          'id'
        >[],
      )
      setStep(CsvPreviewDialogStep.TABLE_NAME)
    } else if (uploadedFileHandleId != null) {
      // Grid mode, delegate to parent
      onConfirm?.(uploadedFileHandleId, suggestedColumns, csvTableDescriptor)
    }
  }, [
    tableId,
    parentId,
    handleFinish,
    csvPreviewData,
    onConfirm,
    uploadedFileHandleId,
    csvTableDescriptor,
  ])

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
          {step === CsvPreviewDialogStep.UPLOAD_CSV && uploadStepContent}
          {step === CsvPreviewDialogStep.COLUMN_PREVIEW && previewStepContent}
          {step === CsvPreviewDialogStep.TABLE_NAME && tableNameStepContent}
          {errorMessage && <ErrorBanner error={errorMessage} />}
          {step === CsvPreviewDialogStep.TABLE_NAME &&
            createColumnModelsError && (
              <ErrorBanner error={createColumnModelsError} />
            )}
          {step === CsvPreviewDialogStep.TABLE_NAME && createEntityError && (
            <ErrorBanner error={createEntityError} />
          )}
          {(step === CsvPreviewDialogStep.TABLE_NAME ||
            step === CsvPreviewDialogStep.COLUMN_PREVIEW) &&
            tableTransactionError && (
              <ErrorBanner error={tableTransactionError} />
            )}
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
              loading={confirmIsPending ?? isTransactionPending}
            >
              {parentId && !tableId ? 'Next' : 'Confirm'}
            </Button>
          )}
          {step === CsvPreviewDialogStep.TABLE_NAME && (
            <>
              <Button
                variant={'outlined'}
                onClick={() => setStep(CsvPreviewDialogStep.COLUMN_PREVIEW)}
              >
                Back
              </Button>
              <Button
                variant={'contained'}
                onClick={() => columnSchemaFormRef.current?.submit()}
                loading={isTransactionPending}
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
