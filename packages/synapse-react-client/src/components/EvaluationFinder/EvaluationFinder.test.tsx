import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { Evaluation, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EvaluationFinder, { EvaluationFinderProps } from './EvaluationFinder'

function renderComponent(props: EvaluationFinderProps) {
  return render(<EvaluationFinder {...props} />, { wrapper: createWrapper() })
}

const onChange = vi.fn()
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

vi.spyOn(SynapseClient, 'getEvaluations').mockImplementation(params => {
  if (params == null || params.offset == null || params.offset === 0) {
    return Promise.resolve(mockPage1)
  } else {
    return Promise.resolve(mockPage2)
  }
})

describe('EvaluationFinder', () => {
  it('fetches and shows all pages of evaluations', async () => {
    renderComponent({ onChange, selectedIds })

    // Wait for the first page to be visible
    let evaluationsToSelect = await screen.findAllByRole('checkbox')
    expect(evaluationsToSelect).toHaveLength(2)

    // Verify that the selection is correct
    expect(evaluationsToSelect[0]).not.toBeChecked()
    expect(evaluationsToSelect[1]).toBeChecked()

    // Wait for the second page to be automatically fetched and displayed
    await waitFor(
      () => {
        evaluationsToSelect = screen.getAllByRole('checkbox')
        expect(evaluationsToSelect).toHaveLength(3)
      },
      { timeout: 3000 },
    )

    // All evaluations from both pages should now be visible
    expect(evaluationsToSelect).toHaveLength(3)

    // Verify the selection is still correct
    expect(evaluationsToSelect[0]).not.toBeChecked()
    expect(evaluationsToSelect[1]).toBeChecked()
    expect(evaluationsToSelect[2]).not.toBeChecked()

    // Click the first evaluation and verify that the onChange callback is called
    await userEvent.click(evaluationsToSelect[0])
    expect(onChange).toHaveBeenCalledWith(expect.arrayContaining(['1', '2']))

    // Test the search filter
    const searchInput = screen.getByPlaceholderText('Search Evaluations')
    await userEvent.type(searchInput, 'Eval 1')

    // Only one evaluation should be visible after filtering
    await waitFor(() => {
      evaluationsToSelect = screen.getAllByRole('checkbox')
      expect(evaluationsToSelect).toHaveLength(1)
    })

    // Clear the search
    await userEvent.clear(searchInput)

    // All evaluations should be visible again
    await waitFor(() => {
      evaluationsToSelect = screen.getAllByRole('checkbox')
      expect(evaluationsToSelect).toHaveLength(3)
    })
  })
})
