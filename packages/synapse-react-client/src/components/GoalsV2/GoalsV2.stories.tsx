import { Meta, StoryObj } from '@storybook/react'
import Goals from './GoalsV2'

const meta = {
  title: 'Home Page/GoalsV2',
  component: Goals,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn51449135',
  },
}
