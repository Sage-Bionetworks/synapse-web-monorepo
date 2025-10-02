import { useEffect, useRef } from 'react'
import { useGetEntityHeader } from '@/synapse-queries'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { TreeNode } from './useTreeState'

const includeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

export const useDataInitialization = (
  rootId: string,
  expandRootByDefault: boolean,
  showRootNode: boolean,
  loadedChildren: Set<string>,
  setTree: (value: React.SetStateAction<Record<string, TreeNode>>) => void,
  setNextPageTokens: (
    value: React.SetStateAction<Record<string, string | undefined>>,
  ) => void,
  setLoadedChildren: (value: React.SetStateAction<Set<string>>) => void,
  setExpanded: (value: React.SetStateAction<Record<string, boolean>>) => void,
  resetTreeData: () => void,
  sortBy?: SortBy,
  sortDirection?: Direction,
) => {
  // Track previous rootId to detect changes
  const prevRootIdRef = useRef<string | undefined>(undefined)

  // Reset tree state when rootId changes
  useEffect(() => {
    if (prevRootIdRef.current && prevRootIdRef.current !== rootId) {
      resetTreeData()
    }
    prevRootIdRef.current = rootId
  }, [rootId, resetTreeData])

  // Get root entity header
  const { data: rootHeader } = useGetEntityHeader(rootId)

  // Get root children
  const { data: rootChildren } = useGetEntityChildren(
    {
      parentId: rootId,
      includeTypes,
      sortBy,
      sortDirection,
    },
    { enabled: !!rootHeader },
  )

  // Initialize root node and its children
  useEffect(() => {
    if (rootHeader && rootChildren && !loadedChildren.has(rootId)) {
      // Build the children nodes from the response
      const children: TreeNode[] = rootChildren.page.map(
        (eh: EntityHeader) => ({
          entityHeader: eh,
          parentId: rootId,
          depth: showRootNode ? 1 : 0,
          isLeaf: !(
            convertToEntityType(eh.type) === EntityType.project ||
            convertToEntityType(eh.type) === EntityType.folder
          ),
        }),
      )

      // Initialize root and merge children into the tree
      setTree(prev => {
        // If we already have data for this root, replace it completely to avoid duplicates
        const existingRoot = prev[rootId]
        if (
          existingRoot &&
          existingRoot.children &&
          existingRoot.children.length > 0
        ) {
          return prev
        }

        const childEntries = Object.fromEntries(
          children.map(child => {
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
          [rootId]: {
            entityHeader: rootHeader,
            depth: showRootNode ? 0 : -1,
            isLeaf: false,
            children,
          },
          ...childEntries,
        }
      })

      // store nextPageToken for root (if any)
      // Only update if we don't already have a token (avoid overwriting updated pagination tokens)
      const rootNext = rootChildren.nextPageToken
      setNextPageTokens(prev => {
        // If we already have a token for this root, don't overwrite it
        // This prevents cached initial data from overwriting updated pagination tokens
        if (prev[rootId] !== undefined) {
          return prev
        }
        return { ...prev, [rootId]: rootNext }
      })

      // mark as loaded only if there is no next page token
      if (!rootNext) {
        setLoadedChildren(prev => new Set(prev).add(rootId))
      }

      // Expand root node by default if the flag is set
      if (expandRootByDefault) {
        setExpanded(prev => ({ ...prev, [rootId]: true }))
      }
    }
  }, [
    rootHeader,
    rootChildren,
    rootId,
    expandRootByDefault,
    showRootNode,
    sortBy,
    sortDirection,
    loadedChildren,
    setTree,
    setNextPageTokens,
    setLoadedChildren,
    setExpanded,
    resetTreeData,
  ])

  return {
    rootHeader,
    rootChildren,
  }
}
