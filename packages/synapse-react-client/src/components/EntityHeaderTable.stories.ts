import { Meta, StoryObj } from '@storybook/react'
import { MOCK_REPO_ORIGIN } from '../utils/functions/getEndpoint'
import { getHandlers } from '../mocks/msw/handlers'
import { EntityHeaderTable } from './EntityHeaderTable'
import { MOCK_FILE_ENTITY_ID } from '../mocks/entity/mockFileEntity'
import { MOCK_TABLE_ENTITY_ID } from '../mocks/entity/mockTableEntity'

const meta = {
  title: 'Governance/EntityHeaderTable',
  component: EntityHeaderTable,
  parameters: {
    stack: 'mock',
  },
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'EntityHeaderTable',
  args: {
    references: [
      {
        targetId: MOCK_FILE_ENTITY_ID,
      },
      {
        targetId: MOCK_TABLE_ENTITY_ID,
      },
    ],
  },
  parameters: {
    msw: {
      handlers: { ...getHandlers(MOCK_REPO_ORIGIN) },
    },
  },
}
