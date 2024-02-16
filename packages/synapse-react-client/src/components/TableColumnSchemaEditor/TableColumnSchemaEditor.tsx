import React, { useCallback, useMemo, useRef } from 'react'
import {
  useGetEntityBundle,
  useUpdateTableColumns,
} from '../../synapse-queries'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'
import { Alert } from '@mui/material'
import { getViewScopeForEntity } from './TableColumnSchemaEditorUtils'
import { ColumnModel, ViewScope } from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { isUndefined, noop, omitBy } from 'lodash-es'
import { ConfirmationDialog } from '../ConfirmationDialog'

export type TableColumnSchemaEditorProps = {
  entityId: string
  open: boolean
  onColumnsUpdated?: () => void
  onCancel?: () => void
}

/**
 * Fetches column model data for a Synapse Table and renders a form to edit the column models.
 * @param props
 * @constructor
 */
export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
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
    <ConfirmationDialog
      open={open}
      maxWidth={'xl'}
      title={'Edit Columns'}
      content={
        <>
          <TableColumnSchemaForm
            ref={formRef}
            entityType={convertToEntityType(entity.concreteType)}
            viewScope={viewScope}
            initialData={bundle?.tableBundle?.columnModels}
            isSubmitting={updateIsPending}
            onSubmit={formData => {
              onSubmit(formData)
            }}
          />
          {error && (
            <Alert severity={'error'} sx={{ my: 2 }}>
              {error?.message}
            </Alert>
          )}
        </>
      }
      confirmButtonProps={{
        children: updateIsPending ? 'Saving...' : 'Save',
        disabled: updateIsPending,
        startIcon: updateIsPending ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={() => {
        if (formRef.current) {
          formRef.current.submit()
        }
      }}
      cancelButtonProps={{
        disabled: updateIsPending,
      }}
      onCancel={onCancel}
    />
  )
}
