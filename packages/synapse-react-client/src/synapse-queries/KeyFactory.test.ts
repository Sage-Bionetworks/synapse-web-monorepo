import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import {
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
  SYNAPSE_REALM,
} from '@/utils/SynapseConstants'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { QueryKey } from '@tanstack/react-query'
import { KeyFactory } from './KeyFactory'
import {
  expectQueryKeyNotToMatch,
  expectQueryKeyToMatch,
} from './QueryMatching.test-utils'

describe('KeyFactory tests', () => {
  let keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)
  beforeEach(() => {
    keyFactory = new KeyFactory(MOCK_ACCESS_TOKEN)
  })

  describe('session key prefix', () => {
    const ENTITY_ID = 'syn123'
    const ANONYMOUS_TOKEN = 'anonymous-session-token'
    const keyWithoutToken = new KeyFactory(undefined).getEntityQueryKey(
      ENTITY_ID,
    )

    test('an anonymous session in the public realm shares the keys used before its token exists', () => {
      const anonymousSession = new KeyFactory(ANONYMOUS_TOKEN, {
        isAuthenticated: false,
        realmId: SYNAPSE_REALM,
      })

      expect(anonymousSession.getEntityQueryKey(ENTITY_ID)).toEqual(
        keyWithoutToken,
      )
    })

    test('an anonymous session without a realm is treated as the public realm', () => {
      const anonymousSession = new KeyFactory(ANONYMOUS_TOKEN, {
        isAuthenticated: false,
      })

      expect(anonymousSession.getEntityQueryKey(ENTITY_ID)).toEqual(
        keyWithoutToken,
      )
    })

    test('anonymous sessions in another realm share keys only with that realm', () => {
      const realmKey = new KeyFactory(ANONYMOUS_TOKEN, {
        isAuthenticated: false,
        realmId: '2',
      }).getEntityQueryKey(ENTITY_ID)

      expect(realmKey).not.toEqual(keyWithoutToken)
      expect(realmKey).toEqual(
        new KeyFactory('another-anonymous-token', {
          isAuthenticated: false,
          realmId: '2',
        }).getEntityQueryKey(ENTITY_ID),
      )
    })

    test('each signed-in user token gets its own keys', () => {
      const userKey = new KeyFactory(MOCK_ACCESS_TOKEN, {
        isAuthenticated: true,
        realmId: SYNAPSE_REALM,
      }).getEntityQueryKey(ENTITY_ID)

      expect(userKey).not.toEqual(keyWithoutToken)
      expect(userKey).not.toEqual(
        new KeyFactory('another-user-token', {
          isAuthenticated: true,
        }).getEntityQueryKey(ENTITY_ID),
      )
    })

    test('a token without a described session gets its own keys', () => {
      expect(
        new KeyFactory(ANONYMOUS_TOKEN).getEntityQueryKey(ENTITY_ID),
      ).not.toEqual(keyWithoutToken)
      expect(keyFactory.getEntityQueryKey(ENTITY_ID)).toEqual(
        new KeyFactory(MOCK_ACCESS_TOKEN, {
          isAuthenticated: true,
        }).getEntityQueryKey(ENTITY_ID),
      )
    })

    test('forced-anonymous keys ignore the session', () => {
      const queryBundleRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.table.QueryBundleRequest' as const,
        entityId: ENTITY_ID,
        query: { sql: `SELECT * FROM ${ENTITY_ID}` },
        partMask: BUNDLE_MASK_QUERY_RESULTS,
      }

      expect(
        new KeyFactory(MOCK_ACCESS_TOKEN, {
          isAuthenticated: true,
        }).getFullTableQueryResultQueryKey(queryBundleRequest, true),
      ).toEqual(
        new KeyFactory(undefined).getFullTableQueryResultQueryKey(
          queryBundleRequest,
          true,
        ),
      )
    })
  })

  describe('Entity QueryKeys', () => {
    const ENTITY_ID = 'syn123'
    const ENTITY_VERSION = 2
    test('getEntityQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityQueryKey(ENTITY_ID)

      // Invalidating all entity queries should match
      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())

      // Invalidating a particular version of this entity's queries should not match
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActivityQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityActivityQueryKey(ENTITY_ID)

      // Invalidating all entity queries should match this query
      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      // Invalidating this entity's queries should match
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      // Invalidating a particular version of this entity's queries should not match
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActivityQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityActivityQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      // Invalidating all entity queries should match this query
      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      // Invalidating this entity's queries should match
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      // Invalidating a particular version of this entity's queries should match
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityActionsRequiredQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityActionsRequiredQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getAllEntityActionsRequiredQueryKey(),
      )
    })

    test('getEntityChallengeQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityChallengeQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getForumQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getForumQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getPaginatedEntityVersionsQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getPaginatedEntityVersionsQueryKey(
        ENTITY_ID,
        10,
        0,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityVersionsQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityVersionsQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityChildrenQueryKey, not infinite', () => {
      const queryKey: QueryKey = keyFactory.getEntityChildrenQueryKey(
        {
          parentId: ENTITY_ID,
          includeTypes: [EntityType.file],
        },
        false,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityChildrenQueryKey(
          {
            parentId: ENTITY_ID,
            includeTypes: [EntityType.folder],
          },
          false,
        ),
      )
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityChildrenQueryKey infinite', () => {
      const queryKey: QueryKey = keyFactory.getEntityChildrenQueryKey(
        {
          parentId: ENTITY_ID,
          includeTypes: [EntityType.file],
        },
        true,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityChildrenQueryKey(
          {
            parentId: ENTITY_ID,
            includeTypes: [EntityType.folder],
          },
          true,
        ),
      )
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityJsonQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityJsonQueryKey(
        ENTITY_ID,
        undefined,
        false,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityJsonQueryKey(ENTITY_ID, undefined, true),
      )
    })

    test('getEntityJsonQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityJsonQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
        false,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyNotToMatch(
        queryKey,
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

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, undefined, {
          includeEntity: true,
        }),
      )
      expectQueryKeyNotToMatch(
        queryKey,
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

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, ENTITY_VERSION, {
          includeEntity: true,
        }),
      )
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, undefined, {
          includeEntity: true,
        }),
      )
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityBundleQueryKey(ENTITY_ID, ENTITY_VERSION, {
          includeEntity: true,
          includePermissions: true,
        }),
      )
    })
    test('getEntityPathQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityPathQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityACLQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityACLQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityAliasQueryKey', () => {
      const queryKey: QueryKey = keyFactory.getEntityAliasQueryKey('some alias')

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityQueryKey(ENTITY_ID),
      )
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityEvaluationsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityEvaluationsQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })
    test('getEntityPermissionsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityPermissionsQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityBoundJsonSchemaQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityBoundJsonSchemaQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntitySchemaValidationResultsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntitySchemaValidationResultsQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityHeaderQueryKey, no version', () => {
      const queryKey: QueryKey = keyFactory.getEntityHeaderQueryKey(
        ENTITY_ID,
        undefined,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityHeaderQueryKey, with version', () => {
      const queryKey: QueryKey = keyFactory.getEntityHeaderQueryKey(
        ENTITY_ID,
        ENTITY_VERSION,
      )

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
    })

    test('getEntityAccessRequirementsQueryKey', () => {
      const queryKey: QueryKey =
        keyFactory.getEntityAccessRequirementsQueryKey(ENTITY_ID)

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyNotToMatch(
        queryKey,
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

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(queryKey, keyFactory.getAllTableQueryResultsKey())
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyNotToMatch(
        queryKey,
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
      expectQueryKeyNotToMatch(
        queryKey,
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

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(queryKey, keyFactory.getAllTableQueryResultsKey())
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyNotToMatch(
        queryKey,
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
      expectQueryKeyNotToMatch(
        queryKey,
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

      expectQueryKeyToMatch(queryKey, keyFactory.getAllEntityDataQueryKey())
      expectQueryKeyToMatch(queryKey, keyFactory.getEntityQueryKey(ENTITY_ID))
      expectQueryKeyToMatch(queryKey, keyFactory.getAllTableQueryResultsKey())
      expectQueryKeyNotToMatch(
        queryKey,
        keyFactory.getEntityVersionQueryKey(ENTITY_ID, ENTITY_VERSION),
      )
      expectQueryKeyNotToMatch(
        queryKey,
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
      expectQueryKeyNotToMatch(
        queryKey,
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

  describe('JSON Schema QueryKeys', () => {
    test('getListOrganizationsQueryKey is stable and takes no arguments', () => {
      expectQueryKeyToMatch(
        keyFactory.getListOrganizationsQueryKey(),
        keyFactory.getListOrganizationsQueryKey(),
      )
    })

    test('getListJsonSchemasQueryKey differs by organization name', () => {
      const orgAKey = keyFactory.getListJsonSchemasQueryKey('org.a')
      const orgBKey = keyFactory.getListJsonSchemasQueryKey('org.b')

      expectQueryKeyToMatch(
        orgAKey,
        keyFactory.getListJsonSchemasQueryKey('org.a'),
      )
      expectQueryKeyNotToMatch(orgAKey, orgBKey)
    })

    test('getListJsonSchemaVersionsQueryKey differs by organization and schema name', () => {
      const key = keyFactory.getListJsonSchemaVersionsQueryKey(
        'org.a',
        'SchemaOne',
      )

      expectQueryKeyToMatch(
        key,
        keyFactory.getListJsonSchemaVersionsQueryKey('org.a', 'SchemaOne'),
      )
      expectQueryKeyNotToMatch(
        key,
        keyFactory.getListJsonSchemaVersionsQueryKey('org.a', 'SchemaTwo'),
      )
      expectQueryKeyNotToMatch(
        key,
        keyFactory.getListJsonSchemaVersionsQueryKey('org.b', 'SchemaOne'),
      )
    })
  })
})
