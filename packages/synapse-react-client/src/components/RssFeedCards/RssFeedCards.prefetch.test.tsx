import { server } from '@/mocks/msw/server'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { defaultQueryClientConfig } from '@/utils/context/FullContextProvider'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { prefetchRssFeed, RssFeedCards } from './RssFeedCards'

const RSS_URL = 'https://example.com/news'
const ITEM_TITLE = 'Prefetched RSS Article Title'

const RSS_XML = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Test Feed</title>
    <link>${RSS_URL}</link>
    <item>
      <title>${ITEM_TITLE}</title>
      <link>${RSS_URL}/article-1</link>
      <guid isPermaLink="false">article-1</guid>
      <pubDate>Mon, 20 May 2024 00:00:00 +0000</pubDate>
    </item>
  </channel>
</rss>`

describe('prefetchRssFeed', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    server.use(
      http.get(RSS_URL + '/', info => {
        if (new URL(info.request.url).searchParams.get('feed') === 'rss2') {
          return new HttpResponse(RSS_XML, {
            headers: { 'Content-Type': 'application/xml; charset=UTF-8' },
          })
        }
        return new HttpResponse('Not Found', { status: 404 })
      }),
    )
  })

  it('populates the cache so RssFeedCards renders items without a loading state on first paint', async () => {
    // Phase 1 — Prefetch (simulates server/loader)
    const prefetchQueryClient = new QueryClient(defaultQueryClientConfig)
    await prefetchRssFeed(prefetchQueryClient, RSS_URL)
    const dehydratedState = dehydrate(prefetchQueryClient)

    // Phase 2 — Block network so any re-fetch would fail; content must come from cache
    server.resetHandlers()

    // Phase 3 — Render (simulates browser hydration).
    // Pass keyFactory: new KeyFactory(undefined) so the component generates the same
    // cache keys as the anonymous prefetch.
    const { wrapperFn } = createWrapperAndQueryClient({
      accessToken: undefined,
      keyFactory: new KeyFactory(undefined),
    })
    render(
      <HydrationBoundary state={dehydratedState}>
        <RssFeedCards url={RSS_URL} itemsToShow={3} />
      </HydrationBoundary>,
      { wrapper: wrapperFn },
    )

    // Phase 4 — Assert synchronously: content from the prefetched RSS feed is visible
    expect(screen.getByText(ITEM_TITLE)).toBeInTheDocument()
  })
})
