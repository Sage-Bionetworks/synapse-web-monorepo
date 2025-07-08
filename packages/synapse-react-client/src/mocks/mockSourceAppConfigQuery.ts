import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

export const mockQueryBundleRequest: QueryBundleRequest = {
  entityId: 'syn7000',
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: 255,
  query: {
    sql: 'SELECT * FROM syn7000',
  },
}

export const mockQueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn7000',
      etag: '65fc1c3f-ca1b-4da5-bb4a-a0b0ea463a60',
      headers: [
        {
          name: 'appId',
          columnType: 'STRING',
          id: '184883',
        },
        {
          name: 'appURL',
          columnType: 'LINK',
          id: '190513',
        },
        {
          name: 'friendlyName',
          columnType: 'STRING',
          id: '188120',
        },
        {
          name: 'description',
          columnType: 'STRING',
          id: '87941',
        },
        {
          name: 'logo',
          columnType: 'FILEHANDLEID',
          id: '132752',
        },
        {
          name: 'requestAffiliation',
          columnType: 'BOOLEAN',
          id: '215962',
        },
        {
          name: 'primaryColor',
          columnType: 'STRING',
          id: '190515',
        },
        {
          name: 'secondaryColor',
          columnType: 'STRING',
          id: '190516',
        },
        {
          name: 'isPublicized',
          columnType: 'BOOLEAN',
          id: '215963',
        },
        {
          name: 'shortDescription',
          columnType: 'STRING',
          id: '218355',
        },
        {
          name: 'portalType',
          columnType: 'STRING',
          id: '239306',
        },
      ],
      rows: [
        {
          rowId: 6,
          versionNumber: 46,
          values: [
            'adknowledgeportal',
            'https://adknowledgeportal.synapse.org/',
            'AD Knowledge Portal',
            "Discover and download Alzheimer's Disease data, analyses, and tools from the National Institute on Aging's Alzheimer's Disease Translational Research Program.",
            '121966198',
            'false',
            '#4d5491',
            '#2f8e94',
            'true',
            "Aging's Alzheimer's Disease Translational Research Program.",
            'SynapsePortal',
          ],
        },
      ],
    },
  },
} satisfies QueryResultBundle

export const mockCompleteSourceAppConfigAsyncJob: AsynchronousJobStatus<
  QueryBundleRequest,
  QueryResultBundle
> = {
  jobState: 'COMPLETE',
  jobCanceling: false,
  requestBody: mockQueryBundleRequest,
  responseBody: mockQueryResultBundle,
  etag: 'd7773e3a-982b-4a75-a695-3d56874e6ff1',
  jobId: '28927578',
  startedByUserId: 273950,
  startedOn: '2023-06-27T16:25:36.684Z',
  changedOn: '2023-06-27T16:25:55.274Z',
  progressMessage: 'Complete',
  progressCurrent: 100,
  progressTotal: 100,
  runtimeMS: 18590,
}
