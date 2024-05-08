import React from 'react'
import {
  IconButton,
  IconButtonProps,
  SxProps,
  Tooltip,
  TooltipProps,
} from '@mui/material'
import IconSvg, { IconName } from './IconSvg/IconSvg'

export type IconSvgButtonProps = Omit<IconButtonProps, 'children'> & {
  icon: IconName
  tooltipText?: string
  href?: string
  iconButtonSx?: SxProps
  iconSx?: SxProps
} & Pick<TooltipProps, 'placement'>

export function IconSvgButton(props: IconSvgButtonProps) {
  const {
    icon,
    tooltipText,
    onClick,
    disabled,
    href,
    iconSx,
    iconButtonSx,
    color,
    size,
    placement = 'top',
  } = props
  const iconSvg = (
    <IconSvg icon={icon} wrap={false} fontSize={'inherit'} sx={iconSx} />
  )
  const button = (
    <span>
      {href ? (
        <IconButton
          color={color}
          disabled={disabled}
          aria-label={tooltipText}
          href={href}
          sx={iconButtonSx}
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
          sx={iconButtonSx}
          size={size}
        >
          {iconSvg}
        </IconButton>
      ) : (
        <></>
      )}
    </span>
  )
  return tooltipText ? (
    <Tooltip key={tooltipText} title={tooltipText} placement={placement}>
      {button}
    </Tooltip>
  ) : (
    button
  )
}
