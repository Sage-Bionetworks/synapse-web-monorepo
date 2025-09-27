import { render, waitFor } from '@testing-library/react'
import { ChildLoader } from './ChildLoader'
import { useGetEntityChildren } from '@/synapse-queries/entity/useGetEntityChildren'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  SortBy,
  Direction,
} from '@sage-bionetworks/synapse-types'

// Mock the query hook
vi.mock('@/synapse-queries/entity/useGetEntityChildren', () => ({
  useGetEntityChildren: vi.fn(),
}))

const mockUseGetEntityChildren = vi.mocked(useGetEntityChildren)

const mockChildHeader: EntityHeader = {
  id: 'syn456',
  name: 'Child Entity',
  type: 'org.sagebionetworks.repo.model.FileEntity',
  versionNumber: 1,
  versionLabel: 'v1',
  benefactorId: 123,
  createdOn: '2023-01-01T00:00:00.000Z',
  modifiedOn: '2023-01-01T00:00:00.000Z',
  createdBy: 'user1',
  modifiedBy: 'user1',
  isLatestVersion: true,
}

const mockFolderHeader: EntityHeader = {
  id: 'syn789',
  name: 'Folder Entity',
  type: 'org.sagebionetworks.repo.model.Folder',
  versionNumber: 1,
  versionLabel: 'v1',
  benefactorId: 123,
  createdOn: '2023-01-01T00:00:00.000Z',
  modifiedOn: '2023-01-01T00:00:00.000Z',
  createdBy: 'user1',
  modifiedBy: 'user1',
  isLatestVersion: true,
}

const mockChildrenResponse = {
  page: [mockChildHeader, mockFolderHeader],
  nextPageToken: 'nextToken123',
}

describe('ChildLoader', () => {
  const mockOnChildrenLoaded = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetEntityChildren.mockReturnValue({
      data: undefined,
    } as any)
  })

  const defaultProps = {
    entityId: 'syn123',
    isLoading: true,
    isLoaded: false,
    onChildrenLoaded: mockOnChildrenLoaded,
  }

  it('should render nothing (null component)', () => {
    const { container } = render(<ChildLoader {...defaultProps} />)

    expect(container.firstChild).toBeNull()
  })

  it('should call useGetEntityChildren with correct parameters', () => {
    render(
      <ChildLoader
        {...defaultProps}
        pageToken="pageToken123"
        sortBy={SortBy.NAME}
        sortDirection={Direction.ASC}
      />,
    )

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
      {
        parentId: 'syn123',
        includeTypes: [
          EntityType.folder,
          EntityType.file,
          EntityType.link,
          EntityType.recordset,
        ],
        nextPageToken: 'pageToken123',
        sortBy: SortBy.NAME,
        sortDirection: Direction.ASC,
      },
      { enabled: true },
    )
  })

  it('should disable query when not loading or already loaded', () => {
    render(<ChildLoader {...defaultProps} isLoading={false} />)

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(expect.any(Object), {
      enabled: false,
    })
  })

  it('should disable query when already loaded', () => {
    render(<ChildLoader {...defaultProps} isLoaded={true} />)

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(expect.any(Object), {
      enabled: false,
    })
  })

  it('should call onChildrenLoaded when data is received', async () => {
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    render(<ChildLoader {...defaultProps} />)

    await waitFor(() => {
      expect(mockOnChildrenLoaded).toHaveBeenCalledWith(
        'syn123',
        [
          {
            entityHeader: mockChildHeader,
            parentId: 'syn123',
            depth: 0,
            isLeaf: true, // FileEntity is leaf
          },
          {
            entityHeader: mockFolderHeader,
            parentId: 'syn123',
            depth: 0,
            isLeaf: false, // Folder is not leaf
          },
        ],
        'nextToken123',
      )
    })
  })

  it('should determine leaf status correctly for different entity types', async () => {
    const projectHeader: EntityHeader = {
      ...mockChildHeader,
      id: 'syn999',
      name: 'Project Entity',
      type: 'org.sagebionetworks.repo.model.Project',
    }

    const responseWithProject = {
      page: [mockChildHeader, projectHeader],
      nextPageToken: undefined,
    }

    mockUseGetEntityChildren.mockReturnValue({
      data: responseWithProject,
    } as any)

    render(<ChildLoader {...defaultProps} />)

    await waitFor(() => {
      expect(mockOnChildrenLoaded).toHaveBeenCalledWith(
        'syn123',
        expect.arrayContaining([
          expect.objectContaining({
            entityHeader: mockChildHeader,
            isLeaf: true, // FileEntity is leaf
          }),
          expect.objectContaining({
            entityHeader: projectHeader,
            isLeaf: false, // Project is not leaf
          }),
        ]),
        undefined,
      )
    })
  })

  it('should not call onChildrenLoaded when not loading', async () => {
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    render(<ChildLoader {...defaultProps} isLoading={false} />)

    await waitFor(() => {
      expect(mockOnChildrenLoaded).not.toHaveBeenCalled()
    })
  })

  it('should not call onChildrenLoaded when already loaded', async () => {
    mockUseGetEntityChildren.mockReturnValue({
      data: mockChildrenResponse,
    } as any)

    render(<ChildLoader {...defaultProps} isLoaded={true} />)

    await waitFor(() => {
      expect(mockOnChildrenLoaded).not.toHaveBeenCalled()
    })
  })

  it('should not call onChildrenLoaded when no data', async () => {
    mockUseGetEntityChildren.mockReturnValue({
      data: undefined,
    } as any)

    render(<ChildLoader {...defaultProps} />)

    // Wait a bit to ensure no calls are made
    await new Promise(resolve => setTimeout(resolve, 100))

    expect(mockOnChildrenLoaded).not.toHaveBeenCalled()
  })

  it('should handle response without nextPageToken', async () => {
    const responseWithoutToken = {
      page: [mockChildHeader],
      nextPageToken: undefined,
    }

    mockUseGetEntityChildren.mockReturnValue({
      data: responseWithoutToken,
    } as any)

    render(<ChildLoader {...defaultProps} />)

    await waitFor(() => {
      expect(mockOnChildrenLoaded).toHaveBeenCalledWith(
        'syn123',
        expect.any(Array),
        undefined,
      )
    })
  })

  it('should include all required entity types in query', () => {
    render(<ChildLoader {...defaultProps} />)

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
      expect.objectContaining({
        includeTypes: [
          EntityType.folder,
          EntityType.file,
          EntityType.link,
          EntityType.recordset,
        ],
      }),
      expect.any(Object),
    )
  })

  it('should pass through sorting parameters correctly', () => {
    render(
      <ChildLoader
        {...defaultProps}
        sortBy={SortBy.MODIFIED_ON}
        sortDirection={Direction.DESC}
      />,
    )

    expect(mockUseGetEntityChildren).toHaveBeenCalledWith(
      expect.objectContaining({
        sortBy: SortBy.MODIFIED_ON,
        sortDirection: Direction.DESC,
      }),
      expect.any(Object),
    )
  })
})
