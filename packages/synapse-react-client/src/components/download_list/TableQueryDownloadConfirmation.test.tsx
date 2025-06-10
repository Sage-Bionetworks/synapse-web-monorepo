import { mockQueryBundleRequest } from '@/mocks/mockFileViewQuery'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { generateAsyncJobHandlers } from '@/mocks/msw/handlers/asyncJobHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  AddToDownloadListResponse,
  Query,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import QueryWrapper from '../QueryWrapper'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import * as DownloadConfirmationUIModule from './DownloadConfirmationUI'
import { DownloadConfirmationUIProps } from './DownloadConfirmationUI'
import { TableQueryDownloadConfirmation } from './TableQueryDownloadConfirmation'

const ID_COLUMN_ID = 11112
const CURRENT_VERSION_COLUMN_ID = 11113
const DOWNLOAD_CONFIRMATION_UI_TEST_ID = 'DownloadConfirmationUI'
const mockDownloadConfirmationUi = vi
  .spyOn(DownloadConfirmationUIModule, 'DownloadConfirmationUI')
  .mockImplementation(() => (
    <div data-testid={DOWNLOAD_CONFIRMATION_UI_TEST_ID}></div>
  ))

const mockQueryWithSelectFileColumn: Query = {
  ...mockQueryBundleRequest.query,
  selectFileColumn: ID_COLUMN_ID,
}
const mockQueryWithSelectFileAndVersionColumn: Query = {
  ...mockQueryBundleRequest.query,
  selectFileColumn: ID_COLUMN_ID,
  selectFileVersionColumn: CURRENT_VERSION_COLUMN_ID,
}
const mockToastFn = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

const addToDownloadListSpy = vi.spyOn(SynapseClient, 'addFilesToDownloadListV2')

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

async function waitForExpectedProps(
  expectedFileCount: number,
): Promise<DownloadConfirmationUIProps> {
  let passedProps: DownloadConfirmationUIProps
  await waitFor(() => {
    const props = mockDownloadConfirmationUi.mock.lastCall![0]
    expect(props).toEqual({
      onAddToDownloadCart: expect.any(Function),
      onCancel: expect.any(Function),
      fileCount: expectedFileCount,
      fileSize: 40128868,
      isAddingToDownloadCart: false,
      isLoadingStats: false,
    })
    passedProps = props
  })
  return passedProps!
}

async function setUp(
  expectedFileCount: number,
  fileIdColumnName?: string,
  fileVersionColumnName?: string,
) {
  const mockOnClose = vi.fn()
  const user = userEvent.setup()
  const component = render(
    <QueryWrapper
      initQueryRequest={mockQueryBundleRequest}
      fileIdColumnName={fileIdColumnName}
      fileVersionColumnName={fileVersionColumnName}
    >
      <TableQueryDownloadConfirmation onClose={mockOnClose} />
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )

  await screen.findByTestId(DOWNLOAD_CONFIRMATION_UI_TEST_ID)
  const downloadConfirmationUiPassedProps = await waitForExpectedProps(
    expectedFileCount,
  )

  return {
    component,
    user,
    downloadConfirmationUiPassedProps,
    mockOnClose,
  }
}

const expectedFileCountWithSelectFileColumn = 200
const expectedFileCountWithSelectFileAndVersionColumn = 300

const queryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: expectedFileCountWithSelectFileColumn,
  sumFileSizes: {
    sumFileSizesBytes: 40128868,
    greaterThan: false,
  },
  columnModels: [
    {
      columnType: 'ENTITYID',
      name: 'id',
      id: ID_COLUMN_ID.toString(),
    },
    {
      columnType: 'INTEGER',
      name: 'currentVersion',
      id: CURRENT_VERSION_COLUMN_ID.toString(),
    },
  ],
}

describe('TableQueryDownloadConfirmation', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()

    registerTableQueryResult(mockQueryBundleRequest.query, queryResultBundle)
    registerTableQueryResult(mockQueryWithSelectFileColumn, {
      ...queryResultBundle,
      queryCount: expectedFileCountWithSelectFileColumn,
    })
    registerTableQueryResult(mockQueryWithSelectFileAndVersionColumn, {
      ...queryResultBundle,
      queryCount: expectedFileCountWithSelectFileAndVersionColumn,
    })

    server.use(
      ...generateAsyncJobHandlers(
        '/repo/v1/download/list/add/async/start',
        token => `/repo/v1/download/list/add/async/get/${token}`,
        addFilesToDownloadListResponse,
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('adds files to download list using a table query when invoked', async () => {
    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(
      expectedFileCountWithSelectFileColumn,
    )

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    await waitFor(() => {
      expect(addToDownloadListSpy).toHaveBeenCalledTimes(1)
      expect(addToDownloadListSpy).toHaveBeenCalledWith(
        {
          query: mockQueryWithSelectFileColumn,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        MOCK_ACCESS_TOKEN,
      )
    })

    await waitFor(() => {
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.any(String),
        'success',
        expect.any(Object),
      )
      expect(mockOnClose).toHaveBeenCalled()
    })
  })

  it('handles onCancel passed to DownloadConfirmationUI', async () => {
    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(
      expectedFileCountWithSelectFileColumn,
    )

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onCancel()
    })

    expect(addToDownloadListSpy).not.toHaveBeenCalled()
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('handles case where adding files to the download list results in an error', async () => {
    server.use(
      ...generateAsyncJobHandlers(
        '/repo/v1/download/list/add/async/start',
        token => `/repo/v1/download/list/add/async/get/${token}`,
        {
          reason: 'Failed to add files to download list',
        },
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        400,
      ),
    )

    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(
      expectedFileCountWithSelectFileColumn,
    )

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    await waitFor(() => {
      expect(addToDownloadListSpy).toHaveBeenCalledTimes(1)
      expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
      expect(mockOnClose).toHaveBeenCalled()
    })
  })
  it('setting the fileIdColumnName and fileVersionColumnName should update the AddToDownloadListRequest query if ColumnModels are available in the result', async () => {
    const { downloadConfirmationUiPassedProps } = await setUp(
      expectedFileCountWithSelectFileAndVersionColumn,
      'id',
      'currentVersion',
    )

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    await waitFor(() => {
      expect(addToDownloadListSpy).toHaveBeenCalledTimes(1)
      expect(addToDownloadListSpy).toHaveBeenCalledWith(
        {
          query: mockQueryWithSelectFileAndVersionColumn,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        MOCK_ACCESS_TOKEN,
      )
    })
  })
})
