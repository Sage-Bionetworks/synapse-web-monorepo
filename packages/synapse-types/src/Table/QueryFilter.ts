export enum ColumnSingleValueFilterOperator {
  /* The LIKE operation. Use wildcard '%' in value sting for prefix/suffix matching. */
  LIKE = 'LIKE',
  /* The EQUAL operation. */
  EQUAL = 'EQUAL',
  /* The IN operation */
  IN = 'IN',
}
export enum ColumnMultiValueFunction {
  /* HAS function on multi-value columns, same as the predicate: 'columnName HAS ()' */
  HAS = 'HAS',
  /* HAS_LIKE function on multi-value columns, same as the predicate: 'columnName HAS_LIKE ()'. Can be used for pattern matching using wildcard %. */
  HAS_LIKE = 'HAS_LIKE',
}

export const COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter'
export type COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE =
  typeof COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE

// A filter using a single value against a column. Values within the values list have an OR relationship
export interface ColumnSingleValueQueryFilter extends QueryFilter {
  concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE
  columnName: string // name of the column to filter
  operator: ColumnSingleValueFilterOperator // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
}

export const COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter'
export type COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE =
  typeof COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE

// A filter that applies multi-value columns functions.
export interface ColumnMultiValueFunctionQueryFilter extends QueryFilter {
  concreteType: COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE
  columnName: string // name of the column to filter
  function: ColumnMultiValueFunction // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
}

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TextMatchesQueryFilter.html
export const TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter'
export type TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE =
  typeof TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE
export interface TextMatchesQueryFilter extends QueryFilter {
  concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE
  searchExpression: string
}

export interface QueryFilter {
  concreteType:
    | TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE
    | COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE
    | COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE
}
