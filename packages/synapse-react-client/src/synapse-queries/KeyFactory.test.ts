import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
} from '@/utils/SynapseConstants'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { QueryKey } from '@tanstack/react-query'
import { KeyFactory } from './KeyFactory'

describe('KeyFactory tests', () => {
  let keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)
  beforeEach(() => {
    keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)
  })

  describe('Entity QueryKeys', () => {
    const ENTITY_ID = 'syn123'
    const ENTITY_VERSION = 2
    test('getEntityQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityQueryKey(ENTITY_ID)

      // Invalidating all entity queries should match
      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())

      // Invalidating a particular version of this entity's queries should not match
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActivityQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityActivityQueryKey(ENTITY_ID)

      // Invalidating all entity queries should match this query
      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      // Invalidating this entity's queries should match
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      // Invalidating a particular version of this entity's queries should not match
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActivityQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityActivityQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      // Invalidating all entity queries should match this query
      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      // Invalidating this entity's queries should match
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      // Invalidating a particular version of this entity's queries should match
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActionsRequiredQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityActionsRequiredQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(
        keyFactory.getAllEntityActionsRequiredQueryKey(),
      )
    })

    test('getEntityChallengeQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityChallengeQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getForumQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getForumQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getPaginatedEntityVersionsQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getPaginatedEntityVersionsQueryKey(
        ENTITY_ID,
        10,
        0,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionsQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionsQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityChildrenQueryKey, not infinite', () => {
      const queryKey: QueryKey = keyFactory.getEntityChildrenQueryKey(
        {
          parentId: ENTITY_ID,
          includeTypes: [EntityType.FILE],
        },
        false,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityChildrenQueryKey(
          {
            parentId: ENTITY_ID,
            includeTypes: [EntityType.FOLDER],
          },
          false,
        ),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityChildrenQueryKey infinite', () => {
      const queryKey: QueryKey = keyFactory.getEntityChildrenQueryKey(
        {
          parentId: ENTITY_ID,
          includeTypes: [EntityType.FILE],
        },
        true,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityChildrenQueryKey(
          {
            parentId: ENTITY_ID,
            includeTypes: [EntityType.FOLDER],
          },
          true,
        ),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityJsonQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityJsonQueryKey(
        ENTITY_ID,
        undefined,
        false,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityJsonQueryKey(ENTITY_ID, undefined, true),
      )
    })

    test('getEntityJsonQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityJsonQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
        false,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityJsonQueryKey(ENTITY_ID, undefined, true),
      )
    })

    test('getEntityBundleQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityBundleQueryKey(
        ENTITY_ID,
        undefined,
        {
          includeEntity: true,
          includeFileName: true,
        },
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, undefined, {
          includeEntity: true,
        }),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, undefined, {
          includeEntity: true,
          includePermissions: true,
        }),
      )
    })

    test('getEntityBundleQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityBundleQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
        {
          includeEntity: true,
          includeFileName: true,
        },
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, ENTITY_VERSION, {
          includeEntity: true,
        }),
      )
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, undefined, {
          includeEntity: true,
        }),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, ENTITY_VERSION, {
          includeEntity: true,
          includePermissions: true,
        }),
      )
    })
    test('getEntityPathQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityPathQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityACLQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityACLQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityAliasQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityAliasQueryKey('some alias')

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityQueryKey(ENTITY_ID),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityEvaluationsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityEvaluationsQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityPermissionsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityPermissionsQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityBoundJsonSchemaQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityBoundJsonSchemaQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntitySchemaValidationResultsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntitySchemaValidationResultsQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityHeaderQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityHeaderQueryKey(
        ENTITY_ID,
        undefined,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityHeaderQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityHeaderQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityAccessRequirementsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityAccessRequirementsQueryKey(ENTITY_ID)

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityTableQueryResultQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityTableQueryResultQueryKey(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: ENTITY_ID,
          query: {
            sql: `SELECT * FROM ${ENTITY_ID}`,
          },
          partMask: BUNDLE_MASK_QUERY_RESULTS,
        },
        true,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(keyFactory.getAllTableQueryResultsKey())
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityTableQueryResultQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              // Different query
              sql: `SELECT foo FROM ${ENTITY_ID}`,
            },
            partMask: BUNDLE_MASK_QUERY_RESULTS,
          },
          true,
        ),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityTableQueryResultQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              sql: `SELECT * FROM ${ENTITY_ID}`,
            },
            // Different part mask
            partMask: BUNDLE_MASK_QUERY_COUNT,
          },
          true,
        ),
      )
    })
    test('getEntityTableQueryResultWithAsyncStatusQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              sql: `SELECT * FROM ${ENTITY_ID}`,
            },
            partMask: BUNDLE_MASK_QUERY_RESULTS,
          },
          true,
        )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(keyFactory.getAllTableQueryResultsKey())
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              // Different query
              sql: `SELECT foo FROM ${ENTITY_ID}`,
            },
            partMask: BUNDLE_MASK_QUERY_RESULTS,
          },
          true,
        ),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityTableQueryResultWithAsyncStatusQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              sql: `SELECT * FROM ${ENTITY_ID}`,
            },
            // Different part mask
            partMask: BUNDLE_MASK_QUERY_COUNT,
          },
          true,
        ),
      )
    })
    test('getFullTableQueryResultQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getFullTableQueryResultQueryKey(
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: ENTITY_ID,
          query: {
            sql: `SELECT * FROM ${ENTITY_ID}`,
          },
          partMask: BUNDLE_MASK_QUERY_RESULTS,
        },
        false,
      )

      expect(queryKey).toMatchQueryKey(keyFactory.getAllEntityDataQueryKey())
      expect(queryKey).toMatchQueryKey(keyFactory.getEntityQueryKey(ENTITY_ID))
      expect(queryKey).toMatchQueryKey(keyFactory.getAllTableQueryResultsKey())
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getFullTableQueryResultQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              // Different query
              sql: `SELECT foo FROM ${ENTITY_ID}`,
            },
            partMask: BUNDLE_MASK_QUERY_RESULTS,
          },
          false,
        ),
      )
      expect(queryKey).not.toMatchQueryKey(
        keyFactory.getFullTableQueryResultQueryKey(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: ENTITY_ID,
            query: {
              sql: `SELECT * FROM ${ENTITY_ID}`,
            },
            // Different part mask
            partMask: BUNDLE_MASK_QUERY_COUNT,
          },
          false,
        ),
      )
    })
  })
})
