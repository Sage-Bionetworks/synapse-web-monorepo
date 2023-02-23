import { Meta, StoryObj } from '@storybook/react'

import LoginPage from '../src/lib/containers/auth/LoginPage'
import { sessionChangeHandler } from '../src/lib/containers/StorybookComponentWrapper'
import { displayToast } from '../src/lib/containers/ToastMessage'

const meta = {
  title: 'Authentication/LoginPage',
  component: LoginPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
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
  },
}
