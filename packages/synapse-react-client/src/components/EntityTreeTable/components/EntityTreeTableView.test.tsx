import { render, screen } from '@testing-library/react'
import { Table } from '@tanstack/react-table'
import { EntityTreeTableView } from './EntityTreeTableView'
import { EntityTreeTableContext } from './EntityTreeTableContext'
import { EntityBundleRow } from '../EntityTreeTable'

// Mock dependencies
vi.mock('./EntityTreeTableRow', () => ({
  EntityTreeTableRow: vi.fn(() => <tr data-testid="entity-tree-table-row" />),
}))

vi.mock('../../TanStackTable/StyledTanStackTable', () => ({
  default: vi.fn(() => <div data-testid="styled-tanstack-table" />),
}))

import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'

const mockTable = {
  // Minimal mock - we're only testing that props are passed correctly
} as Table<EntityBundleRow>

const mockContextValue = {
  expanded: {},
  loadingIds: new Set<string>(),
  handleToggleExpanded: vi.fn(),
  loadMoreChildren: vi.fn(),
  nextPageTokens: {},
  onEntityIdClicked: vi.fn(),
}

describe('EntityTreeTableView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const renderWithContext = (table = mockTable) => {
    return render(
      <EntityTreeTableContext.Provider value={mockContextValue}>
        <EntityTreeTableView table={table} />
      </EntityTreeTableContext.Provider>,
    )
  }

  it('should render StyledTanStackTable', () => {
    renderWithContext()

    expect(screen.getByTestId('styled-tanstack-table')).toBeInTheDocument()
    expect(vi.mocked(StyledTanStackTable)).toHaveBeenCalledTimes(1)

    // Verify the props structure without being too strict about exact values
    const call = vi.mocked(StyledTanStackTable).mock.calls[0][0]
    expect(call.table).toBe(mockTable)
    expect(call.styledTableContainerProps?.className).toBe('entity-tree-table')
    expect(call.fullWidth).toBe(true)
    expect(call.slots?.Tr).toBeDefined()
  })

  it('should render with horizontal scroll container', () => {
    const { container } = renderWithContext()

    const scrollContainer = container.querySelector('div')
    expect(scrollContainer).toBeInTheDocument()
    expect(scrollContainer).toHaveStyle({ overflowX: 'auto' })
  })

  it('should pass custom table prop to StyledTanStackTable', () => {
    const customTable = {
      id: 'custom-table',
    } as unknown as Table<EntityBundleRow>
    renderWithContext(customTable)

    const call = vi.mocked(StyledTanStackTable).mock.calls[0][0]
    expect(call.table).toBe(customTable)
  })
})
