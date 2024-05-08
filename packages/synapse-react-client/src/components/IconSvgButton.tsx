import React from 'react'
import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from '@mui/material'
import IconSvg, { IconName } from './IconSvg/IconSvg'

export type IconSvgButtonProps = Omit<IconButtonProps, 'children'> & {
  icon: IconName
  tooltipText?: string
  tooltipPlacement?: TooltipProps['placement']
  href?: string
}

export function IconSvgButton(props: IconSvgButtonProps) {
  const {
    icon,
    tooltipText,
    onClick,
    disabled,
    href,
    color,
    size,
    sx,
    tooltipPlacement = 'top',
  } = props
  const iconSvg = <IconSvg icon={icon} wrap={false} fontSize={'inherit'} />
  const button = (
    <>
      {href ? (
        <IconButton
          color={color}
          disabled={disabled}
          aria-label={tooltipText}
          href={href}
          sx={sx}
          size={size}
        >
          {iconSvg}
        </IconButton>
      ) : onClick ? (
        <IconButton
          color={color}
          disabled={disabled}
          aria-label={tooltipText}
          onClick={onClick}
          sx={sx}
          size={size}
        >
          {iconSvg}
        </IconButton>
      ) : (
        <></>
      )}
    </>
  )
  return tooltipText ? (
    <Tooltip key={tooltipText} title={tooltipText} placement={tooltipPlacement}>
      <span>{button}</span>
    </Tooltip>
  ) : (
    button
  )
}
