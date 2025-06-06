import { getUseMutationIdleMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { renderHook as _renderHook } from '@testing-library/react'
import * as UseCreateFolderPathModule from './useCreateFolderPath'
import { useCreatePathsAndGetParentId } from './useCreatePathsAndGetParentId'

const mockUseCreateFolderPath = jest.spyOn(
  UseCreateFolderPathModule,
  'useCreateFolderPath',
)

describe('useCreatePathsAndGetParentId', () => {
  function renderHook() {
    return _renderHook(() => useCreatePathsAndGetParentId(), {
      wrapper: createWrapper(),
    })
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('no webkitRelativePath', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: '',
    }

    const parentId = 'syn123'
    const mockUseCreateFolderPathResult = getUseMutationIdleMock<
      string,
      Error,
      { parentId: string; path: string[] }
    >(parentId)
    mockUseCreateFolderPath.mockReturnValue(mockUseCreateFolderPathResult)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId: 'syn123',
    })

    expect(result).toEqual({ file, parentId: 'syn123' })
    expect(mockUseCreateFolderPathResult.mutateAsync).not.toHaveBeenCalled()
  })

  test('path with one folder', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: 'folder1/file.txt',
    }

    const rootContainerId = 'syn123'
    const folderId = 'syn456'
    const mockUseCreateFolderPathResult = getUseMutationIdleMock<
      string,
      Error,
      { parentId: string; path: string[] }
    >(folderId)
    mockUseCreateFolderPath.mockReturnValue(mockUseCreateFolderPathResult)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId: rootContainerId,
    })

    expect(result).toEqual({ file, parentId: folderId })
    expect(mockUseCreateFolderPathResult.mutateAsync).toHaveBeenCalledWith({
      rootContainerId,
      path: ['folder1'],
    })
  })

  test('path with multiple folders', async () => {
    const file: File = {
      ...new File([''], 'file.txt'),
      webkitRelativePath: 'folder1/folder2/file.txt',
    }

    const rootContainerId = 'syn123'
    const finalFolderId = 'syn456'
    const mockUseCreateFolderPathResult = getUseMutationIdleMock<
      string,
      Error,
      { parentId: string; path: string[] }
    >(finalFolderId)
    mockUseCreateFolderPath.mockReturnValue(mockUseCreateFolderPathResult)

    const { result: hook } = renderHook()

    const result = await hook.current.mutateAsync({
      file,
      rootContainerId,
    })

    expect(result).toEqual({ file, parentId: finalFolderId })
    expect(mockUseCreateFolderPathResult.mutateAsync).toHaveBeenCalledWith({
      rootContainerId,
      path: ['folder1', 'folder2'],
    })
  })
})
