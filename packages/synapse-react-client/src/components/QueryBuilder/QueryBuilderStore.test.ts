import {
  addChildGroup,
  addConditionToGroup,
  clearGroup,
  defaultOpForColumnType,
  defaultQBGroup,
  hasCompleteCondition,
  insertNodeAt,
  moveNode,
  newBlankCondition,
  newEmptyGroup,
  removeNode,
  updateCondition,
  updateGroup,
} from './QueryBuilderStore'
import { QBCondition, QBConditionOp, QBGroup } from './QueryBuilderTypes'

function makeGroup(patch: Partial<QBGroup> = {}): QBGroup {
  return {
    kind: 'group',
    id: patch.id ?? `g-${Math.random()}`,
    combinator: patch.combinator ?? 'AND',
    not: patch.not ?? false,
    children: patch.children ?? [],
  }
}

function makeCondition(patch: Partial<QBCondition> = {}): QBCondition {
  return {
    kind: 'condition',
    id: patch.id ?? `c-${Math.random()}`,
    columnName: patch.columnName ?? null,
    columnType: patch.columnType ?? null,
    op: patch.op ?? 'is_any_of',
    values: patch.values ?? [],
    rangeMin: patch.rangeMin ?? null,
    rangeMax: patch.rangeMax ?? null,
    text: patch.text ?? null,
  }
}

describe('defaultOpForColumnType', () => {
  it.each([
    [null, 'is_any_of'],
    ['STRING_LIST', 'is_any_of'],
    ['INTEGER_LIST', 'is_any_of'],
    ['INTEGER', 'between'],
    ['DOUBLE', 'between'],
    ['DATE', 'between'],
    ['DATE_TIME', 'between'],
    ['BOOLEAN', 'equal'],
    ['STRING', 'contains'],
    ['LARGETEXT', 'is_any_of'],
  ])('returns %s for column type %s', (columnType, expected) => {
    expect(defaultOpForColumnType(columnType)).toBe(expected)
  })
})

describe('newBlankCondition', () => {
  it('creates a condition with the resolved default op', () => {
    const condition = newBlankCondition('age', 'INTEGER')
    expect(condition).toMatchObject({
      kind: 'condition',
      columnName: 'age',
      columnType: 'INTEGER',
      op: 'between',
      values: [],
      rangeMin: null,
      rangeMax: null,
      text: null,
    })
    expect(condition.id).toEqual(expect.any(String))
  })

  it('accepts null column info for a truly blank row', () => {
    const condition = newBlankCondition(null, null)
    expect(condition).toMatchObject({
      columnName: null,
      columnType: null,
      op: 'is_any_of',
    })
  })
})

describe('defaultQBGroup', () => {
  it('returns a root AND group with one blank condition', () => {
    const root = defaultQBGroup()
    expect(root).toMatchObject({
      kind: 'group',
      combinator: 'AND',
      not: false,
    })
    expect(root.children).toHaveLength(1)
    expect(root.children[0]).toMatchObject({
      kind: 'condition',
      columnName: null,
    })
  })
})

