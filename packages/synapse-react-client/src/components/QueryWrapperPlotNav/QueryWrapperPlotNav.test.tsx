import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ColumnSingleValueFilterOperator,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  Query,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import {
  configure,
  getConfig,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { generateCompressedQueryURL } from '@/utils/functions/deepLinkingUtils'
import { isFilterGroup } from '@/utils/types/IsType'
import { QUERY_BUILDER_CONDITIONS_PILL_TEXT } from '../widgets/facet-nav/SelectionCriteriaPills'
import QueryWrapperPlotNav, {
  QueryWrapperPlotNavProps,
} from './QueryWrapperPlotNav'

const sql = `SELECT * FROM ${ELITE_MOCK_PROFILE.dataVirtualTableId}`
const queryWithConditions: Query = {
  sql,
  // Few rows keep each render of the table cheap.
  limit: 5,
  additionalFilters: [
    {
      concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
      operator: 'AND',
      children: [
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
          columnName: 'referenceType',
          operator: ColumnSingleValueFilterOperator.IN,
          values: ['DATASET'],
        },
      ],
    },
  ],
}

let sentRequests: QueryBundleRequest[]
const recordQueryRequest = async ({ request }: { request: Request }) => {
  if (
    request.method === 'POST' &&
    new URL(request.url).pathname.endsWith('/table/query/async/start')
  ) {
    sentRequests.push((await request.clone().json()) as QueryBundleRequest)
  }
}

function renderQueryWrapperPlotNav(props: Partial<QueryWrapperPlotNavProps>) {
  // Full access, so the few datasets are listed instead of withheld.
  server.use(
    ...getCohortBuilderHandlers({
      profile: ELITE_MOCK_PROFILE,
      access: 'FULL',
    }),
  )
  render(
    <QueryWrapperPlotNav
      sql={sql}
      initQueryJson={JSON.stringify(queryWithConditions)}
      tableConfiguration={{}}
      hideDownload
      defaultShowPlots={false}
      {...props}
    />,
    { wrapper: createWrapper() },
  )
}

describe('QueryWrapperPlotNav Query Builder conditions', () => {
  // QueryWrapperPlotNav loads the Query Builder on demand; loading it first keeps each test within its timeout.
  beforeAll(() => import('../QueryBuilder/QueryBuilderControls'), 60_000)
  const { asyncUtilTimeout } = getConfig()
  beforeAll(() => configure({ asyncUtilTimeout: 5_000 }))
  afterAll(() => configure({ asyncUtilTimeout }))
  beforeEach(() => {
    sentRequests = []
    server.events.on('request:start', recordQueryRequest)
  })
  afterEach(() => {
    server.events.removeListener('request:start', recordQueryRequest)
  })

  it('opens the Query Builder with the conditions the query already has', async () => {
    renderQueryWrapperPlotNav({ showQueryBuilderControl: true })

    expect(
      await screen.findByRole('group', {
        name: 'Filter condition on referenceType',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Hide Query Builder' }),
    ).toBeInTheDocument()
  })

  it('keeps the Query Builder open after the conditions it opened with are removed', async () => {
    const user = userEvent.setup()
    renderQueryWrapperPlotNav({ showQueryBuilderControl: true })

    const pill = await screen.findByRole('button', {
      name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
    })
    pill.focus()
    await user.keyboard('{Delete}')

    await waitFor(() =>
      expect(
        screen.queryByRole('button', {
          name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
        }),
      ).not.toBeInTheDocument(),
    )
    expect(
      screen.getByRole('button', { name: 'Hide Query Builder' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Update Results' })).toBeVisible()
  })

  it('asks before hiding a Query Builder with applied conditions, and removes them when hidden', async () => {
    const user = userEvent.setup()
    renderQueryWrapperPlotNav({ showQueryBuilderControl: true })
    await user.click(
      await screen.findByRole('button', { name: 'Hide Query Builder' }),
    )

    const dialog = await screen.findByRole('dialog', {
      name: 'Hide Query Builder?',
    })
    await user.click(
      within(dialog).getByRole('button', { name: 'Hide Query Builder' }),
    )

    expect(
      await screen.findByRole('button', { name: 'Show Query Builder' }),
    ).toBeInTheDocument()
    await waitFor(() =>
      expect(
        screen.queryByRole('button', {
          name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
        }),
      ).not.toBeInTheDocument(),
    )
    expect(
      screen.queryByRole('button', { name: 'Update Results' }),
    ).not.toBeInTheDocument()
  })

  it('shows the conditions as a removable pill when the Query Builder is turned off', async () => {
    const user = userEvent.setup()
    renderQueryWrapperPlotNav({ showQueryBuilderControl: false })

    const pill = await screen.findByRole('button', {
      name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
    })
    expect(
      screen.queryByRole('button', { name: /Query Builder$/ }),
    ).not.toBeInTheDocument()

    pill.focus()
    await user.keyboard('{Delete}')

    await waitFor(() =>
      expect(
        sentRequests.some(
          request =>
            request.entityId === ELITE_MOCK_PROFILE.dataVirtualTableId &&
            request.query.additionalFilters === undefined,
        ),
      ).toBe(true),
    )
    expect(
      screen.queryByRole('button', {
        name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
      }),
    ).not.toBeInTheDocument()
  })

  it('always shows the Query Builder, without a toggle, when it is shown by default and has no control', async () => {
    renderQueryWrapperPlotNav({
      defaultShowQueryBuilder: true,
      showQueryBuilderControl: false,
    })

    expect(
      await screen.findByRole('group', {
        name: 'Filter condition on referenceType',
      }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /Query Builder$/ }),
    ).not.toBeInTheDocument()
  })

  describe('deep linking', () => {
    const initialQuery: Query = { sql, limit: 5 }

    afterEach(() => {
      window.history.replaceState(null, '', '/')
    })

    it('restores Query Builder conditions saved in the URL without requesting the initial query', async () => {
      window.history.replaceState(
        null,
        '',
        await generateCompressedQueryURL(
          '/',
          0,
          queryWithConditions,
          initialQuery,
        ),
      )

      // With the Query Builder off, nothing requests the table without the conditions (its value lookup would).
      renderQueryWrapperPlotNav({
        initQueryJson: JSON.stringify(initialQuery),
        shouldDeepLink: true,
        showQueryBuilderControl: false,
      })

      expect(
        await screen.findByRole('button', {
          name: QUERY_BUILDER_CONDITIONS_PILL_TEXT,
        }),
      ).toBeInTheDocument()
      await screen.findByText('DATASET')
      expect(sentRequests).not.toEqual([])
      expect(
        sentRequests.filter(
          request => !request.query.additionalFilters?.some(isFilterGroup),
        ),
      ).toEqual([])
    })
  })
})
