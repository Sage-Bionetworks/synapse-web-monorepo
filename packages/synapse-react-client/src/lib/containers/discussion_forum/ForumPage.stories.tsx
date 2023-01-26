import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ForumPage } from './ForumPage'

export default {
  title: 'Synapse/ForumPage',
  component: ForumPage,
  argTypes: {},
} as ComponentMeta<typeof ForumPage>

const Template: ComponentStory<typeof ForumPage> = args => (
  <ForumPage {...args} />
)

export const ForumPageDemo = Template.bind({})
ForumPageDemo.args = {
  forumId: '381943',
  limit: 20,
  onClickLink: () => alert('This functionality has not been implemented yet'),
}
