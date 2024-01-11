import { Meta, StoryObj } from '@storybook/react'
import { AccountLevelBadge } from '../AccountLevelBadge'

const meta = {
  title: 'UI/AccountLevelBadge',
  component: AccountLevelBadge,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Certified: Story = {
  args: {
    badgeType: 'certified',
  },
}

export const Validated: Story = {
  args: {
    badgeType: 'validated',
  },
}
