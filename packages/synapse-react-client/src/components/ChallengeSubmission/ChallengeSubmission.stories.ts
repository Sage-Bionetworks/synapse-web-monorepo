import { Meta, StoryObj } from '@storybook/react'
import { EntityType } from '@sage-bionetworks/synapse-types'
import ChallengeSubmission from './ChallengeSubmission'

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
