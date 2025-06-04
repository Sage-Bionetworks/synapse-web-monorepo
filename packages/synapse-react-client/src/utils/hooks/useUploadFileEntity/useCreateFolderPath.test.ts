import { MOCK_FOLDER_ID, mockFolderEntity } from '@/mocks/entity/mockEntity'
import mockFileEntity, {
  MOCK_FILE_ENTITY_ID,
} from '@/mocks/entity/mockFileEntity'
import {
  useCreateEntity,
  useGetEntityLookupQueryOptions,
  useGetEntityQueryOptions,
} from '@/synapse-queries/index'
import { getUseMutationIdleMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { renderHook as _renderHook } from '@testing-library/react'
import { useCreateFolderPath } from './useCreateFolderPath'

jest.mock('../../../synapse-queries/entity/useEntity', () => ({
  useCreateEntity: jest.fn(),
  useGetEntityLookupQueryOptions: jest.fn(),
  useGetEntityQueryOptions: jest.fn(),
}))

const mockGetEntity = jest.fn()
jest.mocked(useGetEntityQueryOptions).mockReturnValue(args => ({
  queryFn: () => mockGetEntity(args),
  queryKey: ['mockGetEntityQueryKey', args],
}))

const mockLookupEntity = jest.fn()
jest.mocked(useGetEntityLookupQueryOptions).mockReturnValue(args => ({
  queryFn: () => mockLookupEntity(args),
  queryKey: ['mockLookupEntityQueryKey', args],
}))

const useCreateEntityMockReturnValue = getUseMutationIdleMock()
jest.mocked(useCreateEntity).mockReturnValue(useCreateEntityMockReturnValue)

describe('useCreateFolderPath', () => {
  function renderHook() {
    return _renderHook(() => useCreateFolderPath(), {
      wrapper: createWrapper(),
    })
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('existing folder', async () => {
    mockLookupEntity.mockResolvedValue(MOCK_FOLDER_ID)
    mockGetEntity.mockResolvedValue(mockFolderEntity)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).not.toHaveBeenCalled()
  })

  test('create a new folder', async () => {
    mockLookupEntity.mockResolvedValue(null)
    useCreateEntityMockReturnValue.mutateAsync.mockResolvedValue(
      mockFolderEntity,
    )

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).not.toHaveBeenCalled()
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.Folder',
      name: 'folder',
      parentId: 'syn123',
    })
  })

  test('empty path', async () => {
    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: [],
    })

    expect(result).toEqual('syn123')
  })

  test('path with multiple folders', async () => {
    const existingFolderId = 'syn456'
    const createdFolderId = 'syn789'

    mockLookupEntity.mockImplementation(args => {
      if (args.entityName == 'parentFolder') {
        return Promise.resolve(existingFolderId)
      }
      return Promise.resolve(null)
    })
    useCreateEntityMockReturnValue.mutateAsync.mockResolvedValue({
      ...mockFolderEntity,
      name: 'childFolder',
      id: createdFolderId,
    })

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['parentFolder', 'childFolder'],
    })

    expect(result).toEqual(createdFolderId)

    expect(mockLookupEntity).toHaveBeenCalledTimes(2)
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.Folder',
      name: 'childFolder',
      parentId: existingFolderId,
    })
  })

  test('existing entity is not a folder', async () => {
    mockLookupEntity.mockResolvedValue(MOCK_FILE_ENTITY_ID)
    mockGetEntity.mockResolvedValue(mockFileEntity.entity)

    const { result: hook } = renderHook()

    await expect(
      hook.current.mutateAsync({
        rootContainerId: 'syn123',
        path: ['some_name'],
      }),
    ).rejects.toThrow(
      `A(n) File named "some_name" already exists in this location (syn123). A folder could not be created.`,
    )

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).not.toHaveBeenCalled()
  })

  test('createEntity fails', async () => {
    mockLookupEntity.mockResolvedValue(null)
    useCreateEntityMockReturnValue.mutateAsync.mockRejectedValue(
      new SynapseClientError(
        403,
        'Forbidden',
        expect.getState().currentTestName!,
      ),
    )

    const { result: hook } = renderHook()
    await expect(
      hook.current.mutateAsync({
        rootContainerId: 'syn123',
        path: ['folder'],
      }),
    ).rejects.toThrow(`Forbidden`)

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).not.toHaveBeenCalled()
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledTimes(1)
    expect(useCreateEntityMockReturnValue.mutateAsync).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.Folder',
      name: 'folder',
      parentId: 'syn123',
    })
  })
})
