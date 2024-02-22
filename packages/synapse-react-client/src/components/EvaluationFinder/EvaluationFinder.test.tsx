import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import EvaluationFinder, { EvaluationFinderProps } from './EvaluationFinder'
import { Evaluation, PaginatedResults } from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

function renderComponent(props: EvaluationFinderProps) {
  return render(<EvaluationFinder {...props} />, { wrapper: createWrapper() })
}

const onChange = jest.fn()
const selectedIds = ['2']

const mockPage1: PaginatedResults<Evaluation> = {
  results: [
    { id: '1', name: 'Eval 1', submissionInstructionsMessage: '_Markdown_' },
    { id: '2', name: 'Eval 2' },
  ],
  totalNumberOfResults: 3,
}
const mockPage2: PaginatedResults<Evaluation> = {
  results: [{ id: '3', name: 'Eval 3' }],
  totalNumberOfResults: 3,
}

jest.spyOn(SynapseClient, 'getEvaluations').mockImplementation(params => {
  if (params == null || params.offset == null || params.offset === 0) {
    return Promise.resolve(mockPage1)
  } else {
    return Promise.resolve(mockPage2)
  }
})

describe('EvaluationFinder', () => {
  it('fetches and shows pages of evaluations', async () => {
    renderComponent({ onChange, selectedIds })

    // The first page is visible
    let evaluationsToSelect = await screen.findAllByRole('checkbox')
    expect(evaluationsToSelect).toHaveLength(2)

    // Verify that the selection is correct
    expect(evaluationsToSelect[0]).not.toBeChecked()
    expect(evaluationsToSelect[1]).toBeChecked()

    const nextPageButton = await screen.findByRole('button', {
      name: 'Next Page',
    })

    await waitFor(() => expect(nextPageButton).not.toBeDisabled())
    await userEvent.click(nextPageButton)

    // Page 2 will be shown
    await waitFor(() => {
      evaluationsToSelect = screen.getAllByRole('checkbox')
      expect(evaluationsToSelect).toHaveLength(1)
      expect(nextPageButton).toBeDisabled()
    })
    // Go back to page 1
    const previousPageButton = await screen.findByRole('button', {
      name: 'Previous Page',
    })
    await userEvent.click(previousPageButton)
    await waitFor(() => expect(screen.getAllByRole('checkbox')).toHaveLength(2))

    evaluationsToSelect = await screen.findAllByRole('checkbox')
    expect(evaluationsToSelect).toHaveLength(2)

    // Click the first evaluation and verify that the onChange callback is called
    await userEvent.click(evaluationsToSelect[0])
    expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['1', '2']))
  })
})
