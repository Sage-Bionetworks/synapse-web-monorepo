import { Meta, StoryObj } from '@storybook/react'
import TimelinePlot from './TimelinePlot'

const meta = {
  title: 'Components/TimelinePlot',
  component: TimelinePlot,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    species: 'Mus musculus',
    resourceId: '9971e47e-976a-4631-8edd-5cae04304b01',
    eventsTableId: 'syn51735464',
  },
}
