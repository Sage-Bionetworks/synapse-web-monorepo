import { Meta, StoryObj } from '@storybook/react'
import ChallengeTeamWizard from './ChallengeTeamWizard'
import getAllChallengeHandlers from '../../mocks/msw/handlers/challengeHandlers'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { SynapseContextConsumer, SynapseContextProvider } from '../../utils'
import React from 'react'
import getAllTeamHandlers from '../../mocks/msw/handlers/teamHandlers'

const meta = {
  title: 'Synapse/Challenge/ChallengeTeamWizard',
  component: ChallengeTeamWizard,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    projectId: 'syn51565244',
    isShowingModal: true,
    // isAuthenticated: true,
  },
  decorators: [
    (Story, args) => (
      <SynapseContextConsumer>
        {context => (
          <SynapseContextProvider
            synapseContext={{
              ...context,
              accessToken: 'fake token',
            }}
          >
            <Story />
          </SynapseContextProvider>
        )}
      </SynapseContextConsumer>
    ),
  ],
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getAllTeamHandlers(MOCK_REPO_ORIGIN),
        ...getAllChallengeHandlers(MOCK_REPO_ORIGIN),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
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
