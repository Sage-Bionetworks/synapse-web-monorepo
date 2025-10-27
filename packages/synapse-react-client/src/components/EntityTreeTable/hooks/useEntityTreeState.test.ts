import { act, renderHook, waitFor } from '@testing-library/react'
import { useEntityTreeState } from './useEntityTreeState'
import { useGetEntityHeader } from '@/synapse-queries'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'

// Mock the query hooks
vi.mock('@/synapse-queries', async () => {
  const actual = await vi.importActual<typeof import('@/synapse-queries')>(
    '@/synapse-queries',
  )
  return {
    ...actual,
    useGetEntityHeader: vi.fn(),
  }
})

vi.mock('@/synapse-queries/entity/useGetEntityChildren', () => ({
  useGetEntityChildren: vi.fn(),
}))

const mockUseGetEntityHeader = vi.mocked(useGetEntityHeader)
const mockUseGetEntityChildren = vi.mocked(useGetEntityChildren)

const renderUseEntityTreeState = (
  rootId = 'syn123',
  expandRootByDefault = true,
  showRootNode = true,
) => {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  const renderResult = renderHook(
    () => useEntityTreeState(rootId, expandRootByDefault, showRootNode),
    { wrapper: wrapperFn },
  )

  return { ...renderResult, queryClient }
}
const contextKeyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)

const rootIncludeTypes: EntityType[] = [
  EntityType.folder,
  EntityType.file,
  EntityType.link,
  EntityType.recordset,
]

const buildRootChildrenRequest = (
  overrides: Partial<EntityChildrenRequest> = {},
): EntityChildrenRequest => ({
  parentId: 'syn123',
  includeTypes: rootIncludeTypes,
  ...overrides,
})

type HeaderQueryResult = ReturnType<typeof useGetEntityHeader>
type ChildrenQueryResult = ReturnType<typeof useGetEntityChildren>

const createHeaderQueryResult = (
  data: EntityHeader | undefined,
): HeaderQueryResult => ({ data } as HeaderQueryResult)

const createChildrenQueryResult = (
  data: EntityChildrenResponse | undefined,
): ChildrenQueryResult => ({ data } as ChildrenQueryResult)

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

const mockFolderHeader: EntityHeader = {
  id: 'syn789',
  name: 'Folder Entity',
  type: 'org.sagebionetworks.repo.model.Folder',
  versionNumber: 1,
  versionLabel: 'v1',
  benefactorId: 123,
  createdOn: '2023-01-01T00:00:00.000Z',
  modifiedOn: '2023-01-01T00:00:00.000Z',
  createdBy: 'user1',
  modifiedBy: 'user1',
  isLatestVersion: true,
}

const mockChildrenResponse = {
  page: [mockChildHeader, mockFolderHeader],
  nextPageToken: undefined,
}

const mockChildrenResponseWithPagination = {
  page: [mockChildHeader],
  nextPageToken: 'next-token-123',
}

