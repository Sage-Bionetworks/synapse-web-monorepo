import { Meta, StoryObj } from '@storybook/react'
import { HasAccessV2 } from '../src/components/HasAccess/HasAccessV2'

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
