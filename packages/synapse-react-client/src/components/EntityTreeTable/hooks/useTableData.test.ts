import { renderHook } from '@testing-library/react'
import { useTableData } from './useTableData'
import { TreeNode } from './useEntityTreeState'
import { EntityBundleRow } from '../EntityTreeTable'
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

const mockChildNode: TreeNode = {
  entityHeader: mockChildHeader,
  parentId: 'syn123',
  depth: 1,
  isLeaf: true,
}

const mockRootNode: TreeNode = {
  entityHeader: mockEntityHeader,
  depth: 0,
  isLeaf: false,
  children: [mockChildNode],
}

const mockTree: Record<string, TreeNode> = {
  syn123: mockRootNode,
  syn456: mockChildNode,
}

const mockFlattenTree = vi.fn((nodeId: string): EntityBundleRow[] => {
  if (nodeId === 'syn123') {
    return [
      {
        entityId: 'syn123',
        entityHeader: mockEntityHeader,
        depth: 0,
        isLeaf: false,
        versionNumber: 1,
      },
      {
        entityId: 'syn456',
        entityHeader: mockChildHeader,
        depth: 1,
        isLeaf: true,
        parentId: 'syn123',
        versionNumber: 1,
      },
    ]
  }
  if (nodeId === 'syn456') {
    return [
      {
        entityId: 'syn456',
        entityHeader: mockChildHeader,
        depth: 1,
        isLeaf: true,
        parentId: 'syn123',
        versionNumber: 1,
      },
    ]
  }
  return []
})

describe('useTableData', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return empty array when root node is not found', () => {
    const { result } = renderHook(() =>
      useTableData({}, 'nonexistent', true, {}, {}, mockFlattenTree),
    )

    expect(result.current).toEqual([])
  })

  it('should return flattened tree when showRootNode is true', () => {
    const { result } = renderHook(() =>
      useTableData(
        mockTree,
        'syn123',
        true,
        { syn123: true },
        {},
        mockFlattenTree,
      ),
    )

    expect(mockFlattenTree).toHaveBeenCalledWith('syn123', expect.any(Set))
    expect(result.current).toEqual([
      {
        entityId: 'syn123',
        entityHeader: mockEntityHeader,
        depth: 0,
        isLeaf: false,
        versionNumber: 1,
      },
      {
        entityId: 'syn456',
        entityHeader: mockChildHeader,
        depth: 1,
        isLeaf: true,
        parentId: 'syn123',
        versionNumber: 1,
      },
    ])
  })

  it('should return children when showRootNode is false and root is expanded', () => {
    const { result } = renderHook(() =>
      useTableData(
        mockTree,
        'syn123',
        false,
        { syn123: true },
        {},
        mockFlattenTree,
      ),
    )

    expect(mockFlattenTree).toHaveBeenCalledWith('syn456', expect.any(Set))
    expect(result.current).toEqual([
      {
        entityId: 'syn456',
        entityHeader: mockChildHeader,
        depth: 1,
        isLeaf: true,
        parentId: 'syn123',
        versionNumber: 1,
      },
    ])
  })

  it('should return empty array when showRootNode is false and root is not expanded', () => {
    const { result } = renderHook(() =>
      useTableData(
        mockTree,
        'syn123',
        false,
        { syn123: false },
        {},
        mockFlattenTree,
      ),
    )

    expect(result.current).toEqual([])
  })

  it('should add load more row when there is a next page token and showRootNode is false', () => {
    const { result } = renderHook(() =>
      useTableData(
        mockTree,
        'syn123',
        false,
        { syn123: true },
        { syn123: 'nextPageToken' },
        mockFlattenTree,
      ),
    )

    expect(result.current).toHaveLength(2)
    expect(result.current[1]).toEqual({
      entityId: '',
      entityHeader: mockEntityHeader,
      depth: 0,
      isLeaf: true,
      parentId: 'syn123',
      versionNumber: 1,
      isLoadMore: true,
      pageToken: 'nextPageToken',
    })
  })

  it('should not add load more row when there is no next page token', () => {
    const { result } = renderHook(() =>
      useTableData(
        mockTree,
        'syn123',
        false,
        { syn123: true },
        {},
        mockFlattenTree,
      ),
    )

    expect(result.current).toHaveLength(1)
    expect(result.current.every(row => !row.isLoadMore)).toBe(true)
  })

  it('should memoize results and only recalculate when dependencies change', () => {
    // Create a fresh mock for this test to avoid interference
    const testMockFlattenTree = vi.fn((nodeId: string): EntityBundleRow[] => {
      if (nodeId === 'syn456') {
        return [
          {
            entityId: 'syn456',
            entityHeader: mockChildHeader,
            depth: 1,
            isLeaf: true,
            parentId: 'syn123',
            versionNumber: 1,
          },
        ]
      }
      return []
    })

    const expandedSame = { syn123: true }
    const expandedDifferent = { syn123: false }
    const nextPageTokens = {}

    const { result, rerender } = renderHook(
      ({ expanded }) =>
        useTableData(
          mockTree,
          'syn123',
          false, // showRootNode = false so expanded state matters
          expanded,
          nextPageTokens,
          testMockFlattenTree,
        ),
      { initialProps: { expanded: expandedSame } },
    )

    const firstResult = result.current
    expect(testMockFlattenTree).toHaveBeenCalledTimes(1)

    // Rerender with same props (same reference)
    rerender({ expanded: expandedSame })
    expect(result.current).toStrictEqual(firstResult)
    expect(testMockFlattenTree).toHaveBeenCalledTimes(1)

    // Rerender with different props - this should change the result since expanded matters when showRootNode is false
    rerender({ expanded: expandedDifferent })
    expect(result.current).not.toStrictEqual(firstResult)
    expect(testMockFlattenTree).toHaveBeenCalledTimes(1) // Should still be 1 because expanded[rootId] is false, so no children are rendered
  })
})
