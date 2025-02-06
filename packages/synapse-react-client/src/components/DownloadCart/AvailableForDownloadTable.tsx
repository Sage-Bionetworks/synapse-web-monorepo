import { useSynapseContext } from '../../utils'
import DownloadListTable from './DownloadListTable'
import { SynapseErrorBoundary } from '../error/ErrorBanner'

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
