import { SxProps } from '@mui/material'
import { ComplexMenu } from '../../../menu/ComplexMenu'
import IconSvg, { IconName } from '../../../IconSvg/IconSvg'
import { DropdownMenuItem, DropdownMenuProps } from '../../../menu/DropdownMenu'
import { IconSvgButtonProps } from '../../../IconSvgButton'
import { MouseEvent } from 'react'

// Represents the two types of dropdown menus that will be displayed on the entity page
type EntityActionMenuDropdownMenuType = 'DOWNLOAD' | 'PRIMARY'

type EntityActionMenuDropdownMenuConfiguration = {
  visible: boolean
  tooltipText?: string
  disabled?: boolean
}

export type ActionConfiguration = {
  visible: boolean
  text: string
  disabled?: boolean
  tooltipText?: string
  onClick?: (e: MouseEvent) => void
  href?: string
}

export type ActionConfigurationMap = Record<string, ActionConfiguration>

export type MenuConfigurationMap = Record<
  EntityActionMenuDropdownMenuType,
  EntityActionMenuDropdownMenuConfiguration
>

export type ActionViewProps = {
  action: string
  icon?: IconName
  textSx?: SxProps
  iconSx?: SxProps
}

export type EntityActionMenuLayout = {
  buttonActions: ActionViewProps[]
  downloadMenuActions: ActionViewProps[][]
  primaryMenuActions: ActionViewProps[][]
  primaryMenuText: string
  primaryMenuEndIcon: IconName
  menuButtonSx?: SxProps
}

export type EntityActionMenuProps = {
  /* Maps a unique action string to a dynamic configuration for that particular action */
  actionConfiguration: ActionConfigurationMap
  /* Maps each dropdown menu to a dynamic configuration for that particular menu */
  menuConfiguration: MenuConfigurationMap
  /* Defines the layout of the actions. Typically depends on just the entity type and area. */
  layout: EntityActionMenuLayout
}

/*
 * All visible actions should be specified in the layout, but this is not guaranteed at compile time.
 * Find all visible actions in the action configuration that are not in the layout.
 */
function getUnmappedActions(
  actionConfiguration: ActionConfigurationMap,
  layout: EntityActionMenuLayout,
): ActionConfigurationMap {
  return Object.fromEntries(
    Object.entries(actionConfiguration).filter(([action, config]) => {
      // We don't care about actions that are not configured or should not be visible
      if (!config || !config.visible) {
        return false
      }

      const allLayoutActions: ActionViewProps[] = [
        ...layout.buttonActions,
        ...layout.primaryMenuActions.flat(),
        ...layout.downloadMenuActions.flat(),
      ]
      // Action is unmapped if it's visible and the layout doesn't have it
      return !allLayoutActions.some(
        layoutAction => layoutAction.action === action,
      )
    }),
  )
}

/**
 * Given a group of dropdown menu items and an action configuration,
 * return a list of dropdown menu items with non-visible and non-configured actions removed.
 * @param group
 * @param actionConfiguration
 */
function mapAndFilterItemsInMenuGroup(
  group: ActionViewProps[],
  actionConfiguration: ActionConfigurationMap,
): DropdownMenuItem[] {
  return group.reduce(
    (itemAcc: DropdownMenuItem[], actionViewProps: ActionViewProps) => {
      const configForAction = actionConfiguration[actionViewProps.action]
      // Only show the item if it's configured + visible
      if (configForAction && configForAction.visible) {
        itemAcc.push({
          text: configForAction.text ?? actionViewProps.action,
          onClick: configForAction.onClick,
          href: configForAction.href,
          tooltipText: configForAction.tooltipText,
          disabled: configForAction.disabled,
          icon: actionViewProps.icon,
          textSx: actionViewProps.textSx,
          iconSx: actionViewProps.iconSx,
        })
      }
      return itemAcc
    },
    [],
  )
}

