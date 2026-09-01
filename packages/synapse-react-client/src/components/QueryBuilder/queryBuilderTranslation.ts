import {
  ColumnMultiValueFunction,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  FacetColumnRequest,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  FilterGroup,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnRangeRequest,
  isFacetColumnValuesRequest,
  isFilterGroup,
} from '../../utils/types/IsType'
import { isQBGroup, QBCondition, QBGroup, QBNode } from './QueryBuilderTypes'

const COLUMN_SINGLE_VALUE_QUERY_FILTER =
  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter' as const
const COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER =
  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter' as const

// -----------------------------------------------------------------------------
// Column-kind classification
// -----------------------------------------------------------------------------

/** A multi-value list column is one whose column type ends in `_LIST`. */
export function isListColumn(columnType: string | null): boolean {
  return columnType != null && columnType.endsWith('_LIST')
}

// -----------------------------------------------------------------------------
// LIKE escaping / classification
// -----------------------------------------------------------------------------

/**
 * Escape SQL LIKE metacharacters (`%` and `_`) plus the escape character itself
 * (`\`) so a user's literal `50%` isn't treated as a wildcard match.
 */
export function escapeLike(input: string): string {
  return input.replace(/[\\%_]/g, ch => '\\' + ch)
}

/**
 * Inverse of {@link escapeLike}: strip the backslash escapes that
 * {@link escapeLike} added.
 */
export function unescapeLike(input: string): string {
  return input.replace(/\\([\\%_])/g, '$1')
}

/**
 * Classify a LIKE pattern string produced by {@link qbNodeToApiFilter} back
 * into a QB op + un-escaped text. Handles the four wildcard shapes
 * produced by that function (`%val%`, `val%`, `%val`, `val`).
 */
export function classifyLikePattern(pattern: string): {
  op: 'contains' | 'starts_with' | 'ends_with' | 'is_exactly'
  text: string
} {
  const startsPct = pattern.startsWith('%')
  // Only treat a trailing '%' as a wildcard if it isn't itself escaped
  const endsPct = /(?<!\\)%$/.test(pattern)
  const core = pattern.slice(startsPct ? 1 : 0, endsPct ? -1 : undefined)
  const text = unescapeLike(core)
  if (startsPct && endsPct) return { op: 'contains', text }
  if (endsPct) return { op: 'starts_with', text }
  if (startsPct) return { op: 'ends_with', text }
  return { op: 'is_exactly', text }
}

// -----------------------------------------------------------------------------
// QB → API
// -----------------------------------------------------------------------------

/**
 * Convert a QB tree node into a `QueryFilter`. Returns `null` when the node
 * (or an entire subtree) has no complete conditions — an incomplete leaf and
 * an empty group are both treated as "no constraint" so partial user input
 * never contributes to the outgoing query.
 */
export function qbNodeToApiFilter(node: QBNode): QueryFilter | null {
  if (isQBGroup(node)) {
    const children = node.children
      .map(qbNodeToApiFilter)
      .filter((f): f is QueryFilter => f !== null)
    if (children.length === 0) return null
    const filter: FilterGroup = {
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: node.combinator,
      not: node.not || undefined,
      children,
    }
    return filter
  }
  return conditionToApiFilter(node)
}

