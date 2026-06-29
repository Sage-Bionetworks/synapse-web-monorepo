import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { defaultQueryClientConfig } from '@/utils/context/FullContextProvider'
import { SynapseConstants } from '@/utils'
import {
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import {
  prefetchUserCardListRotate,
  UserCardListRotate,
} from './UserCardListRotate'

const sql = 'SELECT * FROM syn13897207'

// A minimal bundle with a USERID column and maxRowsPerPage so getFullQueryTableResults
// terminates after the first page (rows.length < maxRowsPerPage).
const mockUserCardBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  maxRowsPerPage: 25,
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn13897207',
      etag: 'test-etag',
      headers: [
        { name: 'ownerID', columnType: ColumnTypeEnum.USERID, id: '1' },
      ],
      rows: [{ values: [MOCK_USER_ID.toString()] }],
    },
  },
}

describe('prefetchUserCardListRotate', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    // Register only { sql } — JSON.stringify (used in the HTTP request body) drops undefined
    // values, so the request that arrives at the MSW handler has no additionalFilters or
    // selectedFacets keys at all.
    registerTableQueryResult({ sql }, mockUserCardBundle)
  })

  it('populates the cache so UserCardListRotate renders cards without a loading skeleton on first paint', async () => {
    // Phase 1 — Prefetch (simulates server/loader)
    const prefetchQueryClient = new QueryClient(defaultQueryClientConfig)
    await prefetchUserCardListRotate(prefetchQueryClient, sql, { count: 3 })

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
        <UserCardListRotate
          sql={sql}
          count={3}
          size={SynapseConstants.LARGE_USER_CARD}
        />
      </HydrationBoundary>,
      { wrapper: wrapperFn },
    )

    // Phase 4 — Assert synchronously: user card rendered with the prefetched profile data.
    // UserCardMedium shows "First Last" when both firstName and lastName are present.
    // This only renders when isPending=false and the user profile cache was populated —
    // proving both the table query and user profile prefetches succeeded.
    expect(screen.getByText('First Last')).toBeInTheDocument()
    expect(screen.queryByText('No one was found.')).not.toBeInTheDocument()
  })
})
