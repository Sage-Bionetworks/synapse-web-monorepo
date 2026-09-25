import { pointerIntersection } from '@dnd-kit/collision'
import { DragEndEvent, DragOverEvent, useDroppable } from '@dnd-kit/react'
import { render, renderHook } from '@testing-library/react'
import { act, ReactNode, useCallback, useState } from 'react'
import { vi } from 'vitest'
import { FilterGroupNode } from './FilterGroupNode'
import {
  groupDropZoneData,
  groupDropZoneId,
  readGroupDropZoneTarget,
  useQueryBuilderDrag,
} from './queryBuilderDnd'
import {
  QueryBuilderInternalContextProvider,
  QueryBuilderInternalContextType,
} from './QueryBuilderInternalContext'
import { QBCondition, QBGroup } from './QueryBuilderTypes'
import { rawQBValueDisplayName } from './useQBValueDisplayName'

// The hook takes only types from `@dnd-kit/react`, so these stubs affect the
// rendered components and leave the hook exercising its real implementation.
vi.mock('@dnd-kit/react', () => ({
  useDroppable: vi.fn(() => ({ ref: vi.fn(), isDropTarget: false })),
}))
vi.mock('@dnd-kit/react/sortable', () => ({
  useSortable: vi.fn(() => ({
    ref: vi.fn(),
    handleRef: vi.fn(),
    isDragSource: false,
  })),
}))

function condition(id: string): QBCondition {
  return {
    kind: 'condition',
    id,
    columnName: null,
    columnType: null,
    op: 'is_any_of',
    values: [],
    rangeMin: null,
    rangeMax: null,
    text: null,
  }
}

function group(id: string, children: QBGroup['children'] = []): QBGroup {
  return { kind: 'group', id, combinator: 'AND', not: false, children }
}

/**
 * root
 * ├── a        (condition)
 * ├── b        (condition)
 * └── nested   (group)
 *     └── c    (condition)
 */
function makeTree(): QBGroup {
  return group('root', [
    condition('a'),
    condition('b'),
    group('nested', [condition('c')]),
  ])
}

/** Child ids of the group with the given id, for readable assertions. */
function childIdsOf(tree: QBGroup, groupId: string): string[] {
  if (tree.id === groupId) return tree.children.map(child => child.id)
  for (const child of tree.children) {
    if (child.kind === 'group') {
      const found = childIdsOf(child, groupId)
      if (found.length > 0) return found
    }
  }
  return []
}

describe('readGroupDropZoneTarget', () => {
  it('reads the group a drop zone belongs to', () => {
    expect(readGroupDropZoneTarget(groupDropZoneData('g1'))).toBe('g1')
  })

  it.each([
    ['no data', undefined],
    ['null', null],
    ['a droppable that is not a group zone', { somethingElse: 'g1' }],
    ['a non-string group id', { groupId: 7 }],
  ])('returns null for %s', (_label, data) => {
    expect(readGroupDropZoneTarget(data)).toBeNull()
  })
})

