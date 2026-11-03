import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import {
  createColumnCategoryTableQueryResultBundle,
  MOCK_COLUMN_CATEGORY_TABLE_ID,
  mockModelColumnCategoryRows,
  mockModelRowData,
  mockModelRowHeaders,
} from '@/mocks/query/mockColumnCategoryTable'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import CategorizedRowDataTable, {
  getColumnCategoryTableQuery,
} from './CategorizedRowDataTable'

const meta = {
  title: 'UI/RowDataTable/CategorizedRowDataTable',
  component: CategorizedRowDataTable,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: {
        tableQuery: getHandlersForTableQuery(
          MOCK_REPO_ORIGIN,
          MOCK_COLUMN_CATEGORY_TABLE_ID,
        ),
      },
    },
  },
  args: {
    rowData: mockModelRowData,
    headers: mockModelRowHeaders,
    columnCategoryTableId: MOCK_COLUMN_CATEGORY_TABLE_ID,
  },
  loaders: [
    () =>
      registerTableQueryResult(
        getColumnCategoryTableQuery(MOCK_COLUMN_CATEGORY_TABLE_ID),
        createColumnCategoryTableQueryResultBundle(
          MOCK_COLUMN_CATEGORY_TABLE_ID,
          mockModelColumnCategoryRows,
        ),
      ),
  ],
} satisfies Meta<typeof CategorizedRowDataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
