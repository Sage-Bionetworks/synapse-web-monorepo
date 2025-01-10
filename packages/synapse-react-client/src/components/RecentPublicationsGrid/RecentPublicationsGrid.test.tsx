import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import RecentPublicationsGrid, {
  RecentPublicationsGridProps,
} from './RecentPublicationsGrid'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('RecentPublicationsGrid Tests', () => {
  const mockProps: RecentPublicationsGridProps = {
    sql: 'SELECT * FROM syn123',
    buttonLink: 'https://example.com',
    buttonLinkText: 'View All Publications',
    summaryText: 'This is a summary.',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64042839',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'id',
            columnType: ColumnTypeEnum.ENTITYID,
            id: '81721',
          },
          {
            name: 'Category',
            columnType: ColumnTypeEnum.STRING,
            id: '81722',
          },
          {
            name: 'Journal',
            columnType: ColumnTypeEnum.STRING,
            id: '81723',
          },
          {
            name: 'Title',
            columnType: ColumnTypeEnum.STRING,
            id: '81724',
          },
          {
            name: 'publicationDate',
            columnType: ColumnTypeEnum.DATE,
            id: '81725',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: ['1', 'Category1', 'Journal1', 'Title1', '1725819400000'],
          },
          {
            rowId: 2,
            values: ['2', 'Category2', 'Journal2', 'Title2', '1709578435000'],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'id',
        columnType: ColumnTypeEnum.ENTITYID,
        id: '81721',
      },
      {
        name: 'Category',
        columnType: ColumnTypeEnum.STRING,
        id: '81722',
      },
      {
        name: 'Journal',
        columnType: ColumnTypeEnum.STRING,
        id: '81723',
      },
      {
        name: 'Title',
        columnType: ColumnTypeEnum.STRING,
        id: '81724',
      },
      {
        name: 'publicationDate',
        columnType: ColumnTypeEnum.DATE,
        id: '81725',
      },
    ],
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
  })

  const renderWithRouter = (props: RecentPublicationsGridProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <RecentPublicationsGrid {...props} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays publication cards', async () => {
    renderWithRouter(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    expect(screen.getByText('Category1')).toBeInTheDocument()
    expect(screen.getByText('Title1')).toBeInTheDocument()
    expect(screen.getByText('Journal1')).toBeInTheDocument()
    expect(screen.getByText('September, 2024')).toBeInTheDocument()

    expect(screen.getByText('Category2')).toBeInTheDocument()
    expect(screen.getByText('Title2')).toBeInTheDocument()
    expect(screen.getByText('Journal2')).toBeInTheDocument()
    expect(screen.getByText('March, 2024')).toBeInTheDocument()
  })

  it('renders summary text and button if props provided', () => {
    renderWithRouter(mockProps)

    expect(screen.getByText('This is a summary.')).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'View All Publications' })
    expect(button).toHaveAttribute('href', 'https://example.com')
  })
})
