import { Meta, StoryObj } from '@storybook/react'
import ChallengeSubmission from './ChallengeSubmission'
import { EntityType } from '@sage-bionetworks/synapse-types'

const meta = {
  title: 'Synapse/Challenge/ChallengeSubmission',
  component: ChallengeSubmission,
  argTypes: {
    entityType: {
      options: [EntityType.DOCKER_REPO, EntityType.FILE],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    withRouter: true,
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51565244',
    pageSize: 10,
    entityType: EntityType.DOCKER_REPO,
  },
}
