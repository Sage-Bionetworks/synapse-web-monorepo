import { Meta, StoryObj } from '@storybook/react'
import { EntityFileBrowser } from './index'

const meta = {
  title: 'Synapse/EntityFileBrowser',
  component: EntityFileBrowser,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    parentContainerId: 'syn51565244',
  },
}
