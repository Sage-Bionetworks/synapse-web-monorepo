import { Meta, StoryObj } from '@storybook/react'

import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../../utils/SynapseConstants'
import { UserOrTeamBadge } from './index'

const meta = {
  title: 'UI/UserOrTeamBadge',
  component: UserOrTeamBadge,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const User: Story = {
  args: {
    principalId: '273984',
  },
}

export const Team: Story = {
  args: {
    principalId: '273957',
  },
}

export const PublicGroup: Story = {
  args: {
    principalId: PUBLIC_PRINCIPAL_ID,
  },
}

export const AuthenticatedGroup: Story = {
  args: {
    principalId: AUTHENTICATED_PRINCIPAL_ID,
  },
}
