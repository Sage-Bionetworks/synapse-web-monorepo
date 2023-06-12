import { Meta, StoryObj } from '@storybook/react'
import DropdownSelect from '../src/components/DropdownSelect'

const meta = {
  title: 'Components/DropdownSelect',
  component: DropdownSelect,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'DropdownSelect',
  args: {
    options: ['Create a merge commit', 'Squash and merge', 'Rebase and merge'],
    variant: 'outlined',
  },
}
