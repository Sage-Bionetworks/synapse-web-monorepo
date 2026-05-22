import { displayToast } from '@/components/ToastMessage'
import CsvPreviewDialog from '@/components/table/CsvPreview/CsvPreviewDialog'
import TableColumnSchemaForm, {
  SubmitHandle,
} from '@/components/TableColumnSchemaEditor/TableColumnSchemaForm'
import { useCreateEntity } from '@/synapse-queries'
import { useCreateColumnModels } from '@/synapse-queries/table/useColumnModel'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { Alert, Box, TextField } from '@mui/material'
import {
  ColumnModel as SynapseClientColumnModel,
  CsvTableDescriptor,
  EntityType,
  TableUpdateTransactionRequest,
  UploadToTableRequest,
} from '@sage-bionetworks/synapse-client'
import { ColumnModel } from '@sage-bionetworks/synapse-types'
import { useCallback, useRef, useState } from 'react'
import { SetOptional } from 'type-fest'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

type CommonProps = {
  open: boolean
  /** Called when the wizard is dismissed without completing. */
  onClose: () => void
  /** Called after the upload job completes successfully, with the table entity ID. */
  onComplete: (entityId: string) => void
}

type CreateModeProps = CommonProps & {
  /** ID of the parent project for the new table. */
  parentId: string
  tableId?: undefined
}

type AppendModeProps = CommonProps & {
  /** Existing table to which the uploaded CSV will be appended. */
  tableId: string
  parentId?: undefined
}

export type UploadCsvWizardProps = CreateModeProps | AppendModeProps

type PreviewResult = {
  fileHandleId: string
  suggestedColumns: SetOptional<ColumnModel, 'id'>[]
  csvDescriptor: CsvTableDescriptor
  fileName: string
}

/**
 * Multi-step wizard for uploading a CSV/TSV file to a Synapse Table.
 *
 * Step 1 — file upload + preview via {@link CsvPreviewDialog}.
 *
 * Step 2 depends on mode:
 * - Create mode (`parentId` provided): user names the new table and edits the
 *   inferred schema, then the wizard creates the column models, the
 *   TableEntity, and runs a TableTransaction applying the CSV.
 * - Append mode (`tableId` provided): the CSV is applied to the existing table
 *   directly with a single TableTransaction.
 *
 * Exactly one of `parentId` or `tableId` must be provided — the discriminated
 * union enforces this at the type level.
 *
 * Ported from the GWT `UploadTableModalWidget` wizard.
 */
export default function UploadCsvWizard(props: UploadCsvWizardProps) {
  if (props.tableId != null) {
    return <AppendModeWizard {...props} />
  }
  return <CreateModeWizard {...props} />
}

function AppendModeWizard(props: AppendModeProps) {
  const { open, tableId, onClose, onComplete } = props

  const {
    mutate: appendToTable,
    isPending: isAppending,
    error: appendError,
    reset: resetAppendMutation,
  } = useTableUpdateTransaction({
    onSuccess: () => {
      displayToast('CSV applied to table.', 'success')
      onComplete(tableId)
      resetAppendMutation()
    },
  })

  const handleClose = useCallback(() => {
    resetAppendMutation()
    onClose()
  }, [onClose, resetAppendMutation])

  const handlePreviewConfirm = useCallback(
    (
      fileHandleId: string,
      _columnModels: SynapseClientColumnModel[],
      csvDescriptor: CsvTableDescriptor,
    ) => {
      const uploadRequest = preProcessUploadToTableRequest({
        concreteType:
          'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        uploadFileHandleId: fileHandleId,
        tableId,
        csvTableDescriptor: csvDescriptor,
      })
      appendToTable({
        concreteType:
          'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
        entityId: tableId,
        changes: [uploadRequest],
      })
    },
    [appendToTable, tableId],
  )

  return (
    <CsvPreviewDialog
      open={open}
      onClose={handleClose}
      onConfirm={handlePreviewConfirm}
      errorMessage={appendError?.message}
      confirmIsPending={isAppending}
    />
  )
}

function CreateModeWizard(props: CreateModeProps) {
  const { open, parentId, onClose, onComplete } = props
  const [previewResult, setPreviewResult] = useState<PreviewResult | null>(null)

  const handleClose = useCallback(() => {
    setPreviewResult(null)
    onClose()
  }, [onClose])

  const handleCompleteAndClear = useCallback(
    (entityId: string) => {
      onComplete(entityId)
      setPreviewResult(null)
    },
    [onComplete],
  )

  const handlePreviewConfirm = useCallback(
    (
      fileHandleId: string,
      columnModels: SynapseClientColumnModel[],
      csvDescriptor: CsvTableDescriptor,
      fileName: string,
    ) => {
      // Cast through the shared types — fields are populated by the preview API
      // and preProcessColumns guarantees a name.
      const suggestedColumns = preProcessColumns(
        columnModels as SetOptional<ColumnModel, 'id'>[],
      )
      setPreviewResult({
        fileHandleId,
        suggestedColumns,
        csvDescriptor,
        fileName,
      })
    },
    [],
  )

  if (previewResult == null) {
    return (
      <CsvPreviewDialog
        open={open}
        onClose={handleClose}
        onConfirm={handlePreviewConfirm}
      />
    )
  }

  return (
    <FinalizeCreateTableDialog
      open={open}
      parentId={parentId}
      previewResult={previewResult}
      onCancel={handleClose}
      onComplete={handleCompleteAndClear}
    />
  )
}

