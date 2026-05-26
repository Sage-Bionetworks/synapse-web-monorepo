import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MarkdownTableOfContents from './MarkdownTableOfContents'

describe('MarkdownTableOfContents', () => {
  it('renders nothing when originalMarkup is empty', () => {
    const { container } = render(<MarkdownTableOfContents originalMarkup="" />)
    expect(container.querySelectorAll('a')).toHaveLength(0)
  })

  it('renders nothing when there are no headings with toc="true"', () => {
    const markup = '<h1 id="SRC-header-1">Heading without toc attribute</h1>'
    const { container } = render(
      <MarkdownTableOfContents originalMarkup={markup} />,
    )
    expect(container.querySelectorAll('a')).toHaveLength(0)
  })

  it('renders a link for a heading marked with toc="true"', () => {
    const markup = '<h1 id="SRC-header-1" toc="true">My Heading</h1>'
    render(<MarkdownTableOfContents originalMarkup={markup} />)

    const link = screen.getByRole('link', { name: 'My Heading' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('link', 'toc-indent1')
    expect(link).toHaveAttribute('data-anchor', 'SRC-header-1')
  })

  it('applies the correct indent class for each heading level', () => {
    const markup = [
      '<h1 id="SRC-header-1" toc="true">Level 1</h1>',
      '<h2 id="SRC-header-2" toc="true">Level 2</h2>',
      '<h3 id="SRC-header-3" toc="true">Level 3</h3>',
      '<h4 id="SRC-header-4" toc="true">Level 4</h4>',
      '<h5 id="SRC-header-5" toc="true">Level 5</h5>',
      '<h6 id="SRC-header-6" toc="true">Level 6</h6>',
    ].join('\n')
    render(<MarkdownTableOfContents originalMarkup={markup} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(6)
    expect(links[0]).toHaveClass('toc-indent1')
    expect(links[1]).toHaveClass('toc-indent2')
    expect(links[2]).toHaveClass('toc-indent3')
    expect(links[3]).toHaveClass('toc-indent4')
    expect(links[4]).toHaveClass('toc-indent5')
    expect(links[5]).toHaveClass('toc-indent6')
  })

  it('excludes headings that do not have toc="true"', () => {
    const markup = [
      '<h1 id="SRC-header-1" toc="true">Show me</h1>',
      '<h2 id="SRC-header-2">Do not show me</h2>',
    ].join('\n')
    render(<MarkdownTableOfContents originalMarkup={markup} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveTextContent('Show me')
  })

  it('strips inner HTML from heading content so only plain text appears in the TOC link', () => {
    const markup =
      '<h1 id="SRC-header-1" toc="true">Hello <span><a href="#">@World</a></span></h1>'
    render(<MarkdownTableOfContents originalMarkup={markup} />)

    const link = screen.getByRole('link')
    expect(link.textContent).toBe('Hello @World')
    expect(link.textContent).not.toContain('<span')
    expect(link.textContent).not.toContain('<a')
  })

  it('uses the heading id as the data-anchor on each link', () => {
    const markup = [
      '<h1 id="SRC-header-1" toc="true">Alpha</h1>',
      '<h2 id="SRC-header-2" toc="true">Beta</h2>',
    ].join('\n')
    render(<MarkdownTableOfContents originalMarkup={markup} />)

    expect(screen.getByRole('link', { name: 'Alpha' })).toHaveAttribute(
      'data-anchor',
      'SRC-header-1',
    )
    expect(screen.getByRole('link', { name: 'Beta' })).toHaveAttribute(
      'data-anchor',
      'SRC-header-2',
    )
  })
})
