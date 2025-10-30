import { Meta, StoryObj } from '@storybook/react-vite'
import AuthenticatedRequirement from './AuthenticatedRequirement'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/AuthenticatedRequirement',
  component: AuthenticatedRequirement,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const AuthenticatedRequirementItem: Story = {}
