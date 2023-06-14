import { Meta, StoryObj } from '@storybook/react'
import { ChallengeDetailPage } from '../src/components/ChallengeDetailPage/ChallengeDetailPage'

const meta = {
  title: 'Synapse/Challenge/ChallengeDetailPage',
  component: ChallengeDetailPage,
  parameters: {
    backgrounds: {
      default: 'Challenge Header',
      values: [{ name: 'Challenge Header', value: '#3E68AA' }],
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51208606',
  },
}
