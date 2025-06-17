import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EvaluationFinder from '../EvaluationFinder/EvaluationFinder'
import SubmissionViewScopeEditor, {
  SubmissionViewScopeEditorProps,
} from './SubmissionViewScopeEditor'

vi.mock('../EvaluationFinder/EvaluationFinder', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid={'EvaluationFinderMocked'} />),
}))

const mockEvaluationFinder = vi.mocked(EvaluationFinder)

function renderComponent(props: SubmissionViewScopeEditorProps) {
  return render(<SubmissionViewScopeEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('SubmissionViewScopeEditor tests', () => {
  it('Renders an EvaluationFinder which can modify the selection', async () => {
    const evaluationIds: string[] = []
    const onChange = vi.fn()
    renderComponent({ evaluationIds, onChange })

    await screen.findByTestId('EvaluationFinderMocked')

    await waitFor(() => {
      expect(mockEvaluationFinder).toHaveBeenLastRenderedWithProps({
        activeOnly: false,
        accessType: ACCESS_TYPE.READ_PRIVATE_SUBMISSION,
        selectedIds: evaluationIds,
        onChange: onChange,
      })
    })

    const onChangePassedToEvaluationFinder =
      mockEvaluationFinder.mock.lastCall![0].onChange

    act(() => {
      onChangePassedToEvaluationFinder(['123'])
    })

    expect(onChange).toHaveBeenLastCalledWith(['123'])
  })

  it('Shows the currently selected submissions and allows removing them', async () => {
    vi.spyOn(SynapseClient, 'getEvaluation').mockImplementation(id => {
      return Promise.resolve({
        id: id,
        name: `Evaluation ${id}`,
      })
    })

    const evaluationIds: string[] = ['123', '456']
    const onChange = vi.fn()
    renderComponent({ evaluationIds, onChange })

    await screen.findByText('Evaluation 123')
    await screen.findByLabelText('Remove Evaluation 123 from scope')

    await screen.findByText('Evaluation 456')
    const removeButton = await screen.findByLabelText(
      'Remove Evaluation 456 from scope',
    )

    // Remove '456'
    await userEvent.click(removeButton)
    await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(['123']))
  })
})
