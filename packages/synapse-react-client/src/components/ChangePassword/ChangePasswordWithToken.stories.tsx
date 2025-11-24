import {
  getRequires2FAChangePasswordHandler,
  getSuccessfulChangePasswordHandler,
} from '@/mocks/msw/handlers/changePasswordHandlers'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import ChangePasswordWithToken from './ChangePasswordWithToken'

const meta: Meta<typeof ChangePasswordWithToken> = {
  title: 'Authentication/ChangePassword/ResetWithToken',
  component: ChangePasswordWithToken,
  parameters: {
    stack: 'mock',
  },
  decorators: [
    Story => {
      return (
        <>
          This story uses mock server responses. You may need to refresh the
          page to reset the mock server responses.
          <Paper sx={{ my: 4, p: 4, mx: 'auto', width: '600px' }}>
            <Story />
          </Paper>
        </>
      )
    },
  ],
}
export default meta

type Story = StoryObj<typeof meta>

export const NoTwoFactorAuth: Story = {
  parameters: {
    msw: {
      handlers: [getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN)],
    },
  },
}

export const WithTwoFactorAuth: Story = {
  parameters: {
    msw: {
      handlers: [
        getRequires2FAChangePasswordHandler(
          MOCK_REPO_ORIGIN,
          MOCK_USER_ID,
          'mock-2fa-token',
        ),
        getSuccessfulChangePasswordHandler(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
