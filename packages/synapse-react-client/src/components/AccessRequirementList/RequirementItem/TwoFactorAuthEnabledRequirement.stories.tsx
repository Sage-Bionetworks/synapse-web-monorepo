import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { http, HttpResponse } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../../utils/functions/getEndpoint'
import TwoFactorAuthEnabledRequirement from './TwoFactorAuthEnabledRequirement'
import { TwoFactorAuthStatus } from '@sage-bionetworks/synapse-types'
import { SynapseContextConsumer } from '../../../utils/context/SynapseContext'
import FullContextProvider from '../../../utils/context/FullContextProvider'

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
    http.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      async ({ request, params }) => {
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
