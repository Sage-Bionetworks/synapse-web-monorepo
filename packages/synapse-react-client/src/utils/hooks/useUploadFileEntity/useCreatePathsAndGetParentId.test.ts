import { mockFolderEntity } from '@/mocks/entity/mockEntity'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY, ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { EntityLookupRequest } from '@sage-bionetworks/synapse-client'
import { renderHook as _renderHook } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { useCreatePathsAndGetParentId } from './useCreatePathsAndGetParentId'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const mockLookupEntity = vi.fn<(request: EntityLookupRequest) => void>()
const mockCreateEntity = vi.fn()

/**
 * Mocks the endpoints used to find existing folders. Every lookup finds a folder, whose ID is determined by the
 * name of the looked-up folder.
 */
function mockExistingFolders(folderIds: Record<string, string>) {
  server.use(
    http.post<never, EntityLookupRequest>(
      `${backendOrigin}${ENTITY}/child`,
      async ({ request }) => {
        const body = await request.json()
        mockLookupEntity(body)
        return HttpResponse.json({ id: folderIds[body.entityName ?? ''] })
      },
    ),
    http.get<{ entityId: string }>(
      `${backendOrigin}${ENTITY_ID(':entityId')}`,
      ({ params }) =>
        HttpResponse.json({ ...mockFolderEntity, id: params.entityId }),
    ),
    http.post(`${backendOrigin}${ENTITY}`, () => {
      mockCreateEntity()
      return HttpResponse.json(mockFolderEntity)
    }),
  )
}

describe('useCreatePathsAndGetParentId', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  function renderHook() {
    return _renderHook(() => useCreatePathsAndGetParentId(), {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('no webkitRelativePath', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: '',
    }

    mockExistingFolders({})

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId: 'syn123',
    })

    expect(result).toEqual({ file, parentId: 'syn123' })
    expect(mockLookupEntity).not.toHaveBeenCalled()
    expect(mockCreateEntity).not.toHaveBeenCalled()
  })

  test('path with one folder', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: 'folder1/file.txt',
    }

    const rootContainerId = 'syn123'
    const folderId = 'syn456'
    mockExistingFolders({ folder1: folderId })

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId: rootContainerId,
    })

    expect(result).toEqual({ file, parentId: folderId })
    expect(mockLookupEntity).toHaveBeenCalledTimes(1)
    expect(mockLookupEntity).toHaveBeenCalledWith({
      parentId: rootContainerId,
      entityName: 'folder1',
    })
  })

  test('path with multiple folders', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: 'folder1/folder2/file.txt',
    }

    const rootContainerId = 'syn123'
    const firstFolderId = 'syn455'
    const finalFolderId = 'syn456'
    mockExistingFolders({ folder1: firstFolderId, folder2: finalFolderId })

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId,
    })

    expect(result).toEqual({ file, parentId: finalFolderId })
    expect(mockLookupEntity).toHaveBeenCalledTimes(2)
    expect(mockLookupEntity).toHaveBeenNthCalledWith(1, {
      parentId: rootContainerId,
      entityName: 'folder1',
    })
    expect(mockLookupEntity).toHaveBeenNthCalledWith(2, {
      parentId: firstFolderId,
      entityName: 'folder2',
    })
  })
})
