import { useEffect } from 'react'
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

  const {
    mutate: exportGrid,
    isPending,
    isSuccess,
    data,
    error,
  } = useExportGridAsCsv()

  // Handle successful export
  useEffect(() => {
    if (isSuccess && data?.resultsFileHandleId) {
      // Get presigned URL and trigger download
      getFileHandleByIdURL(data.resultsFileHandleId, accessToken)
        .then(presignedUrl => {
          // Create a link and trigger download
          const link = document.createElement('a')
          link.href = presignedUrl
          // Generate filename with timestamp
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
          link.setAttribute('download', `${filename}-${timestamp}.csv`)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          displayToast('CSV export completed successfully', 'success')
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
  }, [isSuccess, data, accessToken, filename])

  // Handle error
  useEffect(() => {
    if (error) {
      displayToast(
        `CSV export failed: ${error.reason || 'Unknown error'}`,
        'danger',
      )
    }
  }, [error])

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
