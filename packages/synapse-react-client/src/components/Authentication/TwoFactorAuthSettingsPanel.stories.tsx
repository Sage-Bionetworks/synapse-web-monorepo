import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { displayToast } from '../ToastMessage/ToastMessage'
import TwoFactorAuthSettingsPanel from './TwoFactorAuthSettingsPanel'
import { Paper } from '@mui/material'

const meta = {
  title: 'Authentication/TwoFactorSettingsPanel',
  component: TwoFactorAuthSettingsPanel,
  decorators: [
    Story => (
      <Paper sx={{ p: 7, mx: 'auto', width: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    onBeginTwoFactorEnrollment: () => {
      displayToast(
        'In-app, you would now redirect to the two-factor enrollment page',
        'info',
      )
    },
    onRegenerateBackupCodes: () => {
      displayToast(
        'In-app, you would now redirect to the backup codes page',
        'info',
      )
    },
  },
}
