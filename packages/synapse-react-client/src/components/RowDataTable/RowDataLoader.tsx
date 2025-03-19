import {
  Query,
  QueryBundleRequest,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import RowDataTable from './RowDataTable'
import { LabelLinkConfig } from '../CardContainerLogic'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '../../utils/SynapseConstants'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { SkeletonTable } from '../Skeleton'
import { getFieldIndex } from '../../utils/functions/queryUtils'

export type RowDataLoaderProps = {
  /** The query used to retrieve data */
  query: Query
  /** The specific row data to be rendered */
  row: Row
  /** The headers for the columns in the table */
  headers: SelectColumn[]
  /** List of column names to display as labels */
  labels: string[]
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
  /** Optional configuration for linking columns  */
  columnLinks?: LabelLinkConfig
}

const RowDataLoader = (props: RowDataLoaderProps) => {
  const { columnAliases, columnLinks, query, row, headers, labels } = props
  const entityId = parseEntityIdFromSqlStatement(query.sql)

  const queryBundleRequest: QueryBundleRequest = {
    partMask: BUNDLE_MASK_QUERY_SELECT_COLUMNS | BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query,
  }

  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  // Create an array of label-value pairs for rendering
  const labelValueArray: [string, string][] = []

  for (let i = 0; i < labels.length; i += 1) {
    const columnName = headers[i].name
    const columnIndex = getFieldIndex(columnName, queryResultBundle)
    const value = row.values[columnIndex]
    // value can be 'null' if column type is of type STRING or '[null]' if column type is of STRING_LIST
    if (value && value !== '[null]' && value !== 'null') {
      labelValueArray.push([columnName, value])
    }
  }

  const rowData = row.values.filter((value): value is string => value !== null)

  if (isLoading) return <SkeletonTable numRows={6} numCols={1} />

  return (
    <RowDataTable
      labelValueArray={labelValueArray}
      columnAliases={columnAliases}
      columnLinks={columnLinks}
      rowData={rowData}
      headers={headers}
    />
  )
}

export default RowDataLoader
