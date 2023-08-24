import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { EnumFacetFilter } from './EnumFacetFilter'
import {
  ColumnTypeEnum,
  FacetColumnResultValueCount,
} from '@sage-bionetworks/synapse-types'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../../QueryWrapper'
import { VALUE_NOT_SET } from '../../../utils/SynapseConstants'
import { cloneDeep } from 'lodash-es'

const meta = {
  title: 'Explore/Components/Facets/EnumFacetFilter',
  component: EnumFacetFilter,
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

const facetValues: FacetColumnResultValueCount[] = [
  { value: VALUE_NOT_SET, count: 150, isSelected: false },
  { value: 'foo', count: 100, isSelected: false },
  { value: 'bar', count: 50, isSelected: false },
  { value: 'baz', count: 25, isSelected: false },
  { value: 'value1', count: 10, isSelected: false },
  { value: 'value2', count: 9, isSelected: false },
  { value: 'value3', count: 8, isSelected: false },
  { value: 'value4', count: 7, isSelected: false },
  { value: 'value5', count: 6, isSelected: false },
  { value: 'value6', count: 5, isSelected: false },
  { value: 'value7', count: 4, isSelected: false },
  { value: 'value8', count: 3, isSelected: false },
]

export const PanelNoneSelected: Story = {
  args: {
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.STRING,
    },
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
    collapsed: false,
  },
}

export const PanelWithSelections: Story = {
  args: {
    facetValues: cloneDeep(facetValues).map((facetValue, i) => ({
      ...facetValue,
      isSelected: i < 3,
    })),
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.STRING,
    },
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
    collapsed: false,
  },
}

export const IconDropdown: Story = {
  args: {
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.STRING,
    },
    containerAs: 'Dropdown',
    dropdownType: 'Icon',
    collapsed: false,
  },
}

export const MenuDropdown: Story = {
  args: {
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    columnModel: {
      id: '123',
      name: 'fooColumn',
      columnType: ColumnTypeEnum.STRING,
    },
    containerAs: 'Dropdown',
    dropdownType: 'SelectBox',
    collapsed: false,
  },
}
