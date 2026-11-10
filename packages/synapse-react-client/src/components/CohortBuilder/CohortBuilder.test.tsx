import {
  CohortBuilderMockProfile,
  ELITE_MOCK_PROFILE,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import {
  CohortBuilderAccess,
  getCohortBuilderColumnModels,
} from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import {
  CohortBuilderHandlersOptions,
  getCohortBuilderHandlers,
  getCohortBuilderSyntheticData,
} from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import {
  createWrapper,
  createWrapperAndQueryClient,
} from '@/testutils/TestingLibraryUtils'
import { ENTITY_PERMISSIONS } from '@/utils/APIConstants'
import {
  BUNDLE_MASK_QUERY_RESULTS,
  DEFAULT_PAGE_SIZE,
} from '@/utils/SynapseConstants'
import { getQueryRequestFromLink } from '@/utils/functions/deepLinkingUtils'
import {
  AddToDownloadListRequest,
  AggregateDataConfiguration,
} from '@sage-bionetworks/synapse-client'
import {
  DownloadFromTableRequest,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
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
import userEvent, { UserEvent } from '@testing-library/user-event'
import { http } from 'msw'
import {
  AGGREGATE_DATA_PREVIEW_TITLE,
  APPLY_PREVIEW_BUTTON_TEXT,
  STOP_PREVIEW_BUTTON_TEXT,
} from './AggregateDataPreviewControls'
import {
  COHORT_BUILDER_PART_MASK,
  COHORT_BUILDER_PREVIEW_NOTICE,
  COHORT_BUILDER_ZERO_COUNT_TEXT,
  CohortBuilder,
  CohortBuilderProps,
  DEFAULT_COHORT_BUILDER_AUDIT_NOTICE,
} from './CohortBuilder'
import {
  COHORT_FILES_TITLE,
  COHORT_FILES_ZERO_COUNT_TEXT,
  COHORT_TOO_LARGE_TEXT,
} from './CohortFilesPanel'
import { MAX_COHORT_PARTICIPANTS } from './cohortHandOff'
import {
  COHORT_DISCOVERY_DESCRIPTION,
  HOW_TO_USE_COHORT_BUILDER_CONFIRM_TEXT,
  HOW_TO_USE_COHORT_BUILDER_TITLE,
} from './CohortDiscoveryBanner'
import {
  SAMPLE_QUERY_PLACEHOLDER,
  SAMPLE_QUERY_TITLE,
} from './CohortSampleQuerySelector'

// The Download List confirmation estimates download time by downloading a test file.
vi.mock('@/utils/functions/testDownloadSpeed', () => ({
  testDownloadSpeed: vi.fn().mockResolvedValue(20),
}))

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const allParticipantsCount = (2700).toLocaleString()
// An aggregate-only caller's counts are obscured. ELITE rounds them down to a multiple of 5, which keeps 2,700.
const approximateAllParticipantsCount = `≈ ${allParticipantsCount}`

let sentRequests: QueryBundleRequest[]
const recordQueryRequest = async ({ request }: { request: Request }) => {
  if (
    request.method === 'POST' &&
    new URL(request.url).pathname.endsWith('/table/query/async/start')
  ) {
    sentRequests.push((await request.clone().json()) as QueryBundleRequest)
  }
}

function renderCohortBuilder(
  props: Partial<CohortBuilderProps> = {},
  access: CohortBuilderAccess = 'AGGREGATE_ONLY',
  isAuthenticated = true,
) {
  server.use(
    ...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE, access }),
  )
  return render(
    <CohortBuilder participantsTableId={participantsTableId} {...props} />,
    {
      wrapper: createWrapper(
        isAuthenticated
          ? {}
          : { isAuthenticated: false, accessToken: undefined },
      ),
    },
  )
}

