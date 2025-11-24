import { Meta, StoryObj } from '@storybook/react-vite'
import SelectionCriteriaPill from './SelectionCriteriaPill'
import { fn } from 'storybook/test'

const meta = {
  title: 'Explore/Tokens/SelectionCriteriaPill',
  component: SelectionCriteriaPill,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Pill: Story = {
  args: {
    key: 'key',
    innerText: 'Facet Value: ABC',
    tooltipText: 'You can add tooltip text too.',
    onRemoveFilter: fn(),
  },
}
