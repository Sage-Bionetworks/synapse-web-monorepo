import { Plugins } from '@dnd-kit/abstract'
import { OptimisticSortingPlugin } from '@dnd-kit/dom/sortable'

/**
 * Sortable plugin set for every draggable node in the Query Builder tree.
 *
 * Pass as `useSortable({ plugins: withoutOptimisticSorting })`.
 */
export function withoutOptimisticSorting(defaults: Plugins): Plugins {
  // `OptimisticSortingPlugin` previews a sort by physically relocating the
  // dragged element with `insertAdjacentElement`. Within one list that is a
  // sibling reorder React can reconcile, but the QB tree nests lists, so a
  // drop into another group moves the node under a different container
  // element — React's next commit then calls `removeChild` on the parent it
  // still believes owns the node and throws. React owns the DOM here; the
  // drop target is highlighted instead of rows shuffling live.
  return defaults.filter(plugin => plugin !== OptimisticSortingPlugin)
}

/** Droppable id for a group's drop zone, kept distinct from the group's own id. */
export function groupDropZoneId(groupId: string): string {
  return `${groupId}::dropzone`
}
