import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { renderHook as _renderHook } from '@testing-library/react'
import {
  MOCK_FOLDER_ID,
  mockFolderEntity,
} from '../../../mocks/entity/mockEntity'
import mockFileEntity, {
  MOCK_FILE_ENTITY_ID,
} from '../../../mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import SynapseClient from '../../../synapse-client/index'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { useCreateFolderPath } from './useCreateFolderPath'

const lookupEntitySpy = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'postRepoV1EntityChild',
)
const getEntitySpy = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'getRepoV1EntityId',
)
const createEntitySpy = jest.spyOn(SynapseClient, 'createEntity')

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
    lookupEntitySpy.mockResolvedValue({ id: MOCK_FOLDER_ID })
    getEntitySpy.mockResolvedValue(mockFolderEntity)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      parentId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).not.toHaveBeenCalled()
  })

  test('create a new folder', async () => {
    lookupEntitySpy.mockRejectedValue(
      new SynapseClientError(
        404,
        'Not found',
        expect.getState().currentTestName!,
      ),
    )
    createEntitySpy.mockResolvedValue(mockFolderEntity)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      parentId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).not.toHaveBeenCalled()
    expect(createEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).toHaveBeenCalledWith(
      {
        concreteType: 'org.sagebionetworks.repo.model.Folder',
        name: 'folder',
        parentId: 'syn123',
      },
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  test('empty path', async () => {
    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      parentId: 'syn123',
      path: [],
    })

    expect(result).toEqual('syn123')
  })

  test('path with multiple folders', async () => {
    const existingFolderId = 'syn456'
    const createdFolderId = 'syn789'

    lookupEntitySpy.mockImplementation(args => {
      if (args.entityLookupRequest.entityName == 'parentFolder') {
        return Promise.resolve({ id: existingFolderId })
      }
      throw new SynapseClientError(
        404,
        'Not found',
        expect.getState().currentTestName!,
      )
    })
    createEntitySpy.mockResolvedValue({
      ...mockFolderEntity,
      name: 'childFolder',
      id: createdFolderId,
    })

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      parentId: 'syn123',
      path: ['parentFolder', 'childFolder'],
    })

    expect(result).toEqual(createdFolderId)

    expect(lookupEntitySpy).toHaveBeenCalledTimes(2)
    expect(getEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).toHaveBeenCalledWith(
      {
        concreteType: 'org.sagebionetworks.repo.model.Folder',
        name: 'childFolder',
        parentId: existingFolderId,
      },
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  test('existing entity is not a folder', async () => {
    lookupEntitySpy.mockResolvedValue({ id: MOCK_FILE_ENTITY_ID })
    getEntitySpy.mockResolvedValue(mockFileEntity.entity)

    const { result: hook } = renderHook()

    await expect(
      hook.current.mutateAsync({
        parentId: 'syn123',
        path: ['some_name'],
      }),
    ).rejects.toThrow(
      `A(n) File named "some_name" already exists in this location (syn123). A folder could not be created.`,
    )

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).not.toHaveBeenCalled()
  })

  test('createEntity fails', async () => {
    lookupEntitySpy.mockRejectedValue(
      new SynapseClientError(
        404,
        'Not found',
        expect.getState().currentTestName!,
      ),
    )
    createEntitySpy.mockRejectedValue(
      new SynapseClientError(
        403,
        'Forbidden',
        expect.getState().currentTestName!,
      ),
    )

    const { result: hook } = renderHook()
    await expect(
      hook.current.mutateAsync({
        parentId: 'syn123',
        path: ['folder'],
      }),
    ).rejects.toThrow(`Forbidden`)

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).not.toHaveBeenCalled()
    expect(createEntitySpy).toHaveBeenCalledTimes(1)
    expect(createEntitySpy).toHaveBeenCalledWith(
      {
        concreteType: 'org.sagebionetworks.repo.model.Folder',
        name: 'folder',
        parentId: 'syn123',
      },
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })
})
