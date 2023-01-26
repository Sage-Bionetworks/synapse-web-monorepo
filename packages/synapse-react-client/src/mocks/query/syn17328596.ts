// result of querying table syn17328596
export const syn17328596 = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: 'syn17328596',
      etag: '5b0d0ddd-0547-48e8-b96d-9648f996bb2b',
      headers: [
        { name: 'isFruit', columnType: 'BOOLEAN', id: '72519' },
        { name: 'isVegetable', columnType: 'BOOLEAN', id: '72520' },
        { name: 'item', columnType: 'STRING', id: '72521' },
      ],
      rows: [
        { rowId: 0, versionNumber: 1, values: ['true', 'false', 'apple'] },
        { rowId: 1, versionNumber: 1, values: ['true', 'false', 'pear'] },
        { rowId: 2, versionNumber: 1, values: ['false', 'false', 'chicken'] },
        { rowId: 3, versionNumber: 1, values: ['true', 'true', 'tomato'] },
        { rowId: 4, versionNumber: 1, values: ['false', 'true', 'carrot'] },
        { rowId: 5, versionNumber: 1, values: ['true', 'false', null] },
      ],
    },
  },
  selectColumns: [
    { name: 'isFruit', columnType: 'BOOLEAN', id: '72519' },
    { name: 'isVegetable', columnType: 'BOOLEAN', id: '72520' },
    { name: 'item', columnType: 'STRING', id: '72521' },
  ],
  columnModels: [
    {
      id: '72519',
      name: 'isFruit',
      defaultValue: 'true',
      columnType: 'BOOLEAN',
      facetType: 'enumeration',
    },
    {
      id: '72520',
      name: 'isVegetable',
      defaultValue: 'false',
      columnType: 'BOOLEAN',
      facetType: 'enumeration',
    },
    { id: '72521', name: 'item', columnType: 'STRING', maximumSize: 50 },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'isFruit',
      facetType: 'enumeration',
      facetValues: [
        { value: 'false', count: 2, isSelected: false },
        { value: 'true', count: 4, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'isVegetable',
      facetType: 'enumeration',
      facetValues: [
        { value: 'false', count: 4, isSelected: false },
        { value: 'true', count: 2, isSelected: false },
      ],
    },
  ],
}
