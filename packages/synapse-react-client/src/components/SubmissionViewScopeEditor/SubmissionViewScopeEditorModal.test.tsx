import mockTableEntityData, {
  mockTableEntity,
} from '@/mocks/entity/mockTableEntity'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ACCESS_TYPE,
  Entity,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EvaluationFinder from '../EvaluationFinder/EvaluationFinder'
import SubmissionViewScopeEditorModal, {
  SubmissionViewScopeEditorModalProps,
} from './SubmissionViewScopeEditorModal'

jest.mock('../EvaluationFinder/EvaluationFinder', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid={'EvaluationFinderMocked'} />),
}))

const mockEvaluationFinder = jest.mocked(EvaluationFinder)
const mockUpdateEntity = jest.spyOn(SynapseClient, 'updateEntity')
const mockTableEntityInstance = mockTableEntityData.entity

function renderComponent(props: SubmissionViewScopeEditorModalProps) {
  return render(<SubmissionViewScopeEditorModal {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(props: SubmissionViewScopeEditorModalProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
  return {
    component,
    user,
    saveButton,
    cancelButton,
  }
}

describe('SubmissionViewScopeEditorModal tests', () => {
  const mockOnCancel = jest.fn()
  const mockOnUpdate = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
      ...mockTableEntity,
      scopeIds: ['123', '456'],
      concreteType: SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
    } as Entity)
    jest.spyOn(SynapseClient, 'getEvaluation').mockImplementation(id => {
      return Promise.resolve({
        id: id,
        name: `Evaluation ${id}`,
      })
    })
  })

  it('displays the correct scope editor which can modify selection', async () => {
    const { saveButton, cancelButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    await screen.findByTestId('EvaluationFinderMocked')

    await waitFor(() => {
      expect(mockEvaluationFinder).toHaveBeenLastCalledWith(
        {
          activeOnly: false,
          accessType: ACCESS_TYPE.READ_PRIVATE_SUBMISSION,
          selectedIds: ['123', '456'],
          onChange: expect.anything(),
        },
        undefined,
      )
    })

    expect(await screen.findByRole('dialog')).toBeVisible()
    expect(await screen.findByRole('heading')).toBeVisible()
    expect(saveButton).toBeVisible()
    expect(cancelButton).toBeVisible()

    await screen.findByText('Evaluation 123')
    await screen.findByLabelText('Remove Evaluation 123 from scope')

    await screen.findByText('Evaluation 456')
    await screen.findByLabelText('Remove Evaluation 456 from scope')

    expect(screen.queryByText('Evaluation 789')).not.toBeInTheDocument()

    const onChangePassedToEvaluationFinder =
      mockEvaluationFinder.mock.lastCall![0].onChange

    act(() => {
      onChangePassedToEvaluationFinder(['789'])
    })

    await screen.findByText('Evaluation 789')
    await screen.findByLabelText('Remove Evaluation 789 from scope')
  })

  it('display error for response returned by update call', async () => {
    const { user, saveButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    const errorMessage = 'Error with scope'
    mockUpdateEntity.mockRejectedValue(
      new SynapseClientError(
        404,
        'Error with scope',
        expect.getState().currentTestName!,
      ),
    )

    await waitFor(() => {
      expect(saveButton).not.toBeDisabled()
    })
    await user.click(saveButton)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorMessage)

    expect(mockOnUpdate).not.toHaveBeenCalled()
  })

  it('validate onCancel is correctly called', async () => {
    const { user, cancelButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    await waitFor(() => expect(cancelButton).not.toBeDisabled())
    await user.click(cancelButton)
    expect(mockOnCancel).toHaveBeenCalled()
  })
  it('successfully submit new scope and call the onUpdate callback', async () => {
    const { user, saveButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    const newScopeIds = ['123', '456', '789']

    await waitFor(() => {
      expect(mockEvaluationFinder).toHaveBeenLastCalledWith(
        {
          activeOnly: false,
          accessType: ACCESS_TYPE.READ_PRIVATE_SUBMISSION,
          selectedIds: ['123', '456'],
          onChange: expect.anything(),
        },
        undefined,
      )
    })
    const mockSubmissionView = {
      ...mockTableEntityInstance,
      scopeIds: newScopeIds,
    }

    mockUpdateEntity.mockResolvedValue(mockSubmissionView)

    await screen.findByText('Evaluation 123')
    await screen.findByLabelText('Remove Evaluation 123 from scope')

    await screen.findByText('Evaluation 456')
    await screen.findByLabelText('Remove Evaluation 456 from scope')

    expect(screen.queryByText('Evaluation 789')).not.toBeInTheDocument()

    const onChangePassedToEvaluationFinder =
      mockEvaluationFinder.mock.lastCall![0].onChange

    act(() => {
      onChangePassedToEvaluationFinder(newScopeIds)
    })

    await screen.findByText('Evaluation 789')
    await screen.findByLabelText('Remove Evaluation 789 from scope')

    await user.click(saveButton)

    await waitFor(() => {
      expect(mockUpdateEntity).toHaveBeenCalledWith(
        expect.objectContaining({
          scopeIds: newScopeIds,
        }),
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnUpdate).toHaveBeenCalled()
    })
  })
})
