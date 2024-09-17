import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as ToastMessage from '../../../src/components/ToastMessage/ToastMessage'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  EntityChildrenResponse,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import * as DownloadConfirmationUIModule from '../../../src/components/download_list/DownloadConfirmationUI'
import { DownloadConfirmationUIProps } from '../../../src/components/download_list/DownloadConfirmationUI'
import { FolderDownloadConfirmation } from '../../../src/components/download_list'
import { SynapseClientError } from 'synapse-client'
import {
  useAddQueryToDownloadList,
  useGetEntityChildren,
} from '../../../src/synapse-queries'
import {
  getUseMutationMock,
  getUseQuerySuccessMock,
} from '../../../src/testutils/ReactQueryMockUtils'

jest.mock('../../../src/synapse-queries', () => ({
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

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => {})

const addFilesToDownloadListResponse: AddToDownloadListResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AddToDownloadListResponse',
  numberOfFilesAdded: 1,
}

const FOLDER_ID = 'syn123'
const mockOnClose = jest.fn()

async function setUp() {
  const user = userEvent.setup()
  let component
  await act(async () => {
    component = render(
      <FolderDownloadConfirmation folderId={FOLDER_ID} fnClose={mockOnClose} />,
    )
  })

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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps
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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

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
      mockUseAddQueryToDownloadList.mock.lastCall[0].onSuccess()
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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

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
    const passedProps = mockDownloadConfirmationUi.mock
      .lastCall![0] as DownloadConfirmationUIProps

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
      mockUseAddQueryToDownloadList.mock.lastCall![0].onError({
        reason: 'some error message',
      })
    })
    expect(mockToastFn).toHaveBeenCalledWith(expect.any(String), 'danger')
    expect(mockOnClose).toHaveBeenCalled()
  })
})
