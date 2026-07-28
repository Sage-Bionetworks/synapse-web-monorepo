import { Meta, StoryObj } from '@storybook/react-vite'
import CuratorDashboardRouter from './CuratorDashboardRouter'

const meta = {
  title: 'Curator/Dashboard',
  component: CuratorDashboardRouter,
  parameters: {
    requireLogin: true,
  },
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
} satisfies Meta<typeof CuratorDashboardRouter>
export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = {}
