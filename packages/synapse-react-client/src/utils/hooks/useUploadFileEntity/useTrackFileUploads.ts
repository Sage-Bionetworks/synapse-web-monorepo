import { useState } from 'react'
import { ProgressCallback } from '../../../synapse-client/index'
import { FilePreparedForUpload } from './usePrepareFileEntityUpload'

export type TrackedUploadProgress = {
  parentId: string
  progress: ProgressCallback
  abortController: AbortController
  status:
    | 'PREPARING'
    | 'UPLOADING'
    | 'PAUSED'
    | 'CANCELED_BY_USER'
    | 'FAILED'
    | 'COMPLETE'
  failureReason?: string
}

const PENDING_UPLOAD_STATES: TrackedUploadProgress['status'][] = [
  'PREPARING',
  'UPLOADING',
  'PAUSED',
]

/**
 * Hook used to track the state of multiple file uploads, providing methods that can be used to interact with the upload state.
 */
export function useTrackFileUploads() {
  const [trackedUploadProgress, setTrackedUploadProgress] = useState<
    Map<File, TrackedUploadProgress>
  >(new Map())

  /**
   * Adds new files to be tracked and puts them in the "PREPARED" state.
   * Returns the new map of TrackedUploadProgress in case the new value is needed before
   * the state variable is updated.
   * @param preparedFiles
   */
  function trackNewFiles(
    ...preparedFiles: FilePreparedForUpload[]
  ): Map<File, TrackedUploadProgress> {
    // If a matching file that is uploading already exists, cancel it!
    preparedFiles.forEach(preparedFile => {
      const existingUpload = trackedUploadProgress.get(preparedFile.file)
      if (existingUpload && existingUpload.status !== 'CANCELED_BY_USER') {
        cancelUpload(preparedFile.file)
      }
    })

    // Re-initialize progress tracking state variable
    const newTrackedUploadProgress: Map<File, TrackedUploadProgress> = new Map(
      trackedUploadProgress.entries(),
    )

    preparedFiles.forEach(preparedFile => {
      newTrackedUploadProgress.set(preparedFile.file, {
        parentId: preparedFile.parentId,
        abortController: new AbortController(),
        // Note that this is number of parts uploaded, not file size or %
        progress: { value: 0, total: 1 },
        status: 'PREPARING',
      })
    })

    setTrackedUploadProgress(newTrackedUploadProgress)

    return newTrackedUploadProgress
  }

  function setProgress(file: File, progress: ProgressCallback) {
    setTrackedUploadProgress(prev => {
      const newMap = new Map(prev.entries())
      const entry = newMap.get(file)
      if (entry) {
        newMap.set(file, {
          ...entry,
          progress: {
            ...entry.progress,
            ...progress,
          },
        })
      }
      return newMap
    })
  }

  function setStatus(
    file: File,
    status: TrackedUploadProgress['status'],
    failureReason?: string,
  ) {
    setTrackedUploadProgress(prev => {
      const newMap = new Map(prev.entries())
      const entry = newMap.get(file)
      if (entry) {
        newMap.set(file, {
          ...entry,
          status,
          failureReason,
        })
      }
      return newMap
    })
  }

  function setIsUploading(file: File) {
    setStatus(file, 'UPLOADING')
  }

  function setComplete(file: File) {
    setStatus(file, 'COMPLETE')
  }

  function setFailed(file: File, failureReason: string) {
    setStatus(file, 'FAILED', failureReason)
  }

  function cancelUpload(file: File) {
    const entry = trackedUploadProgress.get(file)
    if (entry != null) {
      entry.abortController.abort()
    }
    setStatus(file, 'CANCELED_BY_USER')
  }

  function pauseUpload(file: File) {
    const entry = trackedUploadProgress.get(file)
    if (entry != null) {
      entry.abortController.abort()
    }
    setStatus(file, 'PAUSED')
  }

  /**
   * Removes the file from the list if the upload state is CANCELED_BY_USER or FAILED. Otherwise, a noop.
   */
  function removeUpload(file: File) {
    setTrackedUploadProgress(prev => {
      const newMap = new Map(prev.entries())
      const entry = newMap.get(file)

      if (entry == null) {
        // nothing to do
      } else {
        if (entry.status != 'CANCELED_BY_USER' && entry.status != 'FAILED') {
          console.warn(
            `Attempted to remove tracked upload progress before it was canceled.`,
            entry,
          )
        } else {
          newMap.delete(file)
        }
      }
      return newMap
    })
  }

  const activeUploadCount = [...trackedUploadProgress].filter(
    ([_file, progress]) => PENDING_UPLOAD_STATES.includes(progress.status),
  ).length
  const isUploading = activeUploadCount > 0

  const isUploadComplete =
    // At least one file is complete
    [...trackedUploadProgress].some(
      ([_file, progress]) => progress.status === 'COMPLETE',
    ) &&
    // No files are pending upload
    !isUploading

  return {
    trackedUploadProgress,
    setProgress,
    setIsUploading,
    trackNewFiles,
    pauseUpload,
    cancelUpload,
    removeUpload,
    setComplete,
    setFailed,
    isUploading,
    isUploadComplete,
    activeUploadCount,
  }
}
