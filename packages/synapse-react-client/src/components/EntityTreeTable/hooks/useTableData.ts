import { useMemo } from 'react'
import { EntityBundleRow } from '../EntityTreeTable'
import { TreeNode } from './useTreeState'

export const useTableData = (
  tree: Record<string, TreeNode>,
  rootId: string,
  showRootNode: boolean,
  expanded: Record<string, boolean>,
  nextPageTokens: Record<string, string | undefined>,
  flattenTree: (nodeId: string, visited?: Set<string>) => EntityBundleRow[],
) => {
  const rows: EntityBundleRow[] = useMemo(() => {
    const rootNode = tree[rootId]
    if (!rootNode) return []

    if (showRootNode) {
      return flattenTree(rootId, new Set<string>())
    } else {
      // If root node is not shown, start with its children
      const rows: EntityBundleRow[] = []
      if (expanded[rootId] && rootNode.children) {
        rootNode.children.forEach(child => {
          rows.push(...flattenTree(child.entityHeader.id, new Set<string>()))
        })
        // If there is a next page token for the root, add a synthetic 'Load more' row
        const nextToken = nextPageTokens[rootId]
        if (nextToken) {
          rows.push({
            entityId: '', // Empty placeholder for load more rows
            entityHeader: rootNode.entityHeader,
            depth: 0,
            isLeaf: true,
            parentId: rootId,
            versionNumber: rootNode.entityHeader.versionNumber,
            isLoadMore: true,
          })
        }
      }
      return rows
    }
  }, [tree, rootId, flattenTree, showRootNode, expanded, nextPageTokens])

  return rows
}
