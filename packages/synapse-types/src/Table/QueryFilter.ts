export enum ColumnSingleValueFilterOperator {
  /* The LIKE operation. Use wildcard '%' in value sting for prefix/suffix matching. */
  LIKE = 'LIKE',
  /* The EQUAL operation. */
  EQUAL = 'EQUAL',
  /* The IN operation */
  IN = 'IN',
  /* '>' */
  GREATER_THAN = 'GREATER_THAN',
  /* '<' */
  LESS_THAN = 'LESS_THAN',
  /* '>=' */
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  /* '<=' */
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
  /* '<>' */
  NOT_EQUAL = 'NOT_EQUAL',
  /* IS NULL */
  IS_NULL = 'IS_NULL',
  /* IS NOT NULL */
  IS_NOT_NULL = 'IS_NOT_NULL',
  /* BETWEEN: values[0] is the lower bound, values[1] is the upper bound (inclusive). */
  BETWEEN = 'BETWEEN',
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
export interface ColumnSingleValueQueryFilter {
  concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE
  isDefiningCondition?: boolean //When null (default) or false, this condition will be applied to WHERE clause of table/view query.  When set to true, for a query against a VirtualTable, this condition will be applied to the WHERE clause of the VirtualTable's definingSQL
  columnName: string // name of the column to filter
  operator: ColumnSingleValueFilterOperator // Determines the filter operation to perform
  values: string[] // Values to used with the filter.
}

export const COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter'
export type COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE =
  typeof COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE

// A filter that applies multi-value columns functions.
export interface ColumnMultiValueFunctionQueryFilter {
  concreteType: COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE
  isDefiningCondition?: boolean //When null (default) or false, this condition will be applied to WHERE clause of table/view query.  When set to true, for a query against a VirtualTable, this condition will be applied to the WHERE clause of the VirtualTable's definingSQL
  columnName: string // name of the column to filter
  function: ColumnMultiValueFunction // Determines the filter operation to perform
  // PORTALS-3972:  Need both 'function' and '_function' due to type mismatch between synapse-types and synapse-client
  _function: ColumnMultiValueFunction
  values: string[] // Values to used with the filter.
}
export type TextMatchesMode = 'NATURAL_LANGUAGE' | 'BOOLEAN'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/TextMatchesQueryFilter.html
export const TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter'
export type TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE =
  typeof TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE
export interface TextMatchesQueryFilter {
  concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE
  isDefiningCondition?: boolean //When null (default) or false, this condition will be applied to WHERE clause of table/view query.  When set to true, for a query against a VirtualTable, this condition will be applied to the WHERE clause of the VirtualTable's definingSQL
  searchExpression: string
  searchMode?: TextMatchesMode
}

/* Boolean combinator for a FilterGroup's children. */
export type BooleanOperator = 'AND' | 'OR'

export const FILTER_GROUP_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.FilterGroup'
export type FILTER_GROUP_CONCRETE_TYPE = typeof FILTER_GROUP_CONCRETE_TYPE_VALUE

// A group of filter conditions combined with a boolean operator. Groups can be nested to form arbitrary boolean expression trees (AND/OR/NOT).
export interface FilterGroup {
  concreteType: FILTER_GROUP_CONCRETE_TYPE
  isDefiningCondition?: boolean //When null (default) or false, this condition will be applied to WHERE clause of table/view query.  When set to true, for a query against a VirtualTable, this condition will be applied to the WHERE clause of the VirtualTable's definingSQL
  operator?: BooleanOperator
  not?: boolean
  children?: QueryFilter[]
}

export type QueryFilter =
  | TextMatchesQueryFilter
  | ColumnSingleValueQueryFilter
  | ColumnMultiValueFunctionQueryFilter
  | FilterGroup
