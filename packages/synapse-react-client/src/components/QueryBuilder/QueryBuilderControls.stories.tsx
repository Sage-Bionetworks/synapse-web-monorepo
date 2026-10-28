import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderStorybookHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
} from '@/utils/SynapseConstants'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { Suspense, useState } from 'react'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import { QueryBuilderControls } from './QueryBuilderControls'
import { MAX_FILTER_GROUP_DEPTH } from './queryBuilderLimits'
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

type QueryBuilderStoryProps = {
  initialTree: QBGroup | null
  onlyFacetedColumns: boolean
}

function QueryBuilderStory(props: QueryBuilderStoryProps) {
  const [tree, setTree] = useState(props.initialTree)
  return (
    <QueryWrapper initQueryRequest={queryRequest}>
      <QueryVisualizationWrapper unitDescription="participant">
        <Suspense fallback={null}>
          <QueryBuilderControls
            tree={tree}
            onTreeChange={setTree}
            onlyFacetedColumns={props.onlyFacetedColumns}
          />
        </Suspense>
      </QueryVisualizationWrapper>
    </QueryWrapper>
  )
}

/** `depth` nested groups (the root is the first) with `innermost` inside the deepest one. */
function nestedTree(depth: number, innermost: QBNode): QBGroup {
  let node: QBNode = innermost
  for (let level = 0; level < depth; level++) {
    node = { ...newEmptyGroup(), children: [node] }
  }
  return node as QBGroup
}

const meta = {
  title: 'Explore/QueryBuilderControls',
  component: QueryBuilderStory,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: getCohortBuilderStorybookHandlers({
        profile: ELITE_MOCK_PROFILE,
        access: 'AGGREGATE_ONLY',
      }),
    },
  },
  args: { initialTree: null, onlyFacetedColumns: true },
} satisfies Meta<typeof QueryBuilderStory>

export default meta
type Story = StoryObj<typeof meta>

/** Cohort Builder mode on synthetic participant data: only faceted columns are offered. */
export const CohortMode: Story = {}

/** The innermost group is at the maximum nesting depth, so it cannot hold another group. */
export const AtMaximumNestingDepth: Story = {
  args: {
    initialTree: nestedTree(MAX_FILTER_GROUP_DEPTH, {
      ...newBlankCondition('study', 'STRING'),
      op: 'is_any_of',
      values: ['LLFS'],
    }),
  },
}

/** A two-value "is all of" at the maximum depth would send one more nested group, so Update Results is blocked. */
export const ExceedsMaximumNestingDepth: Story = {
  args: {
    initialTree: nestedTree(MAX_FILTER_GROUP_DEPTH, {
      ...newBlankCondition('fileFormat', 'STRING_LIST'),
      op: 'is_all_of',
      values: ['CSV', 'VCF'],
    }),
  },
}
