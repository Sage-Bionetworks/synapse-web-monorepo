import { getHandlers } from '@/mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import SubscriptionPage from './index'

const meta = {
  title: 'Synapse/Following/SubscriptionPage',
  component: SubscriptionPage,
  parameters: {
    stack: 'mock',
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SubscriptionPage',
  args: {},
  parameters: {
    msw: {
      handlers: { ...getHandlers(MOCK_REPO_ORIGIN) },
    },
  },
}
