import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { CohortBuilderAccess } from '@/mocks/cohortBuilder/cohortBuilderMockQueryEngine'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, within } from '@testing-library/react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import FacetPlotsCard from './FacetPlotsCard'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const request: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: participantsTableId,
  partMask:
    BUNDLE_MASK_QUERY_COUNT |
    BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    BUNDLE_MASK_QUERY_COLUMN_MODELS |
    BUNDLE_MASK_QUERY_FACETS,
  query: { sql: `SELECT * FROM ${participantsTableId}` },
}

function renderStudyCard(access: CohortBuilderAccess) {
  server.use(
    ...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE, access }),
  )
  render(
    <QueryWrapper initQueryRequest={request}>
      <QueryVisualizationWrapper>
        <FacetPlotsCard facetsToPlot={['study']} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )
}

async function findLegendCount(value: string) {
  const legendRow = (await screen.findByText(value)).closest('tr')!
  return within(legendRow).getAllByRole('cell')[1]
}

describe('FacetPlotsCard', () => {
  it('lists rounded counts in the legend as approximate bin midpoints', async () => {
    renderStudyCard('AGGREGATE_ONLY')

    // 1,200 LLFS participants are reported in the bin 1,200–1,204.
    expect(await findLegendCount('LLFS')).toHaveTextContent(
      `≈ ${(1202).toLocaleString()}`,
    )
  })

  it('lists exact counts in the legend with locale formatting', async () => {
    renderStudyCard('FULL')

    expect(await findLegendCount('LLFS')).toHaveTextContent(
      new RegExp(`^${(1200).toLocaleString()}$`),
    )
  })
})
