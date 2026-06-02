import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import DataExplorer from './DataExplorer'

const TABLE_ID = 'syn75201966'

const mockDataExplorerQueryResult: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  selectColumns: [
    { name: 'datatype', columnType: 'STRING' },
    { name: 'icon', columnType: 'FILEHANDLEID' },
    { name: 'hexColor', columnType: 'STRING' },
    { name: 'fileCount', columnType: 'INTEGER' },
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
        { name: 'fileCount', columnType: 'INTEGER', id: '4' },
      ],
      rows: [
        { values: ['Test 1', null, '#8B5CF6', '42318'] },
        { values: ['Test 2', null, '#6366F1', '18204'] },
        { values: ['Test 3', null, '#3B82F6', '65821'] },
        { values: ['Test 4', null, '#10B981', '9471'] },
        { values: ['Test 5', null, '#F59E0B', '7652'] },
        { values: ['Test 6', null, '#EF4444', '3309'] },
      ],
    },
  },
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

export const ADKPHomepage: Story = {
  parameters: {
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [...getHandlersForTableQuery(MOCK_REPO_ORIGIN)],
    },
  },
  loaders: [
    () => {
      registerTableQueryResult(
        {
          sql: 'SELECT * FROM syn75201966',
          sort: [{ column: 'order', direction: 'ASC' }],
        },
        mockDataExplorerQueryResult,
      )
    },
  ],
  args: {
    sql: 'SELECT * FROM syn75201966',
    title: 'Some text',
    subtitle: 'Some more text',
    buttonText: 'Button text',
    buttonLink: '',
  },
}
