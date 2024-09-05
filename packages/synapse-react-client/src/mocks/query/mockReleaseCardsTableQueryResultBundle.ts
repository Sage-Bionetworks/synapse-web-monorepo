import {
  ColumnModel,
  QueryResultBundle,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { MOCK_RELEASE_CARDS_TABLE_ID } from '../entity/mockReleaseCardsTable'

const columnModels: ColumnModel[] = [
  {
    name: 'releaseEntityId',
    columnType: 'ENTITYID',
    id: '207864',
  },
  {
    name: 'releaseName',
    columnType: 'STRING',
    id: '207865',
    maximumSize: 50,
  },
  {
    name: 'releaseDate',
    columnType: 'DATE',
    id: '207866',
  },
  {
    name: 'countPatients',
    columnType: 'INTEGER',
    id: '207920',
  },
  {
    name: 'countSamples',
    columnType: 'INTEGER',
    id: '207921',
  },
  {
    name: 'isCurrentRelease',
    columnType: 'BOOLEAN',
    id: '207868',
  },
  {
    name: 'releaseType',
    columnType: 'STRING',
    facetType: 'enumeration',
    id: '208002',
    maximumSize: 50,
    enumValues: ['CRC', 'NSCLC'],
  },
  {
    name: 'releaseExplorePath',
    columnType: 'STRING',
    id: '208001',
    defaultValue: '/explore/files/genie',
    maximumSize: 50,
    enumValues: ['/explore/files/genie', '/explore/files/genie-bpc'],
  },
  {
    name: 'exploreDataSql',
    columnType: 'STRING',
    id: '208850',
    defaultValue: 'select * from syn54100284',
    maximumSize: 50,
    enumValues: ['select * from syn54100284', 'select * from syn54100290'],
  },
  {
    name: 'version',
    columnType: 'STRING',
    id: '208851',
    maximumSize: 50,
  },
]
const headers: SelectColumn[] = columnModels.map(columnModel => {
  const sc: SelectColumn = { ...columnModel }
  return sc
})
const selectColumns = headers

export const mockCurrentReleaseCardsQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: MOCK_RELEASE_CARDS_TABLE_ID,
      etag: 'e2bac0de-5ab6-411d-bf76-7c5a2a2df707',
      headers: headers,
      rows: [
        {
          rowId: 1,
          versionNumber: 16,
          values: [
            'syn53701297',
            'GENIE 15.0-public',
            '1704235503000',
            '198041',
            '172005',
            'true',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '15.0-public',
          ],
        },
        {
          rowId: 2,
          versionNumber: 14,
          values: [
            'syn51417430',
            'CRC 2.0-public',
            '1667339328000',
            '1486',
            '1552',
            'true',
            'CRC',
            '/explore/files/genie-bpc',
            'select * from syn54100290',
            '2.0-public',
          ],
        },
        {
          rowId: 3,
          versionNumber: 14,
          values: [
            'syn51417430',
            'NSCLC 2.0-public',
            '1651441766000',
            '1846',
            '2004',
            'true',
            'NSCLC',
            '/explore/files/genie-bpc',
            'select * from syn54100290',
            '2.0-public',
          ],
        },
      ],
    },
  },
  queryCount: 3,
  selectColumns: selectColumns,
  maxRowsPerPage: 2957,
  columnModels: columnModels,
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'releaseType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'main',
          count: 1,
          isSelected: false,
        },
        {
          value: 'CRC',
          count: 1,
          isSelected: false,
        },
        {
          value: 'NSCLC',
          count: 1,
          isSelected: false,
        },
      ],
    },
  ],
  sumFileSizes: {
    sumFileSizesBytes: 0,
    greaterThan: false,
  },
  lastUpdatedOn: '2024-03-02T16:16:43.968Z',
}

export const mockPreviousReleaseCardsQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: MOCK_RELEASE_CARDS_TABLE_ID,
      etag: 'e2bac0de-5ab6-411d-bf76-7c5a2a2df707',
      headers: headers,
      rows: [
        {
          rowId: 4,
          versionNumber: 16,
          values: [
            'syn51417430',
            '14.1-public',
            '1704235808000',
            '170505',
            '196541',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '14.1-public',
          ],
        },
        {
          rowId: 5,
          versionNumber: 16,
          values: [
            'syn51417430',
            '14.0-public',
            '1699570245000',
            '169005',
            '195041',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '14.0-public',
          ],
        },
        {
          rowId: 6,
          versionNumber: 16,
          values: [
            'syn53701297',
            '13.1-public',
            '1694814677000',
            '166005',
            '192041',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '13.1-public',
          ],
        },
        {
          rowId: 7,
          versionNumber: 16,
          values: [
            'syn53701297',
            '13.0-public',
            '1692913961000',
            '166005',
            '192041',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '13.0-public',
          ],
        },
        {
          rowId: 8,
          versionNumber: 16,
          values: [
            'syn53701297',
            '12.1-public',
            '1692914000000',
            '163005',
            '189041',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '12.1-public',
          ],
        },
        {
          rowId: 10,
          versionNumber: 16,
          values: [
            'syn53701297',
            '11.0-public',
            '1689194860000',
            '160005',
            '180022',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '11.0-public',
          ],
        },
        {
          rowId: 11,
          versionNumber: 16,
          values: [
            'syn53701297',
            '10.1-public',
            '1687898860000',
            '150525',
            '172324',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            '10.1-public',
          ],
        },
        {
          rowId: 12,
          versionNumber: 18,
          values: [
            'syn53701297',
            'test release missing data',
            '1686689260000',
            null,
            '172324',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            'Test.1-public',
          ],
        },
        {
          rowId: 13,
          versionNumber: 16,
          values: [
            'syn53701297',
            'very very long release name',
            '1709165287000',
            '123456789012345',
            '123456789012345',
            'false',
            'main',
            '/explore/files/genie',
            'select * from syn54100284',
            'Test.2-public',
          ],
        },
      ],
    },
  },
  queryCount: 9,
  selectColumns: selectColumns,
  maxRowsPerPage: 2957,
  columnModels: columnModels,
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'releaseType',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'main',
          count: 9,
          isSelected: false,
        },
      ],
    },
  ],
  sumFileSizes: {
    sumFileSizesBytes: 0,
    greaterThan: false,
  },
  lastUpdatedOn: '2024-03-02T16:16:43.968Z',
}
