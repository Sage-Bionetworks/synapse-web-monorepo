import React, { useCallback, useMemo, useRef } from 'react'
import {
  useGetEntityBundle,
  useUpdateTableColumns,
} from '../../synapse-queries'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'
import { Alert, Button, Divider } from '@mui/material'
import { getViewScopeForEntity } from './TableColumnSchemaEditorUtils'
import { ColumnModel, ViewScope } from '@sage-bionetworks/synapse-types'
import { Provider } from 'jotai'
import { SetOptional } from 'type-fest'

export type TableColumnSchemaEditorProps = {
  entityId: string
}

/**
 * Fetches column model data for a Synapse Table and renders a form to edit the column models.
 * @param props
 * @constructor
 */
function _TableColumnSchemaEditor(props: TableColumnSchemaEditorProps) {
  const { entityId } = props

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
      useErrorBoundary: true,
    },
  )

  const entity = bundle?.entity
  const originalColumnModels = bundle?.tableBundle?.columnModels

  const { mutate, isLoading: isMutating, error } = useUpdateTableColumns()

  const onSubmit = useCallback(
    (newColumnModels: SetOptional<ColumnModel, 'id'>[]) => {
      // Update the table schema with the new column models.
      mutate({
        entityId,
        originalColumnModels: originalColumnModels!,
        newColumnModels: newColumnModels,
      })
    },
    [entityId, mutate, originalColumnModels],
  )

  const viewScope: ViewScope | undefined = useMemo(() => {
    if (!entity) {
      return undefined
    }
    return getViewScopeForEntity(entity!)
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
    <>
      <TableColumnSchemaForm
        ref={formRef}
        entityType={convertToEntityType(entity.concreteType)}
        viewScope={viewScope}
        initialData={bundle?.tableBundle?.columnModels}
        isSubmitting={isMutating}
        onSubmit={formData => {
          onSubmit(formData)
        }}
      />
      <Divider />
      {error && (
        <Alert severity={'error'} sx={{ my: 2 }}>
          {error?.message}
        </Alert>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (formRef.current) {
            formRef.current.submit()
          }
        }}
        disabled={isMutating}
        sx={{ my: 2 }}
      >
        {isMutating ? 'Saving...' : 'Save'}
      </Button>
    </>
  )
}

export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
  // Wrap in a Jotai provider to ensure the Jotai atomic state is unique to this component tree
  // i.e. other instances of TableColumnSchemaEditor will not share state with this instance
  return (
    <Provider>
      <_TableColumnSchemaEditor {...props} />
    </Provider>
  )
}
