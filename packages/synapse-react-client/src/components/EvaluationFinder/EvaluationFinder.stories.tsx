import { Meta, StoryObj } from '@storybook/react'
import { Paper } from '@mui/material'
import React, { useState } from 'react'
import EvaluationFinder from './EvaluationFinder'

const meta: Meta = {
  title: 'Synapse/Evaluation Finder',
  component: EvaluationFinder,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: 4, maxWidth: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
  render: function Render(args) {
    const [ids, setIds] = useState<string[]>([])
    return <EvaluationFinder {...args} selectedIds={ids} onChange={setIds} />
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'Evaluation Finder',
  args: {},
}
