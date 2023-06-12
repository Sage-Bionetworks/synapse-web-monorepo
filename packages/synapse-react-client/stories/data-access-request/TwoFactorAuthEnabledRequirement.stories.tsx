import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../src/utils/functions/getEndpoint'
import TwoFactorAuthEnabledRequirement from '../../src/components/AccessRequirementList/RequirementItem/TwoFactorAuthEnabledRequirement'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { SynapseContextConsumer } from '../../src/utils/context/SynapseContext'
import FullContextProvider from '../../src/utils/context/FullContextProvider'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement',
  component: TwoFactorAuthEnabledRequirement,
  parameters: { stack: 'mock' },
  render: args => (
    <SynapseContextConsumer>
      {context => (
        <FullContextProvider
          synapseContext={{
            ...context,
            accessToken: 'fake token',
          }}
        >
          <TwoFactorAuthEnabledRequirement {...args} />
        </FullContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>
function getTwoFactorAuthStatusHandler(enabled: boolean) {
  return [
    rest.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      async (req, res, ctx) => {
        let status = 200
        let response: TwoFactorAuthStatus = {
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
