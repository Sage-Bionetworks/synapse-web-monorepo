import { Meta, StoryObj } from '@storybook/react-vite'
import DiscussionEmpty from './DiscussionEmpty'

const meta = {
  title: 'Synapse/DiscussionEmpty',
  component: DiscussionEmpty,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DiscussionEmptyDemo: Story = {
  args: {
    onViewForumClicked: () => {
      alert('View Forum Clicked')
    },
  },
}
