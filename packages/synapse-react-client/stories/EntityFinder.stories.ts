import { Meta, StoryObj } from '@storybook/react'

import EntityFinder from '../src/lib/containers/entity_finder/EntityFinder'
import { FinderScope } from '../src/lib/containers/entity_finder/tree/EntityTree'
import { EntityType } from '../src/lib/utils/synapseTypes'
import { VersionSelectionType } from '../src/lib/containers/entity_finder/VersionSelectionType'

const meta = {
  title: 'Synapse/EntityFinder',
  component: EntityFinder,
  argTypes: {
    versionSelection: {
      options: ['REQUIRED', 'DISABLED', 'TRACKED', 'UNTRACKED'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const DualPane: Story = {
  args: {
    treeOnly: false,
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn23567475',
    initialContainer: 'syn24183903',
    selectMultiple: true,
    visibleTypesInList: Object.values(EntityType),
    versionSelection: VersionSelectionType.TRACKED,
    onSelectedChange: selected => {
      console.log('Selection changed:', selected)
    },
    selectableTypes: Object.values(EntityType),
    selectedCopy: count => {
      return `${count} Item${count > 1 ? 's' : ''} Selected`
    },
  },
}

export const SinglePane: Story = {
  args: {
    treeOnly: true,
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn23567475',
    initialContainer: 'syn24183903',
    selectMultiple: false,
    visibleTypesInTree: [
      EntityType.PROJECT,
      EntityType.FOLDER,
      EntityType.TABLE,
    ],
    versionSelection: VersionSelectionType.DISALLOWED,
    onSelectedChange: selected => {
      console.log('Selection changed:', selected)
    },
    selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
  },
}
