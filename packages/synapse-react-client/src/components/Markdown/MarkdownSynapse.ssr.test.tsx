// @vitest-environment node

/**
 * Server-side rendering (SSR) / SSG-prerender regression tests for
 * MarkdownSynapse.
 *
 * These run in the `node` Vitest environment, where there is NO `document`,
 * `window`, `DOMParser`, `Node`, or `HTMLElement` global. They guard against
 * reintroducing browser-only globals into the markdown render path, which
 * would crash React Router's `ssr: false` prerender step.
 *
 * Rendering is done with `react-dom/server`'s `renderToStaticMarkup` rather
 * than Testing Library, since the latter requires a DOM.
 */
import { getUseQueryIdleMock } from '@/testutils/ReactQueryMockUtils'
import {
  useGetWikiAttachments,
  useGetWikiPage,
} from '@/synapse-queries/wiki/useWiki'
import { renderToStaticMarkup } from 'react-dom/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import MarkdownSynapse from './MarkdownSynapse'
import { markdownToPlainText, stripHTML } from './MarkdownUtils'

// The widget hooks would otherwise try to fetch data; stub them out so the
// component renders purely from the `markdown` prop.
vi.mock('@/synapse-queries/wiki/useWiki')

const mockUseGetWikiPage = vi.mocked(useGetWikiPage)
const mockUseGetWikiAttachments = vi.mocked(useGetWikiAttachments)

describe('MarkdownSynapse SSR (node environment)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetWikiPage.mockReturnValue(getUseQueryIdleMock())
    mockUseGetWikiAttachments.mockReturnValue(getUseQueryIdleMock())
  })

  it('confirms the test runs without browser DOM globals', () => {
    expect(typeof document).toBe('undefined')
    expect(typeof window).toBe('undefined')
    expect(typeof DOMParser).toBe('undefined')
    expect(typeof HTMLElement).toBe('undefined')
  })

  it('renders markdown to static HTML on the server', () => {
    const markdown = [
      '# Heading One',
      '',
      'Some **bold** and _italic_ text with a [link](https://www.synapse.org).',
      '',
      '## Heading Two',
      '',
      '- item one',
      '- item two',
    ].join('\n')

    let html = ''
    expect(() => {
      html = renderToStaticMarkup(<MarkdownSynapse markdown={markdown} />)
    }).not.toThrow()

    expect(html).toContain('Heading One')
    expect(html).toContain('Heading Two')
    expect(html).toContain('item one')
    expect(html).toContain('href="https://www.synapse.org"')
  })

  it('renders content with invalid nesting (block inside inline) without throwing', () => {
    // A <div> nested inside an inline element exercises fixInvalidNesting,
    // which previously walked a live DOM produced by `new DOMParser()`.
    const markdown =
      '<a href="https://www.synapse.org"><div>block content</div></a>'

    let html = ''
    expect(() => {
      html = renderToStaticMarkup(<MarkdownSynapse markdown={markdown} />)
    }).not.toThrow()

    expect(html).toContain('block content')
  })

  it('stripHTML works without a DOM', () => {
    expect(stripHTML('<p>Hello <strong>world</strong> &amp; friends</p>')).toBe(
      'Hello world & friends',
    )
  })

  it('markdownToPlainText works without a DOM', () => {
    expect(markdownToPlainText('# Title\n\nSome **text**')).toContain('Title')
    expect(markdownToPlainText('# Title\n\nSome **text**')).toContain('text')
  })
})