type FinalizeCreateTableDialogProps = {
  open: boolean
  parentId: string
  previewResult: PreviewResult
  onCancel: () => void
  onComplete: (entityId: string) => void
}

function FinalizeCreateTableDialog(props: FinalizeCreateTableDialogProps) {
  const { open, parentId, previewResult, onCancel, onComplete } = props
  const formRef = useRef<SubmitHandle>(null)
  const [tableName, setTableName] = useState(previewResult.fileName)
  const [isCreating, setIsCreating] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  const { mutateAsync: createColumns } = useCreateColumnModels()
  const { mutateAsync: createEntity } = useCreateEntity()
  const { mutateAsync: runTransaction } = useTableUpdateTransaction()

  const handleSubmit = useCallback(
    async (editedColumns: SetOptional<ColumnModel, 'id'>[]) => {
      setErrorMessage(undefined)
      setIsCreating(true)
      try {
        const schema = preProcessColumns(editedColumns)
        const createdColumns = await createColumns(schema)
        const tableEntity = await createEntity({
          concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          name: tableName,
          parentId,
        })
        const uploadRequest = preProcessUploadToTableRequest({
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableRequest',
          uploadFileHandleId: previewResult.fileHandleId,
          tableId: tableEntity.id!,
          csvTableDescriptor: previewResult.csvDescriptor,
        })
        const transactionRequest: TableUpdateTransactionRequest = {
          concreteType:
            'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
          entityId: tableEntity.id!,
          changes: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest',
              entityId: tableEntity.id!,
              changes: createdColumns.map(cm => ({
                oldColumnId: undefined,
                newColumnId: cm.id,
              })),
            },
            uploadRequest,
          ],
        }
        await runTransaction(transactionRequest)
        displayToast(`Table "${tableName}" created.`, 'success')
        onComplete(tableEntity.id!)
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : String(error))
      } finally {
        setIsCreating(false)
      }
    },
    [
      createColumns,
      createEntity,
      onComplete,
      parentId,
      previewResult,
      runTransaction,
      tableName,
    ],
  )

  const canSubmit = tableName.trim().length > 0 && !isCreating

  return (
    <ConfirmationDialog
      open={open}
      maxWidth={'xl'}
      title={'Create Table'}
      content={
        <Box>
          <TextField
            label={'Table Name'}
            fullWidth
            required
            value={tableName}
            onChange={e => setTableName(e.target.value)}
            disabled={isCreating}
            sx={{ mb: 2 }}
          />
          <TableColumnSchemaForm
            ref={formRef}
            entityType={EntityType.table}
            initialData={previewResult.suggestedColumns}
            isSubmitting={isCreating}
            onSubmit={editedColumns => {
              void handleSubmit(editedColumns)
            }}
          />
          {errorMessage && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </Box>
      }
      confirmButtonProps={{
        children: isCreating ? 'Creating...' : 'Create',
        disabled: !canSubmit,
        startIcon: isCreating ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={() => formRef.current?.submit()}
      cancelButtonProps={{ disabled: isCreating }}
      onCancel={onCancel}
    />
  )
}

/**
 * Ensures every column has a name. Columns missing a name get a default name of
 * `colN` where N is the 1-based column index. Mirrors GWT
 * `UploadCSVFinishPageImpl.preProcessColumns`.
 */
export function preProcessColumns<T extends SetOptional<ColumnModel, 'id'>>(
  columns: T[],
): T[] {
  return columns.map((cm, i) => (cm.name ? cm : { ...cm, name: `col${i + 1}` }))
}

/**
 * If the CSV has a header row, increments `linesToSkip` by 1 and clears the
 * `isFirstLineHeader` flag so the table's column names can differ from the
 * source headers. Mirrors GWT `UploadCSVFinishPageImpl.preProcessUploadToTableRequest`.
 */
export function preProcessUploadToTableRequest(
  request: UploadToTableRequest,
): UploadToTableRequest {
  const clone: UploadToTableRequest = {
    ...request,
    csvTableDescriptor: request.csvTableDescriptor
      ? { ...request.csvTableDescriptor }
      : undefined,
  }
  if (clone.csvTableDescriptor?.isFirstLineHeader) {
    clone.linesToSkip = (clone.linesToSkip ?? 0) + 1
    clone.csvTableDescriptor.isFirstLineHeader = false
  }
  return clone
}
