import { Meta, StoryObj } from '@storybook/react'
import { DiscussionThread } from '../src/lib/containers/discussion_forum/DiscussionThread'

const meta = {
  title: 'Synapse/DiscussionThread',
  component: DiscussionThread,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DiscussionThreadDemo: Story = {
  args: {
    threadId: '1138',
    limit: 30,
  },
}
