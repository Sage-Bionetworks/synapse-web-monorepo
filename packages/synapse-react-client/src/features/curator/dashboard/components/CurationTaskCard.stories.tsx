import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { getExecuteCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskExecutionHandlers'
import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpHandler, HttpResponse } from 'msw'
import CurationTaskCard, { CurationTaskCardProps } from './CurationTaskCard'

const meta = {
  title: 'Curator/Dashboard/CurationTaskCard',
  component: CurationTaskCard,
  parameters: { stack: 'mock', withRouter: true },
} satisfies Meta<CurationTaskCardProps>
export default meta

const CAN_EDIT_PROJECT_ID = 'syn123'
const CANNOT_EDIT_PROJECT_ID = 'syn456'
const DESTINATION_TASK_ID = 456

const bundleHandler = (canEditProjectId: string): HttpHandler =>
  http.post(
    `${MOCK_REPO_ORIGIN}/repo/v1/entity/:entityId/bundle2`,
    ({ params }) => {
      const canEdit = params.entityId === canEditProjectId
      return HttpResponse.json({
        entity: { name: 'Precision Drug Treatment Profiling' },
        permissions: { canEdit },
      })
    },
  )

const executableTaskHandlers: Record<string, HttpHandler[]> = {
  bundle: [bundleHandler(CAN_EDIT_PROJECT_ID)],
  currentUserProfile: [
    http.get(`${MOCK_REPO_ORIGIN}/repo/v1/userProfile`, () =>
      HttpResponse.json({ ownerId: '273957' }),
    ),
    http.post(`${MOCK_REPO_ORIGIN}/repo/v1/userGroupHeaders/batch`, () =>
      HttpResponse.json({ children: [] }),
    ),
  ],
  execute: getExecuteCurationTaskHandlers(),
}

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

const baseExecutableTask = {
  dataType: 'sample_sheet',
  taskId: 321,
  instructions: 'Generate a sample sheet from the source annotations.',
  assigneePrincipalId: '273957',
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionProperties' as const,
    destinationTaskId: DESTINATION_TASK_ID,
  },
}

export const ExecutableTask: StoryObj<{
  state: TaskStatusStateEnum
  canEdit: boolean
  hasDestinationTask: boolean
}> = {
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(TaskStatusStateEnum),
    },
    canEdit: { control: 'boolean' },
    hasDestinationTask: { control: 'boolean' },
  },
  args: {
    state: TaskStatusStateEnum.NOT_STARTED,
    canEdit: true,
    hasDestinationTask: true,
  },
  parameters: {
    msw: { handlers: executableTaskHandlers },
  },
  render: ({ state, canEdit, hasDestinationTask }) => (
    <CurationTaskCard
      taskBundle={{
        task: {
          ...baseExecutableTask,
          projectId: canEdit ? CAN_EDIT_PROJECT_ID : CANNOT_EDIT_PROJECT_ID,
          taskProperties: {
            ...baseExecutableTask.taskProperties,
            destinationTaskId: hasDestinationTask
              ? DESTINATION_TASK_ID
              : undefined,
          },
        },
        status: { state },
      }}
    />
  ),
}
