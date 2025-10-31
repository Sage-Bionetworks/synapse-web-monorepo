import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { QueryContextProvider } from '@/components/QueryContext/QueryContext'
import SynapseTableCell, { SynapseTableCellProps } from './SynapseTableCell'

const meta: Meta<SynapseTableCellProps> = {
  title: 'Explore/SynapseTableCell',
  component: SynapseTableCell,
  tags: ['autodocs'],
  render: args => (
    <QueryContextProvider
      // @ts-expect-error - incomplete mock
      queryContext={{
        entityId: mockTableEntity.id,
      }}
    >
      <SynapseTableCell {...args} />
    </QueryContextProvider>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const String: Story = {
  args: {
    columnType: ColumnTypeEnum.STRING,
    columnValue: 'stringValue',
  },
}

export const NoValue: Story = {
  args: {
    columnType: ColumnTypeEnum.STRING,
    columnValue: null,
  },
}

export const Integer: Story = {
  args: {
    columnType: ColumnTypeEnum.INTEGER,
    columnValue: '1000',
  },
}

export const EmptyJSONObject: Story = {
  args: {
    columnType: ColumnTypeEnum.JSON,
    columnValue: JSON.stringify({}),
  },
}

export const EmptyJSONArray: Story = {
  args: {
    columnType: ColumnTypeEnum.JSON,
    columnValue: JSON.stringify([]),
  },
}

export const JSONObject: Story = {
  args: {
    columnType: ColumnTypeEnum.JSON,
    columnValue: JSON.stringify({
      string: 'hello',
      numberInt: 2,
      numberDbl: 1.75,
      null: null,
      boolean: false,
    }),
  },
}

export const JSONArray: Story = {
  args: {
    columnType: ColumnTypeEnum.JSON,
    columnValue: JSON.stringify(['foo', 1000, null, true, false]),
  },
}

export const ComplexJSONType: Story = {
  args: {
    columnType: ColumnTypeEnum.JSON,
    columnValue: JSON.stringify([
      {
        foo: [
          'bar',
          'baz',
          {
            qux: ['quux', 'abc'],
            lorem: 'ipsum',
          },
        ],
      },
      null,
      'baz',
    ]),
  },
}
