import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '@/mocks/msw/server'
import { http, HttpResponse } from 'msw'
import { getEndpoint, BackendDestinationEnum } from '@/utils/functions'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { DownloadAllFilesFromListButton } from './DownloadAllFilesFromListButton'
import {
  AvailableFilesResponse,
  BatchFileResult,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalFileHandle,
  S3FileHandle,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'

const mockAvailableFilesResponse: AvailableFilesResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
  page: [
    {
      fileName: 'file1.txt',
      addedOn: '2024-01-01T00:00:00.000Z',
      projectId: 'syn123',
      projectName: 'Test Project',
      createdBy: MOCK_USER_ID.toString(),
      createdOn: '2024-01-01T00:00:00.000Z',
      fileSizeBytes: 1000,
      fileEntityId: 'syn456',
      versionNumber: 1,
      isEligibleForPackaging: true,
    },
    {
      fileName: 'file2.txt',
      addedOn: '2024-01-01T00:00:00.000Z',
      projectId: 'syn123',
      projectName: 'Test Project',
      createdBy: MOCK_USER_ID.toString(),
      createdOn: '2024-01-01T00:00:00.000Z',
      fileSizeBytes: 2000,
      fileEntityId: 'syn789',
      versionNumber: 1,
      isEligibleForPackaging: true,
    },
  ],
}

const mockS3FileHandle: S3FileHandle = {
  id: 'filehandle123',
  etag: 'abc-123',
  createdBy: MOCK_USER_ID.toString(),
  createdOn: '2024-01-01T00:00:00.000Z',
  modifiedOn: '2024-01-01T00:00:00.000Z',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'text/plain',
  fileName: 'file1.txt',
  storageLocationId: 1,
  contentSize: 1000,
  status: 'AVAILABLE',
  bucketName: 'test-bucket',
  key: 'test-key',
  isPreview: false,
}

const mockExternalFileHandle: ExternalFileHandle = {
  id: 'filehandle456',
  etag: 'def-456',
  createdBy: MOCK_USER_ID.toString(),
  createdOn: '2024-01-01T00:00:00.000Z',
  modifiedOn: '2024-01-01T00:00:00.000Z',
  concreteType: EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  contentType: 'text/plain',
  fileName: 'file2.txt',
  storageLocationId: 1,
  contentSize: 2000,
  status: 'AVAILABLE',
  externalURL: 'https://example.com/file2.txt',
}

describe('DownloadAllFilesFromListButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders the button', () => {
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
        )}/repo/v1/asynchronous/job/async-job-token`,
        () => {
          return HttpResponse.json({
            jobState: 'COMPLETE',
            responseBody: {
              concreteType:
                'org.sagebionetworks.repo.model.download.AvailableFilesResponse',
              page: [],
            },
          })
        },
      ),
    )

    render(<DownloadAllFilesFromListButton />, {
      wrapper: createWrapper(),
    })

    const button = screen.getByRole('button', {
      name: 'Download All Files',
    })
    expect(button).toBeDefined()
  })

  it('downloads files when clicked', async () => {
    const windowOpenSpy = vi
      .spyOn(window, 'open')
      .mockImplementation(() => null)

    server.use(
      // Mock the download list query
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
        )}/repo/v1/asynchronous/job/async-job-token`,
        () => {
          return HttpResponse.json({
            jobState: 'COMPLETE',
            responseBody: mockAvailableFilesResponse,
          })
        },
      ),
      // Mock the batch file request
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/file/v1/fileHandle/batch`,
        () => {
          const batchFileResult: BatchFileResult = {
            requestedFiles: [
              {
                fileHandleId: 'filehandle123',
                fileHandle: mockS3FileHandle,
                preSignedURL: 'https://presigned.url/file1.txt',
              },
              {
                fileHandleId: 'filehandle456',
                fileHandle: mockExternalFileHandle,
              },
            ],
          }
          return HttpResponse.json(batchFileResult)
        },
      ),
    )

    render(<DownloadAllFilesFromListButton />, {
      wrapper: createWrapper(),
    })

    const button = screen.getByRole('button', {
      name: 'Download All Files',
    })

    await userEvent.click(button)

    // Wait for downloads to start
    await waitFor(
      () => {
        expect(windowOpenSpy).toHaveBeenCalledWith(
          'https://presigned.url/file1.txt',
          '_blank',
        )
        expect(windowOpenSpy).toHaveBeenCalledWith(
          'https://example.com/file2.txt',
          '_blank',
        )
      },
      { timeout: 3000 },
    )

    windowOpenSpy.mockRestore()
  })
})
