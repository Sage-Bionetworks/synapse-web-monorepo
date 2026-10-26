import { getCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskHandlers'
import {
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_FILE_VIEW_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { EntityIdTextFieldProps } from '@/components/EntityFinder/EntityIdTextField'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  CurationTask,
  TaskStatus,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  AUTH_MODE_SOURCE_BENEFACTOR_TITLE,
  DELETE_CURATION_TASK_DIALOG_TITLE,
  FILE_BASED_TASK_TITLE,
  RECORD_BASED_TASK_TITLE,
  TASK_STATUS_CONFIG,
  TASK_STATUS_INPUT_LABEL,
} from '../utils/constants'
import CreateOrUpdateCurationTaskDialog from './CreateOrUpdateCurationTaskDialog'

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: ({
    onChange,
    defaultValue,
  }: {
    onChange: (principalId: string | null) => void
    defaultValue?: string
  }) => (
    <button
      data-testid="user-search-box"
      data-default-value={defaultValue}
      onClick={() => onChange('newAssignee999')}
    >
      Select User
    </button>
  ),
}))

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({ label, value, onChange, disabled }: EntityIdTextFieldProps) => (
    <input
      aria-label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled ?? false}
    />
  ),
}))

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const TASK_URL = `${REPO_ORIGIN}/repo/v1/curation/task`
const PROJECT_ID = 'syn123'

const defaultProps = {
  open: true,
  onCancel: vi.fn(),
  onSuccess: vi.fn(),
  projectId: PROJECT_ID,
}

const fileBasedTask: CurationTask = {
  taskId: MOCK_CURATION_TASK_ID,
  projectId: PROJECT_ID,
  dataType: 'Genomics',
  instructions: 'Fill all fields.',
  assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  taskProperties: {
    concreteType:
      'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
    uploadFolderId: 'syn100',
    fileViewId: MOCK_CURATION_TASK_FILE_VIEW_ID,
    suggestedAuthorizationMode: 'SESSION_OWNER',
  },
}

const initialStatus: TaskStatus = {
  taskId: MOCK_CURATION_TASK_ID,
  state: TaskStatusStateEnum.NOT_STARTED,
  etag: 'etag1',
}

/** Serves the project's permissions, which determine whether the Delete button is shown */
function mockProjectPermissions(canDelete: boolean) {
  server.use(
    http.get(`${REPO_ORIGIN}/repo/v1/entity/${PROJECT_ID}/permissions`, () =>
      HttpResponse.json({ canDelete }),
    ),
  )
}

let curationTaskStore: ReturnType<typeof getCurationTaskHandlers>

function renderDialog(task?: CurationTask, props = {}) {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  render(
    <CreateOrUpdateCurationTaskDialog
      {...defaultProps}
      task={task}
      {...props}
    />,
    { wrapper: wrapperFn },
  )
  return { queryClient }
}

function renderCreateDialog(props = {}) {
  return renderDialog(undefined, props)
}

function renderEditDialog(task: CurationTask, props = {}) {
  return renderDialog(task, props)
}

/** Waits for the permissions query to settle so that Delete button visibility is meaningful */
async function waitForProjectPermissions(
  queryClient: ReturnType<typeof renderDialog>['queryClient'],
) {
  await waitFor(() => {
    expect(
      queryClient.getQueryState(
        MOCK_CONTEXT_VALUE.keyFactory.getEntityPermissionsQueryKey(PROJECT_ID),
      )?.status,
    ).toBe('success')
  })
}

/** Selects a task status once the current status has loaded and the select is enabled */
async function selectTaskStatus(state: TaskStatusStateEnum) {
  const statusSelect = await screen.findByRole('combobox', {
    name: TASK_STATUS_INPUT_LABEL,
  })
  await waitFor(() =>
    expect(statusSelect).not.toHaveAttribute('aria-disabled', 'true'),
  )
  await userEvent.click(statusSelect)
  await userEvent.click(
    screen.getByRole('option', { name: TASK_STATUS_CONFIG[state].label }),
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  curationTaskStore = getCurationTaskHandlers([
    {
      task: fileBasedTask,
      status: initialStatus,
    },
  ])
  server.use(...curationTaskStore.handlers)
  mockProjectPermissions(true)
})

