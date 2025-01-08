import { render, screen, waitFor } from '@testing-library/react'
import FeaturedResearch, { FeaturedResearchProps } from './FeaturedResearch'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useGetQueryResultBundle from '../../synapse-queries/entity/useGetQueryResultBundle'
import {
  BatchFileResult,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { getUseQuerySuccessMock } from '../../testutils/ReactQueryMockUtils'
import { SynapseClient } from '../../index'

jest.mock('../../synapse-queries/entity/useGetQueryResultBundle')
const mockUseGetQueryResultBundle = jest.mocked(useGetQueryResultBundle)

describe('FeaturedResearch Tests', () => {
  const mockProps: FeaturedResearchProps = {
    sql: 'SELECT * FROM syn64542019',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64542019',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'title',
            columnType: ColumnTypeEnum.STRING,
            id: '1',
          },
          {
            name: 'description',
            columnType: ColumnTypeEnum.STRING,
            id: '2',
          },
          {
            name: 'publicationDate',
            columnType: ColumnTypeEnum.DATE,
            id: '3',
          },
          {
            name: 'tags',
            columnType: ColumnTypeEnum.STRING_LIST,
            id: '4',
          },
          {
            name: 'affiliation',
            columnType: ColumnTypeEnum.STRING,
            id: '5',
          },
          {
            name: 'image',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '6',
          },
          { name: 'link', columnType: ColumnTypeEnum.LINK, id: '7' },
          { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '8' },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              'Title 1',
              'Description 1',
              '1726164997000',
              '["tag1_1", "tag1_2"]',
              'affiliation 1',
              '149976034',
              'https://mockurl.com/data-release-1',
              '2',
            ],
          },
          {
            rowId: 2,
            values: [
              'Title 2',
              'Description 2',
              '1726164997000',
              '["tag2_1"]',
              'affiliation 2',
              '149976044',
              'https://mockurl.com/data-release-2',
              '2',
            ],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'title',
        columnType: ColumnTypeEnum.STRING,
        id: '1',
      },
      {
        name: 'description',
        columnType: ColumnTypeEnum.STRING,
        id: '2',
      },
      {
        name: 'publicationDate',
        columnType: ColumnTypeEnum.DATE,
        id: '3',
      },
      {
        name: 'tags',
        columnType: ColumnTypeEnum.STRING_LIST,
        id: '4',
      },
      {
        name: 'affiliation',
        columnType: ColumnTypeEnum.STRING,
        id: '5',
      },
      {
        name: 'image',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '6',
      },
      { name: 'link', columnType: ColumnTypeEnum.LINK, id: '7' },
      { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '8' },
    ],
  }

  const mockFileResult = [
    {
      fileHandleId: '149976034',
      preSignedURL: 'https://mockurl.com/orangecat.jpeg',
    },
    {
      fileHandleId: '149976044',
      preSignedURL: 'https://mockurl.com/tabbycat.jpeg',
    },
  ]

  const mockBatchFileResult: BatchFileResult = {
    requestedFiles: mockFileResult,
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getFiles').mockResolvedValue(mockBatchFileResult)
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
  })

  const renderWithRouter = (props: FeaturedResearchProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <FeaturedResearch {...props} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays research cards', async () => {
    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock(mockQueryResult),
    )
    renderWithRouter(mockProps)

    await waitFor(() =>
      expect(mockUseGetQueryResultBundle).toHaveBeenCalledTimes(1),
    )

    expect(screen.getByText('Featured Research')).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByText('Title 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('tag1_1')).toBeInTheDocument()
    expect(screen.getByText('affiliation 1')).toBeInTheDocument()

    expect(screen.getByText('Title 2')).toBeInTheDocument()
    expect(screen.getByText('tag2_1')).toBeInTheDocument()
    expect(screen.getByText('affiliation 2')).toBeInTheDocument()
    expect(screen.getByText('September, 2024')).toBeInTheDocument()

    await waitFor(() => {
      const images = screen.getAllByRole('img')
      expect(images).toHaveLength(2)
    })
  })
})
