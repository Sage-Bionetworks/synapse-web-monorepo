import { Meta, StoryObj } from '@storybook/react'
import TimelinePhase from './TimelinePhase'

const meta = {
  title: 'Components/TimelinePhase',
  component: TimelinePhase,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    config: {
      name: 'Phase1',
      color: 'rgba(50, 171, 96, 0.5)',
    },
  },
}
