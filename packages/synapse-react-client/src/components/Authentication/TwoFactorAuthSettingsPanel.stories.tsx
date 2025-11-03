import { Meta, StoryObj } from '@storybook/react-vite'
import { displayToast } from '../ToastMessage'
import TwoFactorAuthSettingsPanel, {
  TwoFactorAuthSettingsPanelProps,
} from './TwoFactorAuthSettingsPanel'
import { Paper } from '@mui/material'

const meta: Meta<TwoFactorAuthSettingsPanelProps> = {
  title: 'Authentication/TwoFactorSettingsPanel',
  component: TwoFactorAuthSettingsPanel,
  decorators: [
    Story => (
      <Paper sx={{ p: 7, mx: 'auto', width: '720px' }}>
        <Story />
      </Paper>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    onRegenerateBackupCodes: () => {
      displayToast(
        'In-app, you would now redirect to the backup codes page',
        'info',
      )
    },
    onReset2FA: () => {
      displayToast('In-app, you would now reset 2FA', 'info')
    },
  },
}
