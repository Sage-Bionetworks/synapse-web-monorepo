import React from 'react'
import {
  useGetEntity,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_COLUMN_MODELS } from '../../utils/SynapseConstants'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { SkeletonTable } from '../Skeleton'
import { convertToEntityType } from '../../utils/functions/EntityTypeUtils'
import TableColumnSchemaForm from './TableColumnSchemaForm'

export type TableColumnSchemaEditorProps = {
  entityId: string
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

  const { data: entity, isLoading: isLoadingEntity } = useGetEntity(entityId)
  const { data: _queryResultBundle, isLoading: isLoadingColumnModels } =
    useGetQueryResultBundleWithAsyncStatus(
      {
        entityId,
        query: {
          sql: 'SELECT * FROM ${entityId}',
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

  const isLoading = isLoadingEntity || isLoadingColumnModels

  // TODO: the hook above is not returning a stable reference. this is unexpected.
  const queryResultBundle = useDeepCompareMemoize(_queryResultBundle)

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
    <TableColumnSchemaForm
      entityType={convertToEntityType(entity.concreteType)}
      initialData={queryResultBundle?.responseBody?.columnModels}
    />
  )
}
