import { renderHook } from '@testing-library/react'
import { SortBy, Direction } from '@sage-bionetworks/synapse-types'
import { useSorting } from './useSorting'

const mockResetTreeData = vi.fn()

describe('useSorting', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return empty params when no sorting is applied', () => {
    const { result } = renderHook(() => useSorting([], mockResetTreeData))

    expect(result.current.sortBy).toBeUndefined()
    expect(result.current.sortDirection).toBeUndefined()
  })

  it('should convert name sorting to API parameters', () => {
    const sorting = [{ id: 'name', desc: false }]
    const { result } = renderHook(() => useSorting(sorting, mockResetTreeData))

    expect(result.current.sortBy).toBe(SortBy.NAME)
    expect(result.current.sortDirection).toBe(Direction.ASC)
  })

  it('should convert createdOn sorting to API parameters', () => {
    const sorting = [{ id: 'createdOn', desc: true }]
    const { result } = renderHook(() => useSorting(sorting, mockResetTreeData))

    expect(result.current.sortBy).toBe(SortBy.CREATED_ON)
    expect(result.current.sortDirection).toBe(Direction.DESC)
  })

  it('should convert modifiedOn sorting to API parameters', () => {
    const sorting = [{ id: 'modifiedOn', desc: false }]
    const { result } = renderHook(() => useSorting(sorting, mockResetTreeData))

    expect(result.current.sortBy).toBe(SortBy.MODIFIED_ON)
    expect(result.current.sortDirection).toBe(Direction.ASC)
  })

  it('should return empty params for unsupported column', () => {
    const sorting = [{ id: 'unsupported', desc: false }]
    const { result } = renderHook(() => useSorting(sorting, mockResetTreeData))

    expect(result.current.sortBy).toBeUndefined()
    expect(result.current.sortDirection).toBeUndefined()
  })

  it('should not reset tree state on initial mount', () => {
    const sorting = [{ id: 'name', desc: false }]
    renderHook(() => useSorting(sorting, mockResetTreeData))

    expect(mockResetTreeData).not.toHaveBeenCalled()
  })

  it('should reset tree state when sorting changes', () => {
    const initialSorting = [{ id: 'name', desc: false }]
    const { rerender } = renderHook(
      ({ sorting }) => useSorting(sorting, mockResetTreeData),
      { initialProps: { sorting: initialSorting } },
    )

    expect(mockResetTreeData).not.toHaveBeenCalled()

    const newSorting = [{ id: 'modifiedOn', desc: true }]
    rerender({ sorting: newSorting })

    expect(mockResetTreeData).toHaveBeenCalledTimes(1)
  })

  it('should not reset tree state when sorting array reference changes but content is same', () => {
    const initialSorting = [{ id: 'name', desc: false }]
    const { rerender } = renderHook(
      ({ sorting }) => useSorting(sorting, mockResetTreeData),
      { initialProps: { sorting: initialSorting } },
    )

    // Same content, different array reference
    const sameSorting = [{ id: 'name', desc: false }]
    rerender({ sorting: sameSorting })

    expect(mockResetTreeData).not.toHaveBeenCalled()
  })
})
