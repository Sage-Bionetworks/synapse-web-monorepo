import {
  CohortBuilderMockProfile,
  ELITE_MOCK_PROFILE,
} from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { CohortBuilderAccess } from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import {
  CohortBuilderHandlersOptions,
  getCohortBuilderHandlers,
} from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BUNDLE_MASK_QUERY_RESULTS } from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  describe('Files/Datasets panel', () => {
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
  })
})
