import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { mockEvaluationQueue } from '../../mocks/entity/mockEvaluationQueue'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import AvailableEvaluationQueueList, {
  AvailableEvaluationQueueListProps,
} from './AvailableEvaluationQueueList'

const onChangeSelectedEvaluation = jest.fn()
const secondEvaluation = {
  ...mockEvaluationQueue,
  id: '12345',
  name: 'another evaluation queue',
}

async function chooseAutocompleteOption(
  el: HTMLElement,
  option: string,
  user: ReturnType<(typeof userEvent)['setup']>,
) {
  await user.clear(el)
  await user.type(el, option)
  await user.click(screen.getByRole('option', { name: option }))
}

const defaultProps: AvailableEvaluationQueueListProps = {
  evaluations: [],
  isSelectable: true,
  onChangeSelectedEvaluation: onChangeSelectedEvaluation,
}

function renderComponent(props: AvailableEvaluationQueueListProps) {
  return render(<AvailableEvaluationQueueList {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: AvailableEvaluationQueueListProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const selectInput = screen.queryByLabelText('Selected Evaluation Queue')
  const staticListHeading = screen.queryByText('Available Evaluation Queues:')
  return {
    component,
    user,
    selectInput,
    staticListHeading,
  }
}

describe('AvailableEvaluationQueueList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('handles 0 available evaluations', () => {
    const { selectInput } = setUp(defaultProps)

    screen.getByText('No evaluations found')
    expect(selectInput).toBeNull()
  })

  it('handles 1 available evaluation', () => {
    const { selectInput, staticListHeading } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue],
    })

    screen.getByText(mockEvaluationQueue.name!)
    expect(selectInput).toBeNull()
    expect(staticListHeading).toBeNull()

    expect(onChangeSelectedEvaluation).toHaveBeenCalledTimes(1)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledWith(mockEvaluationQueue)
  })

  it('handles 1 available evaluation that is not selectable', () => {
    const { selectInput, staticListHeading } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue],
      isSelectable: false,
    })

    screen.getByText(mockEvaluationQueue.name!)
    expect(staticListHeading).toBeNull()
    expect(selectInput).toBeNull()
    expect(onChangeSelectedEvaluation).not.toHaveBeenCalled()
  })

  it('handles >1 available evaluations', async () => {
    const { selectInput, staticListHeading, user } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue, secondEvaluation],
    })

    expect(selectInput).not.toBeNull()
    expect(staticListHeading).toBeVisible()
    expect(screen.getByText(mockEvaluationQueue.name!)).toBeVisible()
    expect(screen.getByText(secondEvaluation.name)).toBeVisible()

    await chooseAutocompleteOption(selectInput!, secondEvaluation.name, user)

    expect(selectInput).toHaveValue(secondEvaluation.name)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledTimes(1)
    expect(onChangeSelectedEvaluation).toHaveBeenCalledWith(secondEvaluation)
  })

  it('handles >1 available evaluations that are not selectable', async () => {
    const { selectInput, staticListHeading } = setUp({
      ...defaultProps,
      evaluations: [mockEvaluationQueue, secondEvaluation],
      isSelectable: false,
    })

    expect(selectInput).toBeNull()

    expect(staticListHeading).toBeVisible()
    expect(screen.getByText(mockEvaluationQueue.name!)).toBeVisible()
    expect(screen.getByText(secondEvaluation.name)).toBeVisible()

    expect(onChangeSelectedEvaluation).not.toHaveBeenCalled()
  })
})
