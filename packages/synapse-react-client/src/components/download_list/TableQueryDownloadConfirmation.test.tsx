import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  Query,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import * as DownloadConfirmationUIModule from './DownloadConfirmationUI'
import { TableQueryDownloadConfirmation } from './TableQueryDownloadConfirmation'
import { SynapseClientError } from '../../utils'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { mockQueryBundleRequest } from '../../mocks/mockFileViewQuery'
import { useAddQueryToDownloadList } from '../../synapse-queries'
import { getUseMutationMock } from '../../testutils/ReactQueryMockUtils'
import QueryWrapper from '../QueryWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { noop } from 'lodash-es'
import { server } from '../../mocks/msw/server'

import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'
import { DownloadConfirmationUIProps } from './DownloadConfirmationUI'

jest.mock('../../synapse-queries', () => {
  const actual = jest.requireActual('../../synapse-queries')
  return {
    ...actual,
    useAddQueryToDownloadList: jest.fn(),
  }
})

const mockUseAddQueryToDownloadList = jest.mocked(useAddQueryToDownloadList)
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

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

let receivedQueryVisualizationContext: QueryVisualizationContextType | undefined

async function waitForExpectedProps(): Promise<DownloadConfirmationUIProps> {
  let passedProps: DownloadConfirmationUIProps
  await waitFor(() => {
    const props = mockDownloadConfirmationUi.mock.lastCall![0]
    expect(props).toEqual({
      onAddToDownloadCart: expect.any(Function),
      onCancel: expect.any(Function),
      fileCount: 100,
      fileSize: 40128868,
      isAddingToDownloadCart: false,
      isLoadingStats: false,
    })
    passedProps = props
  })
  return passedProps!
}

async function setUp(
  fileIdColumnName?: string,
  fileVersionColumnName?: string,
) {
  const user = userEvent.setup()
  const component = render(
    <QueryWrapper
      initQueryRequest={mockQueryBundleRequest}
      fileIdColumnName={fileIdColumnName}
      fileVersionColumnName={fileVersionColumnName}
    >
      <QueryVisualizationWrapper>
        <QueryVisualizationContextConsumer>
          {context => {
            receivedQueryVisualizationContext = context
            return <TableQueryDownloadConfirmation />
          }}
        </QueryVisualizationContextConsumer>
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )

  await waitFor(() => expect(receivedQueryVisualizationContext).toBeDefined())

  act(() => {
    receivedQueryVisualizationContext!.setShowDownloadConfirmation(true)
  })

  await waitFor(() =>
    expect(receivedQueryVisualizationContext!.showDownloadConfirmation).toBe(
      true,
    ),
  )
  await screen.findByTestId(DOWNLOAD_CONFIRMATION_UI_TEST_ID)
  const downloadConfirmationUiPassedProps = await waitForExpectedProps()

  return { component, user, downloadConfirmationUiPassedProps }
}

const queryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: 100,
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
    registerTableQueryResult(mockQueryBundleRequest.query, queryResultBundle)
    registerTableQueryResult(mockQueryWithSelectFileColumn, queryResultBundle)
    registerTableQueryResult(
      mockQueryWithSelectFileAndVersionColumn,
      queryResultBundle,
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  let mutationMockReturnValue: ReturnType<
    typeof getUseMutationMock<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >
  >
  beforeEach(() => {
    jest.clearAllMocks()

    mutationMockReturnValue = getUseMutationMock<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >(addFilesToDownloadListResponse)

    mockUseAddQueryToDownloadList.mockReturnValue(mutationMockReturnValue)
  })

  it('adds files to download list using a table query when invoked', async () => {
    const { downloadConfirmationUiPassedProps } = await setUp()

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryWithSelectFileColumn,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall![0]!.onSuccess!(
        {
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
          numberOfFilesAdded: 1,
        },
        {
          //'id' column discovered, so selectFileColumn is set
          query: mockQueryWithSelectFileColumn,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        undefined,
      )
    })

    await waitFor(() => {
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.any(String),
        'success',
        expect.any(Object),
      )
      expect(receivedQueryVisualizationContext?.showDownloadConfirmation).toBe(
        false,
      )
    })
  })

  it('handles onCancel passed to DownloadConfirmationUI', async () => {
    const { downloadConfirmationUiPassedProps } = await setUp()

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onCancel()
    })

    expect(mutationMockReturnValue.mutate).not.toHaveBeenCalled()
    expect(receivedQueryVisualizationContext?.showDownloadConfirmation).toBe(
      false,
    )
  })

  it('handles case where adding files to the download list results in an error', async () => {
    const { downloadConfirmationUiPassedProps } = await setUp()

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryWithSelectFileColumn,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall![0]!.onError!(
        new SynapseClientError(
          400,
          'some error message',
          expect.getState().currentTestName!,
        ),
        {
          query: mockQueryWithSelectFileColumn,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        undefined,
      )
    })
    expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
    expect(receivedQueryVisualizationContext?.showDownloadConfirmation).toBe(
      false,
    )
  })
  it('setting the fileIdColumnName and fileVersionColumnName should update the AddToDownloadListRequest query if ColumnModels are available in the result', async () => {
    const { downloadConfirmationUiPassedProps } = await setUp(
      'id',
      'currentVersion',
    )

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    await waitFor(() => {
      expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
      expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
        query: mockQueryWithSelectFileAndVersionColumn,
        concreteType:
          'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      })
    })
  })
})
