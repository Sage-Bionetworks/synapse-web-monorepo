import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  createDetailPageRouteExports,
  createStaticMeta,
} from './detailPageRouteUtils'
import { fetchDetailPageMetadata } from './fetchDetailPageMetadata'
import { getPortalOrigin } from './getPortalOrigin'
import { MetaArgs } from 'react-router'

vi.mock('./fetchDetailPageMetadata', () => ({
  fetchDetailPageMetadata: vi.fn(),
}))
vi.mock('./getPortalOrigin', () => ({
  getPortalOrigin: vi.fn(),
}))

const mockFetchDetailPageMetadata = vi.mocked(fetchDetailPageMetadata)
const mockGetPortalOrigin = vi.mocked(getPortalOrigin)

const baseConfig = {
  sql: 'SELECT * FROM syn12345',
  titleColumn: 'studyName',
  descriptionColumn: 'summary',
  paramName: 'studyId',
}

const noMatchesMeta: Array<{ meta: [] }> = []

function buildMetaArgs<T = unknown>(args: unknown): MetaArgs<T> {
  return args as MetaArgs<T>
}

beforeEach(() => {
  vi.clearAllMocks()
  mockGetPortalOrigin.mockReturnValue('https://nf.synapse.org')
})

// ---------------------------------------------------------------------------
// createDetailPageRouteExports — meta()
// ---------------------------------------------------------------------------

describe('createDetailPageRouteExports — meta()', () => {
  describe('when loaderData has no title (null or missing)', () => {
    it('falls back to parent matches meta and includes a canonical link when portalKey is provided', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: null, description: null },
          matches: [
            {
              meta: [
                { title: 'NF Data Portal' },
                { property: 'og:title', content: 'NF Data Portal' },
              ],
            },
          ],
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({ title: 'NF Data Portal' })
      expect(result).toContainEqual({
        property: 'og:title',
        content: 'NF Data Portal',
      })
      expect(result).toContainEqual({
        tagName: 'link',
        rel: 'canonical',
        href: 'https://nf.synapse.org/Explore/Studies/syn2343195',
      })
    })

    it('falls back to parent meta when loaderData is undefined', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: undefined,
          matches: [{ meta: [{ title: 'NF Data Portal' }] }],
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({ title: 'NF Data Portal' })
    })
  })

  describe('when loaderData has a title', () => {
    it('emits a page-specific <title> combining resource title and portal name', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({ title: 'My Study | NF Data Portal' })
    })

    it('emits og:title and twitter:title with the same combined title', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({
        property: 'og:title',
        content: 'My Study | NF Data Portal',
      })
      expect(result).toContainEqual({
        name: 'twitter:title',
        content: 'My Study | NF Data Portal',
      })
    })

    it('emits og:url and twitter:url using the pathname and portal origin', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({
        property: 'og:url',
        content: 'https://nf.synapse.org/Explore/Studies/syn2343195',
      })
      expect(result).toContainEqual({
        property: 'twitter:url',
        content: 'https://nf.synapse.org/Explore/Studies/syn2343195',
      })
    })

    it('emits a canonical link', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({
        tagName: 'link',
        rel: 'canonical',
        href: 'https://nf.synapse.org/Explore/Studies/syn2343195',
      })
    })

    it('does not emit og:url or twitter:url when portalKey is absent', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: '',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).not.toContainEqual(
        expect.objectContaining({ property: 'og:url' }),
      )
      expect(result).not.toContainEqual(
        expect.objectContaining({ property: 'twitter:url' }),
      )
    })

    it('does not inherit parent matches meta when a title is present', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: [
            {
              meta: [
                { title: 'NF Data Portal' },
                { property: 'og:title', content: 'NF Data Portal' },
              ],
            },
          ],
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      // Should NOT contain the parent's portal-level title
      expect(result).not.toContainEqual({ title: 'NF Data Portal' })
      expect(result).not.toContainEqual({
        property: 'og:title',
        content: 'NF Data Portal',
      })
    })
  })

  describe('when loaderData has a description', () => {
    it('emits name=description, og:description, and twitter:description', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: {
            title: 'My Study',
            description: 'A study about NF1.',
          },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).toContainEqual({
        name: 'description',
        content: 'A study about NF1.',
      })
      expect(result).toContainEqual({
        property: 'og:description',
        content: 'A study about NF1.',
      })
      expect(result).toContainEqual({
        name: 'twitter:description',
        content: 'A study about NF1.',
      })
    })

    it('omits all description tags when description is null', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Study', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Studies/syn2343195' },
        }),
      )

      expect(result).not.toContainEqual(
        expect.objectContaining({ name: 'description' }),
      )
      expect(result).not.toContainEqual(
        expect.objectContaining({ property: 'og:description' }),
      )
      expect(result).not.toContainEqual(
        expect.objectContaining({ name: 'twitter:description' }),
      )
    })
  })

  describe('extendMeta hook', () => {
    it('appends extra descriptors returned by extendMeta', () => {
      const { meta } = createDetailPageRouteExports(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
        extendMeta: () => [{ 'script:ld+json': { '@type': 'Dataset' } }],
      })

      const result = meta(
        buildMetaArgs({
          loaderData: { title: 'My Dataset', description: null },
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Datasets/syn2343195' },
        }),
      )

      expect(result).toContainEqual({
        'script:ld+json': { '@type': 'Dataset' },
      })
    })

    it('passes the full loaderData to extendMeta', () => {
      interface ExtendedData {
        title: string | null
        description: string | null
        croissantJsonLd: Record<string, unknown> | null
      }

      const extendMeta = vi.fn().mockReturnValue([])

      const { meta } = createDetailPageRouteExports<ExtendedData>(baseConfig, {
        portalName: 'NF Data Portal',
        portalKey: 'nf',
        extendMeta,
      })

      const loaderData: ExtendedData = {
        title: 'My Dataset',
        description: null,
        croissantJsonLd: { '@type': 'Dataset' },
      }

      meta(
        buildMetaArgs({
          loaderData,
          matches: noMatchesMeta,
          location: { pathname: '/Explore/Datasets/syn2343195' },
        }),
      )

      expect(extendMeta).toHaveBeenCalledWith(loaderData)
    })
  })
})

