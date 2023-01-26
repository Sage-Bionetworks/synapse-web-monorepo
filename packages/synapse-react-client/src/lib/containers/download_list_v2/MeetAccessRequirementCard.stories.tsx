import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MeetAccessRequirementCard } from './MeetAccessRequirementCard'

export default {
  title: 'Download/MeetAccessRequirementCard',
  component: MeetAccessRequirementCard,
} as ComponentMeta<typeof MeetAccessRequirementCard>

const Template: ComponentStory<typeof MeetAccessRequirementCard> = args => (
  <MeetAccessRequirementCard {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  accessRequirementId: 5592528,
}
