import {
  mockExternalObjectStoreUploadDestination,
  mockS3UploadDestination,
} from '@/mocks/mock_upload_destination'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client'
import { useDirectUploadToS3 } from '@/synapse-queries/file/useDirectUploadToS3'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import { getUseMutationIdleMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BaseFileUploadArgs,
  useUploadFiles,
  UseUploadFilesArgs,
} from '@/utils/hooks/useUploadFileEntity/useUploadFiles'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'

vi.mock('@/synapse-queries/file/useSynapseMultipartUpload', () => {
  return {
    useSynapseMultipartUpload: vi.fn(),
  }
})

vi.mock('@/synapse-queries/file/useDirectUploadToS3', () => {
  return {
    useDirectUploadToS3: vi.fn(),
  }
})

const mockUseSynapseMultipartUpload = vi.mocked(useSynapseMultipartUpload)
const mockUseDirectS3Upload = vi.mocked(useDirectUploadToS3)

const mockStorageLocationId = 6543

describe('useUploadFiles', () => {
  const s3DirectAccessKey = 'fake-access-key'
  const s3DirectSecretKey = 'fake-secret-key'

  const file1 = new File(['file contents'], 'file1.txt')
  const file2 = new File(['file contents'], 'file2.txt')

  const createdFileHandleId1 = '147421'
  const createdFileHandleId2 = '147422'

  const mockOnBeforeUpload = vi.fn()
  const mockOnUploadComplete = vi.fn()

  function renderHook(args?: UseUploadFilesArgs) {
    return _renderHook(
      () =>
        useUploadFiles({
          onBeforeUpload: mockOnBeforeUpload,
          onUploadComplete: mockOnUploadComplete,
          accessKey: s3DirectAccessKey,
          secretKey: s3DirectSecretKey,
          ...args,
        }),
      {
        wrapper: createWrapper(),
      },
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test.each<{ name: string; args: Partial<UseUploadFilesArgs> }>([
    {
      name: 'default storage',
      args: { uploadDestination: undefined, storageLocationId: undefined },
    },
    {
      name: 'a defined storage location ID',
      args: {
        storageLocationId: mockStorageLocationId,
      },
    },
    {
      name: 'an S3 UploadDestination',
      args: {
        uploadDestination: mockS3UploadDestination,
      },
    },
  ])(
    'upload one file into $name via Synapse multipart upload',
    async ({ args }) => {
      const startUploadArgs: BaseFileUploadArgs[] = [{ file: file1 }]

      const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
        fileHandleId: createdFileHandleId1,
        fileName: file1.name,
      })
      mockUseSynapseMultipartUpload.mockReturnValue(
        useSynapseMultipartUploadMockReturn,
      )

      mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

      const { result: hook } = renderHook(args)

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.startUpload).toBeDefined()
      })

      act(() => {
        hook.current.startUpload(...startUploadArgs)
      })

      let expectedStorageLocationId
      if (args.uploadDestination?.storageLocationId) {
        expectedStorageLocationId = args.uploadDestination.storageLocationId
      } else if (args.storageLocationId) {
        expectedStorageLocationId = args.storageLocationId
      } else {
        expectedStorageLocationId = SYNAPSE_STORAGE_LOCATION_ID
      }

      await waitFor(() => {
        expect(
          useSynapseMultipartUploadMockReturn.mutateAsync,
        ).toHaveBeenCalledTimes(1)
        expect(
          useSynapseMultipartUploadMockReturn.mutateAsync,
        ).toHaveBeenCalledWith({
          fileName: file1.name,
          blob: file1,
          storageLocationId: expectedStorageLocationId,
          contentType: 'text/plain',
          progressCallback: expect.any(Function),
          abortController: expect.any(AbortController),
          onMd5Computed: expect.any(Function),
        })

        expect(mockOnUploadComplete).toHaveBeenCalledTimes(1)
        expect(mockOnUploadComplete).toHaveBeenCalledWith(
          { file: file1 },
          createdFileHandleId1,
        )

        expect(mockUseDirectS3Upload().mutate).not.toHaveBeenCalled()
        expect(mockUseDirectS3Upload().mutateAsync).not.toHaveBeenCalled()
      })

      expect(hook.current.state).toBe('COMPLETE')
    },
  )

  test('upload file via direct S3 upload', async () => {
    const startUploadArgs: BaseFileUploadArgs[] = [{ file: file1 }]

    mockUseSynapseMultipartUpload.mockReturnValue(getUseMutationIdleMock())

    const useDirectS3UploadReturn = getUseMutationIdleMock({
      id: createdFileHandleId1,
    })
    mockUseDirectS3Upload.mockReturnValue(useDirectS3UploadReturn)

    const { result: hook } = renderHook({
      uploadDestination: mockExternalObjectStoreUploadDestination,
      accessKey: s3DirectAccessKey,
      secretKey: s3DirectSecretKey,
    })

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.startUpload).toBeDefined()
    })

    act(() => {
      hook.current.startUpload(...startUploadArgs)
    })

    await waitFor(() => {
      expect(useDirectS3UploadReturn.mutateAsync).toHaveBeenCalledTimes(1)
      expect(useDirectS3UploadReturn.mutateAsync).toHaveBeenCalledWith({
        fileName: file1.name,
        blob: file1,
        storageLocationId:
          mockExternalObjectStoreUploadDestination.storageLocationId,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
        accessKey: s3DirectAccessKey,
        secretKey: s3DirectSecretKey,
        bucketName: mockExternalObjectStoreUploadDestination.bucket,
        endpoint: mockExternalObjectStoreUploadDestination.endpointUrl,
        keyPrefixUUID: mockExternalObjectStoreUploadDestination.keyPrefixUUID,
      })

      expect(mockUseSynapseMultipartUpload().mutateAsync).not.toHaveBeenCalled()
      expect(mockUseSynapseMultipartUpload().mutateAsync).not.toHaveBeenCalled()
      expect(mockOnUploadComplete).toHaveBeenCalledOnce()
      expect(mockOnUploadComplete).toHaveBeenCalledWith(
        { file: file1 },
        createdFileHandleId1,
      )
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  test('upload multiple files into Synapse Storage via Synapse multipart upload', async () => {
    const startUploadArgs: BaseFileUploadArgs[] = [
      { file: file1 },
      { file: file2 },
    ]

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock()
    useSynapseMultipartUploadMockReturn.mutateAsync.mockResolvedValueOnce({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    useSynapseMultipartUploadMockReturn.mutateAsync.mockResolvedValueOnce({
      fileHandleId: createdFileHandleId2,
      fileName: file2.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )
    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.startUpload).toBeDefined()
    })

    act(() => {
      hook.current.startUpload(...startUploadArgs)
    })

    await waitFor(() => {
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(2)
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith({
        fileName: file1.name,
        blob: file1,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith({
        fileName: file2.name,
        blob: file2,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(mockOnUploadComplete).toHaveBeenCalledTimes(2)
      expect(mockOnUploadComplete).toHaveBeenCalledWith(
        { file: file1 },
        createdFileHandleId1,
      )
      expect(mockOnUploadComplete).toHaveBeenCalledWith(
        { file: file2 },
        createdFileHandleId2,
      )
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  test('pause and resume an upload', async () => {
    const startUploadArgs: BaseFileUploadArgs[] = [{ file: file1 }]

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )
    useSynapseMultipartUploadMockReturn.mutateAsync.mockRejectedValueOnce(
      new Error('the request was aborted.'),
    )
    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.startUpload).toBeDefined()
    })

    act(() => {
      hook.current.startUpload(...startUploadArgs)
    })

    expect(hook.current.state).toBe('UPLOADING')

    act(() => {
      hook.current.uploadProgress[0].pause()
    })

    await waitFor(() => {
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith({
        fileName: file1.name,
        blob: file1,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(mockOnUploadComplete).not.toHaveBeenCalled()
    })

    act(() => {
      hook.current.uploadProgress[0].resume()
    })

    await waitFor(() => {
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(2)
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenNthCalledWith(2, {
        fileName: file1.name,
        blob: file1,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(mockOnUploadComplete).toHaveBeenCalledTimes(1)
      expect(mockOnUploadComplete).toHaveBeenCalledWith(
        { file: file1 },
        createdFileHandleId1,
      )
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  test('cancel and remove an upload', async () => {
    const startUploadArgs: BaseFileUploadArgs[] = [{ file: file1 }]

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )
    useSynapseMultipartUploadMockReturn.mutateAsync.mockRejectedValueOnce(
      new Error('the request was aborted.'),
    )
    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.startUpload).toBeDefined()
    })

    act(() => {
      hook.current.startUpload(...startUploadArgs)
    })

    expect(hook.current.state).toBe('UPLOADING')

    act(() => {
      hook.current.uploadProgress[0].cancel()
    })

    await waitFor(() => {
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith({
        fileName: file1.name,
        blob: file1,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(mockOnUploadComplete).not.toHaveBeenCalled()
    })

    act(() => {
      hook.current.uploadProgress[0].remove()
    })

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.uploadProgress.length).toBe(0)
      expect(mockOnUploadComplete).not.toHaveBeenCalled()
    })
  })

  test('upload fails, and user removes it', async () => {
    const startUploadArgs: BaseFileUploadArgs[] = [{ file: file1 }]
    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )
    useSynapseMultipartUploadMockReturn.mutateAsync.mockRejectedValue(
      new Error('The upload failed'),
    )
    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.startUpload).toBeDefined()
    })

    act(() => {
      hook.current.startUpload(...startUploadArgs)
    })

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.uploadProgress.length).toBe(1)
      expect(hook.current.uploadProgress[0].status).toBe('FAILED')
      expect(hook.current.uploadProgress[0].failureReason).toEqual(
        'The upload failed',
      )
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith({
        fileName: file1.name,
        blob: file1,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        contentType: 'text/plain',
        progressCallback: expect.any(Function),
        abortController: expect.any(AbortController),
        onMd5Computed: expect.any(Function),
      })
      expect(mockOnUploadComplete).not.toHaveBeenCalled()
    })
  })
})
