import { Meta, StoryObj } from '@storybook/react-vite'
import TwoFactorBackupCodes from './TwoFactorBackupCodes'
import { fn } from 'storybook/test'

const meta = {
  title: 'Authentication/TwoFactorBackupCodes',
  component: TwoFactorBackupCodes,
  argTypes: { onClose: { action: 'clicked' } },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    showReplaceOldCodesWarning: true,
    onClose: fn(),
  },
}