/**
 * Given a list of groups of dropdown menu actions, returns a list of dropdown menu item
 * groups where non-visible actions have been removed, and groups with no visible actions
 * have been removed.
 * @param menuActions
 * @param actionConfiguration
 */
function mapAndFilterMenuGroups(
  menuActions: ActionViewProps[][],
  actionConfiguration: ActionConfigurationMap,
): DropdownMenuItem[][] {
  return menuActions.reduce(
    (groupAcc: DropdownMenuItem[][], group: ActionViewProps[]) => {
      const itemGroup = mapAndFilterItemsInMenuGroup(group, actionConfiguration)
      // Only show the group if it contains visible items
      if (itemGroup.length > 0) {
        groupAcc.push(itemGroup)
      }
      return groupAcc
    },
    [],
  )
}

/**
 * The EntityActionMenu renders a menu that displays the actions that can be invoked on an Entity page.
 */
export default function EntityActionMenu(props: EntityActionMenuProps) {
  const { actionConfiguration, menuConfiguration, layout } = props

  /*
   * All actions should be specified in the layout, but this is not guaranteed at compile time.
   * Find all visible actions in the action configuration that are not in the layout.
   */
  const unmappedActions = getUnmappedActions(actionConfiguration, layout)
  // Warn if unmapped actions were found and push them on to the layout.
  if (Object.entries(unmappedActions).length > 0) {
    console.warn(
      'Actions are visible but have not been configured in the layout:',
      Object.entries(unmappedActions).map(entry => entry[0]),
    )
    // Modify the layout: put the unmapped actions in their own group at the top of the menu
    layout.primaryMenuActions.unshift(
      Object.entries(unmappedActions).map(
        (entry): ActionViewProps => ({
          action: entry[0],
        }),
      ),
    )
  }

  // Map button actions to an IconButtonConfiguration and omit non-visible actions
  const iconButtonConfigs: IconSvgButtonProps[] = layout.buttonActions.reduce(
    (acc: IconSvgButtonProps[], buttonViewProps: ActionViewProps) => {
      const configForAction = actionConfiguration[buttonViewProps.action]
      if (configForAction && configForAction.visible) {
        let onClick = configForAction.onClick
        if (onClick == null && !configForAction.href) {
          console.warn(`No handler registered for ${buttonViewProps.action}`)
          onClick = () => {
            console.warn(`No handler registered for ${buttonViewProps.action}`)
          }
        }
        acc.push({
          icon: buttonViewProps.icon as IconName,
          onClick: onClick,
          tooltipText: configForAction.text,
          disabled: configForAction.disabled,
          href: configForAction.href,
        })
      }
      return acc
    },
    [],
  )

  const downloadMenuConfig: DropdownMenuProps = {
    dropdownButtonText: 'Download Options',
    convertSingleItemToButton: true,
    renderMenuIfNoItems: false,
    buttonTooltip: menuConfiguration.DOWNLOAD.tooltipText,
    buttonProps: {
      disabled: menuConfiguration.DOWNLOAD.disabled,
      endIcon: <IconSvg icon={'download'} wrap={false} />,
    },
    items: mapAndFilterMenuGroups(
      layout.downloadMenuActions,
      actionConfiguration,
    ),
  }

  const primaryMenuConfig: DropdownMenuProps = {
    dropdownButtonText: layout.primaryMenuText,
    convertSingleItemToButton: true,
    renderMenuIfNoItems: false,
    buttonProps: {
      endIcon: <IconSvg icon={layout.primaryMenuEndIcon} wrap={false} />,
    },
    items: mapAndFilterMenuGroups(
      layout.primaryMenuActions,
      actionConfiguration,
    ),
  }

  return (
    <ComplexMenu
      iconButtons={iconButtonConfigs}
      dropdownMenus={[downloadMenuConfig, primaryMenuConfig]}
    />
  )
}

export const EXPORTED_FOR_UNIT_TESTING = {
  getUnmappedActions,
  mapAndFilterItemsInMenuGroup,
  mapAndFilterMenuGroups,
}
