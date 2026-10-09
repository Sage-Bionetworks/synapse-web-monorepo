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
  BatchFileRequest,
  BatchFileResult,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import ImageCardGridWithLinks, {
  ImageCardGridWithLinksProps,
} from './ImageCardGridWithLinks'

const mockQueryRequest = vi.fn()

describe('ImageCardGridWithLinks Tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const mockProps: ImageCardGridWithLinksProps = {
    sql: 'SELECT * FROM syn64112885',
    title: 'Test title',
    summaryText: 'This is a summary.',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn64112885',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'Image',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '81723',
          },
          {
            name: 'LinkText',
            columnType: ColumnTypeEnum.STRING,
            id: '81724',
          },
          {
            name: 'Link',
            columnType: ColumnTypeEnum.LINK,
            id: '81725',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: [
              '149976034',
              'Comparative Biology',
              'https://en.wikipedia.org/wiki/Comparative_biology#:~:text=Comparative%20biology%20uses%20natural%20variation,role%20of%20organisms%20in%20ecosystems.',
            ],
          },
          {
            rowId: 2,
            values: [
              '149976044',
              'Reference Genomes',
              'https://en.wikipedia.org/wiki/Reference_genome',
            ],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'Image',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '81723',
      },
      {
        name: 'LinkText',
        columnType: ColumnTypeEnum.STRING,
        id: '81724',
      },
      {
        name: 'Link',
        columnType: ColumnTypeEnum.LINK,
        id: '81725',
      },
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
    mockQueryRequest.mockClear()
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
      http.post<never, BatchFileRequest>(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FILE_HANDLE_BATCH}`,
        () => HttpResponse.json(mockBatchFileResult, { status: 201 }),
      ),
      http.get('https://mockurl.com/:fileName', () =>
        HttpResponse.text('mock image content'),
      ),
    )
  })

  const renderWithRouter = (props: ImageCardGridWithLinksProps) => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <ImageCardGridWithLinks {...props} />,
      },
    ])
    return render(<RouterProvider router={router} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays cards', async () => {
    renderWithRouter(mockProps)

    expect(await screen.findByText('Test title')).toBeInTheDocument()
    expect(screen.getByText('This is a summary.')).toBeInTheDocument()
    expect(await screen.findByText('Comparative Biology')).toBeInTheDocument()
    expect(screen.getByText('Reference Genomes')).toBeInTheDocument()
    expect(mockQueryRequest).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      const images = screen.getAllByRole('img')
      expect(images).toHaveLength(2)
    })
  })
})
