import React from 'react'
import { Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
import IconSvg from './IconSvg'

export type InteractiveCopyIdsIconProps = {
  onCopy: () => void
}

export const InteractiveCopyIdsIcon = (props: InteractiveCopyIdsIconProps) => {
  const { onCopy } = props
  return (
    <Tooltip
      title="Copy IDs to the clipboard"
      enterNextDelay={TOOLTIP_DELAY_SHOW}
      placement="right"
    >
      <span>
        <button data-testid="copySynIdsButton" onClick={onCopy}>
          <span style={{ height: 15, marginTop: -1 }}>
            <IconSvg icon="contentCopy" />
          </span>
        </button>
      </span>
    </Tooltip>
  )
}
