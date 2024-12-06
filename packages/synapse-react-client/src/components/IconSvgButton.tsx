import {
  IconButton,
  IconButtonProps,
  Tooltip,
  TooltipProps,
} from '@mui/material'
import IconSvg, { IconName } from './IconSvg/IconSvg'

export type IconSvgButtonProps = Pick<
  IconButtonProps,
  'onClick' | 'disabled' | 'color' | 'size' | 'sx' | 'aria-label'
> & {
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
    'aria-label': ariaLabel,
  } = props
  const iconSvg = <IconSvg icon={icon} wrap={false} fontSize={'inherit'} />
  const sharedIconButtonProps: Pick<
    IconButtonProps,
    'role' | 'disabled' | 'color' | 'size' | 'sx' | 'aria-label'
  > = {
    role: 'button',
    color: color,
    disabled: disabled,
    sx: sx,
    size: size,
    'aria-label': ariaLabel ?? tooltipText,
  }
  const button = (
    <>
      {href ? (
        <IconButton {...sharedIconButtonProps} href={href}>
          {iconSvg}
        </IconButton>
      ) : onClick ? (
        <IconButton {...sharedIconButtonProps} onClick={onClick}>
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
