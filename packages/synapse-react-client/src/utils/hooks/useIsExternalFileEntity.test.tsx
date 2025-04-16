import { renderHook, waitFor } from '@testing-library/react'
import { useIsExternalFileEntity } from './useIsExternalFileEntity'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import {
  BatchFileResult,
  ExternalFileHandle,
  FileHandle,
  FileResult,
} from '@sage-bionetworks/synapse-types'
import { mockFileHandle } from '@/mocks/mock_file_handle'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'

describe('useIsExternalFileEntity', () => {
  const externalUrl = 'https://some-external-url.net/path-to-file.jpg'
  const mockFileEntity = mockFileEntityData.entity
  const mockExternalFileHandle: ExternalFileHandle = {
    ...mockFileHandle,
    concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
    externalURL: externalUrl,
  }

  const mockInternalFileHandle: FileHandle = {
    ...mockFileHandle,
  }

  const mockExternalFileResult: FileResult = {
    fileHandleId: mockExternalFileHandle.id,
    fileHandle: mockExternalFileHandle,
  }
  const mockExternalBatchFileResult: BatchFileResult = {
    requestedFiles: [mockExternalFileResult],
  }

  const mockInternalFileResult: FileResult = {
    fileHandleId: mockInternalFileHandle.id,
    fileHandle: mockInternalFileHandle,
  }
  const mockInternalBatchFileResult: BatchFileResult = {
    requestedFiles: [mockInternalFileResult],
  }

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue(mockFileEntity)
  })

  it('returns true for an external file entity', async () => {
    jest
      .spyOn(SynapseClient, 'getFiles')
      .mockResolvedValue(mockExternalBatchFileResult)

    const { result } = renderHook(
      () => useIsExternalFileEntity({ entityId: mockFileEntity.id! }),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('returns false for a non-external file entity', async () => {
    jest
      .spyOn(SynapseClient, 'getFiles')
      .mockResolvedValue(mockInternalBatchFileResult)

    const { result } = renderHook(
      () => useIsExternalFileEntity({ entityId: mockFileEntity.id! }),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => {
      expect(result.current).toBe(false)
    })
  })
})
