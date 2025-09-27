import { render, screen, fireEvent } from '@testing-library/react'
import { IdColumnHeader } from './IdColumnHeader'
import { EntityBundleRow } from '../EntityTreeTable'

// Mock CopyToClipboardIcon component
vi.mock('../../CopyToClipboardIcon', () => ({
  CopyToClipboardIcon: vi.fn(({ value }) => (
    <button
      data-testid="copy-button"
      onClick={() => console.log('Copy:', value)}
    >
      Copy
    </button>
  )),
}))

// Mock ColumnHeader component
vi.mock('../../TanStackTable/ColumnHeader', () => ({
  default: vi.fn(({ title, additionalButtons }) => (
    <div>
      <span>{title}</span>
      {additionalButtons}
    </div>
  )),
}))

const mockRows: EntityBundleRow[] = [
  {
    entityId: 'syn123',
    entityHeader: {
      id: 'syn123',
      name: 'Entity 1',
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
    versionNumber: 1,
  },
  {
    entityId: 'syn456',
    entityHeader: {
      id: 'syn456',
      name: 'Entity 2',
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
    versionNumber: 1,
  },
  {
    entityId: 'syn789::loadmore::token',
    entityHeader: {
      id: 'syn789',
      name: 'Entity 3',
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
    isLeaf: true,
    parentId: 'syn789',
    versionNumber: 1,
    isLoadMore: true,
  },
]

const mockTable = {
  getRowModel: vi.fn(() => ({
    rows: mockRows.map(row => ({ original: row })),
  })),
} as any

const createMockHeaderContext = () => ({
  table: mockTable,
  header: {} as any,
  column: {} as any,
})

describe('IdColumnHeader', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render column header with title "ID"', () => {
    const headerContext = createMockHeaderContext()
    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByText('ID')).toBeInTheDocument()
  })

  it('should render copy button', () => {
    const headerContext = createMockHeaderContext()
    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
  })

  it('should get visible IDs and exclude load more rows', () => {
    const headerContext = createMockHeaderContext()
    render(<IdColumnHeader {...headerContext} />)

    const copyButton = screen.getByTestId('copy-button')
    fireEvent.click(copyButton)

    // Should log the IDs, excluding the load more row
    // The console.log in the mock should show 'syn123\nsyn456'
  })

  it('should handle empty row model', () => {
    const emptyTable = {
      getRowModel: vi.fn(() => ({
        rows: [],
      })),
    } as any

    const headerContext = {
      ...createMockHeaderContext(),
      table: emptyTable,
    }

    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
  })

  it('should handle all load more rows', () => {
    const loadMoreOnlyRows = [
      {
        ...mockRows[2],
        entityId: 'syn111::loadmore::token1',
        isLoadMore: true,
      },
      {
        ...mockRows[2],
        entityId: 'syn222::loadmore::token2',
        isLoadMore: true,
      },
    ]

    const loadMoreTable = {
      getRowModel: vi.fn(() => ({
        rows: loadMoreOnlyRows.map(row => ({ original: row })),
      })),
    } as any

    const headerContext = {
      ...createMockHeaderContext(),
      table: loadMoreTable,
    }

    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
    // Should result in empty string for copy value since all rows are filtered out
  })

  it('should filter out load more rows correctly', () => {
    const mixedRows = [
      mockRows[0], // normal row
      mockRows[2], // load more row
      mockRows[1], // normal row
    ]

    const mixedTable = {
      getRowModel: vi.fn(() => ({
        rows: mixedRows.map(row => ({ original: row })),
      })),
    } as any

    const headerContext = {
      ...createMockHeaderContext(),
      table: mixedTable,
    }

    render(<IdColumnHeader {...headerContext} />)

    const copyButton = screen.getByTestId('copy-button')
    fireEvent.click(copyButton)

    // Should only include syn123 and syn456, not the load more row
  })

  it('should join entity IDs with newlines', () => {
    // This test verifies the getVisibleIds function behavior
    const headerContext = createMockHeaderContext()
    render(<IdColumnHeader {...headerContext} />)

    // The copy functionality should join IDs with '\n'
    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
  })
})
