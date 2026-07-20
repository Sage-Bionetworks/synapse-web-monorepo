import CreateOrUpdateCurationTaskDialog from '@/features/entity/metadata-task/components/CreateOrUpdateCurationTaskDialog'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import { CurationTask, TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'
import CurationTaskCard from './CurationTaskCard'

vi.mock('@/features/entity/metadata-task/hooks/useOpenCuratorButton', () => ({
  default: vi.fn(),
}))

vi.mock(
  '@/features/entity/metadata-task/components/CreateOrUpdateCurationTaskDialog',
  () => ({
    default: vi.fn(
      ({
        open,
        onCancel,
        onSuccess,
        onDeleteSuccess,
      }: {
        open: boolean
        onCancel: () => void
        onSuccess: (task: CurationTask) => void
        onDeleteSuccess: () => void
      }) =>
        open ? (
          <div data-testid="settings-dialog">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={() => onSuccess({} as CurationTask)}>Save</button>
            <button onClick={onDeleteSuccess}>Delete</button>
          </div>
        ) : null,
    ),
  }),
)

vi.mock('./UserOrTeamChip', () => ({
  default: () => null,
}))

vi.mock('@/synapse-queries/entity/useEntityBundle', () => ({
  default: vi.fn(),
}))

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)
const mockCreateOrUpdateCurationTaskDialog = vi.mocked(
  CreateOrUpdateCurationTaskDialog,
)
const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)

const mockTaskBundle = createMockTaskBundle({
  projectId: 'syn123',
  dataType: 'Test Data Type',
})

const renderComponent = (taskBundle: TaskBundle = mockTaskBundle) =>
  render(<CurationTaskCard taskBundle={taskBundle} />)

beforeEach(() => {
  vi.clearAllMocks()
  mockUseOpenCuratorFromTaskButton.mockReturnValue({
    hasPermission: true,
    isLoading: false,
    isPending: false,
    onClick: vi.fn(),
  })
  mockUseGetEntityBundle.mockReturnValue({
    data: { permissions: { canEdit: true } },
  } as unknown as ReturnType<typeof useGetEntityBundle>)
})

describe('CurationTaskCard', () => {
  it('renders the task settings button when the user can edit', () => {
    renderComponent()
    expect(
      screen.getByRole('button', { name: /task settings/i }),
    ).toBeInTheDocument()
  })

  it('does not render the task settings button when the user cannot edit', () => {
    mockUseGetEntityBundle.mockReturnValue({
      data: { permissions: { canEdit: false } },
    } as unknown as ReturnType<typeof useGetEntityBundle>)
    renderComponent()
    expect(
      screen.queryByRole('button', { name: /task settings/i }),
    ).not.toBeInTheDocument()
  })

  it('does not show the settings dialog on initial render', () => {
    renderComponent()
    expect(screen.queryByTestId('settings-dialog')).not.toBeInTheDocument()
  })

  it('opens the settings dialog when the settings button is clicked', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole('button', { name: /task settings/i }))

    expect(screen.getByTestId('settings-dialog')).toBeInTheDocument()
  })

  it('passes the task to the dialog so it opens in edit mode', () => {
    renderComponent()

    const props = mockCreateOrUpdateCurationTaskDialog.mock.calls[0][0]
    expect(props.task).toEqual(mockTaskBundle.task)
  })

  it('passes the projectId from the task to the dialog', () => {
    renderComponent()

    const props = mockCreateOrUpdateCurationTaskDialog.mock.calls[0][0]
    expect(props.projectId).toBe('syn123')
  })

  it('closes the settings dialog when onCancel is called', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole('button', { name: /task settings/i }))
    expect(screen.getByTestId('settings-dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /cancel/i }))
    expect(screen.queryByTestId('settings-dialog')).not.toBeInTheDocument()
  })

  it('closes the settings dialog when onSuccess is called', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole('button', { name: /task settings/i }))
    await user.click(screen.getByRole('button', { name: /save/i }))

    expect(screen.queryByTestId('settings-dialog')).not.toBeInTheDocument()
  })

  it('closes the settings dialog when onDeleteSuccess is called', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole('button', { name: /task settings/i }))
    await user.click(screen.getByRole('button', { name: /delete/i }))

    expect(screen.queryByTestId('settings-dialog')).not.toBeInTheDocument()
  })

  describe('status chip', () => {
    it('shows "Not Started" when status state is NOT_STARTED', () => {
      renderComponent(
        createMockTaskBundle({ projectId: 'syn123' }, { state: 'NOT_STARTED' }),
      )
      expect(screen.getByText('Not Started')).toBeInTheDocument()
    })

    it('shows "In Progress" when status state is IN_PROGRESS', () => {
      renderComponent(
        createMockTaskBundle({ projectId: 'syn123' }, { state: 'IN_PROGRESS' }),
      )
      expect(screen.getByText('In Progress')).toBeInTheDocument()
    })

    it('shows "Completed" when status state is COMPLETED', () => {
      renderComponent(
        createMockTaskBundle({ projectId: 'syn123' }, { state: 'COMPLETED' }),
      )
      expect(screen.getByText('Completed')).toBeInTheDocument()
    })

    it('shows "Canceled" when status state is CANCELED', () => {
      renderComponent(
        createMockTaskBundle({ projectId: 'syn123' }, { state: 'CANCELED' }),
      )
      expect(screen.getByText('Canceled')).toBeInTheDocument()
    })

    it('shows no status chip when state is undefined', () => {
      renderComponent(createMockTaskBundle({ projectId: 'syn123' }))
      expect(
        screen.queryByText(/not started|in progress|completed|canceled/i),
      ).not.toBeInTheDocument()
    })
  })

  describe('expanded state', () => {
    it('hides instructions by default', () => {
      const taskWithInstructions = createMockTaskBundle({
        projectId: 'syn123',
        dataType: 'Test Data Type',
        instructions: 'Test instructions',
      })
      renderComponent(taskWithInstructions)
      const instructions = screen.queryByText('Test instructions')
      expect(instructions).not.toBeVisible()
    })

    it('shows instructions when title is clicked', async () => {
      const user = userEvent.setup()
      const taskWithInstructions = createMockTaskBundle({
        projectId: 'syn123',
        dataType: 'Test Data Type',
        instructions: 'Test instructions',
      })
      renderComponent(taskWithInstructions)

      const title = screen.getByText('Test Data Type')
      await user.click(title)

      const instructions = screen.getByText('Test instructions')
      expect(instructions).toBeVisible()
    })

    it('toggles expanded state when title is clicked', async () => {
      const user = userEvent.setup()
      const taskWithInstructions = createMockTaskBundle({
        projectId: 'syn123',
        dataType: 'Test Data Type',
        instructions: 'Test instructions',
      })
      renderComponent(taskWithInstructions)

      const title = screen.getByText('Test Data Type')
      const instructions = screen.getByText('Test instructions')

      // Initially collapsed
      expect(instructions).not.toBeVisible()

      // Click to expand
      await user.click(title)
      expect(instructions).toBeVisible()

      // Click to collapse
      await user.click(title)
      await waitFor(() => {
        expect(instructions).not.toBeVisible()
      })
    })
  })
})
