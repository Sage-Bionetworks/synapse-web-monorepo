import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { server } from '@/mocks/msw/server'
import {
  useAddToDownloadList,
  useGetAddToDownloadListStats,
} from '@/synapse-queries/download/useDownloadList'
import {
  getUseMutationIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  AddToDownloadListRequest,
  AddToDownloadListStatsResponse,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { AddToDownloadListResponse } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import DownloadConfirmationUI, {
  DownloadConfirmationUIProps,
} from '../DownloadConfirmationUI'
import AddToDownloadListConfirmationAlert from './AddToDownloadListConfirmationAlert'

vi.mock('../DownloadConfirmationUI', () => ({ default: vi.fn() }))
vi.mock('@/synapse-queries/download/useDownloadList', () => ({
  useAddToDownloadList: vi.fn(),
  useGetAddToDownloadListStats: vi.fn(),
}))
vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseAddToDownloadList = vi.mocked(useAddToDownloadList)
const mockUseGetAddToDownloadListStats = vi.mocked(useGetAddToDownloadListStats)
const mockDisplayToast = vi.mocked(displayToast).mockImplementation(() => noop)

const DOWNLOAD_CONFIRMATION_UI_TEST_ID = 'DownloadConfirmationUI'
const mockDownloadConfirmationUi = vi
  .mocked(DownloadConfirmationUI)
  .mockImplementation(() => (
    <div data-testid={DOWNLOAD_CONFIRMATION_UI_TEST_ID}></div>
  ))

const addToDownloadListRequest: AddToDownloadListRequest = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
  parentId: 'syn123',
}

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 5,
}

const addFilesToDownloadListStatsResponse: AddToDownloadListStatsResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListStatsResponse',
  fileCount: 5,
  fileSize: 40128868,
  isFileCountAndSizeEstimate: false,
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

async function setUp(expectedFileCount: number) {
  const mockOnClose = vi.fn()
  const user = userEvent.setup()
  const component = render(
    <AddToDownloadListConfirmationAlert
      addToDownloadListRequest={addToDownloadListRequest}
      onClose={mockOnClose}
    />,
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

describe('AddToDownloadListConfirmationAlert', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseGetAddToDownloadListStats.mockReturnValue(
      getUseQuerySuccessMock<AddToDownloadListStatsResponse>(
        addFilesToDownloadListStatsResponse,
      ),
    )

    mockUseAddToDownloadList.mockReturnValue(getUseMutationIdleMock())
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('shows stats, then adds files to download list using a table query when invoked', async () => {
    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(5)

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    const lastReturnedMutate =
      mockUseAddToDownloadList.mock.results[
        mockUseAddToDownloadList.mock.results.length - 1
      ].value.mutate
    expect(lastReturnedMutate).toHaveBeenLastCalledWith(
      addToDownloadListRequest,
    )

    act(() => {
      mockUseAddToDownloadList.mock.lastCall![0]!.onSuccess!(
        addFilesToDownloadListResponse,
        addToDownloadListRequest,
        undefined,
      )
    })

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        expect.any(String),
        'success',
        expect.any(Object),
      )
      expect(mockOnClose).toHaveBeenCalled()
    })
  })

  it('handles onCancel passed to DownloadConfirmationUI', async () => {
    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(5)

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onCancel()
    })

    const lastReturnedMutate =
      mockUseAddToDownloadList.mock.results[
        mockUseAddToDownloadList.mock.results.length - 1
      ].value.mutate

    expect(lastReturnedMutate).not.toHaveBeenCalled()
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('handles case where adding files to the download list results in an error', async () => {
    const { downloadConfirmationUiPassedProps, mockOnClose } = await setUp(5)

    // Call under test
    act(() => {
      downloadConfirmationUiPassedProps.onAddToDownloadCart()
    })

    const lastReturnedMutate =
      mockUseAddToDownloadList.mock.results[
        mockUseAddToDownloadList.mock.results.length - 1
      ].value.mutate
    expect(lastReturnedMutate).toHaveBeenLastCalledWith(
      addToDownloadListRequest,
    )

    act(() => {
      mockUseAddToDownloadList.mock.lastCall![0]!.onError!(
        new SynapseClientError(
          400,
          'Failed to add files to download list',
          expect.getState().currentTestName!,
        ),
        addToDownloadListRequest,
        undefined,
      )
    })

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        expect.any(String),
        'danger',
      )
      expect(mockOnClose).toHaveBeenCalled()
    })
  })
})
