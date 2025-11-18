import { mockChallenge } from '@/mocks/challenge/mockChallenge'
import getAllChallengeHandlers from '@/mocks/msw/handlers/challengeHandlers'
import getAllTeamHandlers from '@/mocks/msw/handlers/teamHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import Button from '@/react-ui/components/Button'
import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { useRef, useState } from 'react'
import {
  CreateChallengeTeam,
  CreateChallengeTeamHandle,
  CreateChallengeTeamProps,
} from './CreateChallengeTeam'

const meta: Meta<CreateChallengeTeamProps & { isAuthenticated: boolean }> = {
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
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
    onCanSubmitChange: fn(),
    onFinished: fn(),
  },
  render: function RenderFn(args) {
    const [canSubmit, setCanSubmit] = useState(false)
    const ref = useRef<CreateChallengeTeamHandle>(null)

    return (
      <>
        <CreateChallengeTeam
          {...args}
          onCanSubmitChange={canSubmit => {
            setCanSubmit(canSubmit)
            if (args?.onCanSubmitChange) {
              args.onCanSubmitChange(canSubmit)
            }
          }}
          ref={ref}
        />
        {ref.current && (
          <Button
            onClick={() => {
              ref.current!.submit()
            }}
            variant={'contained'}
            disabled={!canSubmit}
            sx={{ my: 2 }}
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
