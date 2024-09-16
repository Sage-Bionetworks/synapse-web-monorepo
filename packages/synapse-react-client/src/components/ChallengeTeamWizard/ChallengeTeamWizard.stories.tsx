import { Meta, StoryObj } from '@storybook/react'
import ChallengeTeamWizard from './ChallengeTeamWizard'
import mockProject from '../../mocks/entity/mockProject'
import { fn } from '@storybook/test'

const meta = {
  title: 'Synapse/Challenge/ChallengeTeamWizard',
  component: ChallengeTeamWizard,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
    onClose: fn(),
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: mockProject.id,
    isShowingModal: true,
  },
  parameters: {
    stack: 'mock',
  },
}

export const RealDeal: Story = {
  args: {
    projectId: 'syn51208606',
  },
  parameters: {
    stack: 'production',
  },
}
