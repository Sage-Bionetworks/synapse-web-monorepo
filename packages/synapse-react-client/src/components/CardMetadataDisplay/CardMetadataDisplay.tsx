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
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import { getFieldIndex } from '../../utils/functions/queryUtils'

export type CardMetadataDisplayProps = {
  sql: string
  sqlOperator?: SQLOperator
  searchParams?: Record<string, string>
  columnLinks?: LabelLinkConfig
  labels?: string[]
  columnAliases?: Record<string, string>
} & Pick<QueryVisualizationWrapperProps, 'additionalFiltersSessionStorageKey'>

const CardMetadataDisplay = (props: CardMetadataDisplayProps) => {
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

  if (isLoading)
    return (
      <Typography
        sx={{
          fontSize: '14px',
        }}
      >
        Loading...
      </Typography>
    )

  return (
    <div>
      <Table
        sx={{
          border: 'none !important',
        }}
      >
        <TableBody>
          {labelValueArray.map((arr, index) => {
            const columnName = arr[0]
            const value = arr[1]
            return (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? 'grey.100' : 'transparent',
                  '.MuiTableCell-root': {
                    border: 'none',
                  },
                }}
              >
                <TableCell
                  sx={{ padding: '7px 20px 7px 10px', width: '256px' }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      textOverflow: 'ellipsis',
                      color: 'grey.900',
                    }}
                  >
                    {columnAliases?.[columnName] ?? columnName}
                  </Typography>
                </TableCell>
                <TableCell sx={{ padding: '7px 20px 7px 10px' }}>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      '& p': { margin: 0 },
                    }}
                  >
                    <SynapseCardLabel
                      value={value}
                      columnName={columnName}
                      labelLink={
                        columnLinks?.find(
                          link => link.matchColumnName === columnName,
                        ) ?? undefined
                      }
                      selectColumns={selectColumns}
                      columnModels={queryResultBundle?.columnModels}
                      isHeader={false}
                      rowData={rowData}
                    />
                  </Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default CardMetadataDisplay
