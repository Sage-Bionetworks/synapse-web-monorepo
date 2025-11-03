import { Meta, StoryObj } from '@storybook/react-vite'
import { DiscussionThread } from './DiscussionThread'

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
