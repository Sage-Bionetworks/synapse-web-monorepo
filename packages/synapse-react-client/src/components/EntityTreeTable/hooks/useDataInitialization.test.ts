import { renderHook, waitFor } from '@testing-library/react'
import { useGetEntityHeader } from '@/synapse-queries'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { useDataInitialization } from './useDataInitialization'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'
import { EntityType } from '@sage-bionetworks/synapse-client'

// Mock the query hooks
vi.mock('@/synapse-queries', () => ({
  useGetEntityHeader: vi.fn(),
}))

vi.mock('@/synapse-queries/entity/useGetEntityChildren', () => ({
  useGetEntityChildren: vi.fn(),
}))

const mockUseGetEntityHeader = vi.mocked(useGetEntityHeader)
const mockUseGetEntityChildren = vi.mocked(useGetEntityChildren)

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

const mockChildrenResponse = {
  page: [mockChildHeader],
  nextPageToken: undefined,
}

describe('useDataInitialization', () => {
  const mockSetTree = vi.fn()
  const mockSetNextPageTokens = vi.fn()
  const mockSetLoadedChildren = vi.fn()
  const mockSetExpanded = vi.fn()
  const mockResetTreeState = vi.fn()
  const loadedChildren = new Set<string>()

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetEntityHeader.mockReturnValue({
      data: undefined,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: undefined,
    } as any)
  })

  it('should not initialize when root header is not loaded', () => {
    mockUseGetEntityHeader.mockReturnValue({
      data: undefined,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true,
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
        SortBy.NAME,
        Direction.ASC,
      ),
    )

    expect(mockSetTree).not.toHaveBeenCalled()
    expect(mockSetExpanded).not.toHaveBeenCalled()
  })

  it('should not initialize when children are already loaded', () => {
    const alreadyLoadedChildren = new Set(['syn123'])

    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true,
        alreadyLoadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    expect(mockSetTree).not.toHaveBeenCalled()
  })

  it('should initialize tree with root node shown', async () => {
    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true, // showRootNode = true
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    await waitFor(() => {
      expect(mockSetTree).toHaveBeenCalledWith(expect.any(Function))
    })

    expect(mockSetExpanded).toHaveBeenCalledWith(expect.any(Function))
    expect(mockSetLoadedChildren).toHaveBeenCalledWith(expect.any(Function))
  })

  it('should initialize tree with root node hidden', async () => {
    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        false, // showRootNode = false
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    await waitFor(() => {
      expect(mockSetTree).toHaveBeenCalledWith(expect.any(Function))
    })

    // Verify the tree setter was called
    const treeSetterCall = mockSetTree.mock.calls[0][0]
    const newTree = treeSetterCall({})

    // Check that child has depth 0 when root is hidden
    expect(newTree['syn456'].depth).toBe(0)
  })

  it('should not expand root by default when expandRootByDefault is false', async () => {
    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        false, // expandRootByDefault = false
        true,
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    await waitFor(() => {
      expect(mockSetTree).toHaveBeenCalled()
    })

    expect(mockSetExpanded).not.toHaveBeenCalled()
  })

  it('should handle next page token correctly', async () => {
    const responseWithToken = {
      page: [mockChildHeader],
      nextPageToken: 'nextToken123',
    }

    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: responseWithToken,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true,
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    await waitFor(() => {
      expect(mockSetNextPageTokens).toHaveBeenCalledWith(expect.any(Function))
    })

    // Verify next page token was set
    const tokenSetterCall = mockSetNextPageTokens.mock.calls[0][0]
    const newTokens = tokenSetterCall({})
    expect(newTokens['syn123']).toBe('nextToken123')

    // Should not mark as loaded when there's a next page token
    expect(mockSetLoadedChildren).not.toHaveBeenCalled()
  })

  it('should determine leaf status correctly for different entity types', async () => {
    const folderChild: EntityHeader = {
      ...mockChildHeader,
      id: 'syn789',
      name: 'Folder Child',
      type: 'org.sagebionetworks.repo.model.Folder',
    }

    const responseWithFolder = {
      page: [mockChildHeader, folderChild],
      nextPageToken: undefined,
    }

    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)
    mockUseGetEntityChildren.mockReturnValue({
      data: responseWithFolder,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true,
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
      ),
    )

    await waitFor(() => {
      expect(mockSetTree).toHaveBeenCalled()
    })

    const treeSetterCall = mockSetTree.mock.calls[0][0]
    const newTree = treeSetterCall({})

    // File should be leaf, folder should not be leaf
    expect(newTree['syn456'].isLeaf).toBe(true)
    expect(newTree['syn789'].isLeaf).toBe(false)
  })

  it('should pass sorting parameters to children query', () => {
    mockUseGetEntityHeader.mockReturnValue({
      data: mockEntityHeader,
    } as any)

    renderHook(() =>
      useDataInitialization(
        'syn123',
        true,
        true,
        loadedChildren,
        mockSetTree,
        mockSetNextPageTokens,
        mockSetLoadedChildren,
        mockSetExpanded,
        mockResetTreeState,
        SortBy.MODIFIED_ON,
        Direction.DESC,
      ),
    )

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
      {
        parentId: 'syn123',
        includeTypes: [
          EntityType.folder,
          EntityType.file,
          EntityType.link,
          EntityType.recordset,
        ],
        sortBy: SortBy.MODIFIED_ON,
        sortDirection: Direction.DESC,
      },
      { enabled: true },
    )
  })
})
