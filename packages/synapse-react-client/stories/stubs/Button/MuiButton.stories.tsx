import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './MuiButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/MUI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Demo = Template.bind({})
Demo.args = {
  variant: 'contained',
  label: 'My Button Text Here',
}