function conditionToApiFilter(
  node: QBCondition,
): ColumnSingleValueQueryFilter | ColumnMultiValueFunctionQueryFilter | null {
  const { columnName, columnType, op, values, rangeMin, rangeMax, text } = node
  if (columnName === null) return null

  switch (op) {
    case 'is_any_of': {
      if (values.length === 0) return null
      // Multi-value list columns use HAS on ColumnMultiValueFunctionQueryFilter;
      // single-value columns use IN on ColumnSingleValueQueryFilter.
      if (isListColumn(columnType)) {
        return makeMultiValueFilter(columnName, values)
      }
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.IN,
        values,
      )
    }
    case 'is_all_of': {
      if (values.length === 0) return null
      return makeMultiValueFilter(columnName, values)
    }
    case 'between': {
      if (rangeMin == null || rangeMin === '') return null
      if (rangeMax == null || rangeMax === '') return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.BETWEEN,
        [rangeMin, rangeMax],
      )
    }
    case 'gt':
      return rangeBoundFilter(
        columnName,
        rangeMin,
        ColumnSingleValueFilterOperator.GREATER_THAN,
      )
    case 'gte':
      return rangeBoundFilter(
        columnName,
        rangeMin,
        ColumnSingleValueFilterOperator.GREATER_THAN_OR_EQUAL,
      )
    case 'lt':
      return rangeBoundFilter(
        columnName,
        rangeMax,
        ColumnSingleValueFilterOperator.LESS_THAN,
      )
    case 'lte':
      return rangeBoundFilter(
        columnName,
        rangeMax,
        ColumnSingleValueFilterOperator.LESS_THAN_OR_EQUAL,
      )
    case 'equal':
      if (values.length === 0) return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.EQUAL,
        [values[0]],
      )
    case 'not_equal':
      if (values.length === 0) return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.NOT_EQUAL,
        [values[0]],
      )
    case 'has_value':
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.IS_NOT_NULL,
        [],
      )
    case 'no_value':
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.IS_NULL,
        [],
      )
    case 'contains':
      if (text == null || text === '') return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.LIKE,
        [`%${escapeLike(text)}%`],
      )
    case 'starts_with':
      if (text == null || text === '') return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.LIKE,
        [`${escapeLike(text)}%`],
      )
    case 'ends_with':
      if (text == null || text === '') return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.LIKE,
        [`%${escapeLike(text)}`],
      )
    case 'is_exactly':
      if (text == null || text === '') return null
      return makeSingleValueFilter(
        columnName,
        ColumnSingleValueFilterOperator.EQUAL,
        [text],
      )
    default: {
      op satisfies never
      return null
    }
  }
}

function makeSingleValueFilter(
  columnName: string,
  operator: ColumnSingleValueFilterOperator,
  values: string[],
): ColumnSingleValueQueryFilter {
  return {
    concreteType: COLUMN_SINGLE_VALUE_QUERY_FILTER,
    columnName,
    operator,
    values,
  }
}

function makeMultiValueFilter(
  columnName: string,
  values: string[],
): ColumnMultiValueFunctionQueryFilter {
  return {
    concreteType: COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER,
    columnName,
    function: ColumnMultiValueFunction.HAS,
    _function: ColumnMultiValueFunction.HAS,
    values,
  }
}

function rangeBoundFilter(
  columnName: string,
  bound: string | null,
  operator: ColumnSingleValueFilterOperator,
): ColumnSingleValueQueryFilter | null {
  if (bound == null || bound === '') return null
  return makeSingleValueFilter(columnName, operator, [bound])
}

// -----------------------------------------------------------------------------
// API → QB (initial hydration)
// -----------------------------------------------------------------------------

/**
 * Convert an API `QueryFilter` back into a QB node. Used when the initial
 * query already contains a `FilterGroup` (see filterMode auto-detect) so the
 * QB tree can be reconstructed on mount.
 *
 * Some conversions are lossy — `HAS` always deserializes as `is_any_of` (we
 * can't distinguish it from an `is_all_of` at the API layer), and `EQUAL` on
 * text columns deserializes as `equal` (not `is_exactly`) because they share
 * the same wire representation. Users can adjust the operator picker.
 */
export function apiFilterToQBNode(filter: QueryFilter): QBNode | null {
  if (isFilterGroup(filter)) {
    const children = (filter.children ?? [])
      .map(apiFilterToQBNode)
      .filter((n): n is QBNode => n !== null)
    return {
      kind: 'group',
      id: newId(),
      combinator: filter.operator ?? 'AND',
      not: filter.not ?? false,
      children,
    }
  }
  if (isColumnSingleValueQueryFilter(filter)) {
    return singleValueToCondition(filter)
  }
  if (isColumnMultiValueFunctionQueryFilter(filter)) {
    return {
      kind: 'condition',
      id: newId(),
      columnName: filter.columnName,
      columnType: null,
      op: 'is_any_of',
      values: [...filter.values],
      rangeMin: null,
      rangeMax: null,
      text: null,
    }
  }
  // TextMatchesQueryFilter and other non-QB filter types are not part of the
  // QB tree — they belong in the non-QB baseline.
  return null
}

