import { Meta, StoryObj } from '@storybook/react'
import ReviewerDashboard from './ReviewerDashboard'

const meta = {
  title: 'Governance/ReviewerDashboard',
  component: ReviewerDashboard,
  parameters: {
    requireLogin: true,
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    useMemoryRouter: true,
    routerBaseName: '/',
  },
}
