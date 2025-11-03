import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import TwoFactorAuthEnabledRequirement from './TwoFactorAuthEnabledRequirement'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement',
  component: TwoFactorAuthEnabledRequirement,
  parameters: { stack: 'mock' },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
function getTwoFactorAuthStatusHandler(enabled: boolean) {
  return [
    http.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      () => {
        const status = 200
        const response: TwoFactorAuthStatus = {
          status: enabled ? 'ENABLED' : 'DISABLED',
        }
        return HttpResponse.json(response, { status })
      },
    ),
  ]
}

export const Enabled: Story = {
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)],
    },
  },
}

export const Disabled: Story = {
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)],
    },
  },
}
