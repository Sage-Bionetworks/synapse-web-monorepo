import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EntityTreeTableRow } from './EntityTreeTableRow'
import { EntityTreeTableContext } from './EntityTreeTableContext'

// Mock dependencies
vi.mock('./AutoLoadMore', () => ({
  AutoLoadMore: vi.fn(({ onLoadMore, depth, isLoading, pageToken }) => (
    <div data-testid="auto-load-more">
      <button onClick={onLoadMore}>Load More</button>
      <span data-testid="depth">Depth: {depth}</span>
      <span data-testid="loading-state">Loading: {isLoading.toString()}</span>
      <span data-testid="page-token">Token: {pageToken}</span>
    </div>
  )),
}))

vi.mock('../../TanStackTable/TableCellRenderer', () => ({
  TableCellRenderer: vi.fn(({ column, getValue }) => (
    <td data-testid={`cell-${column.id}`}>{getValue()}</td>
  )),
}))

// Helper functions to create mock objects
const createMockCell = (id: string, columnId: string, value: string) => ({
  id,
  column: { id: columnId },
  getValue: vi.fn(() => value),
})

const createMockTableRow = (original: any, cells: any[] = []) => ({
  id: `row-${original.entityId || 'load-more'}`,
  original,
  getVisibleCells: vi.fn(() => cells),
  getAllCells: vi.fn(() => cells),
})

const mockContextValue = {
  expanded: {},
  loadingIds: new Set<string>(),
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: {},
  onEntityIdClicked: vi.fn(),
}

const renderWithContext = (
  props: any,
  contextOverrides: Partial<typeof mockContextValue> = {},
) => {
  const contextValue = { ...mockContextValue, ...contextOverrides }
  return render(
    <EntityTreeTableContext.Provider value={contextValue}>
      <table>
        <tbody>
          <EntityTreeTableRow {...props} />
        </tbody>
      </table>
    </EntityTreeTableContext.Provider>,
  )
}

