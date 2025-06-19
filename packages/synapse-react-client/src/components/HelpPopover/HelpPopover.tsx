import { MarkdownPopover } from '../Markdown/MarkdownPopover'
import { ButtonProps } from '@mui/material/Button'
import { SxProps } from '@mui/material/styles'
import { TooltipProps } from '@mui/material/Tooltip'
import HelpOutlineTwoTone from '@mui/icons-material/HelpOutlineTwoTone'

export type HelpPopoverProps = {
  markdownText: string
  helpUrl?: string
  placement?: TooltipProps['placement']
  showCloseButton?: boolean
  className?: string
  containerSx?: SxProps
  iconSx?: SxProps
  Icon?: React.ComponentType<{ className?: string; sx?: SxProps }>
}

export function HelpPopover({
  markdownText,
  helpUrl,
  placement = 'bottom',
  showCloseButton = true,
  className = '',
  iconSx,
  containerSx,
  Icon = HelpOutlineTwoTone,
}: HelpPopoverProps) {
  const actionButtonConfig = helpUrl
    ? {
        content: <>More info</>,
        closePopoverOnClick: true,
        onClick: () => window.open(helpUrl, '_blank'),
        color: 'primary' as ButtonProps['color'],
      }
    : undefined
  return (
    <>
      <MarkdownPopover
        contentProps={{ markdown: markdownText }}
        placement={placement}
        actionButton={actionButtonConfig}
        showCloseButton={showCloseButton}
        maxWidth="350px"
        containerSx={containerSx}
      >
        <Icon className={`HelpButton ${className}`} sx={iconSx} />
      </MarkdownPopover>
    </>
  )
}
