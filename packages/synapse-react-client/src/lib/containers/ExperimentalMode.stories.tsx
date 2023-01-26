import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ExperimentalMode from './ExperimentalMode'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/ExperimentalMode',
  component: ExperimentalMode,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ExperimentalMode>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ExperimentalMode> = args => (
  <ExperimentalMode {...args} />
)

export const Demo = Template.bind({})
