import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GoalsV2 from './GoalsV2'

export default {
  title: 'Components/GoalsV2',
  component: GoalsV2,
  argTypes: {
    entityId: { control: 'text' },
  },
} as ComponentMeta<typeof GoalsV2>

const Template: ComponentStory<typeof GoalsV2> = args => <GoalsV2 {...args} />

export const Default = Template.bind({})
Default.args = {
  entityId: 'syn51449135',
}
