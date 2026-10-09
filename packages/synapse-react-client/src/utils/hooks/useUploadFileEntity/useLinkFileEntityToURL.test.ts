import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockProject from '@/mocks/entity/mockProject'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY, ENTITY_ID, FILE } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { ExternalFileHandle } from '@sage-bionetworks/synapse-client'
import { Entity } from '@sage-bionetworks/synapse-types'
import { renderHook as _renderHook } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import {
  getFileNameFromExternalUrl,
  useLinkFileEntityToURL,
} from './useLinkFileEntityToURL'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const url = 'sftp://some-url.fake/path/to/file.txt'
const fileName = 'MyFile.svg'

const mockFileHandle: ExternalFileHandle = {
  id: '12345',
  concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
  fileName: fileName,
  externalURL: url,
}

const mockCreateExternalFileHandle = vi.fn<(body: unknown) => void>()
const mockCreateEntity = vi.fn<(body: Entity) => void>()
const mockUpdateEntity = vi.fn<(body: Entity) => void>()

/** Mocks the endpoints used by the hook, where the entity being linked is the given entity */
function mockEndpoints(existingEntity: Entity) {
  server.use(
    http.get(`${backendOrigin}${ENTITY_ID(existingEntity.id!)}`, () =>
      HttpResponse.json(existingEntity),
    ),
    http.post(
      `${backendOrigin}${FILE}/externalFileHandle`,
      async ({ request }) => {
        mockCreateExternalFileHandle(await request.json())
        return HttpResponse.json(mockFileHandle, { status: 201 })
      },
    ),
    http.post<never, Entity>(
      `${backendOrigin}${ENTITY}`,
      async ({ request }) => {
        const body = await request.json()
        mockCreateEntity(body)
        return HttpResponse.json({ ...body, id: 'syn999' })
      },
    ),
    http.put<never, Entity>(
      `${backendOrigin}${ENTITY_ID(existingEntity.id!)}`,
      async ({ request }) => {
        const body = await request.json()
        mockUpdateEntity(body)
        return HttpResponse.json(body)
      },
    ),
  )
}

describe('useLinkFileEntityToURL', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  function renderHook() {
    return _renderHook(() => useLinkFileEntityToURL(), {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('create a FileEntity', async () => {
    mockEndpoints(mockProject.entity)

    const { result: hook } = renderHook()

    await hook.current.mutateAsync({
      entityId: mockProject.entity.id,
      url: url,
      name: fileName,
    })

    expect(mockCreateExternalFileHandle).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
      fileName: fileName,
      externalURL: url,
    })
    expect(mockCreateEntity).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      dataFileHandleId: mockFileHandle.id!,
      name: fileName,
      parentId: mockProject.entity.id,
    })
    expect(mockUpdateEntity).not.toHaveBeenCalled()
  })

  test('update a FileEntity', async () => {
    mockEndpoints(mockFileEntity.entity)

    const { result: hook } = renderHook()

    await hook.current.mutateAsync({
      entityId: mockFileEntity.entity.id!,
      url: url,
      name: fileName,
    })

    expect(mockCreateExternalFileHandle).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
      fileName: fileName,
      externalURL: url,
    })
    expect(mockUpdateEntity).toHaveBeenCalledWith({
      ...mockFileEntity.entity,
      dataFileHandleId: mockFileHandle.id!,
    })
    expect(mockCreateEntity).not.toHaveBeenCalled()
  })

  test('getFileNameFromExternalFile', () => {
    const name = 'filename.txt'
    expect(
      getFileNameFromExternalUrl(
        'http://some.really.long.com/path/to/a/file/' + name,
      ),
    ).toEqual(name)

    expect(
      getFileNameFromExternalUrl(
        'http://some.really.long.com/path/to/a/file/' +
          name +
          '?param1=value&param2=value',
      ),
    ).toEqual(name)
    expect(getFileNameFromExternalUrl('/root/' + name)).toEqual(name)

    expect(getFileNameFromExternalUrl('http://google.com/' + name)).toEqual(
      name,
    )
  })
})
