import { KeyFactory } from './KeyFactory'
import { MOCK_ACCESS_TOKEN } from '../mocks/MockSynapseContext'
import { getAllActionsRequiredQueryFilters } from './QueryFilterUtils'
import { doesQueryFilterMatch } from './QueryMatchingTestUtils'
import {
  BUNDLE_MASK_ACTIONS_REQUIRED,
  BUNDLE_MASK_QUERY_RESULTS,
} from '../utils/SynapseConstants'

const keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)

describe('QueryFilterUtils', () => {
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
