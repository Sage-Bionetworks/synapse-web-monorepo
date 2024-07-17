import React from 'react'
import { render } from '@testing-library/react'
import { server } from '../../mocks/msw/server'
import { SynapseHomepageV2 } from './SynapseHomepageV2'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  mockHomepageGeneralStatsQueryResultBundle,
  mockHomepageGeneralStatsTableId,
  mockHomepageSynapseInActionTableId,
  mockHomepageSynapseInActionQueryResultBundle,
  mockHomepageTrendingQueryResultBundle,
  mockHomepageTrendingTableId,
} from '../../mocks/query/mockHomepageQueryResultData'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

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
          mockHomepageTrendingTableId,
        ),
        ...getHandlersForTableQuery(
          mockHomepageGeneralStatsQueryResultBundle,
          MOCK_REPO_ORIGIN,
          mockHomepageGeneralStatsTableId,
        ),
        ...getHandlersForTableQuery(
          mockHomepageSynapseInActionQueryResultBundle,
          MOCK_REPO_ORIGIN,
          mockHomepageSynapseInActionTableId,
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
