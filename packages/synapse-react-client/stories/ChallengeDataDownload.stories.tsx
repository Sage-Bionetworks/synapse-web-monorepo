import { Meta, StoryObj } from '@storybook/react'
import { ChallengeDataDownload } from '../src/components/ChallengeDataDownload'

const meta = {
  title: 'Synapse/Challenge/ChallengeDataDownload',
  component: ChallengeDataDownload,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    parentContainerId: 'syn51565244',
  },
}
