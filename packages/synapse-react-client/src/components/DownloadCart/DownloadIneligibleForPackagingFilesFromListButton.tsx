import { useSynapseContext } from '@/utils'
import { implementsExternalFileHandleInterface } from '@/utils/types/IsType'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import { Button, LinearProgress, Typography } from '@mui/material'
import { Download } from '@mui/icons-material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  BatchFileRequest,
  BatchFileResult,
  ExternalFileHandle,
  FileEntity,
  FileHandleAssociation,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { useCallback, useRef, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { displayToast } from '../ToastMessage/ToastMessage'
import {
  useGetAvailableFilesToDownloadInfinite,
  useGetDownloadListStatistics,
  useRemoveFilesFromDownloadList,
} from '@/synapse-queries/download/useDownloadList'
import { getFiles } from '@/synapse-client/SynapseClient'
import { useGetEntityQueryOptions } from '@/synapse-queries/entity/useEntity'
import { DialogBase } from '../DialogBase'
import { deduplicateFileName, getFileName } from './fileNameUtils'

// showDirectoryPicker is not yet available on the Window interface.
interface FileSystemAccessWindow extends Window {
  showDirectoryPicker(options?: {
    mode?: 'read' | 'readwrite'
    startIn?:
      | 'desktop'
      | 'documents'
      | 'downloads'
      | 'music'
      | 'pictures'
      | 'videos'
  }): Promise<FileSystemDirectoryHandle>
}

/**
 * Type guard to check if File System Access API is available
 */
function supportsFileSystemAccess(
  window: Window,
): window is FileSystemAccessWindow {
  return 'showDirectoryPicker' in window
}

const FILE_BATCH_SIZE = 50 // Maximum batch size for fetching presigned URLs

export type DownloadIneligibleForPackagingFilesFromListButtonProps = {
  buttonText?: string
  variant?: 'text' | 'outlined' | 'contained'
}

/**
 * Button component that downloads files from the user's download list that are ineligible for packaging.
 * Uses the infinite query hook to fetch all pages of download list items,
 * batches requests to get presigned URLs, and triggers browser downloads.
 */
export function DownloadIneligibleForPackagingFilesFromListButton(
  props: DownloadIneligibleForPackagingFilesFromListButtonProps,
) {
  const { buttonText = 'Download Non-Packageable Files', variant = 'text' } =
    props
  const { accessToken, isAuthenticated } = useSynapseContext()
  const queryClient = useQueryClient()
  const getEntityQueryOptions = useGetEntityQueryOptions<FileEntity>()
  const [isDownloading, setIsDownloading] = useState(false)
  const isDownloadingRef = useRef(false)
  const isCancelledRef = useRef(false)
  const [downloadProgress, setDownloadProgress] = useState<{
    currentFile: string
    fileIndex: number
    totalFiles: number
    bytesDownloaded: number
    totalBytes: number
  } | null>(null)

  const { data, status, hasNextPage, fetchNextPage, error } =
    useGetAvailableFilesToDownloadInfinite()

  const { mutateAsync: removeFilesFromDownloadList } =
    useRemoveFilesFromDownloadList()

  const { refetch: refetchDownloadListStatistics } =
    useGetDownloadListStatistics()

  /**
   * Downloads all files from the download list.
   */
  const downloadAllFiles = useCallback(
    async (downloadListItems: typeof data) => {
      // Prevent re-entry if already downloading
      if (isDownloadingRef.current) {
        return
      }

      if (!downloadListItems || !isAuthenticated) {
        setIsDownloading(false)
        return
      }

      try {
        isDownloadingRef.current = true
        isCancelledRef.current = false
        const allItems = downloadListItems.pages.flatMap(page => page.page)

        // Filter to only include files that are NOT eligible for packaging
        const nonPackageableFiles = allItems.filter(
          item => !item.isEligibleForPackaging,
        )

        if (nonPackageableFiles.length === 0) {
          displayToast('No non-packageable files available to download', 'info')
          setIsDownloading(false)
          isDownloadingRef.current = false
          return
        }

        // Determine if File System Access API is available
        const useFileSystemAccess = supportsFileSystemAccess(window)

        // Prompt user to select a directory for downloads BEFORE async operations
        // (must be called during user gesture to avoid SecurityError)
        let directoryHandle: FileSystemDirectoryHandle | undefined

        if (useFileSystemAccess) {
          // TypeScript narrowing: we know window has showDirectoryPicker at this point
          const fileSystemWindow = window as unknown as FileSystemAccessWindow

          try {
            directoryHandle = await fileSystemWindow.showDirectoryPicker({
              mode: 'readwrite',
            })
          } catch (error) {
            // User cancelled directory picker
            console.error('Failed to select directory:', error)
            displayToast(
              'Directory selection is required to directly download files from the website.',
              'warning',
            )
            setIsDownloading(false)
            isDownloadingRef.current = false
            return
          }
        } else {
          // Show info message for browsers without File System Access API
          displayToast(
            'Your browser will download files individually to your default downloads folder. Each file may trigger a separate download prompt.',
            'info',
          )
        }

        // Initialize progress tracking
        setDownloadProgress({
          currentFile: '',
          fileIndex: 0,
          totalFiles: nonPackageableFiles.length,
          bytesDownloaded: 0,
          totalBytes: 0,
        })

        // Fetch entities to get dataFileHandleId for each file
        // Use React Query's ensureQueryData to leverage cache and built-in retry logic (handles 429s with exponential backoff)
        const entityIdToFileHandleId = new Map<string, string>()

        // Fetch all entities in parallel - React Query handles concurrency and retries
        const entityPromises = nonPackageableFiles.map(async item => {
          if (isCancelledRef.current) {
            return
          }

          try {
            const entity = await queryClient.ensureQueryData(
              getEntityQueryOptions(
                item.fileEntityId,
                item.versionNumber?.toString(),
              ),
            )
            entityIdToFileHandleId.set(entity.id!, entity.dataFileHandleId)
          } catch (error) {
            console.error(`Failed to fetch entity ${item.fileEntityId}:`, error)
            // Continue even if one entity fails
          }
        })

        await Promise.all(entityPromises)

        // Convert download list items to file handle associations using the fetched dataFileHandleIds
        const fileHandleAssociations: FileHandleAssociation[] =
          nonPackageableFiles
            .filter(item => entityIdToFileHandleId.has(item.fileEntityId))
            .map(item => ({
              fileHandleId: entityIdToFileHandleId.get(item.fileEntityId)!,
              associateObjectId: item.fileEntityId,
              associateObjectType: FileHandleAssociateType.FileEntity,
            }))

        if (fileHandleAssociations.length === 0) {
          displayToast(
            'Failed to fetch file information for download',
            'danger',
          )
          setIsDownloading(false)
          isDownloadingRef.current = false
          return
        }

        // Split into batches to avoid overwhelming the API
        const batches: FileHandleAssociation[][] = []
        for (
          let i = 0;
          i < fileHandleAssociations.length;
          i += FILE_BATCH_SIZE
        ) {
          batches.push(fileHandleAssociations.slice(i, i + FILE_BATCH_SIZE))
        }

        let downloadedCount = 0
        let failedCount = 0
        const successfullyDownloadedItems: typeof nonPackageableFiles = []

        // Track used filenames to prevent collisions
        const usedFilenames = new Map<string, number>()

        /**
         * Helper function to download file using traditional anchor tag method
         * @returns boolean indicating if the download was successful
         */
        const downloadFileTraditional = async (
          downloadUrl: string,
          fileName: string,
        ): Promise<boolean> => {
          try {
            const response = await fetch(downloadUrl)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }

            const blob = await response.blob()
            const blobUrl = URL.createObjectURL(blob)
            const anchor = document.createElement('a')
            anchor.href = blobUrl
            anchor.download = fileName
            anchor.style.display = 'none'
            document.body.appendChild(anchor)
            anchor.click()
            document.body.removeChild(anchor)

            // Clean up blob URL after a delay to ensure download initiation
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000)

            return true
          } catch (error) {
            console.error(`Failed to download file ${fileName}:`, error)
            // Fallback to window.open method
            try {
              window.open(downloadUrl, '_blank', 'noopener,noreferrer')
              return true
            } catch (fallbackError) {
              console.error(`Fallback window.open also failed:`, fallbackError)
              return false
            }
          }
        }

        /**
         * Helper function to process a single file download
         * @returns boolean indicating if download is successful
         */
        const processFileDownload = async (
          fileResult: BatchFileResult['requestedFiles'][0],
          originalItem: (typeof nonPackageableFiles)[0] | undefined,
        ): Promise<boolean> => {
          try {
            let downloadUrl: string | undefined

            // Check if this is an external file handle
            if (
              fileResult.fileHandle &&
              implementsExternalFileHandleInterface(fileResult.fileHandle)
            ) {
              // For external file handles, use the externalURL
              downloadUrl = (fileResult.fileHandle as ExternalFileHandle)
                .externalURL
            } else if (fileResult.preSignedURL) {
              // For other file types, use the presigned URL
              downloadUrl = fileResult.preSignedURL
            }

            if (!downloadUrl) {
              return false
            }

            // Get filename from file result or create a default name
            const baseFileName = getFileName(fileResult, originalItem)

            // Handle filename collisions by adding a counter suffix
            const fileName = deduplicateFileName(baseFileName, usedFilenames)

            // Update progress with current file info
            const currentFileIndex = downloadedCount + 1
            setDownloadProgress(prev =>
              prev
                ? {
                    ...prev,
                    currentFile: fileName,
                    fileIndex: currentFileIndex,
                    bytesDownloaded: 0,
                    totalBytes: 0,
                  }
                : null,
            )

            // Use traditional download method for unsupported browsers
            if (!useFileSystemAccess) {
              const success = await downloadFileTraditional(
                downloadUrl,
                fileName,
              )
              if (success) {
                downloadedCount = currentFileIndex
                if (originalItem) {
                  successfullyDownloadedItems.push(originalItem)
                }
              }
              return success
            }

            // Use File System Access API for supported browsers
            if (!directoryHandle) {
              return false
            }

            try {
              // Fetch the file
              const response = await fetch(downloadUrl)
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }

              // Get total file size from headers
              const contentLength = response.headers.get('content-length')
              const totalBytes = contentLength ? parseInt(contentLength, 10) : 0

              // Update progress with file size
              setDownloadProgress(prev =>
                prev
                  ? {
                      ...prev,
                      bytesDownloaded: 0,
                      totalBytes,
                    }
                  : null,
              )

              // Create file handle in selected directory
              const fileHandle = await directoryHandle.getFileHandle(fileName, {
                create: true,
              })
              const writableStream = await fileHandle.createWritable()

              // Stream the response body to the file with progress tracking
              if (response.body) {
                const reader = response.body.getReader()
                let bytesReceived = 0

                try {
                  while (true) {
                    const { done, value } = await reader.read()
                    if (done) break

                    bytesReceived += value.length
                    await writableStream.write(value)

                    // Update progress
                    setDownloadProgress(prev =>
                      prev
                        ? {
                            ...prev,
                            bytesDownloaded: bytesReceived,
                          }
                        : null,
                    )
                  }
                } catch (streamError) {
                  await writableStream.abort()
                  throw streamError
                } finally {
                  await writableStream.close()
                }
              } else {
                // Fallback if streaming not supported
                try {
                  const blob = await response.blob()
                  await writableStream.write(blob)
                } finally {
                  await writableStream.close()
                }
              }

              downloadedCount = currentFileIndex

              // Track successfully downloaded item for batch removal
              if (originalItem) {
                successfullyDownloadedItems.push(originalItem)
              }
              return true
            } catch (fetchError) {
              console.error(
                `Failed to fetch/write file ${fileResult.fileHandleId}:`,
                fetchError,
              )
              // Fallback to window.open if File System Access API fails
              try {
                downloadFileTraditional(downloadUrl, fileName)
                downloadedCount = currentFileIndex
                if (originalItem) {
                  successfullyDownloadedItems.push(originalItem)
                }
                return true
              } catch (fallbackError) {
                console.error(
                  `Fallback downloadFileTraditional also failed for ${fileResult.fileHandleId}:`,
                  fallbackError,
                )
                return false
              }
            }
          } catch (error) {
            console.error(
              `Failed to download file ${fileResult.fileHandleId}:`,
              error,
            )
            return false
          }
        }

        /**
         * Fallback function to fetch files individually when batch fails
         */
        const fetchIndividually = async (
          batch: FileHandleAssociation[],
        ): Promise<void> => {
          console.info(
            `Attempting to fetch ${batch.length} files individually after batch failure`,
          )

          for (const fileHandleAssociation of batch) {
            // Check if user cancelled the operation
            if (isCancelledRef.current) {
              console.info('Individual file fetch cancelled by user')
              break
            }

            const singleBatch = [fileHandleAssociation]
            try {
              const batchRequest: BatchFileRequest = {
                requestedFiles: singleBatch,
                includeFileHandles: true,
                includePreSignedURLs: true,
                includePreviewPreSignedURLs: false,
              }

              const batchResult = await getFiles(batchRequest, accessToken)

              if (batchResult.requestedFiles.length > 0) {
                const fileResult = batchResult.requestedFiles[0]
                const originalItem = nonPackageableFiles.find(
                  item =>
                    item.fileEntityId ===
                    fileHandleAssociation.associateObjectId,
                )

                const success = await processFileDownload(
                  fileResult,
                  originalItem,
                )
                if (!success) {
                  failedCount++
                }
              } else {
                failedCount++
              }
            } catch (error) {
              console.error(
                `Failed to fetch individual file ${fileHandleAssociation.fileHandleId}:`,
                error,
              )
              failedCount++
            }
          }
        }

        // Process each batch
        for (const batch of batches) {
          // Check if user cancelled the operation
          if (isCancelledRef.current) {
            console.info('Download cancelled by user')
            break
          }

          // Try to fetch the entire batch (getFiles has built-in retry logic)
          let batchResult: BatchFileResult | null = null
          try {
            const batchRequest: BatchFileRequest = {
              requestedFiles: batch,
              includeFileHandles: true,
              includePreSignedURLs: true,
              includePreviewPreSignedURLs: false,
            }
            batchResult = await getFiles(batchRequest, accessToken)
          } catch (error) {
            console.error('Failed to fetch batch:', error)
          }

          if (batchResult) {
            // Batch fetch succeeded, process all files
            for (let i = 0; i < batchResult.requestedFiles.length; i++) {
              // Check if user cancelled the operation
              if (isCancelledRef.current) {
                console.info(
                  'Download cancelled by user during batch processing',
                )
                break
              }

              const fileResult = batchResult.requestedFiles[i]
              const originalItem = nonPackageableFiles.find(
                item => item.fileEntityId === batch[i].associateObjectId,
              )

              const success = await processFileDownload(
                fileResult,
                originalItem,
              )
              if (!success) {
                failedCount++
              }
            }
          } else {
            // Batch fetch failed after retries, try fetching files individually
            await fetchIndividually(batch)
          }
        }

        // Remove all successfully downloaded files from the download list in one batch
        if (successfullyDownloadedItems.length > 0) {
          await removeFilesFromDownloadList({
            batchToRemove: successfullyDownloadedItems.map(
              (item: (typeof nonPackageableFiles)[0]) => ({
                fileEntityId: item.fileEntityId,
                versionNumber: item.versionNumber,
              }),
            ),
          })
          // Refetch statistics after removing files
          await refetchDownloadListStatistics()
          // Scroll to top of page to show updated statistics
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        // Show completion message
        if (isCancelledRef.current) {
          displayToast(
            `Download cancelled. ${downloadedCount} file${
              downloadedCount !== 1 ? 's were' : ' was'
            } downloaded before cancellation.`,
            'info',
          )
        } else if (downloadedCount > 0) {
          displayToast(
            `Download started for ${downloadedCount} file${
              downloadedCount !== 1 ? 's' : ''
            }${
              failedCount > 0
                ? `. ${failedCount} file${failedCount !== 1 ? 's' : ''} failed.`
                : '.'
            }`,
            failedCount > 0 ? 'warning' : 'success',
          )
        } else {
          displayToast('No files could be downloaded', 'warning')
        }
      } catch (error) {
        console.error('Error downloading files:', error)
        const message =
          (error as SynapseClientError | undefined)?.reason ??
          (error instanceof Error ? error.message : undefined) ??
          'An error occurred while downloading files'
        displayToast(message, 'danger')
      } finally {
        setDownloadProgress(null)
        setIsDownloading(false)
        isDownloadingRef.current = false
      }
    },
    [
      accessToken,
      isAuthenticated,
      queryClient,
      getEntityQueryOptions,
      removeFilesFromDownloadList,
      refetchDownloadListStatistics,
    ],
  )

  const handleClick = useCallback(() => {
    if (isDownloading) {
      return
    }
    setIsDownloading(true)

    // Fetch all remaining pages imperatively, then download
    void (async () => {
      try {
        let stillHasNextPage = hasNextPage
        let latestData = data
        while (stillHasNextPage && fetchNextPage) {
          const result = await fetchNextPage()
          stillHasNextPage = result.hasNextPage
          if (result.data) {
            latestData = result.data
          }
        }

        // All pages loaded, now download
        if (status === 'success' && latestData) {
          void downloadAllFiles(latestData)
        } else {
          // Failed to load data
          setIsDownloading(false)
          isDownloadingRef.current = false
          displayToast(
            'Failed to load download list. Please try again.',
            'danger',
          )
        }
      } catch (error) {
        console.error('Error downloading files:', error)
        setIsDownloading(false)
        isDownloadingRef.current = false
        const message =
          (error as SynapseClientError | undefined)?.reason ??
          (error instanceof Error ? error.message : undefined) ??
          'An error occurred while preparing files for download'
        displayToast(message, 'danger')
      }
    })()
  }, [
    isDownloading,
    hasNextPage,
    fetchNextPage,
    status,
    data,
    downloadAllFiles,
  ])

  const handleCancel = useCallback(() => {
    isCancelledRef.current = true
    setDownloadProgress(null)
    setIsDownloading(false)
    isDownloadingRef.current = false
  }, [])

  if (error) {
    return null
  }

  return (
    <>
      <DialogBase
        open={!!downloadProgress}
        title="Downloading Files"
        hasCloseButton={false}
        onCancel={handleCancel}
        maxWidth="sm"
        content={
          downloadProgress ? (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                id="download-progress-description"
              >
                File {downloadProgress.fileIndex} of{' '}
                {downloadProgress.totalFiles}
              </Typography>
              <Typography variant="body2" noWrap gutterBottom>
                {downloadProgress.currentFile}
              </Typography>
              {downloadProgress.totalBytes > 0 && (
                <>
                  <LinearProgress
                    variant="determinate"
                    value={
                      (downloadProgress.bytesDownloaded /
                        downloadProgress.totalBytes) *
                      100
                    }
                    sx={{ my: 2 }}
                    aria-label="Download progress"
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {calculateFriendlyFileSize(
                      downloadProgress.bytesDownloaded,
                    )}{' '}
                    of {calculateFriendlyFileSize(downloadProgress.totalBytes)}
                  </Typography>
                </>
              )}
              {downloadProgress.totalBytes === 0 && (
                <LinearProgress sx={{ my: 2 }} aria-label="Download progress" />
              )}
            </>
          ) : null
        }
        actions={
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        }
        DialogProps={{
          'aria-describedby': 'download-progress-description',
          disableEscapeKeyDown: false,
        }}
      />
      <Button
        variant={variant}
        onClick={handleClick}
        loading={isDownloading}
        startIcon={<Download />}
      >
        {buttonText}
      </Button>
    </>
  )
}

export default DownloadIneligibleForPackagingFilesFromListButton