describe('addConditionToGroup', () => {
  it('prepends a blank condition to the target group', () => {
    const root = makeGroup({ id: 'root' })
    const next = addConditionToGroup(root, 'root', 'sex', 'STRING')
    expect(next.children).toHaveLength(1)
    expect(next.children[0]).toMatchObject({
      kind: 'condition',
      columnName: 'sex',
      columnType: 'STRING',
      op: 'contains',
    })
  })

  it('prepends the new condition ahead of any existing children', () => {
    const existing = makeCondition({ id: 'existing', columnName: 'first' })
    const root = makeGroup({ id: 'root', children: [existing] })
    const next = addConditionToGroup(root, 'root', 'sex', 'STRING')
    expect(next.children).toHaveLength(2)
    expect(next.children[0]).toMatchObject({
      kind: 'condition',
      columnName: 'sex',
    })
    expect(next.children[1]).toBe(existing)
  })

  it('prepends to a nested group by id, leaving siblings untouched', () => {
    const sibling = makeCondition({ id: 'sibling', columnName: 'existing' })
    const inner = makeGroup({ id: 'inner' })
    const root = makeGroup({ id: 'root', children: [sibling, inner] })

    const next = addConditionToGroup(root, 'inner', 'age', 'INTEGER')

    // sibling untouched (by reference)
    expect(next.children[0]).toBe(sibling)
    const nextInner = next.children[1] as QBGroup
    expect(nextInner.children).toHaveLength(1)
    expect(nextInner.children[0]).toMatchObject({
      columnName: 'age',
      op: 'between',
    })
  })

  it('returns the tree unchanged when the target group id does not exist', () => {
    const root = makeGroup({ id: 'root' })
    const next = addConditionToGroup(root, 'ghost', null, null)
    expect(next).toBe(root)
  })
})

describe('addChildGroup', () => {
  it('prepends an empty AND child group', () => {
    const root = makeGroup({ id: 'root' })
    const next = addChildGroup(root, 'root')
    expect(next.children).toHaveLength(1)
    expect(next.children[0]).toMatchObject({
      kind: 'group',
      combinator: 'AND',
      not: false,
      children: [],
    })
  })
})

describe('insertNodeAt', () => {
  const c = (id: string) => makeCondition({ id })

  it('splice-inserts at the given index', () => {
    const root = makeGroup({
      id: 'root',
      children: [c('a'), c('b'), c('d')],
    })
    const next = insertNodeAt(root, 'root', 2, c('c'))
    expect(next.children.map(n => n.id)).toEqual(['a', 'b', 'c', 'd'])
  })

  it('appends when target index is beyond the end', () => {
    const root = makeGroup({ id: 'root', children: [c('a')] })
    const next = insertNodeAt(root, 'root', 99, c('b'))
    expect(next.children.map(n => n.id)).toEqual(['a', 'b'])
  })

  it('prepends when target index is negative', () => {
    const root = makeGroup({ id: 'root', children: [c('a')] })
    const next = insertNodeAt(root, 'root', -1, c('b'))
    expect(next.children.map(n => n.id)).toEqual(['b', 'a'])
  })

  it('returns tree unchanged when target group id is missing', () => {
    const root = makeGroup({ id: 'root', children: [c('a')] })
    expect(insertNodeAt(root, 'nope', 0, c('b'))).toBe(root)
  })
})

describe('clearGroup', () => {
  it('removes all children of the target group', () => {
    const inner = makeGroup({
      id: 'inner',
      children: [makeCondition({ id: 'x' })],
    })
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'y' }), inner],
    })
    const next = clearGroup(root, 'inner')
    const nextInner = next.children[1] as QBGroup
    expect(nextInner.children).toEqual([])
    expect(next.children[0]).toBe(root.children[0])
  })

  it('clears the root when passed the root id', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'x' })],
    })
    const next = clearGroup(root, 'root')
    expect(next.children).toEqual([])
  })

  it('returns tree unchanged when the id is missing', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'x' })],
    })
    expect(clearGroup(root, 'ghost')).toBe(root)
  })
})

describe('updateCondition', () => {
  it('merges a patch into the target condition', () => {
    const target = makeCondition({
      id: 'c1',
      columnName: 'age',
      op: 'is_any_of',
    })
    const root = makeGroup({ id: 'root', children: [target] })
    const next = updateCondition(root, 'c1', {
      op: 'gt',
      rangeMin: '18',
    })
    expect(next.children[0]).toMatchObject({
      id: 'c1',
      columnName: 'age',
      op: 'gt',
      rangeMin: '18',
    })
    // id and kind are preserved
    expect((next.children[0] as QBCondition).kind).toBe('condition')
  })

  it('does nothing when the id refers to a group', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeGroup({ id: 'inner' })],
    })
    const next = updateCondition(root, 'inner', {
      op: 'contains',
      text: 'x',
    } as Partial<QBCondition>)
    expect(next).toBe(root)
  })

  it('returns tree unchanged when the id is missing', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'c1' })],
    })
    expect(updateCondition(root, 'ghost', { text: 'x' })).toBe(root)
  })
})

