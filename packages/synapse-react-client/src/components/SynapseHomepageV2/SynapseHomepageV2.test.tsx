import React from 'react'
import { render } from '@testing-library/react'
import { server } from '../../mocks/msw/server'
import {
  featuredDatasetsTable,
  generalStatsMetricsTable,
  past30DaysDownloadMetricsTable,
  searchAutocompleteTable,
  SynapseHomepageV2,
  synapseInActionTable,
} from './SynapseHomepageV2'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  mockHomepageFeaturedDatasetsQueryResultBundle,
  mockHomepageGeneralStatsQueryResultBundle,
  mockHomepageSearchAutocompleteQueryResultBundle,
  mockHomepageSynapseInActionQueryResultBundle,
  mockHomepageTrendingQueryResultBundle,
} from '../../mocks/query/mockHomepageQueryResultData'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'

describe('SynapseHomepageV2 Snapshot test', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
    server.use(
      ...[
        ...getFileHandlers(MOCK_REPO_ORIGIN),
        ...getHandlersForTableQuery(
          mockHomepageTrendingQueryResultBundle,
          MOCK_REPO_ORIGIN,
          past30DaysDownloadMetricsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageGeneralStatsQueryResultBundle,
          MOCK_REPO_ORIGIN,
          generalStatsMetricsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageSynapseInActionQueryResultBundle,
          MOCK_REPO_ORIGIN,
          synapseInActionTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageFeaturedDatasetsQueryResultBundle,
          MOCK_REPO_ORIGIN,
          featuredDatasetsTable,
        ),
        ...getHandlersForTableQuery(
          mockHomepageSearchAutocompleteQueryResultBundle,
          MOCK_REPO_ORIGIN,
          searchAutocompleteTable,
        ),
      ],
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  it('Basic home page', () => {
    const { container } = render(
      <SynapseTestContext>
        <SynapseHomepageV2 gotoPlace={() => {}} />
      </SynapseTestContext>,
    )
    mockAllIsIntersecting(true)
    expect(container).toMatchSnapshot()
  })
})
