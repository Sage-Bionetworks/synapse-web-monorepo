import { Meta, StoryObj } from '@storybook/react-vite'
import StandaloneLoginForm from './StandaloneLoginForm'
import { displayToast } from '../../ToastMessage/ToastMessage'
import { sessionChangeHandler } from '../../StorybookComponentWrapper'
import { fn } from 'storybook/test'

const meta = {
  title: 'Authentication/Login',
  component: StandaloneLoginForm,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const LoginDemo: Story = {
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({ profile }) => {
        displayToast(
          `You are currently logged in as ${profile.userName}`,
          'info',
          { autoCloseInMs: 5000 },
        )
      })
    },
    onPasswordLoginSelected: fn(),
  },
}
