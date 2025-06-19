import IconButton from '@mui/material/IconButton'
import { IconButtonProps } from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { TOOLTIP_DELAY_SHOW } from './SynapseTable/SynapseTableConstants'
import IconSvg from './IconSvg/IconSvg'

export type InteractiveCopyIdsIconProps = Omit<IconButtonProps, 'onClick'> & {
  onCopy: () => void
}

export const InteractiveCopyIdsIcon = (props: InteractiveCopyIdsIconProps) => {
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
