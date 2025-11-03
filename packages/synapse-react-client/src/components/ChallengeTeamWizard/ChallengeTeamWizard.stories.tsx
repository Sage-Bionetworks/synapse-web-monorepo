import mockProject from '@/mocks/entity/mockProject'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import ChallengeTeamWizard, {
  ChallengeTeamWizardProps,
} from './ChallengeTeamWizard'

const meta: Meta<ChallengeTeamWizardProps & { isAuthenticated?: boolean }> = {
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
