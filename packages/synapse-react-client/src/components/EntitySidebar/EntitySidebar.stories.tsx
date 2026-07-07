import { Meta, StoryObj } from '@storybook/react-vite'
import EntitySidebar from './EntitySidebar'

const meta = {
  title: 'Synapse/EntitySidebar',
  component: EntitySidebar,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SidebarDemo: Story = {
  args: {
    entityId: 'syn26302617',
  },
}
