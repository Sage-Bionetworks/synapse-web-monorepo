import { Meta, StoryObj } from '@storybook/react'
import EntityTreeTable from './EntityTreeTable'

const meta: Meta<typeof EntityTreeTable> = {
  title: 'Synapse/EntityTreeTable',
  component: EntityTreeTable,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof EntityTreeTable>

export const ProjectRoot: Story = {
  args: {
    rootId: 'syn27229419',
  },
}

export const EmptyRoot: Story = {
  args: {
    rootId: 'syn26064082', // Use a Synapse ID that will return no children for demonstration
  },
}