function singleValueToCondition(
  filter: ColumnSingleValueQueryFilter,
): QBCondition {
  const base = {
    kind: 'condition' as const,
    id: newId(),
    columnName: filter.columnName,
    columnType: null,
    values: [] as string[],
    rangeMin: null as string | null,
    rangeMax: null as string | null,
    text: null as string | null,
  }
  const [firstValue] = filter.values
  switch (filter.operator) {
    case ColumnSingleValueFilterOperator.IN:
      return { ...base, op: 'is_any_of', values: [...filter.values] }
    case ColumnSingleValueFilterOperator.EQUAL:
      return { ...base, op: 'equal', values: [...filter.values] }
    case ColumnSingleValueFilterOperator.NOT_EQUAL:
      return { ...base, op: 'not_equal', values: [...filter.values] }
    case ColumnSingleValueFilterOperator.GREATER_THAN:
      return { ...base, op: 'gt', rangeMin: firstValue ?? null }
    case ColumnSingleValueFilterOperator.GREATER_THAN_OR_EQUAL:
      return { ...base, op: 'gte', rangeMin: firstValue ?? null }
    case ColumnSingleValueFilterOperator.LESS_THAN:
      return { ...base, op: 'lt', rangeMax: firstValue ?? null }
    case ColumnSingleValueFilterOperator.LESS_THAN_OR_EQUAL:
      return { ...base, op: 'lte', rangeMax: firstValue ?? null }
    case ColumnSingleValueFilterOperator.BETWEEN:
      return {
        ...base,
        op: 'between',
        rangeMin: filter.values[0] ?? null,
        rangeMax: filter.values[1] ?? null,
      }
    case ColumnSingleValueFilterOperator.IS_NULL:
      return { ...base, op: 'no_value' }
    case ColumnSingleValueFilterOperator.IS_NOT_NULL:
      return { ...base, op: 'has_value' }
    case ColumnSingleValueFilterOperator.LIKE: {
      const classified = classifyLikePattern(firstValue ?? '')
      return { ...base, op: classified.op, text: classified.text }
    }
    default:
      filter.operator satisfies never
      return { ...base, op: 'equal' }
  }
}

// -----------------------------------------------------------------------------
// Facets → QB (mode switch)
// -----------------------------------------------------------------------------

/**
 * Translate `selectedFacets` into a QB group whose children mirror each facet
 * (as an AND-combined, non-negated group). The reverse direction is not
 * generally possible; a QB → facets switch clears the tree.
 */
export function selectedFacetsToQBGroup(
  selectedFacets: FacetColumnRequest[],
): QBGroup {
  return {
    kind: 'group',
    id: newId(),
    combinator: 'AND',
    not: false,
    children: selectedFacets
      .map(facetToQBCondition)
      .filter((c): c is QBCondition => c !== null),
  }
}

function facetToQBCondition(facet: FacetColumnRequest): QBCondition | null {
  if (isFacetColumnValuesRequest(facet)) {
    if (!facet.facetValues || facet.facetValues.length === 0) return null
    return {
      kind: 'condition',
      id: newId(),
      columnName: facet.columnName,
      columnType: null,
      op: 'is_any_of',
      values: [...facet.facetValues],
      rangeMin: null,
      rangeMax: null,
      text: null,
    }
  }
  if (isFacetColumnRangeRequest(facet)) {
    const hasMin = facet.min != null && facet.min !== ''
    const hasMax = facet.max != null && facet.max !== ''
    if (!hasMin && !hasMax) return null
    const base = {
      kind: 'condition' as const,
      id: newId(),
      columnName: facet.columnName,
      columnType: null,
      values: [],
      text: null,
    }
    if (hasMin && hasMax) {
      return {
        ...base,
        op: 'between',
        rangeMin: facet.min!,
        rangeMax: facet.max!,
      }
    }
    if (hasMin) {
      return { ...base, op: 'gte', rangeMin: facet.min!, rangeMax: null }
    }
    return { ...base, op: 'lte', rangeMin: null, rangeMax: facet.max! }
  }
  return null
}

// -----------------------------------------------------------------------------
// Utilities
// -----------------------------------------------------------------------------

let idCounter = 0
function newId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID()
  }
  // Fallback for environments without crypto.randomUUID (older jsdom, etc.).
  idCounter += 1
  return `qb-${idCounter}-${Math.random().toString(36).slice(2, 10)}`
}
