import { useGetDownloadListStatistics } from '../../synapse-queries/index'
import DownloadDetails from './DownloadDetails'

export default function DownloadListStats() {
  const { data } = useGetDownloadListStatistics({ throwOnError: true })

  if (!data) {
    return null
  }

  return (
    <div>
      <DownloadDetails
        numBytes={data.sumOfFileSizesAvailableForDownload}
        numPackagableFiles={
          data.numberOfFilesAvailableForDownloadAndEligibleForPackaging
        }
        numFiles={data.numberOfFilesAvailableForDownload}
      />
    </div>
  )
}
