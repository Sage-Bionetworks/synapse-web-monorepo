import { DragEndEvent, DragOverEvent } from '@dnd-kit/react'
import { useCallback, useMemo, useRef } from 'react'
import { moveNodeIntoGroup } from './queryBuilderOperations'
import { QBGroup } from './QueryBuilderTypes'

/** Droppable id for a group's drop zone, kept distinct from the group's own id. */
export function groupDropZoneId(groupId: string): string {
  return `${groupId}::dropzone`
}

const GROUP_ID_KEY = 'groupId'

/** `data` a group's drop zone carries so a drop can name its destination. */
export function groupDropZoneData(groupId: string) {
  return { [GROUP_ID_KEY]: groupId }
}

/**
 * The group a drop zone belongs to, or null when the drop landed on a
 * droppable that is not one — nothing else in the tree registers a zone, so
 * that is the signal to leave the tree alone.
 */
export function readGroupDropZoneTarget(data: unknown): string | null {
  if (data == null || typeof data !== 'object') return null
  const groupId: unknown = (data as Record<string, unknown>)[GROUP_ID_KEY]
  return typeof groupId === 'string' ? groupId : null
}

export type QueryBuilderDragHandlers = {
  onDragStart: () => void
  onDragOver: (event: DragOverEvent) => void
  onDragEnd: (event: DragEndEvent) => void
}

/**
 * Drag-and-drop for the Query Builder tree, as handlers for `DragDropProvider`.
 *
 * Every drag means "put this node in that group": groups register the only
 * drop zones, and a dropped node joins the group it was released over.
 */
export function useQueryBuilderDrag(
  tree: QBGroup,
  onTreeChange: (next: QBGroup) => void,
): QueryBuilderDragHandlers {
  const dropIntoHoveredGroup = useCallback(
    (operation: DragOverEvent['operation']) => {
      const { source, target } = operation
      if (source == null || target == null) return
      const groupId = readGroupDropZoneTarget(target.data)
      if (groupId == null) return
      onTreeChange(moveNodeIntoGroup(tree, String(source.id), groupId))
    },
    [tree, onTreeChange],
  )

  // The tree as it stood before the in-flight drag. `onDragOver` rewrites the
  // tree as the pointer moves, so this snapshot is the only way back if the
  // gesture is canceled — dnd-kit reverts its own state, never ours.
  const treeBeforeDrag = useRef<QBGroup | null>(null)

  const onDragStart = useCallback(() => {
    treeBeforeDrag.current = tree
  }, [tree])

  // Moving the node as the pointer crosses into a group is what keeps React
  // state and the DOM in step within the gesture, which is the contract
  // dnd-kit's sortables expect: rows animate to their new positions, and any
  // optimistic sorting stands down on seeing the indices already updated
  // rather than reordering the DOM behind React's back.
  const onDragOver = useCallback(
    (event: DragOverEvent) => dropIntoHoveredGroup(event.operation),
    [dropIntoHoveredGroup],
  )

  // The destination depends only on which group is under the pointer, and
  // `dragover` already fired for that group, so a release has nothing left to
  // apply — the tree already shows the result.
  const onDragEnd = useCallback(
    (event: DragEndEvent) => {
      const snapshot = treeBeforeDrag.current
      treeBeforeDrag.current = null
      if (event.operation.canceled && snapshot != null) onTreeChange(snapshot)
    },
    [onTreeChange],
  )

  return useMemo(
    () => ({ onDragStart, onDragOver, onDragEnd }),
    [onDragStart, onDragOver, onDragEnd],
  )
}
