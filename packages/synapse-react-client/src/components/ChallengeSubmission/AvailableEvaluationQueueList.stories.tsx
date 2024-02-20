import { Box } from '@mui/material'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  generatedEvaulations,
  mockEvaluationQueue,
} from '../../mocks/entity/mockEvaluationQueue'
import AvailableEvaluationQueueList from './AvailableEvaluationQueueList'

const meta = {
  title: 'Synapse/Challenge/AvailableEvaluationQueueList',
  component: AvailableEvaluationQueueList,
  render: args => (
    <Box maxWidth="600px">
      <AvailableEvaluationQueueList {...args} />
    </Box>
  ),
} satisfies Meta<typeof AvailableEvaluationQueueList>
export default meta
type Story = StoryObj<typeof meta>

const onChangeSelectedEvaluation = (evaluation: Evaluation | null) => {
  return console.log(
    evaluation ? `Selected ${evaluation.name!}` : 'No evaluation selected',
  )
}

export const NoneAvailable: Story = {
  args: {
    evaluations: [],
    onChangeSelectedEvaluation,
  },
}

export const OneAvailable: Story = {
  args: {
    evaluations: [mockEvaluationQueue],
    onChangeSelectedEvaluation,
  },
}

export const ManyAvailable: Story = {
  args: {
    evaluations: generatedEvaulations,
    onChangeSelectedEvaluation,
  },
}
