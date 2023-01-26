import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SynapseVideo from './SynapseVideo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Markdown/SynapseVideo',
  component: SynapseVideo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SynapseVideo>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SynapseVideo> = args => (
  <SynapseVideo {...args} />
)

export const SynapseVideoDemo = Template.bind({})
SynapseVideoDemo.args = {
  params: {
    vimeoId: '355433104',
  },
}
