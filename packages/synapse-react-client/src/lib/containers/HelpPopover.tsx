import React from 'react'
import { MarkdownPopover } from './MarkdownPopover'
import { Placement } from 'react-bootstrap/esm/Overlay'
import { HelpOutlineTwoTone } from '@mui/icons-material'

export type HelpPopoverProps = {
  markdownText: string
  helpUrl?: string
  placement?: Placement
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
        variant: 'primary',
      }
    : undefined
  return (
    <>
      <MarkdownPopover
        contentProps={{ markdown: markdownText }}
        placement={placement}
        actionButton={actionButtonConfig}
        showCloseButton={showCloseButton}
        strategy="fixed"
        style={{ maxWidth: '350px' }}
      >
        <HelpOutlineTwoTone className={`HelpButton ${className}`} />
      </MarkdownPopover>
    </>
  )
}
