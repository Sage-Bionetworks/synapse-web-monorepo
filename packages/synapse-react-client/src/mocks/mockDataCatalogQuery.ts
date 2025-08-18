import {
  AsynchronousJobStatus,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'

export const mockQueryBundleRequest: QueryBundleRequest = {
  entityId: 'syn6000',
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask: 255,
  query: {
    sql: 'SELECT * FROM syn6000',
  },
}

export const mockQueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn6000',
      etag: 'b37bd5cd-f643-4223-95c8-f26a73cf0c26',
      headers: [
        {
          name: 'id',
          columnType: 'ENTITYID',
          id: '81721',
        },
        {
          name: 'isFeatured',
          columnType: 'BOOLEAN',
          id: '121541',
        },
        {
          name: 'community',
          columnType: 'STRING',
          id: '238321',
        },
        {
          name: 'name',
          columnType: 'STRING',
          id: '84902',
        },
        {
          name: 'description',
          columnType: 'MEDIUMTEXT',
          id: '194033',
        },
        {
          name: 'contributors',
          columnType: 'STRING',
          id: '238322',
        },
        {
          name: 'keywords',
          columnType: 'STRING_LIST',
          id: '238324',
        },
        {
          name: 'individuals',
          columnType: 'INTEGER',
          id: '238065',
        },
        {
          name: 'image',
          columnType: 'FILEHANDLEID',
          id: '127219',
        },
        {
          name: 'size',
          columnType: 'DOUBLE',
          id: '111683',
        },
        {
          name: 'sizeUnit',
          columnType: 'STRING',
          id: '216213',
        },
        {
          name: 'dimensions',
          columnType: 'STRING',
          id: '216214',
        },
        {
          name: 'includedInDataCatalog',
          columnType: 'BOOLEAN',
          id: '217591',
        },
        {
          name: 'link',
          columnType: 'LINK',
          id: '238325',
        },
        {
          name: 'croissant',
          columnType: 'ENTITYID',
          id: '237752',
        },
        {
          name: 'appId',
          columnType: 'STRING',
          id: '184883',
        },
      ],
      rows: [
        {
          rowId: 13,
          versionNumber: 93,
          values: [
            'syn51732482',
            'true',
            "Alzheimer's Disease",
            "The Accelerating Medicines Partnership Alzheimer's Disease Diverse Cohorts Study",
            'This study provides post-mortem whole genome sequencing and brain bulk RNA sequencing data from over 850 individuals, including 288 Black or African American individuals and 330 Hispanic individuals representing the spectrum of Alzheimer’s Disease phenotypes.',
            'AMP-AD Consortium',
            '["Alzheimer’s Disease", "genomics", "diversity"]',
            '908',
            null,
            '54.7',
            'TB',
            null,
            'true',
            'https://adknowledgeportal.synapse.org/Explore/Studies/DetailsPage/StudyDetails?Study=syn51732482',
            'syn64765734',
            'adknowledgeportal',
          ],
        },
      ],
    },
  },
  queryCount: 1,
} satisfies QueryResultBundle

export const mockCompleteDataCatalogAsyncJob: AsynchronousJobStatus<
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
