import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SynapseContextConsumer } from '../../src/lib/utils/SynapseContext'
import FullContextProvider from '../../src/lib/utils/FullContextProvider'
import AuthenticatedRequirement from '../../src/lib/containers/access_requirement_list/AuthenticatedRequirement'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/AuthenticatedRequirement',
  component: AuthenticatedRequirement,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  render: args => (
    <SynapseContextConsumer>
      {context => (
        <FullContextProvider
          synapseContext={{
            ...context,
            accessToken: args.isAuthenticated
              ? context.accessToken ?? 'fake token'
              : undefined,
          }}
        >
          <AuthenticatedRequirement />
        </FullContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const AuthenticatedRequirementItem: Story = {}
