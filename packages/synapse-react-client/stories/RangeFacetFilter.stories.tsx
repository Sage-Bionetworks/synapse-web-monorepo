import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { QueryVisualizationWrapper } from '../src/components/QueryVisualizationWrapper'
import { QueryWrapper } from '../src/components/QueryWrapper'
import { RangeFacetFilter } from '../src/components/widgets/query-filter/RangeFacetFilter'

const meta = {
  title: 'Explore/Components/Facets/RangeFacetFilter',
  component: RangeFacetFilter,
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
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const NoneSelected: Story = {
  args: {
    facetResult: {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      facetType: 'range',
      columnName: 'foo',
      columnMin: '0',
      columnMax: '100',
    },
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.INTEGER,
    },
    collapsed: false,
  },
}

export const Selected: Story = {
  args: {
    facetResult: {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
      facetType: 'range',
      columnName: 'foo',
      columnMin: '0',
      columnMax: '100',
      selectedMin: '5',
      selectedMax: '95',
    },
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.INTEGER,
    },
    collapsed: false,
  },
}
