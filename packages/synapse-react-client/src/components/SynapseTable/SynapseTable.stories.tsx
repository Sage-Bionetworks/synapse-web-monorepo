import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import queryResultBundleJson from '../../mocks/query/syn16787123'
import SynapseTable from './SynapseTable'
import { QueryWrapper } from '../QueryWrapper'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { SynapseConstants } from '../../utils'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'

const meta: Meta = {
  title: 'Explore/SynapseTable',
  component: SynapseTable,
  parameters: { stack: 'mock' },
  decorators: [
    (Story, args) => (
      <QueryWrapper
        initQueryRequest={{
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
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
        }}
      >
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
  parameters: {
    msw: {
      handlers: [
        rest.get(
          MOCK_REPO_ORIGIN + '/repo/v1/entity/syn16787123',
          (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockTableEntity))
          },
        ),
        ...getHandlersForTableQuery(queryResultBundleJson, MOCK_REPO_ORIGIN),
      ],
    },
  },
}
