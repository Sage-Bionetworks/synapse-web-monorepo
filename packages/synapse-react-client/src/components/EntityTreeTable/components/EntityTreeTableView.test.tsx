import React from 'react'
import { render, screen } from '@testing-library/react'
import { flexRender } from '@tanstack/react-table'
import { EntityTreeTableView } from './EntityTreeTableView'
import { EntityTreeTableContext } from './EntityTreeTableContext'

// Mock dependencies
vi.mock('@tanstack/react-table', () => ({
  flexRender: vi.fn(),
}))

vi.mock('./AutoLoadMore', () => ({
  AutoLoadMore: vi.fn(({ onLoadMore, depth, isLoading }) => (
    <div data-testid="auto-load-more">
      <button onClick={onLoadMore}>Load More</button>
      <span>Depth: {depth}</span>
      <span>Loading: {isLoading.toString()}</span>
    </div>
  )),
}))

vi.mock('../../TanStackTable/StyledTanStackTable', () => ({
  default: vi.fn(({ table, slots, styledTableContainerProps }) => {
    const Tr = slots?.Tr || (({ children }: any) => <tr>{children}</tr>)

    return (
      <div style={{ overflowX: 'auto' }}>
        <table className={styledTableContainerProps?.className}>
          <thead>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <th key={header.id}>
                    {mockFlexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: any) => (
              <Tr key={row.id} tableRow={row} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }),
}))

const mockFlexRender = vi.mocked(flexRender)

// Reusable mock functions
const createMockCells = () => [
  {
    id: 'cell-1',
    column: { columnDef: { cell: 'Cell 1' }, id: 'name' },
    getContext: vi.fn(() => ({})),
  },
  {
    id: 'cell-2',
    column: { columnDef: { cell: 'Cell 2' }, id: 'id' },
    getContext: vi.fn(() => ({})),
  },
]

const createMockRow = (original: any, id: string) => ({
  id,
  original,
  getVisibleCells: vi.fn(() => createMockCells()),
  getAllCells: vi.fn(() => createMockCells()),
})

const createMockLoadMoreRow = (parentId: string, depth: number = 1) =>
  createMockRow(
    {
      entityId: '',
      entityHeader: { id: parentId, name: `Entity ${parentId}` },
      depth,
      isLeaf: true,
      parentId,
      isLoadMore: true,
      pageToken: 'nextToken',
    },
    `row-load-more-${parentId}`,
  )

const mockContextValue = {
  expanded: { syn123: true },
  loadingIds: new Set(['syn123']), // Changed to syn123 so the load more row (parentId: syn123) shows as loading
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: { syn123: 'nextToken' },
  entityIdClicked: vi.fn(), // Mock function to satisfy EntityTreeTableContextType
}

const mockTable = {
  getHeaderGroups: vi.fn(() => [
    {
      id: 'header-group-1',
      headers: [
        {
          id: 'header-1',
          column: { columnDef: { header: 'Name' }, id: 'name' },
          getContext: vi.fn(() => ({})),
        },
        {
          id: 'header-2',
          column: { columnDef: { header: 'ID' }, id: 'id' },
          getContext: vi.fn(() => ({})),
        },
      ],
    },
  ]),
  getRowModel: vi.fn(() => ({
    rows: [
      createMockRow(
        {
          entityId: 'syn123',
          entityHeader: { id: 'syn123', name: 'Entity 1' },
          depth: 0,
          isLeaf: false,
          isLoadMore: false,
        },
        'row-1',
      ),
      createMockLoadMoreRow('syn123'),
    ],
  })),
  getAllColumns: vi.fn(() => [{ id: 'name' }, { id: 'id' }]),
  getState: vi.fn(() => ({
    columnSizingInfo: { isResizingColumn: false },
    columnSizing: {},
    columnVisibility: {},
  })),
  getTotalSize: vi.fn(() => 800),
} as any

describe('EntityTreeTableView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockFlexRender.mockImplementation(content => content as React.ReactElement)
  })

  const renderWithContext = (table = mockTable) => {
    return render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <EntityTreeTableView table={table} />
      </EntityTreeTableContext.Provider>,
    )
  }

  it('should render table headers correctly', () => {
    renderWithContext()

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('ID')).toBeInTheDocument()
  })

  it('should render normal table rows', () => {
    renderWithContext()

    expect(screen.getByText('Cell 1')).toBeInTheDocument()
    expect(screen.getByText('Cell 2')).toBeInTheDocument()
  })

  it('should render load more rows using AutoLoadMore component', () => {
    renderWithContext()

    expect(screen.getByTestId('auto-load-more')).toBeInTheDocument()
    expect(screen.getByText('Depth: 1')).toBeInTheDocument()
    expect(screen.getByText('Loading: true')).toBeInTheDocument() // syn123 parent is in loadingIds
  })

  it('should call loadMoreChildren when load more button is clicked', () => {
    renderWithContext()

    const loadMoreButton = screen.getByText('Load More')
    loadMoreButton.click()

    expect(mockContextValue.loadMoreChildren).toHaveBeenCalledWith(
      'syn123',
      'nextToken',
    )
  })

  it('should span load more row across all columns', () => {
    renderWithContext()

    const loadMoreCell = screen.getByTestId('auto-load-more').closest('td')
    expect(loadMoreCell).toHaveAttribute('colSpan', '2')
  })

  it('should determine loading state correctly for load more rows', () => {
    const customTable = {
      ...mockTable,
      getRowModel: vi.fn(() => ({
        rows: [createMockLoadMoreRow('syn456')],
      })),
    }

    const customContextValue = {
      ...mockContextValue,
      loadingIds: new Set(['syn456']), // syn456 is loading to match the parentId
    }

    render(
      <EntityTreeTableContext.Provider value={customContextValue}>
        <EntityTreeTableView table={customTable} />
      </EntityTreeTableContext.Provider>,
    )

    // syn456 is in loadingIds, so should show as loading
    expect(screen.getByText('Loading: true')).toBeInTheDocument()
  })

  it('should show not loading when parent is not in loadingIds', () => {
    const customTable = {
      ...mockTable,
      getRowModel: vi.fn(() => ({
        rows: [createMockLoadMoreRow('syn999')],
      })),
    }

    renderWithContext(customTable)

    // syn999 is not in loadingIds, so should show as not loading
    expect(screen.getByText('Loading: false')).toBeInTheDocument()
  })

  it('should render table with horizontal scroll container', () => {
    const { container } = renderWithContext()

    const scrollContainer = container.querySelector('div')
    expect(scrollContainer).toBeInTheDocument()
    expect(scrollContainer).toHaveStyle({ overflowX: 'auto' })
  })

  it('should apply correct CSS class to table', () => {
    renderWithContext()

    const table = screen.getByRole('table')
    expect(table).toHaveClass('entity-tree-table')
  })

  it('should call flexRender for headers and cells', () => {
    renderWithContext()

    // Check that flexRender was called for headers
    expect(mockFlexRender).toHaveBeenCalledWith('Name', {})
    expect(mockFlexRender).toHaveBeenCalledWith('ID', {})

    // Check that flexRender was called for cells
    expect(mockFlexRender).toHaveBeenCalledWith('Cell 1', {})
    expect(mockFlexRender).toHaveBeenCalledWith('Cell 2', {})
  })
})
