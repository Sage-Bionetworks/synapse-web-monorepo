import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ErrorChip from './ErrorChip'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../utils/SynapseContext'

export default {
  title: 'Components/ErrorChip',
  component: ErrorChip,
  argTypes: {},
} as ComponentMeta<typeof ErrorChip>

const Template: ComponentStory<typeof ErrorChip> = args => (
  <SynapseContextConsumer>
    {context => (
      <SynapseContextProvider
        synapseContext={{
          ...context,
          accessToken: args.isAuthenticated
            ? context.accessToken || 'fake token'
            : undefined,
        }}
      >
        <ErrorChip {...args} />
      </SynapseContextProvider>
    )}
  </SynapseContextConsumer>
)

const NotSignedInError = new SynapseClientError(
  401,
  'You must be signed in to access this resource.',
  '',
)

export const NotSignedIn = Template.bind({})
NotSignedIn.args = {
  chipText: 'syn1234567',
  error: NotSignedInError,
  isAuthenticated: false,
}

const NoAccessError = new SynapseClientError(
  403,
  'You do not have READ access on this entity.',
  '',
)

export const NoAccess = Template.bind({})

NoAccess.args = {
  chipText: 'syn1234567',
  error: NoAccessError,
  isAuthenticated: true,
}

const NotFoundError = new SynapseClientError(
  404,
  'The entity does not exist.',
  '',
)

export const NotFound = Template.bind({})

NotFound.args = {
  chipText: 'syn1234567',
  error: NotFoundError,
  isAuthenticated: true,
}
