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
import { render, screen } from '@testing-library/react'
import { HttpResponse } from 'msw'
import PortalFeaturedPartners, {
  PortalFeaturedPartnersProps,
} from './PortalFeaturedPartners'

const mockQueryRequest = vi.fn()

describe('ImageCardGridWithLinks Tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const mockProps: PortalFeaturedPartnersProps = {
    sql: 'SELECT * FROM syn62661043',
  }

  const mockQueryResult: QueryResultBundle = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResult: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      queryResults: {
        concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
        tableId: 'syn62661043',
        etag: 'DEFAULT',
        headers: [
          {
            name: 'organizationName',
            columnType: ColumnTypeEnum.STRING,
            id: '1',
          },
          {
            name: 'cardLogo',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '2',
          },
          {
            name: 'website',
            columnType: ColumnTypeEnum.FILEHANDLEID,
            id: '3',
          },
        ],
        rows: [
          {
            rowId: 1,
            values: ['Partner 1', '149976034', 'http://somewebsite1.com'],
          },
          {
            rowId: 2,
            values: ['Partner 2', '149976034', 'http://somewebsite2.com'],
          },
          {
            rowId: 3,
            values: ['Partner 3', '', 'http://somewebsite3.com'],
          },
        ],
      },
    },
    selectColumns: [
      {
        name: 'organizationName',
        columnType: ColumnTypeEnum.STRING,
        id: '1',
      },
      {
        name: 'cardLogo',
        columnType: ColumnTypeEnum.FILEHANDLEID,
        id: '2',
      },
      {
        name: 'website',
        columnType: ColumnTypeEnum.LINK,
        id: '3',
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

  const renderComponent = (props: PortalFeaturedPartnersProps) => {
    return render(<PortalFeaturedPartners {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('fetches and displays partners', async () => {
    renderComponent(mockProps)

    expect(await screen.findByText('Partner 3')).toBeInTheDocument()
    expect(mockQueryRequest).toHaveBeenCalledTimes(1)

    const partners = screen.getAllByRole('link')
    expect(partners).toHaveLength(3)
    expect(partners[0]).toHaveAttribute('href', 'http://somewebsite1.com')
    expect(partners[1]).toHaveAttribute('href', 'http://somewebsite2.com')
    expect(partners[2]).toHaveAttribute('href', 'http://somewebsite3.com')

    partners.forEach((partner, index) => {
      expect(partner).toHaveAttribute(
        'href',
        `http://somewebsite${index + 1}.com`,
      )
    })
  })
})
