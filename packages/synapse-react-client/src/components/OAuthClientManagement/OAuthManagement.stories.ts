import { Meta, StoryObj } from '@storybook/react-vite'
import { OAuthManagement } from './OAuthManagement'

const meta = {
  title: 'Synapse/OAuthManagement',
  component: OAuthManagement,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const OAuthManagementDemo: Story = {}
