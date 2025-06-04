import { Meta, StoryObj } from '@storybook/react'
import { DataGrid, DataGridProps } from './DataGrid'
import { keyColumn, textColumn } from 'react-datasheet-grid'

const meta = {
  title: 'Curator/DataGrid',
  component: DataGrid,
} satisfies Meta<DataGridProps>
export default meta
type Story = StoryObj<typeof meta>

export const DemoGrid: Story = {
  args: {
    rows: [{ col1: 'test', col2: 'cell', col3: 'data' }],
    columns: [
      { ...keyColumn('col1', textColumn), title: 'col1' },
      { ...keyColumn('col2', textColumn), title: 'col2' },
      { ...keyColumn('col3', textColumn), title: 'col3' },
    ],
  },
}