describe('CohortBuilder', () => {
  beforeEach(() => {
    sentRequests = []
    server.events.on('request:start', recordQueryRequest)
  })
  afterEach(() => {
    server.events.removeListener('request:start', recordQueryRequest)
  })

  it('shows the approximate participant count and the logging notice, and never requests participant rows', async () => {
    renderCohortBuilder()

    expect(
      await screen.findByText(
        `${approximateAllParticipantsCount} participants`,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(DEFAULT_COHORT_BUILDER_AUDIT_NOTICE),
    ).toBeInTheDocument()
    // Paginated and infinite row queries would send partMask 0 or include BUNDLE_MASK_QUERY_RESULTS.
    expect(sentRequests.map(request => request.partMask)).toContain(
      COHORT_BUILDER_PART_MASK,
    )
    expect(
      sentRequests.filter(
        request =>
          request.partMask === 0 ||
          (request.partMask & BUNDLE_MASK_QUERY_RESULTS) !== 0,
      ),
    ).toEqual([])
  })

  it('shows horizontal bar charts of the cohort, which cannot change the cohort', async () => {
    const user = userEvent.setup()
    renderCohortBuilder({ facetsToPlot: ['sex'] })

    const plot = await screen.findByRole('figure')
    expect(
      within(plot).queryByRole('button', { name: /^Filter by/ }),
    ).not.toBeInTheDocument()

    await user.click(
      await within(plot).findByRole('button', {
        name: 'Expand to large graph',
      }),
    )
    const dialog = await screen.findByRole('dialog')
    expect(
      await within(dialog).findByRole('combobox', { name: 'Chart Type' }),
    ).toHaveTextContent('Horizontal Bar Chart')
  })

  it('shows a loading indicator in place of the results while the cohort query runs', async () => {
    const user = userEvent.setup()
    let pendingQuery = Promise.withResolvers<void>()
    server.use(
      // Holds each query until the test releases it, then falls through to the mock handlers.
      http.post(/\/table\/query\/async\/start$/, () => pendingQuery.promise),
      ...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE }),
    )
    render(<CohortBuilder participantsTableId={participantsTableId} />, {
      wrapper: createWrapper(),
    })

    expect(await screen.findByRole('progressbar')).toBeInTheDocument()
    pendingQuery.resolve()
    await screen.findByText(`${approximateAllParticipantsCount} participants`)
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()

    pendingQuery = Promise.withResolvers<void>()
    await user.click(screen.getByRole('combobox', { name: 'Property' }))
    await user.click(await screen.findByRole('option', { name: 'Race' }))
    await user.click(
      await screen.findByRole('button', { name: 'Black or African American' }),
    )
    await user.click(screen.getByRole('button', { name: 'Update Results' }))

    expect(await screen.findByRole('progressbar')).toBeInTheDocument()
    expect(
      screen.getByText(`${approximateAllParticipantsCount} participants`),
    ).not.toBeVisible()
    expect(screen.getByRole('button', { name: 'Update Results' })).toBeVisible()
    pendingQuery.resolve()
    // 243 participants, rounded down.
    expect(await screen.findByText('≈ 240 participants')).toBeVisible()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('replaces only the results with a below-threshold notice, and keeps the cohort editable', async () => {
    const user = userEvent.setup()
    renderCohortBuilder()
    await screen.findByText(`${approximateAllParticipantsCount} participants`)

    // 7 participants: fewer than the suppression threshold of 20.
    await user.click(screen.getByRole('combobox', { name: 'Property' }))
    await user.click(await screen.findByRole('option', { name: 'Race' }))
    const rarePill = await screen.findByRole('button', {
      name: 'American Indian or Alaska Native',
    })
    await user.click(rarePill)
    await user.click(screen.getByRole('button', { name: 'Update Results' }))

    expect(
      await screen.findByText('A minimum of 20 participants is required'),
    ).toBeInTheDocument()

    await user.click(rarePill)
    await user.click(screen.getByRole('button', { name: 'Update Results' }))

    expect(
      await screen.findByText(
        `${approximateAllParticipantsCount} participants`,
      ),
    ).toBeInTheDocument()
    expect(
      screen.queryByText('A minimum of 20 participants is required'),
    ).not.toBeInTheDocument()
  })

  it('shows the zero-count state when no participants match', async () => {
    const emptyTableId = 'syn90000099'
    registerTableQueryResult(
      { sql: `SELECT * FROM ${emptyTableId}` },
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: 0,
        selectColumns: [],
        columnModels: [],
        facets: [],
      },
    )
    render(<CohortBuilder participantsTableId={emptyTableId} />, {
      wrapper: createWrapper(),
    })

    expect(
      await screen.findByText(COHORT_BUILDER_ZERO_COUNT_TEXT),
    ).toBeInTheDocument()
  })

  it('asks a signed-out user to sign in, without querying', async () => {
    renderCohortBuilder({}, 'AGGREGATE_ONLY', false)

    expect(await screen.findByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText(COHORT_DISCOVERY_DESCRIPTION)).toBeVisible()
    expect(screen.queryByText(DEFAULT_COHORT_BUILDER_AUDIT_NOTICE)).toBeNull()
    expect(sentRequests).toEqual([])
  })

  it('opens and closes the How to Use instructions from the Cohort Discovery banner', async () => {
    const user = userEvent.setup()
    renderCohortBuilder()

    expect(screen.getByText(COHORT_DISCOVERY_DESCRIPTION)).toBeVisible()
    await user.click(
      screen.getByRole('button', { name: HOW_TO_USE_COHORT_BUILDER_TITLE }),
    )
    const dialog = await screen.findByRole('dialog', {
      name: HOW_TO_USE_COHORT_BUILDER_TITLE,
    })
    expect(within(dialog).getByText('Condition groups')).toBeVisible()

    await user.click(
      within(dialog).getByRole('button', {
        name: HOW_TO_USE_COHORT_BUILDER_CONFIRM_TEXT,
      }),
    )
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull())
  })

  describe('sample queries', () => {
    const sampleName = 'Methylation data, without dementia'
    const sampleQueries: CohortBuilderProps['sampleQueries'] = {
      [sampleName]: {
        combinator: 'AND',
        children: [
          {
            columnName: 'assay',
            op: 'is_any_of',
            values: ['methylationArray'],
          },
          {
            combinator: 'OR',
            not: true,
            children: [
              { columnName: 'hasDementia', op: 'is_any_of', values: ['true'] },
            ],
          },
        ],
      },
      'Living participants': {
        combinator: 'AND',
        children: [
          {
            columnName: 'mortalityStatus',
            op: 'is_any_of',
            values: ['Living'],
          },
        ],
      },
    }

    async function loadSampleQuery(user: UserEvent, name: string) {
      await user.click(
        await screen.findByRole('combobox', { name: /^Try a sample query/ }),
      )
      await user.click(await screen.findByRole('option', { name }))
    }

    it('is not shown when no sample queries are configured', async () => {
      renderCohortBuilder()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      expect(
        screen.queryByRole('region', { name: SAMPLE_QUERY_TITLE }),
      ).not.toBeInTheDocument()
    })

    it('loads a sample query into the Query Builder, which Update Results applies', async () => {
      const user = userEvent.setup()
      renderCohortBuilder({ sampleQueries })
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      await loadSampleQuery(user, sampleName)

      expect(
        screen.getByRole('combobox', { name: /^Try a sample query/ }),
      ).toHaveTextContent(sampleName)
      expect(
        screen.getByRole('group', { name: 'Filter condition on assay' }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('group', { name: 'Filter condition on hasDementia' }),
      ).toBeInTheDocument()
      // Loading only edits the Query Builder; the cohort changes when the user applies it.
      expect(
        sentRequests.filter(request => request.query.additionalFilters),
      ).toEqual([])

      await user.click(screen.getByRole('button', { name: 'Update Results' }))

      await waitFor(() =>
        expect(
          sentRequests.find(request => request.query.additionalFilters)?.query
            .additionalFilters,
        ).toEqual([
          expect.objectContaining({
            concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
            operator: 'AND',
            children: [
              // assay is a list column, so "is any of" uses HAS.
              expect.objectContaining({
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
                columnName: 'assay',
                function: 'HAS',
                values: ['methylationArray'],
              }),
              expect.objectContaining({
                concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
                operator: 'OR',
                not: true,
                children: [
                  expect.objectContaining({
                    columnName: 'hasDementia',
                    operator: 'IN',
                    values: ['true'],
                  }),
                ],
              }),
            ],
          }),
        ]),
      )
    })

    it('replaces the Query Builder tree, and can reload a sample after it is edited', async () => {
      const user = userEvent.setup()
      renderCohortBuilder({ sampleQueries })
      await screen.findByText(`${approximateAllParticipantsCount} participants`)
      const selector = await screen.findByRole('combobox', {
        name: /^Try a sample query/,
      })
      expect(selector).toHaveTextContent(SAMPLE_QUERY_PLACEHOLDER)

      await loadSampleQuery(user, sampleName)
      await loadSampleQuery(user, 'Living participants')
      expect(
        screen.getAllByRole('group', { name: /^Filter condition/ }),
      ).toHaveLength(1)
      expect(
        screen.getByRole('group', {
          name: 'Filter condition on mortalityStatus',
        }),
      ).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Remove condition' }))
      expect(selector).toHaveTextContent(SAMPLE_QUERY_PLACEHOLDER)

      await loadSampleQuery(user, 'Living participants')
      expect(
        screen.getByRole('group', {
          name: 'Filter condition on mortalityStatus',
        }),
      ).toBeInTheDocument()
    })
  })

  describe('deep linking', { timeout: 30_000 }, () => {
    const conditions: CohortBuilderProps['sampleQueries'] = {
      'Methylation data, female': {
        combinator: 'AND',
        children: [
          {
            columnName: 'assay',
            op: 'is_any_of',
            values: ['methylationArray'],
          },
          { columnName: 'sex', op: 'is_any_of', values: ['Female'] },
        ],
      },
    }

    const { asyncUtilTimeout } = getConfig()
    beforeAll(() => configure({ asyncUtilTimeout: 5_000 }))
    afterAll(() => configure({ asyncUtilTimeout }))
    afterEach(() => {
      window.history.replaceState(null, '', '/')
    })

    it('saves the applied Query Builder conditions in the URL, and restores them into the Query Builder', async () => {
      const user = userEvent.setup()
      const { unmount } = renderCohortBuilder({
        sampleQueries: conditions,
        shouldDeepLink: true,
      })
      await screen.findByText(`${approximateAllParticipantsCount} participants`)
      await user.click(
        await screen.findByRole('combobox', { name: /^Try a sample query/ }),
      )
      await user.click(
        await screen.findByRole('option', { name: 'Methylation data, female' }),
      )
      await user.click(screen.getByRole('button', { name: 'Update Results' }))

      let appliedFilters: QueryBundleRequest['query']['additionalFilters']
      await waitFor(() => {
        expect(window.location.search).toContain('qw0=')
        appliedFilters = sentRequests.find(
          request => request.query.additionalFilters,
        )?.query.additionalFilters
        expect(appliedFilters).toBeDefined()
      })
      const deepLink = window.location.pathname + window.location.search
      unmount()
      sentRequests = []
      window.history.replaceState(null, '', deepLink)

      renderCohortBuilder({ sampleQueries: conditions, shouldDeepLink: true })

      expect(
        await screen.findByRole('group', { name: 'Filter condition on assay' }),
      ).toBeInTheDocument()
      expect(
        screen.getByRole('group', { name: 'Filter condition on sex' }),
      ).toBeInTheDocument()
      await waitFor(() =>
        expect(
          sentRequests.find(request => request.query.additionalFilters)?.query
            .additionalFilters,
        ).toEqual(appliedFilters),
      )
    })

    it("restores the files panel's page from the URL, without requesting the initial page, even when the results of the initial query are cached", async () => {
      const user = userEvent.setup()
      const filesTableId = ELITE_MOCK_PROFILE.dataVirtualTableId
      const isFilesRowsRequest = (request: QueryBundleRequest) =>
        request.entityId === filesTableId &&
        (request.partMask & BUNDLE_MASK_QUERY_RESULTS) !== 0 &&
        request.query.cohorts !== undefined
      server.use(...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE }))
      // One query cache for both renders, as when returning to the page in the same session.
      const { wrapperFn } = createWrapperAndQueryClient()
      const cohortBuilder = (
        <CohortBuilder
          participantsTableId={participantsTableId}
          filesTableId={filesTableId}
          sampleQueries={{
            Female: {
              combinator: 'AND',
              children: [
                { columnName: 'sex', op: 'is_any_of', values: ['Female'] },
              ],
            },
          }}
          shouldDeepLink
        />
      )
      const { unmount } = render(cohortBuilder, { wrapper: wrapperFn })
      await user.click(
        await screen.findByRole('combobox', { name: /^Try a sample query/ }),
      )
      await user.click(await screen.findByRole('option', { name: 'Female' }))
      await user.click(screen.getByRole('button', { name: 'Update Results' }))
      await waitFor(() =>
        expect(sentRequests.some(isFilesRowsRequest)).toBe(true),
      )
      await user.click(
        await screen.findByRole('button', { name: 'Go to page 2' }),
      )
      await waitFor(() => expect(window.location.search).toContain('qw1='))
      const deepLink = window.location.pathname + window.location.search
      // The saved files query, read back onto a stand-in query: only its changes from the initial query are saved.
      const readSavedFilesQuery = () =>
        getQueryRequestFromLink(1, { sql: 'SELECT * FROM syn1' })
      const savedFilesQuery = await readSavedFilesQuery()
      unmount()
      sentRequests = []
      window.history.replaceState(null, '', deepLink)

      const { unmount: unmountWarm } = render(cohortBuilder, {
        wrapper: wrapperFn,
      })

      expect(
        await screen.findByRole('button', { name: 'page 2' }),
      ).toHaveAttribute('aria-current', 'page')
      await waitFor(async () =>
        expect(await readSavedFilesQuery()).toEqual(savedFilesQuery),
      )

      // With nothing cached, only the saved page is requested.
      unmountWarm()
      sentRequests = []
      window.history.replaceState(null, '', deepLink)
      render(cohortBuilder, {
        wrapper: createWrapperAndQueryClient().wrapperFn,
      })

      expect(
        await screen.findByRole('button', { name: 'page 2' }),
      ).toHaveAttribute('aria-current', 'page')
      expect(
        sentRequests
          .filter(isFilesRowsRequest)
          .map(request => request.query.offset),
      ).toEqual([DEFAULT_PAGE_SIZE])
    })
  })

  it('does not offer the aggregate-only preview to a user who does not administer the participant source table', async () => {
    const permissionsPath = ENTITY_PERMISSIONS(
      ELITE_MOCK_PROFILE.participantsSourceTableId,
    )
    let isPermissionsServed = false
    const recordPermissionsResponse = ({ request }: { request: Request }) => {
      if (new URL(request.url).pathname.endsWith(permissionsPath)) {
        isPermissionsServed = true
      }
    }
    server.events.on('response:mocked', recordPermissionsResponse)
    try {
      renderCohortBuilder(
        {
          participantsSourceTableId:
            ELITE_MOCK_PROFILE.participantsSourceTableId,
        },
        'FULL',
      )

      await screen.findByText(`${allParticipantsCount} participants`)
      await waitFor(() => expect(isPermissionsServed).toBe(true))
      expect(
        screen.queryByRole('button', { name: AGGREGATE_DATA_PREVIEW_TITLE }),
      ).not.toBeInTheDocument()
      expect(sentRequests.filter(r => r.aggregateDataPreview)).toEqual([])
    } finally {
      server.events.removeListener('response:mocked', recordPermissionsResponse)
    }
  })

  // Each test builds a cohort with the Query Builder, then each result waits on chained async query jobs (participants,
  // then files). When the whole suite is running, a single wait can exceed Testing Library's default and a whole test
  // can exceed the suite's per-test timeout.
  describe('Files/Datasets panel', { timeout: 30_000 }, () => {
    const { asyncUtilTimeout } = getConfig()
    beforeAll(() => configure({ asyncUtilTimeout: 5_000 }))
    afterAll(() => configure({ asyncUtilTimeout }))

    function renderWithFiles(
      handlerOptions: CohortBuilderHandlersOptions = {},
      props: Partial<CohortBuilderProps> = {},
    ) {
      const profile = handlerOptions.profile ?? ELITE_MOCK_PROFILE
      server.use(...getCohortBuilderHandlers(handlerOptions))
      render(
        <CohortBuilder
          participantsTableId={profile.participantsVirtualTableId}
          filesTableId={profile.dataVirtualTableId}
          {...props}
        />,
        { wrapper: createWrapper() },
      )
      return profile
    }

    async function buildCohort(property: string, values: string[]) {
      const user = userEvent.setup()
      await user.click(screen.getByRole('combobox', { name: 'Property' }))
      await user.click(await screen.findByRole('option', { name: property }))
      for (const value of values) {
        await user.click(await screen.findByRole('button', { name: value }))
      }
      await user.click(screen.getByRole('button', { name: 'Update Results' }))
    }

    function filesRequests(profile: CohortBuilderMockProfile) {
      return sentRequests.filter(
        request => request.entityId === profile.dataVirtualTableId,
      )
    }

    it('lets an administrator of the participant source table preview the participant and files queries the way an aggregate-only user sees them, keeping the cohort', async () => {
      const user = userEvent.setup()
      const profile = renderWithFiles(
        { access: 'FULL', isSourceAdministrator: true },
        {
          participantsSourceTableId:
            ELITE_MOCK_PROFILE.participantsSourceTableId,
        },
      )
      await screen.findByText(`${allParticipantsCount} participants`)

      // 1,200 participants, but only 3 datasets: an approved user sees them, an aggregate-only user wouldn't.
      await buildCohort('Study', ['LLFS'])
      expect(
        await screen.findByText('3 files and datasets'),
      ).toBeInTheDocument()
      expect(sentRequests.filter(r => r.aggregateDataPreview)).toEqual([])

      await user.click(
        await screen.findByRole('button', {
          name: AGGREGATE_DATA_PREVIEW_TITLE,
        }),
      )
      const applyButton = screen.getByRole('button', {
        name: APPLY_PREVIEW_BUTTON_TEXT,
      })
      // The suppression threshold is required.
      expect(applyButton).toBeDisabled()
      await user.type(
        screen.getByRole('spinbutton', { name: /^Suppression threshold/ }),
        String(ELITE_MOCK_PROFILE.suppressionThreshold),
      )
      await user.click(
        screen.getByRole('combobox', { name: 'Facet post-processing' }),
      )
      await user.click(screen.getByRole('option', { name: 'Rounding' }))
      // Rounding needs its bin width.
      expect(applyButton).toBeDisabled()
      await user.type(
        screen.getByRole('spinbutton', { name: /^Round to/ }),
        '5',
      )
      const requestsBeforePreview = sentRequests.length
      await user.click(applyButton)

      expect(
        await screen.findByText(
          'A minimum of 20 files and datasets is required',
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText(COHORT_BUILDER_PREVIEW_NOTICE),
      ).toBeInTheDocument()
      const expectedPreview: AggregateDataConfiguration = {
        suppressionThreshold: ELITE_MOCK_PROFILE.suppressionThreshold,
        quasiIdentifierColumnNames: ['individualId'],
        countSuppressionStrategy: 'EXCLUDE_ROW',
        facetPostProcessingConfig: ELITE_MOCK_PROFILE.facetPostProcessingConfig,
      }
      const previewRequests = sentRequests.slice(requestsBeforePreview)
      for (const request of previewRequests) {
        expect(request.aggregateDataPreview).toEqual(expectedPreview)
      }
      // The cohort survives the preview: the participant results and the files query still carry it.
      expect(
        previewRequests.filter(
          request =>
            request.entityId === participantsTableId &&
            request.partMask === COHORT_BUILDER_PART_MASK &&
            request.query.additionalFilters?.some(
              filter =>
                filter.concreteType === FILTER_GROUP_CONCRETE_TYPE_VALUE,
            ),
        ),
      ).not.toHaveLength(0)
      expect(filesRequests(profile).at(-1)?.query.cohorts).toHaveLength(1)

      const requestsBeforeStop = sentRequests.length
      await user.click(
        screen.getByRole('button', { name: STOP_PREVIEW_BUTTON_TEXT }),
      )
      expect(
        await screen.findByText('3 files and datasets'),
      ).toBeInTheDocument()
      expect(screen.queryByText(COHORT_BUILDER_PREVIEW_NOTICE)).toBeNull()
      // Results without the preview may come from the cache, so no request has to be sent.
      for (const request of sentRequests.slice(requestsBeforeStop)) {
        expect(request.aggregateDataPreview).toBeUndefined()
      }
    })

    async function openPreviewAsSourceAdministrator() {
      const user = userEvent.setup()
      renderWithFiles(
        { access: 'FULL', isSourceAdministrator: true },
        {
          participantsSourceTableId:
            ELITE_MOCK_PROFILE.participantsSourceTableId,
        },
      )
      await screen.findByText(`${allParticipantsCount} participants`)
      await user.click(
        await screen.findByRole('button', {
          name: AGGREGATE_DATA_PREVIEW_TITLE,
        }),
      )
      return user
    }

    it('brings the Query Builder back when a preview that withheld its values is stopped', async () => {
      const user = await openPreviewAsSourceAdministrator()
      // Above the source's 2,700 participants, so even the Query Builder's unfiltered value query is withheld.
      await user.type(
        screen.getByRole('spinbutton', { name: /^Suppression threshold/ }),
        '5000',
      )
      await user.click(
        screen.getByRole('button', { name: APPLY_PREVIEW_BUTTON_TEXT }),
      )
      await waitFor(() =>
        expect(
          screen.queryByRole('combobox', { name: 'Property' }),
        ).not.toBeInTheDocument(),
      )

      await user.click(
        screen.getByRole('button', { name: STOP_PREVIEW_BUTTON_TEXT }),
      )
      expect(
        await screen.findByRole('combobox', { name: 'Property' }),
      ).toBeInTheDocument()
    })

    it('sends quasi-identifier names trimmed, without blank ones', async () => {
      const user = await openPreviewAsSourceAdministrator()
      const quasiIdentifierInput = screen.getByRole('combobox', {
        name: 'Quasi-identifier columns',
      })
      await user.click(quasiIdentifierInput)
      // Removes the default individualId chip.
      await user.keyboard('{Backspace}')
      await user.type(quasiIdentifierInput, ' individualId {Enter}')
      await user.type(quasiIdentifierInput, '   {Enter}')
      await user.type(
        screen.getByRole('spinbutton', { name: /^Suppression threshold/ }),
        String(ELITE_MOCK_PROFILE.suppressionThreshold),
      )
      const requestsBeforePreview = sentRequests.length
      await user.click(
        screen.getByRole('button', { name: APPLY_PREVIEW_BUTTON_TEXT }),
      )

      await screen.findByText(COHORT_BUILDER_PREVIEW_NOTICE)
      await waitFor(() =>
        expect(sentRequests.length).toBeGreaterThan(requestsBeforePreview),
      )
      for (const request of sentRequests.slice(requestsBeforePreview)) {
        expect(
          request.aggregateDataPreview?.quasiIdentifierColumnNames,
        ).toEqual(['individualId'])
      }
    })

    it('lists every file and dataset, without a cohort, when no filters are applied', async () => {
      const profile = renderWithFiles()

      expect(
        await screen.findByText(
          `≈ ${(2070).toLocaleString()} files and datasets`,
        ),
      ).toBeInTheDocument()
      expect(filesRequests(profile)).not.toHaveLength(0)
      expect(
        filesRequests(profile).filter(
          request => request.query.cohorts || request.query.additionalFilters,
        ),
      ).toEqual([])
    })

    it('shows a loading indicator in the panel while the files query runs', async () => {
      const pendingFilesQuery = Promise.withResolvers<void>()
      renderWithFiles()
      // Registered after the mock handlers so it runs first. The files query is only sent once the participant count
      // has loaded, so it can't be sent before this.
      server.use(
        // Holds the files query until the test releases it, then falls through to the mock handlers.
        http.post(
          new RegExp(
            `/entity/${ELITE_MOCK_PROFILE.dataVirtualTableId}/table/query/async/start$`,
          ),
          () => pendingFilesQuery.promise,
        ),
      )
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      const filesPanel = screen.getByRole('region', {
        name: COHORT_FILES_TITLE,
      })
      expect(await within(filesPanel).findByRole('progressbar')).toBeVisible()
      pendingFilesQuery.resolve()
      expect(
        await within(filesPanel).findByText(
          `≈ ${(2070).toLocaleString()} files and datasets`,
        ),
      ).toBeVisible()
      await within(filesPanel).findByRole('table')
      expect(
        within(filesPanel).queryByRole('progressbar'),
      ).not.toBeInTheDocument()
    })

    it("hands the participant cohort to the files query by reference, and lists the cohort's files and datasets", async () => {
      const profile = renderWithFiles()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      await buildCohort('Race', ['Black or African American'])

      expect(
        await screen.findByText('≈ 190 files and datasets'),
      ).toBeInTheDocument()
      const participantRequest = sentRequests.findLast(
        request =>
          request.entityId === profile.participantsVirtualTableId &&
          (request.query.additionalFilters?.length ?? 0) > 0,
      )!
      const filesRequest = filesRequests(profile).at(-1)!
      expect(filesRequest.query.cohorts).toEqual([
        {
          name: 'c1',
          query: {
            sql: `SELECT individualId FROM ${profile.participantsVirtualTableId}`,
            additionalFilters: participantRequest.query.additionalFilters,
          },
        },
      ])
      expect(filesRequest.query.additionalFilters).toEqual([
        {
          concreteType:
            'org.sagebionetworks.repo.model.table.ColumnCohortFilter',
          columnName: 'individualId',
          cohortName: 'c1',
          isDefiningCondition: true,
        },
      ])
    })

    it('shows a files-specific notice when a cohort matches fewer files and datasets than the threshold', async () => {
      renderWithFiles()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      // 1,200 participants, but only 3 datasets.
      await buildCohort('Study', ['LLFS'])

      expect(
        await screen.findByText(
          'A minimum of 20 files and datasets is required',
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText(`≈ ${(1200).toLocaleString()} participants`),
      ).toBeInTheDocument()
    })

    it('shows the cohort-too-large state when the server rejects the cohort as too large', async () => {
      renderWithFiles({ maxCohortValues: 1000 })
      await screen.findByText(`${approximateAllParticipantsCount} participants`)

      // 1,096 participants: more than this server's maximum of 1,000.
      await buildCohort('Sex', ['Male'])

      expect(await screen.findByText(COHORT_TOO_LARGE_TEXT)).toBeInTheDocument()
    })

    function getLargeProfile(
      participantCount: number,
    ): CohortBuilderMockProfile {
      return {
        ...ELITE_MOCK_PROFILE,
        participantsVirtualTableId: 'syn90000021',
        dataVirtualTableId: 'syn90000022',
        studies: [{ ...ELITE_MOCK_PROFILE.studies[0], participantCount }],
      }
    }

    it('does not send a cohort whose exact participant count is more than the server allows', async () => {
      const profile = renderWithFiles({
        profile: getLargeProfile(MAX_COHORT_PARTICIPANTS + 1),
        access: 'FULL',
      })
      const largeCount = `${(MAX_COHORT_PARTICIPANTS + 1).toLocaleString()} participants`
      await screen.findByText(largeCount)

      // Every participant, as a cohort.
      await buildCohort('Sex', ['Female', 'Male', 'Unknown'])

      expect(await screen.findByText(COHORT_TOO_LARGE_TEXT)).toBeInTheDocument()
      expect(screen.getByText(largeCount)).toBeInTheDocument()
      expect(
        filesRequests(profile).filter(request => request.query.cohorts),
      ).toEqual([])
      expect(screen.queryByText(COHORT_FILES_ZERO_COUNT_TEXT)).toBeNull()
    })

    it('sends a cohort whose approximate participant count is over the maximum, and lets the server reject it', async () => {
      const profile = renderWithFiles({
        profile: getLargeProfile(MAX_COHORT_PARTICIPANTS + 5),
      })
      await screen.findByText(
        `≈ ${(MAX_COHORT_PARTICIPANTS + 5).toLocaleString()} participants`,
      )

      // Every participant, as a cohort.
      await buildCohort('Sex', ['Female', 'Male', 'Unknown'])

      expect(await screen.findByText(COHORT_TOO_LARGE_TEXT)).toBeInTheDocument()
      expect(
        filesRequests(profile).filter(request => request.query.cohorts),
      ).not.toEqual([])
    })

    type DownloadListRequest = { path: string; body: unknown }
    function recordDownloadListRequests() {
      const downloadListRequests: DownloadListRequest[] = []
      const listener = async ({ request }: { request: Request }) => {
        const path = new URL(request.url).pathname
        if (request.method === 'POST' && path.includes('/download/list/add')) {
          downloadListRequests.push({
            path,
            body: await request.clone().json(),
          })
        }
      }
      server.events.on('request:start', listener)
      return {
        downloadListRequests,
        stop: () => server.events.removeListener('request:start', listener),
      }
    }

    it("adds the cohort's files to the Download List with the cohort query, at their current versions", async () => {
      const { downloadListRequests, stop } = recordDownloadListRequests()
      const user = userEvent.setup()
      const profile = renderWithFiles()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('≈ 190 files and datasets')
      const filesQuery = filesRequests(profile).at(-1)!.query

      await user.click(screen.getByRole('button', { name: 'Download Options' }))
      const addMenuItem = await screen.findByRole('menuitem', {
        name: /Download List/,
      })
      expect(
        screen.queryByRole('menuitem', { name: 'Programmatic Options' }),
      ).not.toBeInTheDocument()
      await user.click(addMenuItem)
      // The confirmation offers Add once the Download List statistics job completes.
      await user.click(await screen.findByRole('button', { name: 'Add' }))

      await waitFor(() =>
        expect(
          downloadListRequests.filter(request =>
            request.path.endsWith('/download/list/add/async/start'),
          ),
        ).toHaveLength(1),
      )
      stop()
      const addRequest = downloadListRequests.find(request =>
        request.path.endsWith('/download/list/add/async/start'),
      )!.body as AddToDownloadListRequest
      const idColumn = getCohortBuilderColumnModels(
        getCohortBuilderSyntheticData(profile),
      ).dataReferences.find(column => column.name === 'id')!
      // A VirtualTable has no row versions, so the server would reject a request for specific versions.
      expect(addRequest).toMatchObject({
        useVersionNumber: false,
        query: {
          sql: filesQuery.sql,
          cohorts: filesQuery.cohorts,
          additionalFilters: filesQuery.additionalFilters,
          selectFileColumn: Number(idColumn.id),
        },
      })
    })

    it("exports the cohort's files and datasets as a CSV with the cohort definitions", async () => {
      const exportRequests: DownloadFromTableRequest[] = []
      const recordExportRequest = async ({ request }: { request: Request }) => {
        if (
          new URL(request.url).pathname.endsWith(
            '/table/download/csv/async/start',
          )
        ) {
          exportRequests.push(
            (await request.clone().json()) as DownloadFromTableRequest,
          )
        }
      }
      server.events.on('request:start', recordExportRequest)
      const user = userEvent.setup()
      const profile = renderWithFiles()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('≈ 190 files and datasets')
      const filesQuery = filesRequests(profile).at(-1)!.query

      await user.click(screen.getByRole('button', { name: 'Download Options' }))
      await user.click(
        await screen.findByRole('menuitem', { name: 'Export Table' }),
      )
      const dialog = await screen.findByRole('dialog', {
        name: 'Download query results',
      })
      await user.click(within(dialog).getByRole('button', { name: 'Next' }))

      // The export only succeeds when the cohort its filter references is defined in the same request.
      expect(
        await within(dialog).findByRole('button', { name: 'Download' }),
      ).toBeInTheDocument()
      server.events.removeListener('request:start', recordExportRequest)
      expect(exportRequests).toHaveLength(1)
      expect(exportRequests[0]).toMatchObject({
        sql: filesQuery.sql,
        cohorts: filesQuery.cohorts,
        additionalFilters: filesQuery.additionalFilters,
      })
    })

    it('adds the selected files and datasets directly, without a confirmation or a query', async () => {
      const { downloadListRequests, stop } = recordDownloadListRequests()
      const user = userEvent.setup()
      renderWithFiles()
      await screen.findByText(`${approximateAllParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('≈ 190 files and datasets')

      const table = await screen.findByRole('table')
      const checkboxes = (
        await within(table).findAllByRole('checkbox', { name: 'Select row' })
      ).slice(0, 2)
      const rows = checkboxes.map(checkbox => checkbox.closest('tr')!)
      for (const checkbox of checkboxes) {
        await user.click(checkbox)
      }
      // Each row links to its file or dataset.
      const selectedIds = rows.map(row =>
        within(row)
          .getAllByRole('link')
          .map(link => /syn\d+/.exec(link.getAttribute('href') ?? '')?.[0])
          .find(Boolean),
      )
      expect(selectedIds).toEqual([
        expect.stringMatching(/^syn\d+$/),
        expect.stringMatching(/^syn\d+$/),
      ])
      const selectedBatch = {
        path: '/repo/v1/download/list/add',
        body: {
          batchToAdd: selectedIds.map(fileEntityId => ({ fileEntityId })),
        },
      }

      // From the row selection controls
      await user.click(
        screen.getByRole('button', { name: 'Add to Download List' }),
      )
      await waitFor(() => expect(downloadListRequests).toHaveLength(1))

      // From the Download Options menu
      await user.click(screen.getByRole('button', { name: 'Download Options' }))
      await user.click(
        await screen.findByRole('menuitem', { name: /Download List/ }),
      )
      await waitFor(() => expect(downloadListRequests).toHaveLength(2))
      stop()

      expect(downloadListRequests).toEqual([selectedBatch, selectedBatch])
      expect(screen.queryByRole('button', { name: 'Add' })).toBeNull()
    })
  })
})
