import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import { TaskBundle } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import { beforeEach } from 'vitest'
import MetadataTaskTableActionCell from './MetadataTaskTableActionCell'
import useOpenCuratorFromTaskButton from '../hooks/useOpenCuratorButton'

vi.mock('../hooks/useOpenCuratorButton', () => ({
  default: vi.fn(),
}))

vi.mock('./DeleteCurationTaskButton', () => ({
  default: () => <button>Delete task</button>,
}))

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)
const mockOnClick = vi.fn()

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
})
