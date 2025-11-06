import { Meta, StoryObj } from '@storybook/react-vite'
import { DropdownMenu } from './DropdownMenu'
import IconSvg from '../IconSvg/IconSvg'

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const onClickHandler = (item: any) => () => {
  console.log('Item clicked', item)
}

export const Demo: Story = {
  args: {
    dropdownButtonText: 'Dropdown Menu Button',
    buttonProps: {
      endIcon: <IconSvg icon="verticalEllipsis" wrap={false} />,
    },
    items: [
      [
        {
          text: 'Do something cool',
          onClick: onClickHandler(0),
        },
        {
          text: 'This one has a tooltip',
          tooltipText: 'Some more info',
          onClick: onClickHandler(1),
        },
        {
          text: 'This one is disabled',
          disabled: true,
          onClick: onClickHandler(3),
        },
        {
          text: 'This one has both',
          disabled: true,
          tooltipText: "You can't do this for reasons",
          onClick: onClickHandler(4),
        },
      ],
      [
        {
          text: 'You can organize actions into groups',
          onClick: onClickHandler(5),
        },
      ],
    ],
  },
}
