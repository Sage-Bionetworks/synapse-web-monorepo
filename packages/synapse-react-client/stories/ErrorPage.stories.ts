import { Meta, StoryObj } from '@storybook/react'
import ErrorPage from '../src/lib/containers/error/ErrorPage'

const meta = {
  title: 'Synapse/ErrorPage',
  component: ErrorPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Maintenance: Story = {
  args: {
    image: 'maintenance',
    title: 'Sorry, Synapse is down for maintenance.',
    message: "We're busy updating Synapse for you and will be back soon.",
  },
}

export const NoAccess: Story = {
  args: {
    image: 'noAccess',
    title: 'Sorry, Synapse is down for maintenance.',
    message: "We're busy updating Synapse for you and will be back soon.",
  },
}

export const Unavailable: Story = {
  args: {
    image: 'unavailable',
    title: 'The service is currently unavailable.',
    message:
      'Something went wrong and the service is not available. Try again later',
  },
}
