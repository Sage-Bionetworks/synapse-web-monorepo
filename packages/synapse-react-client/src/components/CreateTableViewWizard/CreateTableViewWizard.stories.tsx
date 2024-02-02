import { Meta, StoryObj } from '@storybook/react'
import CreateTableViewWizard from './CreateTableViewWizard'
import { displayToast } from '../ToastMessage'

const meta = {
  title: 'Synapse/Create Table Wizard',
  component: CreateTableViewWizard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vLusb6uSfhx45OyFx5IHwy/(XDM)-Extensible-Data-Management-Comps?type=design&node-id=7108-22337&mode=design&t=acwaLAqUDge5p8eQ-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    open: true,
    parentId: 'syn23567475',
    onComplete: newId => {
      displayToast(`Successfully created ${newId}`)
    },
  },
}
