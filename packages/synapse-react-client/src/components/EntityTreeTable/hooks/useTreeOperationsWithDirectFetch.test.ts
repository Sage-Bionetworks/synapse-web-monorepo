import { renderHook, act } from '@testing-library/react'
import { useTreeOperationsWithDirectFetch } from './useTreeOperationsWithDirectFetch'
import { TreeNode } from './useEntityTreeState'
import { useQueryClient } from '@tanstack/react-query'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'

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

    it('should preserve existing children across n pages of pagination (fixes the n-page issue)', async () => {
      // Create a tree with no children initially
      const initialTree: Record<string, TreeNode> = {
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
        },
      }

      // Mock responses for three pages
      const page1Response = {
        page: [
          {
            id: 'syn111',
            name: 'Child 1',
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
        nextPageToken: 'token-page-2',
      }

      const page2Response = {
        page: [
          {
            id: 'syn222',
            name: 'Child 2',
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
        nextPageToken: 'token-page-3',
      }

      const page3Response = {
        page: [
          {
            id: 'syn333',
            name: 'Child 3',
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
        nextPageToken: null, // Final page
      }

      // Set up mocks to return different responses for each call
      mockQueryClient.fetchQuery
        .mockResolvedValueOnce(page1Response)
        .mockResolvedValueOnce(page2Response)
        .mockResolvedValueOnce(page3Response)

      let currentTree = initialTree
      const mockSetTree = vi.fn(updateFn => {
        currentTree = updateFn(currentTree)
        return currentTree
      })

      const testProps = {
        ...mockProps,
        tree: currentTree,
        setTree: mockSetTree,
        loadingPageTokens: {},
        nextPageTokens: {},
      }

      const { result, rerender } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          testProps.expanded,
          testProps.setExpanded,
          currentTree, // Use current tree state
          testProps.setTree,
          testProps.loadedChildren,
          testProps.setLoadedChildren,
          testProps.loadingIds,
          testProps.setLoadingIds,
          testProps.setNextPageTokens,
          testProps.setLoadingPageTokens,
          testProps.loadingPageTokens,
          testProps.nextPageTokens,
          testProps.sortBy,
          testProps.sortDirection,
        ),
      )

      // Load first page (initial expansion)
      await act(async () => {
        await result.current.handleToggleExpanded('syn123')
      })

      // Simulate updating loadingPageTokens and nextPageTokens after first page
      testProps.loadingPageTokens = {}
      testProps.nextPageTokens = { syn123: 'token-page-2' }

      rerender()

      // Verify first page loaded
      expect(currentTree.syn123.children).toHaveLength(1)
      expect(currentTree.syn123.children![0].entityHeader.id).toBe('syn111')

      // Load second page
      testProps.loadingPageTokens = { syn123: 'token-page-2' }
      rerender()

      await act(async () => {
        await result.current.loadMoreChildren('syn123', 'token-page-2')
      })

      // Simulate updating tokens after second page
      testProps.loadingPageTokens = {}
      testProps.nextPageTokens = { syn123: 'token-page-3' }
      rerender()

      // Verify both pages are preserved
      expect(currentTree.syn123.children).toHaveLength(2)
      expect(currentTree.syn123.children![0].entityHeader.id).toBe('syn111')
      expect(currentTree.syn123.children![1].entityHeader.id).toBe('syn222')

      // Load third page
      testProps.loadingPageTokens = { syn123: 'token-page-3' }
      rerender()

      await act(async () => {
        await result.current.loadMoreChildren('syn123', 'token-page-3')
      })

      // Verify all three pages are preserved
      expect(currentTree.syn123.children).toHaveLength(3)
      expect(currentTree.syn123.children![0].entityHeader.id).toBe('syn111')
      expect(currentTree.syn123.children![1].entityHeader.id).toBe('syn222')
      expect(currentTree.syn123.children![2].entityHeader.id).toBe('syn333')
    })

    it('should preserve existing children when loading more pages', async () => {
      // Create a tree with existing children
      const treeWithExistingChildren: Record<string, TreeNode> = {
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
                id: 'syn111',
                name: 'Existing Child 1',
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
            {
              entityHeader: {
                id: 'syn222',
                name: 'Existing Child 2',
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
      }

      const mockNewChildrenResponse = {
        page: [
          {
            id: 'syn333',
            name: 'New Child 3',
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

      mockQueryClient.fetchQuery.mockResolvedValue(mockNewChildrenResponse)

      const propsWithExistingChildren = {
        ...mockProps,
        tree: treeWithExistingChildren,
        loadingPageTokens: { syn123: 'page-token-456' }, // Simulate pagination in progress
      }

      const { result } = renderHook(() =>
        useTreeOperationsWithDirectFetch(
          propsWithExistingChildren.expanded,
          propsWithExistingChildren.setExpanded,
          propsWithExistingChildren.tree,
          propsWithExistingChildren.setTree,
          propsWithExistingChildren.loadedChildren,
          propsWithExistingChildren.setLoadedChildren,
          propsWithExistingChildren.loadingIds,
          propsWithExistingChildren.setLoadingIds,
          propsWithExistingChildren.setNextPageTokens,
          propsWithExistingChildren.setLoadingPageTokens,
          propsWithExistingChildren.loadingPageTokens,
          propsWithExistingChildren.nextPageTokens,
          propsWithExistingChildren.sortBy,
          propsWithExistingChildren.sortDirection,
        ),
      )

      await act(async () => {
        await result.current.loadMoreChildren('syn123', 'page-token-456')
      })

      // Should call setTree to append new children to existing ones
      expect(propsWithExistingChildren.setTree).toHaveBeenCalledWith(
        expect.any(Function),
      )

      // Verify the setTree function appends children correctly
      const setTreeCall = propsWithExistingChildren.setTree.mock.calls[0][0]
      const updatedTree = setTreeCall(treeWithExistingChildren)

      // Should have 3 children total (2 existing + 1 new)
      expect(updatedTree.syn123.children).toHaveLength(3)
      expect(updatedTree.syn123.children![0].entityHeader.id).toBe('syn111')
      expect(updatedTree.syn123.children![1].entityHeader.id).toBe('syn222')
      expect(updatedTree.syn123.children![2].entityHeader.id).toBe('syn333')
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
