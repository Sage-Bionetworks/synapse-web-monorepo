import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComplexMenu, ComplexMenuProps } from './ComplexMenu'

const DROPDOWN_BUTTON_TEXT = 'Open Dropdown Menu'
const onClickFn = jest.fn()
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

const defaultProps: ComplexMenuProps = {
  iconButtons: [
    {
      icon: 'article',
      tooltipText: 'Icon button tooltip',
      onClick: () => {
        onClickFn('Icon Button 1')
      },
    },
  ],
  dropdownMenus: [
    {
      items: [
        [
          createDropdownItemConfig('Group 1 - Item 1'),
          createDropdownItemConfig('Group 1 - Item 2'),
        ],
        [createDropdownItemConfig('Group 2 - Item 1')],
      ],
      dropdownButtonText: DROPDOWN_BUTTON_TEXT,
    },
  ],
}

function renderComponent(props: ComplexMenuProps) {
  render(<ComplexMenu {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('ComplexMenu Tests', function () {
  afterEach(() => jest.clearAllMocks())
  it('Renders an icon button', async () => {
    renderComponent(defaultProps)
    const buttonWrapperForTooltipAndButton = await screen.findAllByLabelText(
      'Icon button tooltip',
    )
    const iconButton = buttonWrapperForTooltipAndButton[1]

    await userEvent.click(iconButton)

    await waitFor(() => expect(onClickFn).toHaveBeenCalledWith('Icon Button 1'))
  })

  it('Renders a dropdown menu', async () => {
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
})
