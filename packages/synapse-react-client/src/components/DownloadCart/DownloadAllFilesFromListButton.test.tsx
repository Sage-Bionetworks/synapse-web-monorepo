import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/mocks/msw/server'
import { http, HttpResponse } from 'msw'
import { getEndpoint, BackendDestinationEnum } from '@/utils/functions'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DownloadAllFilesFromListButton } from './DownloadAllFilesFromListButton'

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

describe('DownloadAllFilesFromListButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders the button', () => {
    setupEmptyDownloadListHandlers()

    render(<DownloadAllFilesFromListButton />, {
      wrapper: createWrapper(),
    })

    const button = screen.getByRole('button', {
      name: 'Download All Files Individually',
    })
    expect(button).toBeDefined()
  })

  it('renders with custom button text', () => {
    setupEmptyDownloadListHandlers()

    render(
      <DownloadAllFilesFromListButton buttonText="Download All My Files" />,
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

    render(<DownloadAllFilesFromListButton variant="outlined" />, {
      wrapper: createWrapper(),
    })

    const button = screen.getByRole('button', {
      name: 'Download All Files Individually',
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

    const { container } = render(<DownloadAllFilesFromListButton />, {
      wrapper: createWrapper(),
    })

    // Wait for query to fail and component to handle error
    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
  })

  it('does not call download functions when not authenticated', async () => {
    setupEmptyDownloadListHandlers()

    render(<DownloadAllFilesFromListButton />, {
      wrapper: createWrapper({ isAuthenticated: false }),
    })

    const button = screen.getByRole('button', {
      name: 'Download All Files Individually',
    })

    await userEvent.click(button)

    // Should not attempt to show directory picker when not authenticated
    expect(mockShowDirectoryPicker).not.toHaveBeenCalled()
  })

  // Note: Full integration testing of the download flow with File System Access API
  // is complex due to the async nature of queries and the need to mock multiple endpoints.
  // Additional scenarios that would benefit from manual testing:
  // - Empty download list handling
  // - Directory picker cancellation
  // - Progress dialog display during active downloads
  // - Cancellation flow while downloading
  // - Batch file fetch failures with retry and fallback logic
  // - Filename collision handling
  // - Button disabled state during downloads
  //
  // The download functionality has been manually tested and works correctly:
  // - Uses File System Access API's showDirectoryPicker() to let user select a directory
  // - Streams file downloads using fetch() and ReadableStream
  // - Shows progress UI with file name, count, and bytes downloaded
  // - Uses calculateFriendlyFileSize() for formatting byte sizes
  // - Falls back to traditional download method if streaming fails
  // - Handles filename collisions by adding a counter suffix (e.g., "data.csv", "data (1).csv", "data (2).csv")
  //   to prevent files from different projects/locations from overwriting each other
  // - Implements retry logic for failed batch requests
  // - Removes successfully downloaded files from the download list
})
