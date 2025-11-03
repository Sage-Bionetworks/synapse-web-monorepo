import { VALUE_NOT_SET } from '@/utils/SynapseConstants'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper'
import { QueryWrapper } from '../../QueryWrapper'
import { RangeFacetFilterProps, RangeFacetFilterUI } from './RangeFacetFilterUI'

const meta: Meta<RangeFacetFilterProps> = {
  title: 'Explore/Components/Facets/RangeFacetFilter',
  component: RangeFacetFilterUI,
  decorators: [
    Story => (
      <QueryWrapper
        initQueryRequest={{
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId: 'syn123',
          partMask: 0,
          query: {
            sql: 'select * from syn123',
          },
        }}
      >
        <QueryVisualizationWrapper>
          <Story />
        </QueryVisualizationWrapper>
      </QueryWrapper>
    ),
  ],
  args: {
    onAnySelected: fn(),
    onNotSetSelected: fn(),
    onRangeValueSelected: fn(),
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const NoneSelected: Story = {
  args: {
    label: 'foo',
    columnType: 'INTEGER',
    facetResult: {
      columnMin: '0',
      columnMax: '100',
    },
  },
}

export const NotAssignedSelected: Story = {
  args: {
    label: 'foo',
    columnType: 'INTEGER',
    facetResult: {
      columnMin: '0',
      columnMax: '100',
      selectedMin: VALUE_NOT_SET,
      selectedMax: VALUE_NOT_SET,
    },
  },
}

export const SelectedInteger: Story = {
  args: {
    label: 'foo',
    columnType: 'INTEGER',
    facetResult: {
      columnMin: '0',
      columnMax: '100',
      selectedMin: '5',
      selectedMax: '95',
    },
  },
}

export const SelectedDouble: Story = {
  args: {
    label: 'foo',
    columnType: 'DOUBLE',
    facetResult: {
      columnMin: '0',
      columnMax: '100',
      selectedMin: '5',
      selectedMax: '95',
    },
  },
}

export const SelectedDate: Story = {
  args: {
    label: 'foo',
    columnType: 'DATE',
    facetResult: {
      columnMin: '2020-01-01',
      columnMax: '2025-06-01',
      selectedMin: '2020-01-01',
      selectedMax: '2025-06-01',
    },
  },
}
