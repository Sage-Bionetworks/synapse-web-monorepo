import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
  ConfirmationDialog,
  ConfirmationDialogProps,
} from '../src/lib/containers/ConfirmationDialog'

const meta = {
  title: 'UI/ConfirmationDialog',
  component: ConfirmationDialog,
} satisfies Meta<ConfirmationDialogProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonText: 'Confirm',
    confirmButtonColor: 'error',
    content: (
      <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>
    ),
    helpUrl: 'https://help.synapse.org',
    helpMarkdown:
      'Option to show a _HelpPopover_ in the title bar with a link to the docs site',
  },
}
