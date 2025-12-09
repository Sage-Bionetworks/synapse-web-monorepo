import {
  ColumnModel,
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryFilter,
  Row,
  SelectColumn,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import { SYNAPSE_ENTITY_ID_REGEX } from './RegularExpressions'

export type SQLOperator =
  | ColumnSingleValueFilterOperator
  | ColumnMultiValueFunction

const WITHOUT_SYN_PREFIX = 3
export const QUERY_FILTERS_SESSION_STORAGE_KEY = (key: string) =>
  `${key}-temp-QueryFilter-array`

export function removePrefixIfSynId(value: string) {
  if (value.match(SYNAPSE_ENTITY_ID_REGEX)) {
    return value.substring(WITHOUT_SYN_PREFIX)
  }
  return value
}
export const getIgnoredQueryFilterSearchParamKey = (
  key: string,
  namespace?: string,
) => {
  return `__${namespace ?? ''}_${key}`
}

// Special search parameter key that will automatically apply a FTS search term to a Query Wrapper if present
export const FTS_SEARCH_TERM = 'FTS_SEARCH_TERM'

export const FTS_SEARCH_ROLE = 'FTS_SEARCH_ROLE'

/**
 * Look in local storage for a set of QueryFilters to apply.  In addition, given the search params,
 * generate a set of QueryFilters to narrow the query to view just related data.
 * May return null if a QueryFilter should not be added.
 * @param sql
 * @param searchParams
 * @param operator
 * @returns
 */
export const getAdditionalFilters = (
  searchParams?: Record<string, string>,
  operator: SQLOperator = ColumnSingleValueFilterOperator.LIKE,
  sessionStorageKey?: string,
): QueryFilter[] | undefined => {
  const sessionStorageQueryFiltersString = sessionStorageKey
    ? sessionStorage.getItem(
        QUERY_FILTERS_SESSION_STORAGE_KEY(sessionStorageKey),
      )
    : undefined
  let additionalFilters: QueryFilter[] = []
  if (sessionStorageQueryFiltersString) {
    additionalFilters = JSON.parse(
      sessionStorageQueryFiltersString,
    ) as QueryFilter[]
  }
  if (searchParams) {
    const isQueryWrapperKey = (key: string) =>
      key.startsWith('QueryWrapper') || key.startsWith('__')
    additionalFilters = additionalFilters.concat(
      Object.keys(searchParams || {})
        .filter(
          key =>
            !isQueryWrapperKey(key) &&
            searchParams[key] != undefined &&
            searchParams[key].trim() != '',
        )
        .map(key => {
          if (key == FTS_SEARCH_TERM) {
            const filter: TextMatchesQueryFilter = {
              concreteType:
                'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
              searchExpression: searchParams[key],
            }
            return filter
          }
          switch (operator) {
            case ColumnSingleValueFilterOperator.EQUAL: {
              const filter: ColumnSingleValueQueryFilter = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: key,
                operator: operator,
                values: [searchParams[key]],
              }
              return filter
            }
            case ColumnSingleValueFilterOperator.IN: {
              const filter: ColumnSingleValueQueryFilter = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: key,
                operator: operator,
                values: searchParams[key].split(','),
              }
              return filter
            }
            case ColumnMultiValueFunction.HAS: {
              const filter: ColumnMultiValueFunctionQueryFilter = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
                columnName: key,
                function: operator,
                _function: operator,
                values: searchParams[key].split(','),
              }
              return filter
            }
            case ColumnSingleValueFilterOperator.LIKE: {
              // If we use a LIKE statement with a synId the backend will look for a string with the first three
              // characters being 'syn', however, it stores synIds without 'syn', so the query will fail
              // The backend usually parses 'syn' out, but not with the LIKE clause since its expecting a regex, so we
              // parse this out. This will cause a bug if something matches the synId regex but is in free text.
              const filter: ColumnSingleValueQueryFilter = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: key,
                operator: operator,
                // Add wildcards around the value
                values: [`%${removePrefixIfSynId(searchParams[key])}%`],
              }
              return filter
            }
            case ColumnMultiValueFunction.HAS_LIKE: {
              const filter: ColumnMultiValueFunctionQueryFilter = {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
                columnName: key,
                function: operator,
                _function: operator,
                values: searchParams[key].split(',').map(param => {
                  // Remove synId prefix for the same reasons as in the LIKE case
                  return `%${removePrefixIfSynId(param)}%`
                }),
              }
              return filter
            }
          }
        }),
    )
  }

  return additionalFilters.length === 0 ? undefined : additionalFilters
}

//parses synapse entity id from a sql query string
//look for a pattern of 'from[some number of spaces]syn[somenumbers]` case insensitive
export const parseEntityIdFromSqlStatement = (sql: string): string => {
  const matches = sql.match(/(from)\s+(syn)\d+/gi)
  return matches && matches[0] ? matches[0].substr(5).trim() : ''
}

export const parseEntityIdAndVersionFromSqlStatement = (
  sql: string,
): { entityId?: string; versionNumber?: number } => {
  const regex = /from\s+(syn\d+)(?:\.(\d+))?/i
  const matches = regex.exec(sql)
  if (!matches) {
    return { entityId: undefined, versionNumber: undefined }
  }
  return {
    entityId: matches[1],
    versionNumber: matches[2] ? parseInt(matches[2]) : undefined,
  }
}

export const resultToJson = (
  headerColumns: SelectColumn[],
  rowColumns: Row[],
) => {
  const rows = rowColumns.map(row => row.values)
  const headers = headerColumns.map(column => column.name)
  return rows.map(row => {
    const obj: Record<string, string | null> = {}
    row.forEach((text, cellIndex) => {
      obj[headers[cellIndex]] = text
    })
    return obj
  })
}

/**
 * Finds the index of the given column name in the selectColumns or columnModels.
 *
 * @returns a non-negative integer if the column is found, or undefined if the column is not found
 * @param columnName
 * @param selectColumns
 * @param columnModels
 */
export const getColumnIndex = (
  columnName?: string,
  selectColumns?: SelectColumn[],
  columnModels?: ColumnModel[],
): number | undefined => {
  if (!columnName) {
    return undefined
  }

  const lowerCaseColumnName = columnName.toLowerCase()

  if (selectColumns) {
    const findIndexResult = selectColumns.findIndex(
      el => el.name?.toLowerCase() === lowerCaseColumnName,
    )
    if (findIndexResult != -1) {
      return findIndexResult
    }
  }

  if (columnModels) {
    const findIndexResult = columnModels.findIndex(
      el => el.name?.toLowerCase() === lowerCaseColumnName,
    )
    if (findIndexResult !== -1) {
      return findIndexResult
    }
  }

  return undefined
}
