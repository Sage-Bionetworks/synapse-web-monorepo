import { Meta, StoryObj } from '@storybook/react'
import { displayToast } from '../ToastMessage/ToastMessage'
import TwoFactorEnrollmentForm from './TwoFactorEnrollmentForm'

const meta = {
  title: 'Authentication/TwoFactorEnrollment',
  component: TwoFactorEnrollmentForm,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    onTwoFactorEnrollmentSuccess: () => {
      displayToast('Successfully enrolled in 2FA!', 'success')
    },
  },
}
