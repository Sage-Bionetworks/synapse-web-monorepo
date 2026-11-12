import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { CohortBuilderAccess } from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpHandler, HttpResponse } from 'msw'
import { Suspense } from 'react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { RowSetView } from './RowSetView'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const participantRowsRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    BUNDLE_MASK_QUERY_RESULTS |
    BUNDLE_MASK_QUERY_COUNT |
    BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    BUNDLE_MASK_QUERY_COLUMN_MODELS,
  entityId: participantsTableId,
  query: { sql: `SELECT * FROM ${participantsTableId}` },
}

/**
 * Renders the participant rows, and resolves once every query has settled.
 * @param overrides handlers that take precedence over the Cohort Builder mock handlers
 */
async function renderParticipantRows(
  access: CohortBuilderAccess,
  overrides: HttpHandler[] = [],
) {
  // MSW matches the handlers of a single server.use call in order, so the overrides come first.
  server.use(
    ...overrides,
    ...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE, access }),
  )
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  render(
    <QueryWrapper initQueryRequest={participantRowsRequest}>
      <QueryVisualizationWrapper unitDescription="participant">
        <Suspense fallback={null}>
          <RowSetView tableConfiguration={{}} />
        </Suspense>
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: wrapperFn },
  )
  await waitFor(() => expect(queryClient.isFetching()).toBe(0))
}

describe('RowSetView', () => {
  it('shows why the rows are unavailable, without pagination, when rows are withheld from an aggregate-only caller', async () => {
    // The participant VirtualTable projects a quasi-identifier, so its rows are withheld from an aggregate-only caller.
    await renderParticipantRows('AGGREGATE_ONLY')

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Individual records are not available',
    )
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('shows the error, and keeps pagination to leave the page, when the row query fails for another reason', async () => {
    const reason = 'The row query failed'
    await renderParticipantRows('FULL', [
      http.post(/\/table\/query\/async\/start$/, async ({ request }) => {
        const body = (await request.clone().json()) as QueryBundleRequest
        // Only the row query fails; the metadata query falls through to the mock handlers.
        if ((body.partMask & BUNDLE_MASK_QUERY_RESULTS) !== 0) {
          return HttpResponse.json({ reason }, { status: 400 })
        }
        return undefined
      }),
    ])

    expect(await screen.findByText(reason)).toBeInTheDocument()
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
