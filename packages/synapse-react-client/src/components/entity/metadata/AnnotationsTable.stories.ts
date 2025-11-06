import { Meta, StoryObj } from '@storybook/react-vite'
import { AnnotationsTable } from './AnnotationsTable'

const meta = {
  title: 'Synapse/AnnotationsTable',
  component: AnnotationsTable,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    entityId: 'syn23567475',
  },
}
