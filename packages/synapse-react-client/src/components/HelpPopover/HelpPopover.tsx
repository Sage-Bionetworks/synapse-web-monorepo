import React from 'react'
import { MarkdownPopover } from '../Markdown/MarkdownPopover'
import { ButtonProps, TooltipProps } from '@mui/material'
import { HelpOutlineTwoTone } from '@mui/icons-material'

export type HelpPopoverProps = {
  markdownText: string
  helpUrl?: string
  placement?: TooltipProps['placement']
  showCloseButton?: boolean
  className?: string
}

export const HelpPopover: React.FunctionComponent<HelpPopoverProps> = ({
  markdownText,
  helpUrl,
  placement = 'bottom',
  showCloseButton = true,
  className = '',
}: HelpPopoverProps) => {
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
      >
        <HelpOutlineTwoTone className={`HelpButton ${className}`} />
      </MarkdownPopover>
    </>
  )
}
