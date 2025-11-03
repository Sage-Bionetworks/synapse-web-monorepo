import { EntityType } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import ChallengeSubmission from './ChallengeSubmission'

const meta = {
  title: 'Synapse/Challenge/ChallengeSubmission',
  component: ChallengeSubmission,
  argTypes: {
    entityType: {
      options: [EntityType.dockerrepo, EntityType.file],
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
    entityType: EntityType.dockerrepo,
  },
}
