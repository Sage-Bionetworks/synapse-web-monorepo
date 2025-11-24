import { Meta, StoryObj } from '@storybook/react-vite'
import { SyntheticEvent } from 'react'
import EntityPageBreadcrumbs from './EntityPageBreadcrumbs'

const meta: Meta = {
  title: 'Synapse/EntityPage/Breadcrumb',
  component: EntityPageBreadcrumbs,
  render: args => (
    <>
      {/* Add some space above the component so the tooltip positioning is more accurate */}
      <br />
      <br />
      <EntityPageBreadcrumbs items={[]} {...args} />
    </>
  ),
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const preventDefaultHandler = (e: SyntheticEvent) => {
  e.preventDefault()
}

export const Demo: Story = {
  args: {
    items: [
      { onClick: preventDefaultHandler, text: 'Files', href: '#area' },
      {
        onClick: preventDefaultHandler,
        text: 'Root folder',
        href: 'Synapse:syn123',
      },
      {
        onClick: preventDefaultHandler,
        text: 'A very long subfolder name that gets truncated',
        href: 'Synapse:syn456',
      },
      {
        onClick: preventDefaultHandler,
        text: 'The file you are looking at',
        href: 'Synapse:syn789',
        current: true,
      },
    ],
  },
}

export const ManyItems: Story = {
  args: {
    items: [
      { onClick: preventDefaultHandler, text: 'Files', href: '#area' },
      {
        onClick: preventDefaultHandler,
        text: 'Folder A',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder B',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder C',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder D',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder E',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder F',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder G',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder H',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Folder I',
      },
      {
        onClick: preventDefaultHandler,
        text: 'Leaf file',
        current: true,
      },
    ],
  },
}
