import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router'
import { beforeEach } from 'vitest'
import MetadataTaskTableActionCell from './MetadataTaskTableActionCell'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'

vi.mock('react-router')

vi.mock('../hooks/useOpenCuratorButton', () => ({
  default: vi.fn(),
}))

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)

const mockOnClick = vi.fn()
const mockNavigate = vi.fn()

const mockTaskBundle = createMockTaskBundle()

const renderComponent = (
  overrides: Partial<{ taskBundle: TaskBundle; canEdit: boolean }> = {},
) =>
  render(
    <MetadataTaskTableActionCell
      taskBundle={overrides.taskBundle ?? mockTaskBundle}
      canEdit={overrides.canEdit ?? false}
    />,
  )

beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(useNavigate).mockReturnValue(mockNavigate)
  mockUseOpenCuratorFromTaskButton.mockReturnValue({
    hasPermission: true,
    isLoading: false,
    isPending: false,
    onClick: mockOnClick,
  })
})

describe('MetadataTaskTableActionCell', () => {
  it('does not render the Edit button when the user cannot edit', () => {
    renderComponent({ canEdit: false })

    expect(
      screen.queryByRole('button', { name: /^edit$/i }),
    ).not.toBeInTheDocument()
  })

  it('renders the Edit button when the user can edit', () => {
    renderComponent({ canEdit: true })

    expect(screen.getByRole('button', { name: /^edit$/i })).toBeInTheDocument()
  })

  it('navigates to the edit route for the task when Edit is clicked', async () => {
    const user = userEvent.setup()
    renderComponent({ canEdit: true })

    await user.click(screen.getByRole('button', { name: /^edit$/i }))

    expect(mockNavigate).toHaveBeenCalledWith(
      `edit/${mockTaskBundle.task!.taskId}`,
    )
  })

  it('disables the Open Curator button while checking READ access', () => {
    mockUseOpenCuratorFromTaskButton.mockReturnValue({
      hasPermission: undefined,
      isLoading: true,
      isPending: false,
      onClick: mockOnClick,
    })

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('disables the Open Curator button with no READ access on source entity', () => {
    mockUseOpenCuratorFromTaskButton.mockReturnValue({
      hasPermission: false,
      isLoading: false,
      isPending: false,
      onClick: mockOnClick,
    })

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })

  it('disables the Open Curator button while opening the grid session', () => {
    mockUseOpenCuratorFromTaskButton.mockReturnValue({
      hasPermission: true,
      isLoading: false,
      isPending: true,
      onClick: mockOnClick,
    })

    renderComponent()

    expect(screen.getByRole('button', { name: /open curator/i })).toBeDisabled()
  })
})
