import { renderHook, act } from '@testing-library/react'
import { useTreeOperations } from './useTreeOperations'
import { TreeNode } from './useTreeState'
import { EntityHeader } from '@sage-bionetworks/synapse-types'

const mockEntityHeader: EntityHeader = {
  id: 'syn123',
  name: 'Root Entity',
  type: 'org.sagebionetworks.repo.model.Project',
  versionNumber: 1,
  versionLabel: 'v1',
  benefactorId: 123,
  createdOn: '2023-01-01T00:00:00.000Z',
  modifiedOn: '2023-01-01T00:00:00.000Z',
  createdBy: 'user1',
  modifiedBy: 'user1',
  isLatestVersion: true,
}

const mockChildHeader: EntityHeader = {
  id: 'syn456',
  name: 'Child Entity',
  type: 'org.sagebionetworks.repo.model.FileEntity',
  versionNumber: 1,
  versionLabel: 'v1',
  benefactorId: 123,
  createdOn: '2023-01-01T00:00:00.000Z',
  modifiedOn: '2023-01-01T00:00:00.000Z',
  createdBy: 'user1',
  modifiedBy: 'user1',
  isLatestVersion: true,
}

const mockRootNode: TreeNode = {
  entityHeader: mockEntityHeader,
  depth: 0,
  isLeaf: false,
}

const mockChildNode: TreeNode = {
  entityHeader: mockChildHeader,
  parentId: 'syn123',
  depth: 1,
  isLeaf: true,
}

