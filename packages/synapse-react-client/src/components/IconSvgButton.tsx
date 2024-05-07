import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import IconSvg, { IconName } from './IconSvg/IconSvg'

export type IconSvgButtonProps = {
  icon: IconName
  tooltipText: string
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
  href?: string
}
export function IconSvgButton(props: IconSvgButtonProps) {
  const { icon, tooltipText, onClick, disabled, href } = props
  const iconSvg = <IconSvg icon={icon} wrap={false} />
  return (
    <Tooltip key={tooltipText} title={tooltipText} placement={'top'}>
      <span>
        {href ? (
          <IconButton
            color="primary"
            disabled={disabled}
            aria-label={tooltipText}
            href={href}
          >
            {iconSvg}
          </IconButton>
        ) : onClick ? (
          <IconButton
            color="primary"
            disabled={disabled}
            aria-label={tooltipText}
            onClick={onClick}
          >
            {iconSvg}
          </IconButton>
        ) : (
          <></>
        )}
      </span>
    </Tooltip>
  )
}
