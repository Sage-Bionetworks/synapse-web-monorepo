import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SynapseHomepage } from './SynapseHomepage'

export default {
  title: 'Synapse/HomePage',
  component: SynapseHomepage,
} as ComponentMeta<typeof SynapseHomepage>

const Template: ComponentStory<typeof SynapseHomepage> = args => (
  <SynapseHomepage {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  projectViewId: 'syn23593547.3',
}
