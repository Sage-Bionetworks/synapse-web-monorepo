import React from 'react'
import useGetQueryResultBundle from '@/synapse-queries/entity/useGetQueryResultBundle'
import { parseEntityIdFromSqlStatement } from '@/utils/functions'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { Query, QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from '../CardContainerLogic'
import { SkeletonTable } from '../Skeleton'
import RowDataTable from './RowDataTable'

export type RowDataTableWithQueryProps = {
  /** The query used to retrieve data */
  query: Query
  /** Optional list of column names whose data should be displayed in the table. If not provided, all columns with data will be shown. */
  displayedColumns?: string[]
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
  /** Optional configuration for linking columns  */
  columnLinks?: LabelLinkConfig
}

/**
 * For the first row returned by the query, displays a table of column names and Synapse Table row data represented as key/value pairs
 */
const RowDataTableWithQuery = (
  props: RowDataTableWithQueryProps,
): React.ReactNode => {
  const { columnAliases, columnLinks, query, displayedColumns } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask: BUNDLE_MASK_QUERY_SELECT_COLUMNS | BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query,
  }

  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const rowData =
    queryResultBundle?.queryResult!.queryResults.rows[0].values ?? []
  const headers = queryResultBundle?.queryResult!.queryResults.headers ?? []

  if (isLoading) return <SkeletonTable numRows={6} numCols={1} />

  return (
    <RowDataTable
      columnAliases={columnAliases}
      columnLinks={columnLinks}
      rowData={rowData}
      headers={headers}
      displayedColumns={displayedColumns}
    />
  )
}

export default RowDataTableWithQuery
