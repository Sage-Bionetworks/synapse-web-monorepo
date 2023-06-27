import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SpinnerButton from '../src/components/widgets/SpinnerButton'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../src/utils/context'

const meta: Meta = {
  title: 'UI/SpinnerButton',
  component: SpinnerButton,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    showSpinner: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
  render: args => {
    const isAuthenticated = args.isAuthenticated
    delete args.isAuthenticated
    return (
      <SynapseContextConsumer>
        {context => (
          <SynapseContextProvider
            synapseContext={{
              ...context,
              accessToken: isAuthenticated
                ? context.accessToken ?? 'fake token'
                : undefined,
            }}
          >
            <div>
              <SpinnerButton {...args} />
            </div>
          </SynapseContextProvider>
        )}
      </SynapseContextConsumer>
    )
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    isAuthenticated: true,
    children: 'Make Async call',
    showSpinner: false,
    variant: 'contained',
    color: 'primary',
    onClick: () => {
      alert('clicked')
    },
  },
}
