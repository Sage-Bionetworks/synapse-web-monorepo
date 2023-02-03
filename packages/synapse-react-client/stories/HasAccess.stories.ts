import { Meta, StoryObj } from '@storybook/react'
import { HasAccessV2 } from '../src/lib/containers/access_requirements/HasAccessV2'

const meta = {
  title: 'Governance/HasAccess',
  component: HasAccessV2,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const HasAccessDemo: Story = {
  args: {
    entityId: 'syn12664802',
  },
}
