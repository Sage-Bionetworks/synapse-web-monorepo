import { Meta, StoryObj } from '@storybook/react'
import UserSearchBox from '../src/lib/containers/UserSearchBox'

const meta = {
  title: 'UI/UserSearchBox',
  component: UserSearchBox,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
