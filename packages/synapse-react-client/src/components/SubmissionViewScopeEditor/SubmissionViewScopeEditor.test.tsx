import React from 'react'
import SubmissionViewScopeEditor, {
  SubmissionViewScopeEditorProps,
} from './SubmissionViewScopeEditor'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import EvaluationFinder from '../EvaluationFinder/EvaluationFinder'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import userEvent from '@testing-library/user-event'

jest.mock('../EvaluationFinder/EvaluationFinder', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid={'EvaluationFinderMocked'} />),
}))

const mockEvaluationFinder = jest.mocked(EvaluationFinder)

function renderComponent(props: SubmissionViewScopeEditorProps) {
  return render(<SubmissionViewScopeEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('SubmissionViewScopeEditor tests', () => {
  it('Renders an EvaluationFinder which can modify the selection', async () => {
    const evaluationIds: string[] = []
    const onChange = jest.fn()
    renderComponent({ evaluationIds, onChange })

    await screen.findByTestId('EvaluationFinderMocked')

    await waitFor(() => {
      expect(mockEvaluationFinder).toHaveBeenLastCalledWith(
        {
          activeOnly: false,
          accessType: ACCESS_TYPE.READ_PRIVATE_SUBMISSION,
          selectedIds: evaluationIds,
          onChange: onChange,
        },
        expect.anything(),
      )
    })

    const onChangePassedToEvaluationFinder =
      mockEvaluationFinder.mock.lastCall![0].onChange

    act(() => {
      onChangePassedToEvaluationFinder(['123'])
    })

    expect(onChange).toHaveBeenLastCalledWith(['123'])
  })

  it('Shows the currently selected submissions and allows removing them', async () => {
    jest.spyOn(SynapseClient, 'getEvaluation').mockImplementation(id => {
      return Promise.resolve({
        id: id,
        name: `Evaluation ${id}`,
      })
    })

    const evaluationIds: string[] = ['123', '456']
    const onChange = jest.fn()
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
