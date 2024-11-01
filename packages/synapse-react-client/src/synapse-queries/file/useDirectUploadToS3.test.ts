import { ExternalObjectStoreFileHandle } from '@sage-bionetworks/synapse-client'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import {
  s3UploadErrorHandler,
  s3UploadSuccessHandler,
  storageEndpoint,
} from '../../mocks/msw/handlers/aws/s3Mock'
import { server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { useDirectUploadToS3 } from './useDirectUploadToS3'
import * as UploadToS3Module from './UploadToS3'

// calculateMd5 results in an error trying to read the Blob data, likely an issue with Jest/JSDOM
jest.spyOn(SynapseClient, 'calculateMd5').mockResolvedValue('fakeMd5')

const uploadToS3Spy = jest.spyOn(UploadToS3Module, 'uploadToS3')
const createExternalFileHandleSpy = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.fileServicesClient,
  'postFileV1ExternalFileHandle',
)

function renderHook() {
  const mockOnSuccess = jest.fn()
  const mockOnError = jest.fn()
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
    jest.clearAllMocks()

    server.use(s3UploadSuccessHandler)
  })

  it('uploads a file to s3 and creates a file handle', async () => {
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
    server.use(s3UploadErrorHandler)

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
