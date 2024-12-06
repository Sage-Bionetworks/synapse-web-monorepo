import { Meta, StoryObj } from '@storybook/react'

import EntityFinder from './EntityFinder'
import { FinderScope } from './tree/EntityTree'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { VersionSelectionType } from './VersionSelectionType'
import { fn } from '@storybook/test'

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
      EntityType.PROJECT,
      EntityType.FOLDER,
      EntityType.TABLE,
    ],
    versionSelection: VersionSelectionType.DISALLOWED,
    onSelectedChange: fn(),
    selectableTypes: [EntityType.PROJECT, EntityType.FOLDER],
  },
}
