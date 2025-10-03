import isEmpty from 'lodash-es/isEmpty'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
  Query,
} from '@sage-bionetworks/synapse-types'
import { SynapseConstants } from 'synapse-react-client'
import useGetQueryResultBundle from 'synapse-react-client/synapse-queries/entity/useGetQueryResultBundle'
import { getSynapseTableId, getIdCol, getQueryString } from '@/config/resources'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'

type UseFetchAllRowCountsProps = {
  tableName: string
} & (
  | { colExpressions: string[]; queryString?: never; query?: never }
  | { queryString: string; colExpressions?: never; query?: never }
  | { query: Query; colExpressions?: never; queryString?: never }
) & // countsOnly is only an option with a single id
  (
    | { id: string; countsOnly?: boolean; ids?: never }
    | { ids: string[]; id?: never; countsOnly?: never }
  )

/**
 * General hook for fetching table data
 */
export function useFetchTableData(props: UseFetchAllRowCountsProps) {
  const {
    tableName,
    colExpressions,
    queryString,
    query,
    ids,
    id,
    countsOnly = false,
  } = props
  const values = ids ?? [id]
  let queryToRun: Query
  let expressions: string[]
  if (query) {
    // assume addittionalFilters already set
    queryToRun = query
  } else {
    const additionalFilters: ColumnSingleValueQueryFilter[] = isEmpty(values)
      ? []
      : [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: getIdCol(tableName),
            operator: ColumnSingleValueFilterOperator.IN,
            // eslint-disable-next-line no-constant-binary-expression
            values: ids ?? [id] ?? [],
          },
        ]
    let qs: string
    if (colExpressions) {
      qs = query ?? getQueryString(tableName, colExpressions)
      expressions = colExpressions
    } else if (queryString) {
      qs = queryString
      expressions = parseSelectColumns(qs)
    } else {
      throw new Error('No query to run')
    }

    queryToRun = { sql: qs, additionalFilters } as Query
  }
  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: getSynapseTableId(tableName),
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: queryToRun,
  }

  const {
    data: queryResult,
    error,
    isLoading,
  } = useGetQueryResultBundle(queryBundleRequest, {
    select: data => {
      const colIndexes = expressions.map(column => ({
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

function parseSelectColumns(sql) {
  // from https://claude.ai/share/deaba1eb-d72c-4a46-a9c0-93209f74c47c
  // Remove comments
  sql = sql.replace(/--[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '')

  // Find SELECT and FROM positions
  const selectMatch = sql.match(/\bSELECT\b/i)
  if (!selectMatch) return []

  const selectPos = selectMatch.index + selectMatch[0].length
  const fromMatch = sql.slice(selectPos).match(/\bFROM\b/i)

  let columnPart
  if (!fromMatch) {
    // No FROM clause, take everything after SELECT
    columnPart = sql.slice(selectPos).trim()
  } else {
    columnPart = sql.slice(selectPos, selectPos + fromMatch.index).trim()
  }

  // Parse columns considering nested parentheses and quoted strings
  const columns: string[] = []
  let current = ''
  let parenDepth = 0
  let inString = false
  let stringChar = null

  for (let i = 0; i < columnPart.length; i++) {
    const char = columnPart[i]
    const prevChar = i > 0 ? columnPart[i - 1] : ''

    // Handle string literals
    if ((char === '"' || char === "'") && prevChar !== '\\') {
      if (!inString) {
        inString = true
        stringChar = char
      } else if (char === stringChar) {
        inString = false
        stringChar = null
      }
    }

    if (inString) {
      current += char
      continue
    }

    // Track parentheses depth
    if (char === '(') parenDepth++
    if (char === ')') parenDepth--

    // Split on comma only at depth 0
    if (char === ',' && parenDepth === 0) {
      if (current.trim()) {
        columns.push(current.trim())
      }
      current = ''
    } else {
      current += char
    }
  }

  // Add the last column
  if (current.trim()) {
    columns.push(current.trim())
  }

  return columns
}
/*
// Test cases
console.log(parseSelectColumns("SELECT id, name, email FROM users"));
// ["id", "name", "email"]

console.log(parseSelectColumns("SELECT COUNT(*), MAX(salary) FROM employees"));
// ["COUNT(*)", "MAX(salary)"]

console.log(parseSelectColumns(`
  SELECT
    u.id,
    CONCAT(u.first_name, ' ', u.last_name) AS full_name,
    CASE WHEN age > 18 THEN 'adult' ELSE 'minor' END AS status
  FROM users u
`));
// ["u.id", "CONCAT(u.first_name, ' ', u.last_name) AS full_name", "CASE WHEN age > 18 THEN 'adult' ELSE 'minor' END AS status"]

console.log(parseSelectColumns("SELECT * FROM products WHERE price > 100"));
// ["*"]

console.log(parseSelectColumns("SELECT SUBSTRING(name, 1, POSITION(',' IN name)) FROM data"));
// ["SUBSTRING(name, 1, POSITION(',' IN name))"]
*/
