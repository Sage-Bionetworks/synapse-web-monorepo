import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { getHandlersForTableQuery } from '@/mocks/msw/handlers/tableQueryHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import queryResultBundleJson from '@/mocks/query/syn16787123'
import { SynapseConstants } from '@/utils'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { DEFAULT_PAGE_SIZE } from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { SynapseTable } from './SynapseTable'

const request: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: '12345',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
  query: {
    sql: 'SELECT * FROM syn16787123',
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
    selectedFacets: [
      {
        columnName: 'projectStatus',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: ['Active', 'Completed'],
      },
      {
        columnName: 'tumorType',
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        facetValues: [
          SynapseConstants.VALUE_NOT_SET,
          'Cutaneous Neurofibroma',
          'JMML',
          'Low Grade Glioma',
          'MPNST',
          'Plexiform Neurofibroma',
          'Plexiform Neurofibroma | MPNST',
          'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
          'Schwannoma',
          'Schwannoma | Meningioma',
          'SMN',
        ],
      },
    ],
  },
}

const meta: Meta = {
  title: 'Explore/SynapseTable',
  component: SynapseTable,
  parameters: { stack: 'mock' },
  decorators: [
    Story => (
      <QueryWrapper initQueryRequest={request}>
        <QueryVisualizationWrapper visibleColumnCount={2}>
          <Story />
        </QueryVisualizationWrapper>
      </QueryWrapper>
    ),
  ],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const SynapseTableDemo: Story = {
  loaders: [
    () => {
      registerTableQueryResult(request.query, queryResultBundleJson)
    },
  ],
  parameters: {
    msw: {
      handlers: [
        http.get(MOCK_REPO_ORIGIN + '/repo/v1/entity/syn16787123', () => {
          return HttpResponse.json(mockTableEntity, { status: 200 })
        }),
        ...getHandlersForTableQuery(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    rowSet: queryResultBundleJson.queryResult.queryResults,
  },
}
