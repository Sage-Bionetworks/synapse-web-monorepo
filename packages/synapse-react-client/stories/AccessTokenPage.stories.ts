import { Meta, StoryObj } from '@storybook/react'
import { AccessTokenPage } from '../src/components/AccessTokenPage/AccessTokenPage'

const meta = {
  title: 'Synapse/AccessTokenPage',
  component: AccessTokenPage,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    title: 'Personal Access Tokens',
    body: 'Create and manage tokens that can be used to access your Synapse account programmatically.',
  },
}
