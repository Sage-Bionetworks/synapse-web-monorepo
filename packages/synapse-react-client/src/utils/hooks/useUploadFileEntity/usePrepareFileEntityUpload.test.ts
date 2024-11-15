import { renderHook as _renderHook } from '@testing-library/react'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import { getUseMutationMock } from '../../../testutils/ReactQueryMockUtils'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import * as GetFileEntityIdWithSameNameModule from './getFileEntityIdWithSameName'
import * as UseCreatePathsAndGetParentIdModule from './useCreatePathsAndGetParentId'

import {
  PrepareFileEntityUploadArgs,
  usePrepareFileEntityUpload,
} from './usePrepareFileEntityUpload'

const mockUseCreatePathsAndGetParentId = jest.spyOn(
  UseCreatePathsAndGetParentIdModule,
  'useCreatePathsAndGetParentId',
)
const mockGetFileEntityIdWithSameName = jest.spyOn(
  GetFileEntityIdWithSameNameModule,
  'getFileEntityIdWithSameName',
)

describe('usePrepareFileEntityUpload', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  function renderHook() {
    return _renderHook(() => usePrepareFileEntityUpload(), {
      wrapper: createWrapper(),
    })
  }
  const newFile = new File([''], 'newFile.txt')
  const updatedFile = new File([''], 'existingFile.txt')
  const rootContainerId = 'syn123'
  const updatedEntityId = 'syn456'
  const args: PrepareFileEntityUploadArgs = [
    { file: newFile, rootContainerId: rootContainerId },
    { file: updatedFile, rootContainerId: rootContainerId },
  ]

  test('prepares a new file entity for upload and an existing file entity for update', async () => {
    const useCreatePathsAndGetParentIdMockResult = getUseMutationMock(null)
    useCreatePathsAndGetParentIdMockResult.mutateAsync.mockImplementation(
      ({ file }) => ({ file, parentId: rootContainerId }),
    )
    mockUseCreatePathsAndGetParentId.mockReturnValue(
      useCreatePathsAndGetParentIdMockResult,
    )

    mockGetFileEntityIdWithSameName.mockImplementation(fileName => {
      if (fileName === 'newFile.txt') {
        return Promise.resolve(null)
      } else return Promise.resolve(updatedEntityId)
    })

    const { result: hook } = renderHook()
    const result = await hook.current.mutateAsync(args)

    expect(result).toMatchObject({
      filesReadyForUpload: [
        { file: expect.any(File), parentId: rootContainerId },
      ],
      filesToPromptForNewVersion: [
        {
          file: expect.any(File),
          existingEntityId: updatedEntityId,
        },
      ],
    })

    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenCalledTimes(2)
    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenNthCalledWith(1, {
      file: newFile,
      rootContainerId: rootContainerId,
    })
    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenNthCalledWith(2, {
      file: updatedFile,
      rootContainerId: rootContainerId,
    })

    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledTimes(2)
    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledWith(
      'newFile.txt',
      rootContainerId,
      MOCK_CONTEXT_VALUE.synapseClient,
      'The file could not be uploaded.',
    )
    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledWith(
      'existingFile.txt',
      rootContainerId,
      MOCK_CONTEXT_VALUE.synapseClient,
      'The file could not be uploaded.',
    )
  })

  test('directly update FileEntity', async () => {
    const useCreatePathsAndGetParentIdMockResult = getUseMutationMock(null)
    mockUseCreatePathsAndGetParentId.mockReturnValue(
      useCreatePathsAndGetParentIdMockResult,
    )

    const { result: hook } = renderHook()
    const result = await hook.current.mutateAsync([
      { file: updatedFile, existingEntityId: updatedEntityId },
    ])

    expect(result).toMatchObject({
      filesReadyForUpload: [
        { file: expect.any(File), existingEntityId: updatedEntityId },
      ],
      filesToPromptForNewVersion: [],
    })

    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).not.toHaveBeenCalled()

    expect(mockGetFileEntityIdWithSameName).not.toHaveBeenCalled()
  })

  test('creating directory fails', async () => {
    const useCreatePathsAndGetParentIdMockResult = getUseMutationMock(null)
    useCreatePathsAndGetParentIdMockResult.mutateAsync.mockRejectedValue(
      new Error('Failed to create directory'),
    )
    mockUseCreatePathsAndGetParentId.mockReturnValue(
      useCreatePathsAndGetParentIdMockResult,
    )

    const { result: hook } = renderHook()
    await expect(hook.current.mutateAsync(args)).rejects.toThrow(
      `Unable to create target folder structure for file newFile.txt: Failed to create directory`,
    )

    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenCalledTimes(1)
    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenCalledWith({ file: newFile, rootContainerId: rootContainerId })

    expect(mockGetFileEntityIdWithSameName).not.toHaveBeenCalled()
  })

  test('file lookup fails', async () => {
    const useCreatePathsAndGetParentIdMockResult = getUseMutationMock(null)
    useCreatePathsAndGetParentIdMockResult.mutateAsync.mockImplementation(
      ({ file }) => ({ file, parentId: rootContainerId }),
    )
    mockUseCreatePathsAndGetParentId.mockReturnValue(
      useCreatePathsAndGetParentIdMockResult,
    )

    mockGetFileEntityIdWithSameName.mockImplementation(fileName =>
      Promise.reject(new Error(`Failed to lookup entity ${fileName}`)),
    )

    const { result: hook } = renderHook()

    await expect(hook.current.mutateAsync(args)).rejects.toThrow(
      `Files could not be uploaded:\n\tFailed to lookup entity newFile.txt\n\tFailed to lookup entity existingFile.txt`,
    )

    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenCalledTimes(2)
    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenNthCalledWith(1, {
      file: newFile,
      rootContainerId: rootContainerId,
    })
    expect(
      useCreatePathsAndGetParentIdMockResult.mutateAsync,
    ).toHaveBeenNthCalledWith(2, {
      file: updatedFile,
      rootContainerId: rootContainerId,
    })

    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledTimes(2)
    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledWith(
      'newFile.txt',
      rootContainerId,
      MOCK_CONTEXT_VALUE.synapseClient,
      'The file could not be uploaded.',
    )
    expect(mockGetFileEntityIdWithSameName).toHaveBeenCalledWith(
      'existingFile.txt',
      rootContainerId,
      MOCK_CONTEXT_VALUE.synapseClient,
      'The file could not be uploaded.',
    )
  })
})
