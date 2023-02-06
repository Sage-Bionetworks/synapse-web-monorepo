import { Meta, StoryObj } from '@storybook/react'
import { EvaluationCard } from '../src/lib/containers/evaluation_queues/EvaluationCard'

const meta = {
  title: 'Synapse/Challenge/EvaluationCard',
  component: EvaluationCard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {
  args: {
    evaluation: {
      id: '9614690',
      etag: '6f8aa977-527e-4b2f-9d87-beab2db99503',
      name: 'Sample Evaluation Queue',
      description: 'This is a sample Evaluation Queue',
      ownerId: '3345868',
      createdOn: '2021-01-05T00:41:11.670Z',
      contentSource: 'syn23679309',
      submissionInstructionsMessage: 'Do a barrel roll',
      submissionReceiptMessage: 'We received your submission',
    },
  },
}
