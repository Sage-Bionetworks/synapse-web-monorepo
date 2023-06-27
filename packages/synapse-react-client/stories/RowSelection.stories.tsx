import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { displayToast } from '../src'
import { GetApp } from '@mui/icons-material'
import { RowSelectionUI } from '../src/components/SynapseTable/RowSelection/RowSelectionUI'
import { Button } from '@mui/material'

const meta = {
  title: 'Explore/RowSelection',
  component: RowSelectionUI,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'RowSelection',
  args: {
    show: true,
    customControls: (
      <>
        <Button
          variant={'outlined'}
          onClick={() => displayToast('something boring happens')}
          sx={{ mx: 1 }}
        >
          Do something boring
        </Button>
        <Button
          variant={'contained'}
          startIcon={<GetApp />}
          onClick={() => displayToast('something interesting happens')}
          sx={{ mx: 1 }}
        >
          Do something interesting
        </Button>
      </>
    ),
    selectedRowCount: 5,
  },
}
