import DownloadDetails from './DownloadDetails'

export type DownloadListStatsProps = {
  numFiles: number
  numPackagableFiles: number
  numBytes: number
}

export default function DownloadListStats(props: DownloadListStatsProps) {
  const { numFiles, numPackagableFiles, numBytes } = props

  return (
    <div>
      <DownloadDetails
        numFiles={numFiles}
        numPackagableFiles={numPackagableFiles}
        numBytes={numBytes}
      ></DownloadDetails>
      {
        // also have access to fileStats.numberOfFilesRequiringAction
        // and fileStats.totalNumberOfFiles
      }
    </div>
  )
}
