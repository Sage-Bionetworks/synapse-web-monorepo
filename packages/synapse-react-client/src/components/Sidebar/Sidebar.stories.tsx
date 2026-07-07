import { Meta, StoryObj } from '@storybook/react-vite'
import Sidebar from './Sidebar'

const meta = {
  title: 'Synapse/Sidebar',
  component: Sidebar,
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SidebarDemo: Story = {
  args: {},
}
