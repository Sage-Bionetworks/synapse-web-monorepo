import { Meta, StoryObj } from '@storybook/react-vite'
import IconSvg from '../IconSvg/IconSvg'
import { ComplexMenu } from './ComplexMenu'

const meta = {
  title: 'UI/ComplexMenu',
  component: ComplexMenu,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const onClickHandler = (item: any) => () => {
  console.log('Item clicked', item)
}

export const Demo: Story = {
  args: {
    iconButtons: [
      {
        icon: 'edit',
        tooltipText: 'This is an icon button',
        onClick: onClickHandler('edit icon'),
      },
      {
        icon: 'label',
        tooltipText: 'View annotations',
        onClick: onClickHandler('label icon'),
      },
      {
        icon: 'createVersion',
        tooltipText: 'Create new version',
        onClick: onClickHandler('createVersion icon'),
      },
    ],
    dropdownMenus: [
      {
        dropdownButtonText: 'You can have...',
        buttonProps: {
          endIcon: <IconSvg icon="upload" wrap={false} />,
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
      {
        dropdownButtonText: '...multiple dropdown menus!',
        buttonProps: {
          endIcon: <IconSvg icon="download" wrap={false} />,
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
    ],
  },
}
