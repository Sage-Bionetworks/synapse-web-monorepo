import { Meta, StoryObj } from '@storybook/react'
import { AccountLevelBadge } from '../src/lib/containers/AccountLevelBadge'

const meta = {
  title: 'UI/AccountLevelBadge',
  component: AccountLevelBadge,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Registered: Story = {
  args: {
    userId: '3385021',
  },
}

export const Certified: Story = {
  args: {
    userId: '345424',
  },
}

export const Validated: Story = {
  args: {
    userId: '273980',
  },
}
