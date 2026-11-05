import {
  createMockExecutableTaskBundle,
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { getCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskHandlers'
import { getEntityPermissionsHandler } from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  CurationTask,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
  TaskStatus,
  UserEntityPermissions,
} from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import {
  COMPUTE_TASK_TYPE_CONFIG,
  CREATE_TASK_STATUS_NOT_SAVED_WARNING,
  DELETE_CURATION_TASK_SUCCESS_TOAST,
} from '../utils/constants'
import ComputeTaskForm, { ComputeTaskFormProps } from './ComputeTaskForm'

vi.mock('@/components/ToastMessage/ToastMessage')

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: ({
    value,
    onChange,
  }: {
    value: string | null
    onChange: (id: string | null) => void
  }) => (
    <button
      data-testid="user-search-box"
      data-value={value ?? ''}
      onClick={() => onChange('999')}
    >
      Select User
    </button>
  ),
}))

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: string
    onChange: (value: string) => void
  }) => (
    <input
      aria-label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  ),
}))

const mockDisplayToast = vi.mocked(displayToast)

const SAMPLE_SHEET_TYPE =
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties
const RECORD_SET_TYPE =
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties

// The date a user picks in the native date input, and its UTC-midnight ISO 8601 encoding as the
// backend stores it.
const DUE_DATE_INPUT = '2030-01-01'
const DUE_DATE_ISO = '2030-01-01T00:00:00.000Z'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const TASK_ID_URL = `${REPO_ORIGIN}/repo/v1/curation/task/:taskId`
const TASK_STATUS_URL = `${TASK_ID_URL}/status`

const editTask: CurationTask = {
  taskId: MOCK_CURATION_TASK_ID,
  etag: 'etag-1',
  projectId: 'syn123',
  dataType: 'Existing Task',
  instructions: 'Existing instructions',
  assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  dueDate: DUE_DATE_ISO,
  taskProperties: {
    concreteType: RECORD_SET_TYPE,
    folderId: 'syn999',
    instructions: 'Do the agent thing',
    destinationTaskId: 5,
  },
}

const onCreate = vi.fn<(task: CurationTask) => void>()
const onUpdate = vi.fn<(task: CurationTask) => void>()
const onUpdateStatus = vi.fn<(status: TaskStatus) => void>()
const onDelete = vi.fn<(taskId: number) => void>()

function mockCurationTaskHandlers(statusEtag = 'status-etag') {
  server.use(
    ...getCurationTaskHandlers({
      bundle: createMockExecutableTaskBundle(editTask, {
        state: 'NOT_STARTED',
        etag: statusEtag,
      }),
      onCreate,
      onUpdate,
      onUpdateStatus,
      onDelete,
    }),
  )
}

function mockEntityPermissions(permissions: Partial<UserEntityPermissions>) {
  server.use(getEntityPermissionsHandler(REPO_ORIGIN, permissions))
}

function renderForm(props: ComputeTaskFormProps = {}) {
  const { wrapperFn, queryClient } = createWrapperAndQueryClient()
  render(<ComputeTaskForm {...props} />, { wrapper: wrapperFn })
  return { queryClient }
}

/** The Status select is disabled until the task's status has been fetched. */
async function waitForStatusLoaded() {
  await waitFor(() =>
    expect(
      screen.getByRole('combobox', { name: /^status$/i }),
    ).not.toHaveAttribute('aria-disabled', 'true'),
  )
}

async function fillRequiredCommonFields() {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText(/task name/i), 'My Task')
  await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
  await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
  await user.click(screen.getByTestId('user-search-box'))
  return user
}

beforeEach(() => {
  vi.clearAllMocks()
  mockCurationTaskHandlers()
  mockEntityPermissions({ canDelete: true, canEdit: true })
})

