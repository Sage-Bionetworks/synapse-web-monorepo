import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import {
  AvailableFilesResponse,
  DownloadListItemResult,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DownloadListTableV2 from './DownloadListTable'

vi.mock('@/utils/functions/StringUtils', async importOriginal => {
  return {
    ...(await importOriginal()),
    copyStringToClipboard: vi.fn().mockResolvedValue('copied'),
  }
})

const mockCopyStringToClipboard = vi.mocked(copyStringToClipboard)

vi.spyOn(SynapseClient, 'removeItemsFromDownloadListV2').mockResolvedValue({
  numberOfFilesRemoved: 2,
})

vi.spyOn(SynapseClient, 'getUserProfileById').mockResolvedValue(
  mockUserProfileData,
)
vi.spyOn(SynapseClient, 'getProfilePicPreviewPresignedUrl').mockResolvedValue(
  null,
)

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
vi.spyOn(SynapseClient, 'getAvailableFilesToDownload').mockImplementation(
  request => {
    let response: AvailableFilesResponse = {
      page: page1,
      nextPageToken: '50a0',
      concreteType:
        'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
    }
    if (request.nextPageToken) {
      response = {
        page: page2,
        nextPageToken: undefined,
        concreteType:
          'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
      }
    }
    return Promise.resolve(response)
  },
)

function renderComponent() {
  return render(<DownloadListTableV2 />, { wrapper: createWrapper() })
}

// FIXME: Flaky in CI
describe.skip('DownloadListTable tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('loads more available download files when "show more" is clicked', async () => {
    renderComponent()

    const fileEntity1 = await screen.findAllByText('file1.txt')
    expect(fileEntity1).toHaveLength(1)

    // trigger fetching page 2
    await userEvent.click(screen.getByRole('button', { name: 'Show More' }))

    const fileEntity2 = await screen.findAllByText('file2.txt')
    expect(fileEntity2).toHaveLength(1)
  })
  describe('Copy all Synapse IDs', () => {
    it('should call clipboard.writeText with the expected Synapse IDs', async () => {
      renderComponent()

      const copySynIDsButton = await screen.findByTestId('copySynIdsButton')
      await userEvent.click(copySynIDsButton)
      await waitFor(() =>
        expect(mockCopyStringToClipboard).toHaveBeenCalledWith(
          'syn1.1\nsyn2.3',
        ),
      )
    })
  })
})
