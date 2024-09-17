import { Meta, StoryObj } from '@storybook/react'
import { SynapseClientError } from 'synapse-client'
import { ErrorBanner } from './ErrorBanner'

const meta = {
  title: 'UI/ErrorBoundary',
  component: ErrorBanner,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    error: new SynapseClientError(
      403,
      'The user must be validated in order to review data access submissions.',
      '',
    ),
  },
}
