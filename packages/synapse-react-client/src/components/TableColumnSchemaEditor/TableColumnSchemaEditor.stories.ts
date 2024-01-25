import { Meta, StoryObj } from '@storybook/react'
import TableColumnSchemaEditor from './TableColumnSchemaEditor'
import {
  getAnnotationColumnHandlers,
  getDefaultColumnHandlers,
} from '../../mocks/msw/handlers/tableQueryHandlers'
import { mockQueryResultBundle } from '../../mocks/mockFileViewQuery'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { TableBundle } from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import { ENTITY_BUNDLE_V2 } from '../../utils/APIConstants'
import mockTableEntityData from '../../mocks/entity/mockTableEntity'
import mockEntities from '../../mocks/entity'
import { MOCK_ANNOTATION_COLUMNS } from '../../mocks/mockAnnotationColumns'

const meta = {
  title: 'Synapse/Table Column Schema Editor',
  component: TableColumnSchemaEditor,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const mockTableBundle: TableBundle = {
  columnModels: mockQueryResultBundle.columnModels!,
  maxRowsPerPage: 25,
}

export const Demo: Story = {
  name: 'Table Column Schema Editor',
  parameters: {
    msw: {
      handlers: [
        ...getDefaultColumnHandlers(MOCK_REPO_ORIGIN),
        ...getAnnotationColumnHandlers(
          MOCK_ANNOTATION_COLUMNS,
          MOCK_REPO_ORIGIN,
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ENTITY_BUNDLE_V2(':entityId')}`,
          async (req, res, ctx) => {
            const entity =
              mockEntities.find(entity => entity.id === req.params.entityId) ||
              mockTableEntityData
            return res(
              ctx.status(200),
              ctx.json({
                entity: entity.entity,
                tableBundle: mockTableBundle,
              }),
            )
          },
        ),
      ],
    },
  },
  args: {
    entityId: mockTableEntityData.id,
    open: true,
  },
}
