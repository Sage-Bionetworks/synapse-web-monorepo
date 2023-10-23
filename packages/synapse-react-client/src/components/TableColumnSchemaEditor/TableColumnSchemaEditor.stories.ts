import { Meta, StoryObj } from '@storybook/react'
import TableColumnSchemaEditor from './TableColumnSchemaEditor'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../mocks/mockFileViewQuery'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'

const meta = {
  title: 'Synapse/Table Column Schema Editor',
  component: TableColumnSchemaEditor,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(mockQueryResultBundle, MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    entityId: mockQueryBundleRequest.entityId,
  },
}
