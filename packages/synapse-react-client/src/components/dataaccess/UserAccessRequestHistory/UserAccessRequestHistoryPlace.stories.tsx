import { Container } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { UserAccessRequestHistoryPlace } from './UserAccessRequestHistoryPlace'

const meta = {
  title: 'Governance/UserAccessRequestHistoryPlace',
  component: UserAccessRequestHistoryPlace,
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
  decorators: [
    Story => {
      return (
        <Container maxWidth="lg">
          <Story />
        </Container>
      )
    },
  ],
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'UserAccessRequestHistoryPlace',
}
