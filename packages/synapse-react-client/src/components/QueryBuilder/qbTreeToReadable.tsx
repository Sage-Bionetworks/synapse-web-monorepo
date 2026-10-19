import { ReactNode } from 'react'
import { isQBGroup, QBCondition, QBGroup, QBNode } from './QueryBuilderTypes'
import { labelForOp } from './queryBuilderMetadata'
import {
  QBValueDisplayNameFn,
  rawQBValueDisplayName,
} from './useQBValueDisplayName'

/**
 * Render a QB tree as a plain-English React node with the AND / OR / NOT
 * connectives styled inline. Used by the QB's Reads-As summary bar.
 *
 * Rules (per the design's plain-English summary spec):
 * - The root group reads without outer parentheses.
 * - Nested groups retain parentheses.
 * - Excluded (NOT) groups are always parenthesized and prefixed with NOT.
 * - Incomplete conditions render as `(unset)`.
 */
export function qbTreeToReadable(
  root: QBGroup,
  getColumnDisplayName: (columnName: string) => string = name => name,
  getValueDisplayName: QBValueDisplayNameFn = rawQBValueDisplayName,
): ReactNode {
  const displayNames = { getColumnDisplayName, getValueDisplayName }
  const rendered = renderNode(root, true, displayNames)
  if (rendered == null) return <span>(no filters)</span>
  return rendered
}

type DisplayNames = {
  getColumnDisplayName: (columnName: string) => string
  getValueDisplayName: QBValueDisplayNameFn
}

function renderNode(
  node: QBNode,
  isRoot: boolean,
  displayNames: DisplayNames,
): ReactNode | null {
  if (isQBGroup(node)) return renderGroup(node, isRoot, displayNames)
  return renderCondition(node, displayNames)
}

function renderGroup(
  group: QBGroup,
  isRoot: boolean,
  displayNames: DisplayNames,
): ReactNode | null {
  const parts = group.children
    .map((child, index) => ({
      key: child.id,
      node: renderNode(child, false, displayNames),
      index,
    }))
    .filter(part => part.node != null)

  if (parts.length === 0) return null

  const combinator = group.combinator
  const inner = parts.map((part, index) => (
    <span key={part.key}>
      {index > 0 && (
        <>
          {' '}
          <ConnectiveSpan combinator={combinator} />{' '}
        </>
      )}
      {part.node}
    </span>
  ))

  const body = <span>{inner}</span>

  if (group.not) {
    return (
      <span>
        <NotSpan /> ({body})
      </span>
    )
  }
  if (isRoot) return body
  return <span>({body})</span>
}

function renderCondition(
  condition: QBCondition,
  displayNames: DisplayNames,
): ReactNode | null {
  const { getColumnDisplayName, getValueDisplayName } = displayNames
  const valueSummary = summarizeConditionValue(condition, getValueDisplayName)
  // Skip fully-blank rows so they don't clutter the summary bar. A row is
  // fully blank when the user hasn't picked a column AND hasn't entered any
  // value yet — that's an in-progress row we don't want to narrate.
  if (condition.columnName == null && valueSummary == null) return null
  const columnName = condition.columnName
    ? getColumnDisplayName(condition.columnName)
    : '(unset)'
  if (valueSummary == null) {
    return (
      <span>
        <strong>{columnName}</strong> (unset)
      </span>
    )
  }
  return (
    <span>
      <strong>{columnName}</strong> {labelForOp(condition.op)} {valueSummary}
    </span>
  )
}

function summarizeConditionValue(
  condition: QBCondition,
  getValueDisplayName: QBValueDisplayNameFn,
): string | null {
  const { columnName, op, values, rangeMin, rangeMax, text } = condition
  const labelForValue = (value: string) =>
    getValueDisplayName(columnName, value)
  switch (op) {
    case 'has_value':
    case 'no_value':
      return ''
    case 'is_any_of':
    case 'is_all_of':
      return values.length === 0 ? null : values.map(labelForValue).join(', ')
    case 'equal':
    case 'not_equal':
      return values.length === 0 ? null : labelForValue(values[0])
    case 'between':
      if (!rangeMin || !rangeMax) return null
      return `${rangeMin} and ${rangeMax}`
    case 'gt':
    case 'gte':
      return rangeMin ? rangeMin : null
    case 'lt':
    case 'lte':
      return rangeMax ? rangeMax : null
    case 'contains':
    case 'starts_with':
    case 'ends_with':
    case 'is_exactly':
      return text ? `"${text}"` : null
    default:
      op satisfies never
      return null
  }
}

function ConnectiveSpan({ combinator }: { combinator: 'AND' | 'OR' }) {
  const color =
    combinator === 'OR'
      ? 'var(--synapse-warning)'
      : 'var(--synapse-primary-action-color)'
  return (
    <span style={{ color, fontWeight: 700 }} aria-hidden="false">
      {combinator}
    </span>
  )
}

function NotSpan() {
  return (
    <span style={{ color: 'var(--synapse-error)', fontWeight: 700 }}>NOT</span>
  )
}
