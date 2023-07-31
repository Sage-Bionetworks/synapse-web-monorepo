import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import { mockFileStatistics } from '../../mocks/mock_file_statistics'
import userEvent from '@testing-library/user-event'
import DownloadListTableV2 from './DownloadListTable'
import { DownloadListItemResult } from '@sage-bionetworks/synapse-types'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import * as useDownloadList from '../../synapse-queries/download/useDownloadList'
import SynapseClient from '../../synapse-client'

jest.spyOn(SynapseClient, 'removeItemFromDownloadListV2').mockResolvedValue({
  numberOfFilesRemoved: 2,
})

jest
  .spyOn(SynapseClient, 'getUserProfileById')
  .mockResolvedValue(mockUserProfileData)
jest
  .spyOn(SynapseClient, 'getProfilePicPreviewPresignedUrl')
  .mockResolvedValue(null)

const mockUseGetAvailableFilesToDownloadInfinite = jest.spyOn(
  useDownloadList,
  'useGetAvailableFilesToDownloadInfinite',
)

const mockFetchNextPage = jest.fn()
const mockRefetchStatistics = jest.fn()

const page1: DownloadListItemResult[] = [
  {
    fileEntityId: 'syn1',
    versionNumber: 1,
    createdOn: '2021-07-08T19:53:58.000Z',
    addedOn: '2022-07-08T19:53:58.000Z',
    fileName: 'file1.txt',
    fileSizeBytes: 1,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
    isEligibleForPackaging: true,
  },
]

const page2: DownloadListItemResult[] = [
  {
    fileEntityId: 'syn2',
    versionNumber: 3,
    createdOn: '2021-07-08T19:53:58.000Z',
    addedOn: '2022-07-08T19:53:58.000Z',
    fileName: 'file2.txt',
    fileSizeBytes: 2,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
    isEligibleForPackaging: true,
  },
]

function renderComponent() {
  return render(
    <SynapseTestContext>
      <DownloadListTableV2
        filesStatistics={mockFileStatistics}
        refetchStatistics={mockRefetchStatistics}
      />
    </SynapseTestContext>,
  )
}

describe('DownloadListTable tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseGetAvailableFilesToDownloadInfinite.mockReturnValue({
      data: {
        pages: [
          {
            page: page1,
            nextPageToken: '50a0',
            concreteType:
              'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
          },
          {
            page: page2,
            nextPageToken: undefined,
            concreteType:
              'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: false,
      isLoading: false,
      isSuccess: true,
      error: null,
      isError: false,
      isIdle: false,
      isLoadingError: false,
      isRefetchError: false,
      status: 'success',
      fetchPreviousPage: jest.fn(),
      isFetchingNextPage: false,
      isFetchingPreviousPage: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      errorUpdateCount: 0,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isPlaceholderData: false,
      isPreviousData: false,
      isRefetching: false,
      isStale: false,
      refetch: jest.fn(),
      remove: jest.fn(),
    })
  })
  it('loads more available download files when inView', async () => {
    mockAllIsIntersecting(true)

    renderComponent()

    const fileEntity1 = await screen.findAllByText('file1.txt')
    expect(fileEntity1).toHaveLength(1)
    const fileEntity2 = await screen.findAllByText('file2.txt')
    expect(fileEntity2).toHaveLength(1)
  })
  describe('Copy all Synapse IDs', () => {
    const originalClipboard = { ...global.navigator.clipboard }
    afterEach(() => {
      Object.assign(navigator, {
        clipboard: originalClipboard,
      })
    })

    it('should call clipboard.writeText with the expected Synapse IDs', async () => {
      const mockWriteText = jest.fn()
      mockWriteText.mockResolvedValue('copied')
      const mockClipboard = {
        writeText: mockWriteText,
      }
      Object.assign(navigator, {
        clipboard: mockClipboard,
      })

      renderComponent()

      const copySynIDsButton = await screen.findByTestId('copySynIdsButton')
      await userEvent.click(copySynIDsButton)

      expect(mockWriteText).toHaveBeenCalled()
      expect(mockWriteText).toHaveBeenCalledWith('syn1.1\nsyn2.3')
    })
  })
})
