import { useSynapseContext } from '@/utils'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import DownloadListTable from './DownloadListTable'

/**
 * Table of the files added to the Download Cart that are currently available for download.
 */
export default function AvailableForDownloadTable() {
  const { accessToken } = useSynapseContext()
  if (!accessToken) {
    return <></>
  }
  return (
    <SynapseErrorBoundary>
      <DownloadListTable />
    </SynapseErrorBoundary>
  )
}
