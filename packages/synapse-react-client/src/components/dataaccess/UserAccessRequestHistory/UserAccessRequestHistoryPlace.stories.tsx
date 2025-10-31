import { Meta, StoryObj } from '@storybook/react-vite'
import { UserAccessRequestHistoryPlace } from './UserAccessRequestHistoryPlace'

const meta = {
  title: 'Governance/UserAccessRequestHistoryPlace',
  component: UserAccessRequestHistoryPlace,
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'UserAccessRequestHistoryPlace',
}
