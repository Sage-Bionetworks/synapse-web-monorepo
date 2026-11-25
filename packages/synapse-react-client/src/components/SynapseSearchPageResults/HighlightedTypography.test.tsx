import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HighlightedTypography } from './HighlightedTypography'

function renderAndGetHighlights(text: string, searchTerms: string[]) {
  render(<HighlightedTypography text={text} searchTerms={searchTerms} />)
  const paragraph = screen.getByText(
    (_, element) => element?.tagName === 'P' && element.textContent === text,
  )
  return Array.from(paragraph.querySelectorAll('span')).map(
    span => span.textContent,
  )
}

describe('HighlightedTypography', () => {
  it('highlights every case-insensitive occurrence of each term', () => {
    expect(
      renderAndGetHighlights('Foo bar foo baz FOO', ['foo', 'baz']),
    ).toEqual(['Foo', 'foo', 'baz', 'FOO'])
  })

  it('highlights adjacent matches', () => {
    expect(renderAndGetHighlights('foofoo', ['foo'])).toEqual(['foo', 'foo'])
  })

  it('ignores blank search terms instead of highlighting every character', () => {
    expect(
      renderAndGetHighlights('See the CMRxRecon2025 dataset', [
        'CMRxRecon2025',
        '',
        ' ',
      ]),
    ).toEqual(['CMRxRecon2025'])
  })

  it('renders plain text when all search terms are blank', () => {
    expect(renderAndGetHighlights('Some text', [''])).toEqual([])
  })

  it('treats regex characters in terms literally', () => {
    expect(renderAndGetHighlights('a.b axb (c)', ['a.b', '(c)'])).toEqual([
      'a.b',
      '(c)',
    ])
  })
})
