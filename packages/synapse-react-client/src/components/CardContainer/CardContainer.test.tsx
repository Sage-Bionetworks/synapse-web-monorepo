import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import mockUserCardTableQueryResultBundle from '@/mocks/query/mockUserCardTableQueryResultBundle'
import syn16787123Json from '@/mocks/query/syn16787123'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  DEFAULT_PAGE_SIZE,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  STUDY,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper'
import { CardContainer, CardContainerProps } from './CardContainer'
import omit from 'lodash-es/omit'

const tableId = 'syn16787123'
const sql = `SELECT * FROM ${tableId}`

vi.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
  ...mockTableEntity,
  id: tableId,
})

const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: tableId,
  partMask: 255,
  query: {
    sql,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

const unitDescription = 'study'

const renderComponent = (props: CardContainerProps) => {
  return render(
    <QueryWrapper initQueryRequest={lastQueryRequest} isInfinite={true}>
      <QueryVisualizationWrapper unitDescription={unitDescription}>
        <CardContainer {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('CardContainer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
    registerTableQueryResult(lastQueryRequest.query, syn16787123Json)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const props: CardContainerProps = {
    rowSet: syn16787123Json.queryResult.queryResults,
    unitDescription,
    type: GENERIC_CARD,
    genericCardSchema: {
      type: STUDY,
      title: 'title',
    },
  }

  it('renders without crashing', () => {
    const tree = renderComponent(props)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly with a faceted view', async () => {
    // inject filter prop
    const { container } = renderComponent(props)
    await waitFor(() => {
      expect(container.querySelector('.TotalQueryResults')).toBeDefined()
    })
  })

  it('Renders with a title', async () => {
    const title = 'HelloWorld'
    renderComponent({ ...props, title })

    await screen.findByText(title)
  })

  it('Does not filter null IDs when rendering user cards (PORTALS-2430)', async () => {
    registerTableQueryResult(
      lastQueryRequest.query,
      mockUserCardTableQueryResultBundle,
    )
    renderComponent({
      ...omit(props, ['genericCardSchema']),
      rowSet: mockUserCardTableQueryResultBundle.queryResult.queryResults,
      type: MEDIUM_USER_CARD,
    })

    // Since the first user in the mock data has a user ID, their profile information will be fetched, ignoring the table data.
    await screen.findByText(
      mockUserProfileData.firstName + ' ' + mockUserProfileData.lastName,
    )
    // The second user has a null ID, so their profile information will be pulled from the table data.
    await screen.findByText('FakeFirst FakeLast')
    // Verify that the first user's profile information sourced from the table is not rendered.
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument()
  })
})
