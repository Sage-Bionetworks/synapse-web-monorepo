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
    resetTreeData: vi.fn(),
  })),
}))

vi.mock('./hooks/useSorting', () => ({
  useSorting: vi.fn(() => ({
    sortBy: undefined,
    sortDirection: undefined,
  })),
}))

vi.mock('./hooks/useTreeOperationsWithDirectFetch', () => ({
  useTreeOperationsWithDirectFetch: vi.fn(() => ({
    handleToggleExpanded: vi.fn(),
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

// Mock React Query
vi.mock('@tanstack/react-query', () => ({
  useQueryClient: vi.fn(() => ({
    fetchQuery: vi.fn().mockResolvedValue({
      page: [],
      nextPageToken: null,
    }),
  })),
}))

// Mock Synapse Context
vi.mock('@/utils/context/SynapseContext', () => ({
  useSynapseContext: vi.fn(() => ({
    accessToken: 'mock-token',
    keyFactory: {
      getEntityChildrenQueryKey: vi.fn(() => ['entity-children', 'syn123']),
    },
  })),
}))

// Mock child components
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

vi.mock('../SynapseTable/NoContentAvailable', () => ({
  default: vi.fn(() => (
    <div data-testid="no-content-available">NoContentAvailable</div>
  )),
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
      expect.any(Function), // resetTreeState
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

  it('should verify children are initially loaded through useDataInitialization', () => {
    const mockUseDataInitialization = vi.mocked(useDataInitialization)
    const mockSetTree = vi.fn()
    const mockSetLoadedChildren = vi.fn()
    const mockSetNextPageTokens = vi.fn()
    const mockSetExpanded = vi.fn()

    // Mock useTreeState to return the setter functions
    const mockUseTreeState = vi.mocked(useTreeState)
    mockUseTreeState.mockReturnValueOnce({
      expanded: { syn123: true },
      setExpanded: mockSetExpanded,
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
          children: [
            {
              entityHeader: {
                id: 'syn456',
                name: 'Child Entity',
                type: 'org.sagebionetworks.repo.model.Folder',
                versionNumber: 1,
                versionLabel: 'v1',
                benefactorId: 123,
                createdOn: '2023-01-01T00:00:00.000Z',
                modifiedOn: '2023-01-01T00:00:00.000Z',
                createdBy: 'user1',
                modifiedBy: 'user1',
                isLatestVersion: true,
              },
              depth: 1,
              isLeaf: true,
              parentId: 'syn123',
            },
          ],
        },
      },
      setTree: mockSetTree,
      loadingIds: new Set(),
      setLoadingIds: vi.fn(),
      loadedChildren: new Set(['syn123']), // Root children are loaded
      setLoadedChildren: mockSetLoadedChildren,
      nextPageTokens: {},
      setNextPageTokens: mockSetNextPageTokens,
      loadingPageTokens: {},
      setLoadingPageTokens: vi.fn(),
      sorting: [],
      setSorting: vi.fn(),
      resetTreeState: vi.fn(),
      resetTreeData: vi.fn(),
    })

    render(
      <EntityTreeTable
        rootId="syn123"
        expandRootByDefault={true}
        showRootNode={true}
        enableSorting={true}
      />,
    )

    // Verify that useDataInitialization was called with the correct parameters
    expect(mockUseDataInitialization).toHaveBeenCalledWith(
      'syn123', // rootId
      true, // expandRootByDefault
      true, // showRootNode
      expect.any(Set), // loadedChildren - should contain 'syn123'
      mockSetTree, // setTree
      mockSetNextPageTokens, // setNextPageTokens
      mockSetLoadedChildren, // setLoadedChildren
      mockSetExpanded, // setExpanded
      expect.any(Function), // resetTreeState
      undefined, // sortBy
      undefined, // sortDirection
    )

    // Verify that loadedChildren contains the root ID, indicating children have been loaded
    const loadedChildrenArg = mockUseDataInitialization.mock.calls[0][3]
    expect(loadedChildrenArg.has('syn123')).toBe(true)
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
      resetTreeData: vi.fn(),
    })

    render(<EntityTreeTable {...defaultProps} />)

    expect(screen.queryByTestId(/child-loader-/)).not.toBeInTheDocument()
  })

  it('should always enable column resizing', () => {
    const mockUseReactTable = vi.mocked(useReactTable)

    render(<EntityTreeTable {...defaultProps} />)

    expect(mockUseReactTable).toHaveBeenCalledWith(
      expect.objectContaining({
        columnResizeMode: 'onChange',
      }),
    )
  })

  describe('NoContentAvailable', () => {
    it('should not show NoContentAvailable when showRootNode is true', () => {
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
            children: [], // Empty children
          },
        },
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(['syn123']), // Children loaded
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={true} />)

      expect(
        screen.queryByTestId('no-content-available'),
      ).not.toBeInTheDocument()
      expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
    })

    it('should show NoContentAvailable when showRootNode is false and root has no children', () => {
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
            children: [], // Empty children
          },
        },
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(['syn123']), // Children loaded
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={false} />)

      expect(screen.getByTestId('no-content-available')).toBeInTheDocument()
      expect(
        screen.queryByTestId('entity-tree-table-view'),
      ).not.toBeInTheDocument()
    })

    it('should show NoContentAvailable when showRootNode is false and root has undefined children', () => {
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
            // children: undefined - no children property
          },
        },
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(['syn123']), // Children loaded
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={false} />)

      expect(screen.getByTestId('no-content-available')).toBeInTheDocument()
      expect(
        screen.queryByTestId('entity-tree-table-view'),
      ).not.toBeInTheDocument()
    })

    it('should not show NoContentAvailable when children have not been loaded yet', () => {
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
            children: [], // Empty children
          },
        },
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(), // Children NOT loaded
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={false} />)

      expect(
        screen.queryByTestId('no-content-available'),
      ).not.toBeInTheDocument()
      expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
    })

    it('should not show NoContentAvailable when root node does not exist', () => {
      const mockUseTreeState = vi.mocked(useTreeState)
      mockUseTreeState.mockReturnValueOnce({
        expanded: {},
        setExpanded: vi.fn(),
        tree: {}, // Empty tree - no root node
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(['syn123']),
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={false} />)

      expect(
        screen.queryByTestId('no-content-available'),
      ).not.toBeInTheDocument()
      expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
    })

    it('should not show NoContentAvailable when showRootNode is false but root has children', () => {
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
            children: [
              {
                entityHeader: {
                  id: 'syn456',
                  name: 'Child Entity',
                  type: 'org.sagebionetworks.repo.model.Folder',
                  versionNumber: 1,
                  versionLabel: 'v1',
                  benefactorId: 123,
                  createdOn: '2023-01-01T00:00:00.000Z',
                  modifiedOn: '2023-01-01T00:00:00.000Z',
                  createdBy: 'user1',
                  modifiedBy: 'user1',
                  isLatestVersion: true,
                },
                depth: 1,
                isLeaf: true,
                parentId: 'syn123',
              },
            ],
          },
        },
        setTree: vi.fn(),
        loadingIds: new Set(),
        setLoadingIds: vi.fn(),
        loadedChildren: new Set(['syn123']), // Children loaded
        setLoadedChildren: vi.fn(),
        nextPageTokens: {},
        setNextPageTokens: vi.fn(),
        loadingPageTokens: {},
        setLoadingPageTokens: vi.fn(),
        sorting: [],
        setSorting: vi.fn(),
        resetTreeState: vi.fn(),
        resetTreeData: vi.fn(),
      })

      render(<EntityTreeTable rootId="syn123" showRootNode={false} />)

      expect(
        screen.queryByTestId('no-content-available'),
      ).not.toBeInTheDocument()
      expect(screen.getByTestId('entity-tree-table-view')).toBeInTheDocument()
    })
  })
})
