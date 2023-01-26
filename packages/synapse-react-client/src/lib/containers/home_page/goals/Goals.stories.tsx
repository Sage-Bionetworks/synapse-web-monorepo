import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Goals from './Goals'

export default {
  title: 'Home Page/Goals',
  component: Goals,
} as ComponentMeta<typeof Goals>

const Template: ComponentStory<typeof Goals> = args => <Goals {...args} />

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn22315959',
}
