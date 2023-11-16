import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SynapseConstants } from '../../utils'
import CardContainer, { CardContainerProps } from './CardContainer'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import syn16787123Json from '../../mocks/query/syn16787123'
import {
  DEFAULT_PAGE_SIZE,
  MEDIUM_USER_CARD,
} from '../../utils/SynapseConstants'
import mockUserCardTableQueryResultBundle from '../../mocks/query/mockUserCardTableQueryResultBundle'
import { server } from '../../mocks/msw/server'
import { mockUserProfileData } from '../../mocks/user/mock_user_profile'
import { QueryWrapper } from '../QueryWrapper'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import { cloneDeep } from 'lodash-es'
import { QueryContextConsumer } from '../QueryContext'
import { InfiniteQueryContextType } from '../QueryContext/QueryContext'

const sql = 'SELECT * FROM syn16787123'

const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn16787123',
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

const dataWithMultiplePages = cloneDeep(syn16787123Json)
dataWithMultiplePages.queryCount =
  dataWithMultiplePages.queryResult!.queryResults.rows.length + 1
dataWithMultiplePages.queryResult!.nextPageToken = {
  token: 'abcd',
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

describe('CardContainer tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...getHandlersForTableQuery(dataWithMultiplePages))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const type = SynapseConstants.STUDY
  // cast the data to ignore ts warning
  const props: CardContainerProps = {
    unitDescription,
    type,
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

  it('handleViewMore works', async () => {
    renderComponent(props)
    // go through calling handle view more
    const viewMoreButton = await screen.findByRole('button', {
      name: 'View More',
    })

    const appendNextPageSpy = jest.spyOn(
      capturedQueryContext!,
      'appendNextPageToResults',
    )

    await userEvent.click(viewMoreButton)

    // Verify that the next page was appended
    await waitFor(() => {
      expect(appendNextPageSpy).toHaveBeenCalled()
    })
  })

  it('show ViewMore does not render when hasNextPage is false', () => {
    server.use(...getHandlersForTableQuery(dataWithOnePage))
    renderComponent(props)
    expect(
      screen.queryByRole('button', { name: 'View More' }),
    ).not.toBeInTheDocument()
  })

  it('Does not filter null IDs when rendering user cards (PORTALS-2430)', async () => {
    server.use(...getHandlersForTableQuery(mockUserCardTableQueryResultBundle))
    renderComponent({ ...props, type: MEDIUM_USER_CARD })

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
