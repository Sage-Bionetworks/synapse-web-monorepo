import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DiscussionThread } from './DiscussionThread'

export default {
  title: 'Synapse/DiscussionThread',
  component: DiscussionThread,
  argTypes: {},
} as ComponentMeta<typeof DiscussionThread>

const Template: ComponentStory<typeof DiscussionThread> = args => (
  <DiscussionThread {...args} />
)

export const DiscussionThreadDemo = Template.bind({})
DiscussionThreadDemo.args = {
  threadId: '1138',
  limit: 30,
}
