import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { getCurationTaskHandlers } from '@/mocks/msw/handlers/curationTaskHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  CurationTask,
  TaskStatus,
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { render as rtlRender, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import type { Mock } from 'vitest'
import CurateTaskForm from './CurateTaskForm'

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

const FILE_BASED_TYPE =
  FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties
const RECORD_BASED_TYPE =
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties

// The date a user picks in the native date input, and its UTC-midnight ISO 8601 encoding as the
// backend stores it.
const DUE_DATE_INPUT = '2030-01-01'
const DUE_DATE_ISO = '2030-01-01T00:00:00.000Z'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

/** The state of the in-memory curation task backend for the current test. */
let backend: ReturnType<typeof getCurationTaskHandlers>
/** Receives the body of every `PUT /curation/task/:taskId/status` request. */
let statusPutSpy: Mock<(body: TaskStatus) => void>

function render(ui: React.ReactElement) {
  return rtlRender(ui, { wrapper: createWrapper() })
}

function fillRequiredCommonFields() {
  const user = userEvent.setup()
  return (async () => {
    await user.type(screen.getByLabelText(/task name/i), 'My Task')
    await user.type(screen.getByLabelText(/task due date/i), '2030-01-01')
    await user.type(screen.getByLabelText(/^instructions/i), 'Do it')
    await user.click(screen.getByTestId('user-search-box'))
    return user
  })()
}

/** Installs the in-memory curation task backend, seeded with `initialBundles`. */
function installCurationTaskBackend(
  initialBundles: Parameters<typeof getCurationTaskHandlers>[0],
) {
  backend = getCurationTaskHandlers(initialBundles)
  statusPutSpy = vi.fn<(body: TaskStatus) => void>()
  server.use(
    // Registered before the shared handlers so the spy sees status writes; it delegates to the same
    // in-memory store by echoing the body back.
    http.put(
      `${REPO_ORIGIN}/repo/v1/curation/task/:taskId/status`,
      async ({ request, params }) => {
        const body = (await request.json()) as TaskStatus
        statusPutSpy(body)
        backend.statuses.set(Number(params.taskId), body)
        return HttpResponse.json(body)
      },
    ),
    ...backend.handlers,
  )
}

beforeEach(() => {
  installCurationTaskBackend([])
  server.use(
    // The user can delete the project's tasks.
    http.get(`${REPO_ORIGIN}/repo/v1/entity/:id/permissions`, () =>
      HttpResponse.json({ canDelete: true, canEdit: true }),
    ),
  )
})

describe('CurateTaskForm', () => {
  describe('create mode', () => {
    it('defaults the type selector to File-Based Data', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(
        screen.getByRole('combobox', { name: /curate task type/i }),
      ).toHaveTextContent(/file-based data/i)
    })

    it('shows File-Based fields by default, and switches to Records-Based fields when the type is changed, resetting the value when switched back', async () => {
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" />)

      expect(screen.getByLabelText(/upload folder id/i)).toBeInTheDocument()
      expect(screen.queryByLabelText(/record set id/i)).not.toBeInTheDocument()

      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')

      await user.click(
        screen.getByRole('combobox', { name: /curate task type/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /records-based data/i }),
      )

      expect(
        screen.queryByLabelText(/upload folder id/i),
      ).not.toBeInTheDocument()
      expect(screen.getByLabelText(/record set id/i)).toBeInTheDocument()

      // Switching back to File-Based Data resets its value rather than retaining what was previously
      // entered -- the form only owns one active concrete-type value at a time.
      await user.click(
        screen.getByRole('combobox', { name: /curate task type/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /file-based data/i }),
      )
      expect(screen.getByLabelText(/upload folder id/i)).toHaveValue('')
    })

    it('shows the project selector only when no projectId is supplied', () => {
      render(<CurateTaskForm />)
      expect(screen.getByLabelText(/^project$/i)).toBeInTheDocument()
    })

    it('does not show the project selector when a projectId is supplied', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('shows a "Back to All Tasks" button when onExit is provided, and calls it when clicked', async () => {
      const onExit = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onExit={onExit} />)

      await user.click(
        screen.getByRole('button', { name: /back to all tasks/i }),
      )

      expect(onExit).toHaveBeenCalled()
    })

    it('does not show a "Back to All Tasks" button when onExit is not provided', () => {
      render(<CurateTaskForm projectId="syn123" />)
      expect(
        screen.queryByRole('button', { name: /back to all tasks/i }),
      ).not.toBeInTheDocument()
    })

    it('disables Create until all required fields (including type-specific fields) are filled', async () => {
      render(<CurateTaskForm projectId="syn123" />)

      const createButton = screen.getByRole('button', { name: /create/i })
      expect(createButton).toBeDisabled()

      await fillRequiredCommonFields()
      // Common fields alone are not enough -- File-Based fields are also required.
      expect(createButton).toBeDisabled()

      const user = userEvent.setup()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')

      expect(createButton).toBeEnabled()
    })

    it('creates the task with the built payload and calls onCreated', async () => {
      const onCreated = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onCreated={onCreated} />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onCreated).toHaveBeenCalled())

      expect([...backend.tasks.values()]).toEqual([
        expect.objectContaining({
          projectId: 'syn123',
          dataType: 'My Task',
          instructions: 'Do it',
          assigneePrincipalId: '999',
          taskProperties: {
            concreteType: FILE_BASED_TYPE,
            uploadFolderId: 'syn1',
            fileViewId: 'syn2',
          },
        }),
      ])
      const [created] = [...backend.tasks.values()]
      expect(onCreated).toHaveBeenCalledWith(
        expect.objectContaining({ taskId: created.taskId }),
      )
    })

    it('includes the due date in the task payload on create', async () => {
      const onCreated = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onCreated={onCreated} />)

      // fillRequiredCommonFields types DUE_DATE_INPUT into the due date field.
      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onCreated).toHaveBeenCalled())

      expect([...backend.tasks.values()]).toEqual([
        expect.objectContaining({ dueDate: DUE_DATE_ISO }),
      ])
      expect(statusPutSpy).not.toHaveBeenCalled()
    })

    it('sets suggestedAuthorizationMode from the selected Authorization Mode', async () => {
      const onCreated = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm projectId="syn123" onCreated={onCreated} />)

      await fillRequiredCommonFields()
      await user.type(screen.getByLabelText(/upload folder id/i), 'syn1')
      await user.type(screen.getByLabelText(/file view id/i), 'syn2')
      await user.click(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      )
      await user.click(
        await screen.findByRole('option', {
          name: /share with assignees only/i,
        }),
      )
      await user.click(screen.getByRole('button', { name: /create/i }))

      await waitFor(() => expect(onCreated).toHaveBeenCalled())

      const [created] = [...backend.tasks.values()]
      expect(created.taskProperties).toMatchObject({
        suggestedAuthorizationMode: 'SESSION_OWNER',
      })
    })
  })

  describe('edit mode', () => {
    const editTask: CurationTask = {
      taskId: MOCK_CURATION_TASK_ID,
      etag: 'etag-1',
      projectId: 'syn123',
      dataType: 'Existing Task',
      instructions: 'Existing instructions',
      assigneePrincipalId: MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      dueDate: DUE_DATE_ISO,
      taskProperties: {
        concreteType: RECORD_BASED_TYPE,
        recordSetId: 'syn999',
        suggestedAuthorizationMode: 'SESSION_OWNER',
      },
    }

    beforeEach(() => {
      installCurationTaskBackend([
        createMockTaskBundle(editTask, { state: 'NOT_STARTED' }),
      ])
    })

    it('prefills fields from the existing task and hides the project selector', () => {
      render(<CurateTaskForm task={editTask} />)

      expect(screen.getByLabelText(/task due date/i)).toHaveValue(
        DUE_DATE_INPUT,
      )
      expect(screen.getByLabelText(/task name/i)).toHaveValue('Existing Task')
      expect(screen.getByLabelText(/^instructions/i)).toHaveValue(
        'Existing instructions',
      )
      expect(screen.getByLabelText(/record set id/i)).toHaveValue('syn999')
      expect(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      ).toHaveTextContent(/share with assignees only/i)
      expect(screen.queryByLabelText(/^project$/i)).not.toBeInTheDocument()
    })

    it('disables the type selector', () => {
      render(<CurateTaskForm task={editTask} />)
      expect(
        screen.getByRole('combobox', { name: /curate task type/i }),
      ).toHaveAttribute('aria-disabled', 'true')
    })

    it('disables the EXECUTING status option, but leaves CANCELED selectable', async () => {
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} />)

      // The status select stays disabled until the task's status has been fetched.
      const statusSelect = screen.getByRole('combobox', { name: /^status$/i })
      await waitFor(() =>
        expect(statusSelect).not.toHaveAttribute('aria-disabled', 'true'),
      )
      await user.click(statusSelect)

      expect(
        await screen.findByRole('option', { name: /^executing$/i }),
      ).toHaveAttribute('aria-disabled', 'true')
      expect(
        screen.getByRole('option', { name: /^canceled$/i }),
      ).not.toHaveAttribute('aria-disabled', 'true')
    })

    it('shows a Delete button when the user has permission, and deletes on confirmation', async () => {
      const onDeleted = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} onDeleted={onDeleted} />)

      // The Delete button appears once the project's permissions have loaded.
      await user.click(await screen.findByRole('button', { name: /^delete$/i }))
      const deleteButtons = screen.getAllByRole('button', {
        name: /^delete$/i,
      })
      await user.click(deleteButtons[deleteButtons.length - 1])

      await waitFor(() => expect(onDeleted).toHaveBeenCalled())
      expect(backend.tasks.has(MOCK_CURATION_TASK_ID)).toBe(false)
    })

    it('saves the task via updateTask and calls onSaved', async () => {
      const onSaved = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} onSaved={onSaved} />)

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      await waitFor(() => expect(onSaved).toHaveBeenCalled())

      expect(backend.tasks.get(MOCK_CURATION_TASK_ID)).toEqual(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dueDate: DUE_DATE_ISO,
        }),
      )
      expect(onSaved).toHaveBeenCalledWith(
        expect.objectContaining({
          taskId: MOCK_CURATION_TASK_ID,
          dueDate: DUE_DATE_ISO,
        }),
      )
    })

    it('clears the due date on the task when the user removes an existing due date', async () => {
      const onSaved = vi.fn()
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} onSaved={onSaved} />)

      const dueDateInput = screen.getByLabelText(/task due date/i)
      expect(dueDateInput).toHaveValue(DUE_DATE_INPUT)
      await user.clear(dueDateInput)

      await user.click(screen.getByRole('button', { name: /^save$/i }))

      await waitFor(() => expect(onSaved).toHaveBeenCalled())

      // The saved task has no due date at all, rather than the previously stored one.
      expect(backend.tasks.get(MOCK_CURATION_TASK_ID)).not.toHaveProperty(
        'dueDate',
      )
      expect(statusPutSpy).not.toHaveBeenCalled()
    })

    it('shows a warning when the Authorization Mode is changed', async () => {
      const user = userEvent.setup()
      render(<CurateTaskForm task={editTask} />)

      expect(
        screen.queryByText(/changing the authorization mode/i),
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole('combobox', { name: /authorization mode/i }),
      )
      await user.click(
        await screen.findByRole('option', { name: /work independently/i }),
      )

      expect(
        screen.getByText(/changing the authorization mode/i),
      ).toBeInTheDocument()
    })
  })
})
