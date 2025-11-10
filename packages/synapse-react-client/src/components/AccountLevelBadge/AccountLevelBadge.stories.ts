import { Meta, StoryObj } from '@storybook/react-vite'
import { AccountLevelBadge } from './AccountLevelBadge'
import { displayToast } from '../ToastMessage'

const meta = {
  title: 'UI/AccountLevelBadge',
  component: AccountLevelBadge,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Certified: Story = {
  args: {
    badgeType: 'certified',
  },
}
export const CertifiedRevokable: Story = {
  args: {
    badgeType: 'certified',
    buttonProps: {
      variant: 'outlined',
      children: 'Revoke Certification',
      onClick: () => displayToast('Revoke Certification Clicked', 'success'),
    },
  },
}
