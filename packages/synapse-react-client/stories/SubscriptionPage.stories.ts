import { Meta, StoryObj } from '@storybook/react'
import SubscriptionPage from '../src/components/SubscriptionPage'

const meta = {
  title: 'Synapse/Following/SubscriptionPage',
  component: SubscriptionPage,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SubscriptionPage',
  args: {},
}
