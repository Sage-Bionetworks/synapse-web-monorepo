import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { RowSetView } from './RowSetView'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
// The participant VirtualTable projects a quasi-identifier, so its rows are withheld from an aggregate-only caller.
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

describe('RowSetView', () => {
  beforeEach(() => {
    server.use(
      ...getCohortBuilderHandlers({
        profile: ELITE_MOCK_PROFILE,
        access: 'AGGREGATE_ONLY',
      }),
    )
  })

  it('shows why the rows are unavailable, without pagination, when the row query fails', async () => {
    render(
      <QueryWrapper initQueryRequest={participantRowsRequest}>
        <QueryVisualizationWrapper unitDescription="participant">
          <Suspense fallback={null}>
            <RowSetView tableConfiguration={{}} />
          </Suspense>
        </QueryVisualizationWrapper>
      </QueryWrapper>,
      { wrapper: createWrapper() },
    )

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Individual records are not available',
    )
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
