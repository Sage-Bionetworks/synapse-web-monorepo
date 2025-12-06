import React from 'react'
import { IconButton, IconButtonProps, Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from './SynapseTable/SynapseTableConstants'
import IconSvg from './IconSvg/IconSvg'

export type InteractiveCopyIdsIconProps = Omit<IconButtonProps, 'onClick'> & {
  onCopy: () => void
}

export const InteractiveCopyIdsIcon = (
  props: InteractiveCopyIdsIconProps,
): React.ReactNode => {
  const { onCopy, ...buttonProps } = props
  return (
    <Tooltip
      title="Copy IDs to the clipboard"
      enterNextDelay={TOOLTIP_DELAY_SHOW}
      placement="right"
    >
      <IconButton
        data-testid="copySynIdsButton"
        {...buttonProps}
        onClick={onCopy}
      >
        <IconSvg wrap={false} icon="contentCopy" fontSize={'inherit'} />
      </IconButton>
    </Tooltip>
  )
}
