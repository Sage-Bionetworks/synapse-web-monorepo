import { FRIENDLY_VALUE_NOT_SET, VALUE_NOT_SET } from '@/utils/SynapseConstants'
import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { cloneDeep } from 'lodash-es'
import { EnumFacetFilterSkeleton } from './EnumFacetFilterSkeleton'
import EnumFacetFilterUI, {
  EnumFacetFilterUIProps,
  RenderedFacetValue,
} from './EnumFacetFilterUI'

const meta: Meta<EnumFacetFilterUIProps> = {
  title: 'Explore/Components/Facets/EnumFacetFilter',
  component: EnumFacetFilterUI,
  decorators: [
    Story => (
      <Paper sx={{ p: 4, maxWidth: '400px' }}>
        <Story />
      </Paper>
    ),
  ],
  args: {
    onAddValueToSelection: fn(),
    onRemoveValueFromSelection: fn(),
    onRemoveAllFacetSelections: fn(),
    onHoverOverValue: fn(),
  },
}
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
  {
    value: 'veryLongValue',
    displayText:
      'Very_long-text_that-will_overflow_the_sidebar_if_not-handled-correctly',
    count: 525600,
    isSelected: false,
  },
  {
    value: 'veryLongValue2',
    displayText:
      'string_with_underscores_that_will_overflow_if_not_handled_correctly',
    count: 42,
    isSelected: false,
  },
  {
    value: 'veryLongValue3',
    displayText:
      'a-long-string-with-hyphens-that-will-overflow-if-not-handled-correctly',
    count: 75,
    isSelected: false,
  },
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
    filterIsActive: false,
    facetTitle: 'Column Named Foo',
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
    canMultiSelect: true,
  },
}

export const PanelWithSelections: Story = {
  args: {
    filterIsActive: true,
    facetValues: cloneDeep(facetValues).map((facetValue, i) => ({
      ...facetValue,
      isSelected: i < 3,
    })),
    facetTitle: 'Column Named Foo',
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
    canMultiSelect: true,
  },
}

export const IconDropdown: Story = {
  args: {
    filterIsActive: false,
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),

    facetTitle: 'Column Named Foo',
    containerAs: 'Dropdown',
    dropdownType: 'Icon',
    canMultiSelect: true,
  },
}

export const MenuDropdown: Story = {
  args: {
    filterIsActive: false,
    facetValues: cloneDeep(facetValues).map(facetValue => ({
      ...facetValue,
      isSelected: false,
    })),
    facetTitle: 'Column Named Foo',
    containerAs: 'Dropdown',
    dropdownType: 'SelectBox',
    canMultiSelect: true,
  },
}

export const SingleSelectRadioButtons: Story = {
  args: {
    filterIsActive: true,
    facetTitle: 'Column Named Foo',
    facetValues: cloneDeep(facetValues).map((facetValue, i) => ({
      ...facetValue,
      isSelected: i == 2,
    })),
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
    canMultiSelect: false,
  },
}

export const Skeleton: Story = {
  render: args => <EnumFacetFilterSkeleton {...args} />,
  args: {
    containerAs: 'Collapsible',
    dropdownType: 'Icon',
  },
}
