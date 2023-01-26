import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserSearchBox from './UserSearchBox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/UserSearchBox',
  component: UserSearchBox,
} as ComponentMeta<typeof UserSearchBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserSearchBox> = args => (
  <UserSearchBox {...args} />
)

export const Demo = Template.bind({})
