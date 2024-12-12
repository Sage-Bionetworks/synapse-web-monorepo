import { act, render } from '@testing-library/react'
import { server } from '../../mocks/msw/server'
import { SynapseHomepageV2 } from './SynapseHomepageV2'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getFileHandlers } from '../../mocks/msw/handlers/fileHandlers'
import { registerSynapseHomepageMockQueries } from '../../mocks/query/mockHomepageQueryResultData'

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
