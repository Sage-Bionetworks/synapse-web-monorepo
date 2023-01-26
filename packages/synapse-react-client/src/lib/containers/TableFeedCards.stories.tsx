import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TableFeedCards from './TableFeedCards'

export default {
  title: 'Synapse/TableFeedCards',
  component: TableFeedCards,
} as ComponentMeta<typeof TableFeedCards>

const Template: ComponentStory<typeof TableFeedCards> = args => (
  <TableFeedCards {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  tableEntityId: 'syn23520190',
}