// ---------------------------------------------------------------------------
// createDetailPageRouteExports — loader()
// ---------------------------------------------------------------------------

describe('createDetailPageRouteExports — loader()', () => {
  it('returns null title and description when the URL param is absent', async () => {
    const { loader } = createDetailPageRouteExports(baseConfig, {
      portalName: 'NF Data Portal',
      portalKey: 'nf',
    })

    const result = await loader({ params: {} })

    expect(result).toEqual({ title: null, description: null })
    expect(mockFetchDetailPageMetadata).not.toHaveBeenCalled()
  })

  it('fetches metadata using the config and param value', async () => {
    mockFetchDetailPageMetadata.mockResolvedValue({
      title: 'My Study',
      description: 'A description.',
    })

    const { loader } = createDetailPageRouteExports(baseConfig, {
      portalName: 'NF Data Portal',
      portalKey: 'nf',
    })

    const result = await loader({ params: { studyId: 'syn2343195' } })

    expect(mockFetchDetailPageMetadata).toHaveBeenCalledWith(
      baseConfig,
      'syn2343195',
    )
    expect(result).toEqual({ title: 'My Study', description: 'A description.' })
  })

  it('merges extendLoader data into the base metadata', async () => {
    mockFetchDetailPageMetadata.mockResolvedValue({
      title: 'My Dataset',
      description: null,
    })

    interface ExtendedData {
      title: string | null
      description: string | null
      croissantJsonLd: Record<string, unknown> | null
    }

    const { loader } = createDetailPageRouteExports<ExtendedData>(baseConfig, {
      portalName: 'NF Data Portal',
      portalKey: 'nf',
      extendLoader: () =>
        Promise.resolve({
          croissantJsonLd: { '@type': 'Dataset' },
        }),
    })

    const result = await loader({ params: { studyId: 'syn2343195' } })

    expect(result).toEqual({
      title: 'My Dataset',
      description: null,
      croissantJsonLd: { '@type': 'Dataset' },
    })
  })
})

