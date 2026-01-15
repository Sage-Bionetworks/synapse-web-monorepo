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
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { displayToast } from '../ToastMessage/ToastMessage'
import {
  useGetAvailableFilesToDownloadInfinite,
  useGetDownloadListStatistics,
  useRemoveFilesFromDownloadList,
} from '@/synapse-queries/download/useDownloadList'
import { getFiles } from '@/synapse-client/SynapseClient'
import { useGetEntities } from '@/synapse-queries/entity/useEntity'
import { DialogBase } from '../DialogBase'

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

const BATCH_SIZE = 50 // Maximum batch size for fetching presigned URLs
const MAX_BATCH_RETRIES = 2 // Number of times to retry a failed batch

export type DownloadAllFilesFromListButtonProps = {
  buttonText?: string
  variant?: 'text' | 'outlined' | 'contained'
}

/**
 * Button component that downloads all files from the user's download list.
 * Uses the infinite query hook to fetch all pages of download list items,
 * batches requests to get presigned URLs, and triggers browser downloads.
 */
export function DownloadAllFilesFromListButton(
  props: DownloadAllFilesFromListButtonProps,
) {
  const {
    buttonText = 'Download All Files Individually',
    variant = 'contained',
  } = props
  const { accessToken, isAuthenticated } = useSynapseContext()
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

  const {
    data,
    status,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    error,
  } = useGetAvailableFilesToDownloadInfinite()

  const { mutateAsync: removeFilesFromDownloadList } =
    useRemoveFilesFromDownloadList()

  const { refetch: refetchDownloadListStatistics } =
    useGetDownloadListStatistics()

  // Prepare entity headers for fetching FileEntity objects
  const entityHeaders = useMemo(() => {
    if (!data) return []
    const allItems = data.pages.flatMap(page => page.page)
    return allItems.map(item => ({
      id: item.fileEntityId,
      versionNumber: item.versionNumber,
    }))
  }, [data])

  // Fetch all FileEntity objects to get dataFileHandleId
  const entityQueries = useGetEntities(entityHeaders)

  // When downloading, fetch all pages first
  useEffect(() => {
    if (
      isDownloading &&
      status === 'success' &&
      !isFetchingNextPage &&
      hasNextPage &&
      fetchNextPage
    ) {
      void fetchNextPage()
    }
  }, [isDownloading, status, isFetchingNextPage, hasNextPage, fetchNextPage])

  /**
   * Downloads all files from the download list.
   * Takes entities as a parameter to make data dependencies explicit.
   */
  const downloadAllFiles = useCallback(
    async (
      entities: Array<{ data: unknown; status: string }>,
      downloadListItems: typeof data,
    ) => {
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

        if (allItems.length === 0) {
          displayToast('No files available to download', 'info')
          setIsDownloading(false)
          isDownloadingRef.current = false
          return
        }

        // Check if all entities have been loaded
        const allEntitiesLoaded = entities.every(
          query => query.status === 'success',
        )
        if (!allEntitiesLoaded) {
          displayToast('Still loading file information. Please wait...', 'info')
          setIsDownloading(false)
          isDownloadingRef.current = false
          return
        }

        // Convert download list items to file handle associations using dataFileHandleId from FileEntity
        const fileHandleAssociations: FileHandleAssociation[] = allItems
          .map((item, index) => {
            const entityQuery = entities[index]
            if (!entityQuery.data) return null

            const fileEntity = entityQuery.data as FileEntity
            return {
              fileHandleId: fileEntity.dataFileHandleId,
              associateObjectId: item.fileEntityId,
              associateObjectType: FileHandleAssociateType.FileEntity,
            }
          })
          .filter(
            (association): association is FileHandleAssociation =>
              association !== null,
          )

        // Split into batches to avoid overwhelming the API
        const batches: FileHandleAssociation[][] = []
        for (let i = 0; i < fileHandleAssociations.length; i += BATCH_SIZE) {
          batches.push(fileHandleAssociations.slice(i, i + BATCH_SIZE))
        }

        let downloadedCount = 0
        let failedCount = 0
        const successfullyDownloadedItems: typeof allItems = []

        // Track used filenames to prevent collisions
        const usedFilenames = new Map<string, number>()

        // Determine if File System Access API is available
        const useFileSystemAccess = supportsFileSystemAccess(window)

        // Prompt user to select a directory for downloads (only for File System Access API)
        let directoryHandle: FileSystemDirectoryHandle | undefined

        // Initialize progress tracking
        setDownloadProgress({
          currentFile: '',
          fileIndex: 0,
          totalFiles: allItems.length,
          bytesDownloaded: 0,
          totalBytes: 0,
        })

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

        /**
         * Helper function to download file using traditional anchor tag method
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
         */
        const processFileDownload = async (
          fileResult: BatchFileResult['requestedFiles'][0],
          originalItem: (typeof allItems)[0] | undefined,
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
            let fileName: string =
              fileResult.fileHandle?.fileName ||
              `file-${fileResult.fileHandleId}`

            // Handle filename collisions by adding a counter suffix
            if (usedFilenames.has(fileName)) {
              const count = usedFilenames.get(fileName)! + 1
              usedFilenames.set(fileName, count)

              // Split filename into base and extension
              const lastDotIndex = fileName.lastIndexOf('.')
              if (lastDotIndex > 0) {
                const baseName = fileName.substring(0, lastDotIndex)
                const extension = fileName.substring(lastDotIndex)
                fileName = `${baseName} (${count})${extension}`
              } else {
                fileName = `${fileName} (${count})`
              }
            } else {
              usedFilenames.set(fileName, 0)
            }

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
         * Helper function to fetch presigned URLs for a batch with retry logic
         */
        const fetchBatchWithRetry = async (
          batch: FileHandleAssociation[],
          retryCount = 0,
        ): Promise<BatchFileResult | null> => {
          try {
            const batchRequest: BatchFileRequest = {
              requestedFiles: batch,
              includeFileHandles: true,
              includePreSignedURLs: true,
              includePreviewPreSignedURLs: false,
            }

            return await getFiles(batchRequest, accessToken)
          } catch (error) {
            if (retryCount < MAX_BATCH_RETRIES) {
              console.warn(
                `Batch fetch failed (attempt ${retryCount + 1}/${
                  MAX_BATCH_RETRIES + 1
                }), retrying...`,
                error,
              )
              // Wait briefly before retrying (exponential backoff)
              await new Promise(resolve =>
                setTimeout(resolve, 1000 * Math.pow(2, retryCount)),
              )
              return fetchBatchWithRetry(batch, retryCount + 1)
            }
            console.error(
              `Failed to fetch batch after ${MAX_BATCH_RETRIES + 1} attempts:`,
              error,
            )
            return null
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
                const originalItem = allItems.find(
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

          // Try to fetch the entire batch with retry logic
          const batchResult = await fetchBatchWithRetry(batch)

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
              const originalItem = allItems.find(
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
            batchToRemove: successfullyDownloadedItems.map(item => ({
              fileEntityId: item.fileEntityId,
              versionNumber: item.versionNumber,
            })),
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
      removeFilesFromDownloadList,
      refetchDownloadListStatistics,
    ],
  )

  // Once all pages are loaded, start downloading
  // Pass current entity queries and data explicitly to downloadAllFiles
  useEffect(() => {
    if (isDownloading && status === 'success' && !hasNextPage && data) {
      void downloadAllFiles(entityQueries, data)
    }
  }, [
    isDownloading,
    status,
    hasNextPage,
    data,
    entityQueries,
    downloadAllFiles,
  ])

  const handleClick = useCallback(() => {
    if (isDownloading) {
      return
    }
    setIsDownloading(true)
  }, [isDownloading])

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

export default DownloadAllFilesFromListButton
