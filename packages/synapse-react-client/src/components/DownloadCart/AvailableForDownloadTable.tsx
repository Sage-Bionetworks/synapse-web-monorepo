import { useSynapseContext } from '../../utils/context/SynapseContext'
import DownloadListTable, { DownloadListTableProps } from './DownloadListTable'
import { SynapseErrorBoundary } from '../error/ErrorBanner'

/**
 * Table of the files added to the Download Cart that are currently available for download.
 */
export default function AvailableForDownloadTable(
  props: DownloadListTableProps,
) {
  const { accessToken } = useSynapseContext()
  if (!accessToken) {
    return <></>
  }
  return (
    <SynapseErrorBoundary>
      {props.filesStatistics && <DownloadListTable {...props} />}
    </SynapseErrorBoundary>
  )
}
