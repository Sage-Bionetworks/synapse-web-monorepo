import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useDeleteCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DeleteCurationTaskButton from './DeleteCurationTaskButton'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useDeleteCurationTask: vi.fn(),
}))

const mockUseDeleteCurationTask = vi.mocked(useDeleteCurationTask)

const { mock: deleteMutationMock, mockMutate } = getUseMutationMock<
  void,
  SynapseClientError,
  number
>()

const renderComponent = (taskBundle: TaskBundle) =>
  render(<DeleteCurationTaskButton taskBundle={taskBundle} />)

beforeEach(() => {
  vi.clearAllMocks()
  mockUseDeleteCurationTask.mockImplementation(deleteMutationMock)
})

async function openDialog(taskBundle: TaskBundle) {
  renderComponent(taskBundle)
  await userEvent.click(screen.getByRole('button', { name: /delete task/i }))
  await screen.findByText('Delete Task')
}

describe('DeleteCurationTaskButton', () => {
  it('renders a delete button with a tooltip', () => {
    renderComponent(createMockTaskBundle())
    expect(
      screen.getByRole('button', { name: /delete task/i }),
    ).toBeInTheDocument()
  })

  it('opens the confirmation dialog when the button is clicked', async () => {
    await openDialog(createMockTaskBundle())
    expect(screen.getByText('Delete Task')).toBeInTheDocument()
  })

  it('shows a generic grid-session warning when there is no active session', async () => {
    await openDialog(createMockTaskBundle())
    expect(
      screen.getByText(/any grid sessions associated with this task/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/active Curator session/i),
    ).not.toBeInTheDocument()
  })

  it('shows an active-session warning when the task has an active session', async () => {
    const taskBundleWithSession = createMockTaskBundle({
      status: {
        taskId: MOCK_CURATION_TASK_ID,
        executionDetails: {
          activeSessionId: 'active-session-id',
          concreteType:
            'org.sagebionetworks.repo.model.curation.execution.GridExecutionDetails',
        },
      },
    })
    await openDialog(taskBundleWithSession)
    expect(screen.getByText(/active Curator session/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/any grid sessions associated with this task/i),
    ).not.toBeInTheDocument()
  })

  it('calls deleteCurationTask with the task ID when Delete is confirmed', async () => {
    await openDialog(createMockTaskBundle())
    await userEvent.click(screen.getByRole('button', { name: /^delete$/i }))
    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
    })
  })

  it('does not call deleteCurationTask when Cancel is clicked', async () => {
    await openDialog(createMockTaskBundle())
    await userEvent.click(screen.getByRole('button', { name: /cancel/i }))
    await waitFor(() =>
      expect(screen.queryByText('Delete Task')).not.toBeInTheDocument(),
    )
    expect(mockMutate).not.toHaveBeenCalled()
  })
})
