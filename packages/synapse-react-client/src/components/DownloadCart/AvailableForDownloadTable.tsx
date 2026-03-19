import { useSynapseContext } from '@/utils'
import { AvailableFilter } from '@sage-bionetworks/synapse-types'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import DownloadListTable from './DownloadListTable'

/**
 * Table of the files added to the Download List that are currently available for download.
 */
export default function AvailableForDownloadTable({
  filter,
}: {
  filter?: AvailableFilter
}) {
  const { isAuthenticated } = useSynapseContext()
  if (!isAuthenticated) {
    return <></>
  }
  return (
    <SynapseErrorBoundary>
      <DownloadListTable filter={filter} />
    </SynapseErrorBoundary>
  )
}
