import { renderHook, act } from '@testing-library/react'
import { useTreeOperationsWithDirectFetch } from './useTreeOperationsWithDirectFetch'
import { TreeNode } from './useTreeState'
import { useQueryClient } from '@tanstack/react-query'
import { useSynapseContext } from '@/utils/context/SynapseContext'

// Mock dependencies
vi.mock('@tanstack/react-query')
vi.mock('@/utils/context/SynapseContext')
vi.mock('@/synapse-client', () => ({
  default: {
    getEntityChildren: vi.fn(),
  },
}))

const mockQueryClient = {
  fetchQuery: vi.fn(),
}

const mockSynapseContext = {
  accessToken: 'mock-token',
  keyFactory: {
    getEntityChildrenQueryKey: vi.fn(() => ['entity-children', 'test-id']),
  },
}

vi.mocked(useQueryClient).mockReturnValue(
  mockQueryClient as unknown as ReturnType<typeof useQueryClient>,
)
vi.mocked(useSynapseContext).mockReturnValue(
  mockSynapseContext as unknown as ReturnType<typeof useSynapseContext>,
)

describe('useTreeOperationsWithDirectFetch', () => {
  const mockTree: Record<string, TreeNode> = {
    syn123: {
      entityHeader: {
        id: 'syn123',
        name: 'Test Entity',
        type: 'org.sagebionetworks.repo.model.Project',
        versionNumber: 1,
        versionLabel: 'v1',
        benefactorId: 123,
        createdOn: '2023-01-01T00:00:00.000Z',
        modifiedOn: '2023-01-01T00:00:00.000Z',
        createdBy: 'user1',
        modifiedBy: 'user1',
        isLatestVersion: true,
      },
      depth: 0,
      isLeaf: false,
    },
  }

  const mockProps = {
    expanded: { syn123: false },
    setExpanded: vi.fn(),
    tree: mockTree,
    setTree: vi.fn(),
    loadedChildren: new Set<string>(),
    setLoadedChildren: vi.fn(),
    loadingIds: new Set<string>(),
    setLoadingIds: vi.fn(),
    setNextPageTokens: vi.fn(),
    setLoadingPageTokens: vi.fn(),
    loadingPageTokens: {},
    nextPageTokens: {},
    sortBy: undefined,
    sortDirection: undefined,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('handleToggleExpanded', () => {
    it('should toggle expansion state and fetch children when expanding unloaded node', async () => {
      const mockChildrenResponse = {
        page: [
          {
            id: 'syn456',
            name: 'Child Entity',
            type: 'org.sagebionetworks.repo.model.Folder',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
        ],
        nextPageToken: null,
      }

      mockQueryClient.fetchQuery.mockResolvedValue(mockChildrenResponse)

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          mockProps.expanded,
          mockProps.setExpanded,
          mockProps.tree,
          mockProps.setTree,
          mockProps.loadedChildren,
          mockProps.setLoadedChildren,
          mockProps.loadingIds,
          mockProps.setLoadingIds,
          mockProps.setNextPageTokens,
          mockProps.setLoadingPageTokens,
          mockProps.loadingPageTokens,
          mockProps.nextPageTokens,
          mockProps.sortBy,
          mockProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.handleToggleExpanded('syn123')
      })

      // Should toggle expanded state
      expect(mockProps.setExpanded).toHaveBeenCalledWith(expect.any(Function))

      // Should set loading state
      expect(mockProps.setLoadingIds).toHaveBeenCalledWith(expect.any(Function))

      // Should fetch children
      expect(mockQueryClient.fetchQuery).toHaveBeenCalledWith({
        queryKey: ['entity-children', 'test-id'],
        queryFn: expect.any(Function),
      })
    })

    it('should only toggle state when collapsing expanded node', async () => {
      const expandedProps = {
        ...mockProps,
        expanded: { syn123: true },
      }

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          expandedProps.expanded,
          expandedProps.setExpanded,
          expandedProps.tree,
          expandedProps.setTree,
          expandedProps.loadedChildren,
          expandedProps.setLoadedChildren,
          expandedProps.loadingIds,
          expandedProps.setLoadingIds,
          expandedProps.setNextPageTokens,
          expandedProps.setLoadingPageTokens,
          expandedProps.loadingPageTokens,
          expandedProps.nextPageTokens,
          expandedProps.sortBy,
          expandedProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.handleToggleExpanded('syn123')
      })

      // Should toggle expanded state
      expect(expandedProps.setExpanded).toHaveBeenCalledWith(
        expect.any(Function),
      )

      // Should not fetch children when collapsing
      expect(mockQueryClient.fetchQuery).not.toHaveBeenCalled()
    })

    it('should not fetch children if already loaded', async () => {
      const loadedProps = {
        ...mockProps,
        loadedChildren: new Set(['syn123']),
      }

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          loadedProps.expanded,
          loadedProps.setExpanded,
          loadedProps.tree,
          loadedProps.setTree,
          loadedProps.loadedChildren,
          loadedProps.setLoadedChildren,
          loadedProps.loadingIds,
          loadedProps.setLoadingIds,
          loadedProps.setNextPageTokens,
          loadedProps.setLoadingPageTokens,
          loadedProps.loadingPageTokens,
          loadedProps.nextPageTokens,
          loadedProps.sortBy,
          loadedProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.handleToggleExpanded('syn123')
      })

      // Should toggle expanded state
      expect(loadedProps.setExpanded).toHaveBeenCalledWith(expect.any(Function))

      // Should not fetch children if already loaded
      expect(mockQueryClient.fetchQuery).not.toHaveBeenCalled()
    })

    it('should handle fetch errors gracefully', async () => {
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      mockQueryClient.fetchQuery.mockRejectedValue(new Error('Fetch failed'))

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          mockProps.expanded,
          mockProps.setExpanded,
          mockProps.tree,
          mockProps.setTree,
          mockProps.loadedChildren,
          mockProps.setLoadedChildren,
          mockProps.loadingIds,
          mockProps.setLoadingIds,
          mockProps.setNextPageTokens,
          mockProps.setLoadingPageTokens,
          mockProps.loadingPageTokens,
          mockProps.nextPageTokens,
          mockProps.sortBy,
          mockProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.handleToggleExpanded('syn123')
      })

      // Should log error
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to fetch children for entity:',
        'syn123',
        expect.any(Error),
      )

      // Should remove from loading state
      expect(mockProps.setLoadingIds).toHaveBeenCalledWith(expect.any(Function))

      consoleErrorSpy.mockRestore()
    })
  })

  describe('loadMoreChildren', () => {
    it('should fetch additional children with page token', async () => {
      const mockChildrenResponse = {
        page: [
          {
            id: 'syn789',
            name: 'More Child Entity',
            type: 'org.sagebionetworks.repo.model.File',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
        ],
        nextPageToken: 'next-token-123',
      }

      mockQueryClient.fetchQuery.mockResolvedValue(mockChildrenResponse)

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          mockProps.expanded,
          mockProps.setExpanded,
          mockProps.tree,
          mockProps.setTree,
          mockProps.loadedChildren,
          mockProps.setLoadedChildren,
          mockProps.loadingIds,
          mockProps.setLoadingIds,
          mockProps.setNextPageTokens,
          mockProps.setLoadingPageTokens,
          mockProps.loadingPageTokens,
          mockProps.nextPageTokens,
          mockProps.sortBy,
          mockProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.loadMoreChildren('syn123', 'page-token-456')
      })

      // Should set loading page token
      expect(mockProps.setLoadingPageTokens).toHaveBeenCalledWith(
        expect.any(Function),
      )

      // Should set loading state
      expect(mockProps.setLoadingIds).toHaveBeenCalledWith(expect.any(Function))

      // Should fetch children with page token
      expect(mockQueryClient.fetchQuery).toHaveBeenCalledWith({
        queryKey: ['entity-children', 'test-id'],
        queryFn: expect.any(Function),
      })
    })

    it('should handle loadMoreChildren fetch errors gracefully', async () => {
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      mockQueryClient.fetchQuery.mockRejectedValue(
        new Error('Load more failed'),
      )

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          mockProps.expanded,
          mockProps.setExpanded,
          mockProps.tree,
          mockProps.setTree,
          mockProps.loadedChildren,
          mockProps.setLoadedChildren,
          mockProps.loadingIds,
          mockProps.setLoadingIds,
          mockProps.setNextPageTokens,
          mockProps.setLoadingPageTokens,
          mockProps.loadingPageTokens,
          mockProps.nextPageTokens,
          mockProps.sortBy,
          mockProps.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.loadMoreChildren('syn123', 'page-token-456')
      })

      // Should log error
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Failed to load more children for entity:',
        'syn123',
        expect.any(Error),
      )

      // Should remove from loading states
      expect(mockProps.setLoadingIds).toHaveBeenCalledWith(expect.any(Function))
      expect(mockProps.setLoadingPageTokens).toHaveBeenCalledWith(
        expect.any(Function),
      )

      consoleErrorSpy.mockRestore()
    })
  })

  describe('flattenTree', () => {
    it('should flatten tree structure correctly', () => {
      const treeWithChildren: Record<string, TreeNode> = {
        syn123: {
          entityHeader: {
            id: 'syn123',
            name: 'Parent',
            type: 'org.sagebionetworks.repo.model.Project',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
          depth: 0,
          isLeaf: false,
          children: [
            {
              entityHeader: {
                id: 'syn456',
                name: 'Child',
                type: 'org.sagebionetworks.repo.model.Folder',
                versionNumber: 1,
                versionLabel: 'v1',
                benefactorId: 123,
                createdOn: '2023-01-01T00:00:00.000Z',
                modifiedOn: '2023-01-01T00:00:00.000Z',
                createdBy: 'user1',
                modifiedBy: 'user1',
                isLatestVersion: true,
              },
              depth: 1,
              isLeaf: true,
              parentId: 'syn123',
            },
          ],
        },
        syn456: {
          entityHeader: {
            id: 'syn456',
            name: 'Child',
            type: 'org.sagebionetworks.repo.model.Folder',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
          depth: 1,
          isLeaf: true,
          parentId: 'syn123',
        },
      }

      const expandedState = { syn123: true }

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          expandedState,
          mockProps.setExpanded,
          treeWithChildren,
          mockProps.setTree,
          mockProps.loadedChildren,
          mockProps.setLoadedChildren,
          mockProps.loadingIds,
          mockProps.setLoadingIds,
          mockProps.setNextPageTokens,
          mockProps.setLoadingPageTokens,
          mockProps.loadingPageTokens,
          mockProps.nextPageTokens,
          mockProps.sortBy,
          mockProps.sortDirection,
        ),
      )

      const flattened = result.current.flattenTree('syn123')

      expect(flattened).toHaveLength(2) // Parent + Child
      expect(flattened[0].entityId).toBe('syn123')
      expect(flattened[1].entityId).toBe('syn456')
    })
  })
})
