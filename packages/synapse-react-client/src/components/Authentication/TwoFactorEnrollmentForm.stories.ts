import { Meta, StoryObj } from '@storybook/react'
import TwoFactorEnrollmentForm from './TwoFactorEnrollmentForm'
import { displayToast } from '../ToastMessage/ToastMessage'
import { fn } from '@storybook/test'

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
    onBackClicked: fn(),
  },
}
