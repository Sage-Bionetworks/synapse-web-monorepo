import { useGetCurrentUserProfile } from '@/synapse-queries'
import { MOCK_ANONYMOUS_PRINCIPAL_ID as ANONYMOUS_PRINCIPAL_ID } from '@/mocks/realm/mockRealmPrincipal'
import { Meta, StoryObj } from '@storybook/react-vite'
import { UserBadge } from './UserBadge'

const meta = {
  title: 'UI/UserBadge',
  component: UserBadge,
  render: function RenderFn(args) {
    const { data: currentUserProfile } = useGetCurrentUserProfile()
    let currentUserId = currentUserProfile?.ownerId
    if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
      currentUserId = undefined
    }
    return (
      <>
        <p>
          If you are logged in, your username will appear. If you are not logged
          in, enter a userId (e.g. 273960) below.
        </p>
        <UserBadge userId={args.ownerId ?? currentUserId} {...args} />
      </>
    )
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'UserBadge',
}
