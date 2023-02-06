import { render, screen } from '@testing-library/react'
import * as React from 'react'
import MarkdownSynapse from '../../../src/lib/containers/markdown/MarkdownSynapse'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
describe('renders without crashing', () => {
  let SynapseClient: any
  beforeAll(() => {
    SynapseClient = require('../../../src/lib/utils/SynapseClient')
    SynapseClient.getWikiAttachmentsFromEntity = jest.fn(() =>
      Promise.resolve(['']),
    )
  })
  const mockOwnerId = 'mock_owner_id'
  const mockWikiId = 'mock_wiki_id'

  it('renders a table of contents without crashing', async () => {
    SynapseClient.getEntityWiki = jest.fn(() =>
      Promise.resolve({ markdown: '${toc}\n#Heading1' }),
    )

    render(<MarkdownSynapse ownerId={mockOwnerId} wikiId={mockWikiId} />, {
      wrapper: createWrapper(),
    })

    // Render a link in the TOC that points to the corresponding heading element
    const tocLink = await screen.findByRole<HTMLAnchorElement>('link')
    const heading = await screen.findByRole<HTMLHeadingElement>('heading')
    expect(tocLink).toHaveClass('link toc-indent1')

    // TODO: Test that the link points to the header
  })

  it('renders a table of contents with a non-toc-header header', async () => {
    SynapseClient.getEntityWiki = jest.fn(() =>
      Promise.resolve({ markdown: "${toc}\n#Heading1\n##! Don't show me!" }),
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
