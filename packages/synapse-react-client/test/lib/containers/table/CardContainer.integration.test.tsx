import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SynapseConstants } from '../../../../src/lib/utils'
import CardContainer, {
  CardContainerProps,
} from '../../../../src/lib/containers/CardContainer'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from '../../../../src/lib/containers/QueryVisualizationWrapper'
import {
  InfiniteQueryContextType,
  QueryContextProvider,
  QueryContextType,
} from '../../../../src/lib/containers/QueryContext'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '../../../../src/lib/utils/synapseTypes'
import syn16787123Json from '../../../../mocks/query/syn16787123.json'
import {
  DEFAULT_PAGE_SIZE,
  MEDIUM_USER_CARD,
} from '../../../../src/lib/utils/SynapseConstants'
import mockUserCardTableQueryResultBundle from '../../../../mocks/query/mockUserCardTableQueryResultBundle'
import { server } from '../../../../mocks/msw/server'
import { mockUserProfileData } from '../../../../mocks/user/mock_user_profile'

const renderComponent = (
  props: CardContainerProps,
  queryContext: Partial<QueryContextType>,
) => {
  const defaultQueryVisualizationContext: Partial<QueryVisualizationContextType> =
    {}

  return render(
    <QueryContextProvider queryContext={queryContext}>
      <QueryVisualizationContextProvider
        queryVisualizationContext={defaultQueryVisualizationContext}
      >
        <CardContainer {...props} />
      </QueryVisualizationContextProvider>
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('CardContainer tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  // for our purposes, it's okay to return the same data again
  const getNextPageOfData = jest.fn(() => {})
  const sql = 'SELECT * FROM syn16787123'
  const lastQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: 'syn16787123',
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql,
      limit: DEFAULT_PAGE_SIZE,
      offset: 0,
    },
  }
  const getLastQueryRequest = jest.fn(() => lastQueryRequest)

  const unitDescription = 'studies'
  const type = SynapseConstants.STUDY
  // cast the data to ignore ts warning
  const data = syn16787123Json as QueryResultBundle
  const props = {
    unitDescription,
    type,
  }

  const queryContext: Partial<InfiniteQueryContextType> = {
    data,
    hasNextPage: true,
    getLastQueryRequest: getLastQueryRequest,
    appendNextPageToResults: getNextPageOfData,
  }

  const queryVisualizationContext: Partial<QueryVisualizationContextType> = {}

  it('renders without crashing', () => {
    const tree = renderComponent(props, queryContext)
    expect(tree).toBeDefined()
  })

  it('Renders total and RowContainer correctly with a faceted view', () => {
    // inject filter prop
    const { container } = renderComponent(props, queryContext)
    screen.getByRole('button', { name: 'View More' })
    expect(container.querySelector('.TotalQueryResults')).toBeDefined()
  })

  it('Renders with a title', () => {
    const title = 'HelloWorld'
    renderComponent({ ...props, title }, queryContext)

    screen.getByText(title)
  })

  it('handleViewMore works', async () => {
    renderComponent(props, queryContext)
    // go through calling handle view more
    const viewMoreButton = screen.getByRole('button', { name: 'View More' })
    await userEvent.click(viewMoreButton)
    expect(getLastQueryRequest).toHaveBeenCalled()
    expect(getNextPageOfData).toHaveBeenCalled()
  })

  it('show ViewMore does not render when hasNextPage is false', () => {
    const queryContextWithHasNextPageFalse = {
      ...queryContext,
      hasNextPage: false,
    }
    renderComponent(props, queryContextWithHasNextPageFalse)
    expect(
      screen.queryByRole('button', { name: 'View More' }),
    ).not.toBeInTheDocument()
  })

  it('Does not filter null IDs when rendering user cards (PORTALS-2430)', async () => {
    renderComponent(
      { ...props, type: MEDIUM_USER_CARD },
      { ...queryContext, data: mockUserCardTableQueryResultBundle },
    )

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
