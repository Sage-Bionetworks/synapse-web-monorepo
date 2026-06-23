import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import CurationTaskCard, { CurationTaskCardProps } from './CurationTaskCard'

const meta = {
  title: 'Curator/Dashboard/CurationTaskCard',
  component: CurationTaskCard,
} satisfies Meta<CurationTaskCardProps>
export default meta

const baseTask = {
  dataType: 'metadata_clinical',
  taskId: 123,
  instructions:
    'Project: Precision Drug Treatment Profiling in Human Pancreatic Tissue',
  assigneePrincipalId: '273957',
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties' as const,
  },
}

export const Demo: StoryObj<{ state: TaskStatusStateEnum }> = {
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(TaskStatusStateEnum),
    },
  },
  args: {
    state: TaskStatusStateEnum.NOT_STARTED,
  },
  render: ({ state }) => (
    <CurationTaskCard
      taskBundle={{
        task: baseTask,
        status: { state },
      }}
    />
  ),
}
