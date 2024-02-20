import { Meta, StoryObj } from '@storybook/react'
import { ChallengeDetailPage } from './ChallengeDetailPage'
import mockProject from '../../mocks/entity/mockProject'

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

export const MockDemo: Story = {
  args: {
    projectId: mockProject.id,
  },
  parameters: {
    stack: 'mock',
  },
}

export const ProductionDemo: Story = {
  args: {
    projectId: 'syn51208606',
  },
  parameters: {
    stack: 'production',
  },
}