describe('EntityTreeTableRow', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('normal data rows', () => {
    it('should render normal row with cells', () => {
      const cells = [
        createMockCell('cell-1', 'name', 'Entity Name'),
        createMockCell('cell-2', 'id', 'syn123'),
      ]

      const tableRow = createMockTableRow(
        {
          entityId: 'syn123',
          entityHeader: { id: 'syn123', name: 'Entity Name' },
          depth: 0,
          isLeaf: false,
          isLoadMore: false,
        },
        cells,
      )

      renderWithContext({ tableRow, row: tableRow })

      expect(screen.getByTestId('cell-name')).toHaveTextContent('Entity Name')
      expect(screen.getByTestId('cell-id')).toHaveTextContent('syn123')
    })

    it('should render all visible cells', () => {
      const cells = [
        createMockCell('cell-1', 'name', 'Test'),
        createMockCell('cell-2', 'type', 'Folder'),
        createMockCell('cell-3', 'modified', '2023-01-01'),
      ]

      const tableRow = createMockTableRow(
        {
          entityId: 'syn456',
          isLoadMore: false,
        },
        cells,
      )

      renderWithContext({ tableRow, row: tableRow })

      expect(screen.getByTestId('cell-name')).toBeInTheDocument()
      expect(screen.getByTestId('cell-type')).toBeInTheDocument()
      expect(screen.getByTestId('cell-modified')).toBeInTheDocument()
    })
  })

  describe('load more rows', () => {
    it('should render AutoLoadMore component for load more rows', () => {
      const cells = [
        createMockCell('cell-1', 'name', ''),
        createMockCell('cell-2', 'id', ''),
      ]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn123',
          depth: 1,
          isLoadMore: true,
          pageToken: 'nextToken123',
        },
        cells,
      )

      renderWithContext({ tableRow, row: tableRow })

      expect(screen.getByTestId('auto-load-more')).toBeInTheDocument()
      expect(screen.getByTestId('depth')).toHaveTextContent('Depth: 1')
      expect(screen.getByTestId('page-token')).toHaveTextContent(
        'Token: nextToken123',
      )
    })

    it('should show loading state when parent is loading', () => {
      const cells = [createMockCell('cell-1', 'name', '')]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn123',
          depth: 2,
          isLoadMore: true,
          pageToken: 'token456',
        },
        cells,
      )

      renderWithContext(
        { tableRow, row: tableRow },
        { loadingIds: new Set(['syn123']) },
      )

      expect(screen.getByTestId('loading-state')).toHaveTextContent(
        'Loading: true',
      )
    })

    it('should show not loading when parent is not loading', () => {
      const cells = [createMockCell('cell-1', 'name', '')]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn456',
          depth: 1,
          isLoadMore: true,
          pageToken: 'token789',
        },
        cells,
      )

      renderWithContext(
        { tableRow, row: tableRow },
        { loadingIds: new Set(['syn123']) }, // different parent, not loading
      )

      expect(screen.getByTestId('loading-state')).toHaveTextContent(
        'Loading: false',
      )
    })

    it('should call loadMoreChildren when load more button is clicked', async () => {
      const user = userEvent.setup()
      const loadMoreChildren = vi.fn()
      const cells = [createMockCell('cell-1', 'name', '')]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn789',
          depth: 1,
          isLoadMore: true,
          pageToken: 'loadMoreToken',
        },
        cells,
      )

      renderWithContext({ tableRow, row: tableRow }, { loadMoreChildren })

      const loadMoreButton = screen.getByText('Load More')
      await user.click(loadMoreButton)

      expect(loadMoreChildren).toHaveBeenCalledWith('syn789', 'loadMoreToken')
    })

    it('should span load more cell across all columns', () => {
      const cells = [
        createMockCell('cell-1', 'name', ''),
        createMockCell('cell-2', 'id', ''),
        createMockCell('cell-3', 'type', ''),
      ]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn123',
          depth: 1,
          isLoadMore: true,
          pageToken: 'token',
        },
        cells,
      )

      renderWithContext({ tableRow, row: tableRow })

      const loadMoreCell = screen.getByTestId('auto-load-more').closest('td')
      expect(loadMoreCell).toHaveAttribute('colSpan', '3')
    })
  })

  describe('edge cases', () => {
    it('should return null when tableRow is null', () => {
      const { container } = renderWithContext({ tableRow: null, row: null })

      expect(container.querySelector('tr')).not.toBeInTheDocument()
    })

    it('should return null when tableRow is undefined', () => {
      const { container } = renderWithContext({
        tableRow: undefined,
        row: undefined,
      })

      expect(container.querySelector('tr')).not.toBeInTheDocument()
    })

    it('should handle missing parentId in load more rows', () => {
      const cells = [createMockCell('cell-1', 'name', '')]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          // parentId is undefined
          depth: 1,
          isLoadMore: true,
          pageToken: 'token',
        },
        cells,
      )

      // Should not crash even with undefined parentId
      renderWithContext({ tableRow, row: tableRow })

      expect(screen.getByTestId('auto-load-more')).toBeInTheDocument()
    })
  })

  describe('props forwarding', () => {
    it('should forward additional props to tr element for normal rows', () => {
      const cells = [createMockCell('cell-1', 'name', 'Test')]
      const tableRow = createMockTableRow(
        {
          entityId: 'syn123',
          isLoadMore: false,
        },
        cells,
      )

      const { container } = renderWithContext({
        tableRow,
        row: tableRow,
        'data-testid': 'custom-row',
        className: 'custom-class',
      })

      const tr = container.querySelector('tr')
      expect(tr).toHaveAttribute('data-testid', 'custom-row')
      expect(tr).toHaveClass('custom-class')
    })

    it('should forward additional props to tr element for load more rows', () => {
      const cells = [createMockCell('cell-1', 'name', '')]
      const tableRow = createMockTableRow(
        {
          entityId: '',
          parentId: 'syn123',
          depth: 1,
          isLoadMore: true,
          pageToken: 'token',
        },
        cells,
      )

      const { container } = renderWithContext({
        tableRow,
        row: tableRow,
        'data-testid': 'load-more-row',
        className: 'load-more-class',
      })

      const tr = container.querySelector('tr')
      expect(tr).toHaveAttribute('data-testid', 'load-more-row')
      expect(tr).toHaveClass('load-more-class')
    })
  })
})
