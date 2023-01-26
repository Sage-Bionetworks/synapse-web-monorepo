import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectionCriteriaPill from './SelectionCriteriaPill'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Explore/Tokens/SelectionCriteriaPill',
  component: SelectionCriteriaPill,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SelectionCriteriaPill>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectionCriteriaPill> = args => (
  <SelectionCriteriaPill {...args} />
)

export const Pill = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pill.args = {
  innerText: 'Facet Value: ABC',
  tooltipText: 'You can add tooltip text too.',
}
