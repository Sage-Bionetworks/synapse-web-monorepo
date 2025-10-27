import { useState, useCallback, useEffect, useMemo } from 'react'
import { SortingState } from '@tanstack/react-table'
import { useQueryClient } from '@tanstack/react-query'
import { matchQuery } from '@tanstack/query-core'
import {
  EntityChildrenRequest,
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { useGetEntityHeader } from '@/synapse-queries'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { convertToEntityType } from '@/utils/functions/EntityTypeUtils'
import { useSynapseContext } from '@/utils/context/SynapseContext'

export type TreeNode = {
  entityHeader: EntityHeader
  parentId?: string
  depth: number
  isLeaf: boolean
  children?: TreeNode[]
}

const includeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

/**
 * Hook that manages all tree state and data initialization.
 */
export const useEntityTreeState = (
  rootId: string,
  expandRootByDefault: boolean,
  showRootNode: boolean,
) => {
  // Core state
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [tree, setTree] = useState<Record<string, TreeNode>>({})
  const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set())
  const [loadedChildren, setLoadedChildren] = useState<Set<string>>(new Set())
  const [nextPageTokens, setNextPageTokens] = useState<
    Record<string, string | undefined>
  >({})
  const [loadingPageTokens, setLoadingPageTokens] = useState<
    Record<string, string | undefined>
  >({})
  const [sorting, setSorting] = useState<SortingState>([])
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()
  const rootEntityQueryKey = useMemo(
    () => keyFactory.getEntityQueryKey(rootId),
    [keyFactory, rootId],
  )

  // Derive sorting parameters from state
  const { sortBy, sortDirection } = useMemo(() => {
    if (!sorting.length) return {}

    const firstSort = sorting[0]
    let sortBy: SortBy | undefined

    switch (firstSort.id) {
      case 'name':
        sortBy = SortBy.NAME
        break
      case 'createdOn':
        sortBy = SortBy.CREATED_ON
        break
      case 'modifiedOn':
        sortBy = SortBy.MODIFIED_ON
        break
      default:
        return {}
    }

    return {
      sortBy,
      sortDirection: firstSort.desc ? Direction.DESC : Direction.ASC,
    }
  }, [sorting])

  const rootChildrenRequest: EntityChildrenRequest = useMemo(() => {
    const baseRequest: EntityChildrenRequest = {
      parentId: rootId,
      includeTypes,
      sortBy,
      sortDirection,
    }

    return baseRequest
  }, [rootId, sortBy, sortDirection])

  const rootChildrenQueryKey = useMemo(
    () => keyFactory.getEntityChildrenQueryKey(rootChildrenRequest, false),
    [keyFactory, rootChildrenRequest],
  )

  // Reset tree data when sorting changes
  const resetTreeData = useCallback(() => {
    void queryClient.removeQueries({
      queryKey: rootChildrenQueryKey,
      exact: true,
    })

    setTree({})
    setLoadedChildren(new Set())
    setExpanded({})
    setNextPageTokens({})
    setLoadingPageTokens({})
    setLoadingIds(new Set())
  }, [queryClient, rootChildrenQueryKey])

  // Get root entity header
  const { data: rootHeader } = useGetEntityHeader(rootId)
  // Get root children - only fetch when we have header and haven't loaded children yet
  const shouldFetchChildren = !!rootHeader && !loadedChildren.has(rootId)
  const { data: rootChildren } = useGetEntityChildren(rootChildrenRequest, {
    enabled: shouldFetchChildren,
  })

  // Effect to reset data when sorting changes
  useEffect(() => {
    resetTreeData()
  }, [resetTreeData, sorting])

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe(event => {
      if (event?.type === 'updated' && event.action?.type === 'invalidate') {
        // Check if any entity in the tree was invalidated
        const entityIds = Object.keys(tree)
        for (const entityId of entityIds) {
          const entityQueryKey = keyFactory.getEntityQueryKey(entityId)
          if (
            matchQuery({ queryKey: entityQueryKey, exact: false }, event.query)
          ) {
            resetTreeData()
            return
          }
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [queryClient, rootEntityQueryKey, resetTreeData, tree, keyFactory])

  // Effect to initialize root node and its children
  useEffect(() => {
    if (rootHeader && rootChildren && !tree[rootId]) {
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

      // Create child entries for the tree
      const childEntries = Object.fromEntries(
        children.map(child => [child.entityHeader.id, child]),
      )

      // Set up the complete tree state in one go
      setTree({
        [rootId]: {
          entityHeader: rootHeader,
          depth: showRootNode ? 0 : -1,
          isLeaf: false,
          children,
        },
        ...childEntries,
      })

      // Set up pagination token
      const rootNext = rootChildren.nextPageToken
      setNextPageTokens({ [rootId]: rootNext })

      // Mark as loaded if there's no next page token
      if (!rootNext) {
        setLoadedChildren(new Set([rootId]))
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
    tree,
  ])

  return {
    // State
    expanded,
    setExpanded,
    tree,
    setTree,
    loadingIds,
    setLoadingIds,
    loadedChildren,
    setLoadedChildren,
    nextPageTokens,
    setNextPageTokens,
    loadingPageTokens,
    setLoadingPageTokens,
    sorting,
    setSorting,

    // Derived values
    sortBy,
    sortDirection,

    // Data
    rootHeader,
    rootChildren,

    // Actions
    resetTreeData,
  }
}
