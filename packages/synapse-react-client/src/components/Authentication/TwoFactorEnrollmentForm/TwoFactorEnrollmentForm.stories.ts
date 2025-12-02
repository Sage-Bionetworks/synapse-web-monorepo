import { Meta, StoryObj } from '@storybook/react-vite'
import TwoFactorEnrollmentForm, {
  TwoFactorEnrollmentFormProps,
} from './TwoFactorEnrollmentForm'
import { displayToast } from '../../ToastMessage/ToastMessage'
import { fn } from 'storybook/test'

const meta = {
  title: 'Authentication/TwoFactorEnrollment',
  component: TwoFactorEnrollmentForm,
} satisfies Meta<TwoFactorEnrollmentFormProps>
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    totpSecret: {
      secretId: '0',
      secret: 'fake-secret',
      alg: '',
      digits: 6,
      period: 30,
      username: 'fake-username',
    },
    onTwoFactorEnrollmentSuccess: () => {
      displayToast('Successfully enrolled in 2FA!', 'success')
    },
    onBackClicked: fn(),
  },
}
