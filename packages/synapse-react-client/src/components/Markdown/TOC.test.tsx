import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import MarkdownSynapse from './MarkdownSynapse'
import { http, HttpResponse } from 'msw'
import { afterAll, afterEach, beforeAll, describe, it } from 'vitest'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { WikiPage } from '@sage-bionetworks/synapse-types'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('renders without crashing', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const mockOwnerId = 'mock_owner_id'
  const mockWikiId = 'mock_wiki_id'

  function mockWikiPage(wikiPage: WikiPage) {
    server.use(
      http.get(
        `${REPO_ORIGIN}/repo/v1/entity/${mockOwnerId}/wiki/${mockWikiId}`,
        () => HttpResponse.json(wikiPage),
      ),
      http.get(
        `${REPO_ORIGIN}/repo/v1/entity/${mockOwnerId}/wiki2/${mockWikiId}/attachmenthandles`,
        () => HttpResponse.json({ list: [] }),
      ),
    )
  }

  it('renders a table of contents without crashing', async () => {
    mockWikiPage({
      markdown: '${toc}\n#Heading1',
      id: '1',
      modifiedBy: `${MOCK_USER_ID}`,
      modifiedOn: new Date().toISOString(),
      title: 'toc',
      attachmentFileHandleIds: [],
      createdBy: `${MOCK_USER_ID}`,
      createdOn: new Date().toISOString(),
      etag: 'etag',
    })

    render(<MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />, {
      wrapper: createWrapper(),
    })

    // Render a link in the TOC that points to the corresponding heading element
    const tocLink = await screen.findByRole<HTMLAnchorElement>('link')
    await screen.findByRole<HTMLHeadingElement>('heading')
    expect(tocLink).toHaveClass('link toc-indent1')

    // TODO: Test that the link points to the header
  })

  it('renders a table of contents with a non-toc-header header', async () => {
    mockWikiPage({
      markdown: "${toc}\n#Heading1\n##! Don't show me!",
      id: '1',
      modifiedBy: `${MOCK_USER_ID}`,
      modifiedOn: new Date().toISOString(),
      title: 'toc',
      attachmentFileHandleIds: [],
      createdBy: `${MOCK_USER_ID}`,
      createdOn: new Date().toISOString(),
      etag: 'etag',
    })

    render(<MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />, {
      wrapper: createWrapper(),
    })

    const tocLinks = await screen.findAllByRole<HTMLAnchorElement>('link')
    const headings = await screen.findAllByRole<HTMLHeadingElement>('heading')

    expect(tocLinks).toHaveLength(1)
    expect(headings).toHaveLength(2)
  })
})
