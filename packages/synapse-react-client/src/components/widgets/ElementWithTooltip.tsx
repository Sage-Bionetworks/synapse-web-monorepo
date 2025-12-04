import React from 'react'
import { Menu, Tooltip } from '@mui/material'
import {
  ComponentElement,
  CSSProperties,
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react'
import IconSvg, { IconSvgProps } from '../IconSvg/IconSvg'
import { Icon } from '../row_renderers/utils'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'

type CustomImageProps = {
  svgImg: ComponentElement<any, any>
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

type ElementWithTooltipProps = PropsWithChildren<{
  image?: IconSvgProps | CustomImageProps
  imageColor?: string
  tooltipText: string
  callbackFn?: () => void
  className?: string
  tooltipVisualProps?: Partial<TooltipVisualProps>
  darkTheme?: boolean
  size?: string
  icon?: ReactNode
  /** The items to show in the menu -- NOTE: this cannot be a Fragment!
   * @see https://stackoverflow.com/questions/75083605/mui-the-menu-component-doesnt-accept-a-fragment-as-a-child-consider-providing
   */
  menuItems?: React.ReactNode
}>

function getTooltipTriggerContents(
  image: IconSvgProps | CustomImageProps,
  imageColor: string | undefined,
  size: CSSProperties['width'] | undefined,
) {
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
  menuItems,
}: ElementWithTooltipProps): React.ReactNode => {
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  //if there is no callbackFn - assume it's a toggle

  let tooltipTrigger: ReactNode
  if (!children) {
    tooltipTrigger = (
      <button
        tabIndex={0}
        className={`ElementWithTooltip SRC-hand-cursor SRC-grey-background-hover ${className} ${
          darkTheme ? 'dark-theme' : ''
        } `}
        onClick={e => {
          if (callbackFn) {
            callbackFn()
          } else {
            // open dropdown menu
            handleClick(e)
          }
        }}
        aria-label={tooltipText}
      >
        {tooltipTriggerContents}
      </button>
    )
  } else {
    tooltipTrigger = <div className="SRC-hand-cursor">{children}</div>
  }

  return (
    <>
      <Tooltip
        title={tooltipText}
        enterNextDelay={TOOLTIP_DELAY_SHOW}
        placement={place}
        data-testid="ElementTooltip"
      >
        {tooltipTrigger}
      </Tooltip>
      {menuItems && (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuItems}
        </Menu>
      )}
    </>
  )
}
