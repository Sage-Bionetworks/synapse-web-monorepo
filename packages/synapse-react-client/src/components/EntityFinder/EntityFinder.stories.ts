import { EntityType } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { VersionSelectionType } from './VersionSelectionType'

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
    projectId: 'syn5550376',
    initialContainer: 'syn5550376',
    selectMultiple: true,
    visibleTypesInList: Object.values(EntityType),
    versionSelection: VersionSelectionType.TRACKED,
    onSelectedChange: fn(),
    selectableTypes: Object.values(EntityType),
  },
}

export const SinglePane: Story = {
  args: {
    treeOnly: true,
    initialScope: FinderScope.CURRENT_PROJECT,
    projectId: 'syn5550376',
    initialContainer: 'syn5550376',
    selectMultiple: false,
    visibleTypesInTree: [
      EntityType.project,
      EntityType.folder,
      EntityType.table,
    ],
    versionSelection: VersionSelectionType.DISALLOWED,
    onSelectedChange: fn(),
    selectableTypes: [EntityType.project, EntityType.folder],
  },
}