describe('useTreeOperations', () => {
  const mockSetExpanded = vi.fn()
  const mockSetTree = vi.fn()
  const mockSetLoadedChildren = vi.fn()
  const mockSetLoadingIds = vi.fn()
  const mockSetNextPageTokens = vi.fn()
  const mockSetLoadingPageTokens = vi.fn()

  const defaultProps = {
    expanded: {},
    setExpanded: mockSetExpanded,
    tree: { syn123: mockRootNode },
    setTree: mockSetTree,
    loadedChildren: new Set<string>(),
    setLoadedChildren: mockSetLoadedChildren,
    loadingIds: new Set<string>(),
    setLoadingIds: mockSetLoadingIds,
    setNextPageTokens: mockSetNextPageTokens,
    setLoadingPageTokens: mockSetLoadingPageTokens,
    loadingPageTokens: {},
    nextPageTokens: {},
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('handleToggleExpanded', () => {
    it('should toggle expanded state', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      act(() => {
        result.current.handleToggleExpanded('syn123')
      })

      expect(mockSetExpanded).toHaveBeenCalledWith(expect.any(Function))

      // Test the function passed to setExpanded
      const expandedSetterCall = mockSetExpanded.mock.calls[0][0]
      const newExpanded = expandedSetterCall({})
      expect(newExpanded).toEqual({ syn123: true })
    })

    it('should mark node for loading when expanding and children not loaded', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          { syn123: false }, // expanded
          mockSetExpanded,
          { syn123: mockRootNode }, // tree
          mockSetTree,
          new Set(), // loadedChildren (empty)
          mockSetLoadedChildren,
          new Set(), // loadingIds
          mockSetLoadingIds,
          mockSetNextPageTokens,
          mockSetLoadingPageTokens,
          {},
          {},
        ),
      )

      act(() => {
        result.current.handleToggleExpanded('syn123')
      })

      expect(mockSetLoadingIds).toHaveBeenCalledWith(expect.any(Function))
    })

    it('should not mark node for loading when children already loaded', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          { syn123: false }, // expanded
          mockSetExpanded,
          { syn123: mockRootNode }, // tree
          mockSetTree,
          new Set(['syn123']), // loadedChildren (contains syn123)
          mockSetLoadedChildren,
          new Set(), // loadingIds
          mockSetLoadingIds,
          mockSetNextPageTokens,
          mockSetLoadingPageTokens,
          {},
          {},
        ),
      )

      act(() => {
        result.current.handleToggleExpanded('syn123')
      })

      expect(mockSetLoadingIds).not.toHaveBeenCalled()
    })
  })

  describe('handleChildrenLoaded', () => {
    it('should update tree with loaded children', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      const childNodes = [mockChildNode]

      act(() => {
        result.current.handleChildrenLoaded('syn123', childNodes, 'nextToken')
      })

      expect(mockSetTree).toHaveBeenCalledWith(expect.any(Function))
      expect(mockSetNextPageTokens).toHaveBeenCalledWith(expect.any(Function))
      expect(mockSetLoadingPageTokens).toHaveBeenCalledWith(
        expect.any(Function),
      )
      expect(mockSetLoadingIds).toHaveBeenCalledWith(expect.any(Function))
    })

    it('should mark as loaded when no next page token', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      const childNodes = [mockChildNode]

      act(() => {
        result.current.handleChildrenLoaded('syn123', childNodes) // no nextPageToken
      })

      expect(mockSetLoadedChildren).toHaveBeenCalledWith(expect.any(Function))
    })

    it('should not mark as loaded when there is a next page token', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      const childNodes = [mockChildNode]

      act(() => {
        result.current.handleChildrenLoaded('syn123', childNodes, 'nextToken')
      })

      expect(mockSetLoadedChildren).not.toHaveBeenCalled()
    })
  })

  describe('loadMoreChildren', () => {
    it('should set loading page token and mark as loading', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      act(() => {
        result.current.loadMoreChildren('syn123', 'pageToken')
      })

      expect(mockSetLoadingPageTokens).toHaveBeenCalledWith(
        expect.any(Function),
      )
      expect(mockSetLoadingIds).toHaveBeenCalledWith(expect.any(Function))

      // Test the function passed to setLoadingPageTokens
      const tokenSetterCall = mockSetLoadingPageTokens.mock.calls[0][0]
      const newTokens = tokenSetterCall({})
      expect(newTokens).toEqual({ syn123: 'pageToken' })

      // Test the function passed to setLoadingIds
      const loadingSetterCall = mockSetLoadingIds.mock.calls[0][0]
      const newLoadingIds = loadingSetterCall(new Set())
      expect(newLoadingIds).toEqual(new Set(['syn123']))
    })
  })

  describe('flattenTree', () => {
    it('should return empty array for non-existent node', () => {
      const { result } = renderHook(() =>
        useTreeOperations(
          defaultProps.expanded,
          defaultProps.setExpanded,
          defaultProps.tree,
          defaultProps.setTree,
          defaultProps.loadedChildren,
          defaultProps.setLoadedChildren,
          defaultProps.loadingIds,
          defaultProps.setLoadingIds,
          defaultProps.setNextPageTokens,
          defaultProps.setLoadingPageTokens,
          defaultProps.loadingPageTokens,
          defaultProps.nextPageTokens,
        ),
      )

      const flattened = result.current.flattenTree('nonexistent')
      expect(flattened).toEqual([])
    })

    it('should prevent cycles by tracking visited nodes', () => {
      const cyclicTree = {
        syn123: {
          ...mockRootNode,
          children: [
            {
              ...mockChildNode,
              entityHeader: { ...mockChildHeader, id: 'syn123' },
            },
          ],
        },
      }

      const { result } = renderHook(() =>
        useTreeOperations(
          { syn123: true }, // expanded
          mockSetExpanded,
          cyclicTree,
          mockSetTree,
          new Set(),
          mockSetLoadedChildren,
          new Set(),
          mockSetLoadingIds,
          mockSetNextPageTokens,
          mockSetLoadingPageTokens,
          {},
          {},
        ),
      )

      const flattened = result.current.flattenTree('syn123')
      expect(flattened).toHaveLength(1) // Should only include the root node once
    })

    it('should flatten expanded nodes with children', () => {
      const treeWithChildren = {
        syn123: {
          ...mockRootNode,
          children: [mockChildNode],
        },
        syn456: mockChildNode,
      }

      const { result } = renderHook(() =>
        useTreeOperations(
          { syn123: true }, // expanded
          mockSetExpanded,
          treeWithChildren,
          mockSetTree,
          new Set(),
          mockSetLoadedChildren,
          new Set(),
          mockSetLoadingIds,
          mockSetNextPageTokens,
          mockSetLoadingPageTokens,
          {},
          { syn123: 'nextToken' }, // nextPageTokens
        ),
      )

      const flattened = result.current.flattenTree('syn123')
      expect(flattened).toHaveLength(3) // root + child + load more row
      expect(flattened[0].entityId).toBe('syn123')
      expect(flattened[1].entityId).toBe('syn456')
      expect(flattened[2].isLoadMore).toBe(true)
    })

    it('should not include children when node is not expanded', () => {
      const treeWithChildren = {
        syn123: {
          ...mockRootNode,
          children: [mockChildNode],
        },
        syn456: mockChildNode,
      }

      const { result } = renderHook(() =>
        useTreeOperations(
          { syn123: false }, // not expanded
          mockSetExpanded,
          treeWithChildren,
          mockSetTree,
          new Set(),
          mockSetLoadedChildren,
          new Set(),
          mockSetLoadingIds,
          mockSetNextPageTokens,
          mockSetLoadingPageTokens,
          {},
          {},
        ),
      )

      const flattened = result.current.flattenTree('syn123')
      expect(flattened).toHaveLength(1) // only root node
      expect(flattened[0].entityId).toBe('syn123')
    })
  })
})
