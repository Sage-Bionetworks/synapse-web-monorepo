import { useCallback } from 'react'
import { EntityBundleRow } from '../EntityTreeTable'
import { TreeNode } from './useTreeState'

export const useTreeOperations = (
  expanded: Record<string, boolean>,
  setExpanded: (value: React.SetStateAction<Record<string, boolean>>) => void,
  tree: Record<string, TreeNode>,
  setTree: (value: React.SetStateAction<Record<string, TreeNode>>) => void,
  loadedChildren: Set<string>,
  setLoadedChildren: (value: React.SetStateAction<Set<string>>) => void,
  loadingIds: Set<string>,
  setLoadingIds: (value: React.SetStateAction<Set<string>>) => void,
  setNextPageTokens: (
    value: React.SetStateAction<Record<string, string | undefined>>,
  ) => void,
  setLoadingPageTokens: (
    value: React.SetStateAction<Record<string, string | undefined>>,
  ) => void,
  loadingPageTokens: Record<string, string | undefined>,
  nextPageTokens: Record<string, string | undefined>,
) => {
  // Handler for expanding nodes
  const handleToggleExpanded = useCallback(
    (entityId: string) => {
      const isCurrentlyExpanded = expanded[entityId]
      setExpanded(prev => ({
        ...prev,
        [entityId]: !prev[entityId],
      }))

      // If expanding and children haven't been loaded yet, mark for loading
      if (!isCurrentlyExpanded && !loadedChildren.has(entityId)) {
        const node = tree[entityId]
        if (node && !node.isLeaf) {
          setLoadingIds(prev => new Set(prev).add(entityId))
        }
      }
    },
    [expanded, loadedChildren, tree, setExpanded, setLoadingIds],
  )

  // Callback to handle when children are loaded
  const handleChildrenLoaded = useCallback(
    (entityId: string, childNodes: TreeNode[], nextPageToken?: string) => {
      setTree(prev => {
        const node = prev[entityId]
        if (node) {
          // Set correct depth for child nodes
          const childNodesWithDepth = childNodes.map(child => ({
            ...child,
            depth: node.depth + 1,
          }))

          // Check if this is the first load (loading the first page) or pagination (loading more pages)
          // If we're loading a page token, it means we're paginating and should append
          // If no page token is being loaded, it's the first load and we should replace
          const isFirstLoad = !loadingPageTokens[entityId]
          const mergedChildren =
            isFirstLoad || !node.children
              ? childNodesWithDepth // Replace children on first load
              : [...node.children, ...childNodesWithDepth] // Append for pagination

          // Merge children into the tree mapping while preserving existing
          // subtree entries for those children (so expanding deeper nodes
          // isn't lost when siblings are added).
          const mergedChildEntries = Object.fromEntries(
            mergedChildren.map(child => {
              const existing = prev[child.entityHeader.id]
              const merged = existing
                ? {
                    ...existing,
                    ...child,
                    depth: child.depth,
                    parentId: child.parentId,
                    isLeaf: child.isLeaf,
                  }
                : child
              return [child.entityHeader.id, merged]
            }),
          )

          return {
            ...prev,
            [entityId]: {
              ...node,
              children: mergedChildren,
            },
            ...mergedChildEntries,
          }
        }
        return prev
      })

      // store nextPageToken for this parent (if any)
      setNextPageTokens(prev => ({ ...prev, [entityId]: nextPageToken }))
      // clear the loading page token entry for this parent since the
      // requested page has completed (this prevents the ChildLoader
      // from remaining mounted/considered "loading")
      setLoadingPageTokens(prev => {
        const next = { ...prev }
        delete next[entityId]
        return next
      })

      setLoadingIds(prev => {
        const next = new Set(prev)
        next.delete(entityId)
        return next
      })

      // mark as loaded only if there is no next page token (i.e., fully loaded)
      if (!nextPageToken) {
        setLoadedChildren(prev => new Set(prev).add(entityId))
      }
    },
    [
      loadingPageTokens,
      setTree,
      setNextPageTokens,
      setLoadingPageTokens,
      setLoadingIds,
      setLoadedChildren,
    ],
  )

  const loadMoreChildren = useCallback(
    (parentId: string, pageToken?: string) => {
      // set which page token is being requested for this parent and mark loading
      setLoadingPageTokens(prev => ({ ...prev, [parentId]: pageToken }))
      setLoadingIds(prev => new Set(prev).add(parentId))
    },
    [setLoadingPageTokens, setLoadingIds],
  )

  // Flatten tree for table rows. Track visited node ids to avoid cycles and
  // duplicate rows when the same entity appears multiple times in the
  // traversal (links, cycles, or bad/multiple parent relationships).
  const flattenTree = useCallback(
    (nodeId: string, visited = new Set<string>()): EntityBundleRow[] => {
      // Prevent revisiting the same node and producing duplicate rows
      if (visited.has(nodeId)) return []
      visited.add(nodeId)

      const node = tree[nodeId]
      if (!node) return []

      const rows: EntityBundleRow[] = [
        {
          entityId: node.entityHeader.id,
          entityHeader: node.entityHeader,
          depth: node.depth,
          isLeaf: node.isLeaf,
          parentId: node.parentId,
          versionNumber: node.entityHeader.versionNumber,
        },
      ]
      if (expanded[node.entityHeader.id] && node.children) {
        node.children.forEach(child => {
          rows.push(...flattenTree(child.entityHeader.id, visited))
        })
        // If there is a next page token for this node, add a synthetic 'Load more' row
        const nextToken = nextPageTokens[node.entityHeader.id]

        if (nextToken) {
          rows.push({
            entityId: `${node.entityHeader.id}::loadmore::${nextToken}`,
            entityHeader: node.entityHeader,
            depth: node.depth + 1,
            isLeaf: true,
            parentId: node.entityHeader.id,
            versionNumber: node.entityHeader.versionNumber,
            isLoadMore: true,
          })
        }
      }
      return rows
    },
    [expanded, tree, nextPageTokens],
  )

  return {
    handleToggleExpanded,
    handleChildrenLoaded,
    loadMoreChildren,
    flattenTree,
  }
}
