import CreateOrUpdateCurationTaskDialog from '@/features/entity/metadata-task/components/CreateOrUpdateCurationTaskDialog'
import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
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

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)
const mockCreateOrUpdateCurationTaskDialog = vi.mocked(
  CreateOrUpdateCurationTaskDialog,
)

const mockTaskBundle = createMockTaskBundle({
  projectId: 'syn123',
  dataType: 'Test Data Type',
})

const renderComponent = () =>
  render(<CurationTaskCard taskBundle={mockTaskBundle} />)

beforeEach(() => {
  vi.clearAllMocks()
  mockUseOpenCuratorFromTaskButton.mockReturnValue({
    hasPermission: true,
    isLoading: false,
    isPending: false,
    onClick: vi.fn(),
  })
})

describe('CurationTaskCard', () => {
  it('renders the task settings button', () => {
    renderComponent()
    expect(
      screen.getByRole('button', { name: /task settings/i }),
    ).toBeInTheDocument()
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
})
