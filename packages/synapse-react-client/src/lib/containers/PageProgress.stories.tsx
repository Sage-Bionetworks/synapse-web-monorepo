import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PageProgress from './PageProgress'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/PageProgress',
  component: PageProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PageProgress>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageProgress> = args => {
  const [percent, setPercent] = React.useState(0)
  return (
    <PageProgress
      barPercent={percent}
      backBtnCallback={() => {
        setPercent(percent - 25)
      }}
      forwardBtnCallback={() => {
        setPercent(percent + 25)
      }}
      forwardBtnActive={percent < 100}
      {...args}
    />
  )
}

export const Demo = Template.bind({})
Demo.args = {
  barColor: 'green',
  backBtnLabel: 'Back',
  forwardBtnLabel: 'Next',
}
