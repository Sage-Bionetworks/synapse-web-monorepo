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

const mockFlexRender = vi.mocked(flexRender)

const mockContextValue = {
  expanded: { syn123: true },
  loadingIds: new Set(['syn123']), // Changed to syn123 so the load more row (parentId: syn123) shows as loading
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: { syn123: 'nextToken' },
}

const mockTable = {
  getHeaderGroups: vi.fn(() => [
    {
      id: 'header-group-1',
      headers: [
        {
          id: 'header-1',
          column: { columnDef: { header: 'Name' } },
          getContext: vi.fn(() => ({})),
        },
        {
          id: 'header-2',
          column: { columnDef: { header: 'ID' } },
          getContext: vi.fn(() => ({})),
        },
      ],
    },
  ]),
  getRowModel: vi.fn(() => ({
    rows: [
      {
        id: 'row-1',
        original: {
          entityId: 'syn123',
          entityHeader: { id: 'syn123', name: 'Entity 1' },
          depth: 0,
          isLeaf: false,
          isLoadMore: false,
        },
        getVisibleCells: vi.fn(() => [
          {
            id: 'cell-1',
            column: { columnDef: { cell: 'Cell 1' } },
            getContext: vi.fn(() => ({})),
          },
          {
            id: 'cell-2',
            column: { columnDef: { cell: 'Cell 2' } },
            getContext: vi.fn(() => ({})),
          },
        ]),
      },
      {
        id: 'row-2',
        original: {
          entityId: 'syn123::loadmore::nextToken',
          entityHeader: { id: 'syn123', name: 'Entity 1' },
          depth: 1,
          isLeaf: true,
          parentId: 'syn123',
          isLoadMore: true,
        },
        getVisibleCells: vi.fn(),
      },
    ],
  })),
  getAllColumns: vi.fn(() => [{ id: 'col1' }, { id: 'col2' }]),
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
        rows: [
          {
            id: 'row-load-more',
            original: {
              entityId: 'syn456::loadmore::token',
              entityHeader: { id: 'syn456', name: 'Entity 2' },
              depth: 1,
              isLeaf: true,
              parentId: 'syn456',
              isLoadMore: true,
            },
            getVisibleCells: vi.fn(),
          },
        ],
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
        rows: [
          {
            id: 'row-load-more',
            original: {
              entityId: 'syn999::loadmore::token',
              entityHeader: { id: 'syn999', name: 'Entity 3' },
              depth: 1,
              isLeaf: true,
              parentId: 'syn999',
              isLoadMore: true,
            },
            getVisibleCells: vi.fn(),
          },
        ],
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
