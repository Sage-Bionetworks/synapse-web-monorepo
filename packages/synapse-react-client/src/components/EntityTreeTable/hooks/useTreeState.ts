import { useState, useCallback, useEffect } from 'react'
import { SortingState } from '@tanstack/react-table'
import { EntityHeader } from '@sage-bionetworks/synapse-types'

export type TreeNode = {
  entityHeader: EntityHeader
  parentId?: string
  depth: number
  isLeaf: boolean
  children?: TreeNode[]
}

export const useTreeState = () => {
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

  const resetTreeData = useCallback(() => {
    setTree({})
    setLoadedChildren(new Set())
    setExpanded({})
    setNextPageTokens({})
    setLoadingPageTokens({})
    setLoadingIds(new Set())
    // Note: We don't reset sorting here - this is used when sorting changes
  }, [])

  useEffect(() => {
    resetTreeData()
  }, [sorting, resetTreeData])

  return {
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
    resetTreeData,
  }
}
