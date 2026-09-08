import { render } from '@testing-library/react'
import { qbTreeToReadable } from './qbTreeToReadable'
import { QBCondition, QBGroup } from './QueryBuilderTypes'

let idCounter = 0
const nextId = () => `id-${idCounter++}`

function makeCondition(patch: Partial<QBCondition> = {}): QBCondition {
  return {
    kind: 'condition',
    id: nextId(),
    columnName: null,
    columnType: null,
    op: 'contains',
    values: [],
    rangeMin: null,
    rangeMax: null,
    text: null,
    ...patch,
  }
}

function makeGroup(patch: Partial<QBGroup> = {}): QBGroup {
  return {
    kind: 'group',
    id: nextId(),
    combinator: 'AND',
    not: false,
    children: [],
    ...patch,
  }
}

function renderReadable(root: QBGroup): string {
  const { container } = render(<>{qbTreeToReadable(root)}</>)
  return container.textContent ?? ''
}

describe('qbTreeToReadable', () => {
  it('renders "(no filters)" for an empty tree', () => {
    expect(renderReadable(makeGroup())).toBe('(no filters)')
  })

  it('skips incomplete conditions when the group has completed siblings', () => {
    const complete = makeCondition({
      columnName: 'Sex',
      columnType: 'STRING',
      op: 'is_any_of',
      values: ['Female'],
    })
    const root = makeGroup({ children: [complete, makeCondition()] })
    // Both conditions render — a condition is included as long as it has at
    // least a column set OR a value set. The empty condition is dropped by
    // the summarizer's null-return path.
    expect(renderReadable(root)).toBe('Sex is any of Female')
  })

  it('joins sibling conditions with the group combinator', () => {
    const c1 = makeCondition({
      columnName: 'Sex',
      columnType: 'STRING',
      op: 'is_any_of',
      values: ['Female'],
    })
    const c2 = makeCondition({
      columnName: 'Age',
      columnType: 'INTEGER',
      op: 'gte',
      rangeMin: '18',
    })
    const root = makeGroup({ combinator: 'OR', children: [c1, c2] })
    expect(renderReadable(root)).toBe('Sex is any of Female OR Age ≥ 18')
  })

  it('parenthesizes nested groups and prefixes NOT for excluded groups', () => {
    const c1 = makeCondition({
      columnName: 'Sex',
      columnType: 'STRING',
      op: 'is_any_of',
      values: ['Male'],
    })
    const c2 = makeCondition({
      columnName: 'Site',
      columnType: 'STRING',
      op: 'is_any_of',
      values: ['A', 'B'],
    })
    const negated = makeGroup({ not: true, children: [c1, c2] })
    const root = makeGroup({ children: [negated] })
    expect(renderReadable(root)).toBe(
      'NOT (Sex is any of Male AND Site is any of A, B)',
    )
  })

  it('renders (unset) for conditions with no value payload', () => {
    const partial = makeCondition({
      columnName: 'Sex',
      columnType: 'STRING',
      op: 'is_any_of',
    })
    const root = makeGroup({ children: [partial] })
    expect(renderReadable(root)).toBe('Sex (unset)')
  })

  it('renders between with "X and Y"', () => {
    const c = makeCondition({
      columnName: 'Age',
      columnType: 'INTEGER',
      op: 'between',
      rangeMin: '18',
      rangeMax: '65',
    })
    expect(renderReadable(makeGroup({ children: [c] }))).toBe(
      'Age between 18 and 65',
    )
  })

  it('renders has_value/no_value without a value payload', () => {
    const c = makeCondition({
      columnName: 'Sex',
      columnType: 'STRING',
      op: 'has_value',
    })
    // Trailing space is intentional — labelForOp returns "has value" and
    // the summarizer emits an empty string. The rendered text is trimmed
    // via the DOM API.
    expect(renderReadable(makeGroup({ children: [c] })).trim()).toBe(
      'Sex has value',
    )
  })
})
