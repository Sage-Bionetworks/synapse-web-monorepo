import { Meta, StoryObj } from '@storybook/react'
import SelectionCriteriaPill from '../src/lib/containers/widgets/facet-nav/SelectionCriteriaPill'

const meta = {
  title: 'Explore/Tokens/SelectionCriteriaPill',
  component: SelectionCriteriaPill,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Pill: Story = {
  args: {
    innerText: 'Facet Value: ABC',
    tooltipText: 'You can add tooltip text too.',
  },
}
