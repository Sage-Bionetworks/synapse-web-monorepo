import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RangeSlider } from './RangeSlider'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RangeSlider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RangeSlider> = args => (
  <RangeSlider {...args} />
)

export const RangeSliderDemo = Template.bind({})
RangeSliderDemo.args = {
  domain: ['-100', '100'],
  initialValues: { min: '20', max: '80' },
  step: 5,
  doUpdateOnApply: false,
  maxTickCount: 15,
}
