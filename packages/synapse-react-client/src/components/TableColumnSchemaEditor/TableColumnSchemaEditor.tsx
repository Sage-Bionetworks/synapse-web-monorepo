import React, { useCallback, useMemo, useRef } from 'react'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
  useUpdateTableColumns,
} from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_COLUMN_MODELS } from '../../utils/SynapseConstants'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'
import { Alert, Button } from '@mui/material'
import { ColumnModelFormData } from './TableColumnSchemaFormReducer'
import {
  getViewScopeForEntity,
  transformFormDataToColumnModels,
} from './TableColumnSchemaEditorUtils'
import { useSynapseContext } from '../../utils'
import { ViewScope } from '@sage-bionetworks/synapse-types'
import { Provider } from 'jotai'

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
  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)
  const { data: _queryResultBundle, isLoading: isLoadingColumnModels } =
    useGetQueryResultBundleWithAsyncStatus(
      {
        entityId,
        query: {
          sql: `SELECT * FROM ${entityId}`,
        },
        partMask: BUNDLE_MASK_QUERY_COLUMN_MODELS,
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      },
      {
        // This data is inserted into a form, so don't refetch it.
        staleTime: Infinity,
        useErrorBoundary: true,
      },
    )

  const { mutate, isLoading: isMutating, error } = useUpdateTableColumns()

  const isLoading = isLoadingEntity || isLoadingColumnModels

  // TODO: the hook above is not returning a stable reference. this is unexpected.
  const queryResultBundle = useDeepCompareMemoize(_queryResultBundle)
  const { accessToken } = useSynapseContext()
  const onSubmit = useCallback(
    (formData: ColumnModelFormData[]) => {
      // Transform the form data into ColumnModels
      const columnModels = transformFormDataToColumnModels(formData)

      // Update the table schema with the new column models.
      mutate({
        entityId,
        originalColumnModels: queryResultBundle!.responseBody!.columnModels!,
        newColumnModels: columnModels,
      })
    },
    [accessToken, entityId, mutate, queryResultBundle],
  )

  const viewScope: ViewScope | undefined = useMemo(() => {
    if (!entity) {
      return undefined
    }
    return getViewScopeForEntity(entity)
  }, [entity])

  if (isLoading || !entity) {
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
        initialData={queryResultBundle?.responseBody?.columnModels}
        isSubmitting={isMutating}
        onSubmit={formData => {
          onSubmit(formData)
        }}
      />
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
