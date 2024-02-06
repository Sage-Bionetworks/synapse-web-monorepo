import React from 'react'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { Dropdown } from 'react-bootstrap'
import { Icon } from '../row_renderers/utils'
import IconSvg, { IconSvgProps } from '../IconSvg/IconSvg'
import { Tooltip } from '@mui/material'

type CustomImageProps = {
  svgImg: React.ComponentElement<any, any>
  altText: string
}

export type TooltipVisualProps = {
  delayShow: number
  place: 'top' | 'right' | 'bottom' | 'left'
  type: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light'
  effect: 'float' | 'solid'
  border?: boolean
}

const DEFAULT_TOOLTIP_VISUAL_PROPS: Partial<TooltipVisualProps> = {
  place: 'top',
}

/*****************************************
 *  The control needs to either have a child element or needs to have an image supplied
 *  If the child element is supplied the control renders the child applying additional properties
 *  If the image is supplied the control renders a clickable image
 *  If there are no children and callback Fn is not supplied it is assumed to be a a dropdown trigger
 */

type ElementWithTooltipProps = React.PropsWithChildren<{
  image?: IconSvgProps | CustomImageProps
  imageColor?: string
  tooltipText: string
  callbackFn?: () => void
  className?: string
  tooltipVisualProps?: Partial<TooltipVisualProps>
  darkTheme?: boolean
  size?: string
  icon?: React.ReactNode
}>

function getTooltipTriggerContents(
  image: IconSvgProps | CustomImageProps,
  imageColor: string | undefined,
  size: React.CSSProperties['width'] | undefined,
): JSX.Element {
  if ('svgImg' in image) {
    return image.svgImg
  } else {
    return <IconSvg {...image} sx={{ color: imageColor, width: size }} />
  }
}

export const ElementWithTooltip = ({
  image,
  callbackFn,
  tooltipText,
  className = '',
  imageColor,
  tooltipVisualProps = DEFAULT_TOOLTIP_VISUAL_PROPS,
  children,
  darkTheme,
  size,
  icon,
}: ElementWithTooltipProps) => {
  const { place } = tooltipVisualProps
  const iconComponent = icon ? (
    typeof icon === 'string' ? (
      <Icon type={icon}></Icon>
    ) : (
      icon
    )
  ) : undefined
  const tooltipTriggerContents = iconComponent
    ? iconComponent
    : image
    ? getTooltipTriggerContents(image, imageColor, size)
    : children || <></>

  //if there is no callbackFn - assume it's a toggle

  let tooltipTrigger: JSX.Element
  if (!children) {
    tooltipTrigger = callbackFn ? (
      <button
        tabIndex={0}
        className={`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
        onKeyPress={() => callbackFn()}
        onClick={() => callbackFn()}
        aria-label={tooltipText}
      >
        {tooltipTriggerContents}
      </button>
    ) : (
      <Dropdown.Toggle
        className={`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
        variant={'light'}
        aria-label={tooltipText}
      >
        {tooltipTriggerContents}
      </Dropdown.Toggle>
    )
  } else {
    tooltipTrigger = <div className="SRC-hand-cursor">{children}</div>
  }

  return (
    <Tooltip
      title={tooltipText}
      enterNextDelay={TOOLTIP_DELAY_SHOW}
      placement={place}
      data-testid="ElementTooltip"
    >
      {tooltipTrigger}
    </Tooltip>
  )
}
