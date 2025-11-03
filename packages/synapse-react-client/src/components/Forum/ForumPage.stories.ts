import { MOCK_FORUM_ID } from '@/mocks/discussion/mock_discussion'
import { Meta, StoryObj } from '@storybook/react-vite'
import { ForumPage } from './ForumPage'

const meta = {
  title: 'Synapse/ForumPage',
  component: ForumPage,
  args: {
    onClickLink: () => alert('This functionality has not been implemented yet'),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ForumPageDemo: Story = {
  parameters: {
    stack: 'mock',
  },
  args: {
    forumId: MOCK_FORUM_ID,
    limit: 5,
  },
}

export const ProdHelpForum: Story = {
  parameters: {
    stack: 'production',
  },

  args: {
    forumId: '1032',
    limit: 10,
  },
}
