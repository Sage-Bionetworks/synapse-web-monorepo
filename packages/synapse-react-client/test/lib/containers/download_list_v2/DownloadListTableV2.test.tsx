import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { mockUserProfileData } from '../../../../mocks/user/mock_user_profile'
import { mockFileStatistics } from '../../../../mocks/mock_file_statistics'
import userEvent from '@testing-library/user-event'
import DownloadListTableV2 from '../../../../src/lib/containers/download_list_v2/DownloadListTable'
import { DownloadListItemResult } from '../../../../src/lib/utils/synapseTypes/DownloadListV2/DownloadListItemResult'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'
import { useGetAvailableFilesToDownloadInfinite } from '../../../../src/lib/utils/hooks/SynapseAPI/download/useDownloadList'

jest.mock('../../../../src/lib/utils/SynapseClient', () => {
  return {
    removeItemFromDownloadListV2: jest.fn(),
    getUserProfileById: jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUserProfileData)),

    getProfilePicPreviewPresignedUrl: jest.fn().mockResolvedValue(null),
  }
})
jest.mock(
  '../../../../src/lib/utils/hooks/SynapseAPI/download/useDownloadList',
  () => {
    return {
      useGetAvailableFilesToDownloadInfinite: jest.fn(),
    }
  },
)

const mockFetchNextPage = jest.fn()
const mockRefetchStatistics = jest.fn()
const mockUseGetAvailableFilesToDownloadInfinite =
  useGetAvailableFilesToDownloadInfinite as jest.Mock

const page1: Partial<DownloadListItemResult>[] = [
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
  },
]

const page2: Partial<DownloadListItemResult>[] = [
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

describe('DownloadListTableV2 tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUseGetAvailableFilesToDownloadInfinite.mockReturnValue({
      data: {
        pages: [
          {
            page: page1,
            nextPageToken: '50a0',
          },
          {
            page: page2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: false,
      isLoading: false,
      isSuccess: true,
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
