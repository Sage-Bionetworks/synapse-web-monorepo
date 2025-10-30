import { Meta, StoryObj } from '@storybook/react-vite'
import ImposeRestrictionDialog from './ImposeRestrictionDialog'
import { fn } from 'storybook/test'

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
    onClose: fn(),
  },
}
