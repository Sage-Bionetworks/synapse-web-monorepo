import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import {
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '../../utils/SynapseConstants'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { QueryVisualizationWrapperProps } from '../QueryVisualizationWrapper'
import { SynapseCardLabel } from '../GenericCard'
import { LabelLinkConfig } from '../CardContainerLogic'
import { StyledTableContainer } from '../styled/StyledTableContainer'
import { getFieldIndex } from '../../utils/functions/queryUtils'
import { SkeletonTable } from '../Skeleton'

export type RowDataTableProps = {
  sql: string
  sqlOperator?: SQLOperator
  searchParams?: Record<string, string>
  columnLinks?: LabelLinkConfig
  /** The column names referring to the ordered keys in the key-value pairs that should be shown */
  labels?: string[]
  /** Optional display value overrides for column names */
  columnAliases?: Record<string, string>
} & Pick<QueryVisualizationWrapperProps, 'additionalFiltersSessionStorageKey'>

const RowDataTable = (props: RowDataTableProps) => {
  const {
    sql,
    columnAliases,
    additionalFiltersSessionStorageKey,
    sqlOperator,
    searchParams,
    columnLinks,
    labels,
  } = props
  const entityId = parseEntityIdFromSqlStatement(sql)
  const queryFilters = getAdditionalFilters(
    additionalFiltersSessionStorageKey,
    searchParams,
    sqlOperator,
  )

  const queryBundleRequest: QueryBundleRequest = {
    partMask: BUNDLE_MASK_QUERY_SELECT_COLUMNS | BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    query: {
      sql,
      additionalFilters: queryFilters,
    },
  }
  const { data: queryResultBundle, isLoading } =
    useGetQueryResultBundle(queryBundleRequest)

  const rowData =
    queryResultBundle?.queryResult!.queryResults.rows[0].values ?? []
  const headers = queryResultBundle?.queryResult!.queryResults.headers ?? []
  const selectColumns = headers.filter(col => labels?.includes(col.name))

  const labelValueArray: [string, string][] = []

  if (labels) {
    for (let i = 0; i < labels.length; i += 1) {
      const columnName = labels[i]
      const columnIndex = getFieldIndex(columnName, queryResultBundle)
      const value = rowData[columnIndex]
      // value can be 'null' if column type is of type STRING or '[null]' if column type is of STRING_LIST
      if (value && value !== '[null]' && value !== 'null') {
        labelValueArray.push([columnName, value])
      }
    }
  }

  if (isLoading) return <SkeletonTable numRows={6} numCols={1} />

  return (
    <StyledTableContainer sx={{ width: '100%' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          {labelValueArray.map(([columnName, value], index) => (
            <tr
              key={columnName}
              style={{
                backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'transparent',
              }}
            >
              <td style={{ padding: '7px 20px 7px 10px', width: '256px' }}>
                <span
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333',
                  }}
                >
                  {columnAliases?.[columnName] ?? columnName}
                </span>
              </td>
              <td style={{ padding: '7px 20px 7px 10px' }}>
                <SynapseCardLabel
                  value={value}
                  columnName={columnName}
                  labelLink={columnLinks?.find(
                    link => link.matchColumnName === columnName,
                  )}
                  selectColumns={selectColumns}
                  columnModels={queryResultBundle?.columnModels}
                  isHeader={false}
                  rowData={rowData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}

export default RowDataTable
