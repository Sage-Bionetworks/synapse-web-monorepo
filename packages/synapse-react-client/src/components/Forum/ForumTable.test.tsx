import { MOCK_FORUM_ID } from '@/mocks/discussion/mock_discussion'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { DiscussionFilter } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { ForumTable, ForumTableProps } from './ForumTable'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const ENTITY_THREADS_URL = `${REPO_ORIGIN}${ENTITY_ID(':id')}/threads`

const forumProps: ForumTableProps = {
  forumId: MOCK_FORUM_ID,
  filter: DiscussionFilter.EXCLUDE_DELETED,
  limit: 1,
  onClickLink: vi.fn(),
}

function renderComponent(props: ForumTableProps) {
  render(<ForumTable {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('ForumTable', () => {
  beforeAll(() => {
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('shows a page of the forum threads', async () => {
    renderComponent(forumProps)

    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    const rows = await within(tbody).findAllByRole('row')
    expect(rows).toHaveLength(1)
  })

  it('shows the threads that reference an entity', async () => {
    const requestedEntityIds: string[] = []
    server.use(
      http.get(ENTITY_THREADS_URL, ({ params }) => {
        requestedEntityIds.push(params.id as string)
        return HttpResponse.json({
          results: [
            {
              id: '1',
              projectId: 'syn100',
              title: 'Thread about syn123',
              createdBy: '1000',
              activeAuthors: [],
              numberOfReplies: 0,
              numberOfViews: 0,
              lastActivity: '2026-01-01T00:00:00.000Z',
              isPinned: false,
            },
          ],
          totalNumberOfResults: 1,
        })
      }),
    )

    renderComponent({ entityId: 'syn123', limit: 1, onClickLink: vi.fn() })

    await screen.findByText('Thread about syn123')
    expect(requestedEntityIds).toEqual(['syn123'])
  })
})
