import { Meta, StoryObj } from '@storybook/react'
import Goals from '../src/components/Goals/Goals'

const meta = {
  title: 'Home Page/Goals',
  component: Goals,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn22315959',
  },
}
