import {
  createMockTaskBundle,
  MOCK_CURATION_TASK_ID,
} from '@/mocks/curation/mockCurationTask'
import { useDeleteCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'
import MetadataTaskTableActionCell from './MetadataTaskTableActionCell'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'

vi.mock('../hooks/useOpenCuratorButton', () => ({
  default: vi.fn(),
}))

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useDeleteCurationTask: vi.fn(),
}))

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)
const mockUseDeleteCurationTask = vi.mocked(useDeleteCurationTask)

const mockOnClick = vi.fn()
const mockMutate = vi.fn()

const renderComponent = (
  overrides: Partial<{ taskBundle: TaskBundle; canEdit: boolean }> = {},
) =>
  render(
    <MetadataTaskTableActionCell
      taskBundle={overrides.taskBundle ?? createMockTaskBundle()}
      canEdit={overrides.canEdit ?? false}
    />,
  )

beforeEach(() => {
  vi.clearAllMocks()
  mockUseOpenCuratorFromTaskButton.mockReturnValue({
    hasPermission: true,
    isLoading: false,
    isPending: false,
    onClick: mockOnClick,
  })
  mockUseDeleteCurationTask.mockReturnValue({
    mutate: mockMutate,
    isPending: false,
  } as any)
})

describe('MetadataTaskTableActionCell', () => {
  describe('Open Curator button', () => {
    it('disables the Open Curator button while checking READ access', () => {
      mockUseOpenCuratorFromTaskButton.mockReturnValue({
        hasPermission: undefined,
        isLoading: true,
        isPending: false,
        onClick: mockOnClick,
      })

      renderComponent()

      expect(
        screen.getByRole('button', { name: /open curator/i }),
      ).toBeDisabled()
    })

    it('disables the Open Curator button with no READ access on source entity', () => {
      mockUseOpenCuratorFromTaskButton.mockReturnValue({
        hasPermission: false,
        isLoading: false,
        isPending: false,
        onClick: mockOnClick,
      })

      renderComponent()

      expect(
        screen.getByRole('button', { name: /open curator/i }),
      ).toBeDisabled()
    })

    it('disables the Open Curator button while opening the grid session', () => {
      mockUseOpenCuratorFromTaskButton.mockReturnValue({
        hasPermission: true,
        isLoading: false,
        isPending: true,
        onClick: mockOnClick,
      })

      renderComponent()

      expect(
        screen.getByRole('button', { name: /open curator/i }),
      ).toBeDisabled()
    })
  })

  describe('delete button', () => {
    it('does not render a delete button when canEdit is false', () => {
      renderComponent({ canEdit: false })
      expect(
        screen.queryByRole('button', { name: /delete task/i }),
      ).not.toBeInTheDocument()
    })

    it('renders a delete button when canEdit is true', () => {
      renderComponent({ canEdit: true })
      expect(
        screen.getByRole('button', { name: /delete task/i }),
      ).toBeInTheDocument()
    })
  })

  describe('delete dialog', () => {
    async function openDeleteDialog(taskBundle: TaskBundle) {
      render(
        <MetadataTaskTableActionCell taskBundle={taskBundle} canEdit={true} />,
      )
      await userEvent.click(
        screen.getByRole('button', { name: /delete task/i }),
      )
      await screen.findByText('Delete Task')
    }

    it('opens "Delete Task" dialog when delete button is clicked', async () => {
      await openDeleteDialog(createMockTaskBundle())
      expect(screen.getByText('Delete Task')).toBeInTheDocument()
    })

    it('shows a generic grid-session warning when there is no active session', async () => {
      await openDeleteDialog(createMockTaskBundle())
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
      await openDeleteDialog(taskBundleWithSession)
      expect(screen.getByText(/active Curator session/i)).toBeInTheDocument()
      expect(
        screen.queryByText(/any grid sessions associated with this task/i),
      ).not.toBeInTheDocument()
    })

    it('calls deleteCurationTask with the task ID when Delete is confirmed', async () => {
      await openDeleteDialog(createMockTaskBundle())

      await userEvent.click(screen.getByRole('button', { name: /^delete$/i }))

      await waitFor(() => {
        expect(mockMutate).toHaveBeenCalledWith(MOCK_CURATION_TASK_ID)
      })
    })

    it('does not call deleteCurationTask when Cancel is clicked', async () => {
      await openDeleteDialog(createMockTaskBundle())

      await userEvent.click(screen.getByRole('button', { name: /cancel/i }))

      await waitFor(() =>
        expect(screen.queryByText('Delete Task')).not.toBeInTheDocument(),
      )
      expect(mockMutate).not.toHaveBeenCalled()
    })
  })
})
