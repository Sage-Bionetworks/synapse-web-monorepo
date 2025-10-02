import { renderHook } from '@testing-library/react'
import { SortBy, Direction } from '@sage-bionetworks/synapse-types'
import { useSorting } from './useSorting'

describe('useSorting', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return empty params when no sorting is applied', () => {
    const { result } = renderHook(() => useSorting([]))

    expect(result.current.sortBy).toBeUndefined()
    expect(result.current.sortDirection).toBeUndefined()
  })

  it('should convert name sorting to API parameters', () => {
    const sorting = [{ id: 'name', desc: false }]
    const { result } = renderHook(() => useSorting(sorting))

    expect(result.current.sortBy).toBe(SortBy.NAME)
    expect(result.current.sortDirection).toBe(Direction.ASC)
  })

  it('should convert createdOn sorting to API parameters', () => {
    const sorting = [{ id: 'createdOn', desc: true }]
    const { result } = renderHook(() => useSorting(sorting))

    expect(result.current.sortBy).toBe(SortBy.CREATED_ON)
    expect(result.current.sortDirection).toBe(Direction.DESC)
  })

  it('should convert modifiedOn sorting to API parameters', () => {
    const sorting = [{ id: 'modifiedOn', desc: false }]
    const { result } = renderHook(() => useSorting(sorting))

    expect(result.current.sortBy).toBe(SortBy.MODIFIED_ON)
    expect(result.current.sortDirection).toBe(Direction.ASC)
  })

  it('should return empty params for unsupported column', () => {
    const sorting = [{ id: 'unsupported', desc: false }]
    const { result } = renderHook(() => useSorting(sorting))

    expect(result.current.sortBy).toBeUndefined()
    expect(result.current.sortDirection).toBeUndefined()
  })
})
