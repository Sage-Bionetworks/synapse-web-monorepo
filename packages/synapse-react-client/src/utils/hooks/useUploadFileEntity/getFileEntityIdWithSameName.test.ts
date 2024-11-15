import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  MOCK_FOLDER_ID,
  mockFolderEntity,
} from '../../../mocks/entity/mockEntity'
import mockFileEntity, {
  MOCK_FILE_ENTITY_ID,
} from '../../../mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import { getFileEntityIdWithSameName } from './getFileEntityIdWithSameName'

const lookupEntitySpy = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'postRepoV1EntityChild',
)
const getEntitySpy = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'getRepoV1EntityId',
)

describe('getFileEntityIdWithSameName', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Entity does not exist', async () => {
    const name = 'file.txt'
    const parentId = 'syn123'

    lookupEntitySpy.mockRejectedValue(
      new SynapseClientError(
        404,
        'Not found',
        expect.getState().currentTestName!,
      ),
    )

    const result = await getFileEntityIdWithSameName(
      name,
      parentId,
      MOCK_CONTEXT_VALUE.synapseClient,
    )

    expect(result).toBeNull()

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(lookupEntitySpy).toHaveBeenCalledWith({
      entityLookupRequest: { parentId, entityName: name },
    })

    expect(getEntitySpy).not.toHaveBeenCalled()
  })

  test('Entity exists', async () => {
    const name = 'file.txt'
    const parentId = 'syn123'

    lookupEntitySpy.mockResolvedValue({ id: MOCK_FILE_ENTITY_ID })
    getEntitySpy.mockResolvedValue(mockFileEntity.entity)

    const result = await getFileEntityIdWithSameName(
      name,
      parentId,
      MOCK_CONTEXT_VALUE.synapseClient,
    )

    expect(result).toBe(MOCK_FILE_ENTITY_ID)

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(lookupEntitySpy).toHaveBeenCalledWith({
      entityLookupRequest: { parentId, entityName: name },
    })

    expect(getEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).toHaveBeenCalledWith({ id: MOCK_FILE_ENTITY_ID })
  })

  test('Entity exists but is not a file', async () => {
    const name = 'file.txt'
    const parentId = 'syn123'

    lookupEntitySpy.mockResolvedValue({ id: MOCK_FOLDER_ID })
    getEntitySpy.mockResolvedValue(mockFolderEntity)

    await expect(
      getFileEntityIdWithSameName(
        name,
        parentId,
        MOCK_CONTEXT_VALUE.synapseClient,
        'This is additional context for the error message.',
      ),
    ).rejects.toThrow(
      `A(n) Folder named "file.txt" already exists in this location (syn123). This is additional context for the error message.`,
    )

    expect(lookupEntitySpy).toHaveBeenCalledTimes(1)
    expect(lookupEntitySpy).toHaveBeenCalledWith({
      entityLookupRequest: { parentId, entityName: name },
    })

    expect(getEntitySpy).toHaveBeenCalledTimes(1)
    expect(getEntitySpy).toHaveBeenCalledWith({ id: MOCK_FOLDER_ID })
  })
})
