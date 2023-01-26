import { ColumnType } from '../../lib/utils/synapseTypes'
const mockData = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  columnModels: [
    {
      id: '2510',
      name: 'id',
      defaultValue: 'a',
      columnType: ColumnType.STRING,
      enumValues: ['a'],
      maximumSize: 89,
      facetType: 'enumeration',
    },
  ],
  facets: [
    {
      concreteType: 'a',
      facetType: 'enumeration',
      columnName: 'name',
      facetValues: [
        {
          value: 'a',
          count: 1,
          isSelected: true,
        },
        {
          value: 'b',
          count: 10,
          isSelected: true,
        },
        {
          value: 'c',
          count: 4,
          isSelected: true,
        },
      ],
    },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryResults: {
      tableId: 'syn5604373',
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      etag: 's',
      rows: [
        {
          rowId: 1,
          values: ['syn5604373'],
          versionNumber: 123,
          etag: 'a',
        },
      ],
      headers: [
        {
          name: 'Name',
          columnType: ColumnType.STRING,
          id: 'a',
        },
      ],
    },
    nextPageToken: { token: '123' },
  },
  queryCount: 100,
  selectColumns: [{ name: 'name', columnType: ColumnType.STRING, id: 'a' }],
  sumFileSizes: { sumFileSizesBytes: 1000, greaterThan: false },
  maxRowsPerPage: 100,
}

export default mockData
