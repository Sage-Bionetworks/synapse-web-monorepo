import { useSynapseContext } from '@/utils'
import { implementsExternalFileHandleInterface } from '@/utils/types/IsType'
import { Button } from '@mui/material'
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
import { BlockingLoader } from '../LoadingScreen/LoadingScreen'
import { getFiles } from '@/synapse-client/SynapseClient'
import { useGetEntities } from '@/synapse-queries/entity/useEntity'

const BATCH_SIZE = 50 // Maximum batch size for fetching presigned URLs

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

  // Keep a ref to the latest entityQueries to avoid stale closures
  const entityQueriesRef = useRef(entityQueries)

  // Keep ref updated
  useEffect(() => {
    entityQueriesRef.current = entityQueries
  }, [entityQueries])

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

  const downloadAllFiles = useCallback(async () => {
    // Prevent re-entry if already downloading
    if (isDownloadingRef.current) {
      return
    }

    if (!data || !isAuthenticated || !accessToken) {
      setIsDownloading(false)
      return
    }

    try {
      isDownloadingRef.current = true
      const allItems = data.pages.flatMap(page => page.page)

      if (allItems.length === 0) {
        displayToast('No files available to download', 'info')
        setIsDownloading(false)
        isDownloadingRef.current = false
        return
      }

      // Check if all entities have been loaded
      const allEntitiesLoaded = entityQueriesRef.current.every(
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
          const entityQuery = entityQueriesRef.current[index]
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

      // Process each batch
      for (const batch of batches) {
        try {
          const batchRequest: BatchFileRequest = {
            requestedFiles: batch,
            includeFileHandles: true,
            includePreSignedURLs: true,
            includePreviewPreSignedURLs: false,
          }

          const batchResult: BatchFileResult = await getFiles(
            batchRequest,
            accessToken,
          )

          // Trigger download for each file in the batch
          for (let i = 0; i < batchResult.requestedFiles.length; i++) {
            const fileResult = batchResult.requestedFiles[i]
            const originalItem = allItems.find(
              item => item.fileEntityId === batch[i].associateObjectId,
            )

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

              if (downloadUrl) {
                // Trigger download by opening
                window.open(downloadUrl)

                downloadedCount++

                // Track successfully downloaded item for batch removal
                if (originalItem) {
                  successfullyDownloadedItems.push(originalItem)
                }
              } else {
                failedCount++
              }
            } catch (error) {
              console.error(
                `Failed to download file ${fileResult.fileHandleId}:`,
                error,
              )
              failedCount++
            }

            // // Delay between downloads to allow browser to process each one
            // // 500ms gives the browser time to properly queue the download
            // await new Promise(resolve => setTimeout(resolve, 500))
          }
        } catch (error) {
          console.error('Failed to process batch:', error)
          failedCount += batch.length
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
      }

      // Show completion message
      if (downloadedCount > 0) {
        displayToast(
          `Started download for ${downloadedCount} file${
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
      displayToast(
        (error as SynapseClientError).reason ??
          'An error occurred while downloading files',
        'danger',
      )
    } finally {
      setIsDownloading(false)
      isDownloadingRef.current = false
    }
  }, [
    data,
    accessToken,
    isAuthenticated,
    removeFilesFromDownloadList,
    refetchDownloadListStatistics,
  ])

  // Once all pages are loaded, start downloading
  useEffect(() => {
    if (isDownloading && status === 'success' && !hasNextPage) {
      void downloadAllFiles()
    }
  }, [isDownloading, status, hasNextPage, downloadAllFiles])

  const handleClick = useCallback(() => {
    if (isDownloading) {
      return
    }
    setIsDownloading(true)
  }, [isDownloading])

  if (error) {
    return null
  }

  return (
    <>
      <BlockingLoader show={isDownloading} />
      <Button
        variant={variant}
        onClick={handleClick}
        disabled={isDownloading}
        startIcon={<Download />}
      >
        {buttonText}
      </Button>
    </>
  )
}

export default DownloadAllFilesFromListButton
