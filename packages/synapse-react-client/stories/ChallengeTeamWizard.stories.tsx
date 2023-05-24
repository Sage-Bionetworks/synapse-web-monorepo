import { Meta, StoryObj } from '@storybook/react'
import ChallengeTeamWizard from '../src/components/ChallengeTeamWizard/ChallengeTeamWizard'

const meta = {
  title: 'Synapse/ChallengeTeamWizard',
  component: ChallengeTeamWizard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51498253',
    userId: '3423215',
    isShowingModal: true,
  },
}
