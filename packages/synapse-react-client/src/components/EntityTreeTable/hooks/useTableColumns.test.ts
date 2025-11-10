import { renderHook } from '@testing-library/react'
import { useTheme, useMediaQuery } from '@mui/material'
import { useTableColumns } from './useTableColumns'

// Mock MUI hooks
vi.mock('@mui/material', async () => {
  const actual = await vi.importActual('@mui/material')
  return {
    ...actual,
    useTheme: vi.fn(),
    useMediaQuery: vi.fn(),
  }
})

const mockUseTheme = vi.mocked(useTheme)
const mockUseMediaQuery = vi.mocked(useMediaQuery)

describe('useTableColumns', () => {
  const mockTheme = {
    breakpoints: {
      up: vi.fn((breakpoint: string) => `@media (min-width: ${breakpoint})`),
    },
  }

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseTheme.mockReturnValue(mockTheme as any)
  })

  it('should return only name and download columns on small screens', () => {
    mockUseMediaQuery.mockImplementation(() => false)

    const { result } = renderHook(() => useTableColumns(true))

    expect(result.current).toHaveLength(2)
    expect(result.current[0].id).toBe('name')
    expect(result.current[1].id).toBe('download')
  })

  it('should include medium breakpoint columns on medium screens', () => {
    mockUseMediaQuery.mockImplementation(query => {
      return typeof query === 'string' && query.includes('md')
    })

    const { result } = renderHook(() => useTableColumns(true))

    const columnIds = result.current.map(col => col.id)
    expect(columnIds).toContain('name')
    expect(columnIds).toContain('badges')
    expect(columnIds).toContain('id')
    expect(columnIds).toContain('modifiedOn')
    expect(columnIds).toContain('size')
    expect(columnIds).toContain('download')
    expect(columnIds).not.toContain('createdOn')
    expect(columnIds).not.toContain('modifiedBy')
    expect(columnIds).not.toContain('md5')
  })

  it('should include all columns on extra large screens', () => {
    mockUseMediaQuery.mockImplementation(() => true)

    const { result } = renderHook(() => useTableColumns(true))

    const columnIds = result.current.map(col => col.id)
    expect(columnIds).toContain('name')
    expect(columnIds).toContain('badges')
    expect(columnIds).toContain('id')
    expect(columnIds).toContain('createdOn')
    expect(columnIds).toContain('modifiedOn')
    expect(columnIds).toContain('modifiedBy')
    expect(columnIds).toContain('size')
    expect(columnIds).toContain('md5')
    expect(columnIds).toContain('download')
  })

  it('should disable sorting on all columns when enableSorting is false', () => {
    mockUseMediaQuery.mockReturnValue(true)

    const { result } = renderHook(() => useTableColumns(false))

    const sortableColumns = result.current.filter(
      col => col.enableSorting === true,
    )
    expect(sortableColumns).toHaveLength(0)
  })

  it('should enable sorting on sortable columns when enableSorting is true', () => {
    mockUseMediaQuery.mockReturnValue(true)

    const { result } = renderHook(() => useTableColumns(true))

    const nameColumn = result.current.find(col => col.id === 'name')
    const createdOnColumn = result.current.find(col => col.id === 'createdOn')
    const modifiedOnColumn = result.current.find(col => col.id === 'modifiedOn')
    const badgesColumn = result.current.find(col => col.id === 'badges')

    expect(nameColumn?.enableSorting).toBe(true)
    expect(createdOnColumn?.enableSorting).toBe(true)
    expect(modifiedOnColumn?.enableSorting).toBe(true)
    expect(badgesColumn?.enableSorting).toBe(false)
  })

  it('should have correct column definitions for sortable columns', () => {
    mockUseMediaQuery.mockReturnValue(true)

    const { result } = renderHook(() => useTableColumns(true))

    const nameColumn = result.current.find(col => col.id === 'name')
    const createdOnColumn = result.current.find(col => col.id === 'createdOn')
    const modifiedOnColumn = result.current.find(col => col.id === 'modifiedOn')

    expect(nameColumn?.id).toBe('name')
    expect(createdOnColumn?.id).toBe('createdOn')
    expect(modifiedOnColumn?.id).toBe('modifiedOn')
  })

  it('should memoize results based on enableSorting and breakpoints', () => {
    mockUseMediaQuery.mockReturnValue(true)

    const { result, rerender } = renderHook(
      ({ enableSorting }) => useTableColumns(enableSorting),
      { initialProps: { enableSorting: true } },
    )

    const firstResult = result.current

    // Rerender with same props
    rerender({ enableSorting: true })
    expect(result.current).toBe(firstResult)

    // Rerender with different enableSorting
    rerender({ enableSorting: false })
    expect(result.current).not.toBe(firstResult)
  })
})
