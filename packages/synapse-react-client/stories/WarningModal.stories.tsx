import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  WarningModal,
  WarningModalProps,
} from '../src/lib/containers/synapse_form_wrapper/WarningModal'

const meta = {
  title: 'Synapse/WarningModal',
  component: WarningModal,
  render: args => {
    return <WarningModal {...args} />
  },
} satisfies Meta<WarningModalProps>

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    show: true,
    title: 'Approve Request',
    modalBody: 'Are you sure you want to approve this request?',
    onConfirmCallbackArgs: [],
  },
}

export const AccessTokenCardWarningModal: Story = {
  render: args => (
    <WarningModal
      {...args}
      modalBody={
        <>
          <p>
            If you delete this token, any applications using it will stop
            working. This action cannot be undone.
          </p>
          <p className="SRC-boldText">
            Are you sure you want to delete this token?
          </p>
        </>
      }
    />
  ),
  args: {
    ...Demo.args,
    title: 'Confirm Deletion',
    confirmButtonText: 'Delete Token',
    confirmButtonColor: 'error',
  },
}
