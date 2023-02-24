import { Meta, StoryObj } from '@storybook/react'
import TwoFactorEnrollmentForm from '../src/lib/containers/auth/TwoFactorEnrollmentForm'

const meta = {
  title: 'Authentication/TwoFactorEnrollment',
  component: TwoFactorEnrollmentForm,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {},
}
