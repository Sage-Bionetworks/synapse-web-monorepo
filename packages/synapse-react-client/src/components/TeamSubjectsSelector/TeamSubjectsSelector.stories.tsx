import { Paper } from '@mui/material'
import {
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { useState } from 'react'
import TeamSubjectsSelector from './TeamSubjectsSelector'

const meta: Meta<typeof TeamSubjectsSelector> = {
  title: 'Governance/TeamSubjectsSelector',
  component: TeamSubjectsSelector,
  parameters: {
    stack: 'development',
  },
  render: function RenderFn(args) {
    const [subjects, setSubjects] = useState<RestrictableObjectDescriptor[]>(
      args.subjects,
    )

    return (
      <>
        <Paper sx={{ mx: 'auto', p: '44px', maxWidth: '750px' }}>
          <TeamSubjectsSelector
            subjects={subjects}
            onUpdate={subjects => setSubjects(subjects)}
          />
        </Paper>
      </>
    )
  },
} satisfies Meta<typeof TeamSubjectsSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    subjects: [
      {
        id: '3429759',
        type: RestrictableObjectType.TEAM,
      },
    ],
    onUpdate: fn(),
  },
}
