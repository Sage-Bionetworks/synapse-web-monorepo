import { act, renderHook } from '@testing-library/react'
import { useTreeState } from './useTreeState'
import { EntityHeader } from '@sage-bionetworks/synapse-types'

const mockEntityHeader: EntityHeader = {
  id: 'syn123',
  name: 'Test Entity',
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

describe('useTreeState', () => {
  it('should initialize with default state', () => {
    const { result } = renderHook(() => useTreeState())

    expect(result.current.expanded).toEqual({})
    expect(result.current.tree).toEqual({})
    expect(result.current.loadingIds).toEqual(new Set())
    expect(result.current.loadedChildren).toEqual(new Set())
    expect(result.current.nextPageTokens).toEqual({})
    expect(result.current.loadingPageTokens).toEqual({})
    expect(result.current.sorting).toEqual([])
  })

  it('should update expanded state', () => {
    const { result } = renderHook(() => useTreeState())

    act(() => {
      result.current.setExpanded({ syn123: true })
    })

    expect(result.current.expanded).toEqual({ syn123: true })
  })

  it('should update tree state', () => {
    const { result } = renderHook(() => useTreeState())
    const treeNode = {
      entityHeader: mockEntityHeader,
      depth: 0,
      isLeaf: false,
    }

    act(() => {
      result.current.setTree({ syn123: treeNode })
    })

    expect(result.current.tree).toEqual({ syn123: treeNode })
  })

  it('should update loading states', () => {
    const { result } = renderHook(() => useTreeState())

    act(() => {
      result.current.setLoadingIds(new Set(['syn123']))
    })

    expect(result.current.loadingIds).toEqual(new Set(['syn123']))

    act(() => {
      result.current.setLoadedChildren(new Set(['syn456']))
    })

    expect(result.current.loadedChildren).toEqual(new Set(['syn456']))
  })

  it('should update pagination tokens', () => {
    const { result } = renderHook(() => useTreeState())

    act(() => {
      result.current.setNextPageTokens({ syn123: 'token123' })
    })

    expect(result.current.nextPageTokens).toEqual({ syn123: 'token123' })

    act(() => {
      result.current.setLoadingPageTokens({ syn456: 'loadingToken' })
    })

    expect(result.current.loadingPageTokens).toEqual({ syn456: 'loadingToken' })
  })

  it('should update sorting state', () => {
    const { result } = renderHook(() => useTreeState())
    const sortingState = [{ id: 'name', desc: false }]

    act(() => {
      result.current.setSorting(sortingState)
    })

    expect(result.current.sorting).toEqual(sortingState)
  })

  it('should reset all state when resetTreeState is called', () => {
    const { result } = renderHook(() => useTreeState())
    const treeNode = {
      entityHeader: mockEntityHeader,
      depth: 0,
      isLeaf: false,
    }
    const sortingState = [{ id: 'name', desc: false }]

    // Set up some state including sorting
    act(() => {
      result.current.setTree({ syn123: treeNode })
      result.current.setExpanded({ syn123: true })
      result.current.setLoadingIds(new Set(['syn123']))
      result.current.setLoadedChildren(new Set(['syn456']))
      result.current.setNextPageTokens({ syn123: 'token123' })
      result.current.setLoadingPageTokens({ syn456: 'loadingToken' })
      result.current.setSorting(sortingState)
    })

    // Reset state completely
    act(() => {
      result.current.resetTreeState()
    })

    expect(result.current.tree).toEqual({})
    expect(result.current.expanded).toEqual({})
    expect(result.current.loadingIds).toEqual(new Set())
    expect(result.current.loadedChildren).toEqual(new Set())
    expect(result.current.nextPageTokens).toEqual({})
    expect(result.current.loadingPageTokens).toEqual({})
    expect(result.current.sorting).toEqual([])
  })

  it('should reset data but preserve sorting when resetTreeData is called', () => {
    const { result } = renderHook(() => useTreeState())
    const treeNode = {
      entityHeader: mockEntityHeader,
      depth: 0,
      isLeaf: false,
    }
    const sortingState = [{ id: 'name', desc: false }]

    // Set up some state including sorting
    act(() => {
      result.current.setTree({ syn123: treeNode })
      result.current.setExpanded({ syn123: true })
      result.current.setLoadingIds(new Set(['syn123']))
      result.current.setLoadedChildren(new Set(['syn456']))
      result.current.setNextPageTokens({ syn123: 'token123' })
      result.current.setLoadingPageTokens({ syn456: 'loadingToken' })
      result.current.setSorting(sortingState)
    })

    // Reset only data, not sorting
    act(() => {
      result.current.resetTreeData()
    })

    expect(result.current.tree).toEqual({})
    expect(result.current.expanded).toEqual({})
    expect(result.current.loadingIds).toEqual(new Set())
    expect(result.current.loadedChildren).toEqual(new Set())
    expect(result.current.nextPageTokens).toEqual({})
    expect(result.current.loadingPageTokens).toEqual({})
    expect(result.current.sorting).toEqual(sortingState) // Sorting should be preserved
  })
})
