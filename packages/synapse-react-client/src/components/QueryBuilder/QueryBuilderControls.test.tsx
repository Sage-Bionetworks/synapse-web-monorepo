import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { Suspense } from 'react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { QueryBuilderControls } from './QueryBuilderControls'
import {
  FILTER_LIMIT_VIOLATION_MESSAGES,
  MAX_FILTER_GROUP_DEPTH,
} from './queryBuilderLimits'
import { newBlankCondition, newEmptyGroup } from './queryBuilderOperations'
import { QBGroup, QBNode } from './QueryBuilderTypes'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const queryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    BUNDLE_MASK_QUERY_COUNT |
    BUNDLE_MASK_QUERY_COLUMN_MODELS |
    BUNDLE_MASK_QUERY_FACETS,
  entityId: participantsTableId,
  query: { sql: `SELECT * FROM ${participantsTableId}` },
}

/** `depth` nested groups (the root is the first) with `innermost` inside the deepest one. */
function nestedTree(depth: number, innermost: QBNode): QBGroup {
  let node: QBNode = innermost
  for (let level = 0; level < depth; level++) {
    node = { ...newEmptyGroup(), children: [node] }
  }
  return node as QBGroup
}

function renderQueryBuilder(tree: QBGroup) {
  render(
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryVisualizationWrapper>
        <Suspense fallback={null}>
          <QueryBuilderControls tree={tree} onTreeChange={vi.fn()} />
        </Suspense>
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )
}

describe('QueryBuilderControls', () => {
  beforeEach(() => {
    server.use(...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE }))
  })

  const allOfCondition = {
    ...newBlankCondition('fileFormat', 'STRING_LIST'),
    op: 'is_all_of' as const,
    values: ['CSV', 'VCF'],
  }

  it('blocks Update Results when an is_all_of condition would expand past the maximum nesting depth', async () => {
    // At the deepest allowed group, a two-value is_all_of becomes one more nested group.
    renderQueryBuilder(nestedTree(MAX_FILTER_GROUP_DEPTH, allOfCondition))

    const updateResults = await screen.findByRole('button', {
      name: 'Update Results',
    })
    expect(updateResults).toBeDisabled()
    expect(updateResults).toHaveAccessibleDescription(
      FILTER_LIMIT_VIOLATION_MESSAGES.depth,
    )
  })

  it('allows Update Results when the filters are within the limits', async () => {
    renderQueryBuilder(nestedTree(MAX_FILTER_GROUP_DEPTH - 1, allOfCondition))

    expect(
      await screen.findByRole('button', { name: 'Update Results' }),
    ).toBeEnabled()
    expect(
      screen.queryByText(FILTER_LIMIT_VIOLATION_MESSAGES.depth),
    ).not.toBeInTheDocument()
  })
})
