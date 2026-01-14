import { Meta, StoryObj } from '@storybook/react-vite'
import QueryCountButton from './QueryCountButton'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'UI/QueryCountButton',
  component: QueryCountButton,
  parameters: { stack: 'mock' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const TABLE_ID = 'syn12345678'
const MOCK_SQL = `SELECT * FROM ${TABLE_ID}`

const createMockQueryResult = (count: number): QueryResultBundle => ({
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryCount: count,
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
      tableId: TABLE_ID,
      etag: 'etag',
      headers: [],
      rows: [],
    },
  },
})

export const Default: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files',
  },
  loaders: [
    () =>
      registerTableQueryResult({ sql: MOCK_SQL }, createMockQueryResult(42)),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}

export const WithoutPrefixText: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    suffixText: 'items available',
  },
  loaders: [
    () =>
      registerTableQueryResult({ sql: MOCK_SQL }, createMockQueryResult(42)),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}

export const WithoutSuffixText: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'View',
  },
  loaders: [
    () =>
      registerTableQueryResult({ sql: MOCK_SQL }, createMockQueryResult(42)),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}

export const CountOnly: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
  },
  loaders: [
    () =>
      registerTableQueryResult({ sql: MOCK_SQL }, createMockQueryResult(42)),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}

export const WithVariant: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'datasets',
    variant: 'outlined',
  },
  loaders: [
    () =>
      registerTableQueryResult({ sql: MOCK_SQL }, createMockQueryResult(42)),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}

export const LargeCount: Story = {
  args: {
    sql: MOCK_SQL,
    href: '/explore',
    prefixText: 'Explore',
    suffixText: 'files',
  },
  loaders: [
    () =>
      registerTableQueryResult(
        { sql: MOCK_SQL },
        createMockQueryResult(1234567),
      ),
  ],
  parameters: {
    msw: {
      handlers: getHandlersForTableQuery(),
    },
  },
}
