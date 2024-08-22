import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'

const queryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn13897207',
      etag: '593afe35-0e97-436d-b7f3-ad00289b0ac0',
      headers: [
        {
          name: 'firstName',
          columnType: 'STRING',
          id: '124219',
        },
        {
          name: 'lastName',
          columnType: 'STRING',
          id: '124220',
        },
        {
          name: 'institution',
          columnType: 'STRING',
          id: '124221',
        },
        {
          name: 'ownerID',
          columnType: 'USERID',
          id: '124214',
        },
        {
          name: 'Program',
          columnType: 'STRING_LIST',
          id: '151844',
        },
      ],
      rows: [
        {
          rowId: 262,
          versionNumber: 406,
          values: [
            'John',
            'Doe',
            'Sage Bionetworks',
            MOCK_USER_ID.toString(),
            '["My-program"]',
          ],
        },
        {
          rowId: 508,
          versionNumber: 541,
          values: [
            'FakeFirst',
            'FakeLast',
            'Fake institution',
            null,
            '["Extra-data"]',
          ],
        },
      ],
    },
  },
} satisfies QueryResultBundle

export default queryResultBundle
