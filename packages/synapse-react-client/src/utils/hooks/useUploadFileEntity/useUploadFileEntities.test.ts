import { server } from '@/mocks/msw/server'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY, ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  FileEntity,
  UploadDestination,
  UploadType,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import {
  PrepareDirsForUploadReturn,
  usePrepareFileEntityUpload,
} from './usePrepareFileEntityUpload'
import {
  InitiateUploadArgs,
  useUploadFileEntities,
} from './useUploadFileEntities'
import {
  UploadItem,
  useUploadFiles,
  UseUploadFilesReturn,
} from './useUploadFiles'

vi.mock('./useUploadFiles', () => {
  return {
    useUploadFiles: vi.fn(),
  }
})

vi.mock('./usePrepareFileEntityUpload', () => {
  return {
    usePrepareFileEntityUpload: vi.fn(),
  }
})

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const mockUsePrepareFileEntityUpload = vi.mocked(usePrepareFileEntityUpload)
const mockUseUploadFiles = vi.mocked(useUploadFiles)

/** Receives the body of each request made to create a FileEntity */
const mockCreateEntityRequest = vi.fn<(body: FileEntity) => void>()
/** Receives the body of each request made to update a FileEntity */
const mockUpdateEntityRequest = vi.fn<(body: FileEntity) => void>()

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
  server.use(
    http.get(`${backendOrigin}/file/v1/entity/:id/uploadDestination`, () =>
      HttpResponse.json(uploadDestination),
    ),
  )
}

