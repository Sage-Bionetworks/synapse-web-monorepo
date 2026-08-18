import { Meta, StoryObj } from '@storybook/react-vite'
import ReorderColumnsDialog from './ReorderColumnsDialog'

const meta = {
  title: 'Components/DataGrid/ReorderColumnsDialog',
  component: ReorderColumnsDialog,
  args: {
    open: true,
    // 'comments' is not defined in the schema below -- it's the only removable column
    columnNames: ['species', 'name', 'age', 'notes', 'comments'],
    columnOrder: [0, 1, 2, 3, 4],
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
    columnOrder: [1, 2, 0, 3, 4],
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
    // 'notes' (identity index 3, a schema column) was already removed and saved in a
    // prior session -- it can be restored, but (being a schema column) not re-removed.
    columnOrder: [0, 1, 2, 4],
    canRemoveColumns: true,
  },
}
