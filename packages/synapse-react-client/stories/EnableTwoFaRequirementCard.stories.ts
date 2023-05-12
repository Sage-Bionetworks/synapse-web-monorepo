import { Meta, StoryObj } from '@storybook/react'
import { EnableTwoFaRequirementCard } from '../src/lib/containers/download_list_v2/EnableTwoFaRequirementCard'

const meta = {
  title: 'Download/EnableTwoFaRequirementCard',
  component: EnableTwoFaRequirementCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    // TODO: Replace with AR that has a 2FA requirement
    accessRequirementId: 5592528,
  },
}
