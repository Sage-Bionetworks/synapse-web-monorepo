/**
 * QB internal UI types. These carry column-model metadata and per-input state
 * (values / range / text) that the QueryFilter API objects don't. They are
 * never serialized directly to the API — {@link qbNodeToApiFilter} converts
 * them to {@link QueryFilter} first.
 */

export type QBCombinator = 'AND' | 'OR'

export type QBConditionOp =
  // enum / multi-value list columns
  | 'is_any_of'
  | 'is_all_of'
  // range (numeric / date) columns
  | 'between'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  // single-value equality (string / numeric / date / boolean)
  | 'equal'
  | 'not_equal'
  // presence (any column)
  | 'has_value'
  | 'no_value'
  // text columns
  | 'contains'
  | 'starts_with'
  | 'ends_with'
  | 'is_exactly'

export type QBCondition = {
  kind: 'condition'
  id: string
  columnName: string | null
  /** `ColumnTypeEnum` string from the query metadata (STRING, INTEGER, …). */
  columnType: string | null
  op: QBConditionOp
  /**
   * - `is_any_of` / `is_all_of`: one or more selected values.
   * - `equal` / `not_equal` (any single-value column, including booleans stored
   *   as `'true'` / `'false'`): single-element array.
   */
  values: string[]
  /** Lower bound for `between` / `gt` / `gte`. */
  rangeMin: string | null
  /** Upper bound for `between` / `lt` / `lte`. */
  rangeMax: string | null
  /** Free-text input for `contains` / `starts_with` / `ends_with` / `is_exactly`. */
  text: string | null
}

export type QBGroup = {
  kind: 'group'
  id: string
  combinator: QBCombinator
  not: boolean
  children: QBNode[]
}

export type QBNode = QBCondition | QBGroup

export function isQBCondition(node: QBNode): node is QBCondition {
  return node.kind === 'condition'
}

export function isQBGroup(node: QBNode): node is QBGroup {
  return node.kind === 'group'
}
