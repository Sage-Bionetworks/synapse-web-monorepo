import { Meta, StoryObj } from '@storybook/react-vite'
import ReorderColumnsDialog from './ReorderColumnsDialog'

const meta = {
  title: 'Components/DataGrid/ReorderColumnsDialog',
  component: ReorderColumnsDialog,
  args: {
    open: true,
    columnNames: ['species', 'name', 'age', 'notes'],
    columnOrder: [0, 1, 2, 3],
    jsonSchema: {
      properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
        species: { type: 'string' },
        notes: { type: 'string' },
      },
    },
    onSave: (newColumnOrder: number[]) => console.log('onSave', newColumnOrder),
    onCancel: () => console.log('onCancel'),
  },
} satisfies Meta<typeof ReorderColumnsDialog>
export default meta

type Story = StoryObj<typeof ReorderColumnsDialog>

export const Default: Story = {}

export const AlreadyInDefaultOrder: Story = {
  args: {
    columnOrder: [1, 2, 0, 3],
  },
}

export const WithUpsertKey: Story = {
  args: {
    upsertKey: ['name'],
  },
}

export const WithColumnRemoval: Story = {
  args: {
    canRemoveColumns: true,
  },
}

export const WithPreviouslyRemovedColumn: Story = {
  args: {
    // 'notes' (identity index 3) was already removed and saved in a prior session
    columnOrder: [0, 1, 2],
    canRemoveColumns: true,
  },
}