describe('useQueryBuilderDrag', () => {
  /** Drives the hook from a controlled tree, the way the panel does. */
  function renderDrag(initialTree: QBGroup) {
    const onTreeChange = vi.fn()
    const { result } = renderHook(() => {
      const [tree, setTree] = useState(initialTree)
      const handleTreeChange = useCallback((next: QBGroup) => {
        onTreeChange(next)
        setTree(next)
      }, [])
      return { tree, handlers: useQueryBuilderDrag(tree, handleTreeChange) }
    })
    return {
      onTreeChange,
      get tree() {
        return result.current.tree
      },
      start: () => act(() => result.current.handlers.onDragStart()),
      over: (sourceId: string, target: unknown) =>
        act(() =>
          result.current.handlers.onDragOver(
            dragEvent(sourceId, target) as DragOverEvent,
          ),
        ),
      end: (canceled = false) =>
        act(() =>
          result.current.handlers.onDragEnd(
            dragEvent('ignored', null, canceled) as DragEndEvent,
          ),
        ),
    }
  }

  function dragEvent(sourceId: string, targetData: unknown, canceled = false) {
    return {
      operation: {
        source: { id: sourceId },
        target: targetData == null ? null : { data: targetData },
        canceled,
      },
    }
  }

  it('prepends the dragged node into the hovered group', () => {
    const drag = renderDrag(makeTree())

    drag.start()
    drag.over('a', groupDropZoneData('nested'))

    expect(childIdsOf(drag.tree, 'root')).toEqual(['b', 'nested'])
    expect(childIdsOf(drag.tree, 'nested')).toEqual(['a', 'c'])
  })

  it('follows the pointer from one group to the next', () => {
    const drag = renderDrag(makeTree())

    drag.start()
    drag.over('a', groupDropZoneData('nested'))
    drag.over('a', groupDropZoneData('root'))
    drag.end()

    expect(childIdsOf(drag.tree, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(drag.tree, 'nested')).toEqual(['c'])
  })

  it('leaves the tree alone while over something that is not a group zone', () => {
    const drag = renderDrag(makeTree())

    drag.start()
    drag.over('a', { somethingElse: 'nested' })
    drag.over('a', null)

    expect(drag.onTreeChange).not.toHaveBeenCalled()
  })

  it('keeps what the last drag over applied when the node is released', () => {
    const drag = renderDrag(makeTree())

    drag.start()
    drag.over('a', groupDropZoneData('nested'))
    drag.end()

    expect(childIdsOf(drag.tree, 'nested')).toEqual(['a', 'c'])
  })

  it('restores the pre-drag tree when the gesture is canceled', () => {
    const before = makeTree()
    const drag = renderDrag(before)

    drag.start()
    drag.over('a', groupDropZoneData('nested'))
    drag.end(true)

    // dnd-kit reverts its own state on cancel but never ours, so the
    // snapshot taken at drag start has to be put back.
    expect(drag.tree).toBe(before)
  })

  it('refuses to nest a group inside its own subtree', () => {
    const drag = renderDrag(makeTree())

    drag.start()
    drag.over('nested', groupDropZoneData('nested'))

    expect(childIdsOf(drag.tree, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(drag.tree, 'nested')).toEqual(['c'])
  })

  it('does not re-render when the node is already at the front of the group', () => {
    const before = makeTree()
    const drag = renderDrag(before)

    drag.start()
    drag.over('a', groupDropZoneData('root'))

    // `moveNodeIntoGroup` returns the tree by reference, so React bails out.
    expect(drag.onTreeChange).toHaveBeenCalledWith(before)
    expect(drag.tree).toBe(before)
  })
})

describe('group drop zone registration', () => {
  function makeContext(): QueryBuilderInternalContextType {
    return {
      columnModels: [],
      facetResults: [],
      onlyFacetedColumns: false,
      getColumnDisplayName: (name: string) => name,
      getValueDisplayName: rawQBValueDisplayName,
      addConditionAt: vi.fn(),
      addChildGroupAt: vi.fn(),
      clearGroupAt: vi.fn(),
      updateGroupAt: vi.fn(),
      removeGroupAt: vi.fn(),
      updateConditionAt: vi.fn(),
      removeConditionAt: vi.fn(),
    }
  }

  function renderTree(ui: ReactNode) {
    vi.mocked(useDroppable).mockClear()
    render(
      <QueryBuilderInternalContextProvider value={makeContext()}>
        {ui}
      </QueryBuilderInternalContextProvider>,
    )
    return vi.mocked(useDroppable).mock.calls.map(([input]) => input)
  }

  it('registers one zone per group, naming the group it belongs to', () => {
    const zones = renderTree(<FilterGroupNode group={makeTree()} isRoot />)

    expect(zones.map(zone => zone.id)).toEqual([
      groupDropZoneId('root'),
      groupDropZoneId('nested'),
    ])
    expect(zones.map(zone => readGroupDropZoneTarget(zone.data))).toEqual([
      'root',
      'nested',
    ])
  })

  it('ranks zones by depth so the innermost group wins', () => {
    const deep = group('root', [group('mid', [group('leaf')])])
    const zones = renderTree(<FilterGroupNode group={deep} isRoot />)

    expect(zones.map(zone => zone.collisionPriority)).toEqual([0, 1, 2])
  })

  it('hit-tests zones by pointer, not by overlap with the dragged box', () => {
    // `collisionPriority` replaces whatever ranking the detector returns, so
    // depth would otherwise let a deeper zone the dragged box merely overlaps
    // outrank the zone the pointer is actually inside.
    const zones = renderTree(<FilterGroupNode group={makeTree()} isRoot />)

    for (const zone of zones) {
      expect(zone.collisionDetector).toBe(pointerIntersection)
    }
  })
})
