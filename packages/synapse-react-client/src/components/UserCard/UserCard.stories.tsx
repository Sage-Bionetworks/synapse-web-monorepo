import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import {
  ANONYMOUS_PRINCIPAL_ID,
  AVATAR,
  LARGE_USER_CARD,
  MEDIUM_USER_CARD,
  SMALL_USER_CARD,
} from '../../utils/SynapseConstants'
import { useGetCurrentUserProfile } from '../../synapse-queries/user/useUserBundle'
import UserCard from './UserCard'

const meta = {
  title: 'UI/UserCard',
  component: UserCard,
  render: function RenderFn(args) {
    const { data: currentUserProfile } = useGetCurrentUserProfile()
    let currentUserId = currentUserProfile?.ownerId
    if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
      currentUserId = undefined
    }
    return (
      <>
        <p>
          If you are logged in, your avatar or card will appear. If you are not
          logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
          below.
        </p>
        <UserCard
          ownerId={args.ownerId ?? currentUserId}
          size={args.size ?? SMALL_USER_CARD}
          {...args}
        />
      </>
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    size: AVATAR,
    avatarSize: 'SMALL',
  },
}

export const SmallUserCard: Story = {
  args: {
    size: SMALL_USER_CARD,
  },
}

export const MediumUserCard: Story = {
  args: {
    size: MEDIUM_USER_CARD,
  },
}

export const LargeUserCard: Story = {
  args: {
    size: LARGE_USER_CARD,
  },
}
