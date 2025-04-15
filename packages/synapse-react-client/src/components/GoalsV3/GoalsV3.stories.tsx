import { Meta, StoryObj } from '@storybook/react'
import GoalsV3 from './GoalsV3'

const meta = {
  title: 'Cards/GoalsV3',
  component: GoalsV3,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn66051704',
  },
}
