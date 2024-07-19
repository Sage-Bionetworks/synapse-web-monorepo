import { Meta, StoryObj } from '@storybook/react'
import { SynapseFooter } from './SynapseFooter'

const meta = {
  title: 'Synapse/SynapseFooter',
  component: SynapseFooter,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    portalVersion: '5M.0-asdfghjkl',
    repoVersion: '5M.1-asdfghjkl',
    srcVersion: '3.2.9999999',
    gotoPlace: (href: string) => {
      window.alert(`Footer calling back to change route to ${href}`)
    },
    reportViolationCallback: () => {
      window.alert('Footer invoked report violation callback')
    },
  },
}
