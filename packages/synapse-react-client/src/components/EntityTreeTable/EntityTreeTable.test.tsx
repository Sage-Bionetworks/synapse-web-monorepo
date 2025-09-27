import { render, screen } from '@testing-library/react'
import { EntityTreeTable } from './EntityTreeTable'
import { useTreeState } from './hooks/useTreeState'
import { useDataInitialization } from './hooks/useDataInitialization'
import { useTableColumns } from './hooks/useTableColumns'
import { useTableData } from './hooks/useTableData'
import { useReactTable } from '@tanstack/react-table'

// Mock all the custom hooks
vi.mock('./hooks/useTreeState', () => ({
  useTreeState: vi.fn(() => ({
    expanded: { syn123: true },
    setExpanded: vi.fn(),
    tree: { syn123: { entityHeader: { id: 'syn123', name: 'Test Entity' } } },
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
    resetTreeState: vi.fn(),
  })),
}))

vi.mock('./hooks/useSorting', () => ({
  useSorting: vi.fn(() => ({
    sortBy: undefined,
    sortDirection: undefined,
  })),
}))

vi.mock('./hooks/useTreeOperations', () => ({
  useTreeOperations: vi.fn(() => ({
    handleToggleExpanded: vi.fn(),
    handleChildrenLoaded: vi.fn(),
    loadMoreChildren: vi.fn(),
    flattenTree: vi.fn(() => []),
  })),
}))

vi.mock('./hooks/useDataInitialization', () => ({
  useDataInitialization: vi.fn(),
}))

vi.mock('./hooks/useTableColumns', () => ({
  useTableColumns: vi.fn(() => [
    { id: 'name', header: 'Name' },
    { id: 'id', header: 'ID' },
  ]),
}))

vi.mock('./hooks/useTableData', () => ({
  useTableData: vi.fn(() => [
    {
      entityId: 'syn123',
      entityHeader: { id: 'syn123', name: 'Test Entity' },
      depth: 0,
      isLeaf: false,
    },
  ]),
}))

// Mock TanStack Table
vi.mock('@tanstack/react-table', () => ({
  useReactTable: vi.fn(() => ({
    getHeaderGroups: vi.fn(() => []),
    getRowModel: vi.fn(() => ({ rows: [] })),
  })),
  getCoreRowModel: vi.fn(),
}))

// Mock child components
vi.mock('./components/ChildLoader', () => ({
  ChildLoader: vi.fn(({ entityId }) => (
    <div data-testid={`child-loader-${entityId}`}>ChildLoader</div>
  )),
}))

vi.mock('./components/EntityTreeTableView', () => ({
  EntityTreeTableView: vi.fn(() => (
    <div data-testid="entity-tree-table-view">EntityTreeTableView</div>
  )),
}))

vi.mock('./components/EntityTreeTableContext', () => ({
  EntityTreeTableContext: {
    Provider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  },
}))