describe('ComputeTaskForm', () => {
  describe('create mode', () => {
    it('defaults the type selector to Sample Sheet Generation', () => {
      renderForm({ projectId: 'syn123' })
      expect(
        screen.getByRole('combobox', { name: /compute task type/i }),
      ).toHaveTextContent(/sample sheet generation/i)
    })

    it('shows Sample Sheet fields by default, and switches to Record Set fields when the type is changed, resetting the value when switched back', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      expect(screen.getByLabelText(/input task id/i)).toBeInTheDocument()
      expect(
        screen.queryByLabelText(/agent instructions/i),
      ).not.toBeInTheDocument()

      await user.type(screen.getByLabelText(/input task id/i), '1')

      await user.click(
        screen.getByRole('combobox', { name: /compute task type/i }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: COMPUTE_TASK_TYPE_CONFIG[
            RecordSetGenerationExecutionPropertiesConcreteTypeEnum
              .org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties
          ].label,
        }),
      )

      expect(screen.queryByLabelText(/input task id/i)).not.toBeInTheDocument()
      expect(screen.getByLabelText(/agent instructions/i)).toBeInTheDocument()

      // Switching back to Sample Sheet Generation resets its value rather than retaining what was
      // previously entered -- the form only owns one active concrete-type value at a time.
      await user.click(
        screen.getByRole('combobox', { name: /compute task type/i }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: COMPUTE_TASK_TYPE_CONFIG[SAMPLE_SHEET_TYPE].label,
        }),
      )
      expect(screen.getByLabelText(/input task id/i)).toHaveValue('')
    })

    it('shows the project selector only when no projectId is supplied', () => {
      renderForm()
      expect(screen.getByLabelText(/^project$/i)).toBeInTheDocument()
    })

    it('does not show the project selector when a projectId is supplied', () => {
      renderForm({ projectId: 'syn123' })
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('shows a "Back to All Tasks" button when onExit is provided, and calls it when clicked', async () => {
      const onExit = vi.fn()
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123', onExit })

      await user.click(
        screen.getByRole('button', { name: /back to all tasks/i }),
      )

      expect(onExit).toHaveBeenCalled()
    })

    it('does not show a "Back to All Tasks" button when onExit is not provided', () => {
      renderForm({ projectId: 'syn123' })
      expect(
        screen.queryByRole('button', { name: /back to all tasks/i }),
      ).not.toBeInTheDocument()
    })

    it('disables Create until all required fields (including type-specific fields) are filled', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      const createButton = screen.getByRole('button', { name: /create/i })
      expect(createButton).toBeDisabled()

      await fillRequiredCommonFields()
      // Common fields alone are not enough -- Sample Sheet fields are also required.
      expect(createButton).toBeDisabled()

      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')

      expect(createButton).toBeEnabled()
    })

    it('enables Create without a due date (due date is optional)', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      await user.type(screen.getByLabelText(/task name/i), 'My Task')
      await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
      await user.click(screen.getByTestId('user-search-box'))
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')

      expect(screen.getByLabelText(/task due date/i)).toHaveValue('')
      expect(screen.getByRole('button', { name: /create/i })).toBeEnabled()
    })

    it('sets executionDetails on the auto-created status even without a due date, since a Compute task always needs it to route execution', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      await user.type(screen.getByLabelText(/task name/i), 'My Task')
      await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
      await user.click(screen.getByTestId('user-search-box'))
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onUpdateStatus).toHaveBeenCalledTimes(1))
      expect(onCreate).toHaveBeenCalledTimes(1)
      expect(onCreate.mock.calls[0][0].dueDate).toBeUndefined()
      expect(onUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          executionDetails: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionDetails',
          },
        }),
      )
    })

    it('keeps Create disabled when a task ID field is not a positive integer', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), 'abc')
      await user.type(screen.getByLabelText(/destination task id/i), '2')

      expect(screen.getByRole('button', { name: /create/i })).toBeDisabled()
    })

    it('creates the task with the built payload and calls onCreated', async () => {
      const onCreated = vi.fn()
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123', onCreated })

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onCreated).toHaveBeenCalledTimes(1))
      expect(onCreate).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'syn123',
          dataType: 'My Task',
          instructions: 'Do it',
          assigneePrincipalId: '999',
          taskProperties: {
            concreteType: SAMPLE_SHEET_TYPE,
            inputTaskId: 1,
            destinationTaskId: 2,
          },
        }),
      )
      expect(onCreated).toHaveBeenCalledWith(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dataType: 'My Task',
        }),
      )
    })

    it('includes the due date in the task payload and executionDetails in the status on create', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123', onCreated: vi.fn() })

      // fillRequiredCommonFields types DUE_DATE_INPUT into the due date field.
      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onUpdateStatus).toHaveBeenCalledTimes(1))
      expect(onCreate).toHaveBeenCalledWith(
        expect.objectContaining({ dueDate: DUE_DATE_ISO }),
      )
      expect(onUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          executionDetails: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionDetails',
          },
        }),
      )
      expect(onUpdateStatus.mock.calls[0][0]).not.toHaveProperty('dueDate')
    })

    it('sets a RecordSetGenerationExecutionDetails executionDetails when creating a Record Set Generation task', async () => {
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123' })

      await user.click(
        screen.getByRole('combobox', { name: /compute task type/i }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: COMPUTE_TASK_TYPE_CONFIG[RECORD_SET_TYPE].label,
        }),
      )

      await user.type(screen.getByLabelText(/task name/i), 'My Task')
      await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
      await user.click(screen.getByTestId('user-search-box'))
      await user.type(screen.getByLabelText(/source folder/i), 'syn999')
      await user.type(screen.getByLabelText(/agent instructions/i), 'Do it')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onUpdateStatus).toHaveBeenCalledTimes(1))
      expect(onUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          executionDetails: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.execution.RecordSetGenerationExecutionDetails',
          },
        }),
      )
    })

    it('treats the task as created when the status update fails, warning the user without duplicating the task', async () => {
      server.use(
        http.put(TASK_STATUS_URL, () =>
          HttpResponse.json({ reason: 'Invalid due date' }, { status: 400 }),
        ),
      )
      const onCreated = vi.fn()
      const user = userEvent.setup()
      renderForm({ projectId: 'syn123', onCreated })

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/input task id/i), '1')
      await user.type(screen.getByLabelText(/destination task id/i), '2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onCreated).toHaveBeenCalledTimes(1))
      expect(onCreate).toHaveBeenCalledTimes(1)
      expect(onCreated).toHaveBeenCalledWith(
        expect.objectContaining({ dataType: 'My Task' }),
      )
      expect(mockDisplayToast).toHaveBeenCalledWith(
        CREATE_TASK_STATUS_NOT_SAVED_WARNING,
        'warning',
      )
    })
  })

  describe('edit mode', () => {
    it('prefills fields from the existing task and hides the project selector', () => {
      renderForm({ task: editTask })

      expect(screen.getByLabelText(/task due date/i)).toHaveValue(
        DUE_DATE_INPUT,
      )
      expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')
      expect(screen.getByLabelText(/^instructions/i)).toHaveValue(
        'Existing instructions',
      )
      expect(screen.getByLabelText(/agent instructions/i)).toHaveValue(
        'Do the agent thing',
      )
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('disables the type selector', () => {
      renderForm({ task: editTask })
      expect(
        screen.getByRole('combobox', { name: /compute task type/i }),
      ).toHaveAttribute('aria-disabled', 'true')
    })

    it('disables the EXECUTING and CANCELED status options, since a user must not be able to manually select into either', async () => {
      const user = userEvent.setup()
      renderForm({ task: editTask })
      await waitForStatusLoaded()

      await user.click(screen.getByRole('combobox', { name: /^status$/i }))

      expect(
        await screen.findByRole('option', { name: /^executing$/i }),
      ).toHaveAttribute('aria-disabled', 'true')
      expect(
        screen.getByRole('option', { name: /^canceled$/i }),
      ).toHaveAttribute('aria-disabled', 'true')
    })

    it('shows a Delete button when the user has permission, and deletes on confirmation', async () => {
      const onDeleted = vi.fn()
      const user = userEvent.setup()
      renderForm({ task: editTask, onDeleted })

      await user.click(await screen.findByRole('button', { name: /^delete$/i }))
      // Confirm within the confirmation dialog (the second "Delete" button).
      const deleteButtons = screen.getAllByRole('button', {
        name: /^delete$/i,
      })
      await user.click(deleteButtons.at(-1)!)

      await waitFor(() => expect(onDeleted).toHaveBeenCalledTimes(1))
      expect(onDelete).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
      expect(mockDisplayToast).toHaveBeenCalledWith(
        DELETE_CURATION_TASK_SUCCESS_TOAST,
        'success',
      )
    })

    it('does not show a Delete button when the user lacks permission', async () => {
      mockEntityPermissions({ canDelete: false, canEdit: true })
      const { queryClient } = renderForm({
        task: editTask,
        onDeleted: vi.fn(),
      })

      // Wait for the permissions to be loaded, so the absence of the button is meaningful.
      await waitFor(() =>
        expect(
          queryClient.getQueryData(
            MOCK_CONTEXT_VALUE.keyFactory.getEntityPermissionsQueryKey(
              editTask.projectId!,
            ),
          ),
        ).toEqual({ canDelete: false, canEdit: true }),
      )
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0))
      })

      expect(
        screen.queryByRole('button', { name: /^delete$/i }),
      ).not.toBeInTheDocument()
    })

    it('saves the task via updateTask and calls onSaved', async () => {
      const onSaved = vi.fn()
      const user = userEvent.setup()
      renderForm({ task: editTask, onSaved })

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      await waitFor(() => expect(onSaved).toHaveBeenCalledTimes(1))
      expect(onUpdate).toHaveBeenCalledWith(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dueDate: DUE_DATE_ISO,
        }),
      )
      expect(onSaved).toHaveBeenCalledWith(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dataType: 'Existing Task',
        }),
      )
    })

    it('clears the due date on the task when the user removes an existing due date', async () => {
      const onSaved = vi.fn()
      const user = userEvent.setup()
      renderForm({ task: editTask, onSaved })

      const dueDateInput = screen.getByLabelText(/task due date/i)
      expect(dueDateInput).toHaveValue(DUE_DATE_INPUT)
      await user.clear(dueDateInput)
      expect(dueDateInput).toHaveValue('')

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      await waitFor(() => expect(onSaved).toHaveBeenCalledTimes(1))
      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate.mock.calls[0][0].dueDate).toBeUndefined()
      expect(onUpdateStatus).not.toHaveBeenCalled()
    })

    it('preserves the stored due date verbatim in the task update when only the status state is changed', async () => {
      const OPAQUE_STORED_DUE_DATE = 'legacy-unparseable-value'
      const onSaved = vi.fn()
      const user = userEvent.setup()
      renderForm({
        task: { ...editTask, dueDate: OPAQUE_STORED_DUE_DATE },
        onSaved,
      })
      await waitForStatusLoaded()

      await user.click(screen.getByRole('combobox', { name: /^status$/i }))
      await user.click(
        await screen.findByRole('option', { name: /in progress/i }),
      )
      await user.click(screen.getByRole('button', { name: /^save$/i }))

      await waitFor(() => expect(onUpdateStatus).toHaveBeenCalledTimes(1))
      // The user never touched the due date field, so the task's stored value must pass through verbatim.
      expect(onUpdate).toHaveBeenCalledWith(
        expect.objectContaining({ dueDate: OPAQUE_STORED_DUE_DATE }),
      )
      expect(onUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({ state: 'IN_PROGRESS' }),
      )
    })

    it('updates the status using the etag returned by the task update (shared, freshly bumped etag)', async () => {
      mockCurationTaskHandlers('stale-etag')
      server.use(
        http.put(TASK_ID_URL, async ({ request }) => {
          const body = (await request.json()) as CurationTask
          return HttpResponse.json({ ...body, etag: 'bumped-etag' })
        }),
      )
      const user = userEvent.setup()
      renderForm({ task: editTask, onSaved: vi.fn() })
      await waitForStatusLoaded()

      await user.click(screen.getByRole('combobox', { name: /^status$/i }))
      await user.click(
        await screen.findByRole('option', { name: /in progress/i }),
      )
      await user.click(screen.getByRole('button', { name: /^save$/i }))

      // The task and its status share an etag; the status update must use the one returned by
      // the preceding updateTask call, not the stale fetched one.
      await waitFor(() => expect(onUpdateStatus).toHaveBeenCalledTimes(1))
      expect(onUpdateStatus).toHaveBeenCalledWith(
        expect.objectContaining({
          etag: 'bumped-etag',
          state: 'IN_PROGRESS',
        }),
      )
    })

    it('omits the type section and shows a warning for a task with an unrecognized category', () => {
      renderForm({ task: { ...editTask, taskProperties: undefined } })

      expect(
        screen.queryByRole('combobox', { name: /compute task type/i }),
      ).not.toBeInTheDocument()
      expect(screen.getByText(/unrecognized task type/i)).toBeInTheDocument()
    })
  })
})
