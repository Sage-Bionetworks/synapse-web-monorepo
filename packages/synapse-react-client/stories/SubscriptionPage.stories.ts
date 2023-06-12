import { Meta, StoryObj } from '@storybook/react'
import SubscriptionPage from '../src/components/SubscriptionPage'
import { MOCK_REPO_ORIGIN } from '../src/utils/functions/getEndpoint'
import { getHandlers } from '../mocks/msw/handlers'

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
