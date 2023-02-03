import { Meta, StoryObj } from '@storybook/react'
import UserProfileLinks from '../src/lib/containers/user_profile_links/UserProfileLinks'

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
