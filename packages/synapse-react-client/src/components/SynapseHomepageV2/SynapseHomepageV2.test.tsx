import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { getFileHandlers } from '@/mocks/msw/handlers/fileHandlers'
import { server } from '@/mocks/msw/server'
import { registerSynapseHomepageMockQueries } from '@/mocks/query/mockHomepageQueryResultData'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { act, render } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseHomepageV2 } from './SynapseHomepageV2'

describe('SynapseHomepageV2 Snapshot test', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
    server.use(...getFileHandlers(MOCK_REPO_ORIGIN))
    registerSynapseHomepageMockQueries()
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  it('Basic home page', () => {
    const { container } = render(
      <SynapseTestContext>
        <SynapseHomepageV2 gotoPlace={() => {}} />
      </SynapseTestContext>,
    )
    act(() => {
      mockAllIsIntersecting(true)
    })
    expect(container).toMatchSnapshot()
  })
})
