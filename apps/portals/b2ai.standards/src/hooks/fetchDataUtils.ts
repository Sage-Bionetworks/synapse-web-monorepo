import isEmpty from 'lodash-es/isEmpty'
import {
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
  Query,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { getSynapseTableId, getIdCol, getQueryString } from '@/config/resources'

export function getQueryBundleRequestWithIdFilter(
  tableName: string,
  selectExpressions?: string[],
  filterValues?: string[],
): QueryBundleRequest {
  const query: Query = {
    sql: getQueryString(tableName, selectExpressions),
  }

  if (filterValues && !isEmpty(filterValues)) {
    query.additionalFilters = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: getIdCol(tableName),
        operator: ColumnSingleValueFilterOperator.IN,
        values: filterValues,
      },
    ]
  }

  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: getSynapseTableId(tableName),
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query,
  }
}

export function getRowsAsObjects(data: QueryResultBundle) {
  const columns = data.selectColumns?.map(col => col.name) ?? []

  const rowsAsObjects: Record<string, string | null>[] =
    data?.queryResult?.queryResults.rows.map(row => {
      const result: Record<string, string | null> = {}
      columns.forEach((column, index) => {
        result[column] = row.values[index]
      })
      return result
    }) ?? []

  return rowsAsObjects
}

export function useFetchJsonArrayLengths(
  queryBundleRequest: QueryBundleRequest,
) {
  return useGetQueryResultBundle(queryBundleRequest, {
    select: result => {
      if ((result.selectColumns ?? []).some(c => c.columnType !== 'JSON')) {
        throw new Error('Non-JSON columns not supported')
      }
      const rawRows = getRowsAsObjects(result)
      return rawRows.map(row => {
        const rowCounts: Record<string, number> = {}
        for (const col in row) {
          const val = JSON.parse(row[col] ?? '[]') as Record<
            string,
            Record<string, string>
          >[]
          // TODO: Handle possibility of JSON being something other than array?
          //       Not needed currently, I believe
          rowCounts[col] = val.length
        }
        return rowCounts
      })
    },
  })
}
