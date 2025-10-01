import { renderHook } from '@testing-library/react'
import {
  EntityTreeTableContext,
  useEntityTreeTableContext,
} from './EntityTreeTableContext'

const mockContextValue = {
  expanded: { syn123: true },
  loadingIds: new Set(['syn456']),
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: { syn123: 'token123' },
}

describe('EntityTreeTableContext', () => {
  it('should provide context values to consumers', () => {
    const { result } = renderHook(() => useEntityTreeTableContext(), {
      wrapper: ({ children }) => (
        <EntityTreeTableContext.Provider value={mockContextValue}>
          {children}
        </EntityTreeTableContext.Provider>
      ),
    })

    expect(result.current.expanded).toEqual({ syn123: true })
    expect(result.current.loadingIds).toEqual(new Set(['syn456']))
    expect(result.current.nextPageTokens).toEqual({ syn123: 'token123' })
    expect(result.current.handleToggleExpanded).toBe(
      mockContextValue.handleToggleExpanded,
    )
    expect(result.current.loadMoreChildren).toBe(
      mockContextValue.loadMoreChildren,
    )
  })

  it('should allow calling context functions', () => {
    const { result } = renderHook(() => useEntityTreeTableContext(), {
      wrapper: ({ children }) => (
        <EntityTreeTableContext.Provider value={mockContextValue}>
          {children}
        </EntityTreeTableContext.Provider>
      ),
    })

    result.current.handleToggleExpanded('syn123')
    expect(mockContextValue.handleToggleExpanded).toHaveBeenCalledWith('syn123')

    result.current.loadMoreChildren('syn123', 'token')
    expect(mockContextValue.loadMoreChildren).toHaveBeenCalledWith(
      'syn123',
      'token',
    )
  })

  it('should throw error when used outside provider', () => {
    // Mock console.error to avoid test output noise
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useEntityTreeTableContext())
    }).toThrow(
      'useEntityTreeTableContext must be used within EntityTreeTableContext.Provider',
    )

    consoleSpy.mockRestore()
  })

  it('should throw error when provider value is undefined', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      renderHook(() => useEntityTreeTableContext(), {
        wrapper: ({ children }) => (
          <EntityTreeTableContext.Provider value={undefined}>
            {children}
          </EntityTreeTableContext.Provider>
        ),
      })
    }).toThrow(
      'useEntityTreeTableContext must be used within EntityTreeTableContext.Provider',
    )

    consoleSpy.mockRestore()
  })

  it('should handle empty context values', () => {
    const emptyContextValue = {
      expanded: {},
      loadingIds: new Set<string>(),
      handleToggleExpanded: vi.fn(),
      loadMoreChildren: vi.fn(),
      nextPageTokens: {},
    }

    const { result } = renderHook(() => useEntityTreeTableContext(), {
      wrapper: ({ children }) => (
        <EntityTreeTableContext.Provider value={emptyContextValue}>
          {children}
        </EntityTreeTableContext.Provider>
      ),
    })

    expect(result.current.expanded).toEqual({})
    expect(result.current.loadingIds).toEqual(new Set<string>())
    expect(result.current.nextPageTokens).toEqual({})
  })

  it('should handle context with multiple expanded and loading items', () => {
    const multipleItemsContext = {
      expanded: { syn123: true, syn456: false, syn789: true },
      loadingIds: new Set(['syn456', 'syn789', 'syn999']),
      handleToggleExpanded: vi.fn(),
      loadMoreChildren: vi.fn(),
      nextPageTokens: { syn123: 'token1', syn456: 'token2' },
    }

    const { result } = renderHook(() => useEntityTreeTableContext(), {
      wrapper: ({ children }) => (
        <EntityTreeTableContext.Provider value={multipleItemsContext}>
          {children}
        </EntityTreeTableContext.Provider>
      ),
    })

    expect(result.current.expanded).toEqual({
      syn123: true,
      syn456: false,
      syn789: true,
    })
    expect(result.current.loadingIds).toEqual(
      new Set(['syn456', 'syn789', 'syn999']),
    )
    expect(result.current.nextPageTokens).toEqual({
      syn123: 'token1',
      syn456: 'token2',
    })
  })
})
