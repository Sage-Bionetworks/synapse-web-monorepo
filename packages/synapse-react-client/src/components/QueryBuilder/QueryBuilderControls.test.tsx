import { act, render } from '@testing-library/react'
import { ReactNode, useState } from 'react'
import { vi } from 'vitest'
import { QueryBuilderControls } from './QueryBuilderControls'
import { QBCondition, QBGroup } from './QueryBuilderTypes'

/**
 * `onDragEnd` as handed to `DragDropProvider` by the component under test.
 * Captured by the `@dnd-kit/react` mock so tests can end a drag without
 * needing real pointer input or element geometry (jsdom has neither).
 */
let capturedOnDragEnd: ((event: DragEndEventLike) => void) | undefined

type DragEndEventLike = {
  operation: {
    source: { id: string } | null
    target: TargetLike | null
    canceled: boolean
    /** Pointer position; only `y` matters to the handler. */
    position: { current: { x: number; y: number } }
    shape: null
  }
}
/**
 * A drop zone. Only groups register one, and each names its group in
 * `data.groupId`; `shape.center.y` is what the handler compares the pointer
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
    onDragEnd: (event: DragEndEventLike) => void
  }) => {
    capturedOnDragEnd = props.onDragEnd
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

/**
 * End a drag of `sourceId` over `target`. `pastMidpoint` places the pointer
 * in the lower half of the drop zone, which appends to the group rather than
 * prepending.
 */
function endDrag(
  sourceId: string,
  target: TargetLike,
  { pastMidpoint = false, canceled = false } = {},
) {
  const centerY = 100
  act(() => {
    capturedOnDragEnd?.({
      operation: {
        source: { id: sourceId },
        target: { shape: { center: { x: 0, y: centerY } }, ...target },
        canceled,
        position: { current: { x: 0, y: pastMidpoint ? centerY + 10 : 0 } },
        shape: null,
      },
    })
  })
}

/** A group's drop zone, as `FilterGroupNode` registers it. */
function groupDropZone(groupId: string): TargetLike {
  return { id: `${groupId}::dropzone`, data: { groupId } }
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
  capturedOnDragEnd = undefined
})

describe('QueryBuilderControls drag and drop', () => {
  function nextTree(onTreeChange: ReturnType<typeof vi.fn>): QBGroup {
    expect(onTreeChange).toHaveBeenCalledTimes(1)
    return onTreeChange.mock.calls[0][0] as QBGroup
  }

  it('moves a condition into a nested group, at the front from its upper half', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('a', groupDropZone('nested'))

    const next = nextTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['a', 'c'])
  })

  it('appends into a nested group when dropped on its lower half', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('a', groupDropZone('nested'), { pastMidpoint: true })

    const next = nextTree(onTreeChange)
    expect(childIdsOf(next, 'nested')).toEqual(['c', 'a'])
  })

  it('drops into an empty group', () => {
    const tree = makeTree()
    const nested = tree.children[2] as QBGroup
    nested.children = []
    const { onTreeChange } = renderControls(tree)

    endDrag('a', groupDropZone('nested'))

    const next = nextTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['a'])
  })

  it('moves a condition out of a nested group back to the root', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('c', groupDropZone('root'))

    const next = nextTree(onTreeChange)
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

    endDrag('other', groupDropZone('nested'))

    const next = nextTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['other', 'c'])
  })

  it('ignores a drop onto a condition, which is never a target', () => {
    const { onTreeChange } = renderControls(makeTree())

    // Conditions register no drop zone, so a target without a `groupId` in
    // its data cannot be resolved to a destination.
    endDrag('a', { id: 'c' })

    expect(onTreeChange).not.toHaveBeenCalled()
  })

  it('ignores a canceled drag', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('a', groupDropZone('nested'), { canceled: true })

    expect(onTreeChange).not.toHaveBeenCalled()
  })

  it('ignores a drop naming a group that is not in the tree', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('a', groupDropZone('ghost'))

    // `moveNodeIntoGroup` returns the tree by reference, so React bails out.
    expect(onTreeChange).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'root' }),
    )
    expect(childIdsOf(nextTree(onTreeChange), 'root')).toEqual([
      'a',
      'b',
      'nested',
    ])
  })

  it('refuses to nest a group inside its own subtree', () => {
    const { onTreeChange } = renderControls(makeTree())

    endDrag('nested', groupDropZone('nested'))

    const next = nextTree(onTreeChange)
    expect(childIdsOf(next, 'root')).toEqual(['a', 'b', 'nested'])
    expect(childIdsOf(next, 'nested')).toEqual(['c'])
  })

  it('leaves the tree untouched when the node is dropped where it already is', () => {
    const tree = makeTree()
    const { onTreeChange } = renderControls(tree)

    endDrag('a', groupDropZone('root'))

    // `moveNode` returns the tree by reference when the move is a no-op, so
    // React bails out of the re-render rather than rebuilding every row.
    expect(onTreeChange).toHaveBeenCalledWith(tree)
  })
})
