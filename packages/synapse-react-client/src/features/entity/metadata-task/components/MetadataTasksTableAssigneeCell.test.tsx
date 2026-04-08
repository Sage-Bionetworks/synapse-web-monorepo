import MetadataTasksTableAssigneeCell from './MetadataTasksTableAssigneeCell'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useUpdateCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
} from '@/mocks/curation/mockCurationTask'
import { TaskBundle } from '@sage-bionetworks/synapse-client'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useUpdateCurationTask: vi.fn(),
}))

vi.mock('@/components/UserOrTeamBadge/UserOrTeamBadge', () => ({
  default: ({ principalId }: { principalId: string }) => (
    <span data-testid="user-or-team-badge" data-principal-id={principalId} />
  ),
}))

vi.mock('@/components/UserSearchBox/UserSearchBox', () => ({
  default: ({
    onChange,
  }: {
    onChange: (principalId: string | null) => void
  }) => (
    <button
      data-testid="user-search-box"
      onClick={() => onChange('newAssignee123')}
    >
      Select User
    </button>
  ),
}))

const mockUseUpdateCurationTask = vi.mocked(useUpdateCurationTask)
const mockMutateAsync = vi.fn()

const renderComponent = (taskBundle: TaskBundle, canEdit: boolean) =>
  render(
    <MetadataTasksTableAssigneeCell
      taskBundle={taskBundle}
      canEdit={canEdit}
    />,
  )

/** Find the element that holds the assignee cell content */
const getAssigneeCellContainer = () =>
  screen.getByTestId('user-or-team-badge').parentElement!

beforeEach(() => {
  vi.clearAllMocks()
  mockMutateAsync.mockResolvedValue({})
  mockUseUpdateCurationTask.mockReturnValue({
    mutateAsync: mockMutateAsync,
    isPending: false,
  } as any)
})

describe('MetadataTasksTableAssigneeCell', () => {
  describe('assignee display', () => {
    it('renders "Unassigned" when assigneePrincipalId is missing', () => {
      const taskBundle = createMockTaskBundle({
        task: {
          taskId: 123,
          assigneePrincipalId: undefined,
          taskProperties: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
            fileViewId: 'syn999',
          },
        },
      })
      renderComponent(taskBundle, false)
      expect(screen.getByText('Unassigned')).toBeInTheDocument()
      expect(screen.queryByTestId('user-or-team-badge')).not.toBeInTheDocument()
    })

    it('renders "Unassigned" when assigneePrincipalId is "0"', () => {
      const taskBundle = createMockTaskBundle({
        task: {
          taskId: 123,
          assigneePrincipalId: '0',
          taskProperties: {
            concreteType:
              'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
            fileViewId: 'syn999',
          },
        },
      })
      renderComponent(taskBundle, false)
      expect(screen.getByText('Unassigned')).toBeInTheDocument()
    })

    it('renders UserOrTeamBadge when assigneePrincipalId is set', () => {
      renderComponent(createMockTaskBundle(), false)
      expect(screen.getByTestId('user-or-team-badge')).toBeInTheDocument()
      expect(screen.getByTestId('user-or-team-badge').dataset.principalId).toBe(
        MOCK_CURATION_TASK_ASSIGNEE_PRINCIPAL_ID,
      )
    })
  })

  describe('edit button visibility', () => {
    it('does not render an edit button when canEdit is false', async () => {
      renderComponent(createMockTaskBundle(), false)
      await userEvent.hover(getAssigneeCellContainer())
      expect(
        screen.queryByRole('button', { name: /edit assignee/i }),
      ).not.toBeInTheDocument()
    })

    it('shows edit button on hover when canEdit is true', async () => {
      renderComponent(createMockTaskBundle(), true)

      // Before hover: edit button is not visible
      expect(
        screen.queryByRole('button', { name: /edit assignee/i }),
      ).not.toBeInTheDocument()

      await userEvent.hover(getAssigneeCellContainer())

      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: /edit assignee/i }),
        ).toBeInTheDocument()
      })
    })
  })

  describe('edit dialog', () => {
    /** Helper to open the "Set Assignee" dialog */
    async function openEditDialog(taskBundle: TaskBundle) {
      renderComponent(taskBundle, true)
      await userEvent.hover(getAssigneeCellContainer())
      await screen.findByRole('button', { name: /edit assignee/i })
      await userEvent.click(
        screen.getByRole('button', { name: /edit assignee/i }),
      )
      await screen.findByText('Set Assignee')
    }

    it('opens "Set Assignee" dialog when edit button is clicked', async () => {
      await openEditDialog(createMockTaskBundle())
      expect(screen.getByText('Set Assignee')).toBeInTheDocument()
    })

    it('does not show an active-session warning when there is no active session', async () => {
      await openEditDialog(createMockTaskBundle())
      expect(
        screen.queryByText(/active Curator session/i),
      ).not.toBeInTheDocument()
    })

    it('shows active-session warning when task has an active session', async () => {
      const taskBundleWithSession = createMockTaskBundle({
        status: {
          taskId: 123,
          executionDetails: {
            activeSessionId: 'active-session-id',
            concreteType:
              'org.sagebionetworks.repo.model.curation.execution.GridExecutionDetails',
          },
        },
      })
      await openEditDialog(taskBundleWithSession)
      expect(screen.getByText(/active Curator session/i)).toBeInTheDocument()
    })

    it('calls updateCurationTask with new assignee when Save is confirmed', async () => {
      await openEditDialog(createMockTaskBundle())

      // Simulate selecting a new user via the mocked UserSearchBox
      await userEvent.click(screen.getByTestId('user-search-box'))

      await userEvent.click(screen.getByRole('button', { name: /save/i }))

      await waitFor(() => {
        expect(mockMutateAsync).toHaveBeenCalledWith(
          expect.objectContaining({ assigneePrincipalId: 'newAssignee123' }),
        )
      })
    })

    it('does not call updateCurationTask when Cancel is clicked', async () => {
      await openEditDialog(createMockTaskBundle())

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() =>
        expect(screen.queryByText('Set Assignee')).not.toBeInTheDocument(),
      )
      expect(mockMutateAsync).not.toHaveBeenCalled()
    })
  })
})
