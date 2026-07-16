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
const FILTER_COLUMN_NAME = 'DataType_All'

const mockDataExplorerQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { name: 'datatype', columnType: 'STRING' },
    { name: 'icon', columnType: 'FILEHANDLEID' },
    { name: 'hexColor', columnType: 'STRING' },
    { name: 'order', columnType: 'INTEGER' },
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
      ],
      rows: [
        { rowId: 1, values: ['Not Assigned', null, '#F59E0B', '3'] },
        { rowId: 2, values: ['Clinical', null, '#8B5CF6', '1'] },
        { rowId: 3, values: ['Immunoassay ', null, '#EF4444', '2'] },
        { rowId: 4, values: ['Gene Expression', null, '#8B5CF6', '1'] },
        { rowId: 6, values: ['Raw Data', null, '#EF4444', '2'] },
        { rowId: 5, values: ['Metabolomics', null, '#F59E0B', '3'] },
        { rowId: 6, values: ['Proteomics', null, '#EF4444', '2'] },
        { rowId: 6, values: ['Imaging', null, '#EF4444', '2'] },
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
      columnName: FILTER_COLUMN_NAME,
      facetType: 'enumeration',
      facetValues: [
        { value: 'Gene Expression', count: 129, isSelected: false },
        { value: 'Proteomics', count: 42, isSelected: false },
        { value: 'Immunoassay', count: 28, isSelected: false },
        { value: 'Metabolomics', count: 27, isSelected: false },
        { value: 'Clinical', count: 10, isSelected: false },
        { value: 'Raw Data', count: 4, isSelected: false },
        { value: 'Imaging', count: 62, isSelected: false },
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
    filterColumnName: FILTER_COLUMN_NAME,
  },
}
