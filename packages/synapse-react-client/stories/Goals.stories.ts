import { Meta, StoryObj } from '@storybook/react'
import Goals from '../src/lib/containers/home_page/goals/Goals'

const meta = {
  title: 'Home Page/Goals',
  component: Goals,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn22315959',
  },
}
