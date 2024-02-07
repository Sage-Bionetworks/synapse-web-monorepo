import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CardContainer, { CardContainerProps } from './CardContainer'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import syn16787123Json from '../../mocks/query/syn16787123'
import {
  DEFAULT_PAGE_SIZE,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  STUDY,
} from '../../utils/SynapseConstants'
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'
import mockUserCardTableQueryResultBundle from '../../mocks/query/mockUserCardTableQueryResultBundle'
import { server } from '../../mocks/msw/server'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import { QueryWrapper } from '../QueryWrapper'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { cloneDeep } from 'lodash-es'
import { QueryContextConsumer } from '../QueryContext'
import { InfiniteQueryContextType } from '../QueryContext/QueryContext'
import SynapseClient from '../../synapse-client'

const tableId = 'syn16787123'
const sql = `SELECT * FROM ${tableId}`

jest
  .spyOn(SynapseClient, 'getEntity')
  .mockResolvedValue({ ...mockTableEntity, id: tableId })
const getQueryTableAsyncJobResultsSpy = jest.spyOn(
  SynapseClient,
  'getQueryTableAsyncJobResults',
)

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

const dataWithOnePage = cloneDeep(syn16787123Json)
dataWithOnePage.queryCount =
  dataWithOnePage.queryResult!.queryResults.rows.length
dataWithOnePage.queryResult!.nextPageToken = undefined

const dataWithMultiplePagesFirstPage = cloneDeep(syn16787123Json)
dataWithMultiplePagesFirstPage.queryCount =
  dataWithMultiplePagesFirstPage.queryResult!.queryResults.rows.length * 2 + 1
dataWithMultiplePagesFirstPage.queryResult!.nextPageToken = {
  token: 'abcd',
}

const dataWithMultiplePagesSecondPage = cloneDeep(
  dataWithMultiplePagesFirstPage,
)
dataWithMultiplePagesSecondPage.queryResult!.nextPageToken!.token = 'efgh'
dataWithMultiplePagesSecondPage.queryResult!.queryResults.rows = [
  ...dataWithMultiplePagesFirstPage.queryResult!.queryResults.rows.map(row => ({
    ...row,
    rowId: row.rowId! + DEFAULT_PAGE_SIZE,
  })),
]

const createDataWithOnePageWithQueryCount = (queryCount: number) => {
  const page = cloneDeep(dataWithOnePage)
  page.queryCount = queryCount
  page.queryResult!.queryResults.rows = cloneDeep(
    dataWithOnePage.queryResult!.queryResults.rows.slice(0, queryCount),
  )
  return page
}

const unitDescription = 'study'

let capturedQueryContext: InfiniteQueryContextType | undefined

