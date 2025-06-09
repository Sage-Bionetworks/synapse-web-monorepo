import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { Upload } from '@aws-sdk/lib-storage'
import { ExternalObjectStoreFileHandle } from '@sage-bionetworks/synapse-client'
import { act, renderHook as _renderHook } from '@testing-library/react'
import * as UploadToS3Module from './UploadToS3'
import { useDirectUploadToS3 } from './useDirectUploadToS3'

vi.mock('@aws-sdk/lib-storage', () => {
  return {
    Upload: vi.fn().mockImplementation(() => {
      return {
        on: vi.fn(),
        done: vi.fn(),
      }
    }),
  }
})

const mockUpload = vi.mocked(Upload)

const uploadToS3Spy = vi.spyOn(UploadToS3Module, 'uploadToS3')
const createExternalFileHandleSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.fileServicesClient,
  'postFileV1ExternalFileHandle',
)

function renderHook() {
  const mockOnSuccess = vi.fn()
  const mockOnError = vi.fn()
  const renderHookResult = _renderHook(
    () =>
      useDirectUploadToS3({
        onSuccess: mockOnSuccess,
        onError: mockOnError,
      }),
    { wrapper: createWrapper() },
  )
  return {
    ...renderHookResult,
    mockOnSuccess,
    mockOnError,
  }
}

describe('useDirectUploadToS3', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('uploads a file to s3 and creates a file handle', async () => {
    const storageEndpoint = 'https://my-fake.endpoint.synapse/storage/v1'
    const blob = new Blob(['test'], { type: 'text/plain' })
    const fileName = 'test.json'
    const contentType = 'application/json'
    const accessKey = 'fakeKey'
    const secretKey = 'fakeSecret'
    const abortController = new AbortController()
    const storageLocationId = 100
    const bucketName = 'somebucket'
    const keyPrefixUUID = 'someuuid'

    const { result, mockOnSuccess, mockOnError } = renderHook()

    let createdFileHandle: ExternalObjectStoreFileHandle =
      null as unknown as ExternalObjectStoreFileHandle
    await act(async () => {
      createdFileHandle = await result.current.mutateAsync({
        endpoint: storageEndpoint,
        blob: blob,
        fileName: fileName,
        contentType: contentType,
        abortController: abortController,
        storageLocationId: storageLocationId,
        accessKey: accessKey,
        secretKey: secretKey,
        bucketName: bucketName,
        keyPrefixUUID: keyPrefixUUID,
      })
    })
    expect(mockOnSuccess).toHaveBeenCalled()
    expect(mockOnError).not.toHaveBeenCalled()

    expect(uploadToS3Spy).toHaveBeenCalled()
    expect(createExternalFileHandleSpy).toHaveBeenCalled()

    expect(createdFileHandle.concreteType).toBe(
      'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
    )
    expect(createdFileHandle.fileName).toBe(fileName)
    expect(createdFileHandle.fileKey).toBe(`${keyPrefixUUID}/${fileName}`)
    expect(createdFileHandle.contentType).toBe(contentType)
    expect(createdFileHandle.contentSize).toBe(blob.size)
    expect(createdFileHandle.storageLocationId).toBe(storageLocationId)
  })

  it('does not create a file handle when s3 upload fails', async () => {
    // @ts-expect-error - Only implement required properties
    mockUpload.mockImplementation(() => {
      return {
        on: vi.fn(),
        done: vi.fn().mockRejectedValue(new Error('Access Denied')),
      }
    })

    const storageEndpoint = 'https://my-fake.endpoint.synapse/storage/v1'
    const blob = new Blob(['test'], { type: 'text/plain' })
    const fileName = 'test.json'
    const contentType = 'application/json'
    const accessKey = 'fakeKey'
    const secretKey = 'fakeSecret'
    const abortController = new AbortController()
    const storageLocationId = 100
    const bucketName = 'somebucket'
    const keyPrefixUUID = 'someuuid'

    const { result, mockOnSuccess, mockOnError } = renderHook()

    await act(async () => {
      const promise = result.current.mutateAsync({
        endpoint: storageEndpoint,
        blob: blob,
        fileName: fileName,
        contentType: contentType,
        abortController: abortController,
        storageLocationId: storageLocationId,
        accessKey: accessKey,
        secretKey: secretKey,
        bucketName: bucketName,
        keyPrefixUUID: keyPrefixUUID,
      })
      await expect(promise).rejects.toThrow()
    })

    expect(mockOnSuccess).not.toHaveBeenCalled()
    expect(mockOnError).toHaveBeenCalled()
    expect(uploadToS3Spy).toHaveBeenCalled()
    expect(createExternalFileHandleSpy).not.toHaveBeenCalled()
  })
})
