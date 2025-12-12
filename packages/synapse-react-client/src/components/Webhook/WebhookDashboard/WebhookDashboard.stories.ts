import { getHandlers } from '@/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import WebhookDashboard from './WebhookDashboard'

const meta = {
  title: 'Synapse/Webhook Dashboard',
  component: WebhookDashboard,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getHandlers(MOCK_REPO_ORIGIN)],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
