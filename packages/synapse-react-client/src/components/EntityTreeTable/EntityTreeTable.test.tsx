import { render, screen, waitFor } from '@testing-library/react'
import { EntityTreeTable } from './EntityTreeTable'
import { EntityHeader } from '@sage-bionetworks/synapse-types'

const {
  mockResetTreeData,
  mockUseEntityTreeState,
  mockInvalidateEntityChildrenQueries,
  mockUseTreeOperationsWithDirectFetch,
} = vi.hoisted(() => ({
  mockResetTreeData: vi.fn(),
  mockUseEntityTreeState: vi.fn(),
  mockInvalidateEntityChildrenQueries: vi.fn(),
  mockUseTreeOperationsWithDirectFetch: vi.fn(),
}))

vi.mock('./hooks/useEntityTreeState', () => ({
  useEntityTreeState: mockUseEntityTreeState,
}))

// Mock other dependencies
vi.mock('./hooks/useTreeOperationsWithDirectFetch', () => ({
  useTreeOperationsWithDirectFetch: mockUseTreeOperationsWithDirectFetch,
}))

const buildEntityHeader = (id: string): EntityHeader => ({
  id,
  name: id,
  type: 'org.sagebionetworks.repo.model.FileEntity',
  benefactorId: 1,
  createdOn: '2020-01-01T00:00:00.000Z',
  modifiedOn: '2020-01-01T00:00:00.000Z',
  createdBy: '1',
  modifiedBy: '1',
  isLatestVersion: true,
})

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
  beforeEach(() => {
    mockResetTreeData.mockReset()
    mockInvalidateEntityChildrenQueries.mockReset()
    mockUseEntityTreeState.mockReset()
    mockUseEntityTreeState.mockReturnValue({
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
      resetTreeData: mockResetTreeData,
    })
    mockUseTreeOperationsWithDirectFetch.mockReset()
    mockUseTreeOperationsWithDirectFetch.mockReturnValue({
      handleToggleExpanded: vi.fn(),
      loadMoreChildren: vi.fn(),
      flattenTree: vi.fn(() => []),
      invalidateEntityChildrenQueries: mockInvalidateEntityChildrenQueries,
    })
  })

  it('should render successfully', () => {
    render(<EntityTreeTable rootId="syn123" />)
    expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
  })

  it('should call useEntityTreeState with correct parameters', () => {
    render(
      <EntityTreeTable
        rootId="syn456"
        expandRootByDefault={false}
        showRootNode={false}
      />,
    )

    expect(mockUseEntityTreeState).toHaveBeenCalledWith('syn456', false, false)
  })

  it('invalidates cached entity children when the token changes', async () => {
    const rootId = 'syn999'

    mockUseEntityTreeState.mockReturnValue({
      expanded: {},
      setExpanded: vi.fn(),
      tree: {
        [rootId]: {
          entityHeader: buildEntityHeader(rootId),
          depth: 0,
          isLeaf: false,
          children: [],
        },
        synChild: {
          entityHeader: buildEntityHeader('synChild'),
          depth: 1,
          isLeaf: true,
          parentId: rootId,
          children: [],
        },
      },
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
      resetTreeData: mockResetTreeData,
    })

    render(<EntityTreeTable rootId={rootId} invalidateCacheToken="refresh" />)

    await waitFor(() => {
      expect(mockInvalidateEntityChildrenQueries).toHaveBeenCalledWith(rootId)
      expect(mockResetTreeData).toHaveBeenCalledTimes(1)
    })
  })
})
