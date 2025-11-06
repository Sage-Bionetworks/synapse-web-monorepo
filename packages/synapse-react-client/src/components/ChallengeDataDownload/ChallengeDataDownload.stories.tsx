import { Meta, StoryObj } from '@storybook/react-vite'
import { ChallengeDataDownload } from './index'

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
