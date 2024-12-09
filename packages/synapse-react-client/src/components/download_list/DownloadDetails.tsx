import { useState, useEffect } from 'react'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import dayjs from 'dayjs'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { SkeletonInlineBlock } from '../Skeleton/SkeletonInlineBlock'
import {
  InsertDriveFileTwoTone,
  LayersTwoTone,
  WatchLaterTwoTone,
} from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

export type DownloadDetailsProps = {
  numFiles: number
  numBytes?: number
}

type State = {
  isLoading: boolean
  downloadSpeed: number
}

/**
 * Displays download information including number of files, size of download, and time to download.
 * Prefer to use {@link ../DownloadCart/DownloadDetails} instead, particularly when you have information about file packaging in/eligibility
 * @param props
 * @returns
 */
export default function DownloadDetails(props: DownloadDetailsProps) {
  const { numFiles, numBytes } = props
  const { accessToken } = useSynapseContext()
  const hasNumBytes = !!numBytes

  const [state, setState] = useState<State>({
    isLoading: hasNumBytes, // figure out the estimated download time iff we were given a byte count
    downloadSpeed: 0,
  })
  const { isLoading, downloadSpeed } = state

  useEffect(() => {
    if (accessToken) {
      testDownloadSpeed(accessToken).then(speed => {
        setState({
          isLoading: false,
          downloadSpeed: speed,
        })
      })
    }
  }, [accessToken])

  const timeEstimateInSeconds =
    isLoading || downloadSpeed === 0 || !numBytes ? 0 : numBytes / downloadSpeed
  const isTimeEstimateLoading = timeEstimateInSeconds === 0
  const friendlyTime = isTimeEstimateLoading
    ? ''
    : dayjs.duration({ seconds: timeEstimateInSeconds }).humanize()

  const isZeroFiles = numFiles === 0
  const fileCountIconClass = isZeroFiles
    ? 'SRC-inactive'
    : 'SRC-primary-text-color'

  const timeEstimateIconClass = isTimeEstimateLoading
    ? 'SRC-inactive'
    : 'SRC-primary-text-color'
  return (
    <span className="download-details-container">
      <span>
        <InsertDriveFileTwoTone className={fileCountIconClass} />
        {isZeroFiles ? (
          <SkeletonInlineBlock width={50} />
        ) : (
          <>{numFiles.toLocaleString()}&nbsp;files</>
        )}
      </span>
      {hasNumBytes && (
        <Tooltip
          title="This is the total size of all files. Zipped package(s) will likely be smaller."
          enterNextDelay={TOOLTIP_DELAY_SHOW}
          placement="top"
        >
          <span data-testid="numBytesUI">
            <LayersTwoTone className={timeEstimateIconClass} />
            {isTimeEstimateLoading ? (
              <SkeletonInlineBlock width={50} />
            ) : (
              calculateFriendlyFileSize(numBytes)
            )}
          </span>
        </Tooltip>
      )}
      {hasNumBytes && (
        <Tooltip
          title="This is an estimate of how long package download will take."
          enterNextDelay={TOOLTIP_DELAY_SHOW}
          placement="top"
        >
          <span data-testid="downloadTimeEstimateUI">
            <WatchLaterTwoTone className={timeEstimateIconClass} />
            {isLoading && numFiles > 0 ? (
              <SkeletonInlineBlock width={50} />
            ) : (
              friendlyTime
            )}
          </span>
        </Tooltip>
      )}
    </span>
  )
}
