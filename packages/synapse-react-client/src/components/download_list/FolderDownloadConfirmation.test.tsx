import {
  useAddQueryToDownloadList,
  useGetEntityChildren,
} from '@/synapse-queries/index'
import {
  getUseMutationMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  EntityChildrenResponse,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import * as DownloadConfirmationUIModule from './DownloadConfirmationUI'
import { FolderDownloadConfirmation } from './index'

jest.mock('../../synapse-queries/index', () => ({
  useGetEntityChildren: jest.fn(),
  useAddQueryToDownloadList: jest.fn(),
}))

const mockUseGetEntityChildren = jest.mocked(useGetEntityChildren)
const mockUseAddQueryToDownloadList = jest.mocked(useAddQueryToDownloadList)

const DOWNLOAD_CONFIRMATION_UI_TEST_ID = 'DownloadConfirmationUI'
const mockDownloadConfirmationUi = jest
  .spyOn(DownloadConfirmationUIModule, 'DownloadConfirmationUI')
  .mockImplementation(() => (
    <div data-testid={DOWNLOAD_CONFIRMATION_UI_TEST_ID}></div>
  ))

const mockToastFn = jest.spyOn(ToastMessage, 'displayToast')

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

const FOLDER_ID = 'syn123'
const mockOnClose = jest.fn()

async function setUp() {
  const user = userEvent.setup()
  const component = render(
    <FolderDownloadConfirmation folderId={FOLDER_ID} fnClose={mockOnClose} />,
  )

  await screen.findByTestId(DOWNLOAD_CONFIRMATION_UI_TEST_ID)
  return { component, user }
}

describe('FolderDownloadConfirmation', () => {
  let mutationMockReturnValue: ReturnType<
    typeof getUseMutationMock<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >
  >
  beforeEach(() => {
    jest.clearAllMocks()

    mockUseGetEntityChildren.mockReturnValue(
      getUseQuerySuccessMock<EntityChildrenResponse>({
        page: [],
        nextPageToken: '',
        totalChildCount: 100,
        sumFileSizesBytes: 1000,
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
    expect(mockUseGetEntityChildren).toHaveBeenCalledWith({
      parentId: FOLDER_ID,
      includeSumFileSizes: true,
      includeTotalChildCount: true,
      includeTypes: [EntityType.FILE],
    })
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]
    expect(passedProps).toEqual({
      onAddToDownloadCart: expect.any(Function),
      onCancel: expect.any(Function),
      fileCount: 100,
      fileSize: 1000,
      isAddingToDownloadCart: false,
      isLoadingStats: false,
    })
  })

  it('adds files to download list using a folder ID when invoked', async () => {
    await setUp()
    expect(mockDownloadConfirmationUi).toHaveBeenCalled()
    const passedProps = mockDownloadConfirmationUi.mock.lastCall![0]

    // Call under test
    act(() => {
      passedProps.onAddToDownloadCart()
    })

    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledWith({
      parentId: FOLDER_ID,
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
          parentId: FOLDER_ID,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        null,
      )
    })
    expect(mockToastFn).toHaveBeenCalledWith(
      expect.any(String),
      'success',
      expect.any(Object),
    )
    expect(mockOnClose).toHaveBeenCalled()
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
    expect(mockOnClose).toHaveBeenCalled()
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
      parentId: FOLDER_ID,
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
          parentId: FOLDER_ID,
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        },
        null,
      )
    })
    expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
    expect(mockOnClose).toHaveBeenCalled()
  })
})
