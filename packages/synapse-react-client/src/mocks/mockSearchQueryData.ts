import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { SearchIndex, SearchIndexQuery } from '@sage-bionetworks/synapse-client'
import { MockEntityData } from '@/mocks/entity/MockEntityData'
import { Entity } from '@sage-bionetworks/synapse-types'

/** The SearchIndex entity that accepts search API calls and has a definingSql. */
export const MOCK_SEARCH_INDEX_ENTITY_ID = 'syn60001'
/** The underlying Table/View whose schema (column models) backs the search index. */
export const MOCK_SEARCH_UNDERLYING_TABLE_ENTITY_ID = 'syn60000'

/** Mock SearchIndex entity whose definingSQL references the underlying table. */
export const mockSearchIndexEntity: SearchIndex = {
  id: MOCK_SEARCH_INDEX_ENTITY_ID,
  name: 'Mock Search Index',
  concreteType: 'org.sagebionetworks.repo.model.search.table.SearchIndex',
  definingSQL: `SELECT * FROM ${MOCK_SEARCH_UNDERLYING_TABLE_ENTITY_ID}`,
}

/** MockEntityData wrapper so the default entity GET handler can serve syn60001. */
export const mockSearchIndexEntityData: MockEntityData = {
  id: MOCK_SEARCH_INDEX_ENTITY_ID,
  name: mockSearchIndexEntity.name!,
  entity: mockSearchIndexEntity as unknown as Entity,
}

export const mockSearchIndexQuery: SearchIndexQuery = {
  concreteType: 'org.sagebionetworks.repo.model.search.table.SearchIndexQuery',
  searchQuery: {
    limit: 25,
    offset: 0,
  },
}

