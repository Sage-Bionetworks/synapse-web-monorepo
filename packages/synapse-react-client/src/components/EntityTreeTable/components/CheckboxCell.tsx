import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { Checkbox } from '@mui/material'
import { CellContext } from '@tanstack/react-table'
import { useMemo } from 'react'
import { EntityBundleRow } from '../EntityTreeTable'
import { TreeNode } from '../hooks/useEntityTreeState'
import { useEntityTreeTableContext } from './EntityTreeTableContext'

function getLoadedDescendants(
  tree: Record<string, TreeNode>,
  nodeId: string,
): TreeNode[] {
  const node = tree[nodeId]
  if (!node?.children) return []
  const result: TreeNode[] = []
  for (const child of node.children) {
    result.push(child)
    result.push(...getLoadedDescendants(tree, child.entityHeader.id))
  }
  return result
}

function isAnyAncestorSelected(
  tree: Record<string, TreeNode>,
  parentId: string | undefined,
  selectedIds: Set<string>,
): boolean {
  let currentId = parentId
  while (currentId) {
    if (selectedIds.has(currentId)) return true
    currentId = tree[currentId]?.parentId
  }
  return false
}

export const CheckboxCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { selectedIds, onToggleSelection, tree } = useEntityTreeTableContext()
  const { entityHeader, isLoadMore, isLeaf, parentId } = row.original

  const entityId = entityHeader.id
  const entityType = convertToEntityType(entityHeader.type)
  const isSelected = selectedIds?.has(entityId) ?? false

  const isCascadeSelected = useMemo(
    () =>
      !isSelected && tree && selectedIds
        ? isAnyAncestorSelected(tree, parentId, selectedIds)
        : false,
    [isSelected, tree, parentId, selectedIds],
  )

  if (isLoadMore || !onToggleSelection) return null

  const handleChange = () => {
    onToggleSelection(entityId, entityType, entityHeader.versionNumber)

    // For folders, cascade to all loaded descendants
    if (!isLeaf && tree) {
      const isSelecting = !isSelected
      for (const descendant of getLoadedDescendants(tree, entityId)) {
        const descendantIsSelected =
          selectedIds?.has(descendant.entityHeader.id) ?? false
        if (isSelecting !== descendantIsSelected) {
          onToggleSelection(
            descendant.entityHeader.id,
            convertToEntityType(descendant.entityHeader.type),
            descendant.entityHeader.versionNumber,
          )
        }
      }
    }
  }

  return (
    <Checkbox
      inputProps={{ 'aria-label': `Select ${entityId}` }}
      checked={isSelected || isCascadeSelected}
      onChange={isCascadeSelected ? undefined : handleChange}
    />
  )
}
