import {
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { useState } from 'react'
import EntitySubjectsSelector from './EntitySubjectsSelector'

const meta: Meta<typeof EntitySubjectsSelector> = {
  title: 'Governance/EntitySubjectsSelector',
  component: EntitySubjectsSelector,
  parameters: {
    stack: 'development',
  },
  render: function RenderFn(args) {
    const [subjects, setSubjects] = useState<RestrictableObjectDescriptor[]>(
      args.subjects,
    )

    return (
      <>
        <EntitySubjectsSelector
          subjects={subjects}
          onUpdate={subjects => setSubjects(subjects)}
          onUpdateEntityIDsTextbox={fn()}
        />
      </>
    )
  },
} satisfies Meta<typeof EntitySubjectsSelector>

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    subjects: [
      {
        id: 'syn5550376',
        type: RestrictableObjectType.ENTITY,
      },
      {
        id: 'syn12177273',
        type: RestrictableObjectType.ENTITY,
      },
      {
        id: '3429759',
        type: RestrictableObjectType.TEAM,
      },
    ],
    onUpdate: fn(),
  },
}
