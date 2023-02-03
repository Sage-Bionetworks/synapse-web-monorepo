import { Meta, StoryObj } from '@storybook/react'

import ChangePassword from '../src/lib/containers/ChangePassword'

const meta = {
  title: 'Authentication/ChangePassword',
  component: ChangePassword,
} satisfies Meta
export default meta

type Story = StoryObj<typeof meta>

export const ChangePasswordDemo: Story = {}
