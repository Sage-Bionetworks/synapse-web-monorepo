import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import MultiValueField, { MultiValueFieldProps } from './MultiValueField'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

const meta: Meta<MultiValueFieldProps> = {
  title: 'Components/MultiValueField',
  component: MultiValueField,
  decorators: [
    function UseStateWrapper(Story, args) {
      const [value, setValue] = useState<typeof args.value>(args.value)
      return <Story {...args} value={value} onChange={setValue} />
    },
  ],
}
export default meta
type Story = StoryObj<typeof meta>

export const StringList: Story = {
  args: {
    value: ['foo', 'bar', 'baz'],
    columnType: ColumnTypeEnum.STRING_LIST,
  },
}
export const IntegerList: Story = {
  args: {
    value: [-5, 20, 0],
    columnType: ColumnTypeEnum.INTEGER_LIST,
  },
}
export const DateList: Story = {
  args: {
    value: ['2023-10-05T14:48:00.000Z', '2024-03-11T07:24:39.000Z'],
    columnType: ColumnTypeEnum.DATE_LIST,
  },
}