describe('CreateOrUpdateCurationTaskDialog', () => {
  describe('Create mode', () => {
    it('renders step 1 type selection on open', () => {
      renderCreateDialog()
      expect(screen.getByText('Create Curation Task')).toBeInTheDocument()
      expect(screen.getByText(FILE_BASED_TASK_TITLE)).toBeInTheDocument()
      expect(screen.getByText(RECORD_BASED_TASK_TITLE)).toBeInTheDocument()
    })

    it('clicking File-Based Data advances to step 2', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      // Step 2 shows only type-specific fields
      expect(screen.getByLabelText(/Upload Folder ID/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/File View ID/i)).toBeInTheDocument()
      // Task Name (and others) are in step 3
      expect(screen.queryByLabelText(/Task Name/i)).not.toBeInTheDocument()
    })

    it('clicking Records-Based Data advances to step 2', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(RECORD_BASED_TASK_TITLE))
      expect(screen.getByLabelText(/Record Set ID/i)).toBeInTheDocument()
      expect(
        screen.queryByLabelText(/Upload Folder ID/i),
      ).not.toBeInTheDocument()
    })

    it('clicking Back from step 2 returns to step 1', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByText(FILE_BASED_TASK_TITLE)).toBeInTheDocument()
    })

    it('clicking Next advances from step 2 to step 3', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      // Step 3 shows common fields
      expect(screen.getByLabelText(/Task Name/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    })

    it('clicking Back from step 3 returns to step 2 in create mode', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      await userEvent.click(screen.getByRole('button', { name: /back/i }))
      expect(screen.getByLabelText(/Upload Folder ID/i)).toBeInTheDocument()
    })

    it('Save creates a task with the file-based payload', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))

      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')

      // Advance to step 3 (common fields)
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      await userEvent.type(screen.getByLabelText(/Task Name/i), 'Proteomics')

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(defaultProps.onSuccess).toHaveBeenCalledWith(
          expect.objectContaining({ taskId: 1000 }),
        )
      })
      expect(curationTaskStore.tasks.get(1000)).toEqual(
        expect.objectContaining({
          projectId: PROJECT_ID,
          dataType: 'Proteomics',
          taskProperties: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
            uploadFolderId: 'syn10',
            fileViewId: 'syn20',
          },
        }),
      )
    })

    it('Save creates a task with the record-based payload', async () => {
      renderCreateDialog()
      await userEvent.click(screen.getByText(RECORD_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Record Set ID/i), 'syn30')

      // Advance to step 3 (common fields)
      await userEvent.click(screen.getByRole('button', { name: /next/i }))

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(defaultProps.onSuccess).toHaveBeenCalledWith(
          expect.objectContaining({ taskId: 1000 }),
        )
      })
      expect(curationTaskStore.tasks.get(1000)).toEqual(
        expect.objectContaining({
          taskProperties: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
            recordSetId: 'syn30',
          },
        }),
      )
    })

    it('shows API error alert when create fails', async () => {
      server.use(
        http.post(TASK_URL, () =>
          HttpResponse.json(
            { reason: 'Something went wrong' },
            { status: 400 },
          ),
        ),
      )
      renderCreateDialog()
      // Navigate through step 2 to step 3 where errors are rendered
      await userEvent.click(screen.getByText(FILE_BASED_TASK_TITLE))
      await userEvent.type(screen.getByLabelText(/Upload Folder ID/i), 'syn10')
      await userEvent.type(screen.getByLabelText(/File View ID/i), 'syn20')
      await userEvent.click(screen.getByRole('button', { name: /next/i }))
      await userEvent.click(screen.getByRole('button', { name: /save/i }))
      // Error is rendered in step 3
      expect(
        await screen.findByText('Something went wrong'),
      ).toBeInTheDocument()
      expect(defaultProps.onSuccess).not.toHaveBeenCalled()
    })

    it('does not render the Delete button', async () => {
      const { queryClient } = renderCreateDialog({ onDeleteSuccess: vi.fn() })
      await waitForProjectPermissions(queryClient)
      expect(
        screen.queryByRole('button', { name: /^delete$/i }),
      ).not.toBeInTheDocument()
    })
  })

  describe('Edit mode', () => {
    it('shows edit title and pre-fills common fields', () => {
      renderEditDialog(fileBasedTask)
      expect(screen.getByText('Edit Curation Task')).toBeInTheDocument()

      const dataTypeInput =
        screen.getByLabelText<HTMLInputElement>(/Task Name/i)
      expect(dataTypeInput.value).toBe('Genomics')

      const instructionsInput =
        screen.getByLabelText<HTMLInputElement>(/Instructions/i)
      expect(instructionsInput.value).toBe('Fill all fields.')
    })

    it('does not render TaskProperties fields in edit mode', () => {
      renderEditDialog(fileBasedTask)
      // Edit mode starts at step 3 (COMMON_MUTABLE_FIELDS);
      // type-specific fields are in step 2 and are not shown
      expect(
        screen.queryByLabelText(/Upload Folder ID/i),
      ).not.toBeInTheDocument()
      expect(screen.queryByLabelText(/File View ID/i)).not.toBeInTheDocument()
    })

    it('does not render Back button in edit mode', () => {
      renderEditDialog(fileBasedTask)
      expect(
        screen.queryByRole('button', { name: /back/i }),
      ).not.toBeInTheDocument()
    })

    it('shows warning when suggestedAuthorizationMode is changed', async () => {
      renderEditDialog(fileBasedTask)

      // Initially no warning
      expect(
        screen.queryByText(/Changing the Authorization Mode/i),
      ).not.toBeInTheDocument()

      // Change to SOURCE_BENEFACTOR
      await userEvent.click(
        screen.getByLabelText(AUTH_MODE_SOURCE_BENEFACTOR_TITLE),
      )

      await waitFor(() => {
        expect(
          screen.getByText(/Changing the Authorization Mode/i),
        ).toBeInTheDocument()
      })
    })

    it('does not show warning when suggestedAuthorizationMode is unchanged', () => {
      renderEditDialog(fileBasedTask)
      // Select the same value (SESSION_OWNER is already selected)
      expect(
        screen.queryByText(/Changing the Authorization Mode/i),
      ).not.toBeInTheDocument()
    })

    it('Save updates the task with updated fields', async () => {
      renderEditDialog(fileBasedTask)

      const dataTypeInput = screen.getByLabelText(/Task Name/i)
      await userEvent.clear(dataTypeInput)
      await userEvent.type(dataTypeInput, 'Proteomics')

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(defaultProps.onSuccess).toHaveBeenCalledWith(
          expect.objectContaining({
            taskId: MOCK_CURATION_TASK_ID,
            dataType: 'Proteomics',
          }),
        )
      })
      expect(curationTaskStore.tasks.get(MOCK_CURATION_TASK_ID)).toEqual(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dataType: 'Proteomics',
        }),
      )
    })

    it('updates the task status when only status is changed', async () => {
      renderEditDialog(fileBasedTask)

      // Change only the status — no task field changes
      await selectTaskStatus(TaskStatusStateEnum.IN_PROGRESS)

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(curationTaskStore.statuses.get(MOCK_CURATION_TASK_ID)).toEqual(
          expect.objectContaining({ state: 'IN_PROGRESS' }),
        )
      })
      await waitFor(() => expect(defaultProps.onSuccess).toHaveBeenCalled())
    })

    it('updates the task status after updating the task and passes the updated etag when both change', async () => {
      const updatedEtag = 'new-etag-from-server'
      const taskPutBodies: CurationTask[] = []
      const statusPutBodies: TaskStatus[] = []
      server.use(
        http.put(`${TASK_URL}/:taskId`, async ({ request }) => {
          const body = (await request.json()) as CurationTask
          taskPutBodies.push(body)
          return HttpResponse.json({ ...body, etag: updatedEtag })
        }),
        http.put(`${TASK_URL}/:taskId/status`, async ({ request }) => {
          const body = (await request.json()) as TaskStatus
          statusPutBodies.push(body)
          return HttpResponse.json(body)
        }),
      )
      renderEditDialog(fileBasedTask)

      // Change a task field
      const dataTypeInput = screen.getByLabelText(/Task Name/i)
      await userEvent.clear(dataTypeInput)
      await userEvent.type(dataTypeInput, 'Proteomics')

      // Change status
      await selectTaskStatus(TaskStatusStateEnum.IN_PROGRESS)

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(defaultProps.onSuccess).toHaveBeenCalledWith(
          expect.objectContaining({ etag: updatedEtag }),
        )
      })
      expect(taskPutBodies).toEqual([
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dataType: 'Proteomics',
        }),
      ])
      expect(statusPutBodies).toEqual([
        expect.objectContaining({ state: 'IN_PROGRESS', etag: updatedEtag }),
      ])
    })

    it('shows API error alert when update fails', async () => {
      server.use(
        http.put(`${TASK_URL}/:taskId`, () =>
          HttpResponse.json({ reason: 'Update failed' }, { status: 400 }),
        ),
      )
      renderEditDialog(fileBasedTask)
      await userEvent.click(screen.getByRole('button', { name: /save/i }))
      expect(await screen.findByText('Update failed')).toBeInTheDocument()
      expect(defaultProps.onSuccess).not.toHaveBeenCalled()
    })

    it('does not render record-based task properties fields in edit mode', () => {
      const recordTask: CurationTask = {
        taskId: 200,
        projectId: PROJECT_ID,
        taskProperties: {
          concreteType:
            'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
          recordSetId: 'syn999',
        },
      }
      renderEditDialog(recordTask)
      // Edit mode starts at step 3 (COMMON_MUTABLE_FIELDS);
      // type-specific fields are in step 2 and are not shown
      expect(screen.queryByLabelText(/Record Set ID/i)).not.toBeInTheDocument()
    })

    describe('Delete', () => {
      const deletedTaskIds: number[] = []

      beforeEach(() => {
        deletedTaskIds.length = 0
        server.use(
          http.delete(`${TASK_URL}/:taskId`, ({ params }) => {
            deletedTaskIds.push(Number(params.taskId))
            return new HttpResponse(null, { status: 200 })
          }),
        )
      })

      it('does not render the Delete button when onDeleteSuccess is not provided', async () => {
        const { queryClient } = renderEditDialog(fileBasedTask)
        await waitForProjectPermissions(queryClient)
        expect(
          screen.queryByRole('button', { name: /^delete$/i }),
        ).not.toBeInTheDocument()
      })

      it('renders the Delete button when onDeleteSuccess is provided', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        expect(
          await screen.findByRole('button', { name: /^delete$/i }),
        ).toBeInTheDocument()
      })

      it('does not render the Delete button when onDeleteSuccess is provided but canDelete permission is false', async () => {
        mockProjectPermissions(false)
        const { queryClient } = renderEditDialog(fileBasedTask, {
          onDeleteSuccess: vi.fn(),
        })
        await waitForProjectPermissions(queryClient)
        expect(
          screen.queryByRole('button', { name: /^delete$/i }),
        ).not.toBeInTheDocument()
      })

      it('opens the confirmation dialog when Delete is clicked', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        await userEvent.click(
          await screen.findByRole('button', { name: /^delete$/i }),
        )
        expect(
          screen.getByText(DELETE_CURATION_TASK_DIALOG_TITLE),
        ).toBeInTheDocument()
        expect(
          screen.getByText(
            /any grid sessions associated with this task will also be deleted/i,
          ),
        ).toBeInTheDocument()
      })

      it('deletes the task with the task ID when confirmed', async () => {
        renderEditDialog(fileBasedTask, { onDeleteSuccess: vi.fn() })
        await userEvent.click(
          await screen.findByRole('button', { name: /^delete$/i }),
        )
        // Confirm in the nested ConfirmationDialog
        const confirmButtons = screen.getAllByRole('button', {
          name: /^delete$/i,
        })
        await userEvent.click(confirmButtons[confirmButtons.length - 1])
        await waitFor(() => {
          expect(deletedTaskIds).toEqual([MOCK_CURATION_TASK_ID])
        })
      })

      it('does not delete the task when the confirmation is cancelled', async () => {
        const onDeleteSuccess = vi.fn()
        renderEditDialog(fileBasedTask, { onDeleteSuccess })
        await userEvent.click(
          await screen.findByRole('button', { name: /^delete$/i }),
        )
        await userEvent.click(screen.getByRole('button', { name: /cancel/i }))
        expect(deletedTaskIds).toEqual([])
        expect(onDeleteSuccess).not.toHaveBeenCalled()
      })

      it('calls onDeleteSuccess when the delete succeeds', async () => {
        const onDeleteSuccess = vi.fn()
        renderEditDialog(fileBasedTask, { onDeleteSuccess })

        await userEvent.click(
          await screen.findByRole('button', { name: /^delete$/i }),
        )
        const confirmButtons = screen.getAllByRole('button', {
          name: /^delete$/i,
        })
        await userEvent.click(confirmButtons[confirmButtons.length - 1])

        await waitFor(() => expect(onDeleteSuccess).toHaveBeenCalledTimes(1))
        expect(deletedTaskIds).toEqual([MOCK_CURATION_TASK_ID])
      })
    })
  })
})
