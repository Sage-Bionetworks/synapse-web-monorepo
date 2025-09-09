import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { ORG_TABLE_COLUMN_NAMES, TABLE_IDS } from '@/config/resources'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

type UseOrgQueryProps = {
  columns?: string[]
  ids: string[]
}

/**
 * Gets query results so components can layout conditionally depending
 * on data
 */
export function useOrgQuery({ columns, ids }: UseOrgQueryProps) {
  const additionalFilters: ColumnSingleValueQueryFilter[] = []
  if (ids?.length > 0) {
    additionalFilters.push({
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: ORG_TABLE_COLUMN_NAMES.ID,
      operator: ColumnSingleValueFilterOperator.IN,
      values: ids,
    })
  }

  const fetch_cols = columns?.length
    ? columns
    : Object.values(ORG_TABLE_COLUMN_NAMES)
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: TABLE_IDS.Organization_denormalized.id,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `SELECT ${fetch_cols.join(', ')} FROM ${
        TABLE_IDS.Organization_denormalized.id
      }`,
      additionalFilters,
    },
  }

  const {
    data: queryResult,
    error,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: data => {
      const colIndexes = fetch_cols.map(column => ({
        column,
        index: getFieldIndex(column, data),
      }))
      const results: Record<string, string>[] =
        data?.queryResult?.queryResults.rows.map(el => {
          const values = el.values as string[]
          // if (values.some(value => value === null)) {
          //   console.warn('Row has null value(s) when no nulls expected')
          // }
          const result = {}
          colIndexes.forEach(({ column, index }) => {
            result[column] = values[index]
            if (
              data?.queryResult?.queryResults.headers[index].columnType ===
              'JSON'
            ) {
              result[column] = JSON.parse(result[column])
            }
          })
          console.log({ data, result })
          return result
        }) ?? []
      return results
    },
  })

  return { data: queryResult, error, isLoading }
}
