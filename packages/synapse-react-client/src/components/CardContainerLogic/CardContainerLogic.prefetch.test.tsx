import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import syn16787123 from '@/mocks/query/syn16787123'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { defaultQueryClientConfig } from '@/utils/context/FullContextProvider'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import * as CardContainerModule from '../CardContainer/CardContainer'
import {
  CardContainerLogic,
  prefetchCardContainerLogicData,
} from './CardContainerLogic'

const SQL = 'SELECT * FROM syn16787123'

// Render a simple stub so the test doesn't pull in the full DatasetCard data pipeline.
vi.spyOn(CardContainerModule, 'CardContainer').mockImplementation(() => (
  <div data-testid="MockCardContainer" />
))

describe('prefetchCardContainerLogicData', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    registerTableQueryResult({ sql: SQL }, syn16787123)
  })

  it('populates the cache so CardContainerLogic renders without a loading screen on first paint', async () => {
    // Phase 1 — Prefetch (simulates server/loader)
    const prefetchQueryClient = new QueryClient(defaultQueryClientConfig)
    await prefetchCardContainerLogicData(prefetchQueryClient, SQL)
    const dehydratedState = dehydrate(prefetchQueryClient)

    // Phase 2 — Block network so any re-fetch would fail; content must come from cache
    server.resetHandlers()

    // Phase 3 — Render (simulates browser hydration with anonymous context matching SSG).
    // Pass keyFactory: new KeyFactory(undefined) so the component generates the same
    // cache keys as the anonymous prefetch.
    const { wrapperFn } = createWrapperAndQueryClient({
      accessToken: undefined,
      keyFactory: new KeyFactory(undefined),
    })
    render(
      <HydrationBoundary state={dehydratedState}>
        <CardContainerLogic
          sql={SQL}
          cardConfiguration={{ type: SynapseConstants.DATASET }}
        />
      </HydrationBoundary>,
      { wrapper: wrapperFn },
    )

    // Phase 4 — Assert synchronously: no loading spinner visible and card content reached render
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    expect(screen.getByTestId('MockCardContainer')).toBeInTheDocument()
  })
})