export const mockSearchQueryResultBundle: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: 53,
  selectColumns: [
    { name: 'mature', columnType: 'STRING' },
    { name: 'acronym', columnType: 'STRING' },
    { name: 'name', columnType: 'STRING' },
    { name: 'category', columnType: 'STRING' },
    { name: 'collections', columnType: 'STRING_LIST' },
    { name: 'topic', columnType: 'STRING_LIST' },
    { name: 'dataTypes', columnType: 'STRING_LIST' },
    { name: 'isOpen', columnType: 'STRING' },
    { name: 'registration', columnType: 'STRING' },
  ],
  columnModels: [
    {
      id: '245711',
      name: 'mature',
      columnType: 'STRING',
      maximumSize: 50,
      facetType: 'enumeration',
    },
    { id: '240032', name: 'acronym', columnType: 'STRING', maximumSize: 100 },
    { id: '244787', name: 'name', columnType: 'STRING', maximumSize: 256 },
    {
      id: '245706',
      name: 'category',
      columnType: 'STRING',
      maximumSize: 100,
      facetType: 'enumeration',
    },
    {
      id: '245526',
      name: 'collections',
      columnType: 'STRING_LIST',
      maximumListLength: 100,
      facetType: 'enumeration',
    },
    {
      id: '243320',
      name: 'topic',
      columnType: 'STRING_LIST',
      maximumListLength: 100,
      facetType: 'enumeration',
    },
    {
      id: '240611',
      name: 'dataTypes',
      columnType: 'STRING_LIST',
      maximumListLength: 100,
      facetType: 'enumeration',
    },
    {
      id: '245712',
      name: 'isOpen',
      columnType: 'STRING',
      maximumSize: 10,
      facetType: 'enumeration',
    },
    {
      id: '245713',
      name: 'registration',
      columnType: 'STRING',
      maximumSize: 10,
      facetType: 'enumeration',
    },
  ],
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'collections',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Machine Learning Framework', count: 11, isSelected: false },
        { value: 'File Format', count: 8, isSelected: false },
        { value: 'OBO Foundry', count: 6, isSelected: false },
        {
          value: 'Implementation Maturity Production',
          count: 5,
          isSelected: false,
        },
        {
          value: 'Standards Process Maturity Final',
          count: 4,
          isSelected: false,
        },
        { value: 'Cloud Platform', count: 3, isSelected: false },
        { value: 'Graph Data Platform', count: 3, isSelected: false },
        { value: 'Notebook Platform', count: 3, isSelected: false },
        { value: 'Cloud Service', count: 1, isSelected: false },
        { value: 'Data Model', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'category',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Software or Tool', count: 33, isSelected: false },
        { value: 'Biomedical Standard', count: 8, isSelected: false },
        { value: 'Ontology or Vocabulary', count: 8, isSelected: false },
        { value: 'Data Standard', count: 2, isSelected: false },
        { value: 'Training Program', count: 2, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'topic',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Data', count: 27, isSelected: false },
        { value: 'Genome', count: 6, isSelected: false },
        { value: 'Clinical Observations', count: 4, isSelected: false },
        { value: 'Image', count: 3, isSelected: false },
        { value: 'Networks And Pathways', count: 3, isSelected: false },
        { value: 'EHR', count: 2, isSelected: false },
        { value: 'Gene', count: 2, isSelected: false },
        { value: 'Training', count: 2, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'dataTypes',
      facetType: 'enumeration',
      facetValues: [
        { value: 'PyTorch Tensor', count: 3, isSelected: false },
        { value: 'Array', count: 2, isSelected: false },
        { value: 'Database', count: 2, isSelected: false },
        { value: 'Graph', count: 2, isSelected: false },
        { value: 'Graph Database', count: 2, isSelected: false },
        { value: 'BED', count: 1, isSelected: false },
        { value: 'DICOM', count: 1, isSelected: false },
        { value: 'Neo4j', count: 1, isSelected: false },
        { value: 'ONNX', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'isOpen',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Yes', count: 50, isSelected: false },
        { value: 'No', count: 3, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'mature',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Is Not Mature', count: 48, isSelected: false },
        { value: 'Is Mature', count: 5, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'registration',
      facetType: 'enumeration',
      facetValues: [
        { value: 'No', count: 44, isSelected: false },
        { value: 'Yes', count: 9, isSelected: false },
      ],
    },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: MOCK_SEARCH_INDEX_ENTITY_ID,
      etag: 'search-mock-etag',
      headers: [
        { name: 'mature', columnType: 'STRING', id: '245711' },
        { name: 'acronym', columnType: 'STRING', id: '240032' },
        { name: 'name', columnType: 'STRING', id: '244787' },
        { name: 'category', columnType: 'STRING', id: '245706' },
        { name: 'collections', columnType: 'STRING_LIST', id: '245526' },
        { name: 'topic', columnType: 'STRING_LIST', id: '243320' },
        { name: 'dataTypes', columnType: 'STRING_LIST', id: '240611' },
        { name: 'isOpen', columnType: 'STRING', id: '245712' },
        { name: 'registration', columnType: 'STRING', id: '245713' },
      ],
      rows: [
        {
          rowId: 1,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'PyTorch',
            'PyTorch',
            'Software or Tool',
            '["Machine Learning Framework"]',
            '["Data"]',
            '["PyTorch Tensor"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 2,
          versionNumber: 1,
          values: [
            'Is Mature',
            'TF',
            'TensorFlow',
            'Software or Tool',
            '["Machine Learning Framework"]',
            '["Data"]',
            '["Tensor"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 3,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'HDF5',
            'Hierarchical Data Format 5',
            'Data Standard',
            '["File Format"]',
            '["Data"]',
            '["Array"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 4,
          versionNumber: 1,
          values: [
            'Is Mature',
            'DICOM',
            'Digital Imaging and Communications in Medicine',
            'Biomedical Standard',
            '["File Format"]',
            '["Image"]',
            '["DICOM"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 5,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'Neo4j',
            'Neo4j Graph Database',
            'Software or Tool',
            '["Graph Data Platform"]',
            '["Data"]',
            '["Neo4j"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 6,
          versionNumber: 1,
          values: [
            'Is Mature',
            'GO',
            'Gene Ontology',
            'Ontology or Vocabulary',
            '["OBO Foundry"]',
            '["Gene"]',
            null,
            'Yes',
            'No',
          ],
        },
        {
          rowId: 7,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'ONNX',
            'Open Neural Network Exchange',
            'Data Standard',
            '["Machine Learning Framework"]',
            '["Data"]',
            '["ONNX"]',
            'Yes',
            'No',
          ],
        },
        {
          rowId: 8,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'Jupyter',
            'JupyterHub',
            'Software or Tool',
            '["Notebook Platform"]',
            '["Training"]',
            null,
            'Yes',
            'No',
          ],
        },
        {
          rowId: 9,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'AWS',
            'Amazon Web Services',
            'Software or Tool',
            '["Cloud Platform"]',
            '["Data"]',
            null,
            'Yes',
            'Yes',
          ],
        },
        {
          rowId: 10,
          versionNumber: 1,
          values: [
            'Is Not Mature',
            'HPO',
            'Human Phenotype Ontology',
            'Ontology or Vocabulary',
            '["OBO Foundry"]',
            '["Clinical Observations"]',
            null,
            'Yes',
            'No',
          ],
        },
      ],
    },
  },
}
