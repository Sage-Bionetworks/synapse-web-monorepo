import { Meta, StoryObj } from '@storybook/react'
import TimelinePlot from './TimelinePlot'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'
import queryResultBundleJson from '../../mocks/query/syn51735464'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Components/TimelinePlot',
  component: TimelinePlot,
  parameters: { stack: 'mock' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sql: `SELECT * FROM syn51735464`,
    searchParams: {
      resourceId: '9971e47e-976a-4631-8edd-5cae04304b01',
    },
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    defaultSpecies: 'Mus musculus',
  },
  parameters: {
    msw: {
      handlers: [
        rest.get(
          MOCK_REPO_ORIGIN + '/repo/v1/entity/syn51735464',
          (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({ ...mockTableEntity, id: 'syn51735464' }),
            )
          },
        ),
        ...getHandlersForTableQuery(queryResultBundleJson, MOCK_REPO_ORIGIN),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
