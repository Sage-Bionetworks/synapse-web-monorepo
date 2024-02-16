import { Meta, StoryObj } from '@storybook/react'
import getAllChallengeHandlers from '../../mocks/msw/handlers/challengeHandlers'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { getUserProfileHandlers } from '../../mocks/msw/handlers/userProfileHandlers'
import { SynapseContextConsumer, SynapseContextProvider } from '../../utils'
import React, { useRef } from 'react'
import getAllTeamHandlers from '../../mocks/msw/handlers/teamHandlers'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
} from './CreateChallengeTeam'
import { mockChallenge } from '../../mocks/challenge/mockChallenge'
import { Button } from '@mui/material'

const meta: Meta<typeof CreateChallengeTeam> = {
  title: 'Synapse/Challenge/CreateChallengeTeam',
  component: CreateChallengeTeam,
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
  decorators: [
    Story => (
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
  render: function RenderFn(args) {
    const ref = useRef<CreateChallengeTeamHandle>(null)

    return (
      <>
        <CreateChallengeTeam {...args} ref={ref} />
        {ref.current && (
          <Button
            onClick={() => {
              ref.current!.submit()
            }}
            variant={'contained'}
          >
            Submit
          </Button>
        )}
      </>
    )
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    challengeId: mockChallenge.id,
  },
}
