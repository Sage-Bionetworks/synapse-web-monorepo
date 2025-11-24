import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { MOCK_USER_ID_3 } from '@/mocks/user/mock_user_profile'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { AccountLevelBadges } from '../AccountLevelBadges'

const meta = {
  title: 'UI/AccountLevelBadges',
  component: AccountLevelBadges,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Registered: Story = {
  args: {
    userId: '3385021',
  },
}

export const Certified: Story = {
  args: {
    userId: '345424',
  },
}

export const CertifiedAndValidated: Story = {
  args: {
    userId: '273980',
  },
}

export const CertifiedValidatedAndEnabledMFAMock: Story = {
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN)],
    },
  },
  args: {
    userId: MOCK_USER_ID_3.toString(),
  },
}
