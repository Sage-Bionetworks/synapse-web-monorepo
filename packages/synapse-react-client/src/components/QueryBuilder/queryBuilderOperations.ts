import { newQBNodeId } from './queryBuilderId'
import {
  isQBGroup,
  QBCombinator,
  QBCondition,
  QBConditionOp,
  QBGroup,
  QBNode,
} from './QueryBuilderTypes'

// -----------------------------------------------------------------------------
// Factories
// -----------------------------------------------------------------------------

/**
 * The initial `op` for a brand-new condition. When the user hasn't picked a
 * column yet the choice is arbitrary — the row's operator picker replaces it
 * as soon as the column is chosen — but we still need a valid discriminant
 * so the UI can render. `is_any_of` renders as a pill-based value input, which
 * degrades gracefully for a blank row.
 */
export function defaultOpForColumnType(
  columnType: string | null,
): QBConditionOp {
  if (columnType == null) return 'is_any_of'
  if (columnType.endsWith('_LIST')) return 'is_any_of'
  switch (columnType) {
    case 'INTEGER':
    case 'DOUBLE':
    case 'DATE':
    case 'DATE_TIME':
      return 'between'
    case 'BOOLEAN':
      return 'equal'
    case 'STRING':
      return 'contains'
    default:
      return 'is_any_of'
  }
}

export function newBlankCondition(
  columnName: string | null,
  columnType: string | null,
): QBCondition {
  return {
    kind: 'condition',
    id: newQBNodeId(),
    columnName,
    columnType,
    op: defaultOpForColumnType(columnType),
    values: [],
    rangeMin: null,
    rangeMax: null,
    text: null,
  }
}

export function newEmptyGroup(combinator: QBCombinator = 'AND'): QBGroup {
  return {
    kind: 'group',
    id: newQBNodeId(),
    combinator,
    not: false,
    children: [],
  }
}

/** Root group with a single blank condition — the QB's default startup state. */
export function defaultQBGroup(): QBGroup {
  const root = newEmptyGroup()
  return { ...root, children: [newBlankCondition(null, null)] }
}

// -----------------------------------------------------------------------------
// Add / clear
// -----------------------------------------------------------------------------

export function addConditionToGroup(
  root: QBGroup,
  targetGroupId: string,
  columnName: string | null,
  columnType: string | null,
): QBGroup {
  const condition = newBlankCondition(columnName, columnType)
  return prependChild(root, targetGroupId, condition)
}

export function addChildGroup(root: QBGroup, targetGroupId: string): QBGroup {
  return prependChild(root, targetGroupId, newEmptyGroup())
}

/**
 * Insert `node` into the group identified by `targetGroupId` at
 * `targetIndex`. Semantics match `Array.prototype.splice(targetIndex, 0, node)`.
 * If the group can't be found, returns the tree unchanged.
 */
export function insertNodeAt(
  root: QBGroup,
  targetGroupId: string,
  targetIndex: number,
  node: QBNode,
): QBGroup {
  return mapGroup(root, targetGroupId, group => {
    const clamped = clampInsertionIndex(group.children.length, targetIndex)
    const nextChildren = [
      ...group.children.slice(0, clamped),
      node,
      ...group.children.slice(clamped),
    ]
    return { ...group, children: nextChildren }
  })
}

/**
 * Empty the children of the group identified by `nodeId`. If the id doesn't
 * match any group, returns the tree unchanged.
 */
export function clearGroup(root: QBGroup, nodeId: string): QBGroup {
  return mapGroup(root, nodeId, group => ({ ...group, children: [] }))
}

// -----------------------------------------------------------------------------
// Update
// -----------------------------------------------------------------------------

export function updateCondition(
  root: QBGroup,
  nodeId: string,
  patch: Partial<Omit<QBCondition, 'kind' | 'id'>>,
): QBGroup {
  return mapNode(root, nodeId, node =>
    node.kind === 'condition' ? { ...node, ...patch } : node,
  )
}

export function updateGroup(
  root: QBGroup,
  nodeId: string,
  patch: Partial<Omit<QBGroup, 'kind' | 'id' | 'children'>>,
): QBGroup {
  return mapGroup(root, nodeId, group => ({ ...group, ...patch }))
}

// -----------------------------------------------------------------------------
// Remove
// -----------------------------------------------------------------------------

/**
 * Remove the node identified by `nodeId` from the tree. The root cannot be
 * removed — a request to remove the root returns the tree unchanged.
 */
export function removeNode(root: QBGroup, nodeId: string): QBGroup {
  if (root.id === nodeId) return root
  const location = findLocation(root, nodeId)
  if (location == null) return root
  return mapGroup(root, location.parentId, group => ({
    ...group,
    children: group.children.filter(child => child.id !== nodeId),
  }))
}

// -----------------------------------------------------------------------------
// Move (DnD)
// -----------------------------------------------------------------------------

/**
 * Move the node identified by `nodeId` to `targetIndex` of the group
 * identified by `targetGroupId`. `targetIndex` is the insertion index in the
 * target group's children *after* the node has been removed from its current
 * position — same semantics as `Array.prototype.splice(targetIndex, 0, node)`.
 *
 * Returns the tree unchanged if any of the following invariants would be
 * violated:
 * - `nodeId` is the root (root cannot be moved).
 * - `targetGroupId` is `nodeId` (a node can't be dropped into itself).
 * - `targetGroupId` is a descendant of `nodeId` (would create a cycle).
 * - The move is a no-op (target group + index equals current group + index).
 */
