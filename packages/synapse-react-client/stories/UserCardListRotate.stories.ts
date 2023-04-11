import { Meta, StoryObj } from '@storybook/react'
import UserCardListRotate from '../src/lib/containers/UserCardListRotate'
import { MEDIUM_USER_CARD } from '../src/lib/utils/SynapseConstants'

const meta = {
  title: 'Home Page/UserCardListRotate',
  component: UserCardListRotate,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sql: 'SELECT * FROM syn13897207 where isFeatured=true',
    count: 3,
    useQueryResultUserData: true,
    size: MEDIUM_USER_CARD,
    summaryLinkText: 'Explore All People',
    summaryLink: '/Explore/People',
  },
}