// ---------------------------------------------------------------------------
// createDetailPageRouteExports — clientLoader()
// ---------------------------------------------------------------------------

describe('createDetailPageRouteExports — clientLoader()', () => {
  it('returns the server loader result when it succeeds', async () => {
    const { clientLoader } = createDetailPageRouteExports(baseConfig, {
      portalName: 'NF Data Portal',
      portalKey: 'nf',
    })

    const serverData = { title: 'Server Study', description: null }
    const serverLoader = vi.fn().mockResolvedValue(serverData)

    const result = await clientLoader({
      params: { studyId: 'syn2343195' },
      serverLoader,
    })

    expect(result).toEqual(serverData)
    expect(serverLoader).toHaveBeenCalledOnce()
  })

  it('falls back to the client loader when the server loader throws', async () => {
    mockFetchDetailPageMetadata.mockResolvedValue({
      title: 'Client Study',
      description: 'Client description.',
    })

    const { clientLoader } = createDetailPageRouteExports(baseConfig, {
      portalName: 'NF Data Portal',
      portalKey: 'nf',
    })

    const serverLoader = vi.fn().mockRejectedValue(new Error('SSR failed'))

    const result = await clientLoader({
      params: { studyId: 'syn2343195' },
      serverLoader,
    })

    expect(result).toEqual({
      title: 'Client Study',
      description: 'Client description.',
    })
  })
})

// ---------------------------------------------------------------------------
// createStaticMeta
// ---------------------------------------------------------------------------

describe('createStaticMeta', () => {
  it('returns a combined title from pageTitle and portalName', () => {
    const meta = createStaticMeta('Explore Studies', 'NF Data Portal')

    const result = meta(buildMetaArgs({ matches: [] }))

    expect(result).toContainEqual({ title: 'Explore Studies | NF Data Portal' })
  })

  it('emits og:title with the combined title', () => {
    const meta = createStaticMeta('Explore Studies', 'NF Data Portal')

    const result = meta(buildMetaArgs({ matches: [] }))

    expect(result).toContainEqual({
      property: 'og:title',
      content: 'Explore Studies | NF Data Portal',
    })
  })

  it('inherits parent meta descriptors other than title and og:title', () => {
    const meta = createStaticMeta('Explore Studies', 'NF Data Portal')

    const result = meta(
      buildMetaArgs({
        matches: [
          {
            meta: [
              { title: 'NF Data Portal' },
              { property: 'og:title', content: 'NF Data Portal' },
              { property: 'og:url', content: 'https://nf.synapse.org/' },
              {
                property: 'og:description',
                content: 'An open science platform.',
              },
              { property: 'twitter:url', content: 'https://nf.synapse.org/' },
              { name: 'twitter:title', content: 'NF Data Portal' },
              {
                name: 'twitter:description',
                content: 'An open science platform.',
              },
            ],
          },
        ],
      }),
    )

    // Parent values inherited
    expect(result).toContainEqual({
      property: 'og:url',
      content: 'https://nf.synapse.org/',
    })
    expect(result).toContainEqual({
      property: 'og:description',
      content: 'An open science platform.',
    })
    expect(result).toContainEqual({
      property: 'twitter:url',
      content: 'https://nf.synapse.org/',
    })
    expect(result).toContainEqual({
      name: 'twitter:description',
      content: 'An open science platform.',
    })
  })

  it('overrides the parent title with the page-specific title', () => {
    const meta = createStaticMeta('Explore Studies', 'NF Data Portal')

    const result = meta(
      buildMetaArgs({
        matches: [
          {
            meta: [
              { title: 'NF Data Portal' },
              { property: 'og:title', content: 'NF Data Portal' },
            ],
          },
        ],
      }),
    )

    // Root's generic title must NOT appear
    expect(result).not.toContainEqual({ title: 'NF Data Portal' })
    expect(result).not.toContainEqual({
      property: 'og:title',
      content: 'NF Data Portal',
    })

    // Page-specific title must appear exactly once
    const titles = result.filter(d => 'title' in d)
    expect(titles).toHaveLength(1)
    expect(titles[0]).toEqual({ title: 'Explore Studies | NF Data Portal' })
  })
})
