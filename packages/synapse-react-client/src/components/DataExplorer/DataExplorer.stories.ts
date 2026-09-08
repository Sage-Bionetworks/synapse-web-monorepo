import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import DataExplorer from './DataExplorer'

const TABLE_ID = 'syn75201966'
const STUDIES_TABLE_ID = 'syn17083367'
const DATA_TYPE_SQL = `SELECT * FROM ${TABLE_ID}`
const STUDIES_SQL = `SELECT * FROM ${STUDIES_TABLE_ID}`

const mockDataExplorerQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { name: 'datatype', columnType: 'STRING' },
    { name: 'icon', columnType: 'FILEHANDLEID' },
    { name: 'hexColor', columnType: 'STRING' },
    { name: 'order', columnType: 'INTEGER' },
    { name: 'columnName', columnType: 'STRING' },
  ],
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: TABLE_ID,
      etag: 'DEFAULT',
      headers: [
        { name: 'datatype', columnType: 'STRING', id: '1' },
        { name: 'icon', columnType: 'FILEHANDLEID', id: '2' },
        { name: 'hexColor', columnType: 'STRING', id: '3' },
        { name: 'order', columnType: 'INTEGER', id: '4' },
        { name: 'columnName', columnType: 'STRING', id: '5' },
      ],
      rows: [
        {
          rowId: 1,
          values: ['Clinical', null, '#718AC8', '4', 'DataType_All'],
        },
        {
          rowId: 2,
          values: ['Not Assigned', null, '#718AC8', '4', 'DataType_All'],
        },
        {
          rowId: 3,
          values: ['Gene Expression', null, '#EE986D', '3', 'DataType_All'],
        },
        {
          rowId: 4,
          values: ['Immunoassay ', null, '#EE986D', '3', 'DataType_All'],
        },
        {
          rowId: 5,
          values: ['Proteomics', null, '#EE986D', '3', 'DataType_All'],
        },
        { rowId: 6, values: ['Marmoset', null, '#8F65A4', '1', 'Species'] },
        { rowId: 7, values: ['Human', null, '#8F65A4', '1', 'Species'] },
        { rowId: 8, values: ['Mouse', null, '#8F65A4', '1', 'Species'] },
        { rowId: 9, values: ['Brain', null, '#E4A33E', '2', 'specimenType'] },
        { rowId: 10, values: ['Blood', null, '#E4A33E', '2', 'specimenType'] },
      ],
    },
  },
}

const mockStudiesFacetResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  facets: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'DataType_All',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Gene Expression', count: 129, isSelected: false },
        { value: 'Proteomics', count: 42, isSelected: false },
        { value: 'Immunoassay', count: 28, isSelected: false },
        { value: 'Clinical', count: 10, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'Species',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Human', count: 116, isSelected: false },
        { value: 'Mouse', count: 67, isSelected: false },
        { value: 'Marmoset', count: 1, isSelected: false },
      ],
    },
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'specimenType',
      facetType: 'enumeration',
      facetValues: [
        { value: 'Brain', count: 150, isSelected: false },
        { value: 'Blood', count: 30, isSelected: false },
      ],
    },
  ],
}

const meta = {
  title: 'Home Page/DataExplorer',
  component: DataExplorer,
  parameters: {
    stack: 'mock',
  },
} satisfies Meta<typeof DataExplorer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [...getHandlersForTableQuery(MOCK_REPO_ORIGIN)],
    },
  },
  loaders: [
    () => {
      registerTableQueryResult(
        { sql: DATA_TYPE_SQL },
        mockDataExplorerQueryResult,
      )
      registerTableQueryResult({ sql: STUDIES_SQL }, mockStudiesFacetResult)
    },
  ],
  args: {
    sql: DATA_TYPE_SQL,
    facetSql: STUDIES_SQL,
    title: 'Some text',
    subtitle: 'Some more text',
    buttonText: 'Button text',
    buttonLink: '',
    explorePath: '/Explore/Studies',
    exploreQuerySql: STUDIES_SQL,
  },
}
