import { Meta, StoryObj } from '@storybook/react'
import { MeetAccessRequirementCard } from '../src/lib/containers/download_list_v2/MeetAccessRequirementCard'

const meta = {
  title: 'Download/MeetAccessRequirementCard',
  component: MeetAccessRequirementCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    accessRequirementId: 5592528,
  },
}
