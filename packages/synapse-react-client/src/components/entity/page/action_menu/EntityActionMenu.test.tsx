import EntityActionMenu, {
  ActionConfiguration,
  ActionConfigurationMap,
  ActionViewProps,
  EntityActionMenuLayout,
  EntityActionMenuProps,
  EXPORTED_FOR_UNIT_TESTING,
  MenuConfigurationMap,
} from './EntityActionMenu'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

function renderComponent(props: EntityActionMenuProps) {
  return render(<EntityActionMenu {...props} />, {
    wrapper: createWrapper(),
  })
}

const onClickFn = jest.fn()
const ACTION_1 = 'action1'
const ACTION_2 = 'action2'
const ACTION_3 = 'action3'
const ACTION_4 = 'action4'

const actionConfiguration1: ActionConfiguration = {
  text: 'action 1 text',
  visible: true,
  onClick: () => {
    onClickFn(ACTION_1)
  },
}
const actionConfiguration2: ActionConfiguration = {
  text: 'action 2 text',
  visible: true,
  onClick: () => {
    onClickFn(ACTION_2)
  },
}
const actionConfiguration3: ActionConfiguration = {
  text: 'action 3 text',
  visible: true,
  onClick: () => {
    onClickFn(ACTION_3)
  },
}

const actionConfiguration4: ActionConfiguration = {
  text: 'action 4 text',
  visible: true,
  onClick: () => {
    onClickFn(ACTION_4)
  },
}

const menuConfiguration: MenuConfigurationMap = {
  DOWNLOAD: {
    visible: true,
  },
  PRIMARY: { visible: true },
}

const PRIMARY_MENU_TEXT = 'Primary Menu'
const DOWNLOAD_OPTIONS = 'Download Options'

