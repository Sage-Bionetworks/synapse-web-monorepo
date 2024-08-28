import { Meta, StoryObj } from '@storybook/react'
import ErrorPage, { SynapseErrorType } from './ErrorPage'
import { fn } from '@storybook/test'

const meta = {
  title: 'Synapse/ErrorPage',
  args: {
    gotoPlace: fn()
  }
  component: ErrorPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Maintenance: Story = {
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon.",
    gotoPlace: (href: string) => {
      window.alert(`ErrorPage calling back to change route to ${href}`)
    },
  },
}

export const NoAccess: Story = {
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    gotoPlace: (href: string) => {
      window.alert(`ErrorPage calling back to change route to ${href}`)
    },
    entityId: 'syn12345',
  },
}

export const Unavailable: Story = {
  args: {
    type: SynapseErrorType.NOT_FOUND,
    gotoPlace: (href: string) => {
      window.alert(`ErrorPage calling back to change route to ${href}`)
    },
  },
}
