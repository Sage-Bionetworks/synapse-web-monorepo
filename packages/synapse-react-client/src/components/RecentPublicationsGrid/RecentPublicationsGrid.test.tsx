import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import RecentPublicationsGrid, {
  RecentPublicationsGridProps,
} from './RecentPublicationsGrid'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'

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
            name: 'Tag',
            columnType: ColumnTypeEnum.STRING_LIST,
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
            values: [
              '1',
              '["Tag1_1", "Tag1_2"]',
              'Journal1',
              'Title1',
              '1725819400000',
            ],
          },
          {
            rowId: 2,
            values: [
              '2',
              '["Tag2_1", "Tag2_2"]',
              'Journal2',
              'Title2',
              '1709578435000',
            ],
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
        name: 'Tag',
        columnType: ColumnTypeEnum.STRING_LIST,
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
        element: <RecentPublicationsGrid {...mockProps} />,
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

    expect(screen.getByText('Tag1_1')).toBeInTheDocument()
    expect(screen.getByText('Title1')).toBeInTheDocument()
    expect(screen.getByText('Journal1')).toBeInTheDocument()
    expect(screen.getByText('September, 2024')).toBeInTheDocument()

    expect(screen.getByText('Tag2_1')).toBeInTheDocument()
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
