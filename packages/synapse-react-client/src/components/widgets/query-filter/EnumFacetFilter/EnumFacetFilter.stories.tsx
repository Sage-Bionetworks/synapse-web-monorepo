import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  FRIENDLY_VALUE_NOT_SET,
  VALUE_NOT_SET,
} from '../../../../utils/SynapseConstants'
import { cloneDeep } from 'lodash-es'
import EnumFacetFilterUI, { RenderedFacetValue } from './EnumFacetFilterUI'

const meta = {
  title: 'Explore/Components/Facets/EnumFacetFilter',
  component: EnumFacetFilterUI,
  decorators: [Story => <Story />],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const facetValues: RenderedFacetValue[] = [
  {
    value: VALUE_NOT_SET,
    displayText: FRIENDLY_VALUE_NOT_SET,
    count: 150,
    isSelected: false,
  },
  { value: 'foo', displayText: 'foo', count: 100, isSelected: false },
  { value: 'bar', displayText: 'bar', count: 50, isSelected: false },
  { value: 'baz', displayText: 'baz', count: 25, isSelected: false },
  { value: 'value1', displayText: 'value1', count: 10, isSelected: false },
  { value: 'value2', displayText: 'value2', count: 9, isSelected: false },
  { value: 'value3', displayText: 'value3', count: 8, isSelected: false },
  { value: 'value4', displayText: 'value4', count: 7, isSelected: false },
  { value: 'value5', displayText: 'value5', count: 6, isSelected: false },
  { value: 'value6', displayText: 'value6', count: 5, isSelected: false },
  { value: 'value7', displayText: 'value7', count: 4, isSelected: false },
  { value: 'value8', displayText: 'value8', count: 3, isSelected: false },
]

export const PanelNoneSelected: Story = {
  args: {
    allIsSelected: false,
    facetTitle: 'Column Named Foo',
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
  },
}

export const PanelWithSelections: Story = {
  args: {
    allIsSelected: false,
    facetValues: cloneDeep(facetValues).map((facetValue, i) => ({
      ...facetValue,
      isSelected: i < 3,
    })),
    facetTitle: 'Column Named Foo',
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
  },
}

export const IconDropdown: Story = {
  args: {
    allIsSelected: true,
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),

    facetTitle: 'Column Named Foo',
    containerAs: 'Dropdown',
    dropdownType: 'Icon',
  },
}

export const MenuDropdown: Story = {
  args: {
    allIsSelected: true,
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    facetTitle: 'Column Named Foo',
    containerAs: 'Dropdown',
    dropdownType: 'SelectBox',
  },
}
