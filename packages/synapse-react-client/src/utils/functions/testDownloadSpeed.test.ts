import { mockFileHandle } from '@/mocks/mock_file_handle'
import {
  getEntity,
  getFileHandleContent,
  getFiles,
} from '@/synapse-client/SynapseClient'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { testDownloadSpeed } from './testDownloadSpeed'

vi.mock('@/synapse-client/SynapseClient')

const mockGetEntity = vi.mocked(getEntity)
const mockGetFiles = vi.mocked(getFiles)
const mockGetFileHandleContent = vi.mocked(getFileHandleContent)

const testFileHandle = { ...mockFileHandle, contentSize: 2_000_000 }
const presignedUrl = 'https://s3.example.com/download-speed-test-file'

describe('testDownloadSpeed', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
    mockGetEntity.mockResolvedValue({
      id: 'syn12600511',
      name: 'Download speed test file',
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      dataFileHandleId: testFileHandle.id,
    } as FileEntity)
    mockGetFiles.mockResolvedValue({
      requestedFiles: [
        {
          fileHandleId: testFileHandle.id,
          fileHandle: testFileHandle,
          preSignedURL: presignedUrl,
        },
      ],
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('resolves with the measured speed in bytes per second and reuses it from the cache', async () => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(0)
    // The download takes 2.2 seconds, 0.2 of which is subtracted as estimated CORS overhead
    mockGetFileHandleContent.mockImplementation(() => {
      vi.setSystemTime(2_200)
      return Promise.resolve('')
    })

    await expect(testDownloadSpeed('token')).resolves.toBe(1_000_000)
    expect(mockGetFileHandleContent).toHaveBeenCalledWith(
      testFileHandle,
      presignedUrl,
    )

    await expect(testDownloadSpeed('token')).resolves.toBe(1_000_000)
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
  })

  it('rejects when the presigned URL for the test file cannot be fetched', async () => {
    mockGetFiles.mockRejectedValue(new Error('Batch file request failed'))

    await expect(testDownloadSpeed('token')).rejects.toThrow(
      'Batch file request failed',
    )
  })

  it('rejects when the test file content cannot be downloaded', async () => {
    mockGetFileHandleContent.mockRejectedValue(new Error('Download failed'))

    await expect(testDownloadSpeed('token')).rejects.toThrow('Download failed')
  })
})
