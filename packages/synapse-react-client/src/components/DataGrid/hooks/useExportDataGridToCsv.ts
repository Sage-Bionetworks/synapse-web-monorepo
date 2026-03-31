import { useExportGridAsCsv } from '@/synapse-queries/grid/useExportGrid'
import { displayToast } from '../../ToastMessage'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { getFileHandleByIdURL } from '@/synapse-client/SynapseClient'

export interface UseExportDataGridToCsvOptions {
  gridSessionId: string
  filename: string
}

export function useExportDataGridToCsv(options: UseExportDataGridToCsvOptions) {
  const { gridSessionId, filename } = options
  const { accessToken } = useSynapseContext()

  const { mutate: exportGrid, isPending } = useExportGridAsCsv({
    onSuccess: data => {
      if (data?.resultsFileHandleId) {
        // Get presigned URL and trigger download
        getFileHandleByIdURL(data.resultsFileHandleId, accessToken)
          .then(presignedUrl => {
            // Fetch the file as a blob to control the filename
            return fetch(presignedUrl)
              .then(response => response.blob())
              .then(blob => {
                // Create a blob URL with our custom filename
                const blobUrl = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = blobUrl
                // Generate filename with timestamp
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
                link.setAttribute('download', `${filename}-${timestamp}.csv`)
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                // Clean up the blob URL
                URL.revokeObjectURL(blobUrl)

                displayToast('CSV export completed successfully', 'success')
              })
          })
          .catch(err => {
            displayToast(
              `Failed to download CSV: ${
                err instanceof Error ? err.message : 'Unknown error'
              }`,
              'danger',
            )
          })
      }
    },
    onError: error => {
      displayToast(
        `CSV export failed: ${error.reason || 'Unknown error'}`,
        'danger',
      )
    },
  })

  const exportToCsv = () => {
    exportGrid({
      sessionId: gridSessionId,
      concreteType:
        'org.sagebionetworks.repo.model.grid.DownloadFromGridRequest',
    })
  }

  return {
    exportToCsv,
    isExporting: isPending,
  }
}
