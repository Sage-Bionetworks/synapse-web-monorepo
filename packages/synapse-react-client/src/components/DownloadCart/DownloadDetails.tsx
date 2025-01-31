import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import IconSvg from '../IconSvg/IconSvg'
import { Tooltip, Box } from '@mui/material'
import pluralize from 'pluralize'

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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start ',
        gap: '25px',
        fontWeight: 'bold',
        svg: {
          mr: '5px',
        },
      }}
    >
      <span>
        {!isInactive && (
          <>
            {numFiles.toLocaleString()} {pluralize('File', numFiles)}
          </>
        )}
      </span>
      <span>
        <span className={iconClassName}>
          <IconSvg wrap={false} icon="packagableFile" />
        </span>
        {!isInactive && (
          <>
            {numPackagableFiles.toLocaleString()}{' '}
            {pluralize('File', numPackagableFiles)} eligible for packaging
          </>
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
            <>
              {numIneligibleFiles.toLocaleString()}{' '}
              {pluralize('File', numIneligibleFiles)} ineligible for packaging
            </>
          )}
        </span>
      )}
    </Box>
  )
}
