import { Meta, StoryObj } from '@storybook/react'
import { SageResourcesPopover } from './SageResourcesPopover'

const meta = {
  title: 'Home Page/SageResources',
  component: SageResourcesPopover,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sourceAppConfigTableID: 'syn45291362',
  },
}
