import { Meta, StoryObj } from '@storybook/react'
import EntityTreeTable from './EntityTreeTable'

const meta: Meta<typeof EntityTreeTable> = {
  title: 'Synapse/EntityTreeTable',
  component: EntityTreeTable,
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

type Story = StoryObj<typeof EntityTreeTable>

export const ProjectRootHiddenAndExpanded: Story = {
  args: {
    rootId: 'syn27229419',
    showRootNode: false,
    expandRootByDefault: true,
    enableSorting: true,
  },
}

export const EmptyRoot: Story = {
  args: {
    rootId: 'syn26064082', // Use a Synapse ID that will return no children for demonstration
    enableSorting: true,
  },
}

export const ProjectRootCollapsed: Story = {
  args: {
    rootId: 'syn27229419',
    showRootNode: true,
    expandRootByDefault: false,
    enableSorting: true,
  },
}

export const ProjectRootVisibleAndExpanded: Story = {
  args: {
    rootId: 'syn27229419',
    showRootNode: true,
    expandRootByDefault: true,
    enableSorting: true,
  },
}

export const CustomEntityIdClickHandler: Story = {
  args: {
    rootId: 'syn27229419',
    showRootNode: false,
    expandRootByDefault: true,
    enableSorting: false,
    entityIdClicked: (entityId: string) =>
      alert(`Clicked entityId: ${entityId}`),
  },
}

export const SortingDisabled: Story = {
  args: {
    rootId: 'syn27229419',
    showRootNode: true,
    expandRootByDefault: true,
    enableSorting: false,
  },
}