const renderComponent = (props: CardContainerProps) => {
  return render(
    <QueryWrapper initQueryRequest={lastQueryRequest} isInfinite={true}>
      <QueryContextConsumer>
        {queryContext => {
          capturedQueryContext = queryContext as InfiniteQueryContextType
          return (
            <QueryVisualizationWrapper unitDescription={unitDescription}>
              <CardContainer {...props} />
            </QueryVisualizationWrapper>
          )
        }}
      </QueryContextConsumer>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

const setUp = (props: CardContainerProps) => {
  const user = userEvent.setup()
  const component = renderComponent(props)
  return { component, user }
}

const waitForCardCount = async (cardText: string, nCards: number) => {
  await waitFor(() => {
    expect(
      within(screen.getByRole('list')).getAllByText(cardText),
    ).toHaveLength(nCards)
  })
}

describe('CardContainer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    jest.clearAllMocks()
    server.use(...getHandlersForTableQuery(dataWithMultiplePagesFirstPage))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const props: CardContainerProps = {
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
    await screen.findByRole('button', { name: 'View More' })
    expect(container.querySelector('.TotalQueryResults')).toBeDefined()
  })

  it('Renders with a title', async () => {
    const title = 'HelloWorld'
    renderComponent({ ...props, title })

    await screen.findByText(title)
  })

  it('ViewMore button shows full pages on each click when initialLimit is not set', async () => {
    const { user } = setUp(props)
    await waitForCardCount(STUDY, DEFAULT_PAGE_SIZE)
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1)

    // go through calling handle view more
    const viewMoreButton = await screen.findByRole('button', {
      name: 'View More',
    })

    const appendNextPageSpy = jest.spyOn(
      capturedQueryContext!,
      'appendNextPageToResults',
    )

    server.use(...getHandlersForTableQuery(dataWithMultiplePagesSecondPage))
    await user.click(viewMoreButton)

    // Verify that the next page was appended
    await waitFor(() => {
      expect(appendNextPageSpy).toHaveBeenCalled()
    })
    await waitForCardCount(STUDY, DEFAULT_PAGE_SIZE * 2)
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(2)
  })

  it('ViewMore does not render when hasNextPage is false and no initialLimit is not set', async () => {
    server.use(...getHandlersForTableQuery(dataWithOnePage))
    renderComponent(props)
    await waitForCardCount(STUDY, DEFAULT_PAGE_SIZE)
    expect(
      screen.queryByRole('button', { name: 'View More' }),
    ).not.toBeInTheDocument()
  })

  it('ViewMore button shows rest of first page on first click and full page on next click when initialLimit is set', async () => {
    const initialLimit = 3
    const queryCount = dataWithMultiplePagesFirstPage.queryCount!
    expect(initialLimit).toBeLessThan(queryCount)
    expect(DEFAULT_PAGE_SIZE * 2).toBeLessThan(queryCount)

    const { user } = setUp({
      ...props,
      initialLimit: initialLimit,
      unitDescription: undefined,
    })

    const viewMoreButton = await screen.findByRole('button', {
      name: 'View More',
    })

    // initial load - limited to initialLimit
    await waitForCardCount(STUDY, initialLimit)
    expect(viewMoreButton).toBeInTheDocument()
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1) // initial call to get data

    server.use(...getHandlersForTableQuery(dataWithMultiplePagesSecondPage))
    await user.click(viewMoreButton)

    // first showMore click - full first page
    await waitForCardCount(STUDY, DEFAULT_PAGE_SIZE)
    expect(viewMoreButton).toBeInTheDocument()
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1) // no call needed - data already loaded

    await user.click(viewMoreButton)

    // second showMore click - full second page
    await waitForCardCount(STUDY, DEFAULT_PAGE_SIZE * 2)
    expect(viewMoreButton).toBeInTheDocument()
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(2) // call to get second page
  })

  it('ViewMore button does not render when initialLimit is greater than or equal to queryCount', async () => {
    const initialLimit = 4
    const queryCount = 3
    expect(initialLimit).toBeGreaterThanOrEqual(queryCount)

    server.use(
      ...getHandlersForTableQuery(
        createDataWithOnePageWithQueryCount(queryCount),
      ),
    )

    setUp({
      ...props,
      initialLimit: initialLimit,
      unitDescription: undefined,
    })

    // initial load - limited to queryCount
    await waitForCardCount(STUDY, queryCount)
    const viewMoreButton = screen.queryByRole('button', {
      name: 'View More',
    })
    expect(viewMoreButton).not.toBeInTheDocument()
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1) // initial call to get data
  })

  it('ViewMore button renders when hasNextPage is false, but initialLimit is less than queryCount', async () => {
    const initialLimit = 3
    const queryCount = 5
    expect(initialLimit).toBeLessThan(queryCount)
    server.use(
      ...getHandlersForTableQuery(
        createDataWithOnePageWithQueryCount(queryCount),
      ),
    )

    const { user } = setUp({
      ...props,
      initialLimit: initialLimit,
      unitDescription: undefined,
    })

    // initial load - limited to initialLimit
    const viewMoreButton = await screen.findByRole('button', {
      name: 'View More',
    })
    expect(viewMoreButton).toBeInTheDocument()
    await waitForCardCount(STUDY, initialLimit)
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1) // initial call to get data

    await user.click(viewMoreButton)

    // first showMore click - remaining results
    await waitForCardCount(STUDY, queryCount)
    expect(viewMoreButton).not.toBeInTheDocument()
    expect(getQueryTableAsyncJobResultsSpy).toHaveBeenCalledTimes(1) // no call needed - data already loaded
  })

  it('Does not filter null IDs when rendering user cards (PORTALS-2430)', async () => {
    server.use(...getHandlersForTableQuery(mockUserCardTableQueryResultBundle))
    renderComponent({
      ...props,
      type: MEDIUM_USER_CARD,
      genericCardSchema: undefined,
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
