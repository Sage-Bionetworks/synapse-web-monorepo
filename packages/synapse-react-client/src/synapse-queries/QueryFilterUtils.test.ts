import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  BUNDLE_MASK_ACTIONS_REQUIRED,
  BUNDLE_MASK_QUERY_RESULTS,
} from '@/utils/SynapseConstants'
import { Query, QueryClient } from '@tanstack/query-core'
import { KeyFactory } from './KeyFactory'
import {
  getAllActionsRequiredQueryFilters,
  invalidateAllQueriesForEntity,
} from './QueryFilterUtils'
import { doesQueryFilterMatch } from './QueryMatchingTestUtils'

const keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)

describe('QueryFilterUtils', () => {
  describe('invalidateAllQueriesForEntity', () => {
    test('invalidates/resets queries', async () => {
      const queryClient = new QueryClient()
      const keyFactory = new KeyFactory(undefined)
      const entityId = 'syn123'

      const resetQueriesSpy = vi.spyOn(queryClient, 'resetQueries')
      const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

      await invalidateAllQueriesForEntity(queryClient, keyFactory, entityId)

      expect(resetQueriesSpy).toHaveBeenCalledWith({
        queryKey: keyFactory.getAllTableQueryResultsKey(),
      })
      expect(invalidateQueriesSpy).toHaveBeenCalledWith({
        queryKey: keyFactory.getEntityQueryKey(entityId),
        predicate: expect.any(Function),
      })

      // Validate that the predicate matches a few entity query keys
      const suppliedPredicate =
        invalidateQueriesSpy.mock.lastCall![0]!.predicate!

      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getEntityQueryKey(entityId),
            queryHash: '',
          }),
        ),
      ).toBe(true)

      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getEntityPathQueryKey(entityId),
            queryHash: '',
          }),
        ),
      ).toBe(true)

      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getEntityJsonQueryKey(entityId, 3, false),
            queryHash: '',
          }),
        ),
      ).toBe(true)

      // It should not invalidate table queries, because they were reset
      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getAllTableQueryResultsKey(),
            queryHash: '',
          }),
        ),
      ).toBe(false)
      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey:
              keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
                {
                  concreteType:
                    'org.sagebionetworks.repo.model.table.QueryBundleRequest',
                  partMask: 254,
                  entityId: entityId,
                  query: { sql: `SELECT * FROM ${entityId}` },
                },
                true,
              ),
            queryHash: '',
          }),
        ),
      ).toBe(false)
    })
    test('excludes invalidating a specified QueryKey', async () => {
      const queryClient = new QueryClient()
      const keyFactory = new KeyFactory(undefined)
      const entityId = 'syn123'

      const resetQueriesSpy = vi.spyOn(queryClient, 'resetQueries')
      const invalidateQueriesSpy = vi.spyOn(queryClient, 'invalidateQueries')

      const keyToExcludeFromInvalidation =
        keyFactory.getEntityQueryKey(entityId)

      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        entityId,
        keyToExcludeFromInvalidation,
      )

      expect(resetQueriesSpy).toHaveBeenCalledWith({
        queryKey: keyFactory.getAllTableQueryResultsKey(),
      })
      expect(invalidateQueriesSpy).toHaveBeenCalledWith({
        queryKey: keyFactory.getEntityQueryKey(entityId),
        predicate: expect.any(Function),
      })

      // Validate predicate behavior
      const suppliedPredicate =
        invalidateQueriesSpy.mock.lastCall![0]!.predicate!

      // The key that was excluded should not match the predicate, so it will not be invalidated
      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyToExcludeFromInvalidation,
            queryHash: '',
          }),
        ),
      ).toBe(false)

      // Other keys will still match
      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getEntityPathQueryKey(entityId),
            queryHash: '',
          }),
        ),
      ).toBe(true)

      expect(
        suppliedPredicate(
          new Query({
            client: new QueryClient(),
            queryKey: keyFactory.getEntityJsonQueryKey(entityId, 3, false),
            queryHash: '',
          }),
        ),
      ).toBe(true)
    })
  })
  test('getAllActionsRequiredQueryFilters', () => {
    const queryFilters = getAllActionsRequiredQueryFilters(keyFactory)

    // At least one of the filters invalidates all actions required
    const allEntityActionsRequiredQueryKey =
      keyFactory.getAllEntityActionsRequiredQueryKey()
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(allEntityActionsRequiredQueryKey, filter),
      ),
    ).toBe(true)

    // At least one of the filters invalidates an individual entity's actions required
    const individualEntityActionsRequiredQueryKey =
      keyFactory.getEntityActionsRequiredQueryKey('syn123')
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(individualEntityActionsRequiredQueryKey, filter),
      ),
    ).toBe(true)

    // The download list actions required is invalidated
    const downloadListActionsRequiredQueryKey =
      keyFactory.getDownloadListActionsRequiredQueryKey()
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(downloadListActionsRequiredQueryKey, filter),
      ),
    ).toBe(true)

    // Moreover, all download list queries are invalidated
    const downloadListBaseQueryKey = keyFactory.getDownloadListBaseQueryKey()
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(downloadListBaseQueryKey, filter),
      ),
    ).toBe(true)

    // A table query that requests actions is invalidated
    const tableQueryWithActions = keyFactory.getEntityTableQueryResultQueryKey(
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
        entityId: 'syn123',
        query: {
          sql: 'select * from syn123',
        },
        partMask: BUNDLE_MASK_ACTIONS_REQUIRED,
      },
      false,
    )
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(tableQueryWithActions, filter),
      ),
    ).toBe(true)

    // A table query that does not request actions is NOT invalidated
    const tableQueryWithoutActions =
      keyFactory.getEntityTableQueryResultQueryKey(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: 'syn123',
          query: {
            sql: 'select * from syn123',
          },
          partMask: BUNDLE_MASK_QUERY_RESULTS,
        },
        false,
      )
    expect(
      queryFilters.some(filter =>
        doesQueryFilterMatch(tableQueryWithoutActions, filter),
      ),
    ).toBe(false)

    // Other entity data is NOT invalidated
    const entityQueryKey = keyFactory.getEntityQueryKey('syn123')
    expect(
      queryFilters.some(filter => doesQueryFilterMatch(entityQueryKey, filter)),
    ).toBe(false)
  })
})
