import { Meta, StoryObj } from '@storybook/react'
import { AccountLevelBadges } from '../AccountLevelBadges'

const meta = {
  title: 'UI/AccountLevelBadges',
  component: AccountLevelBadges,
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

export const CertifiedAndValidated: Story = {
  args: {
    userId: '273980',
  },
}
