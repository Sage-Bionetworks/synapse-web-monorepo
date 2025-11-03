import { Meta, StoryObj } from '@storybook/react-vite'

import Logout from './Logout'
import { fn } from 'storybook/test'

const meta = {
  title: 'Authentication/Logout',
  component: Logout,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    callback: fn(),
  },
}
