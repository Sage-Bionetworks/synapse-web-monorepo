import { Meta, StoryObj } from '@storybook/react'
import ChallengeSubmission from '../src/components/ChallengeSubmission/ChallengeSubmission'

const meta = {
  title: 'Synapse/Challenge/ChallengeSubmission',
  component: ChallengeSubmission,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51565244',
  },
}
