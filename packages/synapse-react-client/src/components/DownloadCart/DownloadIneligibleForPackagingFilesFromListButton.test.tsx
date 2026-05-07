import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/mocks/msw/server'
import { http, HttpResponse } from 'msw'
import { getEndpoint, BackendDestinationEnum } from '@/utils/functions'
import { FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import SynapseClient from '@/synapse-client'
import {
  BatchFileResult,
  DownloadListItemResult,
} from '@sage-bionetworks/synapse-types'
import { DownloadIneligibleForPackagingFilesFromListButton } from './DownloadIneligibleForPackagingFilesFromListButton'

vi.spyOn(SynapseClient, 'removeItemsFromDownloadListV2').mockResolvedValue({
  numberOfFilesRemoved: 0,
})
vi.spyOn(SynapseClient, 'getDownloadListStatistics').mockResolvedValue({
  concreteType:
    'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
  totalNumberOfFiles: 0,
  numberOfFilesAvailableForDownload: 0,
  numberOfFilesAvailableForDownloadAndEligibleForPackaging: 0,
  numberOfFilesRequiringAction: 0,
  sumOfFileSizesAvailableForDownload: 0,
})

const MOCK_ENTITY_ID = 'syn123'
const MOCK_VERSION = 1
const MOCK_FILE_HANDLE_ID = 'fh456'
const MOCK_PRESIGNED_URL = 'https://presigned.example.com/download/file.txt'
const MOCK_EXTERNAL_URL = 'https://external-host.example.com/data/file.txt'

const mockNonPackageableItem: DownloadListItemResult = {
  fileEntityId: MOCK_ENTITY_ID,
  versionNumber: MOCK_VERSION,
  addedOn: '2024-01-01T00:00:00.000Z',
  fileName: 'test-file.txt',
  fileSizeBytes: 1024,
  projectId: 'syn200',
  projectName: 'Test Project',
  createdBy: '12345',
  createdOn: '2024-01-01T00:00:00.000Z',
  isEligibleForPackaging: false,
}

function setupDownloadListWithNonPackageableFiles(
  batchFileResult: Pick<BatchFileResult, 'requestedFiles'>,
) {
  vi.spyOn(SynapseClient, 'getAvailableFilesToDownload').mockResolvedValue({
    concreteType:
      'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
    page: [mockNonPackageableItem],
    nextPageToken: undefined,
  })
  vi.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
    id: MOCK_ENTITY_ID,
    versionNumber: MOCK_VERSION,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    etag: 'test-etag',
    name: 'test-file.txt',
    parentId: 'syn200',
  } as unknown as Awaited<ReturnType<typeof SynapseClient.getEntity>>)
  // Use MSW to intercept the file batch request, because `getFiles` is imported
  // as a direct named import in the component and cannot be intercepted via vi.spyOn.
  server.use(
    http.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}${FILE_HANDLE_BATCH}`,
      () => HttpResponse.json(batchFileResult, { status: 201 }),
    ),
  )
}

function createHangingStreamResponse() {
  const stream = new ReadableStream({
    start() {
      // Never enqueue or close — keeps the download in progress so the progress panel stays visible
    },
  })
  return new Response(stream, {
    status: 200,
    headers: { 'content-length': '1000' },
  })
}

/**
 * Renders the component and waits for the download list query to succeed
 * so that `status === 'success'` is true before the button is clicked.
 */
async function renderAndWaitForQueryLoad() {
  render(<DownloadIneligibleForPackagingFilesFromListButton />, {
    wrapper: createWrapper(),
  })
  // Ensure the download list query has resolved; this guarantees status === 'success'
  // when the button is clicked, so the download flow is triggered.
  await waitFor(() => {
    expect(
      vi.mocked(SynapseClient.getAvailableFilesToDownload),
    ).toHaveBeenCalled()
  })
  // Flush the microtask queue so React Query processes the resolved data and React
  // re-renders with status === 'success' before we click the button.
  await act(async () => {
    await Promise.resolve()
  })
  return screen.getByRole('button', { name: 'Start Multi-file Download' })
}

// Mock File System Access API
const mockWritableStream = {
  write: vi.fn().mockResolvedValue(undefined),
  close: vi.fn().mockResolvedValue(undefined),
  abort: vi.fn().mockResolvedValue(undefined),
}

const mockFileHandle = {
  createWritable: vi.fn().mockResolvedValue(mockWritableStream),
}

const mockDirectoryHandle = {
  getFileHandle: vi.fn().mockResolvedValue(mockFileHandle),
}

// Mock showDirectoryPicker
const mockShowDirectoryPicker = vi.fn().mockResolvedValue(mockDirectoryHandle)

// Mock fetch for streaming
const mockFetch = vi.fn()
global.fetch = mockFetch as unknown as typeof fetch

// Add showDirectoryPicker to window
Object.defineProperty(window, 'showDirectoryPicker', {
  writable: true,
  value: mockShowDirectoryPicker,
})

function setupEmptyDownloadListHandlers() {
  server.use(
    http.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/download/list/query/async/start`,
      () => {
        return HttpResponse.json({ token: 'async-job-token' })
      },
    ),
    http.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/download/list/query/async/get/:token`,
      () => {
        return HttpResponse.json({
          responseDetails: {
            concreteType:
              'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
            page: [],
            nextPageToken: undefined,
          },
        })
      },
    ),
    http.get(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/download/list/statistics`,
      () => {
        return HttpResponse.json({
          concreteType:
            'org.sagebionetworks.repo.model.download.FilesStatisticsResponse',
          totalNumberOfFiles: 0,
          numberOfFilesAvailableForDownload: 0,
          numberOfFilesAvailableForDownloadAndEligibleForPackaging: 0,
          numberOfFilesRequiringAction: 0,
          sumOfFileSizesAvailableForDownload: 0,
        })
      },
    ),
  )
}

