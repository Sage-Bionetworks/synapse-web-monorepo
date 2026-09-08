import { QueryWrapper } from '@/components/QueryWrapper/index'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { Suspense, useState } from 'react'
import { defaultQBGroup, newBlankCondition } from './QueryBuilderStore'
import { QueryBuilderControls } from './QueryBuilderControls'
import { QBGroup } from './QueryBuilderTypes'

// The Cancer Complexity "files" table — has real facets (species, tumorType,
// assay, gender, tissue, grantName, etc.) which exercise the pill picker.
const DEMO_SQL =
  'SELECT fileName, title, species, dataFormat, assay, tumorType, gender, tissue, grantName, grantType, consortium FROM syn9630847'

const initQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn9630847',
  partMask:
    // COLUMN_MODELS (0x8) | FACETS (0x80) | QUERY_COUNT (0x2) | QUERY_RESULTS (0x1) | SELECT_COLUMNS (0x4)
    0x8 | 0x80 | 0x2 | 0x1 | 0x4,
  query: { sql: DEMO_SQL },
}

type ControlsWrapperArgs = {
  onlyFacetedColumns: boolean
  initialTree: 'blank' | 'flat-and' | 'nested-not'
}

function seedTree(kind: ControlsWrapperArgs['initialTree']): QBGroup {
  switch (kind) {
    case 'flat-and': {
      return {
        ...defaultQBGroup(),
        children: [
          {
            ...newBlankCondition('tumorType', 'STRING'),
            op: 'is_any_of',
            values: ['Glioblastoma'],
          },
          {
            ...newBlankCondition('assay', 'STRING'),
            op: 'is_any_of',
            values: ['rnaSeq'],
          },
        ],
      }
    }
    case 'nested-not': {
      const negatedChild: QBGroup = {
        kind: 'group',
        id: 'demo-nested-group',
        combinator: 'AND',
        not: true,
        children: [
          {
            ...newBlankCondition('species', 'STRING'),
            op: 'is_any_of',
            values: ['Mus musculus'],
          },
        ],
      }
      return {
        ...defaultQBGroup(),
        combinator: 'OR',
        children: [
          {
            ...newBlankCondition('tumorType', 'STRING'),
            op: 'is_any_of',
            values: ['Glioblastoma', 'Neurofibroma'],
          },
          negatedChild,
        ],
      }
    }
    case 'blank':
    default:
      return defaultQBGroup()
  }
}

function ControlsWrapper(props: ControlsWrapperArgs) {
  const [tree, setTree] = useState<QBGroup>(() => seedTree(props.initialTree))
  return (
    <Suspense fallback={<div>Loading table metadata…</div>}>
      <QueryBuilderControls
        tree={tree}
        onTreeChange={setTree}
        onlyFacetedColumns={props.onlyFacetedColumns}
      />
    </Suspense>
  )
}

const meta = {
  title: 'Explore/QueryBuilder/QueryBuilderControls',
  component: ControlsWrapper,
  argTypes: {
    onlyFacetedColumns: {
      description:
        'When true, the property picker is restricted to columns that have facet metadata (Cohort Builder mode).',
      control: { type: 'boolean' },
    },
    initialTree: {
      description: 'Fixture tree the story mounts with.',
      control: { type: 'select' },
      options: ['blank', 'flat-and', 'nested-not'],
    },
  },
  decorators: [
    Story => (
      <QueryWrapper initQueryRequest={initQueryRequest}>
        <div style={{ maxWidth: 960, margin: '24px auto' }}>
          <Story />
        </div>
      </QueryWrapper>
    ),
  ],
} satisfies Meta<typeof ControlsWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Blank: Story = {
  args: {
    initialTree: 'blank',
    onlyFacetedColumns: false,
  },
}

export const FlatAnd: Story = {
  args: {
    initialTree: 'flat-and',
    onlyFacetedColumns: false,
  },
}

export const NestedNot: Story = {
  args: {
    initialTree: 'nested-not',
    onlyFacetedColumns: false,
  },
}

export const CohortBuilderMode: Story = {
  name: 'Cohort Builder mode (only faceted columns)',
  args: {
    initialTree: 'blank',
    onlyFacetedColumns: true,
  },
}
