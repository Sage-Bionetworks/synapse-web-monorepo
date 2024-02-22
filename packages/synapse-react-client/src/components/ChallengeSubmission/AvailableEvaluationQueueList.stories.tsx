import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  generatedEvaulations,
  mockEvaluationQueue,
} from '../../mocks/entity/mockEvaluationQueue'
import AvailableEvaluationQueueList from './AvailableEvaluationQueueList'

const meta: Meta = {
  title: 'Synapse/Challenge/AvailableEvaluationQueueList',
  component: AvailableEvaluationQueueList,
  decorators: [
    Story => (
      <Box maxWidth="600px">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof AvailableEvaluationQueueList>
export default meta
type Story = StoryObj<typeof meta>

export const NoneAvailable: Story = {
  args: {
    evaluations: [],
  },
}

const markdownText = '*markdown* given to the **component**'
export const OneAvailable: Story = {
  args: {
    evaluations: [
      { ...mockEvaluationQueue, submissionInstructionsMessage: markdownText },
    ],
  },
}

export const ManyAvailable: Story = {
  args: {
    evaluations: generatedEvaulations,
  },
}
