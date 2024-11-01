import {
  s3UploadErrorHandler,
  s3UploadSuccessHandler,
  storageEndpoint,
} from '../../mocks/msw/handlers/aws/s3Mock'
import { server } from '../../mocks/msw/server'
import { uploadToS3 } from './UploadToS3'

describe('UploadToS3', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  beforeEach(() => {
    server.use(s3UploadSuccessHandler)
  })

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

    expect(progressCallback).toHaveBeenCalled()
  })

  test('failed upload', async () => {
    server.use(s3UploadErrorHandler)

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
