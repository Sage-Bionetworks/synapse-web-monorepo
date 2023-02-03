import { Meta, StoryObj } from '@storybook/react'
import { OAuthManagement } from '../src/lib/containers/oauth/OAuthManagement'

const meta = {
  title: 'Synapse/OAuthManagement',
  component: OAuthManagement,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const OAuthManagementDemo: Story = {}
