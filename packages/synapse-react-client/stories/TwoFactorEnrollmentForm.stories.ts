import { Meta, StoryObj } from '@storybook/react'
import TwoFactorEnrollmentForm from '../src/components/Authentication/TwoFactorEnrollmentForm'
import { displayToast } from '../src/components/ToastMessage/ToastMessage'

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
