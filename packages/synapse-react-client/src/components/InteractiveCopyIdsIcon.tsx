import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from './SynapseTable/SynapseTableConstants'
import IconSvg from './IconSvg/IconSvg'

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
      <IconButton
        sx={{ height: '40px' }}
        data-testid="copySynIdsButton"
        onClick={onCopy}
      >
        <IconSvg icon="contentCopy" />
      </IconButton>
    </Tooltip>
  )
}
