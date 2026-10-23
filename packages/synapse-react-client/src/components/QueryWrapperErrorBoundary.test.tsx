import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import {
  ColumnSingleValueFilterOperator,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { QueryContextType, useQueryContext } from './QueryContext/QueryContext'
import { QueryVisualizationWrapper } from './QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from './QueryWrapper/QueryWrapper'
import { useSuspenseGetQueryMetadata } from './QueryWrapper/useGetQueryMetadata'
import { QueryWrapperErrorBoundary } from './QueryWrapperErrorBoundary'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const allParticipantsRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    BUNDLE_MASK_QUERY_COUNT |
    BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    BUNDLE_MASK_QUERY_COLUMN_MODELS |
    BUNDLE_MASK_QUERY_FACETS,
  entityId: participantsTableId,
  query: { sql: `SELECT * FROM ${participantsTableId}` },
}
// Matches 16 participants, fewer than the mock profile's suppression threshold of 20.
const belowThresholdRequest: QueryBundleRequest = {
  ...allParticipantsRequest,
  query: {
    ...allParticipantsRequest.query,
    additionalFilters: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'ageRange',
        operator: ColumnSingleValueFilterOperator.IN,
        values: ['105-109', '>109'],
        isDefiningCondition: true,
      },
    ],
  },
}

let queryContext: QueryContextType | undefined
function QueryContextReceiver() {
  queryContext = useQueryContext()
  return null
}

function MatchingCount() {
  const { data } = useSuspenseGetQueryMetadata()
  return <p>{data.queryCount} matching</p>
}

describe('QueryWrapperErrorBoundary', () => {
  beforeEach(() => {
    queryContext = undefined
    server.use(
      ...getCohortBuilderHandlers({
        profile: ELITE_MOCK_PROFILE,
        access: 'AGGREGATE_ONLY',
      }),
    )
  })

  it('shows a below-threshold notice instead of the access-requirement UI for a BELOW_THRESHOLD 403, and clears it when the query changes', async () => {
    render(
      <QueryWrapper initQueryRequest={belowThresholdRequest}>
        <QueryVisualizationWrapper unitDescription="participant">
          <QueryContextReceiver />
          <QueryWrapperErrorBoundary>
            <Suspense fallback={null}>
              <MatchingCount />
            </Suspense>
          </QueryWrapperErrorBoundary>
        </QueryVisualizationWrapper>
      </QueryWrapper>,
      { wrapper: createWrapper() },
    )

    expect(await screen.findByRole('status')).toHaveTextContent(
      'A minimum of 20 participants is required',
    )

    act(() => {
      queryContext!.executeQueryRequest(allParticipantsRequest)
    })

    await screen.findByText('2700 matching')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