export function moveNode(
  root: QBGroup,
  nodeId: string,
  targetGroupId: string,
  targetIndex: number,
): QBGroup {
  if (nodeId === root.id) return root
  if (nodeId === targetGroupId) return root

  const source = findLocation(root, nodeId)
  if (source == null) return root

  const targetGroup = findGroup(root, targetGroupId)
  if (targetGroup == null) return root

  if (
    source.node.kind === 'group' &&
    containsDescendant(source.node, targetGroupId)
  ) {
    return root
  }

  const isSameParent = source.parentId === targetGroupId
  const clampedTarget = clampInsertionIndex(
    // When moving within the same parent, the effective target-array length
    // after the node is removed is one shorter.
    isSameParent
      ? targetGroup.children.length - 1
      : targetGroup.children.length,
    targetIndex,
  )
  if (isSameParent && clampedTarget === source.index) return root

  const withoutSource = mapGroup(root, source.parentId, group => ({
    ...group,
    children: group.children.filter(child => child.id !== nodeId),
  }))
  return insertNodeAt(withoutSource, targetGroupId, clampedTarget, source.node)
}

// -----------------------------------------------------------------------------
// Query helpers
// -----------------------------------------------------------------------------

/**
 * Find every node in the tree matching a predicate. Root is included.
 */
export function findNodes(
  root: QBGroup,
  predicate: (node: QBNode) => boolean,
): QBNode[] {
  const acc: QBNode[] = []
  const visit = (node: QBNode) => {
    if (predicate(node)) acc.push(node)
    if (isQBGroup(node)) node.children.forEach(visit)
  }
  visit(root)
  return acc
}

/**
 * Whether `root` (or any descendant) contains a condition with a resolvable,
 * complete filter — matches the design's "at least one complete condition"
 * requirement for `hasResettableFilters`.
 */
export function hasCompleteCondition(root: QBGroup): boolean {
  return findNodes(root, node => node.kind === 'condition').some(condition =>
    isConditionComplete(condition as QBCondition),
  )
}

function isConditionComplete(condition: QBCondition): boolean {
  if (condition.columnName == null) return false
  switch (condition.op) {
    case 'has_value':
    case 'no_value':
      return true
    case 'is_any_of':
    case 'is_all_of':
    case 'equal':
    case 'not_equal':
      return condition.values.length > 0
    case 'between':
      return !isBlank(condition.rangeMin) && !isBlank(condition.rangeMax)
    case 'gt':
    case 'gte':
      return !isBlank(condition.rangeMin)
    case 'lt':
    case 'lte':
      return !isBlank(condition.rangeMax)
    case 'contains':
    case 'starts_with':
    case 'ends_with':
    case 'is_exactly':
      return !isBlank(condition.text)
    default:
      condition.op satisfies never
      return false
  }
}

function isBlank(value: string | null | undefined): boolean {
  return value == null || value === ''
}

// -----------------------------------------------------------------------------
// Internal traversal helpers
// -----------------------------------------------------------------------------

function prependChild(root: QBGroup, groupId: string, node: QBNode): QBGroup {
  return mapGroup(root, groupId, group => ({
    ...group,
    children: [node, ...group.children],
  }))
}

/**
 * Replace the group identified by `targetId` with `transform(group)`. If the
 * id is not found, returns the tree unchanged (by reference).
 */
function mapGroup(
  root: QBGroup,
  targetId: string,
  transform: (group: QBGroup) => QBGroup,
): QBGroup {
  return mapNode(root, targetId, node =>
    node.kind === 'group' ? transform(node) : node,
  )
}

/**
 * Replace the node identified by `targetId` with `transform(node)`. If the id
 * matches root, the transformed root is returned. Structural sharing: only
 * the ancestor chain of the changed node is rebuilt; unaffected subtrees are
 * kept by reference.
 */
function mapNode(
  root: QBGroup,
  targetId: string,
  transform: (node: QBNode) => QBNode,
): QBGroup {
  if (root.id === targetId) {
    const next = transform(root)
    return isQBGroup(next) ? next : root
  }
  let changed = false
  const nextChildren = root.children.map(child => {
    if (child.id === targetId) {
      const replaced = transform(child)
      if (replaced !== child) changed = true
      return replaced
    }
    if (isQBGroup(child)) {
      const replaced = mapNode(child, targetId, transform)
      if (replaced !== child) changed = true
      return replaced
    }
    return child
  })
  return changed ? { ...root, children: nextChildren } : root
}

type QBNodeLocation = {
  node: QBNode
  parentId: string
  index: number
}

function findLocation(root: QBGroup, targetId: string): QBNodeLocation | null {
  const visit = (group: QBGroup): QBNodeLocation | null => {
    for (let index = 0; index < group.children.length; index++) {
      const child = group.children[index]
      if (child.id === targetId) {
        return { node: child, parentId: group.id, index }
      }
      if (isQBGroup(child)) {
        const nested = visit(child)
        if (nested) return nested
      }
    }
    return null
  }
  return visit(root)
}

function findGroup(root: QBGroup, targetId: string): QBGroup | null {
  if (root.id === targetId) return root
  for (const child of root.children) {
    if (isQBGroup(child)) {
      const nested = findGroup(child, targetId)
      if (nested) return nested
    }
  }
  return null
}

function containsDescendant(group: QBGroup, targetId: string): boolean {
  for (const child of group.children) {
    if (child.id === targetId) return true
    if (isQBGroup(child) && containsDescendant(child, targetId)) return true
  }
  return false
}

function clampInsertionIndex(length: number, index: number): number {
  if (!Number.isFinite(index) || index < 0) return 0
  return Math.min(length, Math.trunc(index))
}
