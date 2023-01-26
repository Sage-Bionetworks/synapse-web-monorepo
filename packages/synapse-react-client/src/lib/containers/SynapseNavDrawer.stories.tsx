import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SynapseNavDrawer } from './SynapseNavDrawer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/SynapseNavDrawer',
  component: SynapseNavDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SynapseNavDrawer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SynapseNavDrawer> = args => (
  <SynapseNavDrawer {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  initIsOpen: false,
}
