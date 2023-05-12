import { Meta, StoryObj } from '@storybook/react'
import UserProfileLinks from '../src/components/UserProfileLinks/UserProfileLinks'

const meta = {
  title: 'Synapse/UserProfileLinks',
  component: UserProfileLinks,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    userId: '1131050',
  },
}
