import { Meta, StoryObj } from '@storybook/react'
import SubmissionViewScopeEditor from './SubmissionViewScopeEditor'
import { Paper } from '@mui/material'
import React, { useState } from 'react'

const meta: Meta = {
  title: 'Synapse/SubmissionView Scope Editor',
  component: SubmissionViewScopeEditor,
  decorators: [
    Story => (
      <Paper sx={{ mx: 'auto', p: 4, maxWidth: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
  render: function Render(args) {
    const [ids, setIds] = useState<string[]>([])
    return (
      <SubmissionViewScopeEditor
        {...args}
        evaluationIds={ids}
        onChange={setIds}
      />
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    scopeIds: [],
  },
}
