import { Meta, StoryObj } from '@storybook/react-vite'
import CuratorDashboard from './CuratorDashboard'

const meta = {
  title: 'Curator/Dashboard',
  component: CuratorDashboard,
  parameters: {
    requireLogin: true,
  },
} satisfies Meta<typeof CuratorDashboard>
export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = {
  args: {},
}
