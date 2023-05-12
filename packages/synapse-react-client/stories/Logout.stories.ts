import { Meta, StoryObj } from '@storybook/react'

import Logout from '../src/components/Authentication/Logout'

const meta = {
  title: 'Authentication/Logout',
  component: Logout,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    callback: () => {
      global.accessToken = null
    },
  },
}
