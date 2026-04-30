import { describe, expect, it } from 'vitest'
import { mergeMeta } from './mergeMeta'

describe('mergeMeta', () => {
  it('returns only the passed descriptors when matches is empty', () => {
    const result = mergeMeta({ matches: [] }, [{ title: 'My Page' }])
    expect(result).toEqual([{ title: 'My Page' }])
  })

  it('appends match meta that has no similar descriptor', () => {
    const result = mergeMeta(
      {
        matches: [{ meta: [{ name: 'description', content: 'From parent' }] }],
      },
      [{ title: 'My Page' }],
    )
    expect(result).toEqual([
      { title: 'My Page' },
      { name: 'description', content: 'From parent' },
    ])
  })

  it('does not mutate the original descriptors array', () => {
    const descriptors = [{ title: 'My Page' }]
    mergeMeta(
      {
        matches: [{ meta: [{ name: 'description', content: 'From parent' }] }],
      },
      descriptors,
    )
    expect(descriptors).toEqual([{ title: 'My Page' }])
  })

  describe('title deduplication', () => {
    it('excludes a title from matches when descriptors already contains a title', () => {
      const result = mergeMeta(
        { matches: [{ meta: [{ title: 'Parent Title' }] }] },
        [{ title: 'Child Title' }],
      )
      expect(result).toEqual([{ title: 'Child Title' }])
    })

    it('uses the later match title when no descriptor overrides it', () => {
      // matches: [parentMatch, childMatch] → after flatMap+toReversed: childMatch meta first
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ title: 'Parent Title' }] },
            { meta: [{ title: 'Child Title' }] },
          ],
        },
        [],
      )
      // childMatch is processed first and added; parentMatch is then considered similar → excluded
      expect(result).toEqual([{ title: 'Child Title' }])
    })
  })

  describe('charSet deduplication', () => {
    it('excludes a charSet from matches when descriptors already contains a charSet', () => {
      const result = mergeMeta(
        { matches: [{ meta: [{ charSet: 'utf-8' }] }] },
        [{ charSet: 'utf-16' }],
      )
      expect(result).toEqual([{ charSet: 'utf-16' }])
    })

    it('only keeps the most specific charSet across matches', () => {
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ charSet: 'utf-8' }] },
            { meta: [{ charSet: 'utf-16' }] },
          ],
        },
        [],
      )
      expect(result).toEqual([{ charSet: 'utf-16' }])
    })
  })

  describe('name deduplication', () => {
    it('excludes a name+value pair from matches when descriptors contains the same name+value', () => {
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ name: 'description', content: 'Parent description' }] },
          ],
        },
        [{ name: 'description', content: 'Parent description' }],
      )
      expect(result).toEqual([
        { name: 'description', content: 'Parent description' },
      ])
    })

    it('includes a name from matches when the name attribute value differs from descriptors', () => {
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ name: 'keywords', content: 'react, typescript' }] },
          ],
        },
        [{ name: 'description', content: 'Child description' }],
      )
      expect(result).toEqual([
        { name: 'description', content: 'Child description' },
        { name: 'keywords', content: 'react, typescript' },
      ])
    })

    it('excludes a name from matches when descriptors has the same name attribute value regardless of content', () => {
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ name: 'description', content: 'Parent description' }] },
          ],
        },
        [{ name: 'description', content: 'Child description' }],
      )
      expect(result).toEqual([
        { name: 'description', content: 'Child description' },
      ])
    })
  })

  describe('property deduplication', () => {
    it('excludes a property+value pair from matches when descriptors contains the same property+value', () => {
      const result = mergeMeta(
        {
          matches: [{ meta: [{ property: 'og:title', content: 'OG Title' }] }],
        },
        [{ property: 'og:title', content: 'OG Title' }],
      )
      expect(result).toEqual([{ property: 'og:title', content: 'OG Title' }])
    })

    it('includes a property from matches when the property attribute value differs from descriptors', () => {
      const result = mergeMeta(
        {
          matches: [
            {
              meta: [{ property: 'og:description', content: 'Parent OG desc' }],
            },
          ],
        },
        [{ property: 'og:title', content: 'Child OG Title' }],
      )
      expect(result).toEqual([
        { property: 'og:title', content: 'Child OG Title' },
        { property: 'og:description', content: 'Parent OG desc' },
      ])
    })

    it('excludes a property from matches when descriptors has the same property attribute value regardless of content', () => {
      const result = mergeMeta(
        {
          matches: [
            { meta: [{ property: 'og:title', content: 'Parent OG Title' }] },
          ],
        },
        [{ property: 'og:title', content: 'Child OG Title' }],
      )
      expect(result).toEqual([
        { property: 'og:title', content: 'Child OG Title' },
      ])
    })
  })

  it('filters out null/falsy matches', () => {
    const result = mergeMeta(
      { matches: [null, undefined, { meta: [{ title: 'From Match' }] }] },
      [],
    )
    expect(result).toEqual([{ title: 'From Match' }])
  })

  it('merges meta from multiple matches respecting later-match precedence', () => {
    const result = mergeMeta(
      {
        matches: [
          {
            meta: [
              { title: 'Root Title' },
              { name: 'description', content: 'Root description' },
            ],
          },
          {
            meta: [
              { title: 'Child Title' },
              { property: 'og:image', content: 'https://example.com/img.png' },
            ],
          },
        ],
      },
      [],
    )
    // flatMap+toReversed processes og:image first, then Child Title, then Root description, then Root Title (skipped as similar to Child Title)
    expect(result).toEqual([
      { property: 'og:image', content: 'https://example.com/img.png' },
      { title: 'Child Title' },
      { name: 'description', content: 'Root description' },
    ])
  })
})
