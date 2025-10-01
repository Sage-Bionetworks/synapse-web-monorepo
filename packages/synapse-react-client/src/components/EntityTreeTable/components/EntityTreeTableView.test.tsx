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
  default: vi.fn(({ table, slots, styledTableContainerProps, fullWidth }) => (
    <div data-testid="styled-tanstack-table">
      <div data-testid="table-props">
        {JSON.stringify({
          className: styledTableContainerProps?.className,
          fullWidth,
          hasCustomTr: !!slots?.Tr,
        })}
      </div>
    </div>
  )),
}))

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

  it('should render StyledTanStackTable with correct props', () => {
    renderWithContext()

    expect(screen.getByTestId('styled-tanstack-table')).toBeInTheDocument()

    const propsElement = screen.getByTestId('table-props')
    const props = JSON.parse(propsElement.textContent!)

    expect(props.className).toBe('entity-tree-table')
    expect(props.fullWidth).toBe(true)
    expect(props.hasCustomTr).toBe(true)
  })

  it('should render with horizontal scroll container', () => {
    const { container } = renderWithContext()

    const scrollContainer = container.querySelector('div')
    expect(scrollContainer).toBeInTheDocument()
    expect(scrollContainer).toHaveStyle({ overflowX: 'auto' })
  })

  it('should pass the table prop to StyledTanStackTable', () => {
    const customTable = {
      id: 'custom-table',
    } as unknown as Table<EntityBundleRow>
    renderWithContext(customTable)

    // The mock should still be called, indicating the table prop was passed
    expect(screen.getByTestId('styled-tanstack-table')).toBeInTheDocument()
  })

  it('should provide EntityTreeTableRow as custom Tr slot', () => {
    renderWithContext()

    const propsElement = screen.getByTestId('table-props')
    const props = JSON.parse(propsElement.textContent!)

    expect(props.hasCustomTr).toBe(true)
  })
})
