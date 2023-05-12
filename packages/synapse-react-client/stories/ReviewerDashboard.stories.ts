import { Meta, StoryObj } from '@storybook/react'
import ReviewerDashboard from '../src/components/dataaccess/ReviewerDashboard'

const meta = {
  title: 'Governance/ReviewerDashboard',
  component: ReviewerDashboard,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    useMemoryRouter: true,
    routerBaseName: '#!/Other Components/ReviewerDashboard',
  },
}
