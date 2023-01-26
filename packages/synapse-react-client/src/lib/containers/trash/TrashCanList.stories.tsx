import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TrashCanList } from './TrashCanList'

export default {
  title: 'Synapse/TrashCanList',
  component: TrashCanList,
} as ComponentMeta<typeof TrashCanList>

const Template: ComponentStory<typeof TrashCanList> = args => (
  <TrashCanList {...args} />
)

export const TrashCan = Template.bind({})
