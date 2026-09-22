import { act, render } from '@testing-library/react'
import { ReactNode, useState } from 'react'
import { vi } from 'vitest'
import { QueryBuilderControls } from './QueryBuilderControls'
import { groupDropZoneId } from './queryBuilderDnd'
import { QBCondition, QBGroup } from './QueryBuilderTypes'

/**
 * The drag handlers `QueryBuilderControls` hands to `DragDropProvider`,
 * captured by the `@dnd-kit/react` mock so tests can drive a gesture without
 * pointer input or element geometry (jsdom has neither).
 */
let handlers: {
  onDragStart?: () => void
  onDragOver?: (event: DragEventLike) => void
  onDragEnd?: (event: DragEventLike) => void
} = {}

type DragEventLike = {
  operation: {
    source: { id: string } | null
    target: TargetLike | null
    canceled: boolean
    /** Pointer position; only `y` matters to the handlers. */
    position: { current: { x: number; y: number } }
    shape: null
  }
}
/**
 * A drop zone. Only groups register one, and each names its group in
 * `data.groupId`; `shape.center.y` is what the handlers compare the pointer
 * against to pick an end of that group's children.
 */
type TargetLike = {
  id: string
  data?: Record<string, unknown>
  shape?: { center: { x: number; y: number } }
}

vi.mock('@dnd-kit/react', () => ({
  DragDropProvider: (props: {
    children: ReactNode
    onDragStart: () => void
    onDragOver: (event: DragEventLike) => void
    onDragEnd: (event: DragEventLike) => void
  }) => {
    handlers = {
      onDragStart: props.onDragStart,
      onDragOver: props.onDragOver,
      onDragEnd: props.onDragEnd,
    }
    return props.children
  },
  useDroppable: () => ({ ref: vi.fn(), isDropTarget: false }),
}))

vi.mock('@dnd-kit/react/sortable', () => ({
  useSortable: () => ({
    ref: vi.fn(),
    handleRef: vi.fn(),
    isDragSource: false,
  }),
}))

vi.mock('./useQBFacetSourceMetadata', () => ({
  useQBFacetSourceMetadata: () => ({ columnModels: [], facetResults: [] }),
}))

vi.mock('./useQBCombinedSql', () => ({
  useQBCombinedSql: () => ({ data: undefined, isPending: false, error: null }),
}))

vi.mock('../QueryContext', () => ({
  useQueryContext: () => ({
    executeQueryRequest: vi.fn(),
    currentQueryRequest: { query: {} },
  }),
}))

