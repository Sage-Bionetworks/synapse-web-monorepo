import isEmpty from 'lodash-es/isEmpty'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
  Query,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import {
  ORG_TABLE_COLUMN_NAMES,
  TABLE_IDS,
  tableInfo,
  ColumnNames,
} from '@/config/resources'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

type UseOrgQueryProps = {
  columns?: string[]
  ids: string[]
}
type UseFetchAllRowCountsProps = {
  tableName: string
  colNames: string[]
  id: string
  countsOnly?: boolean
}

/**
 * Gets query results so components can layout conditionally depending
 * on data
 */
export function useFetchTableData(props: UseFetchAllRowCountsProps) {
  const { tableName, colNames, id, countsOnly = true } = props

  const colConsts: ColumnNames = tableInfo[tableName].tableColNames
  const additionalFilters: ColumnSingleValueQueryFilter[] = [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: colConsts.ID,
      operator: ColumnSingleValueFilterOperator.IN,
      values: [id],
    },
  ]
  const query: Query = {
    sql: `SELECT ${colNames.join(', ')} FROM ${
      TABLE_IDS.Organization_denormalized.id
    }`,
    additionalFilters,
  }
  console.log(query)
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
      console.log(data)
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
              const val = JSON.parse(result[column])
              // TODO: Handle possibility of JSON being something other than array?
              //       Not needed currently, I believe
              result[column] = countsOnly ? val.length : val
            } else {
              if (countsOnly) {
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
              console.error(
                `Non-JSON column type ${column} passed to useFetchJsonCols`,
              )
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