describe('EntityActionMenu tests', () => {
  beforeEach(() => jest.clearAllMocks())

  it('Renders icon buttons', async () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [
        {
          action: ACTION_1,
          icon: 'article',
        },
      ],
      downloadMenuActions: [],
      primaryMenuActions: [],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: actionConfiguration1,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    const buttonWrapperForTooltipAndButton = await screen.findAllByLabelText(
      'action 1 text',
    )
    const iconButton = buttonWrapperForTooltipAndButton[1]

    await userEvent.click(iconButton)
    expect(onClickFn).toHaveBeenCalledWith(ACTION_1)
  })
  it('Renders the primary and dropdown menus', async () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [[{ action: ACTION_1 }, { action: ACTION_2 }]],
      primaryMenuActions: [[{ action: ACTION_3 }, { action: ACTION_4 }]],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: actionConfiguration1,
      [ACTION_2]: actionConfiguration2,
      [ACTION_3]: actionConfiguration3,
      [ACTION_4]: actionConfiguration4,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    const downloadMenu = await screen.findByRole('button', {
      name: DOWNLOAD_OPTIONS,
    })
    await userEvent.click(downloadMenu)
    const action1MenuItem = await screen.findByRole('menuitem', {
      name: actionConfiguration1.text,
    })
    await userEvent.click(action1MenuItem)
    expect(onClickFn).toHaveBeenCalledWith(ACTION_1)

    const primaryMenu = await screen.findByRole('button', {
      name: PRIMARY_MENU_TEXT,
    })
    await userEvent.click(primaryMenu)
    const action3MenuItem = await screen.findByRole('menuitem', {
      name: actionConfiguration3.text,
    })
    await userEvent.click(action3MenuItem)
    expect(onClickFn).toHaveBeenCalledWith(ACTION_3)
  })

  it('Handles an href dropdown menu item', async () => {
    const href = 'https://fake-website.gov'
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [
        [
          {
            action: ACTION_1,
          },
        ],
      ],
      primaryMenuActions: [[{ action: ACTION_2 }, { action: ACTION_3 }]],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: actionConfiguration1,
      [ACTION_2]: { ...actionConfiguration2, onClick: undefined, href: href },
      [ACTION_3]: actionConfiguration3,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    const primaryMenu = await screen.findByRole('button', {
      name: PRIMARY_MENU_TEXT,
    })
    await userEvent.click(primaryMenu)
    const action2MenuItem = await screen.findByRole('menuitem', {
      name: actionConfiguration2.text,
    })
    expect(action2MenuItem).toHaveAttribute('href', href)
  })
  it('Renders a button if there is one visible action in the primary dropdown menu', async () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [],
      // Only one action in the primary menu layout
      primaryMenuActions: [[{ action: ACTION_2 }]],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_2]: actionConfiguration2,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    // Action button is rendered instead of menu
    const actionButton = await screen.findByRole('button', {
      name: actionConfiguration2.text,
    })
    await userEvent.click(actionButton)
    expect(onClickFn).toHaveBeenCalledWith(ACTION_2)
  })

  it('Does not render the primary menu if it has no visible items', () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [],
      // Only one action in the primary menu layout
      primaryMenuActions: [],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {}

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    expect(
      screen.queryByRole('button', { name: PRIMARY_MENU_TEXT }),
    ).not.toBeInTheDocument()
  })

  it('Omits items that are not visible', () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [{ action: ACTION_1, icon: 'article' }],
      downloadMenuActions: [[{ action: ACTION_2 }]],
      primaryMenuActions: [[{ action: ACTION_3 }]],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: { ...actionConfiguration1, visible: false },
      [ACTION_2]: { ...actionConfiguration2, visible: false },
      [ACTION_3]: { ...actionConfiguration3, visible: false },
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    // No primary menu
    expect(
      screen.queryByRole('button', { name: PRIMARY_MENU_TEXT }),
    ).not.toBeInTheDocument()

    // No download menu
    expect(
      screen.queryByRole('button', { name: DOWNLOAD_OPTIONS }),
    ).not.toBeInTheDocument()

    // No icon button
    expect(
      screen.queryByRole('button', { name: actionConfiguration1.text }),
    ).not.toBeInTheDocument()
  })

  it('Omits groups that contain no visible items', async () => {
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [],
      // Each item in its own group
      primaryMenuActions: [
        [{ action: ACTION_1 }],
        [{ action: ACTION_2 }],
        [{ action: ACTION_3 }],
      ],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: actionConfiguration1,
      // Hide Action 2, which has its own group
      [ACTION_2]: { ...actionConfiguration2, visible: false },
      [ACTION_3]: actionConfiguration3,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    const primaryMenu = await screen.findByRole('button', {
      name: PRIMARY_MENU_TEXT,
    })
    await userEvent.click(primaryMenu)
    expect(await screen.findAllByRole('menuitem')).toHaveLength(2)
    // Only one separator should appear, since there are two rendered groups
    expect(await screen.findAllByRole('separator')).toHaveLength(1)
  })
  it('Inserts configured actions into the primary menu if the actions are not specified in the layout', async () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {})

    // Only one item is specified in the layout
    const layout: EntityActionMenuLayout = {
      buttonActions: [],
      downloadMenuActions: [],
      primaryMenuActions: [[{ action: ACTION_1 }]],
      primaryMenuText: PRIMARY_MENU_TEXT,
      primaryMenuEndIcon: 'verticalEllipsis',
    }

    // Three items are configured
    const actionConfiguration: ActionConfigurationMap = {
      [ACTION_1]: actionConfiguration1,
      [ACTION_2]: actionConfiguration2,
      [ACTION_3]: actionConfiguration3,
    }

    renderComponent({
      actionConfiguration,
      menuConfiguration,
      layout,
    })

    const primaryMenu = await screen.findByRole('button', {
      name: PRIMARY_MENU_TEXT,
    })
    await userEvent.click(primaryMenu)
    expect(await screen.findAllByRole('menuitem')).toHaveLength(3)
    // One separator should appear because the actions not specified in the layout are inserted into the same group
    expect(await screen.findAllByRole('separator')).toHaveLength(1)

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'Actions are visible but have not been configured in the layout:',
      [ACTION_2, ACTION_3],
    )

    consoleWarnSpy.mockRestore()
  })

  describe('getUnmappedActions', () => {
    const { getUnmappedActions } = EXPORTED_FOR_UNIT_TESTING
    it('Returns actions that are configured but not specified in layout', () => {
      const ACTION_1 = 'action1'
      const ACTION_2 = 'action2'
      const ACTION_3 = 'action3'
      const ACTION_4 = 'action4'
      const actionConfigurationMap: ActionConfigurationMap = {
        [ACTION_1]: {
          text: 'specified in icon button layout',
          visible: true,
        },
        [ACTION_2]: {
          text: 'specified in download menu layout',
          visible: true,
        },
        [ACTION_3]: {
          text: 'specified in primary menu layout',
          visible: true,
        },
        [ACTION_4]: {
          text: 'not included in layout',
          visible: true,
        },
      }
      const layout: EntityActionMenuLayout = {
        buttonActions: [{ action: ACTION_1 }],
        downloadMenuActions: [[{ action: ACTION_2 }]],
        primaryMenuActions: [[{ action: ACTION_3 }]],
        primaryMenuText: 'Menu text',
        primaryMenuEndIcon: 'verticalEllipsis',
      }

      // Call under test
      const result = getUnmappedActions(actionConfigurationMap, layout)

      expect(result).toEqual({ [ACTION_4]: actionConfigurationMap[ACTION_4] })
    })
    it('Does not return actions that are not configured', () => {
      const actionConfigurationMap: ActionConfigurationMap = {
        // No actions are configured!
      }
      const layout: EntityActionMenuLayout = {
        buttonActions: [],
        downloadMenuActions: [],
        primaryMenuActions: [],
        primaryMenuText: 'Menu text',
        primaryMenuEndIcon: 'verticalEllipsis',
      }

      // Call under test
      const result = getUnmappedActions(actionConfigurationMap, layout)

      expect(result).toEqual({})
    })

    it('Does not return hidden actions', () => {
      const actionConfigurationMap: ActionConfigurationMap = {
        hiddenAction: {
          text: 'This action is not visible',
          visible: false,
        },
      }
      const layout: EntityActionMenuLayout = {
        buttonActions: [],
        downloadMenuActions: [],
        primaryMenuActions: [],
        primaryMenuText: 'Menu text',
        primaryMenuEndIcon: 'verticalEllipsis',
      }

      // Call under test
      const result = getUnmappedActions(actionConfigurationMap, layout)

      expect(result).toEqual({})
    })
  })

  describe('mapAndFilterItemsInMenuGroup', () => {
    const { mapAndFilterItemsInMenuGroup } = EXPORTED_FOR_UNIT_TESTING
    const ACTION_1 = 'action1'
    const actionViewProp: ActionViewProps = {
      action: ACTION_1,
      icon: 'article',
      textSx: { color: 'blue' },
      iconSx: { color: 'green' },
    }
    const onClickFn = jest.fn()
    const actionConfiguration: ActionConfiguration = {
      text: 'action 1 text',
      visible: true,
      disabled: false,
      onClick: onClickFn,
      href: 'my-href',
      tooltipText: 'action 1 tooltip',
    }

    it('Properly maps a menu group to a DropdownMenuItem array', () => {
      const group: ActionViewProps[] = [actionViewProp]
      const actionConfigurationMap: ActionConfigurationMap = {
        [ACTION_1]: actionConfiguration,
      }
      // Call under test
      const result = mapAndFilterItemsInMenuGroup(group, actionConfigurationMap)

      expect(result).toEqual([
        {
          text: 'action 1 text',
          icon: 'article',
          onClick: onClickFn,
          href: 'my-href',
          tooltipText: 'action 1 tooltip',
          disabled: false,
          textSx: { color: 'blue' },
          iconSx: { color: 'green' },
        },
      ])
    })
    it('Removes items that do not have a configuration', () => {
      const group: ActionViewProps[] = [actionViewProp]
      const actionConfigurationMap: ActionConfigurationMap = {
        // Action 1 is not configured.
      }
      // Call under test
      const result = mapAndFilterItemsInMenuGroup(group, actionConfigurationMap)

      expect(result).toEqual([])
    })
    it('Removes items that are not visible', () => {
      const group: ActionViewProps[] = [actionViewProp]
      const actionConfigurationMap: ActionConfigurationMap = {
        [ACTION_1]: { ...actionConfiguration, visible: false },
      }
      // Call under test
      const result = mapAndFilterItemsInMenuGroup(group, actionConfigurationMap)

      expect(result).toEqual([])
    })
  })

  describe('mapAndFilterMenuGroups', () => {
    const { mapAndFilterMenuGroups } = EXPORTED_FOR_UNIT_TESTING

    const ACTION_1 = 'action1'
    const ACTION_2 = 'action2'
    const actionViewProp1: ActionViewProps = {
      action: ACTION_1,
      icon: 'article',
      textSx: { color: 'blue' },
      iconSx: { color: 'green' },
    }
    const actionViewProp2: ActionViewProps = {
      action: ACTION_2,
      icon: 'edit',
      textSx: { color: 'red' },
      iconSx: { color: 'purple' },
    }
    const onClickFn = jest.fn()
    const actionConfiguration1: ActionConfiguration = {
      text: 'action 1 text',
      visible: true,
      disabled: false,
      onClick: onClickFn,
      href: 'my-href',
      tooltipText: 'action 1 tooltip',
    }
    const actionConfiguration2: ActionConfiguration = {
      text: 'action 2 text',
      visible: true,
      disabled: true,
      onClick: onClickFn,
      href: 'another-href',
      tooltipText: 'action 2 tooltip',
    }
    it('Properly maps an array of menu groups to an array of DropdownMenuItem groups', () => {
      const menuActions = [[actionViewProp1], [actionViewProp2]]

      const actionConfigurationMap: ActionConfigurationMap = {
        [ACTION_1]: actionConfiguration1,
        [ACTION_2]: actionConfiguration2,
      }

      // Call under test
      const result = mapAndFilterMenuGroups(menuActions, actionConfigurationMap)

      expect(result).toEqual([
        [
          {
            text: 'action 1 text',
            icon: 'article',
            onClick: onClickFn,
            href: 'my-href',
            tooltipText: 'action 1 tooltip',
            disabled: false,
            textSx: { color: 'blue' },
            iconSx: { color: 'green' },
          },
        ],
        [
          {
            text: 'action 2 text',
            icon: 'edit',
            onClick: onClickFn,
            href: 'another-href',
            tooltipText: 'action 2 tooltip',
            disabled: true,
            textSx: { color: 'red' },
            iconSx: { color: 'purple' },
          },
        ],
      ])
    })
    it('Removes groups that have no configured/visible items', () => {
      const menuActions = [[actionViewProp1], [actionViewProp2]]

      const actionConfigurationMap: ActionConfigurationMap = {
        [ACTION_1]: { ...actionConfiguration1, visible: false },
        // Action 2 is not configured
      }

      // Call under test
      const result = mapAndFilterMenuGroups(menuActions, actionConfigurationMap)

      // Note that the empty groups were removed, i.e. the result is NOT [[], []]
      expect(result).toEqual([])
    })
  })
})