describe('DownloadIneligibleForPackagingFilesFromListButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders the button', () => {
    setupEmptyDownloadListHandlers()

    render(<DownloadIneligibleForPackagingFilesFromListButton />, {
      wrapper: createWrapper(),
    })

    const button = screen.getByRole('button', {
      name: 'Start Multi-file Download',
    })
    expect(button).toBeDefined()
  })

  it('renders with custom button text', () => {
    setupEmptyDownloadListHandlers()

    render(
      <DownloadIneligibleForPackagingFilesFromListButton buttonText="Download All My Files" />,
      {
        wrapper: createWrapper(),
      },
    )

    const button = screen.getByRole('button', {
      name: 'Download All My Files',
    })
    expect(button).toBeDefined()
  })

  it('renders with custom variant', () => {
    setupEmptyDownloadListHandlers()

    render(
      <DownloadIneligibleForPackagingFilesFromListButton variant="outlined" />,
      {
        wrapper: createWrapper(),
      },
    )

    const button = screen.getByRole('button', {
      name: 'Start Multi-file Download',
    })
    expect(button).toBeDefined()
    expect(button.className).toContain('MuiButton-outlined')
  })

  it('handles query error by not rendering', async () => {
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/download/list/query/async/start`,
        () => {
          return HttpResponse.json(
            { reason: 'Internal server error' },
            { status: 500 },
          )
        },
      ),
    )

    const { container } = render(
      <DownloadIneligibleForPackagingFilesFromListButton />,
      {
        wrapper: createWrapper(),
      },
    )

    // Wait for query to fail and component to handle error
    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
  })

  it('does not call download functions when not authenticated', async () => {
    setupEmptyDownloadListHandlers()

    render(<DownloadIneligibleForPackagingFilesFromListButton />, {
      wrapper: createWrapper({ isAuthenticated: false }),
    })

    const button = screen.getByRole('button', {
      name: 'Start Multi-file Download',
    })

    await userEvent.click(button)

    // Should not attempt to show directory picker when not authenticated
    expect(mockShowDirectoryPicker).not.toHaveBeenCalled()
  })

  it('shows a progress panel with the current file name and count while downloading', async () => {
    setupDownloadListWithNonPackageableFiles({
      requestedFiles: [
        {
          fileHandleId: MOCK_FILE_HANDLE_ID,
          preSignedURL: MOCK_PRESIGNED_URL,
        },
      ],
    })
    mockFetch.mockResolvedValue(createHangingStreamResponse())

    const button = await renderAndWaitForQueryLoad()
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('Downloading file 1 of 1')).toBeInTheDocument()
    })
    expect(screen.getByText('test-file.txt')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
  })

  it('shows an external file warning panel when an external file handle is encountered', async () => {
    setupDownloadListWithNonPackageableFiles({
      requestedFiles: [
        {
          fileHandleId: MOCK_FILE_HANDLE_ID,
          fileHandle: {
            id: MOCK_FILE_HANDLE_ID,
            concreteType:
              'org.sagebionetworks.repo.model.file.ExternalFileHandle',
            externalURL: MOCK_EXTERNAL_URL,
            createdBy: '12345',
            createdOn: '2024-01-01T00:00:00.000Z',
            modifiedOn: '2024-01-01T00:00:00.000Z',
            etag: 'etag',
          } as unknown as BatchFileResult['requestedFiles'][0]['fileHandle'],
        },
      ],
    })
    mockFetch.mockResolvedValue(createHangingStreamResponse())

    const button = await renderAndWaitForQueryLoad()
    await userEvent.click(button)

    await waitFor(() => {
      expect(
        screen.getByText('Some of your files are hosted externally.'),
      ).toBeInTheDocument()
    })
    expect(
      screen.getByText('Downloads may be slower than expected'),
    ).toBeInTheDocument()
  })

  it('dismisses the external file warning panel when the close button is clicked', async () => {
    setupDownloadListWithNonPackageableFiles({
      requestedFiles: [
        {
          fileHandleId: MOCK_FILE_HANDLE_ID,
          fileHandle: {
            id: MOCK_FILE_HANDLE_ID,
            concreteType:
              'org.sagebionetworks.repo.model.file.ExternalFileHandle',
            externalURL: MOCK_EXTERNAL_URL,
            createdBy: '12345',
            createdOn: '2024-01-01T00:00:00.000Z',
            modifiedOn: '2024-01-01T00:00:00.000Z',
            etag: 'etag',
          } as unknown as BatchFileResult['requestedFiles'][0]['fileHandle'],
        },
      ],
    })
    mockFetch.mockResolvedValue(createHangingStreamResponse())

    const button = await renderAndWaitForQueryLoad()
    await userEvent.click(button)

    await waitFor(() => {
      expect(
        screen.getByText('Some of your files are hosted externally.'),
      ).toBeInTheDocument()
    })

    await userEvent.click(
      screen.getByRole('button', { name: 'Dismiss external file warning' }),
    )

    expect(
      screen.queryByText('Some of your files are hosted externally.'),
    ).not.toBeInTheDocument()
  })

  it('cancels the download and hides the progress panel when the Cancel button is clicked', async () => {
    setupDownloadListWithNonPackageableFiles({
      requestedFiles: [
        {
          fileHandleId: MOCK_FILE_HANDLE_ID,
          preSignedURL: MOCK_PRESIGNED_URL,
        },
      ],
    })
    mockFetch.mockResolvedValue(createHangingStreamResponse())

    const button = await renderAndWaitForQueryLoad()
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('Downloading file 1 of 1')).toBeInTheDocument()
    })

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    await waitFor(() => {
      expect(screen.queryByText(/Downloading file/)).not.toBeInTheDocument()
    })
  })
})
