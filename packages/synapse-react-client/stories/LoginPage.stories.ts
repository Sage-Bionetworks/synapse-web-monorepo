import { Meta, StoryObj } from '@storybook/react'

import LoginPage from '../src/components/Authentication/LoginPage'
import { sessionChangeHandler } from '../src/components/StorybookComponentWrapper'
import { displayToast } from '../src/components/ToastMessage/ToastMessage'

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
