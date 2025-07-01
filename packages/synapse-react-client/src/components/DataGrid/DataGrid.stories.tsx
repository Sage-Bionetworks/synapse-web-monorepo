import { Meta, StoryObj } from '@storybook/react'
import DataGrid from './DataGrid'

const meta = {
  title: 'Components/DataGrid',
  component: DataGrid,
} satisfies Meta<typeof DataGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    stack: 'staging',
    msw: {
      handlers: [],
    },
  },
}
