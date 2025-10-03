import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, renderHook as _renderHook } from '@testing-library/react'
import { useTrackFileUploads } from './useTrackFileUploads'

const fileHandleId = '123'
describe('useTrackFileUploads', () => {
  function renderHook() {
    return _renderHook(() => useTrackFileUploads(), {
      wrapper: createWrapper(),
    })
  }
  test('trackNewFiles', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'PREPARING',
    })
    expect(
      hook.current.trackedUploadProgress.get(file)?.abortController.signal
        .aborted,
    ).toBe(false)
  })

  test('trackNewFiles cancels an ongoing upload', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })
    })

    const originalAbortController =
      hook.current.trackedUploadProgress.get(file)?.abortController

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn456',
      })
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn456' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'PREPARING',
    })
    expect(originalAbortController?.signal.aborted).toBe(true)
  })

  test('setProgress', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })

      hook.current.setProgress(file, { value: 10, total: 20 })
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 10, total: 20 },
      status: 'PREPARING',
    })
  })

  test('setIsUploading', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })

      hook.current.setIsUploading(file)
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'UPLOADING',
    })
  })
  test('setComplete', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })

      hook.current.setComplete(file, fileHandleId)
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'COMPLETE',
    })
  })
  test('setFailed', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })

      hook.current.setFailed(file, 'some reason')
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'FAILED',
      failureReason: 'some reason',
    })
  })

  test('cancelUpload', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })
    })

    act(() => {
      hook.current.cancelUpload(file)
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'CANCELED_BY_USER',
    })
    expect(
      hook.current.trackedUploadProgress.get(file)?.abortController.signal
        .aborted,
    ).toBe(true)
  })

  test('pauseUpload', () => {
    const file = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles({
        file: file,
        parentId: 'syn123',
      })
    })

    act(() => {
      hook.current.pauseUpload(file)
    })

    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'PAUSED',
    })
    expect(
      hook.current.trackedUploadProgress.get(file)?.abortController.signal
        .aborted,
    ).toBe(true)
  })
  test('removeUpload', () => {
    const consoleWarnSpy = vi
      .spyOn(console, 'warn')
      .mockImplementation(() => {})

    const file1 = new File([''], 'file.txt')
    const file2 = new File([''], 'file.txt')
    const file3 = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles(
        {
          file: file1,
          parentId: 'syn123',
        },
        {
          file: file2,
          parentId: 'syn123',
        },
        {
          file: file3,
          parentId: 'syn123',
        },
      )

      hook.current.cancelUpload(file1)
      hook.current.setFailed(file2, 'some reason')

      // Removal should only work for files that are cancelled or failed
      hook.current.removeUpload(file1)
      hook.current.removeUpload(file2)
      hook.current.removeUpload(file3)
    })

    // File 3 remains uncancelled
    expect(hook.current.trackedUploadProgress.size).toBe(1)
    expect(hook.current.trackedUploadProgress.get(file3)).toMatchObject({
      filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
      abortController: expect.any(AbortController),
      progress: { value: 0, total: 1 },
      status: 'PREPARING',
    })
    expect(
      hook.current.trackedUploadProgress.get(file3)?.abortController.signal
        .aborted,
    ).toBe(false)
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      `Attempted to remove tracked upload progress before it was canceled.`,
      {
        filePreparedForUpload: { file: expect.any(File), parentId: 'syn123' },
        abortController: expect.any(AbortController),
        progress: { value: 0, total: 1 },
        status: 'PREPARING',
      },
    )
  })

  test('isUploading, activeUploadCount, bytesPendingUpload', () => {
    const preparingFile = new File(['.'], 'file.txt')
    const uploadingFile = new File(['.'], 'file.txt')
    const pausedFile = new File(['.'], 'file.txt')
    const canceledFile = new File(['.'], 'file.txt')
    const failedFile = new File(['.'], 'file.txt')
    const completedFile = new File(['.'], 'file.txt')

    const { result: hook } = renderHook()

    act(() => {
      hook.current.trackNewFiles(
        {
          file: preparingFile,
          parentId: 'syn123',
        },
        {
          file: uploadingFile,
          parentId: 'syn123',
        },
        {
          file: pausedFile,
          parentId: 'syn123',
        },
        {
          file: canceledFile,
          parentId: 'syn123',
        },
        {
          file: failedFile,
          parentId: 'syn123',
        },
        {
          file: completedFile,
          parentId: 'syn123',
        },
      )

      hook.current.setIsUploading(uploadingFile)
      hook.current.pauseUpload(pausedFile)
      hook.current.cancelUpload(canceledFile)
      hook.current.setFailed(failedFile, 'some reason')
      hook.current.setComplete(completedFile, fileHandleId)
    })

    // Should count PREPARING, UPLOADING, and PAUSED
    expect(hook.current.activeUploadCount).toBe(3)
    expect(hook.current.isUploading).toBe(true)
    // bytesPendingUpload should also count COMPLETED
    expect(hook.current.bytesPendingUpload).toBe(
      preparingFile.size +
        uploadingFile.size +
        pausedFile.size +
        completedFile.size,
    )

    act(() => {
      hook.current.cancelUpload(uploadingFile)
      hook.current.cancelUpload(preparingFile)
      hook.current.cancelUpload(pausedFile)
    })

    expect(hook.current.activeUploadCount).toBe(0)
    expect(hook.current.isUploading).toBe(false)
    // only the completed upload remains
    expect(hook.current.bytesPendingUpload).toBe(completedFile.size)
  })

  test('isUploadComplete', () => {
    const file1 = new File([''], 'file.txt')
    const file2 = new File([''], 'file.txt')

    const { result: hook } = renderHook()

    // Initially false
    expect(hook.current.isUploadComplete).toBe(false)

    // Add one file
    act(() => {
      hook.current.trackNewFiles({
        file: file1,
        parentId: 'syn123',
      })
    })

    expect(hook.current.isUploadComplete).toBe(false)

    // File starts uploading...
    act(() => {
      hook.current.setIsUploading(file1)
    })

    expect(hook.current.isUploadComplete).toBe(false)

    // Pause it...
    act(() => {
      hook.current.pauseUpload(file1)
    })
    expect(hook.current.isUploadComplete).toBe(false)

    // Mark it as canceled
    act(() => {
      hook.current.cancelUpload(file1)
    })
    expect(hook.current.isUploadComplete).toBe(false) // no files ever successfully uploaded

    // Mark it as complete
    act(() => {
      hook.current.setComplete(file1, fileHandleId)
    })
    expect(hook.current.isUploadComplete).toBe(true)

    // Add a new file
    act(() => {
      hook.current.trackNewFiles({
        file: file2,
        parentId: 'syn123',
      })
    })
    expect(hook.current.isUploadComplete).toBe(false)

    // If one file is complete and the other is canceled, isUploadComplete should be true
    act(() => {
      hook.current.cancelUpload(file2)
    })
    expect(hook.current.isUploadComplete).toBe(true)

    // Multiple files complete
    act(() => {
      hook.current.setComplete(file2, fileHandleId)
    })
    expect(hook.current.isUploadComplete).toBe(true)
  })
})
