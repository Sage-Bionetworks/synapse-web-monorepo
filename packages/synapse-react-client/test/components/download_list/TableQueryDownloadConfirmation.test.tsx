import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../../../src/components/ToastMessage/ToastMessage'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import * as DownloadConfirmationUIModule from '../../../src/components/download_list/DownloadConfirmationUI'
import {
  DownloadConfirmationUI,
  DownloadConfirmationUIProps,
} from '../../../src/components/download_list/DownloadConfirmationUI'
import { TableQueryDownloadConfirmation } from '../../../src/components/download_list'
import { QueryContextProvider, SynapseClientError } from '../../../src'
import { QueryVisualizationContextProvider } from '../../../src/components/QueryVisualizationWrapper'
import { mockQueryBundleRequest } from '../../../src/mocks/mockFileViewQuery'
import { cloneDeep } from 'lodash-es'
import {
  useAddQueryToDownloadList,
  useGetQueryResultBundleWithAsyncStatus,
} from '../../../src/synapse-queries'
import {
  getUseMutationMock,
  getUseQuerySuccessMock,
} from '../../../src/testutils/ReactQueryMockUtils'

jest.mock('../../../src/synapse-queries', () => ({
  useGetQueryResultBundleWithAsyncStatus: jest.fn(),
  useAddQueryToDownloadList: jest.fn(),
}))

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

const mockSetShowDownloadConfirmation = jest.fn()

async function setUp() {
  const user = userEvent.setup()
  let component
  await act(() => {
    component = render(
      <QueryContextProvider
        queryContext={{
          getCurrentQueryRequest: () => cloneDeep(mockQueryBundleRequest),
        }}
      >
        <QueryVisualizationContextProvider
          queryVisualizationContext={{
            setShowDownloadConfirmation: mockSetShowDownloadConfirmation,
          }}
        >
          <TableQueryDownloadConfirmation />
        </QueryVisualizationContextProvider>
      </QueryContextProvider>,
    )
  })

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
        responseBody: {
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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps
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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryBundleRequest.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall[0].onSuccess()
    })
    expect(mockToastFn).toHaveBeenCalledWith(
      expect.any(String),
      'success',
      expect.any(Object),
    )
    expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
  })

  it('handles onCancel passed to DownloadConfirmationUI', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

    // Call under test
    act(() => {
      passedProps.onCancel()
    })

    expect(mutationMockReturnValue.mutate).not.toHaveBeenCalled()
    expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
  })

  it('handles case where adding files to the download list results in an error', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      query: mockQueryBundleRequest.query,
      concreteType:
        'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
    })

    act(() => {
      mockUseAddQueryToDownloadList.mock.lastCall[0].onError({
        reason: 'some error message',
      })
    })
    expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
    expect(mockSetShowDownloadConfirmation).toHaveBeenCalledWith(false)
  })
})
