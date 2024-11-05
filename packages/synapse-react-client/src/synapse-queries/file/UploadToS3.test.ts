import { Upload } from '@aws-sdk/lib-storage'
import { uploadToS3 } from './UploadToS3'

jest.mock('@aws-sdk/lib-storage', () => {
  return {
    Upload: jest.fn().mockImplementation(() => {
      return {
        on: jest.fn(),
        done: jest.fn(),
      }
    }),
  }
})

const mockUpload = jest.mocked(Upload)

describe('UploadToS3', () => {
  const storageEndpoint = 'https://my-fake.endpoint.synapse/storage/v1'
  const blob = new Blob(['test'], { type: 'text/plain' })
  const fileKey = 'foo-bar/test.txt'
  const accessKey = 'fakeKey'
  const secretKey = 'fakeSecret'
  const bucketName = 'my_bucket'
  const contentType = 'application/json'
  const abortController = new AbortController()

  test('successful upload', async () => {
    const progressCallback = jest.fn()

    await uploadToS3(
      blob,
      fileKey,
      storageEndpoint,
      accessKey,
      secretKey,
      bucketName,
      contentType,
      abortController,
      progressCallback,
    )

    expect(mockUpload).toHaveBeenCalledTimes(1)
    const mockUploadInstance = mockUpload.mock.results[0].value
    expect(mockUploadInstance.on.mock.lastCall![0]).toBe('httpUploadProgress')
    const httpUploadProgressCallback = mockUploadInstance.on.mock.lastCall![1]!
    httpUploadProgressCallback({ loaded: 1, total: 1 })

    expect(progressCallback).toHaveBeenCalledWith({ value: 1, total: 1 })

    expect(mockUploadInstance.done).toHaveBeenCalledTimes(1)
  })

  test('failed upload', async () => {
    // @ts-expect-error - Only implement required properties
    mockUpload.mockImplementation(() => {
      return {
        on: jest.fn(),
        done: jest.fn().mockRejectedValue(new Error('Access Denied')),
      }
    })

    const progressCallback = jest.fn()

    await expect(() =>
      uploadToS3(
        blob,
        fileKey,
        storageEndpoint,
        accessKey,
        secretKey,
        bucketName,
        contentType,
        abortController,
        progressCallback,
      ),
    ).rejects.toThrow('Access Denied')
    expect(progressCallback).not.toHaveBeenCalled()
  })
})