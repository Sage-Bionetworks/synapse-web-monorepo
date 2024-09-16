import { Meta, StoryObj } from '@storybook/react'
import { SageResourcesPopover } from './SageResourcesPopover'

const meta = {
  title: 'Home Page/SageResources',
  component: SageResourcesPopover,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const PopoverDemo: Story = {
  args: {
    sourceAppConfigTableID: 'syn45291362',
    buttonProps: {
      variant: 'text',
      className: 'nav-button nav-button-container', //base style can be adjusted (nav items in portals will require these classes)
      sx: { ml: '300px' }, //position can be modified
    },
  },
}
