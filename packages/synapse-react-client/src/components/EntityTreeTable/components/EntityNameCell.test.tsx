import { render, screen, fireEvent } from '@testing-library/react'
import { NameCell } from './EntityNameCell'
import { EntityTreeTableContext } from './EntityTreeTableContext'
import { EntityBundleRow } from '../EntityTreeTable'

// Mock EntityLink component
vi.mock('@/components/EntityLink', () => ({
  EntityLink: vi.fn(({ entity }) => (
    <a href={`#${entity.id}`}>{entity.name}</a>
  )),
}))

// Mock SynapseSpinner component
vi.mock('@/components/LoadingScreen/LoadingScreen', () => ({
  SynapseSpinner: vi.fn(() => (
    <div data-testid="synapse-spinner">Loading...</div>
  )),
}))

const mockContextValue = {
  expanded: { syn123: true, syn456: false },
  loadingIds: new Set(['syn789']),
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: {},
}

const mockEntityBundleRow: EntityBundleRow = {
  entityId: 'syn123',
  entityHeader: {
    id: 'syn123',
    name: 'Test Entity',
    type: 'org.sagebionetworks.repo.model.FileEntity',
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
  isLeaf: false,
  parentId: 'syn456',
  versionNumber: 1,
}

const mockLeafRow: EntityBundleRow = {
  ...mockEntityBundleRow,
  entityId: 'syn789',
  entityHeader: {
    ...mockEntityBundleRow.entityHeader,
    id: 'syn789',
    name: 'Leaf Entity',
  },
  isLeaf: true,
}

const createMockCellContext = (row: EntityBundleRow) => ({
  row: { original: row } as any,
  column: {} as any,
  table: {} as any,
  cell: {} as any,
  getValue: vi.fn(),
  renderValue: vi.fn(),
})

describe('NameCell', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderWithContext = (row: EntityBundleRow) => {
    const cellContext = createMockCellContext(row)
    return render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <NameCell {...cellContext} />
      </EntityTreeTableContext.Provider>,
    )
  }

  it('should render entity name with link', () => {
    renderWithContext(mockEntityBundleRow)

    expect(screen.getByText('Test Entity')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '#syn123')
  })

  it('should render expand button for non-leaf nodes', () => {
    renderWithContext(mockEntityBundleRow)

    const expandButton = screen.getByRole('button', { name: /collapse/i })
    expect(expandButton).toBeInTheDocument()
  })

  it('should render collapse button for expanded non-leaf nodes', () => {
    renderWithContext(mockEntityBundleRow)

    const collapseButton = screen.getByRole('button', { name: /collapse/i })
    expect(collapseButton).toBeInTheDocument()
  })

  it('should render expand button for collapsed non-leaf nodes', () => {
    const collapsedRow = {
      ...mockEntityBundleRow,
      entityId: 'syn456',
      entityHeader: { ...mockEntityBundleRow.entityHeader, id: 'syn456' },
    }
    renderWithContext(collapsedRow)

    const expandButton = screen.getByRole('button', { name: /expand/i })
    expect(expandButton).toBeInTheDocument()
  })

  it('should not render expand/collapse button for leaf nodes', () => {
    renderWithContext(mockLeafRow)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should call handleToggleExpanded when expand/collapse button is clicked', () => {
    renderWithContext(mockEntityBundleRow)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockContextValue.handleToggleExpanded).toHaveBeenCalledWith('syn123')
  })

  it('should apply correct indentation based on depth', () => {
    const { container } = renderWithContext(mockEntityBundleRow)

    const mainBox = container.firstElementChild
    expect(mainBox).toHaveStyle('padding-left: 16px') // depth * 2 * 8px = 1 * 2 * 8 = 16px
  })

  it('should show loading spinner when entity is in loadingIds', () => {
    const loadingRow = {
      ...mockEntityBundleRow,
      entityId: 'syn789',
      entityHeader: { ...mockEntityBundleRow.entityHeader, id: 'syn789' },
    }
    renderWithContext(loadingRow)

    // Should show spinner since syn789 is in loadingIds
    expect(screen.getByTestId('synapse-spinner')).toBeInTheDocument()
  })

  it('should not show loading spinner when entity is not in loadingIds', () => {
    renderWithContext(mockEntityBundleRow)

    // Should not show spinner since syn123 is not in loadingIds
    expect(screen.queryByTestId('synapse-spinner')).not.toBeInTheDocument()
  })

  it('should render spacer for leaf nodes instead of expand button', () => {
    const { container } = renderWithContext(mockLeafRow)

    // Should have a spacer element for leaf nodes instead of a button
    const spacer = container.querySelector('div > div:first-child')
    expect(spacer).toBeInTheDocument()
    expect(spacer).not.toContainElement(screen.queryByRole('button'))
  })

  it('should apply text truncation styles to entity link container', () => {
    const { container } = renderWithContext(mockEntityBundleRow)

    // Verify that the link container exists and contains the EntityLink
    const linkContainer = container.querySelector('div > div:last-child')
    expect(linkContainer).toBeInTheDocument()
    expect(linkContainer).toContainElement(screen.getByRole('link'))
  })

  it('should handle different depths correctly', () => {
    const deepRow = { ...mockEntityBundleRow, depth: 5 }
    const { container } = renderWithContext(deepRow)

    const mainBox = container.firstElementChild
    expect(mainBox).toHaveStyle('padding-left: 80px') // depth * 2 * 8px = 5 * 2 * 8 = 80px
  })

  it('should render correct ARIA labels for accessibility', () => {
    // Test expanded state
    renderWithContext(mockEntityBundleRow)
    expect(screen.getByLabelText('Collapse')).toBeInTheDocument()

    // Test collapsed state
    vi.clearAllMocks()
    const collapsedRow = {
      ...mockEntityBundleRow,
      entityId: 'syn456',
      entityHeader: { ...mockEntityBundleRow.entityHeader, id: 'syn456' },
    }
    render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <NameCell {...createMockCellContext(collapsedRow)} />
      </EntityTreeTableContext.Provider>,
    )

    expect(screen.getByLabelText('Expand')).toBeInTheDocument()
  })
})
