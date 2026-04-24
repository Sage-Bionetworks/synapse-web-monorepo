import { Meta, StoryObj } from '@storybook/react-vite'
import OpenInvitationsToUserCard from './OpenInvitationsToUserCard'
import getAllTeamHandlers from '@/mocks/msw/handlers/teamHandlers'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { MOCK_TEAM_ID_4, MOCK_TEAM_ID_5 } from '@/mocks/team/mockTeam'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'

const meta = {
  title: 'Features/Team/OpenInvitationsToUser',
  component: OpenInvitationsToUserCard,
  parameters: { stack: 'mock' },
  args: {
    cardProps: { sx: { p: 4 } },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const WithPendingInvitations: Story = {
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [
          {
            id: 'invitation-1',
            createdOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID_2),
            teamId: String(MOCK_TEAM_ID_4),
            inviteeId: String(MOCK_USER_ID),
            message:
              'Come join my cool team so we can submit to the challenge together!',
          },
          {
            id: 'invitation-2',
            createdOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID_2),
            teamId: String(MOCK_TEAM_ID_5),
            inviteeId: String(MOCK_USER_ID),
            message: 'We would love to have you on our research team!',
          },
        ]),
      },
    },
  },
}

export const WithNoInvitations: Story = {
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, []),
      },
    },
  },
}

export const WithSingleInvitation: Story = {
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [
          {
            id: 'invitation-1',
            createdOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID_2),
            teamId: String(MOCK_TEAM_ID_4),
            inviteeId: String(MOCK_USER_ID),
            message: 'Join our team!',
          },
        ]),
      },
    },
  },
}

export const WithInvitationNoMessage: Story = {
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [
          {
            id: 'invitation-1',
            createdOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID_2),
            teamId: String(MOCK_TEAM_ID_4),
            inviteeId: String(MOCK_USER_ID),
          },
        ]),
      },
    },
  },
}
