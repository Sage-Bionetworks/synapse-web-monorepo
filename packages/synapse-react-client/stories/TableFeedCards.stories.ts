import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TableFeedCards from '../src/components/TableFeedCards/TableFeedCards'

const meta = {
  title: 'Synapse/TableFeedCards',
  component: TableFeedCards,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    tableEntityId: 'syn23520190',
  },
}
