import { Meta, StoryObj } from '@storybook/react'
import ImposeRestrictionDialog from '../src/lib/containers/access_requirements/ImposeRestrictionDialog'

const meta = {
  title: 'Governance/ImposeRestrictionDialog',
  component: ImposeRestrictionDialog,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn45328519',
    open: true,
  },
}
