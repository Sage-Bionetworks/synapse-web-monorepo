import { Meta, StoryObj } from '@storybook/react-vite'
import { EnableTwoFaRequirementCard } from './EnableTwoFaRequirementCard'

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
