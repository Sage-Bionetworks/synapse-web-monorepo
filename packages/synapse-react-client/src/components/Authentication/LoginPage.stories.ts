import { Meta, StoryObj } from '@storybook/react'

import { sessionChangeHandler } from '../StorybookComponentWrapper'
import { displayToast } from '../ToastMessage/ToastMessage'
import LoginPage from './LoginPage'

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
