import { Meta, StoryObj } from '@storybook/react'
import Login from '../src/lib/containers/Login'
import { displayToast } from '../src/lib/containers/ToastMessage'
import { sessionChangeHandler } from '../src/lib/containers/StorybookComponentWrapper'

const meta = {
  title: 'Authentication/Login',
  component: Login,
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
