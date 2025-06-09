import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

const DROPDOWN_BUTTON_TEXT = 'Open Dropdown Menu'
const onClickFn = vi.fn()
function createDropdownItemConfig(
  text: string,
  tooltipText: string | undefined = undefined,
  disabled: boolean = false,
) {
  return {
    text,
    tooltipText,
    disabled,
    onClick: () => {
      onClickFn(text)
    },
  }
}

const defaultProps: DropdownMenuProps = {
  items: [
    [
      createDropdownItemConfig('Group 1 - Item 1'),
      createDropdownItemConfig('Group 1 - Item 2'),
    ],
    [createDropdownItemConfig('Group 2 - Item 1')],
  ],
  dropdownButtonText: DROPDOWN_BUTTON_TEXT,
}

function renderComponent(props: DropdownMenuProps) {
  render(<DropdownMenu {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('DropdownMenu Tests', function () {
  afterEach(() => vi.clearAllMocks())
  it('Renders groups of items', async () => {
    renderComponent(defaultProps)
    const dropdownButton = await screen.findByRole('button', {
      name: DROPDOWN_BUTTON_TEXT,
    })

    await userEvent.click(dropdownButton)

    const menuItems = await screen.findAllByRole('menuitem')
    expect(menuItems).toHaveLength(3)

    // There are two groups, so there should be one separator
    await screen.findByRole('separator')

    // Click an item
    const firstItem = menuItems[0]
    await userEvent.click(firstItem)
    // Action should be invoked
    await waitFor(() =>
      expect(onClickFn).toHaveBeenCalledWith('Group 1 - Item 1'),
    )
    // Menu should close
    await waitFor(() =>
      expect(screen.queryByRole('menuitem')).not.toBeInTheDocument(),
    )
  })

  describe('convertSingleItemToButton', () => {
    it('if true, renders a single button for a lone item', async () => {
      const menuItemText = 'Single Item'
      renderComponent({
        ...defaultProps,
        items: [[createDropdownItemConfig(menuItemText)]],
        convertSingleItemToButton: true,
      })
      // The dropdown button should not exist
      expect(
        screen.queryByRole('button', {
          name: DROPDOWN_BUTTON_TEXT,
        }),
      ).not.toBeInTheDocument()
      // The item should be rendered as a button
      const menuItemButton = await screen.findByRole('button', {
        name: menuItemText,
      })
      await userEvent.click(menuItemButton)

      // Action should be invoked
      await waitFor(() => expect(onClickFn).toHaveBeenCalledWith(menuItemText))
      // There are no nodes with the menuitem role
      expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
    })
    it('if false, renders the menu', async () => {
      const menuItemText = 'Single Item'
      renderComponent({
        ...defaultProps,
        items: [[createDropdownItemConfig(menuItemText)]],
        convertSingleItemToButton: false,
      })
      // The dropdown button does exist
      const dropdownButton = await screen.findByRole('button', {
        name: DROPDOWN_BUTTON_TEXT,
      })
      await userEvent.click(dropdownButton)

      // The single menu item should render normally
      await screen.findByRole('menuitem', { name: menuItemText })
    })
  })
  describe('renderMenuIfNoItems', () => {
    it('if true, renders a menu when there are no items', async () => {
      renderComponent({
        ...defaultProps,
        items: [],
        renderMenuIfNoItems: true,
      })
      // The dropdown button does exist
      const dropdownButton = await screen.findByRole('button', {
        name: DROPDOWN_BUTTON_TEXT,
      })
      await userEvent.click(dropdownButton)

      // No menu items should exist
      expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
    })
  })
  it('if false, renders nothing if there are no items', () => {
    renderComponent({
      ...defaultProps,
      items: [],
      renderMenuIfNoItems: false,
    })
    // The dropdown button should not exist(() =>
    expect(
      screen.queryByRole('button', {
        name: DROPDOWN_BUTTON_TEXT,
      }),
    ).not.toBeInTheDocument()

    // No menu items should exist
    expect(screen.queryByRole('menuitem')).not.toBeInTheDocument()
  })

  it('Shows item tooltip even if disabled', async () => {
    const menuItemText = 'Disabled Item'
    const menuItemTooltip = 'This item is disabled for reasons'
    renderComponent({
      ...defaultProps,
      items: [[createDropdownItemConfig(menuItemText, menuItemTooltip, true)]],
      convertSingleItemToButton: false,
    })

    const dropdownButton = await screen.findByRole('button', {
      name: DROPDOWN_BUTTON_TEXT,
    })
    await userEvent.click(dropdownButton)

    // The single menu item should render normally
    const menuItem = await screen.findByRole('menuitem')
    expect(menuItem).toHaveAttribute('aria-disabled', 'true')
    within(menuItem).getByText(menuItemText)

    // Hover over the item to see the tooltip
    await userEvent.hover(menuItem)
    await screen.findByText(menuItemTooltip)

    // Clicking the item should not invoke the onClick because it is disabled.
    await userEvent.click(menuItem)
    expect(onClickFn).not.toHaveBeenCalled()
  })
})
