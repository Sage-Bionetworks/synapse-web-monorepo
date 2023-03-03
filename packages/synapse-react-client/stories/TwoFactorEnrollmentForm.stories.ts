import { Meta, StoryObj } from '@storybook/react'
import TwoFactorEnrollmentForm from '../src/lib/containers/auth/TwoFactorEnrollmentForm'
import { displayToast } from '../src/lib/containers/ToastMessage'

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
