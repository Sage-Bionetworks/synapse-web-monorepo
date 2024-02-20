import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import * as DownloadConfirmationUIModule from './DownloadConfirmationUI'
import { TableQueryDownloadConfirmation } from './index'
import { SynapseClientError } from '../../index'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationContextType,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { mockQueryBundleRequest } from '../../mocks/mockFileViewQuery'
import {
  useAddQueryToDownloadList,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../synapse-queries'
import {
  getUseMutationMock,
  getUseQuerySuccessMock,
} from '../../testutils/ReactQueryMockUtils'
import QueryWrapper from '../QueryWrapper'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

jest.mock('../../../src/synapse-queries', () => {
  const actual = jest.requireActual('../../../src/synapse-queries')
  return {
    ...actual,
    useGetQueryResultBundleWithAsyncStatus: jest.fn(),
    useAddQueryToDownloadList: jest.fn(),
  }
})

const mockUseGetQueryResultBundle = jest.mocked(
  useGetQueryResultBundleWithAsyncStatus,
)
const mockUseAddQueryToDownloadList = jest.mocked(useAddQueryToDownloadList)

const DOWNLOAD_CONFIRMATION_UI_TEST_ID = 'DownloadConfirmationUI'
const mockDownloadConfirmationUi = jest
  .spyOn(DownloadConfirmationUIModule, 'DownloadConfirmationUI')
  .mockImplementation(() => (
    <div data-testid={DOWNLOAD_CONFIRMATION_UI_TEST_ID}></div>
  ))

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => {})

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

let receivedQueryVisualizationContext: QueryVisualizationContextType | undefined

async function setUp(rowSelectionPrimaryKeyColumn?: string) {
  const user = userEvent.setup()
  let component
  const rowSelectionPrimaryKey = rowSelectionPrimaryKeyColumn
    ? [rowSelectionPrimaryKeyColumn]
    : undefined
  act(() => {
    component = render(
      <QueryWrapper
        initQueryRequest={mockQueryBundleRequest}
        rowSelectionPrimaryKey={rowSelectionPrimaryKey}
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
  })

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
  return { component, user }
}

describe('TableQueryDownloadConfirmation', () => {
  let mutationMockReturnValue: ReturnType<
    typeof getUseMutationMock<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >
  >
  beforeEach(() => {
    jest.clearAllMocks()

    mockUseGetQueryResultBundle.mockReturnValue(
      getUseQuerySuccessMock<
        AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>
      >({
        jobState: 'COMPLETE',
        jobCanceling: false,
        requestBody: mockQueryBundleRequest,
        startedOn: '2021-01-01T00:00:00.000Z',
        changedOn: '2021-01-01T00:00:00.000Z',
        runtimeMS: 1000,
        startedByUserId: MOCK_USER_ID,
        etag: '000',
        jobId: '123',
        responseBody: {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryResultBundle',
          queryCount: 100,
          sumFileSizes: {
            sumFileSizesBytes: 40128868,
            greaterThan: false,
          },
        },
      }),
    )

    mutationMockReturnValue = getUseMutationMock<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >(addFilesToDownloadListResponse)

    mockUseAddQueryToDownloadList.mockReturnValue(mutationMockReturnValue)
  })

  it('passes the correct props to DownloadConfirmationUI', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]
    expect(passedProps).toEqual({
      onAddToDownloadCart: expect.any(Function),
      onCancel: expect.any(Function),
      fileCount: 100,
      fileSize: 40128868,
      isAddingToDownloadCart: false,
      isLoadingStats: false,
    })
  })

  it('adds files to download list using a table query when invoked', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryBundleRequest.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      useVersionNumber: true,
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall![0]!.onSuccess!(
        {
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
          numberOfFilesAdded: 1,
        },
        {
          query: mockQueryBundleRequest.query,
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
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]

    // Call under test
    act(() => {
      passedProps.onCancel()
    })

    expect(mutationMockReturnValue.mutate).not.toHaveBeenCalled()
    expect(receivedQueryVisualizationContext?.showDownloadConfirmation).toBe(
      false,
    )
  })

  it('handles case where adding files to the download list results in an error', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryBundleRequest.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      useVersionNumber: true,
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall![0]!.onError!(
        new SynapseClientError(
          400,
          'some error message',
          expect.getState().currentTestName!,
        ),
        {
          query: mockQueryBundleRequest.query,
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

  it('setting the row primary key indicates that the row version should not be used', async () => {
    await setUp('fileSynapseID')
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryBundleRequest.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
      useVersionNumber: false,
    })
  })
})