describe('updateGroup', () => {
  it('merges patch into the target group', () => {
    const root = makeGroup({ id: 'root', combinator: 'AND', not: false })
    const next = updateGroup(root, 'root', { combinator: 'OR', not: true })
    expect(next).toMatchObject({
      id: 'root',
      combinator: 'OR',
      not: true,
    })
  })

  it('preserves children unchanged (by reference)', () => {
    const child = makeCondition({ id: 'c' })
    const root = makeGroup({ id: 'root', children: [child] })
    const next = updateGroup(root, 'root', { combinator: 'OR' })
    expect(next.children[0]).toBe(child)
  })
})

describe('removeNode', () => {
  it('removes a top-level child', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'a' }), makeCondition({ id: 'b' })],
    })
    const next = removeNode(root, 'b')
    expect(next.children.map(n => n.id)).toEqual(['a'])
  })

  it('removes a nested child', () => {
    const nested = makeCondition({ id: 'deep' })
    const inner = makeGroup({ id: 'inner', children: [nested] })
    const root = makeGroup({ id: 'root', children: [inner] })
    const next = removeNode(root, 'deep')
    const nextInner = next.children[0] as QBGroup
    expect(nextInner.children).toEqual([])
  })

  it('refuses to remove the root', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'a' })],
    })
    expect(removeNode(root, 'root')).toBe(root)
  })

  it('returns tree unchanged when the id is missing', () => {
    const root = makeGroup({
      id: 'root',
      children: [makeCondition({ id: 'a' })],
    })
    expect(removeNode(root, 'ghost')).toBe(root)
  })
})

