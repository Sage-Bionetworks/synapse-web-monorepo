import { useGetEntityBundle, useUpdateTableColumns } from '@/synapse-queries'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { Alert } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { ColumnModel, ViewScope } from '@sage-bionetworks/synapse-types'
import { isUndefined, noop, omitBy } from 'lodash-es'
import { ReactNode, useCallback, useMemo, useRef } from 'react'
import { SetOptional } from 'type-fest'
import { ConfirmationDialog } from '../ConfirmationDialog'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SkeletonTable } from '../Skeleton'
import { getViewScopeForEntity } from './TableColumnSchemaEditorUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'

type CommonProps = {
  open: boolean
  onCancel?: () => void
}

type ExistingEntityProps = CommonProps & {
  entityId: string
  onColumnsUpdated?: () => void
}

type NewSchemaProps = CommonProps & {
  entityId?: undefined
  initialData?: SetOptional<ColumnModel, 'id'>[]
  onSubmit: (newColumnModels: SetOptional<ColumnModel, 'id'>[]) => void
  isSubmitting?: boolean
  errorMessage?: string
}

export type TableColumnSchemaEditorProps = ExistingEntityProps | NewSchemaProps

/**
 * Fetches column model data for a Synapse Table and renders a form to edit the column models.
 * When no `entityId` is provided, renders the form in "new schema" mode for defining columns
 * before an entity has been created (e.g. the CSV upload flow). Only regular Tables are supported
 * in new-schema mode.
 */
export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
  if (props.entityId != null) {
    return <ExistingEntitySchemaEditor {...props} />
  }
  return <NewTableSchemaEditor {...props} />
}

function ExistingEntitySchemaEditor(props: ExistingEntityProps) {
  const { entityId, open, onColumnsUpdated = noop, onCancel = noop } = props

  const formRef = useRef<SubmitHandle>(null)
  const { data: bundle, isLoading } = useGetEntityBundle(
    entityId,
    undefined,
    {
      includeEntity: true,
      includeTableBundle: true,
    },
    {
      // This data is inserted into a form, so don't refetch it.
      staleTime: Infinity,
      throwOnError: true,
    },
  )

  const entity = bundle?.entity
  const originalColumnModels = bundle?.tableBundle?.columnModels

  const {
    mutate,
    isPending: updateIsPending,
    error,
  } = useUpdateTableColumns({
    onSuccess: () => {
      onColumnsUpdated()
    },
  })

  const onSubmit = useCallback(
    (newColumnModels: SetOptional<ColumnModel, 'id'>[]) => {
      // Update the table schema with the new column models.
      mutate({
        entityId,
        originalColumnModels: originalColumnModels!,
        newColumnModels: newColumnModels.map(cm =>
          // Remove undefined properties from the new column models
          omitBy(cm, isUndefined),
        ) as SetOptional<ColumnModel, 'id'>[],
      })
    },
    [entityId, mutate, originalColumnModels],
  )

  const viewScope: ViewScope | undefined = useMemo(() => {
    if (!entity) {
      return undefined
    }
    return getViewScopeForEntity(entity)
  }, [entity])

  if (isLoading || !bundle || !entity) {
    return (
      <SkeletonTable
        numRows={8}
        numCols={7}
        rowHeight={'50px'}
        fullWidthCells
      />
    )
  }

  return (
    <EditorDialog
      open={open}
      onCancel={onCancel}
      isSubmitting={updateIsPending}
      onConfirm={() => formRef.current?.submit()}
      errorMessage={error?.message}
    >
      <TableColumnSchemaForm
        ref={formRef}
        entityType={convertToEntityType(entity.concreteType)}
        viewScope={viewScope}
        initialData={bundle?.tableBundle?.columnModels}
        isSubmitting={updateIsPending}
        onSubmit={formData => {
          onSubmit(formData)
        }}
        originalColumnModels={originalColumnModels}
      />
    </EditorDialog>
  )
}

function NewTableSchemaEditor(props: NewSchemaProps) {
  const {
    open,
    onCancel = noop,
    initialData,
    onSubmit,
    isSubmitting = false,
    errorMessage,
  } = props

  const formRef = useRef<SubmitHandle>(null)

  return (
    <EditorDialog
      open={open}
      onCancel={onCancel}
      isSubmitting={isSubmitting}
      onConfirm={() => formRef.current?.submit()}
      errorMessage={errorMessage}
    >
      <TableColumnSchemaForm
        ref={formRef}
        entityType={EntityType.table}
        initialData={initialData}
        isSubmitting={isSubmitting}
        onSubmit={formData => {
          onSubmit(
            formData.map(
              cm => omitBy(cm, isUndefined) as SetOptional<ColumnModel, 'id'>,
            ),
          )
        }}
      />
    </EditorDialog>
  )
}

type EditorDialogProps = {
  open: boolean
  onCancel: () => void
  isSubmitting: boolean
  onConfirm: () => void
  errorMessage?: string
  children: ReactNode
}

function EditorDialog(props: EditorDialogProps) {
  const { open, onCancel, isSubmitting, onConfirm, errorMessage, children } =
    props
  return (
    <ConfirmationDialog
      open={open}
      maxWidth={'xl'}
      title={'Edit Columns'}
      content={
        <>
          {children}
          {errorMessage && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </>
      }
      confirmButtonProps={{
        children: isSubmitting ? 'Saving...' : 'Save',
        disabled: isSubmitting,
        startIcon: isSubmitting ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={onConfirm}
      cancelButtonProps={{
        disabled: isSubmitting,
      }}
      onCancel={onCancel}
    />
  )
}
