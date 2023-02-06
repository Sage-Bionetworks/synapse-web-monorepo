import { Meta, StoryObj } from '@storybook/react'
import { ForumPage } from '../src/lib/containers/discussion_forum/ForumPage'

const meta = {
  title: 'Synapse/ForumPage',
  component: ForumPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ForumPageDemo: Story = {
  args: {
    forumId: '381943',
    limit: 20,
    onClickLink: () => alert('This functionality has not been implemented yet'),
  },
}
