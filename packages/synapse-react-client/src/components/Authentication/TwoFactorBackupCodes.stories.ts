import { Meta, StoryObj } from '@storybook/react'
import TwoFactorBackupCodes from './TwoFactorBackupCodes'

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
  },
}
