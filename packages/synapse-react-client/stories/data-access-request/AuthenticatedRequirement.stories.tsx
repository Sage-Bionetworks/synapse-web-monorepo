import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SynapseContextConsumer } from '../../src/utils/SynapseContext'
import FullContextProvider from '../../src/utils/FullContextProvider'
import AuthenticatedRequirement from '../../src/components/AccessRequirementList/RequirementItem/AuthenticatedRequirement'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/AuthenticatedRequirement',
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
