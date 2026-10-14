import { MOCK_FORUM_ID } from '@/mocks/discussion/mock_discussion'
import mockProject from '@/mocks/entity/mockProject'
import { DiscussionFilter } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { ForumTable } from './ForumTable'

const meta = {
  title: 'Synapse/ForumTable',
  component: ForumTable,
  parameters: {
    stack: 'mock',
  },
  args: {
    limit: 5,
    onClickLink: () => alert('This functionality has not been implemented yet'),
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const ForumThreads: Story = {
  args: {
    forumId: MOCK_FORUM_ID,
    filter: DiscussionFilter.EXCLUDE_DELETED,
  },
}

export const EntityThreads: Story = {
  args: {
    entityId: mockProject.id,
  },
}
