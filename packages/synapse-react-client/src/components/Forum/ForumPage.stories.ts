import { Meta, StoryObj } from '@storybook/react'
import { ForumPage } from './ForumPage'
import { MOCK_FORUM_ID } from '../../mocks/discussion/mock_discussion'

const meta = {
  title: 'Synapse/ForumPage',
  component: ForumPage,
  parameters: {
    stack: 'mock',
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ForumPageDemo: Story = {
  args: {
    forumId: MOCK_FORUM_ID,
    limit: 5,
    onClickLink: () => alert('This functionality has not been implemented yet'),
  },
}