describe('moveNode', () => {
  // Tree used by many cases:
  //   root
  //   ├── a  (condition)
  //   ├── b  (condition)
  //   ├── g1 (group)
  //   │   ├── c  (condition)
  //   │   └── g2 (group)
  //   │       └── d (condition)
  //   └── e  (condition)
  function makeFixture(): QBGroup {
    return makeGroup({
      id: 'root',
      children: [
        makeCondition({ id: 'a' }),
        makeCondition({ id: 'b' }),
        makeGroup({
          id: 'g1',
          children: [
            makeCondition({ id: 'c' }),
            makeGroup({
              id: 'g2',
              children: [makeCondition({ id: 'd' })],
            }),
          ],
        }),
        makeCondition({ id: 'e' }),
      ],
    })
  }

  it('reorders within the same parent', () => {
    const root = makeFixture()
    // splice-after-removal semantics: index 2 into ['b', 'g1', 'e'] yields ['b', 'g1', 'a', 'e'].
    const next = moveNode(root, 'a', 'root', 2)
    expect(next.children.map(n => n.id)).toEqual(['b', 'g1', 'a', 'e'])
  })

  it('moves a condition across parents', () => {
    const root = makeFixture()
    const next = moveNode(root, 'a', 'g1', 0)
    expect(next.children.map(n => n.id)).toEqual(['b', 'g1', 'e'])
    const g1 = next.children[1] as QBGroup
    expect(g1.children.map(n => n.id)).toEqual(['a', 'c', 'g2'])
  })

  it('moves an entire subgroup across parents', () => {
    const root = makeFixture()
    // Move g2 (nested inside g1) up to the root
    const next = moveNode(root, 'g2', 'root', 0)
    expect(next.children.map(n => n.id)).toEqual(['g2', 'a', 'b', 'g1', 'e'])
    const g1 = next.children[3] as QBGroup
    expect(g1.children.map(n => n.id)).toEqual(['c'])
    const g2 = next.children[0] as QBGroup
    expect(g2.children.map(n => n.id)).toEqual(['d']) // subtree preserved
  })

  it('is a no-op when moving to the same position within the same parent', () => {
    const root = makeFixture()
    expect(moveNode(root, 'a', 'root', 0)).toBe(root)
  })

  it('refuses to move the root', () => {
    const root = makeFixture()
    expect(moveNode(root, 'root', 'g1', 0)).toBe(root)
  })

  it('refuses to move a node into itself', () => {
    const root = makeFixture()
    expect(moveNode(root, 'g1', 'g1', 0)).toBe(root)
  })

  it('refuses to move a group into any of its descendants (cycle)', () => {
    const root = makeFixture()
    expect(moveNode(root, 'g1', 'g2', 0)).toBe(root)
  })

  it('accepts moving a group into a sibling subgroup that is not a descendant', () => {
    // Create a fresh independent sibling group
    const sibling = makeGroup({ id: 'other' })
    const root = makeGroup({
      id: 'root',
      children: [
        makeGroup({
          id: 'src',
          children: [makeCondition({ id: 'x' })],
        }),
        sibling,
      ],
    })
    const next = moveNode(root, 'src', 'other', 0)
    expect(next.children.map(n => n.id)).toEqual(['other'])
    const nextOther = next.children[0] as QBGroup
    expect(nextOther.children.map(n => n.id)).toEqual(['src'])
  })

  it('returns tree unchanged when nodeId is missing', () => {
    const root = makeFixture()
    expect(moveNode(root, 'ghost', 'root', 0)).toBe(root)
  })

  it('returns tree unchanged when targetGroupId is missing', () => {
    const root = makeFixture()
    expect(moveNode(root, 'a', 'ghost', 0)).toBe(root)
  })

  it('clamps targetIndex beyond end of target children', () => {
    const root = makeFixture()
    const next = moveNode(root, 'a', 'g1', 99)
    const g1 = next.children.find(n => n.id === 'g1') as QBGroup
    expect(g1.children.map(n => n.id)).toEqual(['c', 'g2', 'a'])
  })
})

describe('hasCompleteCondition', () => {
  it('returns false for an empty group', () => {
    expect(hasCompleteCondition(newEmptyGroup())).toBe(false)
  })

  it('returns false for the default startup tree (all blank)', () => {
    expect(hasCompleteCondition(defaultQBGroup())).toBe(false)
  })

  it('returns true when any leaf has a complete constraint', () => {
    const complete = makeCondition({
      columnName: 'age',
      op: 'gt',
      rangeMin: '18',
    })
    const blank = makeCondition({ columnName: 'sex', op: 'is_any_of' })
    const root = makeGroup({ children: [blank, complete] })
    expect(hasCompleteCondition(root)).toBe(true)
  })

  it.each<[QBConditionOp, Partial<QBCondition>]>([
    ['is_any_of', { values: ['a'] }],
    ['is_all_of', { values: ['a'] }],
    ['equal', { values: ['a'] }],
    ['not_equal', { values: ['a'] }],
    ['between', { rangeMin: '1', rangeMax: '2' }],
    ['gt', { rangeMin: '1' }],
    ['gte', { rangeMin: '1' }],
    ['lt', { rangeMax: '9' }],
    ['lte', { rangeMax: '9' }],
    ['contains', { text: 'x' }],
    ['starts_with', { text: 'x' }],
    ['ends_with', { text: 'x' }],
    ['is_exactly', { text: 'x' }],
    ['has_value', {}],
    ['no_value', {}],
  ])('recognizes op %s as complete when its inputs are filled', (op, patch) => {
    const condition = makeCondition({ columnName: 'col', op, ...patch })
    const root = makeGroup({ children: [condition] })
    expect(hasCompleteCondition(root)).toBe(true)
  })
})
