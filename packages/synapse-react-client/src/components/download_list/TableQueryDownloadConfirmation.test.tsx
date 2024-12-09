import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import {
  AddToDownloadListResponse,
  Query,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import * as DownloadConfirmationUIModule from './DownloadConfirmationUI'
import { DownloadConfirmationUIProps } from './DownloadConfirmationUI'
import { TableQueryDownloadConfirmation } from './TableQueryDownloadConfirmation'
import { mockQueryBundleRequest } from '../../mocks/mockFileViewQuery'
import QueryWrapper from '../QueryWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { noop } from 'lodash-es'
import { server } from '../../mocks/msw/server'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'
import { generateAsyncJobHandlers } from '../../mocks/msw/handlers/asyncJobHandlers'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import SynapseClient from '../../synapse-client'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../QueryVisualizationWrapper'

const ID_COLUMN_ID = 11112
const CURRENT_VERSION_COLUMN_ID = 11113
const DOWNLOAD_CONFIRMATION_UI_TEST_ID = 'DownloadConfirmationUI'
const mockDownloadConfirmationUi = jest
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
const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

const addToDownloadListSpy = jest.spyOn(
  SynapseClient,
  'addFilesToDownloadListV2',
)

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
  const mockQueryVisualizationContext: Partial<QueryVisualizationContextType> =
    {
      setShowDownloadConfirmation: jest.fn(),
    }
  const user = userEvent.setup()
  const component = render(
    <QueryWrapper
      initQueryRequest={mockQueryBundleRequest}
      fileIdColumnName={fileIdColumnName}
      fileVersionColumnName={fileVersionColumnName}
    >
      <QueryVisualizationContextProvider
        queryVisualizationContext={
          mockQueryVisualizationContext as QueryVisualizationContextType
        }
      >
        <TableQueryDownloadConfirmation />
      </QueryVisualizationContextProvider>
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
    mockSetShowDownloadConfirmation:
      mockQueryVisualizationContext.setShowDownloadConfirmation,
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
    jest.clearAllMocks()

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
    const {
      downloadConfirmationUiPassedProps,
      mockSetShowDownloadConfirmation,
    } = await setUp(expectedFileCountWithSelectFileColumn)

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
      expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
    })
  })

  it('handles onCancel passed to DownloadConfirmationUI', async () => {
    const {
      downloadConfirmationUiPassedProps,
      mockSetShowDownloadConfirmation,
    } = await setUp(expectedFileCountWithSelectFileColumn)

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onCancel()
    })

    expect(addToDownloadListSpy).not.toHaveBeenCalled()
    expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
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

    const {
      downloadConfirmationUiPassedProps,
      mockSetShowDownloadConfirmation,
    } = await setUp(expectedFileCountWithSelectFileColumn)

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    await waitFor(() => {
      expect(addToDownloadListSpy).toHaveBeenCalledTimes(1)
      expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
      expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
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
