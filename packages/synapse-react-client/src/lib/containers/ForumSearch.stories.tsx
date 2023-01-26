import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ForumSearch from './ForumSearch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ForumSearch',
  component: ForumSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ForumSearch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForumSearch> = args => (
  <ForumSearch {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
  forumId: '1032',
  onSearchResultsVisible: visible => alert(`Is visible? ${visible}`),
}
