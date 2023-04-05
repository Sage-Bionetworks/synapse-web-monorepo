import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import ErrorChip from '../src/lib/containers/error/ErrorChip'
import { SynapseClientError } from '../src/lib/utils/SynapseClientError'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../src/lib/utils/SynapseContext'
import FullContextProvider from '../src/lib/utils/FullContextProvider'

const meta = {
  title: 'Components/ErrorChip',
  component: ErrorChip,
  render: (args: ErrorChipProps) => (
    <SynapseContextConsumer>
      {context => (
        <FullContextProvider
          synapseContext={{
            ...context,
            accessToken: args.isAuthenticated
              ? context.accessToken || 'fake token'
              : undefined,
          }}
        >
          <ErrorChip {...args} />
        </FullContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const NotSignedInError = new SynapseClientError(
  401,
  'You must be signed in to access this resource.',
  '',
)

export const NotSignedIn: Story = {
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false,
  },
}

const NoAccessError = new SynapseClientError(
  403,
  'You do not have READ access on this entity.',
  '',
)

export const NoAccess: Story = {
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true,
  },
}
const NotFoundError = new SynapseClientError(
  404,
  'The entity does not exist.',
  '',
)

export const NotFound: Story = {
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true,
  },
}
