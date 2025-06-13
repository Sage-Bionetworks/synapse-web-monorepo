import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import queryResultBundleJson from '@/mocks/query/syn51735464'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import TimelinePlot from './TimelinePlot'

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
  loaders: [
    () =>
      registerTableQueryResult(
        {
          sql: 'SELECT * FROM syn51735464 WHERE observationTime IS NOT NULL',
          sort: [
            {
              column: 'observationTime',
              direction: 'ASC',
            },
          ],
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'resourceId',
              operator: ColumnSingleValueFilterOperator.EQUAL,
              values: ['9971e47e-976a-4631-8edd-5cae04304b01'],
            },
            {
              columnName: 'species',
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
              values: ['Mus musculus'],
              function: ColumnMultiValueFunction.HAS,
            },
          ],
        },
        queryResultBundleJson,
      ),
  ],
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        http.get(MOCK_REPO_ORIGIN + '/repo/v1/entity/syn51735464', () => {
          return HttpResponse.json(
            { ...mockTableEntity, id: 'syn51735464' },
            { status: 200 },
          )
        }),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
