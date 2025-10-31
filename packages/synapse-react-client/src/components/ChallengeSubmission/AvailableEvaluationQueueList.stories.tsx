import {
  generatedEvaulations,
  mockEvaluationQueue,
  sevenGeneratedEvaulations,
} from '@/mocks/entity/mockEvaluationQueue'
import { Box } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import AvailableEvaluationQueueList from './AvailableEvaluationQueueList'

const meta: Meta = {
  title: 'Synapse/Challenge/AvailableEvaluationQueueList',
  component: AvailableEvaluationQueueList,
  decorators: [
    Story => (
      <Box
        sx={{
          maxWidth: '600px',
        }}
      >
        <Story />
      </Box>
    ),
  ],
  args: {
    onChangeSelectedEvaluation: fn(),
  },
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

export const SevenAvailable: Story = {
  args: {
    evaluations: sevenGeneratedEvaulations,
  },
}

export const ManyAvailable: Story = {
  args: {
    evaluations: generatedEvaulations,
  },
}
