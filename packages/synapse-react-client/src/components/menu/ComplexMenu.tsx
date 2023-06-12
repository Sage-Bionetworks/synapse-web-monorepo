import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import IconSvg, { IconName } from '../IconSvg/IconSvg'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

/**
 * Configuration for an IconButton inside the ComplexMenu
 */
export type IconButtonConfiguration = {
  icon: IconName
  tooltipText: string
  onClick: (e: React.MouseEvent) => void
  disabled?: boolean
}

export type ComplexMenuProps = {
  /*
   * Configuration for IconButtons. Each entry corresponds to one button.
   * See the IconButtonConfiguration type for more info.
   */
  iconButtons?: IconButtonConfiguration[]
  /*
   * Configuration for DropdownMenus. Each entry corresponds to one dropdown menu button, which
   * itself can contain multiple groups of items.
   * See the DropdownMenuProps type for more info.
   */
  dropdownMenus?: DropdownMenuProps[]
}

/**
 * The ComplexMenu component allows you to create a generic menu with
 * icon buttons and multiple dropdown menus that contain groups of items.
 */
export function ComplexMenu(props: ComplexMenuProps) {
  const { iconButtons = [], dropdownMenus = [] } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {iconButtons.map(iconButton => {
        return (
          <Tooltip
            key={iconButton.tooltipText}
            title={iconButton.tooltipText}
            placement={'top'}
          >
            <span>
              <IconButton
                color="primary"
                disabled={iconButton.disabled}
                onClick={iconButton.onClick}
                aria-label={iconButton.tooltipText}
              >
                <IconSvg icon={iconButton.icon} wrap={false} />
              </IconButton>
            </span>
          </Tooltip>
        )
      })}
      {dropdownMenus.map((menuProps, index) => {
        return <DropdownMenu key={index} {...menuProps} />
      })}
    </Box>
  )
}
