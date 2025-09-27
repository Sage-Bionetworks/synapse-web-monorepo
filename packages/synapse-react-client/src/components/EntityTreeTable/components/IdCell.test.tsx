import { render, screen } from '@testing-library/react'
import { IdCell } from './IdCell'
import { EntityBundleRow } from '../EntityTreeTable'

const mockEntityBundleRow: EntityBundleRow = {
  entityId: 'syn123456',
  entityHeader: {
    id: 'syn123456',
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

const createMockCellContext = (row: EntityBundleRow) => ({
  row: { original: row } as any,
  column: {} as any,
  table: {} as any,
  cell: {} as any,
  getValue: vi.fn(),
  renderValue: vi.fn(),
})

describe('IdCell', () => {
  it('should render entity ID', () => {
    const cellContext = createMockCellContext(mockEntityBundleRow)
    render(<IdCell {...cellContext} />)

    expect(screen.getByText('syn123456')).toBeInTheDocument()
  })

  it('should render entity ID in Typography component', () => {
    const cellContext = createMockCellContext(mockEntityBundleRow)
    render(<IdCell {...cellContext} />)

    const idElement = screen.getByText('syn123456')
    expect(idElement.tagName.toLowerCase()).toBe('p') // Typography renders as p by default
  })

  it('should handle different entity IDs', () => {
    const differentRow = {
      ...mockEntityBundleRow,
      entityId: 'syn999888',
    }
    const cellContext = createMockCellContext(differentRow)
    render(<IdCell {...cellContext} />)

    expect(screen.getByText('syn999888')).toBeInTheDocument()
  })

  it('should handle long entity IDs', () => {
    const longIdRow = {
      ...mockEntityBundleRow,
      entityId: 'syn123456789012345',
    }
    const cellContext = createMockCellContext(longIdRow)
    render(<IdCell {...cellContext} />)

    expect(screen.getByText('syn123456789012345')).toBeInTheDocument()
  })
})
