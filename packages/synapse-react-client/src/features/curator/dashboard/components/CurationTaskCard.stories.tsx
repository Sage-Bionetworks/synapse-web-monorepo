import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import CurationTaskCard, { CurationTaskCardProps } from './CurationTaskCard'

const meta = {
  title: 'Curator/Dashboard/CurationTaskCard',
  component: CurationTaskCard,
  parameters: { stack: 'mock', withRouter: true },
} satisfies Meta<CurationTaskCardProps>
export default meta

const CAN_EDIT_PROJECT_ID = 'syn123'
const CANNOT_EDIT_PROJECT_ID = 'syn456'

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

export const Demo: StoryObj<{ state: TaskStatusStateEnum; canEdit: boolean }> =
  {
    argTypes: {
      state: {
        control: 'select',
        options: Object.values(TaskStatusStateEnum),
      },
      canEdit: {
        control: 'boolean',
      },
    },
    args: {
      state: TaskStatusStateEnum.NOT_STARTED,
      canEdit: true,
    },
    parameters: {
      msw: {
        handlers: [
          http.post(
            `${MOCK_REPO_ORIGIN}/repo/v1/entity/:entityId/bundle2`,
            ({ params }) => {
              const canEdit = params.entityId === CAN_EDIT_PROJECT_ID
              return HttpResponse.json({
                entity: { name: 'Precision Drug Treatment Profiling' },
                permissions: { canEdit },
              })
            },
          ),
        ],
      },
    },
    render: ({ state, canEdit }) => (
      <CurationTaskCard
        taskBundle={{
          task: {
            ...baseTask,
            projectId: canEdit ? CAN_EDIT_PROJECT_ID : CANNOT_EDIT_PROJECT_ID,
          },
          status: { state },
        }}
      />
    ),
  }
