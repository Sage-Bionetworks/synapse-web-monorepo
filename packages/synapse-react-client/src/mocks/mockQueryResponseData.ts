import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const mockQueryResponseData = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn21450294',
      etag: '406c475c-8cd1-4c4b-9d37-4e5a4686d70b',
      headers: [
        {
          name: 'Year',
          columnType: 'INTEGER',
          id: '86423',
        },
        {
          name: 'Make',
          columnType: 'STRING',
          id: '86424',
        },
        {
          name: 'Model',
          columnType: 'STRING',
          id: '86425',
        },
        {
          name: 'Description',
          columnType: 'STRING',
          id: '87897',
        },
        {
          name: 'Price',
          columnType: 'INTEGER',
          id: '87903',
        },
        {
          name: 'synid',
          columnType: 'ENTITYID',
          id: '86428',
        },
        {
          name: 'DateEntered',
          columnType: 'DATE',
          id: '87904',
        },
        {
          name: 'EnteredBy',
          columnType: 'USERID',
          id: '87905',
        },
        {
          name: 'Lemon',
          columnType: 'BOOLEAN',
          id: '87906',
        },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 1,
          values: [
            '1997',
            'Ford',
            'E350',
            'ac, abs, moon',
            '3000',
            null,
            '1567525763000',
            '345424',
            'true',
          ],
        },
        {
          rowId: 2,
          versionNumber: 2,
          values: [
            '1999',
            'Honda',
            'Venture "Extended Edition"',
            '',
            '4900',
            'syn7844998',
            null,
            '273960',
            'false',
          ],
        },
        {
          rowId: 3,
          versionNumber: 1,
          values: [
            '1999',
            'Chevy',
            'Venture "Extended Edition, Very Large"',
            null,
            '5000',
            null,
            '1574268563000',
            '273984',
            null,
          ],
        },
        {
          rowId: 4,
          versionNumber: 1,
          values: [
            '1996',
            'Honda',
            'Grand Cherokee',
            'MUST SELL!air, moon roof, loaded',
            '4799',
            null,
            '1575305363000',
            '273978',
            null,
          ],
        },
      ],
    },
  },
  selectColumns: [
    {
      name: 'Year',
      columnType: 'INTEGER',
      id: '86423',
    },
    {
      name: 'Make',
      columnType: 'STRING',
      id: '86424',
    },
    {
      name: 'Model',
      columnType: 'STRING',
      id: '86425',
    },
    {
      name: 'Description',
      columnType: 'STRING',
      id: '87897',
    },
    {
      name: 'Price',
      columnType: 'INTEGER',
      id: '87903',
    },
    {
      name: 'synid',
      columnType: 'ENTITYID',
      id: '86428',
    },
    {
      name: 'DateEntered',
      columnType: 'DATE',
      id: '87904',
    },
    {
      name: 'EnteredBy',
      columnType: 'USERID',
      id: '87905',
    },
    {
      name: 'Lemon',
      columnType: 'BOOLEAN',
      id: '87906',
    },
  ],
  columnModels: [
    {
      id: '86423',
      name: 'Year',
      columnType: 'INTEGER',
      facetType: 'range',
    },
    {
      id: '86424',
      name: 'Make',
      columnType: 'STRING',
      maximumSize: 5,
      facetType: 'enumeration',
    },
    {
      id: '86425',
      name: 'Model',
      columnType: 'STRING',
      maximumSize: 38,
      facetType: 'enumeration',
    },
    {
      id: '87897',
      name: 'Description',
      columnType: 'STRING',
      maximumSize: 32,
    },
    {
      id: '87903',
      name: 'Price',
      columnType: 'INTEGER',
      facetType: 'range',
    },
    {
      id: '86428',
      name: 'synid',
      columnType: 'ENTITYID',
      facetType: 'enumeration',
    },
    {
      id: '87904',
      name: 'DateEntered',
      columnType: 'DATE',
      facetType: 'range',
    },
    {
      id: '87905',
      name: 'EnteredBy',
      columnType: 'USERID',
      facetType: 'enumeration',
    },
    {
      id: '87906',
      name: 'Lemon',
      columnType: 'BOOLEAN',
      facetType: 'enumeration',
    },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'Year',
      facetType: 'range',
      columnMin: '1996',
      selectedMin: '1997',
      selectedMax: '1999',
      columnMax: '1999',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'Make',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'Honda',
          count: 2,
          isSelected: true,
        },
        {
          value: 'Chevy',
          count: 1,
          isSelected: true,
        },
        {
          value: 'Ford',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'Model',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'E350',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Grand Cherokee',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Venture "Extended Edition, Very Large"',
          count: 1,
          isSelected: false,
        },
        {
          value: 'Venture "Extended Edition"',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'Price',
      facetType: 'range',
      columnMin: '3000',
      columnMax: '5000',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'synid',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 3,
          isSelected: false,
        },
        {
          value: 'syn7844998',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      columnName: 'DateEntered',
      facetType: 'range',
      columnMin: '1567525763000',
      columnMax: '1575305363000',
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'EnteredBy',
      facetType: 'enumeration',
      facetValues: [
        {
          value: '273960',
          count: 1,
          isSelected: false,
        },
        {
          value: '273978',
          count: 1,
          isSelected: false,
        },
        {
          value: '273984',
          count: 1,
          isSelected: false,
        },
        {
          value: '345424',
          count: 1,
          isSelected: false,
        },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'Lemon',
      facetType: 'enumeration',
      facetValues: [
        {
          value: 'org.sagebionetworks.UNDEFINED_NULL_NOTSET',
          count: 2,
          isSelected: false,
        },
        {
          value: 'false',
          count: 1,
          isSelected: false,
        },
        {
          value: 'true',
          count: 1,
          isSelected: false,
        },
      ],
    },
  ],
} satisfies QueryResultBundle

export default mockQueryResponseData
