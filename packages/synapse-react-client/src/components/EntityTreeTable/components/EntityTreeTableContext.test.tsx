import { render } from '@testing-library/react'
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

// Test component to use the context
const TestConsumer = () => {
  const context = useEntityTreeTableContext()
  return (
    <div>
      <div data-testid="expanded">{JSON.stringify(context.expanded)}</div>
      <div data-testid="loading-ids">
        {Array.from(context.loadingIds).join(',')}
      </div>
      <div data-testid="next-tokens">
        {JSON.stringify(context.nextPageTokens)}
      </div>
      <button
        data-testid="toggle-button"
        onClick={() => context.handleToggleExpanded('syn123')}
      >
        Toggle
      </button>
      <button
        data-testid="load-more-button"
        onClick={() => context.loadMoreChildren('syn123', 'token')}
      >
        Load More
      </button>
    </div>
  )
}

describe('EntityTreeTableContext', () => {
  it('should provide context values to consumers', () => {
    const { getByTestId } = render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <TestConsumer />
      </EntityTreeTableContext.Provider>,
    )

    expect(getByTestId('expanded')).toHaveTextContent('{"syn123":true}')
    expect(getByTestId('loading-ids')).toHaveTextContent('syn456')
    expect(getByTestId('next-tokens')).toHaveTextContent(
      '{"syn123":"token123"}',
    )
  })

  it('should allow calling context functions', () => {
    const { getByTestId } = render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <TestConsumer />
      </EntityTreeTableContext.Provider>,
    )

    const toggleButton = getByTestId('toggle-button')
    const loadMoreButton = getByTestId('load-more-button')

    toggleButton.click()
    expect(mockContextValue.handleToggleExpanded).toHaveBeenCalledWith('syn123')

    loadMoreButton.click()
    expect(mockContextValue.loadMoreChildren).toHaveBeenCalledWith(
      'syn123',
      'token',
    )
  })

  it('should throw error when used outside provider', () => {
    // Mock console.error to avoid test output noise
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<TestConsumer />)
    }).toThrow(
      'useEntityTreeTableContext must be used within EntityTreeTableContext.Provider',
    )

    consoleSpy.mockRestore()
  })

  it('should throw error when provider value is undefined', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(
        <EntityTreeTableContext.Provider value={undefined}>
          <TestConsumer />
        </EntityTreeTableContext.Provider>,
      )
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

    const { getByTestId } = render(
      <EntityTreeTableContext.Provider value={emptyContextValue}>
        <TestConsumer />
      </EntityTreeTableContext.Provider>,
    )

    expect(getByTestId('expanded')).toHaveTextContent('{}')
    expect(getByTestId('loading-ids')).toHaveTextContent('')
    expect(getByTestId('next-tokens')).toHaveTextContent('{}')
  })

  it('should handle context with multiple expanded and loading items', () => {
    const multipleItemsContext = {
      expanded: { syn123: true, syn456: false, syn789: true },
      loadingIds: new Set(['syn456', 'syn789', 'syn999']),
      handleToggleExpanded: vi.fn(),
      loadMoreChildren: vi.fn(),
      nextPageTokens: { syn123: 'token1', syn456: 'token2' },
    }

    const { getByTestId } = render(
      <EntityTreeTableContext.Provider value={multipleItemsContext}>
        <TestConsumer />
      </EntityTreeTableContext.Provider>,
    )

    expect(getByTestId('expanded')).toHaveTextContent(
      '{"syn123":true,"syn456":false,"syn789":true}',
    )
    expect(getByTestId('loading-ids')).toHaveTextContent('syn456,syn789,syn999')
    expect(getByTestId('next-tokens')).toHaveTextContent(
      '{"syn123":"token1","syn456":"token2"}',
    )
  })
})
