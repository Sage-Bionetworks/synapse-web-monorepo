import React, { useCallback, useRef } from 'react'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
  useUpdateTable,
} from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_COLUMN_MODELS } from '../../utils/SynapseConstants'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm, { SubmitHandle } from './TableColumnSchemaForm'
import { Button } from '@mui/material'
import {
  ColumnModel,
  JsonSubColumnModel,
} from '@sage-bionetworks/synapse-types'
import {
  ColumnModelFormData,
  JsonSubColumnModelFormData,
} from './TableColumnSchemaFormReducer'
import { SetOptional } from 'type-fest'
import { createTableUpdateTransactionRequest } from './TableColumnSchemaEditorUtils'
import { useSynapseContext } from '../../utils'

export type TableColumnSchemaEditorProps = {
  entityId: string
}

function transformFormDataToColumnModels(formData: ColumnModelFormData[]) {
  formData.map(
    (formEntry: ColumnModelFormData): SetOptional<ColumnModel, 'id'> => {
      // Remove the isSelected field because it was only used for the UI.
      const { isSelected, ...rest } = formEntry
      const columnModel = rest as SetOptional<ColumnModel, 'id'>
      if (columnModel.jsonSubColumns) {
        columnModel.jsonSubColumns = (
          columnModel.jsonSubColumns as JsonSubColumnModelFormData[]
        ).map(
          (
            jsonSubColumnFormData: JsonSubColumnModelFormData,
          ): JsonSubColumnModel => {
            // isSelected field from the subcolumn for the same reason
            const { isSelected, ...rest } = jsonSubColumnFormData
            return {
              ...rest,
            }
          },
        )
      }
      return columnModel
    },
  )
}

/**
 * Fetches column model data for a Synapse Table and renders a form to edit the column models.
 * @param props
 * @constructor
 */
export default function TableColumnSchemaEditor(
  props: TableColumnSchemaEditorProps,
) {
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

  const { mutate, isLoading: isMutating } = useUpdateTable()

  const isLoading = isLoadingEntity || isLoadingColumnModels || isMutating

  // TODO: the hook above is not returning a stable reference. this is unexpected.
  const queryResultBundle = useDeepCompareMemoize(_queryResultBundle)
  const { accessToken } = useSynapseContext()
  const onSubmit = useCallback(
    async (formData: ColumnModelFormData[]) => {
      // Transform the form data into ColumnModels
      transformFormDataToColumnModels(formData)

      // Create the request to update the table
      // This call will create new column models as appropriate
      const request = await createTableUpdateTransactionRequest(
        accessToken!,
        entityId,
        queryResultBundle!.responseBody!.columnModels!,
        formData,
      )
      // Update the table schema with the new column models.
      mutate(request)
    },
    [accessToken, entityId, mutate, queryResultBundle],
  )

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
        initialData={queryResultBundle?.responseBody?.columnModels}
        onSubmit={formData => {
          onSubmit(formData)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (formRef.current) {
            formRef.current.submit()
          }
        }}
        sx={{ my: 2 }}
      >
        Save
      </Button>
    </>
  )
}
