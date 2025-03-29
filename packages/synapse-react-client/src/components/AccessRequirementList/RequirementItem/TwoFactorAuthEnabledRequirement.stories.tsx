import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
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
    rest.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      async (req, res, ctx) => {
        const status = 200
        const response: TwoFactorAuthStatus = {
          status: enabled ? 'ENABLED' : 'DISABLED',
        }
        return res(ctx.status(status), ctx.json(response))
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
