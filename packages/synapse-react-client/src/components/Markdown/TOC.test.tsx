import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { getUseQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import MarkdownSynapse from './MarkdownSynapse/MarkdownSynapse'
import { vi, describe, beforeAll, it } from 'vitest'
import {
  useGetWikiPage,
  useGetWikiAttachments,
} from '@/synapse-queries/wiki/useWiki'

vi.mock('@/synapse-queries/wiki/useWiki', () => ({
  useGetWikiPage: vi.fn(),
  useGetWikiAttachments: vi.fn(),
}))

const mockUseGetWikiPage = vi.mocked(useGetWikiPage)
const mockUseGetWikiAttachments = vi.mocked(useGetWikiAttachments)

describe('renders without crashing', () => {
  beforeAll(() => {
    mockUseGetWikiAttachments.mockReturnValue(
      getUseQuerySuccessMock({ list: [] }),
    )
  })
  const mockOwnerId = 'mock_owner_id'
  const mockWikiId = 'mock_wiki_id'

  it('renders a table of contents without crashing', async () => {
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        markdown: '${toc}\n#Heading1',
        id: '1',
        modifiedBy: `${MOCK_USER_ID}`,
        modifiedOn: new Date().toISOString(),
        title: 'toc',
        attachmentFileHandleIds: [],
        createdBy: `${MOCK_USER_ID}`,
        createdOn: new Date().toISOString(),
        etag: 'etag',
      }),
    )

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
    mockUseGetWikiPage.mockReturnValue(
      getUseQuerySuccessMock({
        markdown: "${toc}\n#Heading1\n##! Don't show me!",
        id: '1',
        modifiedBy: `${MOCK_USER_ID}`,
        modifiedOn: new Date().toISOString(),
        title: 'toc',
        attachmentFileHandleIds: [],
        createdBy: `${MOCK_USER_ID}`,
        createdOn: new Date().toISOString(),
        etag: 'etag',
      }),
    )

    render(<MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />, {
      wrapper: createWrapper(),
    })

    const tocLinks = await screen.findAllByRole<HTMLAnchorElement>('link')
    const headings = await screen.findAllByRole<HTMLHeadingElement>('heading')

    expect(tocLinks).toHaveLength(1)
    expect(headings).toHaveLength(2)
  })
})
