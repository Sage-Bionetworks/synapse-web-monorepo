import useOpenCuratorFromTaskButton from '@/features/entity/metadata-task/hooks/useOpenCuratorButton'
import { createMockTaskBundle } from '@/mocks/curation/mockCurationTask'
import useGetEntityBundle from '@/synapse-queries/entity/useEntityBundle'
import {
  FileBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordBasedMetadataTaskPropertiesConcreteTypeEnum,
  RecordSetGenerationExecutionPropertiesConcreteTypeEnum,
  SampleSheetGenerationExecutionPropertiesConcreteTypeEnum,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router'
import { beforeEach } from 'vitest'
import CurationTaskCard from './CurationTaskCard'

vi.mock('react-router')

vi.mock('@/features/entity/metadata-task/hooks/useOpenCuratorButton', () => ({
  default: vi.fn(),
}))

vi.mock('./UserOrTeamChip', () => ({
  default: () => null,
}))

vi.mock('./ExecutableTaskCard', () => ({
  default: () => <div data-testid="executable-task-card" />,
}))

vi.mock('@/synapse-queries/entity/useEntityBundle', () => ({
  default: vi.fn(),
}))

const mockUseOpenCuratorFromTaskButton = vi.mocked(useOpenCuratorFromTaskButton)
const mockUseGetEntityBundle = vi.mocked(useGetEntityBundle)
const mockNavigate = vi.fn()

const mockTaskBundle = createMockTaskBundle({
  projectId: 'syn123',
  dataType: 'Test Data Type',
})

const renderComponent = (taskBundle: TaskBundle = mockTaskBundle) =>
  render(<CurationTaskCard taskBundle={taskBundle} />)

beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(useNavigate).mockReturnValue(mockNavigate)
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

  it('navigates to the edit route for the task when the settings button is clicked', async () => {
    const user = userEvent.setup()
    renderComponent()

    await user.click(screen.getByRole('button', { name: /task settings/i }))

    expect(mockNavigate).toHaveBeenCalledWith(
      `edit/${mockTaskBundle.task!.taskId}`,
    )
  })

  describe('task type chip', () => {
    const curateTypes = [
      FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties,
      RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties,
    ]

    it.each(curateTypes)(
      'shows the "Curate Data" chip for curate type %s',
      concreteType => {
        renderComponent(
          createMockTaskBundle({
            projectId: 'syn123',
            taskProperties: { concreteType } as any,
          }),
        )
        expect(screen.getByText('Curate Data')).toBeInTheDocument()
      },
    )
  })

  describe('dispatch by task type', () => {
    const computeTypes = [
      SampleSheetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_SampleSheetGenerationExecutionProperties,
      RecordSetGenerationExecutionPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_execution_RecordSetGenerationExecutionProperties,
    ]

    it.each(computeTypes)(
      'renders the executable task card for compute type %s',
      concreteType => {
        renderComponent(
          createMockTaskBundle({
            projectId: 'syn123',
            taskProperties: { concreteType } as any,
          }),
        )
        expect(screen.getByTestId('executable-task-card')).toBeInTheDocument()
      },
    )

    it.each([
      FileBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_FileBasedMetadataTaskProperties,
      RecordBasedMetadataTaskPropertiesConcreteTypeEnum.org_sagebionetworks_repo_model_curation_metadata_RecordBasedMetadataTaskProperties,
    ])('renders the grid task card for curate type %s', concreteType => {
      renderComponent(
        createMockTaskBundle({
          projectId: 'syn123',
          taskProperties: { concreteType } as any,
        }),
      )
      expect(
        screen.getByRole('button', { name: /open curator/i }),
      ).toBeInTheDocument()
    })
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