describe('useEntityTreeState', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetEntityHeader.mockReturnValue(createHeaderQueryResult(undefined))
    mockUseGetEntityChildren.mockReturnValue(
      createChildrenQueryResult(undefined),
    )
  })

  describe('initial state', () => {
    it('should initialize with default state', () => {
      const { result } = renderUseEntityTreeState('syn123', true, true)

      expect(result.current.expanded).toEqual({})
      expect(result.current.tree).toEqual({})
      expect(result.current.loadingIds).toEqual(new Set())
      expect(result.current.loadedChildren).toEqual(new Set())
      expect(result.current.nextPageTokens).toEqual({})
      expect(result.current.loadingPageTokens).toEqual({})
      expect(result.current.sorting).toEqual([])
      expect(result.current.sortBy).toBeUndefined()
      expect(result.current.sortDirection).toBeUndefined()
    })

    it('should not fetch children when root header is not available', () => {
      renderUseEntityTreeState('syn123', true, true)

      expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
        expect.any(Object),
        { enabled: false },
      )
    })
  })

  describe('data initialization', () => {
    it('should initialize tree when root header and children are available', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result } = renderUseEntityTreeState('syn123', true, true)

      await waitFor(() => {
        expect(result.current.tree['syn123']).toBeDefined()
      })

      // Check root node
      expect(result.current.tree['syn123']).toEqual({
        entityHeader: mockEntityHeader,
        depth: 0,
        isLeaf: false,
        children: [
          {
            entityHeader: mockChildHeader,
            parentId: 'syn123',
            depth: 1,
            isLeaf: true,
          },
          {
            entityHeader: mockFolderHeader,
            parentId: 'syn123',
            depth: 1,
            isLeaf: false,
          },
        ],
      })

      // Check child nodes
      expect(result.current.tree['syn456']).toEqual({
        entityHeader: mockChildHeader,
        parentId: 'syn123',
        depth: 1,
        isLeaf: true,
      })

      expect(result.current.tree['syn789']).toEqual({
        entityHeader: mockFolderHeader,
        parentId: 'syn123',
        depth: 1,
        isLeaf: false,
      })

      // Check loaded children
      expect(result.current.loadedChildren.has('syn123')).toBe(true)

      // Check expanded state (should be expanded by default)
      expect(result.current.expanded['syn123']).toBe(true)
    })

    it('should not expand root by default when expandRootByDefault is false', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result } = renderUseEntityTreeState('syn123', false, true)

      await waitFor(() => {
        expect(result.current.tree['syn123']).toBeDefined()
      })

      expect(result.current.expanded['syn123']).toBeUndefined()
    })

    it('should handle pagination tokens correctly', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponseWithPagination),
      )

      const { result } = renderUseEntityTreeState('syn123', true, true)

      await waitFor(() => {
        expect(result.current.nextPageTokens['syn123']).toBe('next-token-123')
      })

      // Should not mark as loaded when there's a next page token
      expect(result.current.loadedChildren.has('syn123')).toBe(false)
    })

    it('should set correct depths when showRootNode is false', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result } = renderUseEntityTreeState('syn123', true, false)

      await waitFor(() => {
        expect(result.current.tree['syn123']).toBeDefined()
      })

      // Root should have depth -1 when not shown
      expect(result.current.tree['syn123'].depth).toBe(-1)

      // Children should have depth 0 when root is not shown
      expect(result.current.tree['syn456'].depth).toBe(0)
      expect(result.current.tree['syn789'].depth).toBe(0)
    })
  })

  describe('sorting functionality', () => {
    it('should derive sorting parameters correctly', () => {
      const { result } = renderUseEntityTreeState('syn123', true, true)

      // Test name sorting ascending
      act(() => {
        result.current.setSorting([{ id: 'name', desc: false }])
      })

      expect(result.current.sortBy).toBe(SortBy.NAME)
      expect(result.current.sortDirection).toBe(Direction.ASC)

      // Test name sorting descending
      act(() => {
        result.current.setSorting([{ id: 'name', desc: true }])
      })

      expect(result.current.sortBy).toBe(SortBy.NAME)
      expect(result.current.sortDirection).toBe(Direction.DESC)

      // Test createdOn sorting
      act(() => {
        result.current.setSorting([{ id: 'createdOn', desc: false }])
      })

      expect(result.current.sortBy).toBe(SortBy.CREATED_ON)
      expect(result.current.sortDirection).toBe(Direction.ASC)

      // Test modifiedOn sorting
      act(() => {
        result.current.setSorting([{ id: 'modifiedOn', desc: true }])
      })

      expect(result.current.sortBy).toBe(SortBy.MODIFIED_ON)
      expect(result.current.sortDirection).toBe(Direction.DESC)

      // Test unknown sorting field
      act(() => {
        result.current.setSorting([{ id: 'unknown', desc: false }])
      })

      expect(result.current.sortBy).toBeUndefined()
      expect(result.current.sortDirection).toBeUndefined()

      // Test no sorting
      act(() => {
        result.current.setSorting([])
      })

      expect(result.current.sortBy).toBeUndefined()
      expect(result.current.sortDirection).toBeUndefined()
    })
  })

  describe('state management', () => {
    it('should allow updating individual state values', () => {
      const { result } = renderUseEntityTreeState('syn123', true, true)

      // Test updating expanded state
      act(() => {
        result.current.setExpanded({ syn123: true })
      })
      expect(result.current.expanded).toEqual({ syn123: true })

      // Test updating loading IDs
      act(() => {
        result.current.setLoadingIds(new Set(['syn456']))
      })
      expect(result.current.loadingIds).toEqual(new Set(['syn456']))

      // Test updating pagination tokens
      act(() => {
        result.current.setNextPageTokens({ syn789: 'token' })
      })
      expect(result.current.nextPageTokens).toEqual({ syn789: 'token' })
    })

    it('should allow manual reset of tree data', () => {
      const { result } = renderUseEntityTreeState('syn123', true, true)

      // Set up some state
      act(() => {
        result.current.setTree({
          syn123: {
            entityHeader: mockEntityHeader,
            depth: 0,
            isLeaf: false,
          },
        })
        result.current.setExpanded({ syn123: true })
        result.current.setLoadingIds(new Set(['syn456']))
        result.current.setLoadedChildren(new Set(['syn123']))
        result.current.setNextPageTokens({ syn123: 'token' })
        result.current.setSorting([{ id: 'name', desc: false }])
      })

      // Reset tree data manually
      act(() => {
        result.current.resetTreeData()
      })

      // All tree data should be reset but sorting preserved
      expect(result.current.tree).toEqual({})
      expect(result.current.expanded).toEqual({})
      expect(result.current.loadingIds).toEqual(new Set())
      expect(result.current.loadedChildren).toEqual(new Set())
      expect(result.current.nextPageTokens).toEqual({})
      expect(result.current.sorting).toEqual([{ id: 'name', desc: false }]) // Sorting preserved
    })
  })

  describe('cache reset behavior', () => {
    it('should remove the root children query when resetTreeData is called', () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )
      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result, queryClient } = renderUseEntityTreeState(
        'syn123',
        true,
        true,
      )
      const removeQueriesSpy = vi.spyOn(queryClient, 'removeQueries')
      const expectedQueryKey = contextKeyFactory.getEntityChildrenQueryKey(
        buildRootChildrenRequest(),
        false,
      )

      act(() => {
        result.current.resetTreeData()
      })

      expect(removeQueriesSpy).toHaveBeenCalledWith({
        queryKey: expectedQueryKey,
        exact: true,
      })
    })

    it('should remove the root children query when the root entity query is invalidated', () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )
      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { queryClient } = renderUseEntityTreeState('syn123', true, true)
      const removeQueriesSpy = vi.spyOn(queryClient, 'removeQueries')
      const expectedRootQueryKey = contextKeyFactory.getEntityQueryKey('syn123')
      const expectedChildrenQueryKey =
        contextKeyFactory.getEntityChildrenQueryKey(
          buildRootChildrenRequest(),
          false,
        )

      const initialCallCount = removeQueriesSpy.mock.calls.length

      act(() => {
        queryClient.setQueryData(expectedRootQueryKey, mockEntityHeader)
        queryClient.invalidateQueries({
          queryKey: expectedRootQueryKey,
          exact: true,
        })
      })

      expect(removeQueriesSpy.mock.calls.length).toBeGreaterThan(
        initialCallCount,
      )
      expect(removeQueriesSpy).toHaveBeenCalledWith({
        queryKey: expectedChildrenQueryKey,
        exact: true,
      })
    })
  })

  describe('query integration', () => {
    it('should pass correct parameters to useGetEntityChildren', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result } = renderUseEntityTreeState('syn123', true, true)

      // Set sorting
      act(() => {
        result.current.setSorting([{ id: 'name', desc: true }])
      })

      await waitFor(() => {
        expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
          {
            parentId: 'syn123',
            includeTypes: [
              EntityType.folder,
              EntityType.file,
              EntityType.link,
              EntityType.recordset,
            ],
            sortBy: SortBy.NAME,
            sortDirection: Direction.DESC,
          },
          { enabled: true },
        )
      })
    })

    it('should not fetch children when already loaded', () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      // Mock hook to return loaded children set
      const { result } = renderUseEntityTreeState('syn123', true, true)

      // Manually mark as loaded to simulate already loaded state
      act(() => {
        result.current.setLoadedChildren(new Set(['syn123']))
      })

      expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
        expect.any(Object),
        { enabled: false },
      )
    })
  })

  describe('edge cases', () => {
    it('should handle missing root header gracefully', () => {
      mockUseGetEntityHeader.mockReturnValue(createHeaderQueryResult(undefined))

      const { result } = renderUseEntityTreeState('syn123', true, true)

      expect(result.current.tree).toEqual({})
      expect(result.current.rootHeader).toBeUndefined()
    })

    it('should handle empty children response', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult({
          page: [],
          nextPageToken: undefined,
        }),
      )

      const { result } = renderUseEntityTreeState('syn123', true, true)

      await waitFor(() => {
        expect(result.current.tree['syn123']).toBeDefined()
      })

      expect(result.current.tree['syn123'].children).toEqual([])
      expect(result.current.loadedChildren.has('syn123')).toBe(true)
    })

    it('should not initialize multiple times for the same root', async () => {
      mockUseGetEntityHeader.mockReturnValue(
        createHeaderQueryResult(mockEntityHeader),
      )

      mockUseGetEntityChildren.mockReturnValue(
        createChildrenQueryResult(mockChildrenResponse),
      )

      const { result, rerender } = renderUseEntityTreeState(
        'syn123',
        true,
        true,
      )

      await waitFor(() => {
        expect(result.current.tree['syn123']).toBeDefined()
      })

      const initialTree = result.current.tree

      // Rerender should not reinitialize
      rerender()

      expect(result.current.tree).toBe(initialTree)
    })
  })
})
