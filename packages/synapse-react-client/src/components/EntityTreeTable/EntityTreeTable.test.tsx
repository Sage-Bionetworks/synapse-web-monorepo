import { render, screen } from '@testing-library/react'
import { EntityTreeTable } from './EntityTreeTable'
import { useEntityTreeState } from './hooks/useEntityTreeState'

vi.mock('./hooks/useEntityTreeState', () => ({
  useEntityTreeState: vi.fn(() => ({
    expanded: {},
    setExpanded: vi.fn(),
    tree: {},
    setTree: vi.fn(),
    loadingIds: new Set(),
    setLoadingIds: vi.fn(),
    loadedChildren: new Set(),
    setLoadedChildren: vi.fn(),
    nextPageTokens: {},
    setNextPageTokens: vi.fn(),
    loadingPageTokens: {},
    setLoadingPageTokens: vi.fn(),
    sorting: [],
    setSorting: vi.fn(),
    sortBy: undefined,
    sortDirection: undefined,
    rootHeader: undefined,
    rootChildren: undefined,
    resetTreeData: vi.fn(),
  })),
}))

// Mock other dependencies
vi.mock('./hooks/useTreeOperationsWithDirectFetch', () => ({
  useTreeOperationsWithDirectFetch: vi.fn(() => ({
    handleToggleExpanded: vi.fn(),
    loadMoreChildren: vi.fn(),
    flattenTree: vi.fn(() => []),
  })),
}))

vi.mock('./hooks/useTableColumns', () => ({
  useTableColumns: vi.fn(() => []),
}))

vi.mock('./hooks/useTableData', () => ({
  useTableData: vi.fn(() => []),
}))

vi.mock('@tanstack/react-table', () => ({
  useReactTable: vi.fn(() => ({
    getHeaderGroups: vi.fn(() => []),
    getRowModel: vi.fn(() => ({ rows: [] })),
  })),
  getCoreRowModel: vi.fn(),
}))

vi.mock('./components/EntityTreeTableView', () => ({
  EntityTreeTableView: () => <div data-testid="entity-tree-table-view" />,
}))

vi.mock('./components/EntityTreeTableContext', () => ({
  EntityTreeTableContext: {
    Provider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  },
}))

vi.mock('../SynapseTable/NoContentAvailable', () => ({
  default: () => <div data-testid="no-content-available" />,
}))

describe('EntityTreeTable', () => {
  it('should render successfully', () => {
    render(<EntityTreeTable rootId="syn123" />)
    expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
  })

  it('should call useEntityTreeState with correct parameters', () => {
    const mockUseEntityTreeState = vi.mocked(useEntityTreeState)

    render(
      <EntityTreeTable
        rootId="syn456"
        expandRootByDefault={false}
        showRootNode={false}
      />,
    )

    expect(mockUseEntityTreeState).toHaveBeenCalledWith('syn456', false, false)
  })
})
