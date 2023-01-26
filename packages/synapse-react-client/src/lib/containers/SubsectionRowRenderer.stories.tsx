import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubsectionRowRenderer from './SubsectionRowRenderer'

export default {
  title: 'Explore/SubsectionRowRenderer',
  component: SubsectionRowRenderer,
} as ComponentMeta<typeof SubsectionRowRenderer>

const Template: ComponentStory<typeof SubsectionRowRenderer> = args => (
  <SubsectionRowRenderer {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: 'SELECT funderName as "Funding Agency" FROM syn26344829',
  searchParams: { Resource_id: '844b598c-0171-4972-91c3-27aa21b45d52' },
  isMarkdown: false,
}
