import { MOCK_FORUM_ID } from '@/mocks/discussion/mock_discussion'
import mockProject from '@/mocks/entity/mockProject'
import { ENTITY_ID } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { DiscussionFilter } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
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
    onIsEmptyChange: fn(),
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

export const EntityThreadsEmpty: Story = {
  parameters: {
    msw: {
      handlers: {
        discussion: [
          http.get(`${MOCK_REPO_ORIGIN}${ENTITY_ID(':id')}/threads`, () =>
            HttpResponse.json({ results: [], totalNumberOfResults: 0 }),
          ),
        ],
      },
    },
  },
  args: {
    entityId: mockProject.id,
    onViewForumClicked: () => alert('Navigate to the project discussion forum'),
  },
}
