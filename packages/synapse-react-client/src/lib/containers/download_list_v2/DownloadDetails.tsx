import React from 'react'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'
import IconSvg from '../IconSvg'
import { Tooltip } from '@mui/material'

export type DownloadDetailsProps = {
  numFiles: number
  numPackagableFiles: number
  numBytes: number
}

export default function DownloadDetails(props: DownloadDetailsProps) {
  const { numFiles, numPackagableFiles, numBytes } = props
  const numIneligibleFiles = numFiles - numPackagableFiles
  const isInactive = numFiles === 0
  const iconClassName = isInactive ? 'SRC-inactive' : 'SRC-primary-text-color'
  return (
    <span className="DownloadDetailsV2">
      <span className="item">{!isInactive && <> {numFiles} Files </>}</span>
      <span className="item">
        <span className={iconClassName}>
          <IconSvg icon="packagableFile" />
        </span>
        {!isInactive && (
          <> {numPackagableFiles} Files eligible for packaging </>
        )}
      </span>
      {numBytes > 0 && (
        <Tooltip
          title="This is the total size of all files in the Download Cart that are available to download."
          enterNextDelay={TOOLTIP_DELAY_SHOW}
          placement="top"
        >
          <span className="item">{calculateFriendlyFileSize(numBytes)}</span>
        </Tooltip>
      )}
      {numIneligibleFiles > 0 && (
        <span className="item">
          <span className={`SRC-warning-color`}>
            <IconSvg icon="warningOutlined" />
          </span>
          {!isInactive && (
            <> {numIneligibleFiles} Files ineligible for packaging </>
          )}
        </span>
      )}
    </span>
  )
}
