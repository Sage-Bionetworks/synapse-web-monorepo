import { useCallback } from 'react'
import { EntityBundleRow } from '../EntityTreeTable'
import { TreeNode } from './useEntityTreeState'
import { useQueryClient } from '@tanstack/react-query'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import SynapseClient from '@/synapse-client'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { omit } from 'lodash-es'

const includeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

export const useTreeOperationsWithDirectFetch = (
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
  sortBy?: SortBy,
  sortDirection?: Direction,
) => {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  // Helper function to convert EntityHeaders to TreeNodes
  const createTreeNodes = useCallback(
    (
      entityHeaders: EntityHeader[],
      parentId: string,
      parentDepth: number,
    ): TreeNode[] => {
      return entityHeaders.map((eh: EntityHeader) => ({
        entityHeader: eh,
        parentId,
        depth: parentDepth + 1,
        isLeaf: !(
          convertToEntityType(eh.type) === EntityType.project ||
          convertToEntityType(eh.type) === EntityType.folder
        ),
      }))
    },
    [],
  )

  // Helper function to clean up loading state on error
  const cleanupLoadingState = useCallback(
    (entityId: string, pageToken?: string) => {
      setLoadingIds(prev => {
        const next = new Set(prev)
        next.delete(entityId)
        return next
      })

      if (pageToken !== undefined) {
        setLoadingPageTokens(prev => {
          return omit(prev, [entityId])
        })
      }
    },
    [setLoadingIds, setLoadingPageTokens],
  )

  // Helper function to fetch entity children
  const fetchEntityChildren = useCallback(
    async (entityId: string, pageToken?: string) => {
      const entityChildrenRequest = {
        parentId: entityId,
        includeTypes,
        ...(pageToken && { nextPageToken: pageToken }),
        sortBy,
        sortDirection,
      }

      return await queryClient.fetchQuery({
        queryKey: keyFactory.getEntityChildrenQueryKey(
          entityChildrenRequest,
          false,
        ),
        queryFn: () =>
          SynapseClient.getEntityChildren(entityChildrenRequest, accessToken),
      })
    },
    [queryClient, keyFactory, accessToken, sortBy, sortDirection],
  )

  // Callback to handle when children are loaded - moved before handleToggleExpanded to fix dependency order
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
          // Use explicit isPagination parameter for reliable detection
          const mergedChildren = [
            ...(node.children || []),
            ...childNodesWithDepth,
          ]

          // Merge children into the tree mapping while preserving existing
          // subtree entries for those children (so expanding deeper nodes
          // isn't lost when siblings are added).
          const mergedChildEntries = Object.fromEntries(
            mergedChildren.map(child => {
              const existing = prev[child.entityHeader.id]
              const merged = {
                ...existing,
                ...child,
                depth: child.depth,
                parentId: child.parentId,
                isLeaf: child.isLeaf,
              }

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
      // requested page has completed (this prevents any remaining loading state)
      setLoadingPageTokens(prev => {
        return omit(prev, [entityId])
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

  // Handler for expanding nodes - handles fetching children
  const handleToggleExpanded = useCallback(
    async (entityId: string) => {
      const isCurrentlyExpanded = expanded[entityId]
      setExpanded(prev => ({
        ...prev,
        [entityId]: !prev[entityId],
      }))

      // If expanding and children haven't been loaded yet, fetch them directly
      if (
        !isCurrentlyExpanded &&
        !loadedChildren.has(entityId) &&
        !loadingIds.has(entityId)
      ) {
        const node = tree[entityId]
        if (node && !node.isLeaf) {
          setLoadingIds(prev => new Set(prev).add(entityId))

          try {
            const children = await fetchEntityChildren(entityId)
            const childNodes = createTreeNodes(
              children.page,
              entityId,
              node.depth,
            )
            handleChildrenLoaded(entityId, childNodes, children.nextPageToken)
          } catch (error) {
            console.error(
              'Failed to fetch children for entity:',
              entityId,
              error,
            )
            cleanupLoadingState(entityId)
          }
        }
      }
    },
    [
      expanded,
      loadedChildren,
      tree,
      setExpanded,
      setLoadingIds,
      fetchEntityChildren,
      createTreeNodes,
      handleChildrenLoaded,
      cleanupLoadingState,
    ],
  )

  const loadMoreChildren = useCallback(
    async (entityId: string, pageToken?: string) => {
      // set which page token is being requested for this parent and mark loading
      setLoadingPageTokens(prev => ({ ...prev, [entityId]: pageToken }))
      setLoadingIds(prev => new Set(prev).add(entityId))

      try {
        const children = await fetchEntityChildren(entityId, pageToken)
        const node = tree[entityId]
        const childNodes = createTreeNodes(
          children.page,
          entityId,
          node ? node.depth : -1,
        )
        handleChildrenLoaded(entityId, childNodes, children.nextPageToken)
      } catch (error) {
        console.error(
          'Failed to load more children for entity:',
          entityId,
          error,
        )
        cleanupLoadingState(entityId, pageToken)
      }
    },
    [
      setLoadingPageTokens,
      setLoadingIds,
      fetchEntityChildren,
      createTreeNodes,
      tree,
      handleChildrenLoaded,
      cleanupLoadingState,
    ],
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
            entityId: '', // Empty placeholder for load more rows
            entityHeader: node.entityHeader,
            depth: node.depth + 1,
            isLeaf: true,
            parentId: node.entityHeader.id,
            versionNumber: node.entityHeader.versionNumber,
            isLoadMore: true,
            pageToken: nextToken,
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
