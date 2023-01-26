import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AddConditionsForUseButton from './AddConditionsForUseButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AddConditionsForUseButton',
  component: AddConditionsForUseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AddConditionsForUseButton>

const Template: ComponentStory<typeof AddConditionsForUseButton> = args => (
  <AddConditionsForUseButton {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn45328519',
}
