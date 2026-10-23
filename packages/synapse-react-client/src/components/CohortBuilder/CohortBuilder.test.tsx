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
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { AddToDownloadListRequest } from '@sage-bionetworks/synapse-client'
import {
  DownloadFromTableRequest,
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
import { http } from 'msw'
import {
  COHORT_BUILDER_PART_MASK,
  COHORT_BUILDER_PREVIEW_NOTICE,
  COHORT_BUILDER_ZERO_COUNT_TEXT,
  CohortBuilder,
  CohortBuilderProps,
  DEFAULT_COHORT_BUILDER_AUDIT_NOTICE,
} from './CohortBuilder'
import {
  COHORT_FILES_ZERO_COUNT_TEXT,
  COHORT_TOO_LARGE_TEXT,
} from './CohortFilesPanel'
import { MAX_COHORT_PARTICIPANTS } from './cohortHandOff'

// The Download List confirmation estimates download time by downloading a test file.
vi.mock('@/utils/functions/testDownloadSpeed', () => ({
  testDownloadSpeed: vi.fn().mockResolvedValue(20),
}))

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const allParticipantsCount = (2700).toLocaleString()

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
  render(
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

  it('shows the participant count and the logging notice, and never requests participant rows', async () => {
    renderCohortBuilder()

    expect(
      await screen.findByText(`${allParticipantsCount} participants`),
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
    await screen.findByText(`${allParticipantsCount} participants`)
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
      screen.getByText(`${allParticipantsCount} participants`),
    ).not.toBeVisible()
    expect(screen.getByRole('button', { name: 'Update Results' })).toBeVisible()
    pendingQuery.resolve()
    expect(await screen.findByText('243 participants')).toBeVisible()
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
  })

  it('replaces only the results with a below-threshold notice, and keeps the cohort editable', async () => {
    const user = userEvent.setup()
    renderCohortBuilder()
    await screen.findByText(`${allParticipantsCount} participants`)

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
      await screen.findByText(`${allParticipantsCount} participants`),
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
    expect(screen.queryByText(DEFAULT_COHORT_BUILDER_AUDIT_NOTICE)).toBeNull()
    expect(sentRequests).toEqual([])
  })

  it('sends a data manager preview configuration with every query and says so', async () => {
    const aggregateDataPreview = {
      suppressionThreshold: ELITE_MOCK_PROFILE.suppressionThreshold,
      facetPostProcessingConfig: ELITE_MOCK_PROFILE.facetPostProcessingConfig,
    }
    renderCohortBuilder({ aggregateDataPreview }, 'FULL')

    expect(
      await screen.findByText(`${allParticipantsCount} participants`),
    ).toBeInTheDocument()
    expect(screen.getByText(COHORT_BUILDER_PREVIEW_NOTICE)).toBeInTheDocument()
    expect(sentRequests.length).toBeGreaterThan(0)
    for (const request of sentRequests) {
      expect(request.aggregateDataPreview).toEqual(aggregateDataPreview)
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
    ) {
      const profile = handlerOptions.profile ?? ELITE_MOCK_PROFILE
      server.use(...getCohortBuilderHandlers(handlerOptions))
      render(
        <CohortBuilder
          participantsTableId={profile.participantsVirtualTableId}
          filesTableId={profile.dataVirtualTableId}
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

    it('lists every file and dataset, without a cohort, when no filters are applied', async () => {
      const profile = renderWithFiles()

      expect(
        await screen.findByText(
          `${(2070).toLocaleString()} files and datasets`,
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
      await screen.findByText(`${allParticipantsCount} participants`)

      const filesPanel = screen.getByRole('region', {
        name: 'Files and datasets',
      })
      expect(await within(filesPanel).findByRole('progressbar')).toBeVisible()
      pendingFilesQuery.resolve()
      expect(
        await within(filesPanel).findByText(
          `${(2070).toLocaleString()} files and datasets`,
        ),
      ).toBeVisible()
      await within(filesPanel).findByRole('table')
      expect(
        within(filesPanel).queryByRole('progressbar'),
      ).not.toBeInTheDocument()
    })

    it("hands the participant cohort to the files query by reference, and lists the cohort's files and datasets", async () => {
      const profile = renderWithFiles()
      await screen.findByText(`${allParticipantsCount} participants`)

      await buildCohort('Race', ['Black or African American'])

      expect(
        await screen.findByText('193 files and datasets'),
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
      await screen.findByText(`${allParticipantsCount} participants`)

      // 1,200 participants, but only 3 datasets.
      await buildCohort('Study', ['LLFS'])

      expect(
        await screen.findByText(
          'A minimum of 20 files and datasets is required',
        ),
      ).toBeInTheDocument()
      expect(
        screen.getByText(`${(1200).toLocaleString()} participants`),
      ).toBeInTheDocument()
    })

    it('shows the cohort-too-large state when the server rejects the cohort as too large', async () => {
      renderWithFiles({ maxCohortValues: 1000 })
      await screen.findByText(`${allParticipantsCount} participants`)

      // 1,096 participants: more than this server's maximum of 1,000.
      await buildCohort('Sex', ['Male'])

      expect(await screen.findByText(COHORT_TOO_LARGE_TEXT)).toBeInTheDocument()
    })

    it('does not send a cohort with more participants than the server allows', async () => {
      const largeProfile: CohortBuilderMockProfile = {
        ...ELITE_MOCK_PROFILE,
        participantsVirtualTableId: 'syn90000021',
        dataVirtualTableId: 'syn90000022',
        studies: [
          {
            ...ELITE_MOCK_PROFILE.studies[0],
            participantCount: MAX_COHORT_PARTICIPANTS + 1,
          },
        ],
      }
      const profile = renderWithFiles({ profile: largeProfile })
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
      await screen.findByText(`${allParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('193 files and datasets')
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
      await screen.findByText(`${allParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('193 files and datasets')
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
      await screen.findByText(`${allParticipantsCount} participants`)
      await buildCohort('Race', ['Black or African American'])
      await screen.findByText('193 files and datasets')

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
