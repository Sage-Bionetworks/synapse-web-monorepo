import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { defaultQueryClientConfig } from '@/utils/context/FullContextProvider'
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
import { Goals, prefetchGoals } from './Goals'

const ENTITY_ID = 'syn23516796'

// Exact SQL produced by buildGoalsQueryBundleRequest — whitespace must match.
const GOALS_SQL =
  'select *\n            from ' + ENTITY_ID + '\n            order by ItemOrder'

const mockGoalsBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { name: 'TableId', columnType: ColumnTypeEnum.ENTITYID, id: '1' },
    { name: 'CountSql', columnType: ColumnTypeEnum.LARGETEXT, id: '2' },
    { name: 'Title', columnType: ColumnTypeEnum.STRING, id: '3' },
    { name: 'Summary', columnType: ColumnTypeEnum.STRING, id: '4' },
    { name: 'Link', columnType: ColumnTypeEnum.STRING, id: '5' },
    { name: 'Asset', columnType: ColumnTypeEnum.FILEHANDLEID, id: '6' },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: ENTITY_ID,
      etag: 'test-etag',
      headers: [
        { name: 'TableId', columnType: ColumnTypeEnum.ENTITYID, id: '1' },
        { name: 'CountSql', columnType: ColumnTypeEnum.LARGETEXT, id: '2' },
        { name: 'Title', columnType: ColumnTypeEnum.STRING, id: '3' },
        { name: 'Summary', columnType: ColumnTypeEnum.STRING, id: '4' },
        { name: 'Link', columnType: ColumnTypeEnum.STRING, id: '5' },
        { name: 'Asset', columnType: ColumnTypeEnum.FILEHANDLEID, id: '6' },
      ],
      rows: [
        {
          values: [
            'syn11111111',
            'SELECT COUNT(*) FROM syn11111111',
            'Prefetched Goal Title',
            'Goal summary text',
            '/link',
            '11111111',
          ],
        },
      ],
    },
  },
}

describe('prefetchGoals', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    registerTableQueryResult({ sql: GOALS_SQL }, mockGoalsBundle)
  })

  it('populates the cache so Goals renders content without a loading state on first paint', async () => {
    // Phase 1 — Prefetch (simulates server/loader)
    const prefetchQueryClient = new QueryClient(defaultQueryClientConfig)
    await prefetchGoals(prefetchQueryClient, ENTITY_ID)
    const dehydratedState = dehydrate(prefetchQueryClient)

    // Phase 2 — Block network so any re-fetch would fail; content must come from cache
    server.resetHandlers()

    // Phase 3 — Render (simulates browser hydration with anonymous context matching SSG).
    // Must pass keyFactory: new KeyFactory(undefined) so the component generates the same
    // cache keys as the anonymous prefetch (MOCK_CONTEXT_VALUE's keyFactory uses a mock token).
    const { wrapperFn } = createWrapperAndQueryClient({
      accessToken: undefined,
      keyFactory: new KeyFactory(undefined),
    })
    render(
      <HydrationBoundary state={dehydratedState}>
        <Goals entityId={ENTITY_ID} />
      </HydrationBoundary>,
      { wrapper: wrapperFn },
    )

    // Phase 4 — Assert synchronously: HydrationBoundary fills the cache before the first render
    expect(screen.getByText('Prefetched Goal Title')).toBeInTheDocument()
  })
})
