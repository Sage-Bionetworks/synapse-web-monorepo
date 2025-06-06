import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockProject from '@/mocks/entity/mockProject'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import {
  useCreateEntity,
  useUpdateEntity,
} from '@/synapse-queries/entity/useEntity'
import { useCreateExternalFileHandle } from '@/synapse-queries/file/useFileHandle'
import { getUseMutationIdleMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ExternalFileHandle } from '@sage-bionetworks/synapse-client'
import { renderHook as _renderHook } from '@testing-library/react'
import {
  getFileNameFromExternalUrl,
  useLinkFileEntityToURL,
} from './useLinkFileEntityToURL'

jest.mock('../../../synapse-queries/entity/useEntity', () => ({
  useCreateEntity: jest.fn(),
  useUpdateEntity: jest.fn(),
}))

jest.mock('../../../synapse-queries/file/useFileHandle', () => ({
  useCreateExternalFileHandle: jest.fn(),
}))

const mockGetEntity = jest.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.entityServicesClient,
  'getRepoV1EntityId',
)

const url = 'sftp://some-url.fake/path/to/file.txt'
const fileName = 'MyFile.svg'

const mockFileHandle: ExternalFileHandle = {
  id: '12345',
  concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
  fileName: fileName,
  externalURL: url,
}

const mockUseCreateEntityReturnValue = getUseMutationIdleMock()
jest.mocked(useCreateEntity).mockReturnValue(mockUseCreateEntityReturnValue)

const mockUseUpdateEntityReturnValue = getUseMutationIdleMock()
jest.mocked(useUpdateEntity).mockReturnValue(mockUseUpdateEntityReturnValue)

const mockUseExternalFileHandleReturnValue =
  getUseMutationIdleMock(mockFileHandle)
jest
  .mocked(useCreateExternalFileHandle)
  .mockReturnValue(mockUseExternalFileHandleReturnValue)

describe('useLinkFileEntityToURL', () => {
  function renderHook() {
    return _renderHook(() => useLinkFileEntityToURL(), {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('create a FileEntity', async () => {
    mockGetEntity.mockResolvedValue(mockProject.entity)

    const { result: hook } = renderHook()

    await hook.current.mutateAsync({
      entityId: mockProject.entity.id,
      url: url,
      name: fileName,
    })

    expect(
      mockUseExternalFileHandleReturnValue.mutateAsync,
    ).toHaveBeenCalledWith({
      externalFileHandleInterface: {
        concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
        fileName: fileName,
        externalURL: url,
      },
    })
    expect(mockUseCreateEntityReturnValue.mutateAsync).toHaveBeenCalledWith({
      concreteType: 'org.sagebionetworks.repo.model.FileEntity',
      dataFileHandleId: mockFileHandle.id!,
      name: fileName,
      parentId: mockProject.entity.id,
    })
  })

  test('update a FileEntity', async () => {
    mockGetEntity.mockResolvedValue(mockFileEntity.entity)

    const { result: hook } = renderHook()

    await hook.current.mutateAsync({
      entityId: mockFileEntity.entity.id!,
      url: url,
      name: fileName,
    })

    expect(
      mockUseExternalFileHandleReturnValue.mutateAsync,
    ).toHaveBeenCalledWith({
      externalFileHandleInterface: {
        concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
        fileName: fileName,
        externalURL: url,
      },
    })
    expect(mockUseUpdateEntityReturnValue.mutateAsync).toHaveBeenCalledWith({
      ...mockFileEntity.entity,
      dataFileHandleId: mockFileHandle.id!,
    })
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
