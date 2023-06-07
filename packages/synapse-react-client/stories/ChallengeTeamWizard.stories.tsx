import { Meta, StoryObj } from '@storybook/react'
import ChallengeTeamWizard from '../src/components/ChallengeTeamWizard/ChallengeTeamWizard'

const meta = {
  title: 'Synapse/Challenge/ChallengeTeamWizard',
  component: ChallengeTeamWizard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51565244',
    isShowingModal: true,
  },
}
