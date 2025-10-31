import { Meta, StoryObj } from '@storybook/react-vite'
import EntityCitation from './EntityCitation'

const meta = {
  title: 'Synapse/EntityPage/EntityCitation',
  component: EntityCitation,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const ProjectAndEntity: Story = {
  // Both project and entity have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn64042437',
    versionNumber: 1,
  },
}

export const Project: Story = {
  // Only project has DOI, entity does not
  args: {
    entityId: 'syn66268085',
    projectId: 'syn64042437',
    versionNumber: undefined,
  },
}

export const VersionedEntity: Story = {
  // entity is versioned, project does not have DOI
  args: {
    entityId: 'syn66268092',
    projectId: 'syn60582629',
    versionNumber: 1,
  },
}

export const VersionlessEntity: Story = {
  // entity is versionless, project does not have DOI
  args: {
    entityId: 'syn68236894',
    projectId: 'syn60582629',
    versionNumber: undefined,
  },
}
