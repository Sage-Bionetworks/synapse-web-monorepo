import isEmpty from 'lodash-es/isEmpty'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
  Query,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { TABLE_IDS, tableInfo, ColumnNames } from '@/config/resources'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

type UseFetchAllRowCountsProps = {
  tableName: string
  colNames: string[]
} & ( // countsOnly is only an option with a single id
  | { id: string; countsOnly?: boolean; ids?: never }
  | { ids: string[]; id?: never; countsOnly?: never }
)

/**
 * Gets query results so components can layout conditionally depending
 * on data
 */
export function useFetchTableData(props: UseFetchAllRowCountsProps) {
  const { tableName, colNames, ids, id, countsOnly = false } = props

  const colConsts: ColumnNames = tableInfo[tableName].tableColNames
  const additionalFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: colConsts.ID,
      operator: ColumnSingleValueFilterOperator.IN,
      // eslint-disable-next-line no-constant-binary-expression
      values: ids ?? [id] ?? [],
    },
  ]
  const query: Query = {
    sql: `SELECT ${colNames.join(', ')} FROM ${
      TABLE_IDS.Organization_denormalized.id
    }`,
    additionalFilters,
  }
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: TABLE_IDS.Organization_denormalized.id,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query,
  }

  const {
    data: queryResult,
    error,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: data => {
      const colIndexes = colNames.map(column => ({
        column,
        index: getFieldIndex(column, data),
      }))
      const results: Record<string, string>[] =
        data?.queryResult?.queryResults.rows.map(el => {
          const values = el.values as string[]
          const result = {}
          colIndexes.forEach(({ column, index }) => {
            result[column] = values[index]
            if (
              data?.queryResult?.queryResults.headers[index].columnType ===
              'JSON'
            ) {
              const val = JSON.parse(result[column])
              // TODO: Handle possibility of JSON being something other than array?
              //       Not needed currently, I believe
              result[column] = countsOnly ? val.length : val
            } else {
              if (id !== undefined && countsOnly) {
                if (
                  data?.queryResult?.queryResults.headers[
                    index
                  ].columnType.endsWith('LIST')
                ) {
                  result[column] = result[column].length
                } else {
                  result[column] = isEmpty(result[column]) ? 0 : 1
                }
              }
            }
          })
          return result
        }) ?? []
      return results
    },
  })
  return { data: queryResult, error, isLoading }
}
