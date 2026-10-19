import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { http, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  FILE_HANDLE_BATCH,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  BatchFileResult,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { HttpResponse } from 'msw'
import FeaturedResearch, { FeaturedResearchProps } from './FeaturedResearch'

const mockQueryRequest = vi.fn()

describe('FeaturedResearch Tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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
            name: 'image',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '4',
          },
          { name: 'link', columnType: ColumnTypeEnum.LINK, id: '5' },
          { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '6' },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              'Title 1',
              'Description 1',
              '1726164997000',
              '151525812',
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
              '151468828',
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
        name: 'image',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '4',
      },
      { name: 'link', columnType: ColumnTypeEnum.LINK, id: '5' },
      { name: 'order', columnType: ColumnTypeEnum.INTEGER, id: '6' },
    ],
  }

  const mockFileResult = [
    {
      fileHandleId: '151525812',
      preSignedURL: 'https://mockurl.com/cat1.jpeg',
    },
    {
      fileHandleId: '151468828',
      preSignedURL: 'https://mockurl.com/cat2.jpeg',
    },
  ]

  const mockBatchFileResult: BatchFileResult = {
    requestedFiles: mockFileResult,
  }

  beforeEach(() => {
    vi.clearAllMocks()
    server.use(
      ...generateAsyncJobHandlers(
        dispatchEntry(
          'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          request => {
            mockQueryRequest(request)
            return mockQueryResult
          },
        ),
        {
          asyncTypeServicePaths: {
            requestPath: TABLE_QUERY_ASYNC_START(':id'),
            responsePath: tokenParam =>
              TABLE_QUERY_ASYNC_GET(':id', tokenParam),
          },
        },
      ),
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FILE_HANDLE_BATCH}`,
        () => HttpResponse.json(mockBatchFileResult, { status: 201 }),
      ),
      http.get('https://mockurl.com/:fileName', () =>
        HttpResponse.text('mock image content'),
      ),
    )
  })

  function renderComponent(props: FeaturedResearchProps) {
    return render(<FeaturedResearch {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays research cards', async () => {
    renderComponent(mockProps)

    await screen.findByText('Title 1')
    expect(mockQueryRequest).toHaveBeenCalledTimes(1)

    const headings = screen.getAllByText('Featured Research')
    expect(headings.length).toBe(2)
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()

    expect(screen.getByText('Title 2')).toBeInTheDocument()
    expect(screen.getByText('September, 2024')).toBeInTheDocument()

    await waitFor(() => {
      const images = document.querySelectorAll('.MuiCardMedia-root')
      expect(images).toHaveLength(2)
    })
  })
})