function setupPrepareDirsForUploadMock(
  prepareDirsForUploadReturn?: PrepareDirsForUploadReturn,
) {
  // The hook under test only reads `mutateAsync` and `isPending` from usePrepareFileEntityUpload
  const usePrepareFileEntityUploadMockReturn = {
    mutateAsync: vi.fn().mockResolvedValue(prepareDirsForUploadReturn),
    isPending: false,
  }
  mockUsePrepareFileEntityUpload.mockReturnValue(
    usePrepareFileEntityUploadMockReturn as unknown as ReturnType<
      typeof usePrepareFileEntityUpload
    >,
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

  const mockOnStorageLimitExceeded = vi.fn()

  function renderHook() {
    return _renderHook(
      () =>
        useUploadFileEntities(
          parentId,
          s3DirectAccessKey,
          s3DirectSecretKey,
          mockOnStorageLimitExceeded,
        ),
      {
        wrapper: createWrapper(),
      },
    )
  }

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
    server.use(
      http.get<{ entityId: string }>(
        `${backendOrigin}${ENTITY_ID(':entityId')}`,
        ({ params }) => {
          const entity = [createdEntity1, createdEntity2].find(
            e => e.id === params.entityId,
          )
          return entity
            ? HttpResponse.json(entity)
            : HttpResponse.json(
                {
                  concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
                  reason: `No mock entity with ID ${params.entityId}`,
                },
                { status: 404 },
              )
        },
      ),
      http.post<never, FileEntity>(
        `${backendOrigin}${ENTITY}`,
        async ({ request }) => {
          const body = await request.json()
          mockCreateEntityRequest(body)
          return HttpResponse.json({ ...body, id: uniqueId('syn') })
        },
      ),
      http.put<{ entityId: string }, FileEntity>(
        `${backendOrigin}${ENTITY_ID(':entityId')}`,
        async ({ request }) => {
          const body = await request.json()
          mockUpdateEntityRequest(body)
          return HttpResponse.json(body)
        },
      ),
    )
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
    const useUploadFilesMockReturn = {
      startUpload: vi.fn(),
      activeUploadCount: 0,
      uploadProgress: [],
      state: 'WAITING',
      bytesPendingUpload: 0,
    } satisfies UseUploadFilesReturn

    mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

    const { result: hook, rerender } = renderHook()

    let useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()

      // Verify correct args are passed
      useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
      expect(useUploadFilesArgs.uploadDestination).toEqual(
        mockSynapseUploadDestination,
      )
      expect(useUploadFilesArgs.accessKey).toBe(s3DirectAccessKey)
      expect(useUploadFilesArgs.secretKey).toBe(s3DirectSecretKey)
      expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
      expect(useUploadFilesArgs.onBeforeUpload).toBeDefined()
    })

    // Call under test: initiateUpload triggers calling prepareFileEntityUpload and startUpload
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
      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith({
        file: file1,
        parentId: parentId,
      })
    })

    // Call under test - simulate upload completion and verify entity is created
    useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
    act(() => {
      expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
      useUploadFilesArgs.onUploadComplete!(
        { file: file1, parentId: parentId },
        createdFileHandleId1,
      )
    })

    await waitFor(() => {
      expect(mockCreateEntityRequest).toHaveBeenCalledTimes(1)
      expect(mockCreateEntityRequest).toHaveBeenCalledWith({
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(mockUpdateEntityRequest).not.toHaveBeenCalled()
    })

    // Call under test - verify state and uploadProgress are updated and returned
    const uploadProgress: UploadItem[] = [
      {
        file: file1,
        progress: { value: 100, total: 100 },
        status: 'COMPLETE',
        cancel: vi.fn(),
        pause: vi.fn(),
        resume: vi.fn(),
        remove: vi.fn(),
      },
      {
        file: file2,
        progress: { value: 100, total: 100 },
        status: 'COMPLETE',
        cancel: vi.fn(),
        pause: vi.fn(),
        resume: vi.fn(),
        remove: vi.fn(),
      },
    ]
    act(() => {
      mockUseUploadFiles.mockReturnValue({
        ...useUploadFilesMockReturn,
        state: 'COMPLETE',
        uploadProgress,
      })
    })
    rerender()
    expect(hook.current.state).toBe('COMPLETE')
    expect(hook.current.uploadProgress).toEqual(uploadProgress)
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

    const useUploadFilesMockReturn = {
      startUpload: vi.fn(),
      activeUploadCount: 0,
      uploadProgress: [],
      state: 'WAITING',
      bytesPendingUpload: 0,
    } satisfies UseUploadFilesReturn
    mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    // call under test - initiate upload of multiple files
    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    await waitFor(() => {
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledTimes(1)
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).toHaveBeenCalledWith(initiateUploadArgs)

      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith(
        {
          file: file1,
          parentId,
        },
        {
          file: file2,
          parentId,
        },
      )
    })

    // Call under test - simulate upload completion and verify entities are created
    const useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
    act(() => {
      expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
      useUploadFilesArgs.onUploadComplete!(
        { file: file1, parentId: parentId },
        createdFileHandleId1,
      )
      useUploadFilesArgs.onUploadComplete!(
        { file: file2, parentId: parentId },
        createdFileHandleId2,
      )
    })

    await waitFor(() => {
      expect(mockCreateEntityRequest).toHaveBeenCalledTimes(2)
      expect(mockCreateEntityRequest).toHaveBeenCalledWith({
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(mockCreateEntityRequest).toHaveBeenCalledWith({
        parentId,
        name: file2.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId2,
      })

      expect(mockUpdateEntityRequest).not.toHaveBeenCalled()
    })
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

    const useUploadFilesMockReturn = {
      startUpload: vi.fn(),
      activeUploadCount: 0,
      uploadProgress: [],
      state: 'WAITING',
      bytesPendingUpload: 0,
    } satisfies UseUploadFilesReturn
    mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    // Call under test - initiate an upload of a new version of an existing entity
    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).toHaveBeenCalledWith(initiateUploadArgs)

    // Call under test - simulate upload completion and verify entity is updated
    const useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
    act(() => {
      expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
      useUploadFilesArgs.onUploadComplete!(
        { file: file1, existingEntityId: createdEntity1.id! },
        createdFileHandleId1,
      )
    })
    await waitFor(() => {
      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
      expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith({
        file: file1,
        existingEntityId: createdEntity1.id!,
      })

      expect(mockUpdateEntityRequest).toHaveBeenCalledTimes(1)
      expect(mockUpdateEntityRequest).toHaveBeenCalledWith({
        id: createdEntity1.id,
        parentId,
        name: file1.name,
        concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        dataFileHandleId: createdFileHandleId1,
      })
      expect(mockCreateEntityRequest).not.toHaveBeenCalled()
    })
  })

  describe('prompt user to create new FileEntity version', () => {
    test('confirm new version', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      setupUploadDestinationMock(mockSynapseUploadDestination)

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        setupPrepareDirsForUploadMock(prepareDirsForUploadReturn)

      const useUploadFilesMockReturn = {
        startUpload: vi.fn(),
        activeUploadCount: 0,
        uploadProgress: [],
        state: 'WAITING',
        bytesPendingUpload: 0,
      } satisfies UseUploadFilesReturn
      mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      // Call under test - initiate an upload that will trigger prompting the user
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

      // Call under test - confirm 1/2 prompts and verify the other remains
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
        expect(useUploadFilesMockReturn.startUpload).not.toHaveBeenCalled()
      })

      // Call under test: confirm the final prompt and verify the upload starts
      act(() => {
        hook.current.activePrompts[0].onConfirm()
      })

      await waitFor(() => {
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith(
          {
            file: file1,
            parentId,
            existingEntityId: createdEntity1.id!,
          },
          {
            file: file2,
            parentId,
            existingEntityId: createdEntity2.id!,
          },
        )
      })

      // Call under test: simulate upload completion and verify entities are updated
      const useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
      act(() => {
        expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
        useUploadFilesArgs.onUploadComplete!(
          {
            file: file1,
            parentId,
            existingEntityId: createdEntity1.id!,
          },
          createdFileHandleId1,
        )
        useUploadFilesArgs.onUploadComplete!(
          {
            file: file2,
            parentId,
            existingEntityId: createdEntity2.id!,
          },
          createdFileHandleId2,
        )
      })
      await waitFor(() => {
        expect(mockUpdateEntityRequest).toHaveBeenCalledTimes(2)
        expect(mockUpdateEntityRequest).toHaveBeenCalledWith(createdEntity1)
        expect(mockUpdateEntityRequest).toHaveBeenCalledWith(createdEntity2)
        expect(mockCreateEntityRequest).not.toHaveBeenCalled()
      })
    })

    test('confirm all versions', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      setupUploadDestinationMock(mockSynapseUploadDestination)

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        setupPrepareDirsForUploadMock(prepareDirsForUploadReturn)

      const useUploadFilesMockReturn = {
        startUpload: vi.fn(),
        activeUploadCount: 0,
        uploadProgress: [],
        state: 'WAITING',
        bytesPendingUpload: 0,
      } satisfies UseUploadFilesReturn
      mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      // Call under test - initiate an upload that will trigger prompting the user
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

      // Call under test - confirm all prompts in one action and verify the upload starts
      act(() => {
        hook.current.activePrompts[0].onConfirmAll()
      })
      await waitFor(() => {
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith(
          {
            file: file1,
            parentId,
            existingEntityId: createdEntity1.id!,
          },
          {
            file: file2,
            parentId,
            existingEntityId: createdEntity2.id!,
          },
        )
      })

      // Call under test: simulate upload completion and verify entities are updated
      const useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
      act(() => {
        expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
        useUploadFilesArgs.onUploadComplete!(
          {
            file: file1,
            parentId,
            existingEntityId: createdEntity1.id!,
          },
          createdFileHandleId1,
        )
        useUploadFilesArgs.onUploadComplete!(
          {
            file: file2,
            parentId,
            existingEntityId: createdEntity2.id!,
          },
          createdFileHandleId2,
        )
      })
      await waitFor(() => {
        expect(mockUpdateEntityRequest).toHaveBeenCalledTimes(2)
        expect(mockUpdateEntityRequest).toHaveBeenCalledWith(createdEntity1)
        expect(mockUpdateEntityRequest).toHaveBeenCalledWith(createdEntity2)
        expect(mockCreateEntityRequest).not.toHaveBeenCalled()
      })
    })

    test('skip new version', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      setupUploadDestinationMock(mockSynapseUploadDestination)

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        setupPrepareDirsForUploadMock(prepareDirsForUploadReturn)

      const useUploadFilesMockReturn = {
        startUpload: vi.fn(),
        activeUploadCount: 0,
        uploadProgress: [],
        state: 'WAITING',
        bytesPendingUpload: 0,
      } satisfies UseUploadFilesReturn
      mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      // Call under test - initiate an upload that will trigger prompting the user
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

      // Call under test - skip 1/2 prompts and verify the other remains
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
        expect(useUploadFilesMockReturn.startUpload).not.toHaveBeenCalled()
      })

      // Call under test - confirm the final prompt and verify that only file 2 is uploaded since file 1 was skipped
      act(() => {
        hook.current.activePrompts[0].onConfirm()
      })

      await waitFor(() => {
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledTimes(1)
        expect(useUploadFilesMockReturn.startUpload).toHaveBeenCalledWith({
          file: file2,
          parentId: 'syn123',
          existingEntityId: 'syn457',
        })
      })

      // Call under test - simulate upload completion and verify entity 2 is updated, entity 1 is not
      const useUploadFilesArgs = mockUseUploadFiles.mock.lastCall![0]!
      act(() => {
        expect(useUploadFilesArgs.onUploadComplete).toBeDefined()
        useUploadFilesArgs.onUploadComplete!(
          {
            file: file2,
            parentId: 'syn123',
            existingEntityId: 'syn457',
          },
          createdFileHandleId2,
        )
      })
      await waitFor(() => {
        expect(mockUpdateEntityRequest).toHaveBeenCalledTimes(1)
        expect(mockUpdateEntityRequest).toHaveBeenCalledWith(createdEntity2)
        expect(mockCreateEntityRequest).not.toHaveBeenCalled()
      })
    })

    test('cancel all uploads', async () => {
      const initiateUploadArgs: InitiateUploadArgs = [
        { file: file1, rootContainerId: 'syn123' },
        { file: file2, rootContainerId: 'syn123' },
      ]

      setupUploadDestinationMock(mockSynapseUploadDestination)

      const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
        filesReadyForUpload: [],
        filesToPromptForNewVersion: [
          { file: file1, parentId: 'syn123', existingEntityId: 'syn456' },
          { file: file2, parentId: 'syn123', existingEntityId: 'syn457' },
        ],
      }
      const usePrepareFileEntityUploadMockReturn =
        setupPrepareDirsForUploadMock(prepareDirsForUploadReturn)

      const useUploadFilesMockReturn = {
        startUpload: vi.fn(),
        activeUploadCount: 0,
        uploadProgress: [],
        state: 'WAITING',
        bytesPendingUpload: 0,
      } satisfies UseUploadFilesReturn
      mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

      const { result: hook } = renderHook()

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.initiateUpload).toBeDefined()
      })

      // Call under test - initiate an upload that will trigger prompting the user
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

      // Call under test - cancel all uploads, verify no upload is started.
      act(() => {
        hook.current.activePrompts[0].onCancelAll()
      })

      await waitFor(() => {
        expect(hook.current.state).toBe('WAITING')
        expect(hook.current.activePrompts.length).toBe(0)
        expect(hook.current.uploadProgress.length).toBe(0)
      })

      expect(useUploadFilesMockReturn.startUpload).not.toHaveBeenCalled()
      expect(mockUpdateEntityRequest).not.toHaveBeenCalled()
      expect(mockCreateEntityRequest).not.toHaveBeenCalled()
    })
  })

  it('does not permit uploading a file that exceeds the storage limits', async () => {
    const storageLimitInBytes = 1 // 1 byte
    const initiateUploadArgs: InitiateUploadArgs = [
      { file: file1, rootContainerId: 'syn123' },
    ]

    setupUploadDestinationMock({
      ...mockSynapseUploadDestination,
      projectStorageLocationUsage: {
        maxAllowedFileBytes: storageLimitInBytes,
        sumFileBytes: 0,
        storageLocationId: mockSynapseUploadDestination.storageLocationId,
        isOverLimit: false,
      },
    })

    // sanity check
    expect(file1.size).toBeGreaterThan(storageLimitInBytes)

    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock()

    const useUploadFilesMockReturn = {
      startUpload: vi.fn(),
      activeUploadCount: 0,
      uploadProgress: [],
      state: 'WAITING',
      bytesPendingUpload: 0,
    } satisfies UseUploadFilesReturn
    mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('WAITING')
      expect(hook.current.activePrompts.length).toBe(0)
      expect(hook.current.initiateUpload).toBeDefined()
    })

    // Call under test - start an upload that would exceed the storage limit
    act(() => {
      hook.current.initiateUpload(initiateUploadArgs)
    })

    expect(mockOnStorageLimitExceeded).toHaveBeenCalled()
    expect(
      usePrepareFileEntityUploadMockReturn.mutateAsync,
    ).not.toHaveBeenCalled()
    expect(useUploadFilesMockReturn.startUpload).not.toHaveBeenCalled()
    expect(hook.current.state).toBe('WAITING')
  })

  it('uses pending uploads to determine the storage limits', async () => {
    // We will upload file1 first, then try to upload file2; the combination of file1 + file2 exceeds the limit.
    // We combine all pending/recent uploads because  `projectStorageLocationUsage.sumFileBytes` does not increase to
    // count file1 immediately after upload, because the computed `sumFileBytes` is eventually consistent.
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

    const prepareDirsForUploadReturn: PrepareDirsForUploadReturn = {
      filesReadyForUpload: [{ file: file1, parentId: 'syn123' }],
      filesToPromptForNewVersion: [],
    }
    const usePrepareFileEntityUploadMockReturn = setupPrepareDirsForUploadMock(
      prepareDirsForUploadReturn,
    )

    // Setup the current state to indicate that we are actively uploading file1.
    const useUploadFilesMockReturn = {
      startUpload: vi.fn(),
      activeUploadCount: 1,
      uploadProgress: [
        {
          file: file1,
          progress: { value: 50, total: 100 },
          status: 'UPLOADING',
          cancel: vi.fn(),
          pause: vi.fn(),
          resume: vi.fn(),
          remove: vi.fn(),
        },
      ],
      state: 'UPLOADING',
      bytesPendingUpload: file1.size,
    } satisfies UseUploadFilesReturn
    mockUseUploadFiles.mockReturnValue(useUploadFilesMockReturn)

    const { result: hook } = renderHook()

    await waitFor(() => {
      expect(hook.current.state).toBe('UPLOADING')
      expect(hook.current.initiateUpload).toBeDefined()
    })

    // Call under test - try to upload file 2 even though it would exceed the storage limit
    act(() => {
      hook.current.initiateUpload([{ file: file2, rootContainerId: 'syn123' }])
    })

    await waitFor(() => {
      expect(mockOnStorageLimitExceeded).toHaveBeenCalled()
      expect(
        usePrepareFileEntityUploadMockReturn.mutateAsync,
      ).not.toHaveBeenCalledTimes(2)
    })
  })
})
