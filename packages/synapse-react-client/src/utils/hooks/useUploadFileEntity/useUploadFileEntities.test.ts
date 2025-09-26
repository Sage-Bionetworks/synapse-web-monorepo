import { mockExternalObjectStoreUploadDestination } from '@/mocks/mock_upload_destination'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client'
import {
  useCreateEntity,
  useUpdateEntity,
} from '@/synapse-queries/entity/useEntity'
import { useDirectUploadToS3 } from '@/synapse-queries/file/useDirectUploadToS3'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import { useGetDefaultUploadDestination } from '@/synapse-queries/file/useUploadDestination'
import {
  getUseMutationIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  FileEntity,
  UploadDestination,
  UploadType,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import {
  PrepareDirsForUploadReturn,
  usePrepareFileEntityUpload,
} from './usePrepareFileEntityUpload'
import {
  InitiateUploadArgs,
  useUploadFileEntities,
} from './useUploadFileEntities'

vi.mock('../../../synapse-queries/file/useUploadDestination', () => {
  return {
    useGetDefaultUploadDestination: vi.fn(),
  }
})

vi.mock('../../../synapse-queries/file/useSynapseMultipartUpload', () => {
  return {
    useSynapseMultipartUpload: vi.fn(),
  }
})

vi.mock('../../../synapse-queries/file/useDirectUploadToS3', () => {
  return {
    useDirectUploadToS3: vi.fn(),
  }
})

vi.mock('./usePrepareFileEntityUpload', () => {
  return {
    usePrepareFileEntityUpload: vi.fn(),
  }
})

vi.mock('../../../synapse-queries/entity/useEntity', () => {
  return {
    useCreateEntity: vi.fn(),
    useUpdateEntity: vi.fn(),
  }
})

const mockGetEntityById = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'getRepoV1EntityId',
)

const mockUseGetDefaultUploadDestination = vi.mocked(
  useGetDefaultUploadDestination,
)
const mockUsePrepareFileEntityUpload = vi.mocked(usePrepareFileEntityUpload)
const mockUseSynapseMultipartUpload = vi.mocked(useSynapseMultipartUpload)
const mockUseDirectS3Upload = vi.mocked(useDirectUploadToS3)
const mockUseCreateEntity = vi.mocked(useCreateEntity)
const mockUseUpdateEntity = vi.mocked(useUpdateEntity)

const mockSynapseUploadDestination: UploadDestination = {
  concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
  storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
  uploadType: UploadType.S3,
  projectStorageLocationUsage: {
    maxAllowedFileBytes: 1024 * 1024 * 100,
    sumFileBytes: 0,
    isOverLimit: false,
    storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
  },
}

function setupUploadDestinationMock(uploadDestination: UploadDestination) {
  mockUseGetDefaultUploadDestination.mockReturnValue(
    getUseQuerySuccessMock(uploadDestination),
  )
}

function setupPrepareDirsForUploadMock(
  prepareDirsForUploadReturn?: PrepareDirsForUploadReturn,
) {
  const usePrepareFileEntityUploadMockReturn =
    getUseMutationIdleMock<PrepareDirsForUploadReturn>(
      prepareDirsForUploadReturn,
    )
  mockUsePrepareFileEntityUpload.mockReturnValue(
    usePrepareFileEntityUploadMockReturn,
  )
  return usePrepareFileEntityUploadMockReturn
}

