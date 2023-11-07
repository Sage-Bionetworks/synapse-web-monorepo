import { Meta, StoryObj } from '@storybook/react'
import TableColumnSchemaEditor from './TableColumnSchemaEditor'
import {
  getAnnotationColumnHandlers,
  getDefaultColumnHandlers,
  getHandlersForTableQuery,
} from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../mocks/mockFileViewQuery'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

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
        ...getDefaultColumnHandlers(MOCK_REPO_ORIGIN),
        ...getAnnotationColumnHandlers(
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.ViewColumnModelResponse',
            results: [
              {
                id: '1235325',
                columnType: ColumnTypeEnum.STRING,
                name: 'columnFromAnnotations',
                maximumSize: 10,
              },
            ],
          },
          MOCK_REPO_ORIGIN,
        ),
      ],
    },
  },
  args: {
    entityId: mockQueryBundleRequest.entityId,
  },
}
