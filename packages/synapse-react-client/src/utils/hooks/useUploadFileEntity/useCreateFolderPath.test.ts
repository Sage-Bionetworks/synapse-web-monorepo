import { MOCK_FOLDER_ID, mockFolderEntity } from '@/mocks/entity/mockEntity'
import mockFileEntity, {
  MOCK_FILE_ENTITY_ID,
} from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY, ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { EntityLookupRequest } from '@sage-bionetworks/synapse-client'
import { Entity } from '@sage-bionetworks/synapse-types'
import { renderHook as _renderHook } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useCreateFolderPath } from './useCreateFolderPath'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const mockLookupEntity = vi.fn<(request: EntityLookupRequest) => void>()
const mockGetEntity = vi.fn<(entityId: string) => void>()
const mockCreateEntity = vi.fn<(body: Entity) => void>()

/**
 * Handler for POST /entity/child. Resolves the entity ID for a lookup request, or responds with a 404 if the
 * function returns null.
 */
function mockLookupHandler(
  getId: (request: EntityLookupRequest) => string | null,
) {
  server.use(
    http.post<never, EntityLookupRequest>(
      `${backendOrigin}${ENTITY}/child`,
      async ({ request }) => {
        const body = await request.json()
        mockLookupEntity(body)
        const id = getId(body)
        if (id === null) {
          return HttpResponse.json(
            {
              concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
              reason: 'Not found',
            },
            { status: 404 },
          )
        }
        return HttpResponse.json({ id })
      },
    ),
  )
}

function mockGetEntityHandler(getEntity: (entityId: string) => Entity) {
  server.use(
    http.get<{ entityId: string }>(
      `${backendOrigin}${ENTITY_ID(':entityId')}`,
      ({ params }) => {
        mockGetEntity(params.entityId)
        return HttpResponse.json(getEntity(params.entityId))
      },
    ),
  )
}

function mockCreateEntityHandler(respond: (body: Entity) => Response) {
  server.use(
    http.post<never, Entity>(
      `${backendOrigin}${ENTITY}`,
      async ({ request }) => {
        const body = await request.json()
        mockCreateEntity(body)
        return respond(body)
      },
    ),
  )
}

describe('useCreateFolderPath', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  function renderHook() {
    return _renderHook(() => useCreateFolderPath(), {
      wrapper: createWrapper(),
    })
  }
  beforeEach(() => {
    vi.clearAllMocks()
  })
  test('existing folder', async () => {
    mockLookupHandler(() => MOCK_FOLDER_ID)
    mockGetEntityHandler(() => mockFolderEntity)
    mockCreateEntityHandler(() => HttpResponse.json(mockFolderEntity))

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockLookupEntity).toHaveBeenCalledWith({
      parentId: 'syn123',
      entityName: 'folder',
    })
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).toHaveBeenCalledWith(MOCK_FOLDER_ID)
    expect(mockCreateEntity).not.toHaveBeenCalled()
  })

  test('create a new folder', async () => {
    mockLookupHandler(() => null)
    mockGetEntityHandler(() => mockFolderEntity)
    mockCreateEntityHandler(() => HttpResponse.json(mockFolderEntity))

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['folder'],
    })

    expect(result).toEqual(MOCK_FOLDER_ID)

    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).not.toHaveBeenCalled()
    expect(mockCreateEntity).toHaveBeenCalledTimes(1)
    expect(mockCreateEntity).toHaveBeenCalledWith({
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
    expect(mockLookupEntity).not.toHaveBeenCalled()
    expect(mockGetEntity).not.toHaveBeenCalled()
    expect(mockCreateEntity).not.toHaveBeenCalled()
  })

  test('path with multiple folders', async () => {
    const existingFolderId = 'syn456'
    const createdFolderId = 'syn789'

    mockLookupHandler(request =>
      request.entityName == 'parentFolder' ? existingFolderId : null,
    )
    mockGetEntityHandler(entityId => ({ ...mockFolderEntity, id: entityId }))
    mockCreateEntityHandler(body =>
      HttpResponse.json({
        ...mockFolderEntity,
        ...body,
        name: 'childFolder',
        id: createdFolderId,
      }),
    )

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      rootContainerId: 'syn123',
      path: ['parentFolder', 'childFolder'],
    })

    expect(result).toEqual(createdFolderId)

    expect(mockLookupEntity).toHaveBeenCalledTimes(2)
    expect(mockLookupEntity).toHaveBeenNthCalledWith(1, {
      parentId: 'syn123',
      entityName: 'parentFolder',
    })
    expect(mockLookupEntity).toHaveBeenNthCalledWith(2, {
      parentId: existingFolderId,
      entityName: 'childFolder',
    })
    expect(mockGetEntity).toHaveBeenCalledTimes(1)
    expect(mockGetEntity).toHaveBeenCalledWith(existingFolderId)
    expect(mockCreateEntity).toHaveBeenCalledTimes(1)
    expect(mockCreateEntity).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.Folder',
      name: 'childFolder',
      parentId: existingFolderId,
    })
  })

  test('existing entity is not a folder', async () => {
    mockLookupHandler(() => MOCK_FILE_ENTITY_ID)
    mockGetEntityHandler(() => mockFileEntity.entity)
    mockCreateEntityHandler(() => HttpResponse.json(mockFolderEntity))

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
    expect(mockCreateEntity).not.toHaveBeenCalled()
  })

  test('createEntity fails', async () => {
    mockLookupHandler(() => null)
    mockGetEntityHandler(() => mockFolderEntity)
    mockCreateEntityHandler(() =>
      HttpResponse.json(
        {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: 'Forbidden',
        },
        { status: 403 },
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
    expect(mockCreateEntity).toHaveBeenCalledTimes(1)
    expect(mockCreateEntity).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.Folder',
      name: 'folder',
      parentId: 'syn123',
    })
  })
})
