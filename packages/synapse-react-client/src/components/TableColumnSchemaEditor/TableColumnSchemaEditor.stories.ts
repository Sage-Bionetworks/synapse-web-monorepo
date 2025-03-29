import mockEntities from '@/mocks/entity'
import mockTableEntityData from '@/mocks/entity/mockTableEntity'
import { MOCK_ANNOTATION_COLUMN_RESPONSE } from '@/mocks/mockAnnotationColumns'
import { mockQueryResultBundle } from '@/mocks/mockFileViewQuery'
import {
  getAnnotationColumnHandlers,
  getDefaultColumnHandlers,
} from '@/mocks/msw/handlers/tableQueryHandlers'
import { ENTITY_BUNDLE_V2 } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { TableBundle } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import TableColumnSchemaEditor from './TableColumnSchemaEditor'

const meta = {
  title: 'Synapse/Table Column Schema Editor',
  component: TableColumnSchemaEditor,
  parameters: {
    stack: 'mock',
    design: [
      {
        name: 'Use Recommended Sizes button',
        type: 'figma',
        url: 'https://www.figma.com/design/ek9F9IqpsS8UnihBR9filP/Schema-Editor?node-id=83-9747',
      },
    ],
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const mockTableBundle: TableBundle = {
  columnModels: mockQueryResultBundle.columnModels,
  maxRowsPerPage: 25,
}

export const Demo: Story = {
  name: 'Table Column Schema Editor',
  parameters: {
    msw: {
      handlers: [
        ...getDefaultColumnHandlers(MOCK_REPO_ORIGIN),
        ...getAnnotationColumnHandlers(
          MOCK_ANNOTATION_COLUMN_RESPONSE,
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
