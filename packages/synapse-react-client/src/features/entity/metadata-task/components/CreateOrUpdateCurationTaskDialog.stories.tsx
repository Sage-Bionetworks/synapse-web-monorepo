import { Meta, StoryObj } from '@storybook/react-vite'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import CreateOrUpdateCurationTaskDialog from './CreateOrUpdateCurationTaskDialog'

const meta = {
  title: 'Synapse/Entity/CreateOrUpdateCurationTaskDialog',
  component: CreateOrUpdateCurationTaskDialog,
  args: {
    open: true,
    projectId: 'syn12554559',
    onCancel: () => {},
    onSuccess: () => {},
  },
  parameters: {
    stack: 'mock',
  },
} satisfies Meta<typeof CreateOrUpdateCurationTaskDialog>

export default meta
type Story = StoryObj<typeof meta>

export const CreateMode: Story = {}

const fileBasedTask: CurationTask = {
  projectId: 'syn12554559',
  dataType: 'Gene Expression',
  instructions: 'Please fill in all metadata fields for each file.',
  assigneePrincipalId: '3456789',
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
    uploadFolderId: 'syn111',
    fileViewId: 'syn222',
    suggestedAuthorizationMode: 'SESSION_OWNER',
  },
}

const recordBasedTask: CurationTask = {
  projectId: 'syn12554559',
  dataType: 'Clinical Data',
  instructions: 'Add records for each clinical data entry.',
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
    recordSetId: 'syn333',
    suggestedAuthorizationMode: 'SOURCE_BENEFACTOR',
  },
}

export const EditModeFileBased: Story = {
  name: 'Edit Mode — File-Based',
  args: {
    task: fileBasedTask,
  },
}

export const EditModeRecordBased: Story = {
  name: 'Edit Mode — Record-Based',
  args: {
    task: recordBasedTask,
  },
}
