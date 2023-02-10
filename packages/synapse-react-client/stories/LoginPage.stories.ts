import { Meta, StoryObj } from '@storybook/react'

import LoginPage from '../src/lib/containers/auth/LoginPage'

const meta = {
  title: 'Synapse/LoginPage',
  component: LoginPage,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {}
