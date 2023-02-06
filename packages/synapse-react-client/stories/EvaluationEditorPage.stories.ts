import { Meta, StoryObj } from '@storybook/react'
import { EvaluationEditorPage } from '../src/lib/containers/evaluation_queues/EvaluationEditorPage'

const meta = {
  title: 'Synapse/Challenge/EvaluationEditorPage',
  component: EvaluationEditorPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Entity: Story = {
  args: {
    entityId: 'syn5585645',
  },
}

export const Evaluation: Story = {
  args: {
    evaluationId: '9614712',
  },
}
