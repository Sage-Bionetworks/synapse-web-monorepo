import { Meta, StoryObj } from '@storybook/react'
import CreateTableViewWizard from './CreateTableViewWizard'

const meta = {
  title: 'Synapse/Create Table Wizard',
  component: CreateTableViewWizard,
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    open: true,
    parentId: 'syn23567475',
  },
}