vi.mock('../QueryVisualizationWrapper', () => ({
  useQueryVisualizationContext: () => ({
    getColumnDisplayName: (name: string) => name,
  }),
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

/**
 * root
 * ├── a        (condition)
 * ├── b        (condition)
 * └── nested   (group)
 *     └── c    (condition)
 */
function makeTree(): QBGroup {
  return {
    kind: 'group',
    id: 'root',
    combinator: 'AND',
    not: false,
    children: [
      condition('a'),
      condition('b'),
      {
        kind: 'group',
        id: 'nested',
        combinator: 'AND',
        not: false,
        children: [condition('c')],
      },
    ],
  }
}

function renderControls(initialTree: QBGroup) {
  const onTreeChange = vi.fn()
  function Harness() {
    const [tree, setTree] = useState(initialTree)
    return (
      <QueryBuilderControls
        tree={tree}
        onTreeChange={next => {
          onTreeChange(next)
          setTree(next)
        }}
      />
    )
  }
  render(<Harness />)
  return { onTreeChange }
}

const DROP_ZONE_CENTER_Y = 100

/**
 * An operation for `sourceId` hovering `target`. `pastMidpoint` places the
 * pointer in the lower half of the drop zone, which appends to the group
 * rather than prepending.
 */
function operation(
  sourceId: string,
  target: TargetLike,
  { pastMidpoint = false, canceled = false } = {},
): DragEventLike['operation'] {
  return {
    source: { id: sourceId },
    target: { shape: { center: { x: 0, y: DROP_ZONE_CENTER_Y } }, ...target },
    canceled,
    position: {
      current: { x: 0, y: pastMidpoint ? DROP_ZONE_CENTER_Y + 10 : 0 },
    },
    shape: null,
  }
}

function startDrag() {
  act(() => handlers.onDragStart?.())
}

function dragOver(...args: Parameters<typeof operation>) {
  act(() => handlers.onDragOver?.({ operation: operation(...args) }))
}

function drop(...args: Parameters<typeof operation>) {
  act(() => handlers.onDragEnd?.({ operation: operation(...args) }))
}

/** A whole gesture: press, hover a zone, release there. */
function dragAndDrop(...args: Parameters<typeof operation>) {
  startDrag()
  dragOver(...args)
  drop(...args)
}

/** A group's drop zone, as `FilterGroupNode` registers it. */
function groupDropZone(groupId: string): TargetLike {
  return { id: groupDropZoneId(groupId), data: { groupId } }
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

beforeEach(() => {
  handlers = {}
})

describe('QueryBuilderControls drag and drop', () => {
  /**
   * The tree as it stands after the gesture. A gesture emits on both drag
   * over and release, so only the last one describes where things ended up.
   */
  function latestTree(onTreeChange: ReturnType<typeof vi.fn>): QBGroup {
    expect(onTreeChange).toHaveBeenCalled()
    return onTreeChange.mock.lastCall?.[0] as QBGroup
  }

  it('moves a condition into a nested group, at the front from its upper half', () => {
    const { onTreeChange } = renderControls(makeTree())

    dragAndDrop('a', groupDropZone('nested'))

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['a', 'c'])
  })

  it('appends into a nested group when dropped on its lower half', () => {
    const { onTreeChange } = renderControls(makeTree())

    dragAndDrop('a', groupDropZone('nested'), { pastMidpoint: true })

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'nested')).toEqual(['c', 'a'])
  })

  it('drops into an empty group', () => {
    const tree = makeTree()
    const nested = tree.children[2] as QBGroup
    nested.children = []
    const { onTreeChange } = renderControls(tree)

    dragAndDrop('a', groupDropZone('nested'))

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['a'])
  })

  it('moves a condition out of a nested group back to the root', () => {
    const { onTreeChange } = renderControls(makeTree())

    dragAndDrop('c', groupDropZone('root'))

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['c', 'a', 'b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual([])
  })

  it('nests a group inside another group', () => {
    const tree = makeTree()
    tree.children = [
      ...tree.children,
      {
        kind: 'group',
        id: 'other',
        combinator: 'AND',
        not: false,
        children: [],
      },
    ]
    const { onTreeChange } = renderControls(tree)

    dragAndDrop('other', groupDropZone('nested'))

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['other', 'c'])
  })

  it('ignores a drop onto a condition, which is never a target', () => {
    const { onTreeChange } = renderControls(makeTree())

    // Conditions register no drop zone, so a target without a `groupId` in
    // its data cannot be resolved to a destination.
    dragAndDrop('a', { id: 'c' })

    expect(onTreeChange).not.toHaveBeenCalled()
  })

  it('moves the node on drag over, before the pointer is released', () => {
    const { onTreeChange } = renderControls(makeTree())

    startDrag()
    dragOver('a', groupDropZone('nested'))

    // Keeping React state in step with the DOM within the gesture is what
    // lets dnd-kit animate the rows and keeps it from reordering the DOM
    // itself.
    expect(childIdsOf(latestTree(onTreeChange), 'nested')).toEqual(['a', 'c'])
  })

  it('restores the pre-drag tree when the gesture is canceled', () => {
    const tree = makeTree()
    const { onTreeChange } = renderControls(tree)

    startDrag()
    dragOver('a', groupDropZone('nested'))
    drop('a', groupDropZone('nested'), { canceled: true })

    // dnd-kit reverts its own state on cancel but never ours, so the
    // snapshot taken at drag start has to be put back.
    expect(latestTree(onTreeChange)).toBe(tree)
    expect(childIdsOf(latestTree(onTreeChange), 'root')).toEqual([
      'a',
      'b',
      'nested',
    ])
  })

  it('takes the release position over the last drag over', () => {
    const { onTreeChange } = renderControls(makeTree())

    // `dragover` only fires when the target changes, so crossing a group's
    // midpoint without leaving it produces no event; the release decides.
    startDrag()
    dragOver('a', groupDropZone('nested'))
    drop('a', groupDropZone('nested'), { pastMidpoint: true })

    expect(childIdsOf(latestTree(onTreeChange), 'nested')).toEqual(['c', 'a'])
  })

  it('ignores a drop naming a group that is not in the tree', () => {
    const { onTreeChange } = renderControls(makeTree())

    dragAndDrop('a', groupDropZone('ghost'))

    // `moveNodeIntoGroup` returns the tree by reference, so React bails out.
    expect(childIdsOf(latestTree(onTreeChange), 'root')).toEqual([
      'a',
      'b',
      'nested',
    ])
  })

  it('refuses to nest a group inside its own subtree', () => {
    const { onTreeChange } = renderControls(makeTree())

    dragAndDrop('nested', groupDropZone('nested'))

    const next = latestTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['c'])
  })

  it('leaves the tree untouched when the node is dropped where it already is', () => {
    const tree = makeTree()
    const { onTreeChange } = renderControls(tree)

    dragAndDrop('a', groupDropZone('root'))

    // `moveNode` returns the tree by reference when the move is a no-op, so
    // React bails out of the re-render rather than rebuilding every row.
    expect(onTreeChange).toHaveBeenCalledWith(tree)
  })
})
