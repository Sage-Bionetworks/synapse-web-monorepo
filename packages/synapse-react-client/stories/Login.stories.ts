import { Meta, StoryObj } from '@storybook/react'
import StandaloneLoginForm from '../src/components/Authentication/StandaloneLoginForm'
import { displayToast } from '../src/components/ToastMessage/ToastMessage'
import { sessionChangeHandler } from '../src/components/StorybookComponentWrapper'

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
    renderBackButton: true,
  },
}
