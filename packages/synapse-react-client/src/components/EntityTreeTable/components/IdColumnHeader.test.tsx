import { render, screen } from '@testing-library/react'
import { IdColumnHeader } from './IdColumnHeader'
import { EntityBundleRow } from '../EntityTreeTable'
import { HeaderContext } from '@tanstack/react-table'

// Mock CopyToClipboardIcon component
const mockCopyToClipboardIcon = vi.fn()

interface CopyToClipboardIconProps {
  value: string
  sizePx?: number
}

vi.mock('../../CopyToClipboardIcon', () => ({
  CopyToClipboardIcon: (props: CopyToClipboardIconProps) => {
    mockCopyToClipboardIcon(props)
    return (
      <button
        data-testid="copy-button"
        onClick={() => console.log('Copy:', props.value)}
      >
        Copy
      </button>
    )
  },
}))

// Mock ColumnHeader component
interface ColumnHeaderProps {
  title?: string
  additionalButtons?: React.ReactNode
}

vi.mock('../../TanStackTable/ColumnHeader', () => ({
  default: vi.fn(({ title, additionalButtons }: ColumnHeaderProps) => (
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
    entityId: '',
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

interface MockTable {
  getRowModel: () => {
    rows: Array<{ original: EntityBundleRow }>
  }
}

const mockTable: MockTable = {
  getRowModel: vi.fn(() => ({
    rows: mockRows.map(row => ({ original: row })),
  })),
}

const createMockHeaderContext = (): HeaderContext<
  EntityBundleRow,
  unknown
> => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  table: mockTable as any,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  header: { id: 'test-header', colSpan: 1, isPlaceholder: false } as any,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  column: { id: 'test-column', columnDef: {} } as any,
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

    // Should contain IDs, excluding the load more row
    expect(mockCopyToClipboardIcon).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'syn123\nsyn456' }),
    )
  })

  it('should handle empty row model', () => {
    const emptyTable: MockTable = {
      getRowModel: vi.fn(() => ({
        rows: [],
      })),
    }

    const headerContext = {
      ...createMockHeaderContext(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      table: emptyTable as any,
    }

    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
    expect(mockCopyToClipboardIcon).toHaveBeenCalledWith(
      expect.objectContaining({ value: '' }),
    )
  })

  it('should handle all load more rows', () => {
    const loadMoreOnlyRows = [
      {
        ...mockRows[2],
        entityId: '',
        isLoadMore: true,
      },
      {
        ...mockRows[2],
        entityId: '',
        isLoadMore: true,
      },
    ]

    const loadMoreTable: MockTable = {
      getRowModel: vi.fn(() => ({
        rows: loadMoreOnlyRows.map(row => ({ original: row })),
      })),
    }

    const headerContext = {
      ...createMockHeaderContext(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      table: loadMoreTable as any,
    }

    render(<IdColumnHeader {...headerContext} />)

    expect(screen.getByTestId('copy-button')).toBeInTheDocument()
    // Should result in empty string for copy value since all rows are filtered out
    expect(mockCopyToClipboardIcon).toHaveBeenCalledWith(
      expect.objectContaining({ value: '' }),
    )
  })

  it('should filter out load more rows correctly', () => {
    const mixedRows = [
      mockRows[0], // normal row
      mockRows[2], // load more row
      mockRows[1], // normal row
    ]

    const mixedTable: MockTable = {
      getRowModel: vi.fn(() => ({
        rows: mixedRows.map(row => ({ original: row })),
      })),
    }

    const headerContext = {
      ...createMockHeaderContext(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      table: mixedTable as any,
    }

    render(<IdColumnHeader {...headerContext} />)

    // Should only include syn123 and syn456, not the load more row
    expect(mockCopyToClipboardIcon).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'syn123\nsyn456' }),
    )
  })
})