describe('useUploadFileEntities', () => {
  const parentId = 'syn123'
  const s3DirectAccessKey = 'fake-access-key'
  const s3DirectSecretKey = 'fake-secret-key'

  const file1 = new File(['file contents'], 'file1.txt')
  const file2 = new File(['file contents'], 'file2.txt')

  const createdFileHandleId1 = '147421'
  const createdFileHandleId2 = '147422'

  const createdEntity1: FileEntity = {
    id: 'syn456',
    parentId,
    name: file1.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    dataFileHandleId: createdFileHandleId1,
  }
  const createdEntity2: FileEntity = {
    id: 'syn457',
    parentId,
    name: file2.name,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    dataFileHandleId: createdFileHandleId2,
  }

  const mockOnStorageLimitSucceeded = vi.fn()

  function renderHook() {
    return _renderHook(
      () =>
        useUploadFileEntities(
          parentId,
          s3DirectAccessKey,
          s3DirectSecretKey,
          mockOnStorageLimitSucceeded,
        ),
      {
        wrapper: createWrapper(),
      },
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('upload one file into Synapse Storage via Synapse multipart upload', async () => {
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
    ]

    setupUploadDestinationMock(mockSynapseUploadDestination)

    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      filesReadyForUpload: [{ file: file1, parentId: 'syn123' }],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )

    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const useCreateEntityReturn =
      getUseMutationIdleMock<FileEntity>(createdEntity1)
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledWith(initiateUploadArgs)

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

      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledTimes(1)
      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledWith({
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(useUpdateEntityReturn.mutateAsync).not.toHaveBeenCalled()
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  test('upload multiple files into Synapse Storage via Synapse multipart upload', async () => {
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
      { file: file2, rootContainerId: 'syn123' },
    ]

    setupUploadDestinationMock(mockSynapseUploadDestination)
    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      filesReadyForUpload: [
        { file: file1, parentId: 'syn123' },
        { file: file2, parentId: 'syn123' },
      ],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

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

    const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()

    useCreateEntityReturn.mutateAsync
      .mockResolvedValueOnce(createdEntity1)
      .mockResolvedValueOnce(createdEntity2)
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledWith(initiateUploadArgs)

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

      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledTimes(2)
      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledWith({
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledWith({
        parentId,
        name: file2.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId2,
      })

      expect(useUpdateEntityReturn.mutateAsync).not.toHaveBeenCalled()
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  test('upload a new version of a specified FileEntity', async () => {
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, existingEntityId: createdEntity1.id! },
    ]

    setupUploadDestinationMock(mockSynapseUploadDestination)

    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      // The user explicitly specified updating this entity (e.g. from that entity page), so no need to prompt
      filesReadyForUpload: [
        { file: file1, existingEntityId: createdEntity1.id! },
      ],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )

    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    mockGetEntityById.mockResolvedValueOnce(createdEntity1)

    const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn =
      getUseMutationIdleMock<FileEntity>(createdEntity1)
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledWith(initiateUploadArgs)

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

      expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledTimes(1)
      expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith({
        id: createdEntity1.id,
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(useCreateEntityReturn.mutateAsync).not.toHaveBeenCalled()
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  describe('prompt user to create new FileEntity version', () => {
    test('confirm new version', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      mockUseGetDefaultUploadDestination.mockReturnValue(
        getUseQuerySuccessMock(mockSynapseUploadDestination),
      )

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        getUseMutationIdleMock<PrepareDirsForUploadReturn>(
          prepareDirsForUploadReturn,
        )
      mockUsePrepareFileEntityUpload.mockReturnValue(
        usePrepareFileEntityUploadMockReturn,
      )

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

      const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()
      mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

      mockGetEntityById
        .mockResolvedValueOnce(createdEntity1)
        .mockResolvedValueOnce(createdEntity2)

      const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity1)
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity2)
      mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      act(() => {
        hook.current.initiateUpload(initiateUploadArgs)
      })

      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith(initiateUploadArgs)

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(2)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file1.name,
            existingEntityId: 'syn456',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
        expect(hook.current.activePrompts[1]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
      })

      act(() => {
        hook.current.activePrompts[0].onConfirm()
      })

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(1)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })

        // Uploads should not start until all prompts have been addressed
        expect(
          useSynapseMultipartUploadMockReturn.mutateAsync,
        ).not.toHaveBeenCalled()
      })

      act(() => {
        hook.current.activePrompts[0].onConfirm()
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

        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledTimes(2)
        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith(
          createdEntity1,
        )
        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith(
          createdEntity2,
        )
        expect(useCreateEntityReturn.mutateAsync).not.toHaveBeenCalled()
      })

      expect(hook.current.state).toBe('COMPLETE')
    })

    test('confirm all versions', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      mockUseGetDefaultUploadDestination.mockReturnValue(
        getUseQuerySuccessMock(mockSynapseUploadDestination),
      )

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        getUseMutationIdleMock<PrepareDirsForUploadReturn>(
          prepareDirsForUploadReturn,
        )
      mockUsePrepareFileEntityUpload.mockReturnValue(
        usePrepareFileEntityUploadMockReturn,
      )

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

      const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()
      mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

      mockGetEntityById
        .mockResolvedValueOnce(createdEntity1)
        .mockResolvedValueOnce(createdEntity2)

      const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity1)
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity2)
      mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      act(() => {
        hook.current.initiateUpload(initiateUploadArgs)
      })

      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith(initiateUploadArgs)

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(2)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file1.name,
            existingEntityId: 'syn456',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
        expect(hook.current.activePrompts[1]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
      })

      act(() => {
        hook.current.activePrompts[0].onConfirmAll()
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

        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledTimes(2)
        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith(
          createdEntity1,
        )
        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith(
          createdEntity2,
        )
        expect(useCreateEntityReturn.mutateAsync).not.toHaveBeenCalled()
      })

      expect(hook.current.state).toBe('COMPLETE')
    })

    test('skip new version', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      mockUseGetDefaultUploadDestination.mockReturnValue(
        getUseQuerySuccessMock(mockSynapseUploadDestination),
      )

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        getUseMutationIdleMock<PrepareDirsForUploadReturn>(
          prepareDirsForUploadReturn,
        )
      mockUsePrepareFileEntityUpload.mockReturnValue(
        usePrepareFileEntityUploadMockReturn,
      )

      const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock()
      useSynapseMultipartUploadMockReturn.mutateAsync.mockResolvedValueOnce({
        fileHandleId: createdFileHandleId2,
        fileName: file2.name,
      })
      mockUseSynapseMultipartUpload.mockReturnValue(
        useSynapseMultipartUploadMockReturn,
      )
      mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

      const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()
      mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

      mockGetEntityById.mockResolvedValueOnce(createdEntity2)

      const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity2)
      mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      act(() => {
        hook.current.initiateUpload(initiateUploadArgs)
      })

      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith(initiateUploadArgs)

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(2)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file1.name,
            existingEntityId: 'syn456',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
        expect(hook.current.activePrompts[1]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
      })

      act(() => {
        hook.current.activePrompts[0].onSkip()
      })

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(1)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })

        // Uploads should not start until all prompts have been addressed
        expect(
          useSynapseMultipartUploadMockReturn.mutateAsync,
        ).not.toHaveBeenCalled()
      })

      act(() => {
        hook.current.activePrompts[0].onConfirm()
      })

      await waitFor(() => {
        expect(
          useSynapseMultipartUploadMockReturn.mutateAsync,
        ).toHaveBeenCalledTimes(1)
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

        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledTimes(1)
        expect(useUpdateEntityReturn.mutateAsync).toHaveBeenCalledWith(
          createdEntity2,
        )
        expect(useCreateEntityReturn.mutateAsync).not.toHaveBeenCalled()
      })

      expect(hook.current.state).toBe('COMPLETE')
    })

    test('cancel all uploads', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      mockUseGetDefaultUploadDestination.mockReturnValue(
        getUseQuerySuccessMock(mockSynapseUploadDestination),
      )

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        getUseMutationIdleMock<PrepareDirsForUploadReturn>(
          prepareDirsForUploadReturn,
        )
      mockUsePrepareFileEntityUpload.mockReturnValue(
        usePrepareFileEntityUploadMockReturn,
      )

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

      const useCreateEntityReturn = getUseMutationIdleMock<FileEntity>()
      mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

      mockGetEntityById
        .mockResolvedValueOnce(createdEntity1)
        .mockResolvedValueOnce(createdEntity2)

      const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity1)
      useUpdateEntityReturn.mutateAsync.mockResolvedValueOnce(createdEntity2)
      mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      act(() => {
        hook.current.initiateUpload(initiateUploadArgs)
      })

      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith(initiateUploadArgs)

      await waitFor(() => {
        expect(hook.current.state).toBe('PROMPT_USER')
        expect(hook.current.activePrompts.length).toBe(2)
        expect(hook.current.activePrompts[0]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file1.name,
            existingEntityId: 'syn456',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
        expect(hook.current.activePrompts[1]).toEqual({
          info: {
            type: 'CONFIRM_NEW_VERSION',
            fileName: file2.name,
            existingEntityId: 'syn457',
          },
          onConfirm: expect.any(Function),
          onSkip: expect.any(Function),
          onConfirmAll: expect.any(Function),
          onCancelAll: expect.any(Function),
        })
      })

      act(() => {
        hook.current.activePrompts[0].onCancelAll()
      })

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.uploadProgress.length).toBe(0)
      })

      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).not.toHaveBeenCalled()
      expect(useUpdateEntityReturn.mutateAsync).not.toHaveBeenCalled()
      expect(useCreateEntityReturn.mutateAsync).not.toHaveBeenCalled()
    })
  })

  test('upload file via direct S3 upload', async () => {
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
    ]
    setupUploadDestinationMock(mockExternalObjectStoreUploadDestination)

    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      filesReadyForUpload: [{ file: file1, parentId: 'syn123' }],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

    mockUseSynapseMultipartUpload.mockReturnValue(getUseMutationIdleMock())

    const useDirectS3UploadReturn = getUseMutationIdleMock({
      id: createdFileHandleId1,
    })
    mockUseDirectS3Upload.mockReturnValue(useDirectS3UploadReturn)

    const useCreateEntityReturn =
      getUseMutationIdleMock<FileEntity>(createdEntity1)
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledWith(initiateUploadArgs)

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

      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledTimes(1)
      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledWith({
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(useUpdateEntityReturn.mutateAsync).not.toHaveBeenCalled()
    })

    expect(hook.current.state).toBe('COMPLETE')
  })

  it('does not permit uploading a file that exceeds the storage limits', async () => {
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
    ]

    setupUploadDestinationMock({
      ...mockSynapseUploadDestination,
      projectStorageLocationUsage: {
        maxAllowedFileBytes: 1,
        sumFileBytes: 0,
        storageLocationId: mockSynapseUploadDestination.storageLocationId,
        isOverLimit: false,
      },
    })

    // sanity check
    expect(file1.size).toBeGreaterThan(1)

    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock()

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock()
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )

    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const useCreateEntityReturn =
      getUseMutationIdleMock<FileEntity>(createdEntity1)
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(mockOnStorageLimitSucceeded).toHaveBeenCalled()
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).not.toHaveBeenCalled()
    expect(
      useSynapseMultipartUploadMockReturn.mutateAsync,
    ).not.toHaveBeenCalled()
    expect(hook.current.state).toBe('WAITING')
  })

  it('uses pending uploads to determine the storage limits', async () => {
    // We will upload file1 first, then try to upload file2, when the combination exceeds the limit
    // `projectStorageLocationUsage.sumFileBytes` will not increase by file1.size immediately after upload
    // because it is eventually consistent.
    const maxAllowedFileBytes = file1.size + file2.size - 1

    setupUploadDestinationMock({
      ...mockSynapseUploadDestination,
      projectStorageLocationUsage: {
        maxAllowedFileBytes: maxAllowedFileBytes,
        sumFileBytes: 0,
        storageLocationId: mockSynapseUploadDestination.storageLocationId,
        isOverLimit: false,
      },
    })

    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
    ]
    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      filesReadyForUpload: [{ file: file1, parentId: 'syn123' }],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

    const useSynapseMultipartUploadMockReturn = getUseMutationIdleMock({
      fileHandleId: createdFileHandleId1,
      fileName: file1.name,
    })
    mockUseSynapseMultipartUpload.mockReturnValue(
      useSynapseMultipartUploadMockReturn,
    )

    mockUseDirectS3Upload.mockReturnValue(getUseMutationIdleMock())

    const useCreateEntityReturn =
      getUseMutationIdleMock<FileEntity>(createdEntity1)
    mockUseCreateEntity.mockReturnValue(useCreateEntityReturn)

    const useUpdateEntityReturn = getUseMutationIdleMock<FileEntity>()
    mockUseUpdateEntity.mockReturnValue(useUpdateEntityReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    await waitFor(() => {
      expect(
        useSynapseMultipartUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)

      expect(useCreateEntityReturn.mutateAsync).toHaveBeenCalledTimes(1)
      expect(hook.current.state).toBe('COMPLETE')
    })

    // Now try to upload file 2
    act(() => {
      hook.current.initiateUpload([{ file: file2, rootContainerId: 'syn123' }])
    })

    await waitFor(() => {
      expect(mockOnStorageLimitSucceeded).toHaveBeenCalled()
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).not.toHaveBeenCalledTimes(2)
    })
  })
})
