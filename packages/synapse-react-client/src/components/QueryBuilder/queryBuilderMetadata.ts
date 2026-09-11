/**
 * Column-kind classification and operator availability per kind. The QB uses
 * this both to populate the operator picker dropdown and to decide what shape
 * of value input to render.
 */
import { QBConditionOp } from './QueryBuilderTypes'

/** Categorization of columns for the QB UI. Not a synapse-types concept. */
export type QBColumnKind =
  | 'enum'
  | 'list'
  | 'range'
  | 'boolean'
  | 'text'
  | 'unknown'

/**
 * Classify a column into a QB kind based on its `ColumnTypeEnum` string and
 * whether the column has a facet in the query result. `hasFacet` distinguishes
 * a faceted single-value column (`enum`) from a plain single-value column
 * (`text`).
 */
export function classifyColumn(
  columnType: string | null,
  hasFacet: boolean,
): QBColumnKind {
  if (columnType == null) return 'unknown'
  // `_LIST` columns keep the `list` kind so `is_all_of` remains available.
  if (columnType.endsWith('_LIST')) return 'list'
  // Any other faceted column becomes an enum picker regardless of the raw
  // column type — the QB shows facet values as pills and defaults to
  // `is_any_of`.
  if (hasFacet) return 'enum'
  switch (columnType) {
    case 'BOOLEAN':
      return 'boolean'
    case 'INTEGER':
    case 'DOUBLE':
    case 'DATE':
    case 'DATE_TIME':
      return 'range'
    case 'STRING':
    case 'LARGETEXT':
    case 'LINK':
    case 'MEDIUMTEXT':
    case 'USERID':
    case 'ENTITYID':
    case 'EVALUATIONID':
    case 'SUBMISSIONID':
      return 'text'
    default:
      return 'text'
  }
}

/**
 * Ordered list of operators offered for a given column kind. Order controls
 * the operator picker dropdown ordering.
 */
export function availableOpsForKind(kind: QBColumnKind): QBConditionOp[] {
  switch (kind) {
    case 'enum':
      return ['is_any_of', 'has_value', 'no_value']
    case 'list':
      return ['is_any_of', 'is_all_of', 'has_value', 'no_value']
    case 'range':
      return [
        'between',
        'gt',
        'gte',
        'lt',
        'lte',
        'equal',
        'not_equal',
        'has_value',
        'no_value',
      ]
    case 'boolean':
      return ['equal', 'has_value', 'no_value']
    case 'text':
      return [
        'contains',
        'starts_with',
        'ends_with',
        'is_exactly',
        'has_value',
        'no_value',
      ]
    case 'unknown':
      // No column picked yet; offer nothing until one is selected.
      return []
    default:
      kind satisfies never
      return []
  }
}

/** Human-readable label for an operator, shown in the operator picker. */
export function labelForOp(op: QBConditionOp): string {
  switch (op) {
    case 'is_any_of':
      return 'is any of'
    case 'is_all_of':
      return 'is all of'
    case 'between':
      return 'between'
    case 'gt':
      return '>'
    case 'gte':
      return '≥'
    case 'lt':
      return '<'
    case 'lte':
      return '≤'
    case 'equal':
      return 'equals'
    case 'not_equal':
      return 'does not equal'
    case 'has_value':
      return 'has value'
    case 'no_value':
      return 'has no value'
    case 'contains':
      return 'contains'
    case 'starts_with':
      return 'starts with'
    case 'ends_with':
      return 'ends with'
    case 'is_exactly':
      return 'is exactly'
    default:
      op satisfies never
      return op
  }
}