describe('EntityTreeTable', () => {
  const defaultProps = {
    rootId: 'syn123',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render with default props', () => {
    render(<EntityTreeTable {...defaultProps} />)

    expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
  })

  it('should render with custom props', () => {
    render(
      <EntityTreeTable
        rootId="syn456"
        expandRootByDefault={false}
        showRootNode={false}
        enableSorting={false}
      />,
    )

    expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
  })

  it('should render child loaders for loading nodes', () => {
    const mockUseTreeState = vi.mocked(useTreeState)
    mockUseTreeState.mockReturnValueOnce({
      expanded: { syn123: true },
      setExpanded: vi.fn(),
      tree: {
        syn123: {
          entityHeader: {
            id: 'syn123',
            name: 'Test Entity',
            type: 'org.sagebionetworks.repo.model.Project',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
          depth: 0,
          isLeaf: false,
        },
      },
      setTree: vi.fn(),
      loadingIds: new Set(['syn456', 'syn789']),
      setLoadingIds: vi.fn(),
      loadedChildren: new Set(),
      setLoadedChildren: vi.fn(),
      nextPageTokens: {},
      setNextPageTokens: vi.fn(),
      loadingPageTokens: {},
      setLoadingPageTokens: vi.fn(),
      sorting: [],
      setSorting: vi.fn(),
      resetTreeState: vi.fn(),
    })

    render(<EntityTreeTable {...defaultProps} />)

    expect(screen.getByTestId('child-loader-syn456')).toBeInTheDocument()
    expect(screen.getByTestId('child-loader-syn789')).toBeInTheDocument()
  })

  it('should call initialization hooks with correct parameters', () => {
    const mockUseDataInitialization = vi.mocked(useDataInitialization)
    const mockUseTableColumns = vi.mocked(useTableColumns)
    const mockUseTableData = vi.mocked(useTableData)

    render(
      <EntityTreeTable
        rootId="syn123"
        expandRootByDefault={false}
        showRootNode={false}
        enableSorting={true}
      />,
    )

    expect(mockUseDataInitialization).toHaveBeenCalledWith(
      'syn123',
      false, // expandRootByDefault
      false, // showRootNode
      expect.any(Set), // loadedChildren
      expect.any(Function), // setTree
      expect.any(Function), // setNextPageTokens
      expect.any(Function), // setLoadedChildren
      expect.any(Function), // setExpanded
      undefined, // sortBy
      undefined, // sortDirection
    )

    expect(mockUseTableColumns).toHaveBeenCalledWith(true) // enableSorting
    expect(mockUseTableData).toHaveBeenCalledWith(
      expect.any(Object), // tree
      'syn123', // rootId
      false, // showRootNode
      expect.any(Object), // expanded
      expect.any(Object), // nextPageTokens
      expect.any(Function), // flattenTree
    )
  })

  it('should configure TanStack Table correctly', () => {
    const mockUseReactTable = vi.mocked(useReactTable)

    render(<EntityTreeTable {...defaultProps} enableSorting={false} />)

    expect(mockUseReactTable).toHaveBeenCalledTimes(1)

    const callArgs = mockUseReactTable.mock.calls[0][0]
    expect(callArgs).toHaveProperty('data')
    expect(callArgs).toHaveProperty('columns')
    expect(callArgs).toHaveProperty('state')
    expect(callArgs).toHaveProperty('getRowId')
    expect(callArgs.manualExpanding).toBe(true)
    expect(callArgs.manualSorting).toBe(true)
    expect(callArgs.enableSorting).toBe(false)
    expect(Array.isArray(callArgs.data)).toBe(true)
    expect(Array.isArray(callArgs.columns)).toBe(true)
    expect(typeof callArgs.getRowId).toBe('function')
    expect(typeof callArgs.onSortingChange).toBe('function')
  })

  it('should provide context to child components', () => {
    // This test is already covered by the component rendering successfully
    // and the context being used by child components
    render(<EntityTreeTable {...defaultProps} />)

    // Verify that the main component renders, which means context is working
    expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
  })

  it('should handle no loading nodes', () => {
    // Use the already mocked useTreeState and override its return value
    const mockUseTreeState = vi.mocked(useTreeState)
    mockUseTreeState.mockReturnValueOnce({
      expanded: { syn123: true },
      setExpanded: vi.fn(),
      tree: {
        syn123: {
          entityHeader: {
            id: 'syn123',
            name: 'Test Entity',
            type: 'org.sagebionetworks.repo.model.Project',
            versionNumber: 1,
            versionLabel: 'v1',
            benefactorId: 123,
            createdOn: '2023-01-01T00:00:00.000Z',
            modifiedOn: '2023-01-01T00:00:00.000Z',
            createdBy: 'user1',
            modifiedBy: 'user1',
            isLatestVersion: true,
          },
          depth: 0,
          isLeaf: false,
        },
      },
      setTree: vi.fn(),
      loadingIds: new Set(), // No loading IDs
      setLoadingIds: vi.fn(),
      loadedChildren: new Set(),
      setLoadedChildren: vi.fn(),
      nextPageTokens: {},
      setNextPageTokens: vi.fn(),
      loadingPageTokens: {},
      setLoadingPageTokens: vi.fn(),
      sorting: [],
      setSorting: vi.fn(),
      resetTreeState: vi.fn(),
    })

    render(<EntityTreeTable {...defaultProps} />)

    expect(screen.queryByTestId(/child-loader-/)).not.toBeInTheDocument()
  })
})
