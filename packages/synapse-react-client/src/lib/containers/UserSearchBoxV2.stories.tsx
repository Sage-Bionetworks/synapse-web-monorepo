import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserSearchBoxV2 from './UserSearchBoxV2'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/UserSearchBoxV2',
  component: UserSearchBoxV2,
} as ComponentMeta<typeof UserSearchBoxV2>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UserSearchBoxV2> = args => (
  <UserSearchBoxV2 {...args} />
)

export const Demo = Template.bind({})
